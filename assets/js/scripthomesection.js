  // Home page specific scripts - Fixed scroll reveal (no conflict)
        document.addEventListener('DOMContentLoaded', function() {
            // Progress bars animation - only for home section
            const barObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        entry.target.querySelectorAll('.prog-bar[data-pct]').forEach(bar => {
                            requestAnimationFrame(() => {
                                bar.style.width = bar.dataset.pct + '%';
                            });
                        });
                        barObserver.unobserve(entry.target);
                    }
                });
            }, { threshold:.3 });
            
            document.querySelectorAll('#home .dash-card').forEach(el => barObserver.observe(el));

            // Scroll reveal for home section only - FIXED: Now only observes #home elements
            const revealObserver = new IntersectionObserver(entries => {
                entries.forEach(e => { 
                    if(e.isIntersecting){ 
                        e.target.classList.add('on'); 
                        revealObserver.unobserve(e.target); 
                    } 
                });
            }, { threshold:.08, rootMargin:'0px 0px -32px 0px' });
            
            // Only observe elements with class 'r' that are INSIDE #home
            document.querySelectorAll('#home .r').forEach(el => revealObserver.observe(el));

            // Carousel drag - only for home section
            document.querySelectorAll('#home .track').forEach(track => {
                let isDown=false, startX, scrollLeft;
                track.addEventListener('mousedown', e => { 
                    e.preventDefault();
                    isDown=true; 
                    startX=e.pageX-track.offsetLeft; 
                    scrollLeft=track.scrollLeft; 
                    track.style.cursor='grabbing'; 
                });
                window.addEventListener('mouseup', () => { 
                    isDown=false; 
                    if(track) track.style.cursor='grab'; 
                });
                track.addEventListener('mousemove', e => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - track.offsetLeft;
                    track.scrollLeft = scrollLeft - (x-startX);
                });
                
                // Prevent default drag behavior
                track.addEventListener('dragstart', (e) => e.preventDefault());
            });

            // Navigation functionality
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.content-section');
            
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetId = this.dataset.target;
                    
                    // Update active nav item
                    navItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update active section
                    sections.forEach(section => {
                        section.classList.remove('active');
                        if(section.id === targetId) {
                            section.classList.add('active');
                            // Scroll to top of section
                            window.scrollTo(0, 0);
                        }
                    });
                });
            });
        });