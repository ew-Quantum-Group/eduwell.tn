
        // Disable right-click
        document.addEventListener('contextmenu', e => { e.preventDefault(); return false; });

        // Disable save/print/F12
        document.addEventListener('keydown', function(e) {
            if ((e.ctrlKey && e.key === 's') ||
                (e.ctrlKey && e.shiftKey && e.key === 'S') ||
                (e.ctrlKey && e.key === 'p') ||
                (e.key === 'F12')) {
                e.preventDefault(); return false;
            }
        });

        // Auth config — MUST MATCH index.html
        const AUTH_CONFIG = {
            isLoggedInKey:   'eduwell_svt_isLoggedIn',
            usernameKey:     'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity'
        };

        function eduwell_login(username, password) {
            console.log('Login attempt:', username);
            localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
            localStorage.removeItem(AUTH_CONFIG.usernameKey);
            localStorage.removeItem(AUTH_CONFIG.lastActivityKey);

            const user = VALID_CREDENTIALS.find(u =>
                u.username === username && u.password === password
            );

            if (!user) {
                console.log('Login failed: Invalid credentials');
                return { success: false, message: 'Identifiants invalides. Veuillez réessayer.' };
            }

            localStorage.setItem(AUTH_CONFIG.isLoggedInKey,   'true');
            localStorage.setItem(AUTH_CONFIG.usernameKey,     user.name || username);
            localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());

            console.log('Login successful:', user.name);
            return { success: true, message: 'Connexion réussie !', username: user.name || username };
        }

        function eduwell_isAuthenticated() {
            return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        }

        document.addEventListener('DOMContentLoaded', function () {
            console.log('Login page loaded – 30 min inactivity system');

            // Clear expired session
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const diff = (Date.now() - parseInt(lastActivity)) / 60000;
                if (diff >= 30) {
                    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
                    localStorage.removeItem(AUTH_CONFIG.usernameKey);
                    localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
                    console.log('Expired session cleared');
                }
            }

            // Already authenticated → redirect
            if (eduwell_isAuthenticated()) {
                console.log('Already authenticated, redirecting…');
                window.location.href = sessionStorage.getItem('eduwell_redirect_url') || 'index.html';
                return;
            }

            const loginForm      = document.getElementById('loginForm');
            const errorMessage   = document.getElementById('errorMessage');
            const errorText      = document.getElementById('errorText');
            const successMessage = document.getElementById('successMessage');
            const successText    = document.getElementById('successText');
            const loginButton    = document.getElementById('loginButton');
            const usernameInput  = document.getElementById('username');
            const passwordInput  = document.getElementById('password');
            const togglePassword = document.getElementById('togglePassword');
            const eyeIcon        = document.getElementById('eyeIcon');

            // Session-expired message via URL param
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('message') === 'session_expired') {
                showError('Votre session a expiré. Veuillez vous reconnecter.');
            }

            // ── Password visibility toggle ──
            togglePassword.addEventListener('click', function () {
                const isHidden = passwordInput.type === 'password';
                passwordInput.type = isHidden ? 'text' : 'password';
                eyeIcon.className  = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
                togglePassword.setAttribute('aria-label',
                    isHidden ? 'Masquer le mot de passe' : 'Afficher le mot de passe');
            });

            // ── Form submit ──
            loginForm.addEventListener('submit', function (e) {
                e.preventDefault();

                const username = usernameInput.value.trim();
                const password = passwordInput.value;

                if (!username || !password) {
                    showError('Veuillez remplir tous les champs.');
                    return;
                }

                loginButton.innerHTML = '<i class="fas fa-spinner fa-spin" style="font-size:13px;"></i><span style="margin-left:8px;">Connexion…</span>';
                loginButton.disabled = true;

                setTimeout(() => {
                    const result = eduwell_login(username, password);

                    if (result.success) {
                        showSuccess(result.message);
                        setTimeout(() => {
                            const redirectUrl = sessionStorage.getItem('eduwell_redirect_url') || 'index.html';
                            sessionStorage.removeItem('eduwell_redirect_url');
                            window.location.href = redirectUrl;
                        }, 600);
                    } else {
                        showError(result.message);
                        loginButton.innerHTML = '<span>Se connecter</span><span class="btn-arrow"><i class="fas fa-arrow-right"></i></span>';
                        loginButton.disabled = false;
                        passwordInput.value = '';
                        passwordInput.focus();
                    }
                }, 600);
            });

            // Clear alerts on type
            [usernameInput, passwordInput].forEach(el =>
                el.addEventListener('input', hideMessages)
            );

            function showError(msg) {
                hideMessages();
                errorText.textContent = msg;
                errorMessage.classList.add('show');
            }
            function showSuccess(msg) {
                hideMessages();
                successText.textContent = msg;
                successMessage.classList.add('show');
                setTimeout(() => successMessage.classList.remove('show'), 3000);
            }
            function hideMessages() {
                errorMessage.classList.remove('show');
                successMessage.classList.remove('show');
            }

            usernameInput.focus();

            // Remove splash from DOM after animation (3s delay + 0.5s exit = 3.5s)
            const splash = document.getElementById('splash');
            if (splash) {
                setTimeout(() => splash.remove(), 3500);
            }
        });
