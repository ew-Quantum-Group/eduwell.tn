 (function() {
            /* VIDEO MODAL */
            function openVP(url, title) {
                document.getElementById('vpTitle').textContent = title || 'Faculty Overview';
                document.getElementById('vpFrame').innerHTML = '<iframe src="' + url + '?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>';
                document.getElementById('vpModal').classList.add('open');
                document.body.style.overflow = 'hidden';
            }
            function closeVP() {
                document.getElementById('vpModal').classList.remove('open');
                document.body.style.overflow = '';
                setTimeout(function() { document.getElementById('vpFrame').innerHTML = ''; }, 420);
            }
            document.getElementById('vpCloseBtn').addEventListener('click', closeVP);
            document.getElementById('vpScrim').addEventListener('click', closeVP);
            document.querySelectorAll('#about .v-panel').forEach(function(p) {
                p.addEventListener('click', function() {
                    var u = this.getAttribute('data-video');
                    if (u) openVP(u, this.getAttribute('data-title'));
                });
            });

            /* SECTION 2: reveal */
            var io = new IntersectionObserver(function(entries) {
                entries.forEach(function(e) {
                    if (e.isIntersecting) {
                        e.target.classList.add('vis');
                        io.unobserve(e.target);
                    }
                });
            }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
            document.querySelectorAll('#about .sg-card').forEach(function(c) { io.observe(c); });

            /* SECTION 2: per-card tilt */
            document.querySelectorAll('#about .sg-card').forEach(function(card) {
                var raf;
                card.addEventListener('mousemove', function(e) {
                    cancelAnimationFrame(raf);
                    var self = this;
                    raf = requestAnimationFrame(function() {
                        var r = self.getBoundingClientRect();
                        var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
                        var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
                        self.style.transition = 'transform .14s ease-out,background .3s,box-shadow .3s';
                        self.style.transform = 'perspective(1000px) rotateX(' + (-dy * 3) + 'deg) rotateY(' + (dx * 3) + 'deg) translateZ(12px)';
                        self.style.animation = 'none';
                    });
                });
                card.addEventListener('mouseleave', function() {
                    cancelAnimationFrame(raf);
                    var self = this;
                    self.style.transition = 'transform .65s cubic-bezier(.16,1,.3,1),background .3s,box-shadow .3s';
                    self.style.transform = '';
                });
            });

            /* SECTION 2: filter */
            var allCards = Array.from(document.querySelectorAll('#about .sg-card'));
            document.querySelectorAll('#about .sg-filter-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('#about .sg-filter-btn').forEach(function(b) { b.classList.remove('active'); });
                    this.classList.add('active');
                    var f = this.getAttribute('data-filter');
                    var vis = 0;
                    allCards.forEach(function(c) {
                        var match = f === 'all' || c.getAttribute('data-filter') === f;
                        c.classList.toggle('hidden', !match);
                        if (match) { c.style.animation = ''; vis++; }
                    });
                    var el = document.getElementById('sgCount');
                    if (el) el.textContent = vis + ' course' + (vis !== 1 ? 's' : '');
                });
            });

            /* SECTION 2: modal */
            function openSG(card) {
                var tag = card.getAttribute('data-tag') || 'Course';
                var lvl = card.getAttribute('data-level') || '';
                var pct = card.getAttribute('data-pct') || '70';
                document.getElementById('sgModalLabel').textContent = tag;
                document.getElementById('sgModalImg').src = card.getAttribute('data-img') || '';
                document.getElementById('sgModalImg').alt = tag;
                document.getElementById('sgHeroTag').textContent = tag;
                document.getElementById('sgHeroLvl').textContent = lvl;
                document.getElementById('sgModalTitle').innerHTML = card.getAttribute('data-title') || '';
                document.getElementById('sgModalDesc').textContent = card.getAttribute('data-desc') || '';
                document.getElementById('sgModalLink').href = card.getAttribute('data-href') || '#';
                var chipsEl = document.getElementById('sgModalChips');
                chipsEl.innerHTML = '';
                (card.getAttribute('data-chips') || '').split('·').forEach(function(ch) {
                    var s = document.createElement('span'); s.className = 'sgm-chip'; s.textContent = ch.trim(); chipsEl.appendChild(s);
                });
                document.getElementById('sgModalStats').innerHTML = [
                    { val: card.getAttribute('data-hours') + ' hrs', lbl: 'Durée' },
                    { val: card.getAttribute('data-enrolled'), lbl: 'Inscrits' },
                    { val: '★ ' + card.getAttribute('data-rating'), lbl: card.getAttribute('data-reviews') + ' Avis' }
                ].map(function(s) {
                    return '<div class="sgm-stat"><span class="sgm-stat-val">' + s.val + '</span><span class="sgm-stat-lbl">' + s.lbl + '</span></div>';
                }).join('');
                var fill = document.getElementById('sgProgFill');
                document.getElementById('sgProgPct').textContent = pct + '% seats taken';
                fill.style.width = '0';
                var instName = card.getAttribute('data-inst') || '';
                document.getElementById('sgInstAvatar').textContent = instName ? instName.charAt(instName.lastIndexOf(' ') + 1) : '?';
                document.getElementById('sgInstName').textContent = instName;
                document.getElementById('sgInstRole').textContent = card.getAttribute('data-inst-role') || '';
                document.getElementById('sgModal').classList.add('open');
                document.body.style.overflow = 'hidden';
                requestAnimationFrame(function() { requestAnimationFrame(function() { fill.style.width = pct + '%'; }); });
            }
            function closeSG() {
                document.getElementById('sgModal').classList.remove('open');
                document.body.style.overflow = '';
            }
            document.querySelectorAll('#about .sg-card').forEach(function(c) { c.addEventListener('click', function() { openSG(this); }); });
            document.getElementById('sgCloseBtn').addEventListener('click', closeSG);
            document.getElementById('sgModalClose2').addEventListener('click', closeSG);
            document.getElementById('sgScrim').addEventListener('click', closeSG);
            document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { closeVP(); closeSG(); } });
        })();