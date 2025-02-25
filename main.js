// Initialize marked for markdown rendering
marked.setOptions({
    highlight: function(code) {
        return code;
    }
});

// Load and render sidebar
async function loadSidebar() {
    try {
        const response = await fetch('sidebar.json');
        const data = await response.json();
        const sidebarContent = document.querySelector('.sidebar-content');
        
        data.sections.forEach(section => {
            const sectionTitle = document.createElement('h3');
            sectionTitle.textContent = section.title;
            sectionTitle.style.marginTop = '1rem';
            sidebarContent.appendChild(sectionTitle);
            
            section.items.sort((a, b) => a.weight - b.weight).forEach(item => {
                const link = document.createElement('a');
                link.href = '#' + item.path;
                link.textContent = item.title;
                link.onclick = (e) => {
                    e.preventDefault();
                    loadContent(item.path);
                };
                sidebarContent.appendChild(link);
            });
        });

        // Setup home link
        const homeLink = document.getElementById('home-link');
        homeLink.onclick = (e) => {
            e.preventDefault();
            loadContent('articles/home.md');
        };
    } catch (error) {
        console.error('Error loading sidebar:', error);
    }
}

// Load and render markdown content
async function loadContent(path) {
    try {
        // Ensure the path is properly encoded for fetch
        const response = await fetch(encodeURI(path));
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        
        // Remove frontmatter before rendering
        const cleanedMarkdown = markdown.replace(/^---[\s\S]+?---\n/, '');
        
        // Extract title from filename
        const filename = path.split('/').pop().replace('.md', '');
        const title = filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const contentElement = document.getElementById('content');
        contentElement.innerHTML = `<h1>${title}</h1>${marked.parse(cleanedMarkdown)}`;
    } catch (error) {
        console.error('Error loading content:', error);
        const contentElement = document.getElementById('content');
        contentElement.innerHTML = `<h1>Error</h1><p>Could not load content: ${error.message}</p>`;
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

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('sidebar-collapsed');
        
        // Update handle position after animation
        setTimeout(updateHandlePosition, 300);
    });
}

// Initialize the page
window.addEventListener('DOMContentLoaded', () => {
    loadSidebar().then(() => {
        initializeResize();
        loadThemeColors();
        initializeSidebarToggle();
    });
    loadContent('articles/home.md');
});