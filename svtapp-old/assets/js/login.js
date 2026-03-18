  // ============================================
    // SIMPLE AUTHENTICATION SYSTEM
    // ============================================
    
    // Configuration
    const AUTH_CONFIG = {
        isLoggedInKey: 'eduwell_svt_isLoggedIn',
        usernameKey: 'eduwell_svt_username',
        loginTimeKey: 'eduwell_svt_loginTime'
    };

    // Simple Logout Function
    function simpleLogout() {
        console.log('Logging out...');
        localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
        localStorage.removeItem(AUTH_CONFIG.usernameKey);
        localStorage.removeItem(AUTH_CONFIG.loginTimeKey);
        console.log('LocalStorage cleared');
        window.location.href = 'login.html';
    }

    // Check if authenticated
    function isAuthenticated() {
        return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
    }

    // Get current user
    function getCurrentUser() {
        return localStorage.getItem(AUTH_CONFIG.usernameKey);
    }

    // Page protection
    function protectPage() {
        if (window.location.pathname.includes('login.html')) {
            return;
        }
        
        if (!isAuthenticated()) {
            sessionStorage.setItem('eduwell_redirect_url', window.location.href);
            window.location.href = 'login.html';
            throw new Error('Authentication required');
        }
    }

    // ============================================
    // MAIN INITIALIZATION - SIMPLE & RELIABLE
    // ============================================
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('=== INITIALIZING APP ===');
        
        // 1. Check authentication
        try {
            protectPage();
        } catch (error) {
            console.log('Auth redirect:', error.message);
            return;
        }
        
        // 2. Update welcome title
        const welcomeTitle = document.getElementById('welcomeTitle');
        if (welcomeTitle && isAuthenticated()) {
            const username = getCurrentUser();
            welcomeTitle.textContent = `Welcome, ${username}`;
        }
        
        // 3. Initialize profile section with SIMPLE LOGOUT
        setupProfileSection();
        
        // 4. Monitor page navigation
        setupNavigationWatcher();
        
        console.log('=== INITIALIZATION COMPLETE ===');
    });
    
    // ============================================
    // SIMPLE PROFILE SECTION SETUP
    // ============================================
    
    function setupProfileSection() {
        console.log('Setting up profile section...');
        
        const profileSection = document.getElementById('minimalProfileSection');
        const usernameElement = document.getElementById('profileUsername');
        const logoutButton = document.getElementById('profileLogoutBtn');
        
        // Debug check
        console.log('Profile elements found:', {
            profileSection: !!profileSection,
            usernameElement: !!usernameElement,
            logoutButton: !!logoutButton
        });
        
        // Check if we're on ebooks page
        const ebooksPage = document.getElementById('ebooks-page');
        const isEbooksActive = ebooksPage && ebooksPage.classList.contains('active');
        console.log('Ebooks page active:', isEbooksActive);
        
        if (isEbooksActive && isAuthenticated()) {
            // Show profile
            if (profileSection) {
                profileSection.style.display = 'block';
                console.log('Profile shown');
            }
            
            // Set username
            if (usernameElement) {
                const username = getCurrentUser();
                usernameElement.textContent = username || 'User';
                console.log('Username set:', username);
            }
            
            // Setup logout button - SIMPLE VERSION
            if (logoutButton) {
                console.log('Setting up SIMPLE logout button...');
                
                // Remove any old listeners
                logoutButton.onclick = null;
                
                // Add new listener
                logoutButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('LOGOUT BUTTON CLICKED!');
                    
                    // SIMPLE CONFIRM DIALOG
                    if (confirm('Are you sure you want to logout?')) {
                        simpleLogout();
                    }
                });
                
                // Also allow double-click for quick logout
                logoutButton.addEventListener('dblclick', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('LOGOUT DOUBLE-CLICKED!');
                    simpleLogout();
                });
                
                console.log('Logout button setup complete');
            }
        } else {
            // Hide profile
            if (profileSection) {
                profileSection.style.display = 'none';
                console.log('Profile hidden (not on ebooks page)');
            }
        }
    }
    
    // ============================================
    // NAVIGATION WATCHER
    // ============================================
    
    function setupNavigationWatcher() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                console.log('Navigation clicked, updating profile...');
                setTimeout(setupProfileSection, 300);
            });
        });
    }
    
    // ============================================
    // EMERGENCY LOGOUT FIX (runs after everything)
    // ============================================
    
    // This runs after a delay to ensure everything is loaded
    setTimeout(function() {
        console.log('=== EMERGENCY LOGOUT CHECK ===');
        
        const logoutBtn = document.getElementById('profileLogoutBtn');
        if (logoutBtn) {
            console.log('Emergency: Adding direct logout handler');
            
            // Direct handler that overrides everything
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('EMERGENCY LOGOUT HANDLER FIRED');
                
                if (confirm('Logout from EduWell?')) {
                    // Clear all auth data
                    localStorage.removeItem('eduwell_svt_isLoggedIn');
                    localStorage.removeItem('eduwell_svt_username');
                    localStorage.removeItem('eduwell_svt_loginTime');
                    
                    // Redirect
                    window.location.href = 'login.html';
                }
            }, true); // Use capture phase to catch early
        }
        
        // Force show profile for debugging if on ebooks page
        const ebooksPage = document.getElementById('ebooks-page');
        if (ebooksPage && ebooksPage.classList.contains('active')) {
            const profile = document.getElementById('minimalProfileSection');
            if (profile) {
                profile.style.display = 'block';
                console.log('Emergency: Forced profile to show');
            }
        }
    }, 1500);