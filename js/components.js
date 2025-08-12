// Shared components for the website
// This file contains reusable components that can be loaded into different pages

// Common base styles that should be included in all pages
const BASE_STYLES = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Geist, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f8f9fa;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }

    /* Header */
    header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
    }

    .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: #2d5a3d;
    }

    .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    .nav-links a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: color 0.3s ease;
    }

    .nav-links a:hover {
        color: #2d5a3d;
    }

    /* Main content area */
    main {
        min-height: calc(100vh - 200px);
        padding-top: 80px;
    }

    /* Footer */
    .footer {
        background: #1a1a1a;
        color: white;
        padding: 60px 0 20px;
    }

    .footer-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        margin-bottom: 3rem;
    }

    .footer-left .footer-logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .footer-left .logo-icon {
        font-size: 1.5rem;
    }

    .footer-left h3 {
        font-size: 1.5rem;
        margin: 0;
    }

    .footer-description {
        color: #ccc;
        margin-bottom: 1rem;
        line-height: 1.6;
    }

    .footer-email {
        color: #00d084;
        text-decoration: underline;
    }

    .footer-nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .footer-nav a {
        color: #ccc;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-nav a:hover {
        color: white;
    }

    .footer-social {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .footer-social a {
        color: #ccc;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: color 0.3s ease;
    }

    .footer-social a:hover {
        color: #00d084;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        border-top: 1px solid #333;
    }

    .footer-logos {
        display: flex;
        gap: 2rem;
    }

    .university-logo, .company-logo {
        padding: 8px 16px;
        background: #333;
        border-radius: 4px;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .footer-copyright {
        color: #999;
        font-size: 0.9rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }

        .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }

        .footer-nav {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
`;

// Header component - returns HTML string based on current page
function getHeaderHTML(currentPage = '') {
    const getRelativePath = (page) => {
        if (currentPage.includes('pages/')) {
            return page === 'index.html' ? '../' + page : page;
        }
        return page.startsWith('pages/') ? page : (page === 'index.html' ? page : 'pages/' + page);
    };

    return `
    <header>
        <nav>
            <div class="logo">🧠 Dr. Issam Laradji</div>
            <ul class="nav-links">
                <li><a href="${getRelativePath('index.html')}">Home</a></li>
                <li><a href="${getRelativePath('pages/research.html')}">Research</a></li>
                <li><a href="${getRelativePath('pages/publications.html')}">Publications</a></li>
                <li><a href="${getRelativePath('pages/cv.html')}">CV</a></li>
                <li><a href="${getRelativePath('pages/blogposts.html')}">Blog</a></li>
                <li><a href="${getRelativePath('index.html')}#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
}

// Footer component - returns HTML string based on current page
function getFooterHTML(currentPage = '') {
    const getRelativePath = (page) => {
        if (currentPage.includes('pages/')) {
            return page === 'index.html' ? '../' + page : page;
        }
        return page.startsWith('pages/') ? page : (page === 'index.html' ? page : 'pages/' + page);
    };

    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-left">
                    <div class="footer-logo">
                        <span class="logo-icon">🧠</span>
                        <h3>Issam Laradji</h3>
                    </div>
                    <p class="footer-description">Research Scientist at ServiceNow and Adjunct Professor at the University of British Columbia (UBC)</p>
                    <a href="mailto:issam.laradji@gmail.com" class="footer-email">issam.laradji@gmail.com</a>
                </div>
                
                <div class="footer-right">
                    <nav class="footer-nav">
                        <a href="${getRelativePath('index.html')}">Home</a>
                        <a href="${getRelativePath('pages/research.html')}">Research</a>
                        <a href="${getRelativePath('pages/publications.html')}">Publications</a>
                        <a href="${getRelativePath('pages/cv.html')}">CV</a>
                        <a href="${getRelativePath('pages/blogposts.html')}">Blog</a>
                    </nav>
                    
                    <div class="footer-social">
                        <a href="https://www.linkedin.com/in/issam-laradji-67ba1a99/" aria-label="LinkedIn">
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://scholar.google.ca/citations?user=8vRS7F0AAAAJ&hl=en" aria-label="Google Scholar">
                            <span>🎓</span>
                            <span>Google Scholar</span>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div class="footer-logos">
                    <div class="university-logo">UBC</div>
                    <div class="company-logo">ServiceNow</div>
                </div>
                <p class="footer-copyright">© 2024 Issam Laradji. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
}

// Common JavaScript functionality
const COMMON_SCRIPTS = `
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
`;

// Function to inject common styles into a page
function injectBaseStyles() {
    const style = document.createElement('style');
    style.textContent = BASE_STYLES;
    document.head.appendChild(style);
}

// Function to inject common scripts into a page
function injectCommonScripts() {
    const script = document.createElement('script');
    script.textContent = COMMON_SCRIPTS;
    document.body.appendChild(script);
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BASE_STYLES,
        getHeaderHTML,
        getFooterHTML,
        COMMON_SCRIPTS,
        injectBaseStyles,
        injectCommonScripts
    };
} 