 // ============================================================
  // AUTHENTICATION — EXACT LOGIC FROM REFERENCE PROJECT
  // ============================================================
  (function() {
    // Configuration
    const AUTH_CONFIG = {
      isLoggedInKey: 'eduwell_svt_isLoggedIn',
      usernameKey: 'eduwell_svt_username',
      lastActivityKey: 'eduwell_svt_lastActivity'
    };

    // Check if user is authenticated (with inactivity timeout 30 min)
    function eduwell_isAuthenticated() {
      const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
      if (!isLoggedIn) return false;

      const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
      if (lastActivity) {
        const lastActivityTime = parseInt(lastActivity);
        const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
        if (minutesDiff >= 30) {
          logout(); // clear storage
          return false;
        }
      }
      return true;
    }

    function logout() {
      localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
      localStorage.removeItem(AUTH_CONFIG.usernameKey);
      localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
      if (inactivityTimer) clearInterval(inactivityTimer);
      // Redirect to login page
      window.location.href = './login.html';
    }

    function updateUserActivity() {
      if (eduwell_isAuthenticated()) {
        localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
      }
    }

    let inactivityTimer;
    function initActivityTracking() {
      ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, updateUserActivity);
      });
      inactivityTimer = setInterval(() => {
        if (!eduwell_isAuthenticated()) logout();
      }, 60000);
    }

    // Guard: if not authenticated → redirect to login
    if (!eduwell_isAuthenticated()) {
      sessionStorage.setItem('eduwell_redirect_url', window.location.pathname);
      window.location.href = './login.html';
      throw new Error('Authentication required');
    }

    // Start tracking activity
    initActivityTracking();

    // Update activity immediately
    updateUserActivity();

    // Pageshow event (back/forward cache)
    window.addEventListener('pageshow', function(event) {
      if (event.persisted && !eduwell_isAuthenticated()) {
        window.location.href = './login.html';
      }
    });

    // (Optional) prevent right-click / devtools – same as original
    document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; });
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey && e.key === 's') || 
          (e.ctrlKey && e.shiftKey && e.key === 'S') || 
          (e.ctrlKey && e.key === 'p') ||
          e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    });
  })();