  // Welcome screen
        const welcomeScreen = document.getElementById('welcomeScreen');
        const mainContainer = document.getElementById('mainContainer');
        const getStartedBtn = document.getElementById('getStartedBtn');

        getStartedBtn.addEventListener('click', () => {
            welcomeScreen.classList.add('hidden');
            setTimeout(() => {
                mainContainer.classList.add('visible');
            }, 500);
        });

        // Navigation
        const signinView = document.getElementById('signinView');
        const signupView = document.getElementById('signupView');
        const linkToSignup = document.getElementById('linkToSignup');
        const backToSignin = document.getElementById('backToSignin');

        linkToSignup.addEventListener('click', (e) => {
            e.preventDefault();
            signinView.classList.remove('active');
            setTimeout(() => {
                signupView.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 200);
        });

        backToSignin.addEventListener('click', (e) => {
            e.preventDefault();
            signupView.classList.remove('active');
            setTimeout(() => {
                signinView.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 200);
        });

        // Video Modal
        const videoModal = document.getElementById('videoModal');
        const btnSeeHow = document.getElementById('btnSeeHow');
        const closeModal = document.getElementById('closeModal');
        const videoIframe = document.getElementById('videoIframe');

        // YouTube video URL: https://youtu.be/-0bgc73860s
        const youtubeVideoId = '-0bgc73860s';
        const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

        btnSeeHow.addEventListener('click', () => {
            videoIframe.src = youtubeEmbedUrl;
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('active');
            videoIframe.src = '';
            document.body.style.overflow = '';
        });

        // Close modal when clicking outside
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeModal.click();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeModal.click();
            }
        });

        // Smooth scroll on navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });