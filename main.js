// Initialize marked for markdown rendering
marked.setOptions({
    highlight: function(code) {
        return code;
    }
});

// Handle hash-based routing
function handleRoute() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        loadContent(decodeURIComponent(hash)).then(() => {
            // Ensure complete scroll to top accounting for fixed header and padding
            window.scrollTo({
                top: 0,
                behavior: 'instant'
            });
            const content = document.getElementById('content');
            if (content) {
                content.scrollTop = 0;
                // Ensure parent containers are also scrolled
                content.parentElement?.scrollTo(0, 0);
            }
        });
    } else {
        loadContent('articles/home.md');
    }
}

// Load and render sidebar
async function loadSidebar() {
    try {
        const response = await fetch('sidebar.json');
        const data = await response.json();
        const sidebarContent = document.querySelector('.sidebar-content');
        const sidebar = document.getElementById('sidebar');
        const container = document.querySelector('.container');
        
        data.sections.forEach(section => {
            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = section.title;
            sectionTitle.style.marginTop = '1rem';
            sidebarContent.appendChild(sectionTitle);
            
            section.items.sort((a, b) => a.weight - b.weight).forEach(item => {
                const link = document.createElement('a');
                const historyPath = item.path.replace(/\.md$/, '');
                link.href = '#' + historyPath;
                link.textContent = item.title;
                link.onclick = (e) => {
                    e.preventDefault();
                    // Update the hash without triggering the hashchange event
                    history.pushState(null, '', '#' + historyPath);
                    loadContent(item.path);
                    // Collapse sidebar if in mobile view
                    if (window.innerWidth <= 768) {
                        sidebar.classList.add('collapsed');
                        container.classList.add('sidebar-collapsed');
                        document.body.style.overflow = '';
                    }
                };
                sidebarContent.appendChild(link);
            });
        });

        // Setup home link with the same behavior
        const homeLink = document.getElementById('home-link');
        homeLink.onclick = (e) => {
            e.preventDefault();
            history.pushState(null, '', '#articles/home');
            loadContent('articles/home.md');
            if (window.innerWidth <= 768) {
                sidebar.classList.add('collapsed');
                container.classList.add('sidebar-collapsed');
                document.body.style.overflow = '';
            }
        };
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
}

// Load and render markdown content
async function loadContent(path) {
    try {
        // Always append .md if it's not present in the hash or the path
        const filePath = path.endsWith('.md') ? path : 
            path.replace(/\/?$/, '.md'); // Add .md to the end, handling optional trailing slash
        
        const response = await fetch(encodeURI(filePath));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        
        // Remove frontmatter before rendering
        const cleanedMarkdown = markdown.replace(/^---[\s\S]+?---\n/, '');
        
        // Extract title from filename, removing .md if present
        const filename = path.split('/').pop().replace(/\.md$/, '');
        const title = filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const contentWrapper = document.querySelector('.content-wrapper');
        if (contentWrapper) {
            contentWrapper.innerHTML = `<h1>${title}</h1>${marked.parse(cleanedMarkdown)}`;
        }
    } catch (error) {
        console.error('Error loading content:', error);
        const contentWrapper = document.querySelector('.content-wrapper');
        if (contentWrapper) {
            contentWrapper.innerHTML = `<h1>Error</h1><p>Could not load content: ${error.message}</p>`;
        }
    }
}

// Load and apply theme colors
async function loadThemeColors() {
    try {
        const response = await fetch('theme.json');
        const theme = await response.json();
        
        // Only set properties that exist in theme.json
        if (theme.sidebar) {
            document.documentElement.style.setProperty('--sidebar-bg', theme.sidebar.background);
            document.documentElement.style.setProperty('--link-bg', theme.sidebar.linkBackground);
            document.documentElement.style.setProperty('--link-hover-bg', theme.sidebar.linkBackgroundHover);
            document.documentElement.style.setProperty('--link-text', theme.sidebar.linkText);
        }
    } catch (error) {
        console.error('Error loading theme:', error);
    }
}

// Sidebar resize functionality
function initializeResize() {
    const sidebar = document.getElementById('sidebar');
    const handle = document.getElementById('resize-handle');
    const container = document.querySelector('.container');
    let isResizing = false;

    function updateHandlePosition() {
        const sidebarWidth = sidebar.offsetWidth;
        handle.style.left = `${sidebarWidth}px`;
        document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`);
    }

    // Initialize handle position
    updateHandlePosition();

    // Prevent text selection during resize
    function preventSelection(e) {
        e.preventDefault();
    }

    handle.addEventListener('mousedown', (e) => {
        isResizing = true;
        handle.classList.add('active');
        container.classList.add('resizing');
        document.addEventListener('selectstart', preventSelection);
        document.addEventListener('dragstart', preventSelection);
    });

    document.addEventListener('mousemove', (e) => {
        if (!isResizing) return;
        e.preventDefault();
        const newWidth = Math.max(150, Math.min(e.clientX, 500));
        sidebar.style.width = `${newWidth}px`;
        updateHandlePosition();
        // Remove transition during resize
        sidebar.style.transition = 'none';
        document.getElementById('content').style.transition = 'none';
    });

    document.addEventListener('mouseup', () => {
        if (!isResizing) return;
        isResizing = false;
        handle.classList.remove('active');
        container.classList.remove('resizing');
        document.removeEventListener('selectstart', preventSelection);
        document.removeEventListener('dragstart', preventSelection);
        // Restore transitions after resize
        sidebar.style.transition = '';
        document.getElementById('content').style.transition = '';
    });
}

function initializeSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    const container = document.querySelector('.container');
    let wasMobile = window.innerWidth <= 768;

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('sidebar-collapsed');
        
        // For mobile: prevent body scroll when sidebar is open
        if (window.innerWidth <= 768) {
            document.body.style.overflow = sidebar.classList.contains('collapsed') ? '' : 'hidden';
        }
    });

    // Reset body overflow and sidebar width on window resize
    window.addEventListener('resize', () => {
        const isMobile = window.innerWidth <= 768;
        
        // Reset sidebar width when switching from mobile to desktop
        if (wasMobile && !isMobile) {
            sidebar.style.width = '250px';  // Reset to default width
            document.documentElement.style.setProperty('--sidebar-width', '250px');
            const handle = document.getElementById('resize-handle');
            if (handle) {
                handle.style.left = '250px';
            }
        }
        
        wasMobile = isMobile;
        if (!isMobile) {
            document.body.style.overflow = '';
        }
    });
}

// Cache all articles
async function cacheAllArticles() {
    try {
        const response = await fetch('sidebar.json');
        const data = await response.json();
        const articles = ['articles/home.md'];
        
        // Collect all article paths
        data.sections.forEach(section => {
            section.items.forEach(item => {
                articles.push(item.path);
            });
        });

        // Fetch all articles to cache them
        const fetchPromises = articles.map(async (path) => {
            try {
                await fetch(encodeURI(path));
                console.log(`Cached: ${path}`);
            } catch (error) {
                console.warn(`Failed to cache: ${path}`);
            }
        });

        await Promise.all(fetchPromises);
        console.log('All articles cached');
    } catch (error) {
        console.error('Error caching articles:', error);
    }
}

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    loadSidebar().then(() => {
        initializeResize();
        loadThemeColors();
        initializeSidebarToggle();
    });
    
    // Add hash change listener
    window.addEventListener('hashchange', handleRoute);
    
    // Initial route handling
    handleRoute();

    // Cache all articles after 5 seconds
    setTimeout(cacheAllArticles, 5000);
});