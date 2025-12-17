
        // DOM Elements
        const pages = document.querySelectorAll('.page');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        const searchIcon = document.getElementById('searchIcon');
        const watchNowBtn = document.getElementById('watchNowBtn');
        const homeLogo = document.getElementById('homeLogo');
        const videosFeed = document.getElementById('videosFeed');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        const resultsCount = document.getElementById('resultsCount');
        const noResults = document.getElementById('noResults');
        const youtubePlayer = document.getElementById('youtubePlayer');
        const playerTitle = document.getElementById('playerTitle');
        const playerDescription = document.getElementById('playerDescription');
        const suggestedVideos = document.getElementById('suggestedVideos');
        const animatedTextContainer = document.getElementById('animatedTextContainer');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        
        // Categories DOM Elements
        const categoriesGrid = document.getElementById('categoriesGrid');
        const playlistPage = document.getElementById('playlistPage');
        const playlistVideos = document.getElementById('playlistVideos');
        const playlistTitle = document.getElementById('playlistTitle');
        const playlistTopic = document.getElementById('playlistTopic');
        
        // Back buttons
        const feedBackBtn = document.getElementById('feedBackBtn');
        const categoriesBackBtn = document.getElementById('categoriesBackBtn');
        const playlistBackBtn = document.getElementById('playlistBackBtn');
        const searchBackBtn = document.getElementById('searchBackBtn');
        const playerBackBtn = document.getElementById('playerBackBtn');

        // State variables
        let currentVideo = null;
        let videosToShow = 6;
        let currentPage = 'home';
        let currentTextIndex = 0;
        let animatedTextInterval;

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
            // Create animated text elements
            animatedTexts.forEach((text, index) => {
                const textElement = document.createElement('div');
                textElement.className = 'animated-text';
                textElement.textContent = text;
                textElement.dataset.index = index;
                animatedTextContainer.appendChild(textElement);
            });
            
            // Show first text
            const firstText = animatedTextContainer.querySelector('.animated-text');
            if (firstText) {
                firstText.classList.add('active');
            }
            
            // Start animation interval (every 2.5 seconds)
            animatedTextInterval = setInterval(cycleAnimatedText, 2500);
        }

        // Cycle through animated texts
        function cycleAnimatedText() {
            const currentActive = animatedTextContainer.querySelector('.animated-text.active');
            if (currentActive) {
                currentActive.classList.remove('active');
                currentTextIndex = (currentTextIndex + 1) % animatedTexts.length;
                const nextText = animatedTextContainer.querySelector(`.animated-text[data-index="${currentTextIndex}"]`);
                if (nextText) {
                    nextText.classList.add('active');
                }
            }
        }

        // Setup scroll indicator
        function setupScrollIndicator() {
            scrollIndicator.addEventListener('click', () => {
                switchPage('feed');
            });
        }

        // Render videos in feed with premium design
        function renderVideosFeed() {
            videosFeed.innerHTML = '';
            const videosToDisplay = videosData.slice(0, videosToShow);
            
            videosToDisplay.forEach(video => {
                const videoCard = createVideoCard(video);
                videosFeed.appendChild(videoCard);
            });
            
            // Show/hide load more button
            loadMoreBtn.style.display = videosToShow >= videosData.length ? 'none' : 'block';
            
            // Add fade-in animation to cards
            setTimeout(() => {
                const cards = videosFeed.querySelectorAll('.video-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Render categories/playlists
        function renderCategories() {
            categoriesGrid.innerHTML = '';
            
            playlistsData.forEach(playlist => {
                const playlistVideosCount = playlist.videoIds.length;
                
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';
                categoryCard.dataset.id = playlist.id;
                
                categoryCard.innerHTML = `
                    <img src="${playlist.cover}" alt="${playlist.title}" class="category-cover" loading="lazy">
                    <div class="category-overlay">
                        <h3 class="category-title">${playlist.title}</h3>
                        <div class="category-info">
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
                
                categoriesGrid.appendChild(categoryCard);
            });
            
            // Add fade-in animation to cards
            setTimeout(() => {
                const cards = categoriesGrid.querySelectorAll('.category-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Open playlist view
        function openPlaylist(playlist) {
            playlistTitle.textContent = playlist.title;
            playlistTopic.textContent = playlist.topic;
            
            // Get videos for this playlist
            const playlistVideosData = videosData.filter(video => 
                playlist.videoIds.includes(video.id)
            );
            
            renderPlaylistVideos(playlistVideosData);
            
            // Show playlist page, hide categories grid
            categoriesGrid.style.display = 'none';
            playlistPage.classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Render playlist videos
        function renderPlaylistVideos(videos) {
            playlistVideos.innerHTML = '';
            
            videos.forEach(video => {
                const videoCard = createVideoCard(video);
                playlistVideos.appendChild(videoCard);
            });
            
            // Add fade-in animation to cards
            setTimeout(() => {
                const cards = playlistVideos.querySelectorAll('.video-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Close playlist view
        function closePlaylist() {
            playlistPage.classList.add('hidden');
            categoriesGrid.style.display = 'grid';
            playlistVideos.innerHTML = '';
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Create premium video card element
        function createVideoCard(video) {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.dataset.id = video.id;
            
            card.innerHTML = `
                <div class="thumbnail-container">
                    <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail" loading="lazy">
                    <div class="play-overlay">
                        <div class="play-icon">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="text-overlay">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="video-category">${video.category}</div>
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
            card.className = 'suggested-card';
            card.dataset.id = video.id;
            
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="suggested-thumbnail" loading="lazy">
                <div class="suggested-info">
                    <h4 class="suggested-video-title">${video.title}</h4>
                    <div class="suggested-category">${video.category}</div>
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
            currentVideo = video;
            
            // Update player content
            playerTitle.textContent = video.title;
            playerDescription.textContent = video.description;
            
            // Extract YouTube video ID from URL
            const videoId = extractYouTubeId(video.youtubeLink);
            
            // Clear previous iframe to prevent conflicts
            youtubePlayer.innerHTML = '';
            
            // Create and append new iframe
            const iframe = document.createElement('iframe');
            iframe.className = 'video-player-frame';
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.title = video.title;
            
            youtubePlayer.appendChild(iframe);
            
            // Render suggested videos (exclude current video)
            renderSuggestedVideos();
            
            // Switch to player page
            switchPage('player');
        }

        // Extract YouTube video ID from URL
        function extractYouTubeId(url) {
            const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
            return match ? match[1] : '6v2L2UGZJAM';
        }

        // Render suggested videos
        function renderSuggestedVideos() {
            suggestedVideos.innerHTML = '';
            const suggested = videosData
                .filter(v => v.id !== currentVideo.id)
                .slice(0, 5);
            
            suggested.forEach(video => {
                const card = createSuggestedCard(video);
                suggestedVideos.appendChild(card);
            });
        }

        // Setup search functionality
        function setupSearch() {
            let searchTimeout;
            
            searchInput.addEventListener('input', (e) => {
                clearTimeout(searchTimeout);
                
                searchTimeout = setTimeout(() => {
                    const query = e.target.value.trim().toLowerCase();
                    
                    if (query.length === 0) {
                        searchResults.innerHTML = '';
                        resultsCount.textContent = '';
                        noResults.style.display = 'none';
                        return;
                    }
                    
                    // Filter videos based on search query
                    const filteredVideos = videosData.filter(video => 
                        video.title.toLowerCase().includes(query) || 
                        video.category.toLowerCase().includes(query) ||
                        video.description.toLowerCase().includes(query)
                    );
                    
                    // Display results
                    displaySearchResults(filteredVideos, query);
                }, 300);
            });
            
            // Add search on mobile keyboard complete
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = searchInput.value.trim();
                    if (query) {
                        const filteredVideos = videosData.filter(video => 
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
            searchResults.innerHTML = '';
            
            if (videos.length === 0) {
                noResults.style.display = 'block';
                resultsCount.textContent = `Aucun résultat pour "${query}"`;
                return;
            }
            
            noResults.style.display = 'none';
            resultsCount.textContent = `${videos.length} résultat${videos.length === 1 ? '' : 's'} pour "${query}"`;
            
            videos.forEach(video => {
                const videoCard = createVideoCard(video);
                searchResults.appendChild(videoCard);
            });
            
            // Animate search results
            setTimeout(() => {
                const cards = searchResults.querySelectorAll('.video-card');
                cards.forEach((card, index) => {
                    card.style.animation = `fadeInUp 0.4s ease ${index * 0.05}s forwards`;
                    card.style.opacity = '0';
                });
            }, 50);
        }

        // Switch between pages
        function switchPage(pageName) {
            // Stop animated text when leaving home page
            if (currentPage === 'home' && pageName !== 'home') {
                clearInterval(animatedTextInterval);
            }
            // Restart animated text when returning to home page
            else if (pageName === 'home' && currentPage !== 'home') {
                clearInterval(animatedTextInterval);
                animatedTextInterval = setInterval(cycleAnimatedText, 2500);
            }
            
            // Update current page
            currentPage = pageName;
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show target page
            document.getElementById(`${pageName}Page`).classList.add('active');
            
            // Update active nav link
            navLinks.forEach(link => {
                if (link.dataset.page === pageName) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Close mobile menu if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Special page initialization
            if (pageName === 'search') {
                setTimeout(() => {
                    searchInput.focus();
                    if (window.innerWidth <= 768) {
                        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 300);
            } else if (pageName === 'feed') {
                videosToShow = 6;
                renderVideosFeed();
            } else if (pageName === 'categories') {
                closePlaylist(); // Ensure playlist view is closed when switching to categories
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Setup event listeners
        function setupEventListeners() {
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const page = link.dataset.page;
                    switchPage(page);
                });
            });

            homeLogo.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage('home');
            });

            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = mainNav.classList.contains('active');
                mainNav.classList.toggle('active');
                mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
                mobileMenuBtn.innerHTML = isExpanded ? '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
            });

            searchIcon.addEventListener('click', () => {
                switchPage('search');
            });

            watchNowBtn.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage('feed');
            });

            loadMoreBtn.addEventListener('click', () => {
                videosToShow += 6;
                renderVideosFeed();
                setTimeout(() => {
                    const newCards = videosFeed.querySelectorAll('.video-card');
                    if (newCards.length > 6) {
                        newCards[6].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            });

            feedBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage('home');
            });
            
            categoriesBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                switchPage('home');
            });
            
            playlistBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closePlaylist();
            });
            
            searchBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchInput.value = '';
                searchResults.innerHTML = '';
                resultsCount.textContent = '';
                noResults.style.display = 'none';
                switchPage('home');
            });
            
            playerBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                youtubePlayer.innerHTML = '';
                const previousPage = currentVideo ? 'feed' : 'home';
                switchPage(previousPage);
            });

            document.addEventListener('click', (e) => {
                if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });

            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        mobileMenuBtn.setAttribute('aria-expanded', 'false');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }, 250);
            });

            let lastTouchEnd = 0;
            document.addEventListener('touchend', function(e) {
                const now = Date.now();
                if (now - lastTouchEnd <= 300) {
                    e.preventDefault();
                }
                lastTouchEnd = now;
            }, { passive: false });

            const buttons = document.querySelectorAll('button, .video-card, .category-card, .suggested-card');
            buttons.forEach(button => {
                button.addEventListener('touchstart', function() {
                    this.style.transform = 'scale(0.98)';
                });
                
                button.addEventListener('touchend', function() {
                    this.style.transform = '';
                });
            });
        }

        document.addEventListener('DOMContentLoaded', init);