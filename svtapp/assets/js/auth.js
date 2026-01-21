// Authentication System
const AUTH_CONFIG = {
    isLoggedInKey: 'eduwell_isLoggedIn',
    usernameKey: 'eduwell_username',
    loginTimeKey: 'eduwell_loginTime'
};

// Hardcoded credentials (for demo purposes only)
const VALID_CREDENTIALS = [
    { username: 'admin', password: 'admin123', name: 'Admin User' },
    { username: 'teacher', password: 'teacher123', name: 'Teacher' },
    { username: 'student', password: 'student123', name: 'Student' },
    { username: 'guest', password: 'guest123', name: 'Guest User' }
];

// Authentication Functions
function login(username, password) {
    // Clear any previous session
    logout();
    
    // Find user in credentials
    const user = VALID_CREDENTIALS.find(u => 
        u.username === username && u.password === password
    );
    
    if (!user) {
        return { success: false, message: 'Invalid username or password' };
    }
    
    // Save session data
    localStorage.setItem(AUTH_CONFIG.isLoggedInKey, 'true');
    localStorage.setItem(AUTH_CONFIG.usernameKey, user.name || username);
    localStorage.setItem(AUTH_CONFIG.loginTimeKey, new Date().toISOString());
    
    return { 
        success: true, 
        message: 'Login successful',
        username: user.name || username
    };
}

function logout() {
    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
    localStorage.removeItem(AUTH_CONFIG.usernameKey);
    localStorage.removeItem(AUTH_CONFIG.loginTimeKey);
}

function isAuthenticated() {
    return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
}

function getCurrentUser() {
    return localStorage.getItem(AUTH_CONFIG.usernameKey);
}

// Page Protection Guard
function protectPage() {
    // Skip protection for login page (if we had one)
    if (window.location.pathname.includes('login.html')) {
        return;
    }
    
    // If not authenticated, redirect to login
    if (!isAuthenticated()) {
        // Store the current page to return to after login
        sessionStorage.setItem('eduwell_redirectUrl', window.location.href);
        
        // Redirect to login page
        window.location.href = 'login.html';
        
        // Prevent further execution
        throw new Error('Authentication required');
    }
}

// Create a simple login page if it doesn't exist
function createLoginPageIfNeeded() {
    // This would be called from your main login page
    // For now, we'll just handle redirects
}