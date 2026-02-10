  // DOM Elements
        const backButton = document.getElementById('backButton');
        const tenseCards = document.querySelectorAll('.tense-card');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalClose = document.getElementById('modalClose');
        const modalTitle = document.getElementById('modalTitle');
        const packsContainer = document.getElementById('packsContainer');
        let currentTense = '';

        // Back Button
        backButton.addEventListener('click', function() {
            // Add mobile-friendly feedback
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
                window.location.href = './index.html';
            }, 200);
        });

        // Card Interactions
        tenseCards.forEach(card => {
            card.addEventListener('click', function() {
                const tense = this.getAttribute('data-tense');
                currentTense = tense;
                
                // Mobile touch feedback
                this.style.transform = 'scale(0.98)';
                
                // Update modal title
                const tenseName = getTenseDisplayName(tense);
                modalTitle.textContent = `${tenseName} Exercise Packs`;
                
                // Load packs
                loadPacks(tense);
                openModal();
                
                // Reset card
                setTimeout(() => {
                    this.style.transform = '';
                }, 200);
            });
        });

        // Helper function
        function getTenseDisplayName(tense) {
            const tenseNames = {
                past: "Past Tense",
                present: "Present Tense",
                future: "Future Tense",
                mixed: "Mixed Tenses"
            };
            return tenseNames[tense] || tense;
        }

        // Modal Functions
        modalClose.addEventListener('click', closeModal);
        
        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        function openModal() {
            // Show swipe indicator on mobile
            const swipeIndicator = document.querySelector('.swipe-indicator');
            if (window.innerWidth < 768) {
                swipeIndicator.style.display = 'block';
            }
            
            modalOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modalOverlay.classList.add('active');
            }, 10);
        }

        function closeModal() {
            modalOverlay.classList.remove('active');
            
            setTimeout(() => {
                modalOverlay.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }

        function loadPacks(tense) {
            packsContainer.innerHTML = '';
            const packs = packsData[tense];
            
            // Show loading animation
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'loading-dots';
            loadingDiv.style.cssText = `
                display: flex;
                justify-content: center;
                align-items: center;
                height: 80px;
                color: getTenseColor(tense);
            `;
            loadingDiv.innerHTML = `<span></span><span></span><span></span>`;
            packsContainer.appendChild(loadingDiv);
            
            // Load packs after delay
            setTimeout(() => {
                packsContainer.removeChild(loadingDiv);
                
                packs.forEach((pack, index) => {
                    const packElement = document.createElement('div');
                    packElement.className = `pack-item ${tense}`;
                    packElement.tabIndex = 0;
                    packElement.style.opacity = '0';
                    packElement.style.transform = 'translateY(10px)';
                    
                    packElement.innerHTML = `
                        <div class="pack-icon">
                            <i class="fas ${pack.icon}"></i>
                        </div>
                        <div class="pack-content">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
                                <h4 class="pack-name">${pack.name}</h4>
                                <span class="pack-tense">${pack.difficulty}</span>
                            </div>
                            <p class="pack-description">${pack.description}</p>
                            <div class="pack-details">
                                <div class="pack-detail">
                                    <i class="fas fa-pen-alt"></i>
                                    <span>${pack.exercises} exercises</span>
                                </div>
                                <div class="pack-detail">
                                    <i class="fas fa-clock"></i>
                                    <span>${pack.duration}</span>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    packsContainer.appendChild(packElement);
                    
                    // Animate in
                    setTimeout(() => {
                        packElement.style.transition = 'all 0.3s ease';
                        packElement.style.opacity = '1';
                        packElement.style.transform = 'translateY(0)';
                    }, index * 100);
                    
                    // Click handler
                    packElement.addEventListener('click', function() {
                        // Add touch feedback
                        this.style.transform = 'scale(0.98)';
                        
                        // Show loading state
                        const icon = this.querySelector('.pack-icon i');
                        const originalIcon = icon.className;
                        icon.className = 'fas fa-spinner fa-spin';
                        
                        // Close modal and navigate
                        setTimeout(() => {
                            closeModal();
                            setTimeout(() => {
                                window.location.href = pack.pageUrl;
                            }, 300);
                        }, 400);
                    });
                });
            }, 500);
        }

        // Handle Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // Add CSS class for touch feedback
        const style = document.createElement('style');
        style.textContent = `
            .touch-active {
                opacity: 0.7 !important;
                transform: scale(0.98) !important;
            }
            
            @media (max-width: 767px) {
                .tense-card,
                .pack-item {
                    transition: transform 0.2s ease;
                }
                
                .tense-card:active,
                .pack-item:active {
                    transform: scale(0.98);
                }
            }
            
            @media (min-width: 768px) {
                .tense-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: var(--shadow-xl);
                }
            }
        `;
        document.head.appendChild(style);
