       // ============ CONFIGURATION AUTHENTIFICATION (Copiée de l'ancien projet) ============
        const AUTH_CONFIG = {
            isLoggedInKey: 'eduwell_svt_isLoggedIn',
            usernameKey: 'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity'
        };

        let inactivityTimer;

        // ---------- FONCTIONS AUTH ----------
        function eduwell_isAuthenticated() {
            const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
            if (!isLoggedIn) return false;
            
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
                if (minutesDiff >= 30) {
                    logout();
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
            // Redirection vers la page de login
            window.location.href = './login.html';
        }

        function updateUserActivity() {
            if (eduwell_isAuthenticated()) {
                localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
            }
        }

        function initActivityTracking() {
            ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
                document.addEventListener(event, updateUserActivity);
            });
            inactivityTimer = setInterval(() => {
                if (!eduwell_isAuthenticated()) logout();
            }, 60000);
        }

        function checkAuthOnLoad() {
            if (!eduwell_isAuthenticated()) {
                sessionStorage.setItem('eduwell_redirect_url', window.location.pathname);
                window.location.href = './login.html';
                return false;
            }
            return true;
        }

        // ---------- MISE À JOUR UI (BOUTON LOGOUT) ----------
        function updateAuthUI() {
            const container = document.getElementById('authNavContainer');
            if (!container) return;
            
            if (eduwell_isAuthenticated()) {
                const username = localStorage.getItem(AUTH_CONFIG.usernameKey) || 'Utilisateur';
                container.innerHTML = `
                    <span class="username-badge">
                        <i class="fas fa-user-circle"></i> ${username}
                    </span>
                    <button class="logout-btn-sahl" id="logoutBtnHeader">
                        <i class="fas fa-sign-out-alt"></i> Déconnexion
                    </button>
                `;
                const logoutBtn = document.getElementById('logoutBtnHeader');
                if (logoutBtn) {
                    logoutBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        logout();
                    });
                }
            } else {
                container.innerHTML = '';
            }
        }

        // ============ INITIALISATION GLOBALE ============
        document.addEventListener('DOMContentLoaded', function() {
            console.log('EduSearch - vérification authentification');
            
            // 1. Vérifier l'authentification (redirige vers login si non connecté)
            if (!checkAuthOnLoad()) {
                return; // Redirection en cours
            }
            
            // 2. Initialiser le tracking d'activité (30 minutes)
            initActivityTracking();
            
            // 3. Mettre à jour l'interface (afficher logout)
            updateAuthUI();

            // ============ CODE ORIGINAL DE LA PAGE EDUSEARCH ============
            const searchInput = document.getElementById('searchInput');
            const searchResults = document.getElementById('searchResults');
            const spinner = document.getElementById('spinner');
            const searchIcon = document.getElementById('searchIcon');
            const popularItems = document.querySelectorAll('.popular-item');
            const navbar = document.getElementById('navbar');

            // Navbar scroll effect
            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    window.requestAnimationFrame(function() {
                        const currentScroll = window.pageYOffset;
                        if (currentScroll > 10) {
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }
                        ticking = false;
                    });
                    ticking = true;
                }
            });

        

            let searchTimeout;
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                const query = this.value.trim();

                if (query.length === 0) {
                    hideResults();
                    return;
                }

                showLoading();

                searchTimeout = setTimeout(() => {
                    performSearch(query);
                    hideLoading();
                }, 300);
            });

            function performSearch(query) {
                if (query.length === 0) {
                    hideResults();
                    return;
                }

                const filteredResults = educationalResources.filter(resource => 
                    resource.title.toLowerCase().includes(query.toLowerCase()) || 
                    resource.description.toLowerCase().includes(query.toLowerCase())
                );

                displayResults(filteredResults);
            }

            function displayResults(results) {
                searchResults.innerHTML = '';

                if (results.length === 0) {
                    searchResults.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <div class="no-results-title">Aucun résultat trouvé</div>
                            <div class="no-results-subtitle">Essayez différents mots-clés</div>
                        </div>
                    `;
                    showResults();
                    return;
                }

                results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'result-item';

                    let filesHtml = '';
                    result.files.forEach(file => {
                        filesHtml += `
                            <a href="${file.url}" class="file-link" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-file-pdf file-icon" style="color: #FF3B30;"></i>
                                <span>${file.name}</span>
                                <i class="fas fa-arrow-up-right-from-square external-icon"></i>
                            </a>
                        `;
                    });

                    resultItem.innerHTML = `
                        <div class="result-title">
                            <i class="fas fa-folder"></i>
                            ${result.title}
                        </div>
                        <div class="result-description">
                            ${result.description}
                        </div>
                        <div class="files-list">
                            ${filesHtml}
                        </div>
                    `;

                    searchResults.appendChild(resultItem);
                });

                showResults();
            }

            function showLoading() {
                spinner.style.display = 'block';
                searchIcon.style.display = 'none';
            }

            function hideLoading() {
                spinner.style.display = 'none';
                searchIcon.style.display = 'block';
            }

            function showResults() {
                searchResults.classList.add('visible');
            }

            function hideResults() {
                searchResults.classList.remove('visible');
            }

            // Popular items click handler
            popularItems.forEach(item => {
                const clickHandler = function() {
                    const searchText = this.querySelector('span').textContent.trim();
                    searchInput.value = searchText;
                    searchInput.focus();
                    searchInput.dispatchEvent(new Event('input'));
                };

                item.addEventListener('click', clickHandler);
                
                // Keyboard accessibility
                item.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        clickHandler.call(this);
                    }
                });
            });

            // Click outside to close results
            document.addEventListener('click', function(e) {
                if (!searchResults.contains(e.target) && !searchInput.contains(e.target)) {
                    hideResults();
                }
            });

            // Escape key to close results
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    hideResults();
                    searchInput.blur();
                }
            });

            // Mettre à jour l'activité initiale
            updateUserActivity();
        });

        // ---------- PROTECTION CACHE (PAGESHOW) ----------
        window.addEventListener('pageshow', function(event) {
            if (event.persisted) {
                if (!eduwell_isAuthenticated()) {
                    window.location.href = './login.html';
                } else {
                    updateAuthUI();
                }
            }
        });

        // ---------- EMPÊCHER CLIC DROIT & RACCOURCIS (OPTIONNEL) ----------
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