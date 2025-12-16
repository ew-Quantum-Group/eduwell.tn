
        // ============================================
        // BACK BUTTON FUNCTIONALITY
        // ============================================
        const backButton = document.getElementById('backButton');
        
        function initializeBackButton() {
            // Add click event to navigate back in history
            backButton.addEventListener('click', () => {
                window.history.back();
            });
            
            // Add keyboard support
            backButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    window.history.back();
                }
            });
            
            // Set proper ARIA attributes
            backButton.setAttribute('role', 'button');
            backButton.setAttribute('tabindex', '0');
        }

        // ============================================
        // FIXED LOADING SYSTEM
        // ============================================
        const loadingScreen = document.getElementById('loadingScreen');
        
        function showLoadingScreen() {
            loadingScreen.classList.remove('hidden');
            // Hide main content initially
            document.body.classList.remove('loaded');
        }
        
        function hideLoadingScreen() {
            loadingScreen.classList.add('hidden');
            // Show main content after loading screen hides
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 300);
        }

        // ============================================
        // TEXT FORMATTING UTILITY
        // ============================================
        function formatMessageText(text) {
            // Split text by newlines
            const lines = text.split('\n');
            
            // Filter out completely empty strings
            const nonEmptyLines = lines.filter(line => line.trim() !== '');
            
            // Wrap each line in <p> tags
            // Add different spacing classes based on line content
            return nonEmptyLines.map(line => {
                const trimmedLine = line.trim();
                // Check if line ends with certain punctuation that might indicate paragraph break
                const endsWithParagraphBreak = trimmedLine.endsWith('.') || 
                                               trimmedLine.endsWith('؟') || 
                                               trimmedLine.endsWith('!') ||
                                               trimmedLine.endsWith(':');
                
                // Use different spacing class based on context
                const spacingClass = endsWithParagraphBreak ? 'paragraph-spacing' : 'small-spacing';
                
                return `<p class="${spacingClass}">${trimmedLine}</p>`;
            }).join('');
        }

        // ============================================
        // CONVERSATION DATA MODEL (ARABIC)
        // ============================================
    
        // ============================================
        // STATE MANAGEMENT
        // ============================================
        const state = {
            currentPath: null,
            currentLevel: 0,
            conversationHistory: [],
            panelVisible: false
        };

        // ============================================
        // DOM ELEMENTS
        // ============================================
        const chatContainer = document.getElementById('chatContainer');
        const optionsPanel = document.getElementById('optionsPanel');
        const panelContent = document.getElementById('panelContent');
        const panelTitle = document.getElementById('panelTitle');
        const panelSubtitle = document.getElementById('panelSubtitle');
        const replyButton = document.getElementById('replyButton');
        const panelClose = document.getElementById('panelClose');

        // ============================================
        // UTILITY FUNCTIONS
        // ============================================
        function updateTimeDisplay() {
            const now = new Date();
            const options = { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };
            return now.toLocaleDateString('en-US', options);
        }

        function formatMessageTime() {
            const now = new Date();
            return now.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
            });
        }

        // ============================================
        // PANEL MANAGEMENT - FIXED
        // ============================================
        function showPanel() {
            state.panelVisible = true;
            optionsPanel.classList.add('visible');
            chatContainer.classList.add('with-panel');
            replyButton.classList.add('hidden');
            updatePanelContent();
        }

        function hidePanel() {
            state.panelVisible = false;
            optionsPanel.classList.remove('visible');
            chatContainer.classList.remove('with-panel');
            replyButton.classList.remove('hidden');
        }

        // ============================================
        // MESSAGE MANAGEMENT - UPDATED FOR FORMATTING
        // ============================================
        function addMessage(text, sender, delay = 0) {
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${sender}`;
                
                const bubble = document.createElement('div');
                bubble.className = 'message-bubble';
                
                // Use innerHTML and format the text
                bubble.innerHTML = formatMessageText(text);
                
                const meta = document.createElement('div');
                meta.className = 'message-meta';
                meta.innerHTML = `<span>${formatMessageTime()}</span>`;
                
                messageDiv.appendChild(bubble);
                messageDiv.appendChild(meta);
                
                messageDiv.style.animationDelay = `${Math.random() * 0.1}s`;
                chatContainer.appendChild(messageDiv);
                
                if (state.currentLevel > 0) {
                    state.conversationHistory.push(messageDiv);
                }
                
                chatContainer.scrollTop = chatContainer.scrollHeight;
                
                if (sender === 'philo') {
                    setTimeout(() => {
                        replyButton.classList.remove('hidden');
                    }, 500);
                }
            }, delay);
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'typing-indicator';
            typingDiv.id = 'typingIndicator';
            
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('div');
                dot.className = 'typing-dot';
                typingDiv.appendChild(dot);
            }
            
            chatContainer.appendChild(typingDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }

        function sendPhiloResponse(text) {
            showTypingIndicator();
            
            const typingDuration = Math.min(Math.max(text.length * 25, 1200), 2500);
            
            setTimeout(() => {
                hideTypingIndicator();
                addMessage(text, 'philo');
                
                if (state.panelVisible) {
                    setTimeout(() => updatePanelContent(), 300);
                }
            }, typingDuration);
        }

        // ============================================
        // PROGRESS INDICATOR
        // ============================================
        function updateProgressIndicator() {
            const totalLevels = Object.keys(conversationData[state.currentPath].levels).length;
            let progressHTML = `<div class="progress-indicator">`;
            
            for (let i = 1; i <= totalLevels; i++) {
                const activeClass = i <= state.currentLevel ? 'active' : '';
                progressHTML += `<div class="progress-dot ${activeClass}" data-part="${i}"></div>`;
            }
            
            progressHTML += `</div>`;
            return progressHTML;
        }

        // ============================================
        // PANEL CONTENT MANAGEMENT
        // ============================================
        function updatePanelContent() {
            let contentHTML = '';
            const today = updateTimeDisplay();
            
            if (state.currentLevel === 0) {
                panelTitle.textContent = "اختر موضوعًا للنقاش";
                panelSubtitle.textContent = "حدد ما ترغب في مناقشته";
                
                contentHTML = `
                    <div class="time-display">${today}</div>
                    <div class="options-grid">
                        ${Object.values(conversationData).map(path => `
                            <div class="option-card" data-path="${path.id}">
                                <div class="option-icon ${path.color}">
                                    <i class="${path.icon}"></i>
                                </div>
                                <div class="option-title">${path.title}</div>
                                <div class="option-desc">${path.description}</div>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                const pathData = conversationData[state.currentPath];
                const levelData = pathData.levels[state.currentLevel];
                const totalLevels = Object.keys(pathData.levels).length;
                
                panelTitle.textContent = pathData.title;
                panelSubtitle.textContent = `المستوى ${state.currentLevel} من ${totalLevels}`;
                
                contentHTML = `
                    <div class="time-display">${today}</div>
                    ${updateProgressIndicator()}
                    <div class="two-options">
                        ${state.currentLevel < totalLevels ? `
                            <div class="option-card" id="forwardOptionBtn">
                                <div class="option-icon forward">
                                    <i class="fas fa-arrow-left"></i>
                                </div>
                                <div class="option-title">${levelData.forwardOption.label}</div>
                                <div class="option-desc">${levelData.forwardOption.description}</div>
                            </div>
                        ` : ''}
                        <div class="option-card" id="backBtn">
                            <div class="option-icon back">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="option-title">العودة للمواضيع</div>
                            <div class="option-desc">الرجوع إلى القائمة الرئيسية</div>
                        </div>
                    </div>
                `;
            }
            
            panelContent.innerHTML = contentHTML;
            attachPanelEventListeners();
        }

        // ============================================
        // EVENT LISTENER MANAGEMENT - FIXED
        // ============================================
        function attachPanelEventListeners() {
            // Remove any existing listeners first to prevent duplicates
            document.querySelectorAll('[data-path]').forEach(card => {
                const newCard = card.cloneNode(true);
                card.parentNode.replaceChild(newCard, card);
            });
            
            // Re-attach listeners to main options
            document.querySelectorAll('[data-path]').forEach(card => {
                card.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const pathId = parseInt(card.getAttribute('data-path'));
                    handlePathSelection(pathId);
                    hidePanel();
                });
                
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        const pathId = parseInt(card.getAttribute('data-path'));
                        handlePathSelection(pathId);
                        hidePanel();
                    }
                });
                
                card.setAttribute('tabindex', '0');
            });
            
            // Forward option button
            const forwardOptionBtn = document.getElementById('forwardOptionBtn');
            if (forwardOptionBtn) {
                const newBtn = forwardOptionBtn.cloneNode(true);
                forwardOptionBtn.parentNode.replaceChild(newBtn, forwardOptionBtn);
                
                newBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    handleForwardOption();
                    hidePanel();
                });
                
                newBtn.setAttribute('tabindex', '0');
            }
            
            // Back button
            const backBtn = document.getElementById('backBtn');
            if (backBtn) {
                const newBackBtn = backBtn.cloneNode(true);
                backBtn.parentNode.replaceChild(newBackBtn, backBtn);
                
                newBackBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    handleBackButton();
                    hidePanel();
                });
                
                newBackBtn.setAttribute('tabindex', '0');
            }
        }

        // ============================================
        // CONVERSATION LOGIC
        // ============================================
        function handlePathSelection(pathId) {
            state.currentPath = pathId;
            state.currentLevel = 1;
            state.conversationHistory = [];
            
            const pathData = conversationData[pathId];
            const levelData = pathData.levels[1];
            
            addMessage(pathData.title, 'user');
            replyButton.classList.add('hidden');
            
            setTimeout(() => {
                sendPhiloResponse(levelData.message);
            }, 600);
        }

        function handleForwardOption() {
            const pathData = conversationData[state.currentPath];
            const totalLevels = Object.keys(pathData.levels).length;
            
            if (state.currentLevel < totalLevels) {
                state.currentLevel++;
                const levelData = pathData.levels[state.currentLevel];
                const prevLevelData = pathData.levels[state.currentLevel - 1];
                
                addMessage(prevLevelData.forwardOption.label, 'user');
                replyButton.classList.add('hidden');
                
                setTimeout(() => {
                    sendPhiloResponse(levelData.message);
                }, 600);
            }
        }

        function handleBackButton() {
            state.conversationHistory.forEach(message => {
                message.remove();
            });
            
            state.currentPath = null;
            state.currentLevel = 0;
            state.conversationHistory = [];
            
            setTimeout(() => {
                addMessage("كيف يمكنني مساعدتك اليوم؟", 'philo', 300);
            }, 500);
        }

        // ============================================
        // INITIALIZATION - FIXED CLOSE BUTTON
        // ============================================
        function initializeChat() {
            // Set Arabic language and RTL
            document.documentElement.lang = 'ar';
            document.documentElement.dir = 'rtl';
            
            // Initialize back button
            initializeBackButton();
            
            // Add initial greeting after loading
            setTimeout(() => {
                addMessage("كيف يمكنني مساعدتك اليوم؟", 'philo', 300);
            }, 500);
            
            // FIXED: Add event listeners for close button and reply button
            // Using event delegation to ensure buttons work even when panel content changes
            replyButton.addEventListener('click', showPanel);
            panelClose.addEventListener('click', hidePanel);
            
            // Also add keyboard support for close button
            panelClose.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    hidePanel();
                }
            });
            
            // Close panel when clicking outside on mobile
            optionsPanel.addEventListener('click', (e) => {
                if (e.target === optionsPanel) {
                    hidePanel();
                }
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && state.panelVisible) {
                    hidePanel();
                }
                
                if (e.key === 'Escape' && state.currentLevel > 0 && !state.panelVisible) {
                    handleBackButton();
                }
            });
            
            updatePanelContent();
        }

        // ============================================
        // PAGE LOAD - FIXED AND SIMPLIFIED
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            // Show loading screen initially
            showLoadingScreen();
            
            // Simulate loading process
            setTimeout(() => {
                hideLoadingScreen();
                initializeChat();
            }, 1800); // 1.8 seconds total loading time
        });