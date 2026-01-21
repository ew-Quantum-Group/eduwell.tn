document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const mainPage = document.getElementById('mainPage');
    const testPage = document.getElementById('testPage');
    const backBtn = document.getElementById('backBtn');
    const testTitle = document.getElementById('testTitle');
    const testSubtitle = document.getElementById('testSubtitle');
    const testCards = document.getElementById('testCards');
    const loadingOverlay = document.getElementById('loadingOverlay');
    const mainCards = document.getElementById('mainCards');
    const mainInteractiveCards = mainPage.querySelectorAll('.interactive-card');
    let selectedFocus = null;
    
    // Test links configuration for each focus area with enhanced icons and descriptions
   

    // Difficulty colors and classes
    const difficultyConfig = {
        "Beginner": { 
            gradient: "linear-gradient(135deg, #059669, #047857)",
            class: "difficulty-beginner",
            icon: "fas fa-seedling"
        },
        "Intermediate": { 
            gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
            class: "difficulty-intermediate",
            icon: "fas fa-chart-line"
        },
        "Advanced": { 
            gradient: "linear-gradient(135deg, #EC4899, #BE185D)",
            class: "difficulty-advanced",
            icon: "fas fa-fire"
        },
        "Expert": { 
            gradient: "linear-gradient(135deg, #DC2626, #B91C1C)",
            class: "difficulty-expert",
            icon: "fas fa-chess-king"
        }
    };

    // Level-specific classes
    const levelClasses = {
        1: "level-1",
        2: "level-2", 
        3: "level-3",
        4: "level-4",
        5: "level-5"
    };

    // Add click event to each card on main page
    mainInteractiveCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add click animation
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 600);
            
            // Remove selected class from all cards
            mainInteractiveCards.forEach(c => {
                c.classList.remove('selected');
            });
            
            // Add selected class to clicked card
            this.classList.add('selected');
            
            // Get selected focus data
            selectedFocus = {
                id: this.getAttribute('data-focus'),
                name: this.getAttribute('data-name')
            };
            
            // Update test page title and subtitle
            testTitle.textContent = selectedFocus.name;
            testSubtitle.textContent = `Choisissez un test pour "${selectedFocus.name}" pour commencer votre parcours d'apprentissage personnalisé`;
            
            // Generate test options
            generateTestOptions(selectedFocus.id);
            
            // Transition to test page
            setTimeout(() => {
                mainPage.classList.add('fade-out');
                setTimeout(() => {
                    testPage.classList.remove('fade-out');
                }, 300);
            }, 400);
        });
    });

    // Back button click handler
    backBtn.addEventListener('click', function() {
        // Add click animation
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 600);
        
        // Transition back to main page
        testPage.classList.add('fade-out');
        setTimeout(() => {
            mainPage.classList.remove('fade-out');
        }, 300);
        
        // Reset selected focus
        selectedFocus = null;
        mainInteractiveCards.forEach(card => {
            card.classList.remove('selected');
        });
    });

    // Generate test options based on selected focus
    function generateTestOptions(focusId) {
        // Clear existing test options
        testCards.innerHTML = '';
        
        // Get test links for the selected focus
        const tests = testLinks[focusId];
        
        // Create test option elements
        tests.forEach((test, index) => {
            const level = index + 1;
            const difficulty = difficultyConfig["Beginner"]; // Default to Beginner for all tests
            const testCard = document.createElement('div');
            testCard.className = 'interactive-card';
            testCard.setAttribute('data-link', test.link);
            testCard.setAttribute('data-difficulty', "Beginner");
            testCard.innerHTML = `
                <div class="card-icon-container">
                    <div class="card-icon-glow"></div>
                    <div class="card-icon-bg level-${(index % 5) + 1}">
                        <i class="fas fa-book"></i>
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${test.name} <i class="fas fa-arrow-right"></i></h3>
                    <p class="card-description">Cliquez pour commencer ce pack de questions</p>
                    <span class="difficulty-badge ${difficulty.class}">Niveau ${level} <i class="${difficulty.icon}"></i></span>
                </div>
                <div class="selection-indicator"></div>
            `;
            
            // Add click event for test options
            testCard.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default behavior
                
                // Add click animation
                this.classList.add('clicked');
                
                // Remove selected class from all test cards
                const testCardsList = testCards.querySelectorAll('.interactive-card');
                testCardsList.forEach(c => {
                    c.classList.remove('selected');
                });
                
                // Add selected class to clicked card
                this.classList.add('selected');
                
                // Get the link
                const link = this.getAttribute('data-link');
                
                // Show loading overlay
                showLoadingOverlay();
                
                // Navigate to the test link after a short delay
                setTimeout(() => {
                    hideLoadingOverlay();
                    window.location.href = link;
                }, 1200);
            });
            
            testCards.appendChild(testCard);
        });
    }

    // Show loading overlay
    function showLoadingOverlay() {
        loadingOverlay.classList.add('active');
    }

    // Hide loading overlay
    function hideLoadingOverlay() {
        loadingOverlay.classList.remove('active');
    }

    // Add keyboard support for accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (!mainPage.classList.contains('fade-out')) {
                // If on main page, do nothing
                return;
            } else {
                // If on test page, go back
                testPage.classList.add('fade-out');
                setTimeout(() => {
                    mainPage.classList.remove('fade-out');
                }, 300);
                selectedFocus = null;
                mainInteractiveCards.forEach(card => {
                    card.classList.remove('selected');
                });
            }
        }
    });

    // Ensure all interactive elements have proper tab indices
    const interactiveElements = document.querySelectorAll('.interactive-card, .modern-back-btn');
    interactiveElements.forEach((el, index) => {
        el.setAttribute('tabindex', '0');
    });

    // Add pulse animation to new cards
    setTimeout(() => {
        document.querySelectorAll('.interactive-card').forEach(card => {
            card.classList.add('pulse');
            setTimeout(() => {
                card.classList.remove('pulse');
            }, 2000);
        });
    }, 500);

    // Prevent default behavior for links to avoid page refresh
    document.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

