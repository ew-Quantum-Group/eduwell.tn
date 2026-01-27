
document.addEventListener('DOMContentLoaded', function() {
    const SLIDE_DURATION = 5000; // 5 secondes
    
    // Éléments desktop
    const desktopSlides = document.querySelectorAll('.carousel-slide');
    const desktopTextSlides = document.querySelectorAll('.text-slide');
    const desktopIndicators = document.querySelectorAll('.nav-indicator');
    const desktopPrevBtn = document.querySelector('.prev-button');
    const desktopNextBtn = document.querySelector('.next-button');
    const desktopCurrentSlide = document.querySelector('.current-slide');
    const desktopTotalSlides = document.querySelector('.total-slides');
    
    // Éléments mobile
    const mobileSlides = document.querySelectorAll('.mobile-slide');
    const mobileIndicators = document.querySelectorAll('.mobile-nav-indicator');
    const mobilePrevBtn = document.querySelector('.mobile-prev-button');
    const mobileNextBtn = document.querySelector('.mobile-next-button');
    const mobileCurrentSlide = document.querySelector('.mobile-current-slide');
    const mobileTotalSlides = document.querySelector('.mobile-total-slides');
    
    const totalSlides = 3;
    let currentSlide = 0;
    let slideInterval;
    
    // Initialiser les compteurs
    function initCounters() {
        if (desktopTotalSlides) desktopTotalSlides.textContent = totalSlides.toString().padStart(2, '0');
        if (mobileTotalSlides) mobileTotalSlides.textContent = totalSlides.toString().padStart(2, '0');
        updateSlideCounters();
    }
    
    // Mettre à jour les compteurs
    function updateSlideCounters() {
        if (desktopCurrentSlide) desktopCurrentSlide.textContent = (currentSlide + 1).toString().padStart(2, '0');
        if (mobileCurrentSlide) mobileCurrentSlide.textContent = (currentSlide + 1).toString().padStart(2, '0');
    }
    
    // Aller à une slide spécifique
    function goToSlide(nextIndex) {
        // Desktop
        desktopSlides.forEach(slide => slide.classList.remove('active'));
        desktopTextSlides.forEach(slide => slide.classList.remove('active'));
        desktopIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        desktopSlides[nextIndex].classList.add('active');
        desktopTextSlides[nextIndex].classList.add('active');
        desktopIndicators[nextIndex].classList.add('active');
        
        // Mobile
        mobileSlides.forEach(slide => slide.classList.remove('active'));
        mobileIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        mobileSlides[nextIndex].classList.add('active');
        mobileIndicators[nextIndex].classList.add('active');
        
        currentSlide = nextIndex;
        updateSlideCounters();
    }
    
    // Slide suivante
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
    }
    
    // Slide précédente
    function prevSlide() {
        const nextIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(nextIndex);
    }
    
    // Démarrer le carrousel automatique
    function startCarousel() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, SLIDE_DURATION);
    }
    
    // Arrêter le carrousel
    function stopCarousel() {
        if (slideInterval) clearInterval(slideInterval);
    }
    
    // Initialiser les événements
    function initEvents() {
        // Desktop events
        if (desktopPrevBtn) {
            desktopPrevBtn.addEventListener('click', () => {
                stopCarousel();
                prevSlide();
                setTimeout(startCarousel, 8000);
            });
        }
        
        if (desktopNextBtn) {
            desktopNextBtn.addEventListener('click', () => {
                stopCarousel();
                nextSlide();
                setTimeout(startCarousel, 8000);
            });
        }
        
        // Mobile events
        if (mobilePrevBtn) {
            mobilePrevBtn.addEventListener('click', () => {
                stopCarousel();
                prevSlide();
                setTimeout(startCarousel, 8000);
            });
        }
        
        if (mobileNextBtn) {
            mobileNextBtn.addEventListener('click', () => {
                stopCarousel();
                nextSlide();
                setTimeout(startCarousel, 8000);
            });
        }
        
        // Indicateurs desktop
        desktopIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopCarousel();
                goToSlide(index);
                setTimeout(startCarousel, 8000);
            });
        });
        
        // Indicateurs mobile
        mobileIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopCarousel();
                goToSlide(index);
                setTimeout(startCarousel, 8000);
            });
        });
        
        // Navigation clavier
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                stopCarousel();
                prevSlide();
                setTimeout(startCarousel, 8000);
            } else if (e.key === 'ArrowRight') {
                stopCarousel();
                nextSlide();
                setTimeout(startCarousel, 8000);
            }
        });
        
        // Pause au survol (desktop)
        const desktopImage = document.querySelector('.image-section');
        if (desktopImage) {
            desktopImage.addEventListener('mouseenter', stopCarousel);
            desktopImage.addEventListener('mouseleave', startCarousel);
        }
        
        // Pause au touch (mobile)
        const mobileImage = document.querySelector('.mobile-carousel-container');
        if (mobileImage) {
            mobileImage.addEventListener('touchstart', stopCarousel);
            mobileImage.addEventListener('touchend', () => setTimeout(startCarousel, 3000));
        }
        
        // CTA buttons hover effect
        const ctaButtons = document.querySelectorAll('.cta-button');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const href = btn.getAttribute('onclick');
                if (href && href.includes('window.location.href')) {
                    const url = href.match(/'([^']+)'/)[1];
                    window.location.href = url;
                }
            });
            
            // Effet de clic
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('mouseup', () => {
                btn.style.transform = '';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }
    
    // Initialiser le carrousel
    function initCarousel() {
        initCounters();
        startCarousel();
        initEvents();
        
        // Précharger les images
        const images = document.querySelectorAll('.carousel-slide img, .mobile-slide img');
        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
            }
        });
    }
    
    // Démarrer le carrousel
    initCarousel();
});


// COMPACT ANIMATION SECTION SCRIPT - WITH HEIGHT CONTROL
document.addEventListener('DOMContentLoaded', function() {
    const SLIDE_DURATION = 4000;
    
    // عناصر DOM
    const startButton = document.getElementById('compactStartButton');
    const contentContainer = document.getElementById('compactContent');
    const section = document.querySelector('.compact-animation-section');
    const header = document.querySelector('.compact-header');
    const typedTextElement = document.getElementById('compactTypedText');
    const descriptionElement = document.getElementById('compactDescription');
    const progressFill = document.getElementById('compactProgressFill');
    const closeButton = document.getElementById('compactCloseButton');
    const dots = document.querySelectorAll('.compact-dot');
    
    // بيانات المحتوى
    const contentSequence = [
        {
            title: "Design Principles",
            description: "Clean, intuitive interfaces that enhance user experience."
        },
        {
            title: "Smooth Animations",
            description: "Purposeful motion guides attention seamlessly."
        },
        {
            title: "Responsive Design",
            description: "Consistent experience across all devices."
        }
    ];
    
    // متغيرات الحالة
    let currentStep = 0;
    let isAnimating = false;
    let stepTimeout = null;
    
    // دالة بدء الأنيميشن
    function startAnimation() {
        if (isAnimating) return;
        
        isAnimating = true;
        
        // إضافة class لتغيير ارتفاع القسم
        section.classList.add('with-content');
        
        // إخفاء الزر والهيدر
        startButton.classList.add('hidden');
        header.style.opacity = '0';
        header.style.visibility = 'hidden';
        header.style.height = '0';
        header.style.marginBottom = '0';
        header.style.transform = 'translateY(-10px)';
        header.style.transition = 'all 0.3s ease';
        
        // إظهار المحتوى
        setTimeout(() => {
            contentContainer.classList.add('active');
            showStep(0);
        }, 300);
    }
    
    // دالة عرض خطوة
    function showStep(stepIndex) {
        if (stepIndex >= contentSequence.length) {
            resetAnimation();
            return;
        }
        
        currentStep = stepIndex;
        
        // تحديث التقدم
        updateProgress();
        
        // الحصول على المحتوى الحالي
        const content = contentSequence[stepIndex];
        
        // إعادة تعيين النصوص
        typedTextElement.textContent = '';
        descriptionElement.textContent = '';
        descriptionElement.classList.remove('visible');
        
        // كتابة العنوان
        typeText(typedTextElement, content.title, 40, () => {
            // إظهار الوصف بعد التأخير
            setTimeout(() => {
                descriptionElement.textContent = content.description;
                descriptionElement.classList.add('visible');
            }, 200);
        });
        
        // الانتقال التلقائي للخطوة التالية
        if (stepTimeout) clearTimeout(stepTimeout);
        stepTimeout = setTimeout(() => {
            showStep(currentStep + 1);
        }, SLIDE_DURATION);
    }
    
    // دالة كتابة النص
    function typeText(element, text, speed, callback) {
        let index = 0;
        
        function typeCharacter() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(typeCharacter, speed);
            } else if (callback) {
                setTimeout(callback, 100);
            }
        }
        
        typeCharacter();
    }
    
    // دالة تحديث التقدم
    function updateProgress() {
        // تحديث شريط التقدم
        const progressPercentage = (currentStep / (contentSequence.length - 1)) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        
        // تحديث النقاط
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'completed');
            
            if (index < currentStep) {
                dot.classList.add('completed');
            } else if (index === currentStep) {
                dot.classList.add('active');
            }
        });
    }
    
    // دالة إعادة التعيين
    function resetAnimation() {
        // إيقاف المؤقت
        if (stepTimeout) clearTimeout(stepTimeout);
        
        // إعادة تعيين الحالة
        currentStep = 0;
        isAnimating = false;
        
        // إزالة class تغيير الارتفاع
        section.classList.remove('with-content');
        
        // إعادة تعيين النصوص
        typedTextElement.textContent = '';
        descriptionElement.textContent = '';
        descriptionElement.classList.remove('visible');
        
        // إعادة تعيين التقدم
        progressFill.style.width = '0%';
        dots.forEach(dot => {
            dot.classList.remove('active', 'completed');
        });
        
        // إخفاء المحتوى
        contentContainer.classList.remove('active');
        
        // إعادة إظهار الزر والهيدر
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.visibility = 'visible';
            header.style.height = 'auto';
            header.style.marginBottom = '1.5rem';
            header.style.transform = 'translateY(0)';
            
            startButton.classList.remove('hidden');
            
            // تأثير للزر
            startButton.style.animation = 'pulse 1.5s ease';
            setTimeout(() => {
                startButton.style.animation = '';
            }, 1500);
        }, 300);
    }
    
    // Event Listeners
    startButton.addEventListener('click', startAnimation);
    closeButton.addEventListener('click', resetAnimation);
    
    // النقر على النقاط للتنقل
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            if (isAnimating && index < contentSequence.length) {
                if (stepTimeout) clearTimeout(stepTimeout);
                showStep(index);
            }
        });
    });
    
    // دعم لوحة المفاتيح
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !isAnimating) {
            e.preventDefault();
            startAnimation();
        }
        
        if (e.code === 'Escape' && isAnimating) {
            resetAnimation();
        }
    });
    
    // تأثير أولي للزر
    setTimeout(() => {
        startButton.style.animation = 'pulse 2s ease-in-out';
        setTimeout(() => {
            startButton.style.animation = '';
        }, 2000);
    }, 1000);
});