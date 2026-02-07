        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        // Disable keyboard shortcuts for saving
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

        // Authentication Configuration - MUST MATCH index.html
        const AUTH_CONFIG = {
            isLoggedInKey: 'eduwell_svt_isLoggedIn',
            usernameKey: 'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity' // Changed from loginTimeKey
        };

    

        // Login function - UPDATED FOR 30 MINUTE INACTIVITY
        function eduwell_login(username, password) {
            console.log('Login attempt:', username);
            
            // Clear any existing session first
            localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
            localStorage.removeItem(AUTH_CONFIG.usernameKey);
            localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
            
            // Find user by username
            const user = VALID_CREDENTIALS.find(u => 
                u.username === username && u.password === password
            );
            
            if (!user) {
                console.log('Login failed: Invalid credentials');
                return { 
                    success: false, 
                    message: 'Invalid username or password' 
                };
            }
            
            // Save session with current timestamp as last activity
            localStorage.setItem(AUTH_CONFIG.isLoggedInKey, 'true');
            localStorage.setItem(AUTH_CONFIG.usernameKey, user.name || username);
            localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString()); // Use timestamp
            
            console.log('Login successful:', user.name);
            return { 
                success: true, 
                message: 'Welcome back!',
                username: user.name || username
            };
        }

        function eduwell_isAuthenticated() {
            return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        }

        document.addEventListener('DOMContentLoaded', function() {
            console.log('Login page loaded - 30 minute inactivity system');
            
            // Check for expired session on login page load
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const currentTime = Date.now();
                const minutesDiff = (currentTime - lastActivityTime) / (1000 * 60);
                
                // If session expired due to 30 minutes of inactivity, clear it
                if (minutesDiff >= 30) {
                    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
                    localStorage.removeItem(AUTH_CONFIG.usernameKey);
                    localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
                    console.log('Expired session cleared on login page (30 minute inactivity)');
                }
            }

            // Check if already authenticated with valid session
            if (eduwell_isAuthenticated()) {
                console.log('Already authenticated, redirecting...');
                const redirectUrl = sessionStorage.getItem('eduwell_redirect_url') || '../ew.html';
                window.location.href = redirectUrl;
                return;
            }

            const loginForm = document.getElementById('loginForm');
            const errorMessage = document.getElementById('errorMessage');
            const errorText = document.getElementById('errorText');
            const successMessage = document.getElementById('successMessage');
            const successText = document.getElementById('successText');
            const loginButton = document.getElementById('loginButton');
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const freeVersionBtn = document.getElementById('freeVersionBtn');

            // Check URL for session expired message
            const urlParams = new URLSearchParams(window.location.search);
            const message = urlParams.get('message');
            if (message === 'session_expired') {
                showError('Your session has expired due to inactivity. Please login again.');
            }

            // Form submission
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const username = usernameInput.value.trim();
                const password = passwordInput.value;

                console.log('Form submitted:', username);
                
                // Validate
                if (!username || !password) {
                    showError('Please fill in all fields');
                    return;
                }

                // Loading state
                loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
                loginButton.disabled = true;

                // Simulate network delay
                setTimeout(() => {
                    const result = eduwell_login(username, password);

                    if (result.success) {
                        showSuccess(result.message);
                        
                        // Redirect after brief delay
                        setTimeout(() => {
                            const redirectUrl = sessionStorage.getItem('eduwell_redirect_url') || '../ew.html';
                            sessionStorage.removeItem('eduwell_redirect_url');
                            console.log('Redirecting to:', redirectUrl);
                            window.location.href = redirectUrl;
                        }, 600);
                    } else {
                        showError(result.message);
                        
                        // Reset button
                        loginButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
                        loginButton.disabled = false;

                        // Clear password
                        passwordInput.value = '';
                        passwordInput.focus();
                    }
                }, 600);
            });

            // Clear messages on input
            [usernameInput, passwordInput].forEach(input => {
                input.addEventListener('input', () => {
                    hideMessages();
                });
            });

            // Helper functions
            function showError(message) {
                hideMessages();
                errorText.textContent = message;
                errorMessage.classList.add('show');
            }

            function showSuccess(message) {
                hideMessages();
                successText.textContent = message;
                successMessage.classList.add('show');
                
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 3000);
            }

            function hideMessages() {
                errorMessage.classList.remove('show');
                successMessage.classList.remove('show');
            }

            // Auto-focus username input
            usernameInput.focus();
        });