
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // ============================================
            // HOME SECTION HEADER SCROLL BEHAVIOR
            // ============================================
            const homeHeader = document.getElementById('homeHeader');
            let lastScrollY = window.scrollY;
            
            function handleHeaderScroll() {
                const currentScrollY = window.scrollY;
                
                // Show header at the top, hide when scrolling down
                if (currentScrollY > 50) {
                    homeHeader.classList.add('hidden');
                } else {
                    homeHeader.classList.remove('hidden');
                }
                
                lastScrollY = currentScrollY;
            }
            
            // Only add scroll listener when on home section
            function setupHeaderForSection(sectionId) {
                if (sectionId === 'home') {
                    window.addEventListener('scroll', handleHeaderScroll);
                    // Initial check
                    handleHeaderScroll();
                } else {
                    window.removeEventListener('scroll', handleHeaderScroll);
                    homeHeader.classList.add('hidden');
                }
            }
            
            // ============================================
            // BOTTOM NAVIGATION
            // ============================================
            const navItems = document.querySelectorAll('.nav-item');
            const contentSections = document.querySelectorAll('.content-section');
            
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    
                    // Update active navigation item
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding content section
                    contentSections.forEach(section => {
                        section.classList.remove('active');
                        if (section.id === target) {
                            section.classList.add('active');
                            
                            // Reset SpeakWell to home page when navigating to it
                            if (section.id === 'speakwell') {
                                resetSpeakwellToHome();
                            }
                        }
                    });
                    
                    // Set up header behavior for home section
                    setupHeaderForSection(target);
                    
                    // Scroll to top
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });
            
            // Initial header setup
            setupHeaderForSection('home');
            
            // ============================================
            // APP CARD MODALS - UPDATED FOR NEW DESIGN
            // ============================================
            const appCards = document.querySelectorAll('.app-card');
            const appModals = {
                'analytics': 'analytics-modal',
                'security': 'security-modal',
                'cloud': 'cloud-modal',
                'design': 'design-modal'  // Added design modal
            };
            
            appCards.forEach(card => {
                card.addEventListener('click', function() {
                    const appId = this.dataset.app;
                    openModal(appModals[appId]);
                });
            });
            
            // ============================================
            // POSTER CARD MODALS
            // ============================================
            const posterCards = document.querySelectorAll('.poster-card');
            const posterModals = {
                '3d': '3d-modal',
                'wave': 'wave-modal',
                'ai': 'ai-modal'
            };
            
            posterCards.forEach(card => {
                card.addEventListener('click', function() {
                    const posterId = this.dataset.poster;
                    openModal(posterModals[posterId]);
                });
            });
            
            // ============================================
            // MODAL FUNCTIONALITY
            // ============================================
            let activeModal = null;
            
            function openModal(modalId) {
                const modal = document.getElementById(modalId);
                if (!modal) return;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
                activeModal = modal;
                
                // Focus trap
                const closeBtn = modal.querySelector('.close-btn');
                if (closeBtn) closeBtn.focus();
            }
            
            function closeModal(modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                activeModal = null;
            }
            
            // Close modal buttons
            document.querySelectorAll('.close-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const modal = this.closest('.modal-overlay');
                    closeModal(modal);
                });
            });
            
            // Close modal when clicking outside
            document.querySelectorAll('.modal-overlay').forEach(overlay => {
                overlay.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeModal(this);
                    }
                });
            });
            
            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && activeModal) {
                    closeModal(activeModal);
                }
            });
            
            // ============================================
            // SPEAKWELL SECTION - UPDATED WITH EXTERNAL LINKS
            // ============================================
            
            // SpeakWell navigation
            const beginJourneyBtn = document.getElementById('beginJourneyBtn');
            if (beginJourneyBtn) {
                beginJourneyBtn.addEventListener('click', function() {
                    showSpeakwellPage('focus');
                });
            }
            
            // Back buttons
            document.querySelectorAll('.speakwell-back-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const targetPage = this.getAttribute('data-back-to');
                    showSpeakwellPage(targetPage);
                });
            });
            
            // Focus cards
            document.querySelectorAll('.focus-card').forEach(card => {
                card.addEventListener('click', function() {
                    const target = this.getAttribute('data-target');
                    showSpeakwellPage(target);
                });
            });
            
            // Tense cards - all go to difficulty page
            document.querySelectorAll('.tense-card').forEach(card => {
                card.addEventListener('click', function() {
                    showSpeakwellPage('difficulty');
                });
            });
            
            // IMPORTANT: Difficulty cards and Grammar cards now have external links
            // and will open in new tabs when clicked. No need for click handlers.
            
            function showSpeakwellPage(pageId) {
                // Hide all SpeakWell pages
                const allPages = document.querySelectorAll('.speakwell-page');
                allPages.forEach(page => page.classList.remove('active'));
                
                // Show target page
                const targetPage = document.getElementById(`speakwell-${pageId}`);
                if (targetPage) {
                    targetPage.classList.add('active');
                }
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            
            function resetSpeakwellToHome() {
                const allPages = document.querySelectorAll('.speakwell-page');
                allPages.forEach(page => page.classList.remove('active'));
                
                const homePage = document.getElementById('speakwell-home');
                if (homePage) {
                    homePage.classList.add('active');
                }
            }
            
            // ============================================
            // SEARCH SECTION
            // ============================================
            
            const searchInput = document.getElementById('searchInput');
            const searchClear = document.getElementById('searchClear');
            const searchResults = document.getElementById('searchResults');
            const subjectBtns = document.querySelectorAll('.subject-btn');
            const popularItems = document.querySelectorAll('.popular-item');
            const featuredCards = document.querySelectorAll('.search-featured-card');
            
            let currentSubjectFilter = 'all';
            let currentSearchQuery = '';
            
            // Search input
            if (searchInput) {
                searchInput.addEventListener('input', function() {
                    if (this.value.length > 0) {
                        searchClear.classList.remove('hidden');
                    } else {
                        searchClear.classList.add('hidden');
                        hideResults();
                    }
                });
                
                searchInput.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter') {
                        performSearch(this.value);
                    }
                });
            }
            
            // Search clear
            if (searchClear) {
                searchClear.addEventListener('click', function() {
                    searchInput.value = '';
                    searchInput.focus();
                    this.classList.add('hidden');
                    hideResults();
                });
            }
            
            // Subject filter
            subjectBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    subjectBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentSubjectFilter = this.dataset.subject;
                    
                    if (currentSearchQuery.length > 0) {
                        performSearch(currentSearchQuery);
                    }
                });
            });
            
            // Popular searches
            popularItems.forEach(item => {
                item.addEventListener('click', function() {
                    const text = this.textContent.replace(/^[^a-zA-Z]+/, '').trim();
                    searchInput.value = text;
                    searchInput.focus();
                    performSearch(text);
                });
            });
            
            // Featured cards
            featuredCards.forEach(card => {
                card.addEventListener('click', function() {
                    const searchText = this.dataset.search;
                    searchInput.value = searchText;
                    searchInput.focus();
                    performSearch(searchText);
                });
            });
            
            function performSearch(query) {
                currentSearchQuery = query;
                
                if (query.length === 0) {
                    hideResults();
                    return;
                }
                
                // Simulate search results
                const results = educationalResources.filter(resource => {
                    if (currentSubjectFilter !== 'all' && resource.subject !== currentSubjectFilter) {
                        return false;
                    }
                    
                    const searchLower = query.toLowerCase();
                    return resource.title.toLowerCase().includes(searchLower) ||
                           resource.description.toLowerCase().includes(searchLower) ||
                           resource.keywords.some(kw => kw.toLowerCase().includes(searchLower));
                });
                
                displayResults(results, query);
            }
            
            function displayResults(results, query) {
                if (!searchResults) return;
                
                searchResults.innerHTML = '';
                
                if (results.length === 0) {
                    searchResults.innerHTML = `
                        <div class="no-results">
                            <i class="fas fa-search"></i>
                            <div class="no-results-title">Aucun résultat trouvé pour "${query}"</div>
                            <div class="no-results-text">Essayez avec des mots-clés différents</div>
                        </div>
                    `;
                    showResults();
                    return;
                }
                
                results.forEach(result => {
                    const resultItem = document.createElement('div');
                    resultItem.className = 'search-result-item';
                    resultItem.innerHTML = `
                        <div class="search-result-icon">${getTypeIcon(result.type)}</div>
                        <div class="search-result-content">
                            <div class="search-result-title">
                                ${result.title}
                                <span class="search-result-badge">${getTypeBadge(result.type)}</span>
                            </div>
                            <div class="search-result-description">${result.description}</div>
                            <div class="search-result-meta">
                                <span><i class="fas fa-user"></i> ${result.author}</span>
                                <span><i class="fas fa-calendar-alt"></i> ${new Date(result.date).toLocaleDateString()}</span>
                                <span><i class="fas fa-tag"></i> ${capitalizeFirstLetter(result.subject)}</span>
                            </div>
                        </div>
                    `;
                    
                    resultItem.addEventListener('click', () => openResourceModal(result));
                    searchResults.appendChild(resultItem);
                });
                
                showResults();
            }
            
            function showResults() {
                if (searchResults) {
                    searchResults.classList.add('visible');
                }
            }
            
            function hideResults() {
                if (searchResults) {
                    searchResults.classList.remove('visible');
                }
            }
            
            function getTypeIcon(type) {
                const icons = {
                    'course': '<i class="fas fa-graduation-cap"></i>',
                    'summary': '<i class="fas fa-file-alt"></i>',
                    'video': '<i class="fas fa-play-circle"></i>',
                    'exercise': '<i class="fas fa-pen-fancy"></i>'
                };
                return icons[type] || '<i class="fas fa-file"></i>';
            }
            
            function getTypeBadge(type) {
                const badges = {
                    'course': 'Cours',
                    'summary': 'Fiche',
                    'video': 'Vidéo',
                    'exercise': 'Exercice'
                };
                return badges[type] || 'Ressource';
            }
            
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            
            // Resource modal
            function openResourceModal(resource) {
                const modal = document.getElementById('resource-modal');
                const modalTitle = modal.querySelector('.modal-title');
                const resourceContainer = document.getElementById('resourceContainer');
                
                modalTitle.textContent = resource.title;
                resourceContainer.innerHTML = '';
                
                if (resource.pdfs) {
                    resource.pdfs.forEach(item => {
                        const resourceBox = document.createElement('div');
                        resourceBox.className = 'resource-box';
                        resourceBox.innerHTML = `
                            <div class="pdf-container">
                                <div class="pdf-icon">
                                    <i class="fas fa-file-pdf"></i>
                                </div>
                                <div class="pdf-name">${item.title}</div>
                                <a href="${item.url}" target="_blank" class="pdf-link" rel="noopener">
                                    <i class="fas fa-external-link-alt"></i> Ouvrir le PDF
                                </a>
                            </div>
                        `;
                        resourceContainer.appendChild(resourceBox);
                    });
                }
                
                openModal('resource-modal');
            }
            
           
            
            console.log('Modern Interactive Design initialized successfully.');
        });



         // Gradient Header JavaScript
        class ColorContrastManager {
            constructor() {
                this.storeTitle = document.getElementById('store-title');
                this.observer = null;
                this.checkInterval = null;
                this.isChecking = false;
                this.lastContrastClass = '';
                
                this.init();
            }
            
            init() {
                // Only initialize if we're on the home page
                if (this.storeTitle && document.getElementById('home').classList.contains('active')) {
                    // Initial check
                    this.updateContrast();
                    
                    // Set up Intersection Observer for performance
                    this.setupIntersectionObserver();
                    
                    // Responsive checks (debounced)
                    window.addEventListener('resize', this.debounce(() => this.updateContrast(), 100));
                    window.addEventListener('scroll', this.debounce(() => this.updateContrast(), 50));
                    
                    // Check periodically but with longer intervals
                    this.checkInterval = setInterval(() => this.updateContrast(), 2000);
                    
                    // Check when animations might affect visibility
                    this.setupAnimationFrameCheck();
                }
            }
            
            setupIntersectionObserver() {
                this.observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                this.updateContrast();
                            }
                        });
                    },
                    {
                        threshold: 0.1,
                        rootMargin: '50px'
                    }
                );
                
                this.observer.observe(this.storeTitle);
            }
            
            setupAnimationFrameCheck() {
                let lastCheck = 0;
                const checkOnFrame = (timestamp) => {
                    if (timestamp - lastCheck > 1000) {
                        this.updateContrast();
                        lastCheck = timestamp;
                    }
                    requestAnimationFrame(checkOnFrame);
                };
                requestAnimationFrame(checkOnFrame);
            }
            
            getElementBackgroundColor(element) {
                const rect = element.getBoundingClientRect();
                const centerX = Math.floor(rect.left + rect.width / 2);
                const centerY = Math.floor(rect.top + rect.height / 2);
                
                const points = [
                    [centerX, centerY],
                    [centerX - 10, centerY],
                    [centerX + 10, centerY],
                    [centerX, centerY - 10],
                    [centerX, centerY + 10]
                ];
                
                let totalR = 0, totalG = 0, totalB = 0;
                let validSamples = 0;
                
                points.forEach(([x, y]) => {
                    const elementAtPoint = document.elementFromPoint(x, y);
                    if (elementAtPoint) {
                        const bgColor = window.getComputedStyle(elementAtPoint).backgroundColor;
                        const rgb = this.parseRGB(bgColor);
                        if (rgb) {
                            totalR += rgb[0];
                            totalG += rgb[1];
                            totalB += rgb[2];
                            validSamples++;
                        }
                    }
                });
                
                if (validSamples === 0) return [255, 255, 255];
                
                return [
                    Math.floor(totalR / validSamples),
                    Math.floor(totalG / validSamples),
                    Math.floor(totalB / validSamples)
                ];
            }
            
            parseRGB(colorString) {
                const match = colorString.match(/(\d+),\s*(\d+),\s*(\d+)/);
                return match ? [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])] : null;
            }
            
            calculateRelativeLuminance(rgb) {
                const [r, g, b] = rgb.map(value => {
                    value = value / 255;
                    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
                });
                
                return 0.2126 * r + 0.7152 * g + 0.0722 * b;
            }
            
            getContrastRatio(luminance1, luminance2) {
                const lighter = Math.max(luminance1, luminance2);
                const darker = Math.min(luminance1, luminance2);
                return (lighter + 0.05) / (darker + 0.05);
            }
            
            updateContrast() {
                if (this.isChecking) return;
                this.isChecking = true;
                
                requestAnimationFrame(() => {
                    try {
                        const bgColor = this.getElementBackgroundColor(this.storeTitle);
                        const bgLuminance = this.calculateRelativeLuminance(bgColor);
                        
                        const blackLuminance = 0;
                        const whiteLuminance = 1;
                        
                        const contrastWithBlack = this.getContrastRatio(bgLuminance, blackLuminance);
                        const contrastWithWhite = this.getContrastRatio(whiteLuminance, bgLuminance);
                        
                        const MIN_CONTRAST_RATIO = 3.0;
                        
                        let contrastClass = '';
                        
                        if (contrastWithWhite >= MIN_CONTRAST_RATIO && contrastWithWhite > contrastWithBlack) {
                            contrastClass = 'text-light';
                        } else if (contrastWithBlack >= MIN_CONTRAST_RATIO) {
                            contrastClass = 'text-inverted';
                        }
                        
                        if (contrastClass !== this.lastContrastClass) {
                            this.storeTitle.classList.remove('text-inverted', 'text-light');
                            if (contrastClass) {
                                this.storeTitle.classList.add(contrastClass);
                            }
                            this.lastContrastClass = contrastClass;
                        }
                    } catch (error) {
                        console.error('Color contrast check failed:', error);
                    } finally {
                        this.isChecking = false;
                    }
                });
            }
            
            debounce(func, wait) {
                let timeout;
                return (...args) => {
                    clearTimeout(timeout);
                    timeout = setTimeout(() => func.apply(this, args), wait);
                };
            }
            
            destroy() {
                if (this.observer) {
                    this.observer.disconnect();
                }
                if (this.checkInterval) {
                    clearInterval(this.checkInterval);
                }
            }
        }
        
        // Initialize the color contrast manager
        let contrastManager = null;
        
        // Function to show/hide gradient header based on active section
        function toggleGradientHeader() {
            const gradientHeader = document.getElementById('gradientHeader');
            const homeSection = document.getElementById('home');
            
            if (homeSection.classList.contains('active')) {
                gradientHeader.style.display = 'block';
                // Initialize contrast manager if not already initialized
                if (!contrastManager) {
                    contrastManager = new ColorContrastManager();
                }
            } else {
                gradientHeader.style.display = 'none';
                // Destroy contrast manager when leaving home section
                if (contrastManager) {
                    contrastManager.destroy();
                    contrastManager = null;
                }
            }
        }
        
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                // Initial toggle based on active section
                toggleGradientHeader();
                
                // Add hover effects to gradient header buttons
                const buttons = document.querySelectorAll('.action-button');
                buttons.forEach(button => {
                    button.addEventListener('mouseenter', () => {
                        button.style.transform = 'translateX(5px)';
                    });
                    
                    button.addEventListener('mouseleave', () => {
                        button.style.transform = 'translateX(0)';
                    });
                });
                
                // Listen for navigation changes (assuming your navigation script triggers section changes)
                // This is a generic listener - you may need to adjust based on your actual navigation script
                document.addEventListener('sectionChange', toggleGradientHeader);
                
                // Also check on nav item clicks
                const navItems = document.querySelectorAll('.nav-item');
                navItems.forEach(item => {
                    item.addEventListener('click', () => {
                        // Small delay to allow section change to complete
                        setTimeout(toggleGradientHeader, 50);
                    });
                });
            });
        } else {
            // Initial toggle based on active section
            toggleGradientHeader();
            
            // Add hover effects to gradient header buttons
            const buttons = document.querySelectorAll('.action-button');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateX(5px)';
                });
                
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateX(0)';
                });
            });
            
            // Listen for navigation changes
            document.addEventListener('sectionChange', toggleGradientHeader);
            
            // Also check on nav item clicks
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.addEventListener('click', () => {
                    setTimeout(toggleGradientHeader, 50);
                });
            });
        }
        
        // Clean up on page unload
        window.addEventListener('beforeunload', () => {
            if (contrastManager) {
                contrastManager.destroy();
            }
        });

         
        // DOM elements
        const timerElement = document.getElementById('timer');
        const startBtn = document.getElementById('startBtn');
        const resetBtn = document.getElementById('resetBtn');
        const timerContainer = document.getElementById('timerContainer');
        const progressRing = document.getElementById('progressRing');
        const progressIndicator = document.getElementById('progressIndicator');
        const progressBar = document.getElementById('progressBar');
        const statusElement = document.getElementById('status');
        const modeLabel = document.getElementById('modeLabel');
        const motivationElement = document.getElementById('motivation');
        const modeSelector = document.getElementById('modeSelector');
        const bodyElement = document.body;
        
        // Mode buttons
        const lightBtn = document.getElementById('lightBtn');
        const normalBtn = document.getElementById('normalBtn');
        const deepBtn = document.getElementById('deepBtn');
        const modeButtons = [lightBtn, normalBtn, deepBtn];

        // Timer modes configuration
        const timerModes = {
            light: {
                minutes: 20,
                name: "Révision rapide",
                color: "linear-gradient(135deg, #5D9CEC 0%, #4A77CC 100%)"
            },
            normal: {
                minutes: 29,
                name: "Révision normale",
                color: "linear-gradient(135deg, #7B68EE 0%, #6A58D4 100%)"
            },
            deep: {
                minutes: 45,
                name: "Révision approfondie",
                color: "linear-gradient(135deg, #FF8E53 0%, #FF6B6B 100%)"
            }
        };

        // Motivational messages (9 messages)
        const motivationalMessages = [
           "التميّز ليس فعلًا عابرًا، بل عادة تُبنى بالتركيز",
            "العمق أهم من التشتّت",
            "الوقت الجيد يصنع الفرق",
            "التركيز طريق التميّز.",
            "هدأ… واغص في العمق",
        
            "ما تستثمره اليوم، تجنيه غدًا."
        ];

        // Timer variables
        let isRunning = false;
        let timerInterval = null;
        let currentMode = 'light';
        let totalSeconds = timerModes.light.minutes * 60;
        let originalSeconds = timerModes.light.minutes * 60;
        let messageIndex = 0;
        let lastMessageTime = 0;

        // Format time as MM:SS
        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }

        // Set active mode button
        function setActiveMode(mode) {
            modeButtons.forEach(btn => btn.classList.remove('active'));
            
            if (mode === 'light') lightBtn.classList.add('active');
            if (mode === 'normal') normalBtn.classList.add('active');
            if (mode === 'deep') deepBtn.classList.add('active');
            
            currentMode = mode;
            originalSeconds = timerModes[mode].minutes * 60;
            totalSeconds = originalSeconds;
            modeLabel.textContent = timerModes[mode].name.toUpperCase();
            timerElement.textContent = formatTime(totalSeconds);
            
            // Reset visual effects
            resetVisuals();
            statusElement.textContent = `${timerModes[mode].name} selected`;
            
            // Show mode selector (for when restart is clicked)
            showModeSelector();
        }

        // Show mode selector
        function showModeSelector() {
            modeSelector.classList.remove('hidden');
            statusElement.classList.remove('hidden');
            progressIndicator.classList.remove('active');
            motivationElement.textContent = motivationalMessages[0];
            messageIndex = 0;
        }

        // Hide mode selector when timer starts
        function hideModeSelector() {
            modeSelector.classList.add('hidden');
            statusElement.classList.add('hidden');
            progressIndicator.classList.add('active');
        }

        // Reset visual effects
        function resetVisuals() {
            progressBar.style.width = "0%";
            timerElement.style.color = "var(--primary-black)";
            timerContainer.style.background = "var(--glass-bg)";
            timerContainer.style.animation = "none";
            progressRing.style.background = 'conic-gradient(transparent 0deg, transparent 0deg)';
        }

        // Show motivational message with animation
        function showMotivationalMessage() {
            motivationElement.classList.remove('fade-in');
            motivationElement.classList.add('fade-out');
            
            setTimeout(() => {
                motivationElement.textContent = motivationalMessages[messageIndex];
                motivationElement.classList.remove('fade-out');
                motivationElement.classList.add('fade-in');
                
                // Cycle to next message
                messageIndex = (messageIndex + 1) % motivationalMessages.length;
                
                // Subtle animation for timer container
                timerContainer.style.animation = "subtleGlow 1s ease";
                setTimeout(() => {
                    timerContainer.style.animation = "";
                }, 1000);
            }, 400);
        }

        // Update timer display
        function updateTimer() {
            timerElement.textContent = formatTime(totalSeconds);
            
            // Calculate progress
            const progressPercentage = 100 - (totalSeconds / originalSeconds * 100);
            
            // Update progress ring with smooth gradient
            progressRing.style.background = `
                conic-gradient(
                    ${timerModes[currentMode].color} ${progressPercentage * 3.6}deg,
                    transparent 0deg
                )
            `;
            
            // Update progress bar
            progressBar.style.width = `${progressPercentage}%`;
            
            // Timer text ALWAYS stays black
            timerElement.style.color = "var(--primary-black)";
            
            // Update timer container background with subtle animation
            const progress = 1 - (totalSeconds / originalSeconds);
            if (progress > 0.7) {
                timerContainer.style.animation = "smoothBackground 2s ease infinite";
            } else {
                timerContainer.style.animation = "";
            }
            
            // Show motivational message every 5 minutes
            const minutesPassed = Math.floor((originalSeconds - totalSeconds) / 60);
            if (minutesPassed > 0 && minutesPassed % 5 === 0 && minutesPassed !== lastMessageTime) {
                lastMessageTime = minutesPassed;
                showMotivationalMessage();
            }
            
            // Update status based on progress
            const progressValue = 1 - (totalSeconds / originalSeconds);
            if (progressValue < 0.25) {
                statusElement.textContent = "Building momentum";
            } else if (progressValue < 0.5) {
                statusElement.textContent = "In the flow state";
            } else if (progressValue < 0.75) {
                statusElement.textContent = "Deep focus achieved";
            } else if (progressValue < 0.9) {
                statusElement.textContent = "Final stretch ahead";
            } else {
                statusElement.textContent = "Almost there, stay strong";
            }
            
            // Check if timer reached zero
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = "Start";
                startBtn.innerHTML = '<span class="btn-icon">▶</span> Start';
                startBtn.classList.remove('running');
                timerElement.textContent = formatTime(originalSeconds);
                
                // Show completion message
                motivationElement.textContent = "Session complete! Well done";
                statusElement.textContent = "Take a short break";
                
                // Reset visuals
                resetVisuals();
                
                // Show mode selector again when timer completes
                showModeSelector();
                
                // Play completion sound
                playCompletionSound();
            }
            
            totalSeconds--;
        }

        // Play completion sound
        function playCompletionSound() {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                // Pleasant completion tone
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.5);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 1);
            } catch (e) {
                console.log("Audio context not supported");
            }
        }

        // Start/Pause timer
        function toggleTimer() {
            if (isRunning) {
                // Pause timer
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = "Resume";
                startBtn.innerHTML = '<span class="btn-icon">▶</span> Resume';
                startBtn.classList.remove('running');
                statusElement.textContent = "Paused";
                
                // Show mode selector when paused (optional - remove if you want it to stay hidden)
                // showModeSelector();
            } else {
                // Start timer
                if (totalSeconds <= 0) {
                    totalSeconds = originalSeconds;
                }
                
                timerInterval = setInterval(updateTimer, 1000);
                isRunning = true;
                startBtn.textContent = "Pause";
                startBtn.innerHTML = '<span class="btn-icon">⏸</span> Pause';
                startBtn.classList.add('running');
                
                // Hide mode selector when timer starts
                hideModeSelector();
                
                // Show initial motivational message
                motivationElement.textContent = motivationalMessages[0];
                messageIndex = 1;
                lastMessageTime = 0;
                
                // Update timer immediately
                updateTimer();
            }
        }

        // Reset/Restart timer - SHOWS MODE SELECTOR
        function resetTimer() {
            clearInterval(timerInterval);
            isRunning = false;
            totalSeconds = originalSeconds;
            timerElement.textContent = formatTime(totalSeconds);
            startBtn.textContent = "Start";
            startBtn.innerHTML = '<span class="btn-icon">▶</span> Start';
            startBtn.classList.remove('running');
            statusElement.textContent = `${timerModes[currentMode].name} ready`;
            
            // Reset visual effects
            resetVisuals();
            
            // IMPORTANT: Show mode selector when restart is clicked
            showModeSelector();
        }

        // Event listeners for mode buttons
        lightBtn.addEventListener('click', () => {
            if (!isRunning) {
                setActiveMode('light');
            }
        });

        normalBtn.addEventListener('click', () => {
            if (!isRunning) {
                setActiveMode('normal');
            }
        });

        deepBtn.addEventListener('click', () => {
            if (!isRunning) {
                setActiveMode('deep');
            }
        });

        // Event listeners for control buttons
        startBtn.addEventListener('click', toggleTimer);
        resetBtn.addEventListener('click', resetTimer);
        
        // Double click timer to reset
        timerContainer.addEventListener('dblclick', resetTimer);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                toggleTimer();
            } else if (e.code === 'KeyR' && e.ctrlKey) {
                e.preventDefault();
                resetTimer();
            } else if (e.code === 'Digit1' || e.code === 'Numpad1') {
                e.preventDefault();
                if (!isRunning) setActiveMode('light');
            } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
                e.preventDefault();
                if (!isRunning) setActiveMode('normal');
            } else if (e.code === 'Digit3' || e.code === 'Numpad3') {
                e.preventDefault();
                if (!isRunning) setActiveMode('deep');
            }
        });

        // Initialize
        setActiveMode('light');
