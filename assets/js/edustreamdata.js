


        
  // Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Data for eduSTREAM
   
    // Initialize eduSTREAM when the about section is active
    function initEduStream() {
        console.log('Initializing eduSTREAM with original project logic...');
        
        // Get eduSTREAM elements
        const eduPages = document.querySelectorAll('#about .edu-page');
        const eduNavLinks = document.querySelectorAll('#about .edu-nav-link');
        const eduMobileMenuBtn = document.getElementById('eduMobileMenuBtn');
        const eduMainNav = document.getElementById('eduMainNav');
        const eduSearchIcon = document.getElementById('eduSearchIcon');
        const eduWatchNowBtn = document.getElementById('eduWatchNowBtn');
        const eduHomeLogo = document.getElementById('eduHomeLogo');
        const eduAnimatedTextContainer = document.getElementById('eduAnimatedTextContainer');
        const eduScrollIndicator = document.querySelector('#about .edu-scroll-indicator');
        
        // Feed elements
        const eduVideosFeed = document.getElementById('eduVideosFeed');
        const eduLoadMoreBtn = document.getElementById('eduLoadMoreBtn');
        
        // Search elements
        const eduSearchInput = document.getElementById('eduSearchInput');
        const eduSearchResults = document.getElementById('eduSearchResults');
        const eduResultsCount = document.getElementById('eduResultsCount');
        const eduNoResults = document.getElementById('eduNoResults');
        
        // Categories elements
        const eduCategoriesGrid = document.getElementById('eduCategoriesGrid');
        const eduPlaylistPage = document.getElementById('eduPlaylistPage');
        const eduPlaylistVideos = document.getElementById('eduPlaylistVideos');
        const eduPlaylistTitle = document.getElementById('eduPlaylistTitle');
        const eduPlaylistTopic = document.getElementById('eduPlaylistTopic');
        
        // Player elements
        const eduYoutubePlayer = document.getElementById('eduYoutubePlayer');
        const eduPlayerTitle = document.getElementById('eduPlayerTitle');
        const eduPlayerDescription = document.getElementById('eduPlayerDescription');
        const eduSuggestedVideos = document.getElementById('eduSuggestedVideos');
        
        // Back buttons
        const eduFeedBackBtn = document.getElementById('eduFeedBackBtn');
        const eduCategoriesBackBtn = document.getElementById('eduCategoriesBackBtn');
        const eduPlaylistBackBtn = document.getElementById('eduPlaylistBackBtn');
        const eduSearchBackBtn = document.getElementById('eduSearchBackBtn');
        const eduPlayerBackBtn = document.getElementById('eduPlayerBackBtn');

        // State variables
        let eduCurrentVideo = null;
        let eduVideosToShow = 6;
        let eduCurrentPage = 'home';
        let eduCurrentTextIndex = 0;
        let eduAnimatedTextInterval;

        // Initialize the application
        function init() {
            renderVideosFeed();
            renderCategories();
            setupEventListeners();
            setupSearch();
            initAnimatedText();
            setupScrollIndicator();
        }

        // Initialize animated text in hero section
        function initAnimatedText() {
            // Clear container first
            eduAnimatedTextContainer.innerHTML = '';
            
            // Create animated text elements
            eduAnimatedTexts.forEach((text, index) => {
                const textElement = document.createElement('div');
                textElement.className = 'edu-animated-text';
                textElement.textContent = text;
                textElement.dataset.index = index;
                eduAnimatedTextContainer.appendChild(textElement);
            });
            
            // Show first text
            const firstText = eduAnimatedTextContainer.querySelector('.edu-animated-text');
            if (firstText) {
                firstText.classList.add('active');
            }
            
            // Start animation interval (every 2.5 seconds)
            clearInterval(eduAnimatedTextInterval);
            eduAnimatedTextInterval = setInterval(cycleAnimatedText, 2500);
        }

        // Cycle through animated texts
        function cycleAnimatedText() {
            const currentActive = eduAnimatedTextContainer.querySelector('.edu-animated-text.active');
            if (currentActive) {
                currentActive.classList.remove('active');
                eduCurrentTextIndex = (eduCurrentTextIndex + 1) % eduAnimatedTexts.length;
                const nextText = eduAnimatedTextContainer.querySelector(`.edu-animated-text[data-index="${eduCurrentTextIndex}"]`);
                if (nextText) {
                    nextText.classList.add('active');
                }
            }
        }

        // Setup scroll indicator
        function setupScrollIndicator() {
            if (eduScrollIndicator) {
                eduScrollIndicator.addEventListener('click', () => {
                    eduSwitchPage('feed');
                });
            }
        }

        // Render videos in feed with premium design
        function renderVideosFeed() {
            if (!eduVideosFeed) return;
            
            eduVideosFeed.innerHTML = '';
            const videosToDisplay = eduVideosData.slice(0, eduVideosToShow);
            
            if (videosToDisplay.length === 0) {
                eduVideosFeed.innerHTML = `
                    <div class="edu-placeholder-message">
                        <i class="fas fa-video"></i>
                        <h3>Aucune vidéo disponible</h3>
                        <p>Le contenu vidéo sera bientôt ajouté à la bibliothèque</p>
                    </div>
                `;
                if (eduLoadMoreBtn) eduLoadMoreBtn.style.display = 'none';
                return;
            }
            
            videosToDisplay.forEach(video => {
                const videoCard = createVideoCard(video);
                eduVideosFeed.appendChild(videoCard);
            });
            
            // Show/hide load more button
            if (eduLoadMoreBtn) {
                eduLoadMoreBtn.style.display = eduVideosToShow >= eduVideosData.length ? 'none' : 'block';
            }
            
            // Add fade-in animation to cards
            setTimeout(() => {
                const cards = eduVideosFeed.querySelectorAll('.edu-video-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Render categories/playlists
        function renderCategories() {
            if (!eduCategoriesGrid) return;
            
            eduCategoriesGrid.innerHTML = '';
            
            if (eduPlaylistsData.length === 0) {
                eduCategoriesGrid.innerHTML = `
                    <div class="edu-placeholder-message">
                        <i class="fas fa-folder-open"></i>
                        <h3>Aucune collection disponible</h3>
                        <p>Les collections thématiques seront bientôt ajoutées</p>
                    </div>
                `;
                return;
            }
            
            eduPlaylistsData.forEach(playlist => {
                const playlistVideosCount = playlist.videoIds.length;
                
                const categoryCard = document.createElement('div');
                categoryCard.className = 'edu-category-card';
                categoryCard.dataset.id = playlist.id;
                
                categoryCard.innerHTML = `
                    <img src="${playlist.cover}" alt="${playlist.title}" class="edu-category-cover" loading="lazy">
                    <div class="edu-category-overlay">
                        <h3 class="edu-category-title">${playlist.title}</h3>
                        <div class="edu-category-info">
                            <i class="fas fa-play-circle"></i>
                            <span>${playlistVideosCount} vidéo${playlistVideosCount > 1 ? 's' : ''}</span>
                            <span>•</span>
                            <span>${playlist.topic}</span>
                        </div>
                    </div>
                `;
                
                categoryCard.addEventListener('click', () => {
                    openPlaylist(playlist);
                });
                
                eduCategoriesGrid.appendChild(categoryCard);
            });
            
            // Add fade-in animation to cards
            setTimeout(() => {
                const cards = eduCategoriesGrid.querySelectorAll('.edu-category-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Open playlist view
        function openPlaylist(playlist) {
            if (!eduPlaylistTitle || !eduPlaylistTopic) return;
            
            eduPlaylistTitle.textContent = playlist.title;
            eduPlaylistTopic.textContent = playlist.topic;
            
            // Get videos for this playlist
            const playlistVideosData = eduVideosData.filter(video => 
                playlist.videoIds.includes(video.id)
            );
            
            renderPlaylistVideos(playlistVideosData);
            
            // Show playlist page, hide categories grid
            if (eduCategoriesGrid) eduCategoriesGrid.style.display = 'none';
            if (eduPlaylistPage) eduPlaylistPage.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Render playlist videos
        function renderPlaylistVideos(videos) {
            if (!eduPlaylistVideos) return;
            
            eduPlaylistVideos.innerHTML = '';
            
            if (videos.length === 0) {
                eduPlaylistVideos.innerHTML = `
                    <div class="edu-placeholder-message">
                        <i class="fas fa-video"></i>
                        <h3>Aucune vidéo dans cette playlist</h3>
                        <p>Les vidéos seront bientôt ajoutées à cette collection</p>
                    </div>
                `;
                return;
            }
            
            videos.forEach(video => {
                const videoCard = createVideoCard(video);
                eduPlaylistVideos.appendChild(videoCard);
            });
            
            // Add fade-in animation to cards
            setTimeout(() => {
                const cards = eduPlaylistVideos.querySelectorAll('.edu-video-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Close playlist view
        function closePlaylist() {
            if (eduPlaylistPage) eduPlaylistPage.classList.remove('active');
            if (eduCategoriesGrid) eduCategoriesGrid.style.display = 'grid';
            if (eduPlaylistVideos) eduPlaylistVideos.innerHTML = '';
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Create premium video card element
        function createVideoCard(video) {
            const card = document.createElement('div');
            card.className = 'edu-video-card';
            card.dataset.id = video.id;
            
            card.innerHTML = `
                <div class="edu-video-thumbnail-container">
                    <img src="${video.thumbnail}" alt="${video.title}" class="edu-video-thumbnail" loading="lazy">
                    <div class="edu-video-play-overlay">
                        <div class="edu-video-play-icon">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="edu-video-text-overlay">
                    <h3 class="edu-video-card-title">${video.title}</h3>
                    <div class="edu-video-card-category">${video.category}</div>
                </div>
            `;
            
            // Add click handler
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                playVideo(video);
            });
            
            // Add touch feedback
            card.addEventListener('touchstart', function(e) {
                this.style.transform = 'scale(0.98)';
            });
            
            card.addEventListener('touchend', function(e) {
                this.style.transform = '';
            });
            
            return card;
        }

        // Create suggested video card
        function createSuggestedCard(video) {
            const card = document.createElement('div');
            card.className = 'edu-suggested-card';
            card.dataset.id = video.id;
            
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="edu-suggested-thumbnail" loading="lazy">
                <div class="edu-suggested-info">
                    <h4 class="edu-suggested-video-title">${video.title}</h4>
                    <div class="edu-suggested-category">${video.category}</div>
                </div>
            `;
            
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                playVideo(video);
            });
            
            return card;
        }

        // Play video function
        function playVideo(video) {
            eduCurrentVideo = video;
            
            // Update player content
            if (eduPlayerTitle) eduPlayerTitle.textContent = video.title;
            if (eduPlayerDescription) eduPlayerDescription.textContent = video.description;
            
            // Extract YouTube video ID from URL
            const videoId = extractYouTubeId(video.youtubeLink);
            
            // Clear previous iframe to prevent conflicts
            if (eduYoutubePlayer) eduYoutubePlayer.innerHTML = '';
            
            // Create and append new iframe
            const iframe = document.createElement('iframe');
            iframe.className = 'edu-video-player-frame';
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.title = video.title;
            
            if (eduYoutubePlayer) eduYoutubePlayer.appendChild(iframe);
            
            // Render suggested videos (exclude current video)
            renderSuggestedVideos();
            
            // Switch to player page
            eduSwitchPage('player');
        }

        // Extract YouTube video ID from URL
        function extractYouTubeId(url) {
            const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
            return match ? match[1] : '6v2L2UGZJAM';
        }

        // Render suggested videos
        function renderSuggestedVideos() {
            if (!eduSuggestedVideos) return;
            
            eduSuggestedVideos.innerHTML = '';
            const suggested = eduVideosData
                .filter(v => v.id !== eduCurrentVideo.id)
                .slice(0, 5);
            
            suggested.forEach(video => {
                const card = createSuggestedCard(video);
                eduSuggestedVideos.appendChild(card);
            });
        }

        // Setup search functionality
        function setupSearch() {
            if (!eduSearchInput || !eduSearchResults) return;
            
            let searchTimeout;
            
            eduSearchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                
                searchTimeout = setTimeout(() => {
                    const query = e.target.value.trim().toLowerCase();
                    
                    if (query.length === 0) {
                        eduSearchResults.innerHTML = '';
                        if (eduResultsCount) eduResultsCount.textContent = '';
                        if (eduNoResults) eduNoResults.style.display = 'none';
                        return;
                    }
                    
                    // Filter videos based on search query
                    const filteredVideos = eduVideosData.filter(video => 
                        video.title.toLowerCase().includes(query) || 
                        video.category.toLowerCase().includes(query) ||
                        video.description.toLowerCase().includes(query)
                    );
                    
                    // Display results
                    displaySearchResults(filteredVideos, query);
                }, 300);
            });
            
            // Add search on mobile keyboard complete
            eduSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = eduSearchInput.value.trim();
                    if (query) {
                        const filteredVideos = eduVideosData.filter(video => 
                            video.title.toLowerCase().includes(query.toLowerCase()) || 
                            video.category.toLowerCase().includes(query.toLowerCase())
                        );
                        displaySearchResults(filteredVideos, query);
                    }
                }
            });
        }

        // Display search results
        function displaySearchResults(videos, query) {
            if (!eduSearchResults) return;
            
            eduSearchResults.innerHTML = '';
            
            if (videos.length === 0) {
                if (eduNoResults) eduNoResults.style.display = 'block';
                if (eduResultsCount) eduResultsCount.textContent = `Aucun résultat pour "${query}"`;
                return;
            }
            
            if (eduNoResults) eduNoResults.style.display = 'none';
            if (eduResultsCount) eduResultsCount.textContent = `${videos.length} résultat${videos.length === 1 ? '' : 's'} pour "${query}"`;
            
            videos.forEach(video => {
                const videoCard = createVideoCard(video);
                eduSearchResults.appendChild(videoCard);
            });
            
            // Animate search results
            setTimeout(() => {
                const cards = eduSearchResults.querySelectorAll('.edu-video-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.4s ease ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Switch between eduSTREAM pages
        function eduSwitchPage(pageName) {
            // Stop animated text when leaving home page
            if (eduCurrentPage === 'home' && pageName !== 'home') {
                clearInterval(eduAnimatedTextInterval);
            }
            // Restart animated text when returning to home page
            else if (pageName === 'home' && eduCurrentPage !== 'home') {
                clearInterval(eduAnimatedTextInterval);
                initAnimatedText();
            }
            
            // Update current page
            eduCurrentPage = pageName;
            
            // Hide all pages
            eduPages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            const targetPage = document.getElementById(`edu${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Page`);
            if (targetPage) {
                targetPage.classList.add('active');
                
                // Update active nav link
                eduNavLinks.forEach(link => {
                    if (link.dataset.eduPage === pageName) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                
                // Special page initialization
                if (pageName === 'search') {
                    setTimeout(() => {
                        if (eduSearchInput) {
                            eduSearchInput.focus();
                            if (window.innerWidth <= 768) {
                                eduSearchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }
                    }, 300);
                } else if (pageName === 'feed') {
                    eduVideosToShow = 6;
                    renderVideosFeed();
                } else if (pageName === 'categories') {
                    closePlaylist(); // Ensure playlist view is closed when switching to categories
                }
            }
            
            // Close mobile menu if open
            if (eduMainNav && eduMainNav.classList.contains('active')) {
                eduMainNav.classList.remove('active');
                if (eduMobileMenuBtn) {
                    eduMobileMenuBtn.setAttribute('aria-expanded', 'false');
                    eduMobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Setup event listeners for eduSTREAM - FIXED MOBILE MENU
        function setupEventListeners() {
            // Navigation links
            if (eduNavLinks.length > 0) {
                eduNavLinks.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        const page = link.dataset.eduPage;
                        eduSwitchPage(page);
                    });
                });
            }
            
            // Home logo
            if (eduHomeLogo) {
                eduHomeLogo.addEventListener('click', (e) => {
                    e.preventDefault();
                    eduSwitchPage('home');
                });
            }
            
            // Mobile menu button - FIXED VERSION
            if (eduMobileMenuBtn && eduMainNav) {
                // Remove any existing event listeners by cloning
                const newBtn = eduMobileMenuBtn.cloneNode(true);
                eduMobileMenuBtn.parentNode.replaceChild(newBtn, eduMobileMenuBtn);
                
                // Get new references
                const mobileBtn = document.getElementById('eduMobileMenuBtn');
                const mainNav = document.getElementById('eduMainNav');
                
                mobileBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (mainNav.classList.contains('active')) {
                        // Close the menu
                        mainNav.classList.remove('active');
                        mobileBtn.setAttribute('aria-expanded', 'false');
                        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    } else {
                        // Open the menu
                        mainNav.classList.add('active');
                        mobileBtn.setAttribute('aria-expanded', 'true');
                        mobileBtn.innerHTML = '<i class="fas fa-times"></i>';
                    }
                });
            }
            
            // Search icon
            if (eduSearchIcon) {
                eduSearchIcon.addEventListener('click', () => {
                    eduSwitchPage('search');
                });
            }
            
            // Watch now button
            if (eduWatchNowBtn) {
                eduWatchNowBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    eduSwitchPage('feed');
                });
            }
            
            // Load more button
            if (eduLoadMoreBtn) {
                eduLoadMoreBtn.addEventListener('click', () => {
                    eduVideosToShow += 6;
                    renderVideosFeed();
                    setTimeout(() => {
                        const newCards = eduVideosFeed.querySelectorAll('.edu-video-card');
                        if (newCards.length > 6) {
                            newCards[6].scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }, 100);
                });
            }
            
            // Back buttons
            if (eduFeedBackBtn) {
                eduFeedBackBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    eduSwitchPage('home');
                });
            }
            
            if (eduCategoriesBackBtn) {
                eduCategoriesBackBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    eduSwitchPage('home');
                });
            }
            
            if (eduPlaylistBackBtn) {
                eduPlaylistBackBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    closePlaylist();
                });
            }
            
            if (eduSearchBackBtn) {
                eduSearchBackBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (eduSearchInput) eduSearchInput.value = '';
                    if (eduSearchResults) eduSearchResults.innerHTML = '';
                    if (eduResultsCount) eduResultsCount.textContent = '';
                    if (eduNoResults) eduNoResults.style.display = 'none';
                    eduSwitchPage('home');
                });
            }
            
            if (eduPlayerBackBtn) {
                eduPlayerBackBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (eduYoutubePlayer) eduYoutubePlayer.innerHTML = '';
                    const previousPage = eduCurrentVideo ? 'feed' : 'home';
                    eduSwitchPage(previousPage);
                });
            }
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (eduMainNav && eduMobileMenuBtn) {
                    const mobileBtn = document.getElementById('eduMobileMenuBtn');
                    const mainNav = document.getElementById('eduMainNav');
                    
                    if (mainNav && 
                        !mainNav.contains(e.target) && 
                        !mobileBtn.contains(e.target) && 
                        mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileBtn.setAttribute('aria-expanded', 'false');
                        mobileBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
            
            // Close mobile menu with Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && eduMainNav && eduMainNav.classList.contains('active')) {
                    eduMainNav.classList.remove('active');
                    if (eduMobileMenuBtn) {
                        eduMobileMenuBtn.setAttribute('aria-expanded', 'false');
                        eduMobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
            
            // Handle window resize
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    if (window.innerWidth > 768 && eduMainNav && eduMainNav.classList.contains('active')) {
                        eduMainNav.classList.remove('active');
                        if (eduMobileMenuBtn) {
                            eduMobileMenuBtn.setAttribute('aria-expanded', 'false');
                            eduMobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                }, 250);
            });
            
            // Prevent double tap zoom on mobile
            let lastTouchEnd = 0;
            document.addEventListener('touchend', function(e) {
                const now = Date.now();
                if (now - lastTouchEnd <= 300) {
                    e.preventDefault();
                }
                lastTouchEnd = now;
            }, { passive: false });
            
            // Add touch feedback to interactive elements
            const buttons = document.querySelectorAll('#about button, #about .edu-video-card, #about .edu-category-card, #about .edu-suggested-card');
            buttons.forEach(button => {
                button.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.98)';
                });
                
                button.addEventListener('touchend', function() {
                    this.style.transform = '';
                });
            });
        }
        
        // Initialize
        init();
        
        console.log('eduSTREAM initialized successfully with original project logic');
    }
    
    // Check if we're in the about section and initialize eduSTREAM
    const aboutSection = document.getElementById('about');
    if (aboutSection && aboutSection.classList.contains('active')) {
        initEduStream();
    }
    
    // Also initialize when navigating to about section
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target === 'about') {
                // Wait a bit for the section to become active
                setTimeout(initEduStream, 100);
            }
        });
    });
    
    // Initialize main navigation
    const bottomNavItems = document.querySelectorAll('.bottom-nav .nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            // Update active states
            bottomNavItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            contentSections.forEach(section => section.classList.remove('active'));
            document.getElementById(target).classList.add('active');
            
            // Update body attribute for CSS targeting
            document.body.setAttribute('data-current-section', target);
            
            // Initialize eduSTREAM if we're going to about section
            if (target === 'about') {
                setTimeout(initEduStream, 100);
            }
        });
    });
});