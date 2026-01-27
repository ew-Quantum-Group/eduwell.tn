    // CRITICAL: Must match login.html EXACTLY
        const AUTH_CONFIG = {
            isLoggedInKey: 'eduwell_svt_isLoggedIn',
            usernameKey: 'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity'
        };

        // Current page tracking
        let currentPage = 'mainPage';
        let inactivityTimer;
        
        // Check authentication status
        function eduwell_isAuthenticated() {
            const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
            
            if (!isLoggedIn) {
                return false;
            }
            
            // Check for 30 minute inactivity
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const currentTime = Date.now();
                const minutesDiff = (currentTime - lastActivityTime) / (1000 * 60);
                
                // If session expired due to 30 minutes of inactivity, clear it
                if (minutesDiff >= 30) {
                    logout();
                    return false;
                }
            }
            
            return true;
        }

        // Logout function - logs out immediately without confirmation
        function logout() {
            // Clear session data
            localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
            localStorage.removeItem(AUTH_CONFIG.usernameKey);
            localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
            
            // Clear any timers
            if (inactivityTimer) {
                clearInterval(inactivityTimer);
            }
            
            // Redirect to login page immediately
            window.location.href = './login.html';
        }

        // Update user activity timestamp
        function updateUserActivity() {
            if (eduwell_isAuthenticated()) {
                localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
            }
        }

        // Initialize activity tracking
        function initActivityTracking() {
            // Update activity on user interactions
            ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
                document.addEventListener(event, updateUserActivity);
            });

            // Check inactivity every minute
            inactivityTimer = setInterval(() => {
                if (!eduwell_isAuthenticated()) {
                    logout();
                }
            }, 60000); // Check every minute
        }

        // Check authentication on page load
        function checkAuthOnLoad() {
            if (!eduwell_isAuthenticated()) {
                // Save the current URL for redirect after login
                sessionStorage.setItem('eduwell_redirect_url', window.location.pathname);
                // Redirect to login page
                window.location.href = './login.html';
                return false;
            }
            return true;
        }

        // Show specific page
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show selected page
            const targetPage = document.getElementById(pageId);
            targetPage.classList.remove('hidden');
            currentPage = pageId;
            
            // Update navigation
            updateNavigation();
            
            // Scroll to top of the page content
            if (pageId !== 'mainPage') {
                const pageContent = targetPage.querySelector('.page-content');
                if (pageContent) {
                    pageContent.scrollTop = 0;
                }
            }
        }
        
        // Update navigation active state
        function updateNavigation() {
            // Update footer navigation
            document.querySelectorAll('.footer-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Update nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Set active states
            if (currentPage === 'mainPage') {
                document.querySelector('.footer-btn:nth-child(1)').classList.add('active');
                document.querySelector('.nav-link:nth-child(1)').classList.add('active');
                
                document.getElementById('tensesNavBtn').style.display = 'none';
                document.getElementById('grammarNavBtn').style.display = 'none';
                document.getElementById('tensesNavLink').style.display = 'none';
                document.getElementById('grammarNavLink').style.display = 'none';
            } 
            else if (currentPage === 'subjectsPage') {
                document.querySelector('.footer-btn:nth-child(2)').classList.add('active');
                document.querySelector('.nav-link:nth-child(2)').classList.add('active');
                
                document.getElementById('tensesNavBtn').style.display = 'none';
                document.getElementById('grammarNavBtn').style.display = 'none';
                document.getElementById('tensesNavLink').style.display = 'none';
                document.getElementById('grammarNavLink').style.display = 'none';
            } 
            else if (currentPage === 'tensesPage' || 
                     currentPage === 'foundationPage' || 
                     currentPage === 'intermediatePage' || 
                     currentPage === 'advancedPage' || 
                     currentPage === 'masteryPage') {
                
                document.getElementById('tensesNavBtn').classList.add('active');
                document.querySelector('.nav-link:nth-child(3)').classList.add('active');
                
                document.getElementById('tensesNavBtn').style.display = 'flex';
                document.getElementById('grammarNavBtn').style.display = 'flex';
                document.getElementById('tensesNavLink').style.display = 'block';
                document.getElementById('grammarNavLink').style.display = 'block';
            } 
            else if (currentPage === 'grammarPage') {
                document.getElementById('grammarNavBtn').classList.add('active');
                document.querySelector('.nav-link:nth-child(4)').classList.add('active');
                
                document.getElementById('tensesNavBtn').style.display = 'flex';
                document.getElementById('grammarNavBtn').style.display = 'flex';
                document.getElementById('tensesNavLink').style.display = 'block';
                document.getElementById('grammarNavLink').style.display = 'block';
            }
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            console.log('Index page loaded - checking authentication');
            
            // Check authentication
            if (!checkAuthOnLoad()) {
                return; // Stop execution if not authenticated
            }
            
            // Initialize activity tracking
            initActivityTracking();
            
            // Main button click to show subjects
            document.getElementById('mainBtn').addEventListener('click', function() {
                showPage('subjectsPage');
            });
            
            // Tenses card click to show tenses levels
            document.getElementById('tensesCard').addEventListener('click', function() {
                showPage('tensesPage');
            });
            
            // Grammar card click to show grammar courses
            document.getElementById('grammarCard').addEventListener('click', function() {
                showPage('grammarPage');
            });
            
            // Initialize navigation
            updateNavigation();
            
            // Add smooth scroll behavior for iOS devices
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                document.querySelectorAll('.page-content').forEach(el => {
                    el.style['-webkit-overflow-scrolling'] = 'touch';
                });
            }
            
            // Update initial activity timestamp
            updateUserActivity();
        });

        // Protect against browser back button after logout
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                // Page was loaded from cache, re-check auth
                if (!eduwell_isAuthenticated()) {
                    window.location.href = './login.html';
                }
            }
        });

        // Prevent right-click and DevTools
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        document.addEventListener('keydown', function(e) {
            // Disable Ctrl+S, Ctrl+Shift+S, Ctrl+P
            if ((e.ctrlKey && e.key === 's') || 
                (e.ctrlKey && e.shiftKey && e.key === 'S') || 
                (e.ctrlKey && e.key === 'p')) {
                e.preventDefault();
                return false;
            }
            
            // Disable F12 (DevTools)
            if (e.key === 'F12') {
                e.preventDefault();
                return false;
            }
        });