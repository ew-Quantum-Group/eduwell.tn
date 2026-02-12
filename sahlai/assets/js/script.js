   (function() {
            "use strict";

            // ---------- CONFIG AUTHENTIFICATION (copié de l'ancien projet) ----------
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

            // ---------- GESTIONNAIRE VIDÉO (CORRIGÉ) ----------
            function initVideoModal() {
                const modal = document.getElementById('videoModal');
                const openBtn1 = document.getElementById('openVideoBtn');
                const openBtn2 = document.getElementById('openVideoBtn2');
                const closeBtn = document.getElementById('closeVideoBtn');
                const iframe = document.getElementById('youtubeIframe');

                if (!modal || !openBtn1 || !openBtn2 || !closeBtn || !iframe) return;

                // Fonction pour ouvrir la modale
                function openModal(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Empêcher le scroll
                    // Recharger l'iframe si nécessaire (pour éviter l'écran noir)
                    if (iframe) {
                        const src = iframe.src;
                        iframe.src = '';
                        setTimeout(() => { iframe.src = src; }, 50);
                    }
                }

                // Fonction pour fermer la modale
                function closeModal(e) {
                    if (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto'; // Restaurer scroll
                    // Arrêter la vidéo
                    if (iframe) {
                        iframe.src = '';
                        setTimeout(() => {
                            iframe.src = 'https://www.youtube.com/embed/KFPtI4wKB8o?rel=0&modestbranding=1&enablejsapi=1';
                        }, 100);
                    }
                }

                // Attacher les événements
                openBtn1.addEventListener('click', openModal);
                openBtn2.addEventListener('click', openModal);
                closeBtn.addEventListener('click', closeModal);

                // Fermer en cliquant à l'extérieur du contenu
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        closeModal(e);
                    }
                });

                // Fermer avec la touche Echap
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape' && modal.classList.contains('active')) {
                        closeModal(e);
                    }
                });
            }

            // ---------- EFFET SCROLL NAVBAR ----------
            function initNavbarScroll() {
                const navbar = document.getElementById('navbar');
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
            }

            // ---------- ANIMATION FEATURE CARDS (OPTIONNELLE) ----------
            function initFeatureCardsAnimation() {
                const cards = document.querySelectorAll('.feature-card');
                if (cards.length === 0) return;
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry, index) => {
                        if (entry.isIntersecting) {
                            const card = entry.target;
                            const cardIndex = Array.from(cards).indexOf(card);
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, cardIndex * 100);
                            observer.unobserve(card);
                        }
                    });
                }, { threshold: 0.1 });

                cards.forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = 'all 0.6s cubic-bezier(0.28, 0.11, 0.32, 1)';
                    observer.observe(card);
                });
            }

            // ---------- INITIALISATION GLOBALE ----------
            document.addEventListener('DOMContentLoaded', function() {
                console.log('Page chargée - vérification authentification');
                
                // 1. Vérifier l'authentification (redirige vers login si nécessaire)
                if (!checkAuthOnLoad()) {
                    return; // Redirection en cours
                }
                
                // 2. Initialiser le tracking d'activité
                initActivityTracking();
                
                // 3. Mettre à jour l'interface (afficher logout)
                updateAuthUI();
                
                // 4. Initialiser la modale vidéo (CORRIGÉE)
                initVideoModal();
                
                // 5. Initialiser l'effet de scroll sur la navbar
                initNavbarScroll();
                
                // 6. Initialiser l'animation des cartes
                initFeatureCardsAnimation();
                
                // 7. Mettre à jour l'activité initiale
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

        })(); // Fin IIFE
  