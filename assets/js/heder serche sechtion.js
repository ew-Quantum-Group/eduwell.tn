  (function() {
            'use strict';

            const DURATION = 7000;
            const slides = Array.from(document.querySelectorAll('#search .slide:not(.slide-ghost)'));
            const dots = Array.from(document.querySelectorAll('#search .dot'));
            let current = 0;
            let timer = null;
            let paused = false;

            function goTo(idx) {
                const next = ((idx % slides.length) + slides.length) % slides.length;
                if (next === current) return;

                slides[current].classList.remove('active');
                dots[current].classList.remove('active');
                current = next;
                slides[current].classList.add('active');
                dots[current].classList.add('active');
            }

            function schedule() {
                clearTimeout(timer);
                if (paused) return;
                timer = setTimeout(() => {
                    goTo(current + 1);
                    schedule();
                }, DURATION);
            }

            dots.forEach(dot => {
                const activate = () => {
                    goTo(parseInt(dot.dataset.index, 10));
                    schedule();
                };
                dot.addEventListener('click', activate);
                dot.addEventListener('keydown', e => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
                });
            });

            const wrap = document.getElementById('searchSlidesWrap');
            if (wrap) {
                wrap.addEventListener('mouseenter', () => { paused = true; clearTimeout(timer); });
                wrap.addEventListener('mouseleave', () => { paused = false; schedule(); });

                let touchStartX = null;
                wrap.addEventListener('touchstart', e => {
                    touchStartX = e.touches[0].clientX;
                }, { passive: true });

                wrap.addEventListener('touchend', e => {
                    if (touchStartX === null) return;
                    const dx = e.changedTouches[0].clientX - touchStartX;
                    touchStartX = null;
                    if (Math.abs(dx) < 40) return;
                    goTo(dx < 0 ? current + 1 : current - 1);
                    schedule();
                }, { passive: true });
            }


            schedule();
        })();