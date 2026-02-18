    (function() {
            // Only initialize if we're on the speakwell page
            const track = document.getElementById('carouselTrack');
            if (!track) return;
            
            const cards = Array.from(track.querySelectorAll('.hero-card'));
            const dots = Array.from(document.querySelectorAll('.progress-wrap .prog-dot'));
            const total = cards.length;
            let current = 0;
            let startX = 0;
            let dragging = false;
            let autoTimer;

            function goTo(idx) {
                cards[current].classList.remove('active');
                current = ((idx % total) + total) % total;
                track.style.transform = `translateX(-${current * 100}%)`;
                
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        cards[current].classList.add('active');
                    });
                });

                dots.forEach((dot, i) => dot.classList.toggle('active', i === current));

                clearInterval(autoTimer);
                autoTimer = setInterval(() => goTo(current + 1), 5500);
            }

            dots.forEach(dot => {
                dot.addEventListener('click', () => goTo(parseInt(dot.dataset.idx)));
            });

            document.getElementById('arrowPrev').addEventListener('click', () => goTo(current - 1));
            document.getElementById('arrowNext').addEventListener('click', () => goTo(current + 1));

            track.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
            }, { passive: true });

            track.addEventListener('touchend', (e) => {
                const diff = startX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 42) {
                    goTo(diff > 0 ? current + 1 : current - 1);
                }
            });

            track.addEventListener('mousedown', (e) => {
                startX = e.clientX;
                dragging = true;
                e.preventDefault();
            });

            window.addEventListener('mouseup', (e) => {
                if (!dragging) return;
                dragging = false;
                const diff = startX - e.clientX;
                if (Math.abs(diff) > 42) {
                    goTo(diff > 0 ? current + 1 : current - 1);
                }
            });

            track.addEventListener('dragstart', (e) => e.preventDefault());

            cards.forEach((c, i) => c.classList.toggle('active', i === current));
            autoTimer = setInterval(() => goTo(current + 1), 5500);

            document.getElementById('carouselOuter').addEventListener('mouseenter', () => {
                clearInterval(autoTimer);
            });

            document.getElementById('carouselOuter').addEventListener('mouseleave', () => {
                clearInterval(autoTimer);
                autoTimer = setInterval(() => goTo(current + 1), 5500);
            });
        })();