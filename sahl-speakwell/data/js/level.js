

        // DOM Elements
        const backButton = document.getElementById('backButton');
        const tenseCards = document.querySelectorAll('.tense-card');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalContent = document.getElementById('modalContent');
        const modalClose = document.getElementById('modalClose');
        const modalTitle = document.getElementById('modalTitle');
        const packsContainer = document.getElementById('packsContainer');

        // Current selected tense
        let currentTense = '';

        // Back Button Handler - Navigate to index.html
        backButton.addEventListener('click', function() {
            // Visual feedback
            this.style.backgroundColor = '#e8e8ed';
            setTimeout(() => {
                this.style.backgroundColor = '#f5f5f7';
            }, 200);

            // Navigate to index.html
            window.location.href = '../index.html';
        });

        // Card Click Handler - Opens Modal
        tenseCards.forEach(card => {
            card.addEventListener('click', function() {
                // Get tense from data attribute
                const tense = this.getAttribute('data-tense');
                currentTense = tense;

                // Update modal title
                const tenseName = getTenseDisplayName(tense);
                modalTitle.textContent = `${tenseName} Exercise Packs`;

                // Load packs for this tense
                loadPacks(tense);

                // Open modal
                openModal();
            });
        });

        // Helper function to get display name for tense
        function getTenseDisplayName(tense) {
            const tenseNames = {
                past: "Past Tense",
                present: "Present Tense",
                future: "Future Tense",
                mixed: "Mixed Tenses"
            };
            return tenseNames[tense] || tense;
        }

        // Modal Close Handlers
        modalClose.addEventListener('click', closeModal);

        modalOverlay.addEventListener('click', function(event) {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
                closeModal();
            }
        });

        // Open modal function
        function openModal() {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close modal function
        function closeModal() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Load packs for a specific tense
        function loadPacks(tense) {
            // Clear existing packs
            packsContainer.innerHTML = '';

            // Get packs for this tense
            const packs = packsData[tense];

            // Create pack elements
            packs.forEach((pack, index) => {
                const packElement = document.createElement('div');
                packElement.className = `pack-item ${tense}`;
                packElement.setAttribute('data-pack-index', index);

                packElement.innerHTML = `
                    <div class="pack-icon">
                        <i class="fas ${pack.icon}"></i>
                    </div>
                    <div class="pack-content">
                        <div class="pack-header">
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
                            <div class="pack-detail">
                                <i class="fas fa-chart-line"></i>
                                <span>${pack.difficulty} level</span>
                            </div>
                        </div>
                    </div>
                    <div class="pack-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </div>
                `;

                // Add click handler for pack selection - Navigate to pack page
                packElement.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent event bubbling

                    // Visual feedback
                    const activePack = e.currentTarget;
                    activePack.style.backgroundColor = '#f8f8fa';

                    setTimeout(() => {
                        activePack.style.backgroundColor = '';
                    }, 200);

                    // Show loading notification
                    showNotification(`Loading ${pack.name}...`);

                    // Close modal
                    closeModal();

                    // Navigate to the page URL after a short delay
                    setTimeout(() => {
                        window.location.href = pack.pageUrl;
                    }, 500);
                });

                packsContainer.appendChild(packElement);
            });
        }

        // Show notification
        function showNotification(message) {
            // Remove existing notification if any
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }

            // Create new notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(29, 29, 31, 0.9);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                color: white;
                padding: 12px 20px;
                border-radius: 12px;
                font-size: 0.9rem;
                font-weight: 500;
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                border: 1px solid rgba(255, 255, 255, 0.08);
            `;

            document.body.appendChild(notification);

            // Fade in
            setTimeout(() => {
                notification.style.opacity = '1';
            }, 10);

            // Remove after 2.5 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }, 2500);
        }

        // Add simple hover effect for cards
        tenseCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
                this.style.transition = 'transform 0.2s ease';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });