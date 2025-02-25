const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

// Helper function to convert string to title case while preserving existing uppercase
function toTitleCase(str) {
    return str.split(/[\s-]/).map(word => {
        // If word is already uppercase, preserve it
        if (word === word.toUpperCase()) {
            return word;
        }
        // Special cases
        if (word.toLowerCase() === 'api') {
            return 'API';
        }
        // For normal words, capitalize first letter only if not already uppercase
        const firstChar = word.charAt(0);
        const rest = word.slice(1);
        return (firstChar === firstChar.toUpperCase() ? firstChar : firstChar.toUpperCase()) 
            + (rest === rest.toUpperCase() ? rest : rest.toLowerCase());
    }).join(' ');
}

async function scanDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            const subFiles = await scanDirectory(fullPath);
            files.push(...subFiles);
        } else if (entry.name.endsWith('.md')) {
            files.push(fullPath);
        }
    }

    return files;
}

async function getFileMetadata(filePath) {
    const content = await fs.readFile(filePath, 'utf8');
    const { data } = matter(content);
    
    // Skip home.md and hidden files
    if (data.hidden || path.basename(filePath) === 'home.md') {
        return null;
    }

    // Get category from parent folder name and extract order number
    const folderName = path.basename(path.dirname(filePath));
    const [orderNum, ...categoryParts] = folderName.split('_');
    
    // Create category name without the number and properly title case it
    const category = categoryParts.join(' ')
        .split('-')
        .map(toTitleCase)
        .join(' ');

    // Get ordering number (default to 999 if not a number)
    const order = parseInt(orderNum) || 999;

    // Get title from filename and properly title case it
    const title = toTitleCase(path.basename(filePath, '.md'));

    return {
        title,
        path: path.relative(process.cwd(), filePath),
        category: toTitleCase(category),
        order,
        weight: typeof data.weight === 'number' ? data.weight : 999
    };
}

async function generateSitemap(markdownFiles) {
    const baseUrl = 'https://synb-pages.peterhindes.com/';
    // Use current date in YYYY-MM-DD format
    const currentDate = new Date().toLocaleDateString('en-CA'); // Gets date in YYYY-MM-DD format
    
    const xmlItems = markdownFiles.map(file => {
        const relPath = path.relative(process.cwd(), file)
            .replace(/\.md$/, '')
            .replace(/\\/g, '/')
            .split('/')
            .map(segment => encodeURIComponent(segment))
            .join('/');
        
        const urlPath = `${baseUrl}#${relPath}`;
        
        return `  <url>
    <loc>${urlPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`;
    });

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems.join('\n')}
</urlset>`;

    await fs.writeFile('sitemap.xml', xmlContent, 'utf8');
}

async function buildSidebar() {
    try {
        const articlesDir = path.join(process.cwd(), 'articles');
        const markdownFiles = await scanDirectory(articlesDir);
        
        const fileMetadata = (await Promise.all(
            markdownFiles.map(file => getFileMetadata(file))
        )).filter(meta => meta !== null);

        // Group by category
        const groupedFiles = fileMetadata.reduce((acc, meta) => {
            if (!acc[meta.category]) {
                acc[meta.category] = {
                    order: meta.order,
                    items: []
                };
            }
            acc[meta.category].items.push(meta);
            return acc;
        }, {});

        // Sort categories by order number and items within categories by weight
        const sidebar = {
            sections: Object.entries(groupedFiles)
                .sort((a, b) => a[1].order - b[1].order)
                .map(([category, { items }]) => ({
                    title: category,
                    items: items
                        .sort((a, b) => a.weight - b.weight)
                        .map(({ title, path, weight }) => ({ title, path, weight }))
                }))
        };

        // Write the sidebar.json file
        await fs.writeFile(
            'sidebar.json',
            JSON.stringify(sidebar, null, 2),
            'utf8'
        );

        // Generate XML sitemap
        await generateSitemap(markdownFiles);

        console.log('Successfully generated sidebar.json and sitemap.xml');
    } catch (error) {
        console.error('Error building sidebar:', error);
        process.exit(1);
    }
}

buildSidebar();