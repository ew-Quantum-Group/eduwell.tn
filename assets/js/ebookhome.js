  // Scroll reveal
            const revealObs = new IntersectionObserver((entries) => {
                entries.forEach(e => {
                    if (e.isIntersecting) { e.target.classList.add('on'); revealObs.unobserve(e.target); }
                });
            }, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' });
            document.querySelectorAll('#search [data-reveal]').forEach(el => revealObs.observe(el));

            // Staggered card entries
            const cardObs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.fc, .vc, .testi-card');
                        cards.forEach((c, i) => {
                            const delay = parseInt(c.dataset.delay || 0) * 80;
                            c.style.opacity = '0';
                            c.style.transform = 'translateY(28px)';
                            c.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${80 + i * 75 + delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${80 + i * 75 + delay}ms`;
                            setTimeout(() => {
                                c.style.opacity = '1';
                                c.style.transform = 'translateY(0)';
                            }, 80);
                        });
                        cardObs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.04 });
            document.querySelectorAll('#search .feat-grid, #search .vgrid, #search .testi-grid').forEach(g => {
                g.querySelectorAll('.fc, .vc, .testi-card').forEach(c => c.style.opacity = '0');
                cardObs.observe(g);
            });

            // Drag-scroll for horizontal track
            const track = document.getElementById('htrack');
            let isDown = false, startX, scrollL;
            track.addEventListener('mousedown', e => {
                isDown = true; track.classList.add('dragging');
                startX = e.pageX - track.offsetLeft; scrollL = track.scrollLeft;
            });
            window.addEventListener('mouseup', () => { isDown = false; track.classList.remove('dragging'); });
            track.addEventListener('mousemove', e => {
                if (!isDown) return; e.preventDefault();
                track.scrollLeft = scrollL - (e.pageX - track.offsetLeft - startX) * 1.6;
            });

            // Animate stat numbers
            const statNums = document.querySelectorAll('#search .stat-num');
            const numObs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        const suffix = el.querySelector('span')?.textContent || '';
                        const baseText = el.textContent.replace(suffix, '').trim();
                        const target = parseFloat(baseText);
                        const dur = 1400; const start = performance.now();
                        function update(now) {
                            const t = Math.min((now - start) / dur, 1);
                            const ease = 1 - Math.pow(1 - t, 3);
                            const val = target * ease;
                            el.innerHTML = Math.round(val) + `<span>${suffix}</span>`;
                            if (t < 1) requestAnimationFrame(update);
                        }
                        requestAnimationFrame(update);
                        numObs.unobserve(el);
                    }
                });
            }, { threshold: 0.5 });
            statNums.forEach(el => numObs.observe(el));