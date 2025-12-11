
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