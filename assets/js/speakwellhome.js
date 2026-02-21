 /* Custom Cursor */
            const cursor = document.getElementById('cursor');
            document.addEventListener('mousemove', e => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top  = e.clientY + 'px';
            });
            document.querySelectorAll('#speakwell a, #speakwell button, #speakwell .h-card, #speakwell .v-card, #speakwell .stat-card').forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });

            /* Horizontal drag-scroll */
            const track = document.getElementById('hTrack');
            let isDown = false, startX, scrollLeft;

            track.addEventListener('mousedown', e => {
                isDown = true;
                startX = e.pageX - track.offsetLeft;
                scrollLeft = track.scrollLeft;
            });
            ['mouseleave','mouseup'].forEach(ev =>
                track.addEventListener(ev, () => { isDown = false; })
            );
            track.addEventListener('mousemove', e => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - track.offsetLeft;
                track.scrollLeft = scrollLeft - (x - startX) * 1.5;
            });