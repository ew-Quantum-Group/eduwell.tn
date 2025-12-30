
        // Initialisation des animations au scroll
        function initScrollAnimations() {
            const reveals = document.querySelectorAll('.reveal');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -30px 0px'
            });
            
            reveals.forEach(element => {
                observer.observe(element);
            });
        }

        // Bouton Retour
        const backButton = document.getElementById('backButton');
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (document.getElementById('platformModal').classList.contains('active')) {
                closeModal();
            } else if (window.history.length > 1) {
                window.history.back();
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        // Logique du Modal
        const downloadBtnHero = document.getElementById('downloadBtnHero');
        const downloadBtnPrimary = document.getElementById('downloadBtnPrimary');
        const downloadBtnSecondary = document.getElementById('downloadBtnSecondary');
        const platformModal = document.getElementById('platformModal');
        const closeModalBtn = document.getElementById('closeModal');
        const androidBtn = document.getElementById('androidBtn');
        const iosBtn = document.getElementById('iosBtn');
        const backBtn = document.getElementById('backBtn');
        const platformSelection = document.getElementById('platformSelection');
        const comingSoonMessage = document.getElementById('comingSoonMessage');

        function openModal() {
            platformModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            platformSelection.style.display = 'block';
            comingSoonMessage.style.display = 'none';
        }

        function closeModal() {
            platformModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                platformSelection.style.display = 'block';
                comingSoonMessage.style.display = 'none';
            }, 200);
        }

        [downloadBtnHero, downloadBtnPrimary, downloadBtnSecondary].forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        closeModalBtn.addEventListener('click', closeModal);
        
        platformModal.addEventListener('click', function(e) {
            if (e.target === platformModal) closeModal();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && platformModal.classList.contains('active')) {
                closeModal();
            }
        });

        androidBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                window.location.href = 'https://files.appsgeyser.com/Sahl%20App_19386403.apk';
            }, 150);
        });

        iosBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                setTimeout(() => {
                    platformSelection.style.display = 'none';
                    comingSoonMessage.style.display = 'block';
                }, 200);
            }, 150);
        });

        backBtn.addEventListener('click', function() {
            comingSoonMessage.style.display = 'none';
            platformSelection.style.display = 'block';
        });

        // Effet ripple
        document.querySelectorAll('.download-btn-hero, .download-btn-primary, .download-btn-secondary, .platform-btn, .footer-link').forEach(button => {
            button.addEventListener('click', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const size = Math.max(rect.width, rect.height);
                
                const ripple = document.createElement('span');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    width: ${size}px;
                    height: ${size}px;
                    top: ${y - size/2}px;
                    left: ${x - size/2}px;
                    pointer-events: none;
                    z-index: 1;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    if (ripple.parentNode === this) {
                        this.removeChild(ripple);
                    }
                }, 600);
            });
        });

        // Navigation fluide
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialisation
        window.addEventListener('DOMContentLoaded', function() {
            initScrollAnimations();
            
            // Ajout du style ripple
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        });
