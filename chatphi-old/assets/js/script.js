   // Authentication Configuration - MUST MATCH login.html
    const AUTH_CONFIG = {
        isLoggedInKey: 'eduwell_svt_isLoggedIn',
        usernameKey: 'eduwell_svt_username',
        lastActivityKey: 'eduwell_svt_lastActivity'
    };

    // Session Management - 30 minute inactivity timeout
    const SESSION_CONFIG = {
        inactivityTimeout: 30 * 60 * 1000, // 30 minutes
        checkInterval: 60000, // Check every minute
        isLoggedInKey: 'eduwell_svt_isLoggedIn',
        usernameKey: 'eduwell_svt_username',
        lastActivityKey: 'eduwell_svt_lastActivity'
    };

    // Security: Disable right-click and keyboard shortcuts
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+S, Ctrl+Shift+S, Ctrl+P
        if ((e.ctrlKey && e.key === 's') || 
            (e.ctrlKey && e.shiftKey && e.key === 'S') || 
            (e.ctrlKey && e.key === 'p') ||
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });

    // Session Manager Class
    class SessionManager {
        constructor() {
            this.timer = null;
        }

        init() {
            console.log('Session manager initialized');
            this.clearTimers();
            this.updateActivity();
            this.startSessionCheck();
            this.setupActivityDetection();
            this.checkSession();
        }

        startSessionCheck() {
            this.timer = setInterval(() => {
                this.checkSession();
            }, SESSION_CONFIG.checkInterval);
        }

        setupActivityDetection() {
            const activityEvents = ['click', 'mousemove', 'keydown', 'scroll', 'touchstart'];
            activityEvents.forEach(event => {
                document.addEventListener(event, () => {
                    this.updateActivity();
                }, { passive: true });
            });
        }

        updateActivity() {
            localStorage.setItem(SESSION_CONFIG.lastActivityKey, Date.now().toString());
        }

        checkSession() {
            if (!this.isAuthenticated()) {
                return;
            }

            const lastActivity = localStorage.getItem(SESSION_CONFIG.lastActivityKey);
            if (!lastActivity) {
                this.updateActivity();
                return;
            }

            const lastActivityTime = parseInt(lastActivity);
            const currentTime = Date.now();
            const timeSinceLastActivity = currentTime - lastActivityTime;

            if (timeSinceLastActivity >= SESSION_CONFIG.inactivityTimeout) {
                console.log('Session expired due to inactivity');
                this.forceLogout();
                return;
            }
        }

        forceLogout() {
            console.log('Session expired - forcing logout');
            this.clearSession();
            this.clearTimers();
            window.location.href = 'login.html?message=session_expired';
        }

        clearSession() {
            localStorage.removeItem(SESSION_CONFIG.isLoggedInKey);
            localStorage.removeItem(SESSION_CONFIG.usernameKey);
            localStorage.removeItem(SESSION_CONFIG.lastActivityKey);
        }

        clearTimers() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }

        isAuthenticated() {
            return localStorage.getItem(SESSION_CONFIG.isLoggedInKey) === 'true';
        }
    }

    // Authentication check function
    function checkAuthentication() {
        const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
        
        // If not logged in, redirect to login page
        if (!isLoggedIn) {
            console.log('Not authenticated - redirecting to login page');
            window.location.href = 'login.html';
            return false;
        }
        
        // Check for expired session (30 minutes of inactivity)
        if (lastActivity) {
            const lastActivityTime = parseInt(lastActivity);
            const currentTime = Date.now();
            const minutesDiff = (currentTime - lastActivityTime) / (1000 * 60);
            
            if (minutesDiff >= 30) {
                localStorage.clear();
                window.location.href = 'login.html?message=session_expired';
                return false;
            }
        }
        
        return true;
    }

    // Display user welcome message
    function displayUserWelcome() {
        const username = localStorage.getItem(AUTH_CONFIG.usernameKey) || 'المستخدم';
        const userWelcome = document.getElementById('userWelcome');
        if (userWelcome) {
            userWelcome.innerHTML = `
                <i class="fas fa-user-circle"></i>
                <span>مرحباً، ${username}!</span>
            `;
        }
    }

    // Setup logout functionality - WORKING VERSION
    function setupLogout() {
        const logoutBtn = document.getElementById('logoutBtn');
        const logoutConfirmationPopup = document.getElementById('logoutConfirmationPopup');
        const logoutCancelBtn = document.getElementById('logoutCancelBtn');
        const logoutConfirmBtn = document.getElementById('logoutConfirmBtn');

        // Show logout confirmation modal when logout button is clicked
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logoutConfirmationPopup.style.display = 'flex';
                setTimeout(() => {
                    logoutConfirmationPopup.classList.add('active');
                }, 10);
                document.body.style.overflow = 'hidden';
            });
        }

        // Cancel logout - hide modal
        if (logoutCancelBtn) {
            logoutCancelBtn.addEventListener('click', function(e) {
                e.preventDefault();
                logoutConfirmationPopup.classList.remove('active');
                setTimeout(() => {
                    logoutConfirmationPopup.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            });
        }

        // Confirm logout - WORKING VERSION
        if (logoutConfirmBtn) {
            logoutConfirmBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Show loading state
                logoutConfirmBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تسجيل الخروج...';
                logoutConfirmBtn.disabled = true;
                
                // Clear all session data
                localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
                localStorage.removeItem(AUTH_CONFIG.usernameKey);
                localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
                
                // Clear session manager
                if (window.sessionManager) {
                    window.sessionManager.clearTimers();
                    window.sessionManager.clearSession();
                }
                
                // Close modal
                logoutConfirmationPopup.classList.remove('active');
                
                // Wait for modal animation to complete, then redirect
                setTimeout(() => {
                    logoutConfirmationPopup.style.display = 'none';
                    document.body.style.overflow = '';
                    
                    // Redirect to login page
                    window.location.href = 'login.html';
                }, 300);
            });
        }

        // Close modal when clicking outside
        if (logoutConfirmationPopup) {
            logoutConfirmationPopup.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                    setTimeout(() => {
                        this.style.display = 'none';
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && logoutConfirmationPopup.classList.contains('active')) {
                logoutConfirmationPopup.classList.remove('active');
                setTimeout(() => {
                    logoutConfirmationPopup.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            }
        });
    }

    // Initialize page with authentication
    document.addEventListener('DOMContentLoaded', function() {
        console.log('DOM loaded - checking authentication');
        
        // First, check authentication
        if (!checkAuthentication()) {
            console.log('Authentication failed - redirecting to login');
            return; // Stop if not authenticated
        }
        
        // User is authenticated - continue initialization
        console.log('User authenticated, initializing page...');
        
        // Initialize session manager
        window.sessionManager = new SessionManager();
        sessionManager.init();
        
        // Display welcome message
        displayUserWelcome();
        
        // Setup logout functionality
        setupLogout();
        
        // Now load your main JavaScript functionality
        console.log('Loading main page functionality...');
        loadMainScript();
    });

    // Load main JavaScript functionality
    function loadMainScript() {
        // Your JavaScript code will be initialized here
        initializePage();
    }





















    
    // Main initialization function
    function initializePage() {
        console.log('Initializing main page functionality...');
        
        // Initialize all components
        try {
            // Initialize carousel
            if (document.getElementById('carouselTrack') && 
                document.getElementById('topicsTabs')) {
                console.log('Initializing carousel...');
                window.carousel = new TopicsCarousel();
            }
            
            // Initialize resources
            if (document.getElementById('resourcesGrid')) {
                console.log('Initializing resources...');
                initResources();
            }
            
            // Initialize modal
            if (document.getElementById('modalOverlay')) {
                console.log('Initializing modal...');
                initModal();
            }
            
            // Initialize navigation effects
            if (document.getElementById('navContainer')) {
                console.log('Initializing navigation effects...');
                initNavigationEffects();
            }
            
            // Initialize scroll to top
            if (document.getElementById('scrollTop')) {
                console.log('Initializing scroll to top...');
                initScrollTop();
            }
            
            // Initialize smooth scrolling
            console.log('Initializing smooth scrolling...');
            initSmoothScrolling();
            
            // Add loaded class for animations
            setTimeout(() => {
                document.body.classList.add('loaded');
                console.log('Page fully loaded and initialized');
            }, 300);
            
        } catch (error) {
            console.error('Error initializing page:', error);
        }
    }


    // Horizontal Topics Carousel
    class TopicsCarousel {
        constructor() {
            this.track = document.getElementById('carouselTrack');
            this.tabsContainer = document.getElementById('topicsTabs');
            this.prevBtn = document.getElementById('prevBtn');
            this.nextBtn = document.getElementById('nextBtn');
            this.currentSlideEl = document.getElementById('currentSlide');
            this.totalSlidesEl = document.getElementById('totalSlides');
            this.dotsContainer = document.getElementById('carouselDots');
            this.container = document.getElementById('carouselContainer');
            
            this.currentIndex = 0;
            this.totalSlides = topics.length;
            this.slideWidth = 0;
            this.isAnimating = false;
            this.autoSlideInterval = null;
            this.isAutoSliding = true;
            
            this.init();
        }
        
        init() {
            this.createTabs();
            this.createSlides();
            this.createDots();
            this.setupEventListeners();
            this.updateUI();
            this.startAutoSlide();
            
            setTimeout(() => {
                this.updateSlideDimensions();
                this.activateSlide(this.currentIndex);
            }, 100);
        }
        
        createTabs() {
            topics.forEach((topic, index) => {
                const tab = document.createElement('button');
                tab.className = `topic-tab ${index === 0 ? 'active' : ''}`;
                tab.dataset.index = index;
                tab.innerHTML = `
                    <i class="${topic.icon}"></i>
                    <span>${topic.title}</span>
                `;
                
                tab.addEventListener('click', () => {
                    this.goToSlide(index);
                    this.resetAutoSlide();
                });
                
                this.tabsContainer.appendChild(tab);
            });
        }
        
        createSlides() {
            topics.forEach((topic, index) => {
                const slide = document.createElement('div');
                slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
                slide.dataset.index = index;
                
                slide.innerHTML = `
                    <div class="slide-layout">
                        <div class="slide-content">
                            <div class="slide-badge">
                                <i class="${topic.icon}"></i>
                                <span class="label">${topic.badge}</span>
                            </div>
                            <h3 class="slide-title">${topic.title}</h3>
                            <p class="slide-description">${topic.description}</p>
                            
                            <div class="slide-features">
                                ${topic.features.map(feature => `
                                    <div class="slide-feature">
                                        <i class="fas fa-check"></i>
                                        <span>${feature}</span>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <a href="${topic.externalLink}" 
                               class="slide-link" 
                               target="_blank"
                               rel="noopener noreferrer"
                               aria-label="استكشاف ${topic.title}">
                                <span>استكشف المشاريع</span>
                                <i class="fas fa-arrow-left"></i>
                            </a>
                        </div>
                        
                        <div class="slide-visual" style="--color1: ${topic.color1}; --color2: ${topic.color2};">
                            <div class="visual-content">
                                <h4 class="visual-title">${topic.title}</h4>
                                <p class="visual-description">${topic.description}</p>
                                
                                <div class="visual-stats">
                                    ${topic.stats.map(stat => `
                                        <div class="stat-item">
                                            <div class="stat-value">${stat.value}</div>
                                            <div class="stat-label">${stat.label}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                this.track.appendChild(slide);
            });
            
            this.totalSlidesEl.textContent = this.totalSlides;
        }
        
        createDots() {
            for (let i = 0; i < this.totalSlides; i++) {
                const dot = document.createElement('button');
                dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
                dot.dataset.index = i;
                dot.setAttribute('aria-label', `الانتقال للشريحة ${i + 1}`);
                dot.addEventListener('click', () => {
                    this.goToSlide(parseInt(dot.dataset.index));
                    this.resetAutoSlide();
                });
                this.dotsContainer.appendChild(dot);
            }
        }
        
        updateSlideDimensions() {
            if (this.track.children.length > 0) {
                this.slideWidth = this.container.offsetWidth;
                this.updatePosition();
            }
        }
        
        updatePosition() {
            const position = this.currentIndex * this.slideWidth;
            this.track.style.transform = `translateX(${position}px)`;
        }
        
        activateSlide(index) {
            const slides = this.track.querySelectorAll('.carousel-slide');
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.setAttribute('aria-hidden', 'true');
            });
            if (slides[index]) {
                slides[index].classList.add('active');
                slides[index].setAttribute('aria-hidden', 'false');
            }
            
            const tabs = this.tabsContainer.querySelectorAll('.topic-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            if (tabs[index]) {
                tabs[index].classList.add('active');
                tabs[index].setAttribute('aria-selected', 'true');
            } else {
                tabs.forEach(tab => tab.setAttribute('aria-selected', 'false'));
            }
        }
        
        goToSlide(index, animate = true) {
            if (this.isAnimating || index < 0 || index >= this.totalSlides) return;
            
            this.isAnimating = true;
            this.currentIndex = index;
            
            if (animate) {
                this.track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
                this.updatePosition();
                this.activateSlide(index);
                
                setTimeout(() => {
                    this.isAnimating = false;
                }, 400);
            } else {
                this.track.style.transition = 'none';
                this.updatePosition();
                this.activateSlide(index);
                
                setTimeout(() => {
                    this.track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    this.isAnimating = false;
                }, 50);
            }
            
            this.updateUI();
        }
        
        nextSlide() {
            const nextIndex = (this.currentIndex + 1) % this.totalSlides;
            this.goToSlide(nextIndex);
        }
        
        prevSlide() {
            const prevIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.goToSlide(prevIndex);
        }
        
        updateUI() {
            this.currentSlideEl.textContent = this.currentIndex + 1;
            
            this.prevBtn.disabled = this.currentIndex === 0;
            this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
            
            const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
                dot.setAttribute('aria-label', `الانتقال للشريحة ${index + 1} ${index === this.currentIndex ? '(الحالية)' : ''}`);
            });
        }
        
        setupEventListeners() {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoSlide();
            });
            
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoSlide();
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.prevSlide();
                    this.resetAutoSlide();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.nextSlide();
                    this.resetAutoSlide();
                }
            });
            
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            
            this.container.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
                this.pauseAutoSlide();
                this.track.style.transition = 'none';
            }, { passive: true });
            
            this.container.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                const diff = startX - currentX;
                
                const position = (this.currentIndex * this.slideWidth) + diff;
                this.track.style.transform = `translateX(${position}px)`;
            }, { passive: true });
            
            this.container.addEventListener('touchend', (e) => {
                if (!isDragging) return;
                
                const diff = startX - currentX;
                const threshold = this.slideWidth / 4;
                
                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                } else {
                    this.goToSlide(this.currentIndex);
                }
                
                isDragging = false;
                this.track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
                
                if (this.isAutoSliding) {
                    this.startAutoSlide();
                }
            }, { passive: true });
            
            this.container.addEventListener('mousedown', (e) => {
                startX = e.clientX;
                isDragging = true;
                this.pauseAutoSlide();
                this.track.style.transition = 'none';
                e.preventDefault();
            });
            
            this.container.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const diff = startX - e.clientX;
                
                const position = (this.currentIndex * this.slideWidth) + diff;
                this.track.style.transform = `translateX(${position}px)`;
            });
            
            this.container.addEventListener('mouseup', (e) => {
                if (!isDragging) return;
                
                const diff = startX - e.clientX;
                const threshold = this.slideWidth / 4;
                
                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                } else {
                    this.goToSlide(this.currentIndex);
                }
                
                isDragging = false;
                this.track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
                
                if (this.isAutoSliding) {
                    this.startAutoSlide();
                }
            });
            
            this.container.addEventListener('mouseleave', () => {
                if (isDragging) {
                    isDragging = false;
                    this.track.style.transition = 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    this.goToSlide(this.currentIndex);
                    
                    if (this.isAutoSliding) {
                        this.startAutoSlide();
                    }
                }
            });
            
            this.container.addEventListener('mouseenter', () => {
                this.pauseAutoSlide();
            });
            
            this.container.addEventListener('mouseleave', () => {
                if (this.isAutoSliding && !isDragging) {
                    this.startAutoSlide();
                }
            });
            
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    this.updateSlideDimensions();
                    this.goToSlide(this.currentIndex, false);
                }, 150);
            });
        }
        
        startAutoSlide() {
            this.isAutoSliding = true;
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, 6000);
        }
        
        pauseAutoSlide() {
            this.isAutoSliding = false;
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
                this.autoSlideInterval = null;
            }
        }
        
        resetAutoSlide() {
            this.pauseAutoSlide();
            this.startAutoSlide();
        }
    }

    // Initialize Resources
    function initResources() {
        const grid = document.getElementById('resourcesGrid');
        
        resources.forEach((resource, index) => {
            const card = document.createElement('div');
            card.className = 'resource-card';
            card.tabIndex = 0;
            card.dataset.index = index;
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', `فتح مستند ${resource.title}`);
            
            card.innerHTML = `
                <div class="resource-icon-container">
                    <i class="${resource.icon} resource-icon"></i>
                </div>
                <div class="resource-content">
                    <h3 class="resource-title">${resource.title}</h3>
                    <p class="resource-description">${resource.description}</p>
                    <div class="resource-action">
                        <span>عرض المستند</span>
                        <i class="fas fa-arrow-left"></i>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(resource);
                card.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
            
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(resource);
                }
            });
            
            grid.appendChild(card);
        });
    }

    // Initialize Modal
    function initModal() {
        const modal = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const pdfViewer = document.getElementById('pdfViewer');
        const pdfLoading = document.getElementById('pdfLoading');
        const modalTitle = document.getElementById('modalTitle');
        
        let currentResource = null;
        let isModalOpen = false;
        
        modalClose.addEventListener('click', closeModal);
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        });
        
        window.openModal = function(resource) {
            currentResource = resource;
            isModalOpen = true;
            
            modalTitle.innerHTML = `
                <i class="fas fa-file-pdf"></i>
                <span>${resource.title}</span>
            `;
            
            modal.classList.add('active');
            document.documentElement.style.overflow = 'hidden';
            
            pdfLoading.style.display = 'flex';
            pdfViewer.style.display = 'none';
            pdfViewer.classList.remove('loaded');
            pdfViewer.src = '';
            
            setTimeout(() => {
                pdfViewer.src = resource.pdfUrl + '?t=' + Date.now();
            }, 400);
        };
        
        function closeModal() {
            if (!isModalOpen) return;
            
            modal.classList.remove('active');
            isModalOpen = false;
            
            setTimeout(() => {
                document.documentElement.style.overflow = '';
                pdfViewer.src = '';
                pdfLoading.style.display = 'flex';
                pdfViewer.style.display = 'none';
                pdfViewer.classList.remove('loaded');
                currentResource = null;
            }, 400);
        }
        
        pdfViewer.addEventListener('load', () => {
            setTimeout(() => {
                pdfLoading.style.display = 'none';
                pdfViewer.style.display = 'block';
                pdfViewer.classList.add('loaded');
            }, 300);
        });
        
        pdfViewer.addEventListener('error', () => {
            pdfLoading.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <span>حدث خطأ في تحميل المستند</span>
            `;
        });
    }

    // Navigation Scroll Effect
    function initNavigationEffects() {
        const nav = document.getElementById('navContainer');
        let lastScroll = 0;
        
        function updateNav() {
            const currentScroll = window.scrollY;
            
            if (currentScroll <= 0) {
                nav.classList.remove('scrolled');
                return;
            }
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        }
        
        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav();
    }

    // Scroll to Top
    function initScrollTop() {
        const scrollTop = document.getElementById('scrollTop');
        let scrollTimeout;
        
        function checkScroll() {
            if (window.scrollY > 600) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        }
        
        function handleScroll() {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(() => {
                    checkScroll();
                    scrollTimeout = null;
                }, 50);
            }
        }
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        checkScroll();
        
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth Scrolling
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.getElementById('navContainer').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Handle page visibility
    document.addEventListener('visibilitychange', () => {
        if (window.carousel) {
            if (document.hidden) {
                window.carousel.pauseAutoSlide();
            } else {
                if (window.carousel.isAutoSliding) {
                    window.carousel.startAutoSlide();
                }
            }
        }
    });