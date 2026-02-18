
    // Apple Entertainment Section JavaScript
    function initRow(trackId, dotsId, playId, cardSel) {
        const track = document.getElementById(trackId);
        const dotsEl = document.getElementById(dotsId);
        const dots = dotsEl ? dotsEl.querySelectorAll('.dot') : [];
        const btn = document.getElementById(playId);
        const cards = track ? track.querySelectorAll(cardSel) : [];
        let playing = false, timer = null;

        if (!track || !dotsEl || !btn || cards.length === 0) return;

        // Drag scroll
        let dn = false, sx, sl;
        track.addEventListener('mousedown', e => {
            dn = true; sx = e.pageX - track.offsetLeft; sl = track.scrollLeft;
            track.style.cursor = 'grabbing';
        });
        ['mouseup','mouseleave'].forEach(ev =>
            track.addEventListener(ev, () => { dn = false; track.style.cursor = 'grab'; })
        );
        track.addEventListener('mousemove', e => {
            if (!dn) return; e.preventDefault();
            track.scrollLeft = sl - (e.pageX - track.offsetLeft - sx) * 1.35;
        });

        // Smooth dot sync
        function sync() {
            const gap = parseFloat(getComputedStyle(track).gap) || 14;
            const cw = cards[0].offsetWidth + gap;
            const idx = Math.min(Math.round(track.scrollLeft / cw), cards.length - 1);
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }
        track.addEventListener('scroll', sync, { passive: true });

        // Dot clicks → smooth scroll
        dots.forEach(d => d.addEventListener('click', () => {
            const gap = parseFloat(getComputedStyle(track).gap) || 14;
            const cw = cards[0].offsetWidth + gap;
            track.scrollTo({ left: parseInt(d.dataset.i) * cw, behavior: 'smooth' });
        }));

        // Autoplay
        const PAUSE = `<svg viewBox="0 0 16 16"><rect x="2" y="1" width="5" height="14" rx="1.5"/><rect x="9" y="1" width="5" height="14" rx="1.5"/></svg>`;
        const PLAY  = `<svg viewBox="0 0 10 12"><path d="M1 1l8 5-8 5V1z"/></svg>`;

        btn.addEventListener('click', () => {
            if (playing) {
                playing = false; clearInterval(timer); btn.innerHTML = PLAY;
            } else {
                playing = true; btn.innerHTML = PAUSE;
                timer = setInterval(() => {
                    const gap = parseFloat(getComputedStyle(track).gap) || 14;
                    const cw = cards[0].offsetWidth + gap;
                    let next = track.scrollLeft + cw;
                    if (next > cw * (cards.length - 1)) next = 0;
                    track.scrollTo({ left: next, behavior: 'smooth' });
                }, 3400);
            }
        });

        sync();
    }

    // Subtle card parallax on mouse move
    document.querySelectorAll('.card-lg, .card-sm').forEach(card => {
        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            card.style.transform = `translateY(-6px) scale(1.024) rotateX(${-y*6}deg) rotateY(${x*6}deg)`;
            card.style.transition = 'transform .1s linear, box-shadow .4s';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform .5s cubic-bezier(0.34,1.56,0.64,1), box-shadow .4s';
        });
    });

    // Initialize after DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Only initialize if elements exist
        if (document.getElementById('topTrack')) {
            initRow('topTrack', 'topDots', 'topPlay', '.card-lg');
        }
        if (document.getElementById('botTrack')) {
            initRow('botTrack', 'botDots', 'botPlay', '.card-sm');
        }

        // Header login button
        const headerLoginBtn = document.getElementById('headerLoginBtn');
        const homeHeader = document.getElementById('homeHeader');
        
        if (headerLoginBtn) {
            headerLoginBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'inscrire.html';
            });
        }
        
        if (homeHeader) {
            let lastScrollTop = 0;
            window.addEventListener('scroll', function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (scrollTop > 20) {
                    homeHeader.classList.add('scrolled');
                } else {
                    homeHeader.classList.remove('scrolled');
                }
                
                if (scrollTop > lastScrollTop && scrollTop > 200) {
                    homeHeader.style.transform = 'translateY(-100%)';
                } else {
                    homeHeader.style.transform = 'translateY(0)';
                }
                
                lastScrollTop = scrollTop;
            });
        }
        
        if (headerLoginBtn) {
            headerLoginBtn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        }
    });