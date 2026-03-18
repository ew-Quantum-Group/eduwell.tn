    // Authentication Configuration
        const AUTH_CONFIG = {
            isLoggedInKey: 'eduwell_svt_isLoggedIn',
            usernameKey: 'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity'
        };

        // Session Management
        const SESSION_CONFIG = {
            inactivityTimeout: 30 * 60 * 1000,
            checkInterval: 60000,
            isLoggedInKey: 'eduwell_svt_isLoggedIn',
            usernameKey: 'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity'
        };

        // Security
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.key === 's') || 
                (e.ctrlKey && e.shiftKey && e.key === 'S') || 
                (e.ctrlKey && e.key === 'p') ||
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.key === 'u')) {
                e.preventDefault();
                return false;
            }
        });

        // Session Manager Class
        class SessionManager {
            constructor() {
                this.timer = null;
            }

            init() {
                this.clearTimers();
                this.updateActivity();
                this.startSessionCheck();
                this.setupActivityDetection();
                this.checkSession();
            }

            startSessionCheck() {
                this.timer = setInterval(() => {
                    this.checkSession();
                }, SESSION_CONFIG.checkInterval);
            }

            setupActivityDetection() {
                const activityEvents = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];
                activityEvents.forEach(event => {
                    document.addEventListener(event, () => {
                        this.updateActivity();
                    }, { passive: true });
                });
            }

            updateActivity() {
                localStorage.setItem(SESSION_CONFIG.lastActivityKey, Date.now().toString());
            }

            checkSession() {
                if (!this.isAuthenticated()) {
                    return;
                }

                const lastActivity = localStorage.getItem(SESSION_CONFIG.lastActivityKey);
                if (!lastActivity) {
                    this.updateActivity();
                    return;
                }

                const lastActivityTime = parseInt(lastActivity);
                const currentTime = Date.now();
                const timeSinceLastActivity = currentTime - lastActivityTime;

                if (timeSinceLastActivity >= SESSION_CONFIG.inactivityTimeout) {
                    console.log('Session expired due to inactivity');
                    this.forceLogout();
                    return;
                }
            }

            forceLogout() {
                console.log('Session expired - forcing logout');
                this.clearSession();
                this.clearTimers();
                window.location.href = './login.html?message=session_expired';
            }

            clearSession() {
                localStorage.removeItem(SESSION_CONFIG.isLoggedInKey);
                localStorage.removeItem(SESSION_CONFIG.usernameKey);
                localStorage.removeItem(SESSION_CONFIG.lastActivityKey);
            }

            clearTimers() {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }

            isAuthenticated() {
                return localStorage.getItem(SESSION_CONFIG.isLoggedInKey) === 'true';
            }
        }

        // Authentication check
        function checkAuthentication() {
            const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            
            if (!isLoggedIn) {
                console.log('Not authenticated - redirecting to login page');
                window.location.href = './login.html';
                return false;
            }
            
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const currentTime = Date.now();
                const minutesDiff = (currentTime - lastActivityTime) / (1000 * 60);
                
                if (minutesDiff >= 30) {
                    localStorage.clear();
                    window.location.href = './login.html?message=session_expired';
                    return false;
                }
            }
            
            return true;
        }

        // Setup logout functionality
        function setupLogout() {
            const logoutBtn = document.getElementById('logoutBtn');
            const logoutConfirmationPopup = document.getElementById('logoutConfirmationPopup');
            const logoutCancelBtn = document.getElementById('logoutCancelBtn');
            const logoutConfirmBtn = document.getElementById('logoutConfirmBtn');

            // Show logout confirmation modal when logout button is clicked
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    logoutConfirmationPopup.style.display = 'flex';
                    setTimeout(() => {
                        logoutConfirmationPopup.classList.add('active');
                    }, 10);
                    document.body.style.overflow = 'hidden';
                });
            }

            // Cancel logout - hide modal
            if (logoutCancelBtn) {
                logoutCancelBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    logoutConfirmationPopup.classList.remove('active');
                    setTimeout(() => {
                        logoutConfirmationPopup.style.display = 'none';
                        document.body.style.overflow = '';
                    }, 300);
                });
            }

            // Confirm logout
            if (logoutConfirmBtn) {
                logoutConfirmBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Show loading state
                    logoutConfirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الخروج...';
                    logoutConfirmBtn.disabled = true;
                    
                    // Clear all session data
                    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
                    localStorage.removeItem(AUTH_CONFIG.usernameKey);
                    localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
                    
                    // Clear session manager
                    if (window.sessionManager) {
                        window.sessionManager.clearTimers();
                        window.sessionManager.clearSession();
                    }
                    
                    // Close modal
                    logoutConfirmationPopup.classList.remove('active');
                    
                    // Wait for modal animation to complete, then redirect
                    setTimeout(() => {
                        logoutConfirmationPopup.style.display = 'none';
                        document.body.style.overflow = '';
                        
                        // Redirect to login page
                        window.location.href = './login.html';
                    }, 300);
                });
            }

            // Close modal when clicking outside
            if (logoutConfirmationPopup) {
                logoutConfirmationPopup.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.remove('active');
                        setTimeout(() => {
                            this.style.display = 'none';
                            document.body.style.overflow = '';
                        }, 300);
                    }
                });
            }

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && logoutConfirmationPopup.classList.contains('active')) {
                    logoutConfirmationPopup.classList.remove('active');
                    setTimeout(() => {
                        logoutConfirmationPopup.style.display = 'none';
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        }

        // Initialize page with authentication
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM loaded - checking authentication');
            
            // First, check authentication
            if (!checkAuthentication()) {
                console.log('Authentication failed - redirecting to login');
                return;
            }
            
            // User is authenticated - continue initialization
            console.log('User authenticated, initializing page...');
            
            // Initialize session manager
            window.sessionManager = new SessionManager();
            sessionManager.init();
            
            // Setup logout functionality
            setupLogout();
            
            // Load your existing chatbot scripts
            console.log('Loading chatbot scripts...');
            
            // Hide loading screen after 2 seconds
            setTimeout(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                if (loadingScreen) {
                    loadingScreen.style.display = 'none';
                }
                console.log('Page fully loaded');
            }, 2000);
        });