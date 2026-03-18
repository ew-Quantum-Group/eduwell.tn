
        // DOM Elements
        const cardsScroll = document.getElementById('cardsScroll');
        const prevButton = document.querySelector('.nav-button.prev');
        const nextButton = document.querySelector('.nav-button.next');
        const cards = document.querySelectorAll('.card');
        
        // Popup elements
        const secondaryPopup = document.getElementById('secondaryPopup');
        const viewerPopup = document.getElementById('viewerPopup');
        const popupTitle = document.getElementById('popupTitle');
        const secondaryCardsContainer = document.getElementById('secondaryCardsContainer');
        const closeSecondaryBtn = document.getElementById('closeSecondaryBtn');
        const backToSecondaryBtn = document.getElementById('backToSecondaryBtn');
        const viewerTitle = document.getElementById('viewerTitle');
        const sketchfabEmbed = document.getElementById('sketchfabEmbed');
        const embedPlaceholder = document.getElementById('embedPlaceholder');

        // State variables
        let currentMainCardId = null;
        let currentSecondaryCard = null;

        // Function to open secondary cards popup with smooth animation
        function openSecondaryPopup(cardId) {
            currentMainCardId = cardId;
            const cardData = biologyData[cardId];
            
            if (!cardData) return;
            
            // Set popup title
            popupTitle.textContent = cardData.title;
            
            // Clear previous secondary cards
            secondaryCardsContainer.innerHTML = '';
            
            // Create and add secondary cards
            cardData.secondaryCards.forEach(card => {
                const secondaryCard = document.createElement('div');
                secondaryCard.className = 'secondary-card';
                secondaryCard.dataset.cardId = card.id;
                
                secondaryCard.innerHTML = `
                    <div class="secondary-card-icon" style="background: ${card.color}">
                        <i class="${card.icon}"></i>
                    </div>
                    <h3 class="secondary-card-title">${card.title}</h3>
                    <p class="secondary-card-description">${card.description}</p>
                `;
                
                // Add click event to open 3D viewer
                secondaryCard.addEventListener('click', () => openViewerPopup(card));
                
                secondaryCardsContainer.appendChild(secondaryCard);
            });
            
            // Reset animations for smooth opening
            secondaryPopup.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Show the popup
            secondaryPopup.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        // Function to open 3D viewer popup with smooth animation
        function openViewerPopup(secondaryCard) {
            currentSecondaryCard = secondaryCard;
            
            // Set viewer title
            viewerTitle.textContent = secondaryCard.title;
            
            // Reset animations for smooth opening
            viewerPopup.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Show loading placeholder
            embedPlaceholder.style.display = 'flex';
            sketchfabEmbed.style.display = 'none';
            sketchfabEmbed.style.opacity = '0';
            
            // Create Sketchfab embed URL
            const embedUrl = `https://sketchfab.com/models/${secondaryCard.sketchfabId}/embed`;
            
            // Set iframe source
            sketchfabEmbed.src = embedUrl;
            
            // Hide secondary popup and show viewer with smooth transition
            secondaryPopup.style.opacity = '0';
            setTimeout(() => {
                secondaryPopup.classList.remove('active');
                viewerPopup.classList.add('active');
                secondaryPopup.style.opacity = '1';
                
                // After viewer popup is active, show iframe with fade-in
                setTimeout(() => {
                    embedPlaceholder.style.display = 'none';
                    sketchfabEmbed.style.display = 'block';
                    setTimeout(() => {
                        sketchfabEmbed.style.opacity = '1';
                    }, 50);
                }, 1500);
            }, 300);
        }

        // Function to close all popups with smooth animation
        function closeAllPopups() {
            secondaryPopup.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            viewerPopup.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            // Reset iframe to prevent continued loading
            sketchfabEmbed.src = '';
            sketchfabEmbed.style.opacity = '0';
            
            // Hide popups
            secondaryPopup.classList.remove('active');
            viewerPopup.classList.remove('active');
            
            setTimeout(() => {
                document.body.style.overflow = 'auto'; // Restore scrolling
            }, 400);
        }

        // Function to go back from viewer to secondary cards with smooth animation
        function backToSecondary() {
            viewerPopup.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            viewerPopup.classList.remove('active');
            setTimeout(() => {
                secondaryPopup.classList.add('active');
            }, 300);
        }

        // Event Listeners for main cards
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const cardId = card.dataset.cardId;
                openSecondaryPopup(cardId);
                
                // Add click effect
                card.style.transform = 'translateY(-10px) scale(0.98)';
                setTimeout(() => {
                    card.style.transform = 'translateY(-10px)';
                }, 150);
            });
        });

        // Event Listeners for popup controls
        closeSecondaryBtn.addEventListener('click', closeAllPopups);
        backToSecondaryBtn.addEventListener('click', backToSecondary);

        // Close popups when clicking on overlay (outside popup)
        secondaryPopup.addEventListener('click', (e) => {
            if (e.target === secondaryPopup) {
                closeAllPopups();
            }
        });

        viewerPopup.addEventListener('click', (e) => {
            if (e.target === viewerPopup) {
                backToSecondary();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (viewerPopup.classList.contains('active')) {
                    backToSecondary();
                } else if (secondaryPopup.classList.contains('active')) {
                    closeAllPopups();
                }
            }
        });

        // Navigation for horizontal scroll
        function scrollNext() {
            const cardWidth = cards[0].offsetWidth + 25;
            const maxScroll = cardsScroll.scrollWidth - cardsScroll.clientWidth;
            const nextPosition = Math.min(cardsScroll.scrollLeft + cardWidth, maxScroll);
            
            cardsScroll.scrollTo({
                left: nextPosition,
                behavior: 'smooth'
            });
        }

        function scrollPrev() {
            const cardWidth = cards[0].offsetWidth + 25;
            const prevPosition = Math.max(cardsScroll.scrollLeft - cardWidth, 0);
            
            cardsScroll.scrollTo({
                left: prevPosition,
                behavior: 'smooth'
            });
        }

        prevButton.addEventListener('click', scrollPrev);
        nextButton.addEventListener('click', scrollNext);

        // Keyboard navigation for cards
        document.addEventListener('keydown', (e) => {
            // Only navigate if no popup is open
            if (!secondaryPopup.classList.contains('active') && !viewerPopup.classList.contains('active')) {
                if (e.key === 'ArrowLeft') scrollPrev();
                if (e.key === 'ArrowRight') scrollNext();
            }
        });

        // Touch swipe for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        cardsScroll.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        cardsScroll.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const swipeThreshold = 50;
            const difference = touchStartX - touchEndX;

            if (Math.abs(difference) > swipeThreshold) {
                if (difference > 0) {
                    scrollNext();
                } else {
                    scrollPrev();
                }
            }
        }

        // Initialize
        window.addEventListener('load', () => {
            // Add fade-in animation to cards
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });