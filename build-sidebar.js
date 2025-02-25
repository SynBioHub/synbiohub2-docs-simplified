const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');

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
    
    // Create category name without the number
    const category = categoryParts.join('_')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    // Get ordering number (default to 999 if not a number)
    const order = parseInt(orderNum) || 999;

    // Get title from filename
    const title = path.basename(filePath, '.md')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title,
        path: path.relative(process.cwd(), filePath),
        category,
        order,
        weight: typeof data.weight === 'number' ? data.weight : 999
    };
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

        console.log('Successfully generated sidebar.json');
    } catch (error) {
        console.error('Error building sidebar:', error);
        process.exit(1);
    }
}

buildSidebar();