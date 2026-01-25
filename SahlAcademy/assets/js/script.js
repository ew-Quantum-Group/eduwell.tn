   // ============================
        // AUTHENTICATION SYSTEM
        // ============================
        const AUTH_CONFIG = {
            isLoggedInKey: 'eduwell_svt_isLoggedIn',
            usernameKey: 'eduwell_svt_username',
            lastActivityKey: 'eduwell_svt_lastActivity'
        };

        // ============================
        // AUTHENTICATION FUNCTIONS
        // ============================
        function eduwell_isAuthenticated() {
            return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        }

        function eduwell_getCurrentUser() {
            return localStorage.getItem(AUTH_CONFIG.usernameKey) || 'Utilisateur';
        }

        function eduwell_updateLastActivity() {
            localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
        }

        function eduwell_checkSessionTimeout() {
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (!lastActivity) return true;
            
            const lastActivityTime = parseInt(lastActivity);
            const currentTime = Date.now();
            const minutesDiff = (currentTime - lastActivityTime) / (1000 * 60);
            
            if (minutesDiff >= 30) {
                eduwell_logout(true);
                return false;
            }
            return true;
        }

        function eduwell_logout(isSessionExpired = false) {
            localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
            localStorage.removeItem(AUTH_CONFIG.usernameKey);
            localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
            
            const redirectUrl = isSessionExpired 
                ? 'login.html?message=session_expired' 
                : 'login.html';
            
            window.location.href = redirectUrl;
        }

       

        // ============================
        // STATE MANAGEMENT
        // ============================
        let currentUser = null;
        let currentSubject = null;
        let currentVideoIndex = 0;
        let currentVideos = [];
        let userVideos = JSON.parse(localStorage.getItem('eduwell_user_videos') || '[]');

        // ============================
        // DOM ELEMENTS
        // ============================
        const loader = document.getElementById('loader');
        const mainHeader = document.getElementById('mainHeader');
        const userMenuButton = document.getElementById('userMenuButton');
        const userDropdown = document.getElementById('userDropdown');
        const logoutButton = document.getElementById('logoutButton');
        const mobileLogoutButton = document.getElementById('mobileLogoutButton');
        const profileAvatar = document.getElementById('profileAvatar');
        const profileName = document.getElementById('profileName');
        const userName = document.getElementById('userName');
        const userAvatar = document.getElementById('userAvatar');
        const subjectsGrid = document.getElementById('subjectsGrid');
        const videosGrid = document.getElementById('videosGrid');
        const filterButtons = document.querySelectorAll('.filter-button');
        const popupOverlay = document.getElementById('popupOverlay');
        const popupContainer = document.getElementById('popupContainer');
        const popupClose = document.getElementById('popupClose');
        const popupSubjectTitle = document.getElementById('popupSubjectTitle');
        const videoPlayer = document.getElementById('videoPlayer');
        const playlistCount = document.getElementById('playlistCount');
        const playlistItems = document.getElementById('playlistItems');
        const navPopupOverlay = document.getElementById('navPopupOverlay');
        const navPopupContainer = document.getElementById('navPopupContainer');
        const navPopupClose = document.getElementById('navPopupClose');
        const navPopupTitle = document.getElementById('navPopupTitle');
        const navPopupContent = document.getElementById('navPopupContent');
        const toastContainer = document.getElementById('toastContainer');
        const navLinks = document.querySelectorAll('.nav-link');
        const dropdownItems = document.querySelectorAll('.dropdown-item');
        const footerLinks = document.querySelectorAll('.footer-links a');
        const videoSourceIndicator = document.getElementById('videoSourceIndicator');
        const videoInfo = document.getElementById('videoInfo');
        const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

        // ============================
        // INITIALIZATION
        // ============================
        document.addEventListener('DOMContentLoaded', () => {
            if (!eduwell_isAuthenticated()) {
                sessionStorage.setItem('eduwell_redirect_url', window.location.pathname);
                window.location.href = 'login.html';
                return;
            }
            
            if (!eduwell_checkSessionTimeout()) {
                return;
            }
            
            eduwell_updateLastActivity();
            initPageAfterAuth();
        });

        function initPageAfterAuth() {
            currentUser = eduwell_getCurrentUser();
            
            // Update user info
            updateUserInfo();
            
            // Setup activity tracking
            setupActivityTracking();
            
            // Initialize UI
            initLoader();
            initHeader();
            initUserMenu();
            initNavigationPopups();
            initLogoutButtons();
            renderSubjects();
            renderVideos();
            initFilterButtons();
            initPopup();
            initNavPopup();
            initQuickActions();
            initScrollAnimations();
            
            // Show welcome message
            setTimeout(() => {
                showToast(`Bienvenue ${currentUser} !`, 'success');
            }, 1000);
        }

        // ============================
        // UI INITIALIZATION
        // ============================
        function initLoader() {
            const loaderProgressBar = document.querySelector('.loader-progress-bar');
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress > 100) progress = 100;
                loaderProgressBar.style.width = progress + '%';
                
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        loader.classList.add('hidden');
                        document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
                            el.style.animationPlayState = 'running';
                        });
                    }, 300);
                }
            }, 150);
        }

        function initHeader() {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    mainHeader.classList.add('scrolled');
                } else {
                    mainHeader.classList.remove('scrolled');
                }
            });
        }

        function initUserMenu() {
            userMenuButton.addEventListener('click', (e) => {
                e.stopPropagation();
                userDropdown.classList.toggle('show');
            });

            document.addEventListener('click', (e) => {
                if (!userMenuButton.contains(e.target) && !userDropdown.contains(e.target)) {
                    userDropdown.classList.remove('show');
                }
            });
        }

        function initLogoutButtons() {
            // Desktop logout button
            logoutButton.addEventListener('click', () => {
                logout();
            });

            // Mobile logout button
            mobileLogoutButton.addEventListener('click', () => {
                logout();
            });
        }

        function logout() {
            showToast('Déconnexion en cours...', 'info');
            setTimeout(() => {
                eduwell_logout();
            }, 800);
        }

        function updateUserInfo() {
            const initials = currentUser
                .split(' ')
                .map(word => word.charAt(0).toUpperCase())
                .join('')
                .substring(0, 2);
            
            if (profileAvatar) profileAvatar.textContent = initials || 'U';
            if (profileName) profileName.textContent = currentUser;
            if (userName) userName.textContent = currentUser;
            if (userAvatar) userAvatar.textContent = initials || 'U';
        }

        // ============================
        // NAVIGATION POPUPS
        // ============================
        function initNavigationPopups() {
            // Header navigation links (desktop)
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const popupType = link.getAttribute('data-popup');
                    if (popupType) {
                        openNavPopup(popupType);
                    }
                });
            });

            // Mobile navigation items
            mobileNavItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const popupType = item.getAttribute('data-popup');
                    if (popupType) {
                        openNavPopup(popupType);
                    }
                });
            });

            // Dropdown menu items
            dropdownItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const popupType = item.getAttribute('data-popup');
                    if (popupType) {
                        openNavPopup(popupType);
                        userDropdown.classList.remove('show');
                    }
                });
            });

            // Footer links
            footerLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const popupType = link.getAttribute('data-popup');
                    if (popupType) {
                        openNavPopup(popupType);
                    }
                });
            });

            // View all button in activity section
            const viewAllButton = document.querySelector('.view-all-button');
            if (viewAllButton) {
                viewAllButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    openNavPopup('activity');
                });
            }
        }

        function initNavPopup() {
            navPopupOverlay.addEventListener('click', closeNavPopup);
            navPopupClose.addEventListener('click', closeNavPopup);
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navPopupContainer.classList.contains('active')) {
                    closeNavPopup();
                }
            });
            
            // Prevent clicks inside popup from closing it
            navPopupContainer.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        function openNavPopup(type) {
            const content = popupContent[type];
            if (!content) {
                showToast('Contenu non disponible', 'error');
                return;
            }
            
            eduwell_updateLastActivity();
            
            // Update popup title and icon
            navPopupTitle.innerHTML = `<i class="${content.icon}"></i><span>${content.title}</span>`;
            
            // Update popup content
            navPopupContent.innerHTML = content.content;
            
            // Show popup
            document.body.style.overflow = 'hidden';
            navPopupOverlay.classList.add('active');
            navPopupContainer.classList.add('active');
        }

        function closeNavPopup() {
            document.body.style.overflow = '';
            navPopupOverlay.classList.remove('active');
            navPopupContainer.classList.remove('active');
        }

        // ============================
        // RENDERING FUNCTIONS
        // ============================
        function renderSubjects() {
            subjectsGrid.innerHTML = '';
            subjects.forEach((subject, index) => {
                const subjectCard = document.createElement('div');
                subjectCard.className = 'subject-card fade-in';
                subjectCard.style.animationDelay = `${index * 0.05}s`;
                subjectCard.innerHTML = `
                    <div class="subject-icon" style="background: ${subject.bgColor}; color: ${subject.color};">
                        <i class="${subject.icon}"></i>
                    </div>
                    <div class="subject-name">${subject.name}</div>
                    <div style="position: absolute; bottom: var(--space-3); right: var(--space-3); font-size: var(--font-size-xs); color: var(--gray-500);">
                        ${subject.videos} vidéos
                    </div>
                `;
                
                subjectCard.addEventListener('click', () => openSubjectPopup(subject.name));
                subjectsGrid.appendChild(subjectCard);
            });
        }

        function renderVideos(filter = 'all') {
            videosGrid.innerHTML = '';
            let filteredVideos = [...videos, ...userVideos];
            
            if (filter === 'new') {
                filteredVideos = filteredVideos.filter(video => video.isNew);
            } else if (filter === 'popular') {
                filteredVideos = filteredVideos.sort((a, b) => {
                    const viewsA = parseInt(a.views) || 0;
                    const viewsB = parseInt(b.views) || 0;
                    return viewsB - viewsA;
                }).slice(0, 6);
            } else if (filter === 'recent') {
                filteredVideos = filteredVideos.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);
            }
            
            filteredVideos.forEach((video, index) => {
                const videoCard = document.createElement('article');
                videoCard.className = 'video-card fade-in';
                videoCard.style.animationDelay = `${index * 0.1}s`;
                videoCard.innerHTML = `
                    <div class="video-thumbnail">
                        <div class="play-button"><i class="fas fa-play"></i></div>
                        ${video.isNew ? '<div class="video-badge">NOUVEAU</div>' : ''}
                        ${video.addedByUser ? '<div class="video-badge" style="background: var(--green);">PERSONNELLE</div>' : ''}
                        <div class="video-duration">${video.duration}</div>
                    </div>
                    <div class="video-content">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-description">${video.description}</p>
                        <div class="video-meta">
                            <div class="meta-item">
                                <i class="fas fa-user-graduate"></i>
                                <span>${video.instructor}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-eye"></i>
                                <span>${video.views} vues</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-book"></i>
                                <span>${video.subject}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                videoCard.addEventListener('click', () => {
                    const subjectVideos = [...videos, ...userVideos].filter(v => v.subject === video.subject);
                    openSubjectPopup(video.subject, subjectVideos, subjectVideos.findIndex(v => v.id === video.id));
                });
                
                videosGrid.appendChild(videoCard);
            });
        }

        // ============================
        // FILTER FUNCTIONALITY
        // ============================
        function initFilterButtons() {
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    renderVideos(button.dataset.filter);
                });
            });
        }

        // ============================
        // VIDEO POPUP FUNCTIONALITY
        // ============================
        function initPopup() {
            popupOverlay.addEventListener('click', closePopup);
            popupClose.addEventListener('click', closePopup);
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && popupContainer.classList.contains('active')) {
                    closePopup();
                }
            });
            
            // Prevent clicks inside popup from closing it
            popupContainer.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        function openSubjectPopup(subjectName, videosList = null, startIndex = 0) {
            currentSubject = subjectName;
            currentVideos = videosList || [...videos, ...userVideos].filter(v => v.subject === subjectName);
            
            if (currentVideos.length === 0) {
                showToast(`Aucune vidéo disponible pour ${subjectName}`, 'error');
                return;
            }
            
            eduwell_updateLastActivity();
            
            popupSubjectTitle.textContent = `Vidéos de ${subjectName}`;
            loadVideo(currentVideos[startIndex], startIndex);
            renderPlaylist();
            
            document.body.style.overflow = 'hidden';
            popupOverlay.classList.add('active');
            popupContainer.classList.add('active');
        }

        function loadVideo(video, index) {
            currentVideoIndex = index;
            
            let videoUrl = '';
            if (video.source === 'youtube') {
                videoUrl = `https://www.youtube.com/embed/${video.sourceId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
            } else if (video.source === 'drive') {
                videoUrl = `https://drive.google.com/file/d/${video.sourceId}/preview`;
            }
            
            videoPlayer.src = videoUrl;
            
            // Update source indicator
            if (videoSourceIndicator) {
                if (video.source === 'youtube') {
                    videoSourceIndicator.innerHTML = '<i class="fab fa-youtube"></i><span>YouTube</span>';
                } else if (video.source === 'drive') {
                    videoSourceIndicator.innerHTML = '<i class="fab fa-google-drive"></i><span>Google Drive</span>';
                }
            }
            
            // Update video info
            if (videoInfo) {
                videoInfo.innerHTML = `
                    <h4 class="video-info-title">${video.title}</h4>
                    <div class="video-info-meta">
                        <div class="video-info-meta-item">
                            <i class="fas fa-user-graduate"></i>
                            <span>${video.instructor}</span>
                        </div>
                        <div class="video-info-meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${video.duration}</span>
                        </div>
                        <div class="video-info-meta-item">
                            <i class="fas fa-eye"></i>
                            <span>${video.views} vues</span>
                        </div>
                    </div>
                `;
            }
            
            updateActivePlaylistItem();
        }

        function renderPlaylist() {
            playlistItems.innerHTML = '';
            playlistCount.textContent = `${currentVideos.length} vidéo${currentVideos.length > 1 ? 's' : ''}`;
            
            currentVideos.forEach((video, index) => {
                const playlistItem = document.createElement('div');
                playlistItem.className = `playlist-item ${index === currentVideoIndex ? 'active' : ''}`;
                playlistItem.innerHTML = `
                    <div class="playlist-number">${index + 1}</div>
                    <div class="playlist-item-content">
                        <div class="playlist-item-title">${video.title}</div>
                        <div class="playlist-item-meta">
                            <span>${video.duration}</span>
                            <span>•</span>
                            <span>${video.instructor}</span>
                        </div>
                    </div>
                    <div class="source-badge ${video.source || 'youtube'}">
                        ${video.source === 'drive' ? 'Drive' : 'YT'}
                    </div>
                    <button class="play-button-small" aria-label="Lire la vidéo ${index + 1}">
                        <i class="fas fa-play"></i>
                    </button>
                `;
                
                playlistItem.addEventListener('click', (e) => {
                    if (!e.target.closest('.play-button-small')) {
                        loadVideo(video, index);
                    }
                });
                
                const playButton = playlistItem.querySelector('.play-button-small');
                playButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    loadVideo(video, index);
                });
                
                playlistItems.appendChild(playlistItem);
            });
            
            // Scroll to active item
            setTimeout(() => {
                const activeItem = document.querySelector('.playlist-item.active');
                if (activeItem) {
                    activeItem.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest'
                    });
                }
            }, 100);
        }

        function updateActivePlaylistItem() {
            document.querySelectorAll('.playlist-item').forEach((item, index) => {
                item.classList.toggle('active', index === currentVideoIndex);
                const number = item.querySelector('.playlist-number');
                if (number) {
                    number.textContent = index + 1;
                }
            });
        }

        function closePopup() {
            videoPlayer.src = '';
            document.body.style.overflow = '';
            popupOverlay.classList.remove('active');
            popupContainer.classList.remove('active');
            currentSubject = null;
            currentVideoIndex = 0;
        }

        // ============================
        // QUICK ACTIONS
        // ============================
        function initQuickActions() {
            document.getElementById('addVideoBtn').addEventListener('click', () => {
                showToast('Fonctionnalité à venir : Ajout de vidéos', 'info');
            });
            
            document.getElementById('scheduleBtn').addEventListener('click', () => {
                showToast('Fonctionnalité à venir : Planificateur', 'info');
            });
            
            document.getElementById('notesBtn').addEventListener('click', () => {
                showToast('Fonctionnalité à venir : Notes personnelles', 'info');
            });
            
            document.getElementById('communityBtn').addEventListener('click', () => {
                showToast('Fonctionnalité à venir : Communauté', 'info');
            });
        }

        // ============================
        // ANIMATIONS
        // ============================
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            document.querySelectorAll('.subject-card, .video-card, .action-card').forEach(card => {
                observer.observe(card);
            });
        }

        // ============================
        // ACTIVITY TRACKING
        // ============================
        function setupActivityTracking() {
            const activityEvents = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
            
            activityEvents.forEach(event => {
                document.addEventListener(event, eduwell_updateLastActivity, { passive: true });
            });
            
            setInterval(() => {
                if (!eduwell_checkSessionTimeout()) {
                    showToast('Votre session a expiré en raison d\'inactivité', 'error');
                }
            }, 60000);
        }

        // ============================
        // TOAST SYSTEM
        // ============================
        function showToast(message, type = "info") {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icons = {
                success: 'check-circle',
                error: 'exclamation-circle',
                warning: 'exclamation-triangle',
                info: 'info-circle'
            };
            
            toast.innerHTML = `
                <i class="fas fa-${icons[type] || 'info-circle'}"></i>
                <span>${message}</span>
            `;
            
            toastContainer.appendChild(toast);
            
            setTimeout(() => toast.classList.add('show'), 10);
            
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // ============================
        // TOUCH SUPPORT
        // ============================
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (!popupContainer.classList.contains('active')) return;
            
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentSubject) {
                    // Swipe left - next video
                    if (currentVideos.length > 0) {
                        const nextIndex = (currentVideoIndex + 1) % currentVideos.length;
                        loadVideo(currentVideos[nextIndex], nextIndex);
                    }
                } else if (diff < 0 && currentSubject) {
                    // Swipe right - previous video
                    if (currentVideos.length > 0) {
                        const prevIndex = (currentVideoIndex - 1 + currentVideos.length) % currentVideos.length;
                        loadVideo(currentVideos[prevIndex], prevIndex);
                    }
                }
            }
        }