  // Topics Data
    const topics = [
        {
            id: 'ai-design',

    title: 'الأنية والغيرية',
    icon: 'fas fa-balance-scale',
    color1: '#3B2F2F',   // Brown Philosophical
    color2: '#5A4A42',   // Soft Dark Earth
    badge: 'مدخل فلسفي',
    description: 'مدخل إلى التفكير الفلسفي من خلال دراسة مفهوم الأنية وعلاقتها بالغير، وكيف يتكوّن الوعي بالذات عبر الآخر.',
    features: [
        'فهم مفهوم الأنية',
        'تحليل علاقة الذات بالغير',
        'بناء التفكير النقدي'
    ],
    stats: [
        { value: '100%', label: 'مطابق للبرنامج' },
        { value: 'درس 1', label: 'فلسفة' }
    ],
    externalLink: '#'
},
        {
            id: 'brand-strategy',
    title: 'الخصوصية والكونية',
    icon: 'fas fa-globe',
    color1: '#2E4053',   // Deep Philosophical Blue
    color2: '#34495E',   // Soft Dark Blue-Gray
    badge: 'مفهوم فلسفي',
    description: 'دراسة العلاقة بين الخصوصية والكونية، وكيف يمكن للإنسان أن يحافظ على هويته الخاصة وفي نفس الوقت ينفتح على القيم الإنسانية المشتركة.',
    features: [
        'فهم مفهوم الخصوصية',
        'تحليل معنى الكونية',
        'الموازنة بين الاختلاف والمشترك الإنساني'
    ],
    stats: [
        { value: '100%', label: 'مطابق للبرنامج' },
        { value: 'درس 2', label: 'فلسفة' }
    ],
    externalLink: '#'
},
        {
            id: 'visual-identity',
   
    title: 'النمذجة',
    icon: 'fas fa-project-diagram',
    color1: '#2C2F4A',   // Deep Intellectual Purple
    color2: '#3A3F6B',   // Soft Philosophical Indigo
    badge: 'تفكير منهجي',
    description: 'التعرّف على مفهوم النمذجة باعتبارها أداة معرفية لفهم الواقع وتبسيطه، ودورها في بناء التفكير العلمي والفلسفي.',
    features: [
        'فهم مفهوم النمذجة',
        'تحليل دور النموذج في المعرفة',
        'التمييز بين الواقع والنموذج'
    ],
    stats: [
        { value: '100%', label: 'مطابق للبرنامج' },
        { value: 'درس 3', label: 'فلسفة' }
    ],
    externalLink: '#'

        }
    ];

    // Resources Data
    const resources = [
       {
    title: "الأنية والغيرية",
    description: "درس فلسفي يعرّف بمفهوم الأنية وعلاقتها بالغير، ودور الآخر في بناء الوعي بالذات وتشكّل الهوية.",
    icon: "fas fa-user-friends",
    pdfUrl: "https://drive.google.com/file/d/lesson1-identity/preview",
    fileName: "الأنية-والغيرية.pdf"
},
{
    title: "الخصوصية والكونية",
    description: "درس فلسفي يدرس العلاقة بين الخصوصية الثقافية والكونية الإنسانية، وكيف يمكن التوفيق بين الاختلاف والمشترك.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/lesson2-universal/preview",
    fileName: "الخصوصية-والكونية.pdf"
},
{
    title: "النمذجة",
    description: "درس فلسفي يوضّح مفهوم النمذجة باعتبارها أداة معرفية لفهم الواقع وتبسيطه وبناء التفكير العلمي.",
    icon: "fas fa-project-diagram",
    pdfUrl: "https://drive.google.com/file/d/lesson3-modeling/preview",
    fileName: "النمذجة.pdf"
}

    ];

    // Horizontal Topics Carousel - FIXED VERSION
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
            // FIXED: For RTL layout, we need positive translateX values
            const position = this.currentIndex * this.slideWidth;
            this.track.style.transform = `translateX(${position}px)`;
        }
        
        activateSlide(index) {
            // Update slides
            const slides = this.track.querySelectorAll('.carousel-slide');
            slides.forEach(slide => {
                slide.classList.remove('active');
                slide.setAttribute('aria-hidden', 'true');
            });
            if (slides[index]) {
                slides[index].classList.add('active');
                slides[index].setAttribute('aria-hidden', 'false');
            }
            
            // Update tabs
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
            
            // Update button states
            this.prevBtn.disabled = this.currentIndex === 0;
            this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
            
            // Update dots
            const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
                dot.setAttribute('aria-label', `الانتقال للشريحة ${index + 1} ${index === this.currentIndex ? '(الحالية)' : ''}`);
            });
        }
        
        setupEventListeners() {
            // Button controls
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoSlide();
            });
            
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoSlide();
            });
            
            // Keyboard navigation
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
            
            // Touch/swipe events
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
                
                // Add drag effect
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
            
            // Mouse drag events
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
                
                // Add drag effect
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
            
            // Pause auto-slide on hover
            this.container.addEventListener('mouseenter', () => {
                this.pauseAutoSlide();
            });
            
            this.container.addEventListener('mouseleave', () => {
                if (this.isAutoSliding && !isDragging) {
                    this.startAutoSlide();
                }
            });
            
            // Window resize
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
        
        // Close modal button
        modalClose.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        });
        
        // Global function to open modal
        window.openModal = function(resource) {
            currentResource = resource;
            isModalOpen = true;
            
            // Update modal title
            modalTitle.innerHTML = `
                <i class="fas fa-file-pdf"></i>
                <span>${resource.title}</span>
            `;
            
            // Show modal
            modal.classList.add('active');
            document.documentElement.style.overflow = 'hidden';
            
            // Reset and show loading
            pdfLoading.style.display = 'flex';
            pdfViewer.style.display = 'none';
            pdfViewer.classList.remove('loaded');
            pdfViewer.src = '';
            
            // Load PDF after a short delay for animation
            setTimeout(() => {
                pdfViewer.src = resource.pdfUrl + '?t=' + Date.now();
            }, 400);
        };
        
        function closeModal() {
            if (!isModalOpen) return;
            
            // Hide modal
            modal.classList.remove('active');
            isModalOpen = false;
            
            // Reset state after animation
            setTimeout(() => {
                document.documentElement.style.overflow = '';
                pdfViewer.src = '';
                pdfLoading.style.display = 'flex';
                pdfViewer.style.display = 'none';
                pdfViewer.classList.remove('loaded');
                currentResource = null;
            }, 400);
        }
        
        // PDF load event
        pdfViewer.addEventListener('load', () => {
            setTimeout(() => {
                pdfLoading.style.display = 'none';
                pdfViewer.style.display = 'block';
                pdfViewer.classList.add('loaded');
            }, 300);
        });
        
        // PDF error event
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

    // Main initialization
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            // Create carousel instance and assign to window object
            window.carousel = new TopicsCarousel();
            initResources();
            initModal();
            initNavigationEffects();
            initScrollTop();
            initSmoothScrolling();
            
            // Add loaded class for any post-load animations
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 300);
        }, 100);
    });

    // Handle page visibility (pause auto-slide when tab is not active)
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