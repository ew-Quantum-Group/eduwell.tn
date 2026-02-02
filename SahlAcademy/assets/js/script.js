 // ============================
        // VIDEO MANAGEMENT SYSTEM
        // ============================
        
        // Video configuration storage
        const VIDEO_CONFIG = {
            selectedVideosKey: 'eduwell_selected_videos',
            videoCountKey: 'eduwell_video_count',
            activeLevelKey: 'eduwell_active_level'
        };

        // Video levels/types
        const VIDEO_LEVELS = [
            { id: 'beginner', name: 'Débutant', description: 'Vidéos pour les débutants' },
            { id: 'intermediate', name: 'Intermédiaire', description: 'Vidéos de niveau intermédiaire' },
            { id: 'advanced', name: 'Avancé', description: 'Vidéos pour utilisateurs avancés' }
        ];

        // Default video selection for each level
        const DEFAULT_VIDEO_SELECTIONS = {
            beginner: [1, 2, 9], // Video IDs for beginner level
            intermediate: [3, 4, 6, 10, 13], // Video IDs for intermediate level
            advanced: [5, 7, 8, 11, 14] // Video IDs for advanced level
        };

        // Get selected videos from localStorage or use defaults
        function getSelectedVideos() {
            const stored = localStorage.getItem(VIDEO_CONFIG.selectedVideosKey);
            if (stored) {
                return JSON.parse(stored);
            }
            // Return defaults if nothing stored
            return DEFAULT_VIDEO_SELECTIONS;
        }

        // Save selected videos to localStorage
        function saveSelectedVideos(selections) {
            localStorage.setItem(VIDEO_CONFIG.selectedVideosKey, JSON.stringify(selections));
        }

        // Get video count from localStorage or use default
        function getVideoCount() {
            const stored = localStorage.getItem(VIDEO_CONFIG.videoCountKey);
            return stored ? parseInt(stored) : 5; // Default to 5 videos
        }

        // Save video count to localStorage
        function saveVideoCount(count) {
            localStorage.setItem(VIDEO_CONFIG.videoCountKey, count.toString());
        }

        // Get active level from localStorage or use default
        function getActiveLevel() {
            const stored = localStorage.getItem(VIDEO_CONFIG.activeLevelKey);
            return stored || 'beginner'; // Default to beginner level
        }

        // Save active level to localStorage
        function saveActiveLevel(level) {
            localStorage.setItem(VIDEO_CONFIG.activeLevelKey, level);
        }

      
        // Get videos based on current settings
        function getRecommendedVideos() {
            const activeLevel = getActiveLevel();
            const selectedVideos = getSelectedVideos();
            const videoCount = getVideoCount();
            
            // Get selected video IDs for active level
            const selectedVideoIds = selectedVideos[activeLevel] || [];
            
            // Filter videos by selected IDs
            let recommended = videos.filter(video => 
                selectedVideoIds.includes(video.id)
            );
            
            // If no videos selected for this level, use level-based filtering
            if (recommended.length === 0) {
                recommended = videos.filter(video => video.level === activeLevel);
            }
            
            // Limit number of videos based on setting
            if (videoCount !== 'all') {
                const count = parseInt(videoCount);
                recommended = recommended.slice(0, count);
            }
            
            return recommended;
        }

        // Function to get videos by subject and course
        function getVideosBySubjectAndCourse(subject, course) {
            return videos.filter(video => 
                video.subject === subject && video.course === course
            );
        }

        // Function to get videos by subject only (for homepage display)
        function getVideosBySubject(subject) {
            return videos.filter(video => video.subject === subject);
        }

        // Function to get all unique courses for a subject
        function getCoursesBySubject(subject) {
            return coursesBySubject[subject] || [];
        }

   
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
        let currentCourse = null;
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
        const lessonPopupOverlay = document.getElementById('lessonPopupOverlay');
        const lessonPopupContainer = document.getElementById('lessonPopupContainer');
        const lessonPopupClose = document.getElementById('lessonPopupClose');
        const lessonPopupTitle = document.getElementById('lessonPopupTitle');
        const lessonPopupContent = document.getElementById('lessonPopupContent');
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
        
        // Video Settings Elements
        const videoSettingsTrigger = document.getElementById('videoSettingsTrigger');
        const videoSettingsPanel = document.getElementById('videoSettingsPanel');
        const videoSettingsClose = document.getElementById('videoSettingsClose');
        const levelFilter = document.getElementById('levelFilter');
        const videoCountSelect = document.getElementById('videoCountSelect');
        const videoSelectionList = document.getElementById('videoSelectionList');
        const settingsSaveBtn = document.getElementById('settingsSaveBtn');
        const settingsCancelBtn = document.getElementById('settingsCancelBtn');

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
            initVideoSettings();
            renderSubjects();
            renderRecommendedVideos();
            initFilterButtons();
            initPopup();
            initLessonPopup();
            initNavPopup();
            initScrollAnimations();
            
            // Show welcome message
            setTimeout(() => {
                showToast(`Bienvenue ${currentUser} !`, 'success');
            }, 1000);
        }

        // ============================
        // VIDEO SETTINGS MANAGEMENT
        // ============================
        function initVideoSettings() {
            // Open settings panel
            videoSettingsTrigger.addEventListener('click', openVideoSettings);
            videoSettingsClose.addEventListener('click', closeVideoSettings);
            settingsCancelBtn.addEventListener('click', closeVideoSettings);
            settingsSaveBtn.addEventListener('click', saveVideoSettings);
            
            // Close panel on overlay click
            videoSettingsPanel.addEventListener('click', (e) => {
                if (e.target === videoSettingsPanel) {
                    closeVideoSettings();
                }
            });
            
            // Initialize level filter buttons
            initLevelFilter();
            
            // Initialize video count selector
            const savedCount = getVideoCount();
            videoCountSelect.value = savedCount === 'all' ? 'all' : savedCount.toString();
        }

        function initLevelFilter() {
            levelFilter.innerHTML = '';
            
            VIDEO_LEVELS.forEach(level => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'level-filter-btn';
                button.textContent = level.name;
                button.dataset.level = level.id;
                
                // Set active state based on saved level
                if (level.id === getActiveLevel()) {
                    button.classList.add('active');
                }
                
                button.addEventListener('click', () => {
                    // Update active level
                    saveActiveLevel(level.id);
                    
                    // Update UI
                    document.querySelectorAll('.level-filter-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    button.classList.add('active');
                    
                    // Load videos for this level
                    loadVideoSelectionList(level.id);
                    
                    // Update main video display
                    renderRecommendedVideos();
                });
                
                levelFilter.appendChild(button);
            });
        }

        function openVideoSettings() {
            const activeLevel = getActiveLevel();
            
            // Load video selection for active level
            loadVideoSelectionList(activeLevel);
            
            // Show settings panel
            videoSettingsPanel.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeVideoSettings() {
            videoSettingsPanel.classList.remove('active');
            document.body.style.overflow = '';
        }

        function loadVideoSelectionList(level) {
            const selectedVideos = getSelectedVideos();
            const selectedVideoIds = selectedVideos[level] || [];
            
            videoSelectionList.innerHTML = '';
            
            // Filter videos by level
            const levelVideos = videos.filter(video => video.level === level);
            
            if (levelVideos.length === 0) {
                videoSelectionList.innerHTML = `
                    <div style="text-align: center; padding: var(--space-8); color: var(--gray-500);">
                        <i class="fas fa-video-slash" style="font-size: var(--font-size-2xl); margin-bottom: var(--space-3);"></i>
                        <p>Aucune vidéo disponible pour ce niveau</p>
                    </div>
                `;
                return;
            }
            
            levelVideos.forEach(video => {
                const isSelected = selectedVideoIds.includes(video.id);
                
                const item = document.createElement('div');
                item.className = `video-selection-item ${isSelected ? 'selected' : ''}`;
                item.dataset.videoId = video.id;
                
                item.innerHTML = `
                    <div class="video-selection-checkbox ${isSelected ? 'selected' : ''}">
                        ${isSelected ? '<i class="fas fa-check"></i>' : ''}
                    </div>
                    <div class="video-selection-info">
                        <div class="video-selection-title">${video.title}</div>
                        <div class="video-selection-meta">
                            <span>${video.subject}</span>
                            <span>•</span>
                            <span>${video.duration}</span>
                        </div>
                    </div>
                `;
                
                item.addEventListener('click', () => {
                    toggleVideoSelection(video.id, level);
                });
                
                videoSelectionList.appendChild(item);
            });
        }

        function toggleVideoSelection(videoId, level) {
            const selectedVideos = getSelectedVideos();
            const currentSelection = selectedVideos[level] || [];
            
            const index = currentSelection.indexOf(videoId);
            
            if (index > -1) {
                // Remove video from selection
                currentSelection.splice(index, 1);
            } else {
                // Add video to selection
                currentSelection.push(videoId);
            }
            
            // Update storage
            selectedVideos[level] = currentSelection;
            saveSelectedVideos(selectedVideos);
            
            // Update UI
            loadVideoSelectionList(level);
            
            // Update main video display
            renderRecommendedVideos();
        }

        function saveVideoSettings() {
            // Video count is already saved when changed
            const videoCount = videoCountSelect.value;
            saveVideoCount(videoCount === 'all' ? 'all' : parseInt(videoCount));
            
            // Show success message
            showToast('Paramètres enregistrés avec succès', 'success');
            
            // Update main video display
            renderRecommendedVideos();
            
            // Close settings panel
            closeVideoSettings();
        }

        // ============================
        // RECOMMENDED VIDEOS RENDERING
        // ============================
        function renderRecommendedVideos() {
            const recommendedVideos = getRecommendedVideos();
            
            videosGrid.innerHTML = '';
            
            if (recommendedVideos.length === 0) {
                videosGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); color: var(--gray-500);">
                        <i class="fas fa-video-slash" style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);"></i>
                        <h3 style="margin-bottom: var(--space-2); color: var(--gray-700);">Aucune vidéo disponible</h3>
                        <p>Sélectionnez des vidéos dans les paramètres ou changez de niveau</p>
                    </div>
                `;
                return;
            }
            
            recommendedVideos.forEach((video, index) => {
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
                                <span>${video.subject} • ${video.course}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-chart-line"></i>
                                <span>${getLevelName(video.level)}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // Open course selection popup for the video's subject
                videoCard.addEventListener('click', () => {
                    openLessonPopup(video.subject);
                });
                
                videosGrid.appendChild(videoCard);
            });
        }

        function getLevelName(levelId) {
            const level = VIDEO_LEVELS.find(l => l.id === levelId);
            return level ? level.name : levelId;
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
        // LESSON SELECTION POPUP
        // ============================
        function initLessonPopup() {
            lessonPopupOverlay.addEventListener('click', closeLessonPopup);
            lessonPopupClose.addEventListener('click', closeLessonPopup);
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lessonPopupContainer.classList.contains('active')) {
                    closeLessonPopup();
                }
            });
            
            // Prevent clicks inside popup from closing it
            lessonPopupContainer.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }

        function openLessonPopup(subjectName) {
            currentSubject = subjectName;
            
            const courses = getCoursesBySubject(subjectName);
            if (!courses || courses.length === 0) {
                showToast(`Aucun cours disponible pour ${subjectName}`, 'error');
                return;
            }
            
            eduwell_updateLastActivity();
            
            // Update popup title
            lessonPopupTitle.innerHTML = `<i class="fas fa-book"></i><span>Cours de ${subjectName}</span>`;
            
            // Clear and render course cards
            lessonPopupContent.innerHTML = `
                <p style="margin-bottom: var(--space-6); color: var(--gray-700);">
                    Sélectionnez un cours pour accéder aux vidéos correspondantes.
                </p>
                <div class="lesson-grid" id="courseGrid">
                    <!-- Course cards will be populated here -->
                </div>
            `;
            
            const courseGrid = document.getElementById('courseGrid');
            courseGrid.innerHTML = '';
            
            courses.forEach((course, index) => {
                const courseCard = document.createElement('div');
                courseCard.className = 'lesson-card fade-in';
                courseCard.style.animationDelay = `${index * 0.1}s`;
                courseCard.innerHTML = `
                    <div class="lesson-icon">
                        <i class="${course.icon}"></i>
                    </div>
                    <div class="lesson-name">${course.name}</div>
                    <div style="position: absolute; bottom: var(--space-3); right: var(--space-3); font-size: var(--font-size-xs); color: var(--gray-500);">
                        ${course.videoCount} vidéos
                    </div>
                `;
                
                courseCard.addEventListener('click', () => {
                    selectCourse(course);
                });
                
                courseGrid.appendChild(courseCard);
            });
            
            // Show popup
            document.body.style.overflow = 'hidden';
            lessonPopupOverlay.classList.add('active');
            lessonPopupContainer.classList.add('active');
        }

        function selectCourse(course) {
            currentCourse = course;
            closeLessonPopup();
            
            // Get videos for this specific subject and course
            const courseVideos = getVideosBySubjectAndCourse(currentSubject, course.name);
            
            if (courseVideos.length === 0) {
                showToast(`Aucune vidéo disponible pour ${course.name}`, 'error');
                return;
            }
            
            // Open video playlist popup
            setTimeout(() => {
                openVideoPopup(currentSubject, course.name, courseVideos, 0);
            }, 300);
        }

        function closeLessonPopup() {
            document.body.style.overflow = '';
            lessonPopupOverlay.classList.remove('active');
            lessonPopupContainer.classList.remove('active');
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
                
                // Open course selection popup
                subjectCard.addEventListener('click', () => openLessonPopup(subject.name));
                subjectsGrid.appendChild(subjectCard);
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
                    
                    const filter = button.dataset.filter;
                    let filteredVideos = getRecommendedVideos();
                    
                    if (filter === 'new') {
                        filteredVideos = filteredVideos.filter(video => video.isNew);
                    } else if (filter === 'popular') {
                        filteredVideos = filteredVideos.sort((a, b) => {
                            const viewsA = parseInt(a.views) || 0;
                            const viewsB = parseInt(b.views) || 0;
                            return viewsB - viewsA;
                        });
                    } else if (filter === 'recent') {
                        filteredVideos = filteredVideos.sort((a, b) => new Date(b.date) - new Date(a.date));
                    } else if (['beginner', 'intermediate', 'advanced'].includes(filter)) {
                        // Change level and update display
                        saveActiveLevel(filter);
                        renderRecommendedVideos();
                        return;
                    }
                    
                    // For other filters, render the filtered videos
                    renderFilteredVideos(filteredVideos);
                });
            });
        }

        function renderFilteredVideos(filteredVideos) {
            videosGrid.innerHTML = '';
            
            if (filteredVideos.length === 0) {
                videosGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); color: var(--gray-500);">
                        <i class="fas fa-video-slash" style="font-size: var(--font-size-4xl); margin-bottom: var(--space-4);"></i>
                        <h3 style="margin-bottom: var(--space-2); color: var(--gray-700);">Aucune vidéo trouvée</h3>
                        <p>Essayez avec un autre filtre</p>
                    </div>
                `;
                return;
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
                                <span>${video.subject} • ${video.course}</span>
                            </div>
                            <div class="meta-item">
                                <i class="fas fa-chart-line"></i>
                                <span>${getLevelName(video.level)}</span>
                            </div>
                        </div>
                    </div>
                `;
                
                // Open course selection popup for the video's subject
                videoCard.addEventListener('click', () => {
                    openLessonPopup(video.subject);
                });
                
                videosGrid.appendChild(videoCard);
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

        function openVideoPopup(subjectName, courseName, videosList = null, startIndex = 0) {
            currentSubject = subjectName;
            currentCourse = courseName;
            currentVideos = videosList || getVideosBySubjectAndCourse(subjectName, courseName);
            
            if (currentVideos.length === 0) {
                showToast(`Aucune vidéo disponible pour ${courseName}`, 'error');
                return;
            }
            
            eduwell_updateLastActivity();
            
            // Update title to include subject and course
            popupSubjectTitle.textContent = `${subjectName} - ${courseName}`;
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
                    videoSourceIndicator.innerHTML = '<i class="fab fa-youtube"></i><span>SahlAcademy</span>';
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
                            <i class="fas fa-chart-line"></i>
                            <span>${getLevelName(video.level)}</span>
                        </div>
                    </div>
                `;
            }
            
            updateActivePlaylistItem();
        }

        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
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
                            <span>•</span>
                            <span>${getLevelName(video.level)}</span>
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
            currentCourse = null;
            currentVideoIndex = 0;
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
            
            document.querySelectorAll('.subject-card, .video-card, .lesson-card').forEach(card => {
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
