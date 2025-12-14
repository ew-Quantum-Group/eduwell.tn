
        // App State
        let currentQuestionIndex = 0;
        let userScore = 0;
        let userAnswers = new Array(quizData.length).fill(null);
        let quizCompleted = false;
        let startTime = null;
        let totalTime = 0;

        // DOM Elements
        const backButton = document.getElementById('backButton');
        const loadingScreen = document.getElementById('loadingScreen');
        const appContainer = document.getElementById('appContainer');
        const currentScore = document.getElementById('currentScore');
        const totalQuestions = document.getElementById('totalQuestions');
        const currentQuestionNum = document.getElementById('currentQuestionNum');
        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');
        const questionNum = document.getElementById('questionNum');
        const questionText = document.getElementById('questionText');
        const questionHint = document.getElementById('questionHint');
        const optionsContainer = document.getElementById('optionsContainer');
        const submitButton = document.getElementById('submitButton');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const explanationPanel = document.getElementById('explanationPanel');
        const explanationText = document.getElementById('explanationText');
        const explanationTip = document.getElementById('explanationTip');
        const quizContent = document.getElementById('quizContent');
        const resultsScreen = document.getElementById('resultsScreen');
        const finalScore = document.getElementById('finalScore');
        const correctAnswers = document.getElementById('correctAnswers');
        const scorePoints = document.getElementById('scorePoints');
        const completionTime = document.getElementById('completionTime');
        const resultsMessage = document.getElementById('resultsMessage');
        const reviewButton = document.getElementById('reviewButton');
        const restartButton = document.getElementById('restartButton');

        // Scroll handling for back button - FIXED
        let lastScrollTop = 0;
        const scrollThreshold = 50;
        let scrollTimeout;

        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isAtTop = scrollTop <= 10; // Allow small tolerance
            
            // Clear any existing timeout
            clearTimeout(scrollTimeout);
            
            // If at the top, show full button
            if (isAtTop) {
                backButton.classList.remove('hidden');
            } 
            // If scrolled down enough, hide button (show only arrow)
            else if (scrollTop > scrollThreshold) {
                backButton.classList.add('hidden');
            }
            // If scrolling up and not at top, but button is hidden, show it
            else if (scrollTop < lastScrollTop && !isAtTop && backButton.classList.contains('hidden')) {
                backButton.classList.remove('hidden');
            }
            
            // Update last scroll position
            lastScrollTop = Math.max(0, scrollTop);
            
            // Debounce scroll events
            scrollTimeout = setTimeout(() => {
                // Additional logic if needed
            }, 50);
        }

        // Initialize App
        function initApp() {
            // Set total questions
            totalQuestions.textContent = quizData.length;
            
            // Start timer
            startTime = Date.now();
            
            // Load first question
            loadQuestion(currentQuestionIndex);
            
            // Update progress
            updateProgress();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // Initial check for scroll position
            handleScroll();
        }

        // Load Question
        function loadQuestion(index) {
            const question = quizData[index];
            
            // Update question info
            questionText.textContent = question.question;
            questionHint.textContent = question.hint;
            questionNum.textContent = index + 1;
            currentQuestionNum.textContent = index + 1;
            
            // Clear options
            optionsContainer.innerHTML = '';
            
            // Create options
            question.options.forEach((option, i) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                
                if (userAnswers[index] !== null) {
                    // Already answered - show results
                    if (i === userAnswers[index]) {
                        optionElement.classList.add('selected');
                        if (i === question.correctAnswer) {
                            optionElement.classList.add('correct');
                        } else {
                            optionElement.classList.add('incorrect');
                        }
                    } else if (i === question.correctAnswer) {
                        optionElement.classList.add('correct');
                    }
                    optionElement.style.cursor = 'default';
                } else {
                    // Not answered yet
                    optionElement.addEventListener('click', () => selectOption(i));
                }
                
                optionElement.innerHTML = `
                    <div class="option-label">
                        <span class="option-marker">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${option.text}</span>
                    </div>
                    <div class="option-example">${option.example}</div>
                `;
                
                optionsContainer.appendChild(optionElement);
            });
            
            // Reset explanation panel
            explanationPanel.classList.remove('show');
            explanationText.textContent = question.explanation;
            explanationTip.innerHTML = `<i class="fas fa-tip"></i>${question.tip}`;
            
            // Update buttons
            if (userAnswers[index] !== null) {
                submitButton.classList.add('hidden');
                nextButton.classList.remove('hidden');
                if (index === quizData.length - 1) {
                    nextButton.innerHTML = 'Finish Quiz <i class="fas fa-flag-checkered"></i>';
                }
            } else {
                submitButton.classList.remove('hidden');
                nextButton.classList.add('hidden');
                submitButton.disabled = true;
                submitButton.textContent = 'Check Answer';
            }
            
            // Update navigation
            updateNavigation();
        }

        // Select Option
        function selectOption(index) {
            if (userAnswers[currentQuestionIndex] !== null) return;
            
            // Remove selected class from all options
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            const selectedOption = document.querySelectorAll('.option')[index];
            selectedOption.classList.add('selected');
            
            // Store answer
            userAnswers[currentQuestionIndex] = index;
            
            // Enable submit button
            submitButton.disabled = false;
        }

        // Submit Answer
        function submitAnswer() {
            if (userAnswers[currentQuestionIndex] === null) return;
            
            const question = quizData[currentQuestionIndex];
            const selectedOption = userAnswers[currentQuestionIndex];
            const isCorrect = selectedOption === question.correctAnswer;
            
            // Update score if correct
            if (isCorrect) {
                userScore += 10;
                currentScore.textContent = userScore;
            }
            
            // Show correct/incorrect states
            document.querySelectorAll('.option').forEach((option, i) => {
                option.style.cursor = 'default';
                
                if (i === selectedOption) {
                    option.classList.add(isCorrect ? 'correct' : 'incorrect');
                } else if (i === question.correctAnswer) {
                    option.classList.add('correct');
                }
            });
            
            // Update button
            submitButton.classList.add('hidden');
            nextButton.classList.remove('hidden');
            if (currentQuestionIndex === quizData.length - 1) {
                nextButton.innerHTML = 'Finish Quiz <i class="fas fa-flag-checkered"></i>';
            }
            
            // Show explanation
            explanationPanel.classList.add('show');
        }

        // Next Question
        function nextQuestion() {
            if (currentQuestionIndex < quizData.length - 1) {
                currentQuestionIndex++;
                loadQuestion(currentQuestionIndex);
                updateProgress();
            } else {
                completeQuiz();
            }
        }

        // Previous Question
        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion(currentQuestionIndex);
                updateProgress();
            }
        }

        // Update Progress
        function updateProgress() {
            const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
            progressFill.style.width = `${progress}%`;
            progressPercent.textContent = `${Math.round(progress)}%`;
            
            prevButton.disabled = currentQuestionIndex === 0;
        }

        // Complete Quiz
        function completeQuiz() {
            quizCompleted = true;
            
            // Remove scroll listener during results
            window.removeEventListener('scroll', handleScroll);
            
            // Calculate total time
            const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            
            // Calculate correct answers
            const correctCount = userAnswers.reduce((count, answer, index) => {
                return count + (answer === quizData[index].correctAnswer ? 1 : 0);
            }, 0);
            
            // Update results
            finalScore.textContent = `${correctCount}/${quizData.length}`;
            correctAnswers.textContent = correctCount;
            scorePoints.textContent = userScore;
            completionTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Set message
            const percentage = (correctCount / quizData.length) * 100;
            if (percentage >= 90) {
                resultsMessage.textContent = "Excellent! You've mastered these tenses!";
            } else if (percentage >= 70) {
                resultsMessage.textContent = "Great job! Solid understanding of the concepts.";
            } else if (percentage >= 50) {
                resultsMessage.textContent = "Good effort! Keep practicing to improve.";
            } else {
                resultsMessage.textContent = "Keep learning! Review the explanations.";
            }
            
            // Show results screen
            quizContent.classList.add('hidden');
            resultsScreen.classList.remove('hidden');
            
            // Ensure full back button is visible on results page
            backButton.classList.remove('hidden');
        }

        // Restart Quiz
        function restartQuiz() {
            // Reset state
            currentQuestionIndex = 0;
            userScore = 0;
            userAnswers = new Array(quizData.length).fill(null);
            quizCompleted = false;
            
            // Reset UI
            currentScore.textContent = '0';
            quizContent.classList.remove('hidden');
            resultsScreen.classList.add('hidden');
            
            // Restart timer
            startTime = Date.now();
            
            // Re-add scroll listener
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // Load first question
            loadQuestion(currentQuestionIndex);
            updateProgress();
        }

        // Review Answers
        function reviewAnswers() {
            currentQuestionIndex = 0;
            quizContent.classList.remove('hidden');
            resultsScreen.classList.add('hidden');
            loadQuestion(currentQuestionIndex);
            updateProgress();
            
            // Re-add scroll listener
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // Disable interaction for review mode
            submitButton.disabled = true;
            submitButton.textContent = 'Already Answered';
        }

        // Back Button Handler
        backButton.addEventListener('click', () => {
            window.history.back();
        });

        // Add keyboard shortcut for back button (Alt + Left Arrow)
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key === 'ArrowLeft') {
                window.history.back();
            }
        });

        // Event Listeners
        submitButton.addEventListener('click', submitAnswer);
        nextButton.addEventListener('click', nextQuestion);
        prevButton.addEventListener('click', prevQuestion);
        restartButton.addEventListener('click', restartQuiz);
        reviewButton.addEventListener('click', reviewAnswers);

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (quizCompleted) return;
            
            switch(e.key) {
                case '1':
                case '2':
                case '3':
                    if (!submitButton.disabled && submitButton.textContent === 'Check Answer') {
                        const index = parseInt(e.key) - 1;
                        if (index >= 0 && index < 3) {
                            selectOption(index);
                        }
                    }
                    break;
                case 'Enter':
                    if (!submitButton.disabled && !submitButton.classList.contains('hidden')) {
                        submitAnswer();
                    } else if (!nextButton.classList.contains('hidden')) {
                        nextQuestion();
                    }
                    break;
                case 'ArrowLeft':
                    if (e.altKey) {
                        // Alt + Left handled above
                    } else if (!prevButton.disabled) {
                        prevQuestion();
                    }
                    break;
                case 'ArrowRight':
                    if (!nextButton.classList.contains('hidden')) nextQuestion();
                    break;
            }
        });

        // Initialize when page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                appContainer.classList.remove('hidden');
                initApp();
            }, 1000);
        });