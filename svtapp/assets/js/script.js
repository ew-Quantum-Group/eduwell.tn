    // STRATEGIES SECTION JavaScript Implementation

        // DOM Elements for Strategies Section
        const ebooksPage = document.getElementById('ebooks-page');
        const strategiesContent = document.getElementById('strategiesContent');

        // Strategies Data - only biology cards
        const strategiesData = {
            biologyCards: [
                {
                    id: 'bio-card-2',
                    title: 'Flash Cards',
                    description: 'Comprendre le Bac devient plus simple avec des schémas et des visuels 3D',
                    link: 'Flashcards.html',
                    linkText: 'Découvrir'
                },
                {
                    id: 'bio-card-1',
                    title: 'Analyse des exercices',
                    description: 'Comprendre les types de questions et identifier les pièges pour mieux réussir',
                    link: 'error.html',
                    linkText: 'Voir les exercices'
                },
                
                {
                    id: 'bio-card-3',
                    title: 'Techniques de mémorisation',
                    description: 'Utiliser flashcards, mind maps et répétition espacée pour retenir l\'essentiel',
                    link: 'error.html',
                    linkText: 'Découvrir les techniques'
                },
                {
                    id: 'bio-card-4',
                    title: 'Techniques de concentration et gestion du stress',
                    description: 'Adopter des méthodes de concentration et gérer le stress pour optimiser la révision',
                    link: 'error.html',
                    linkText: 'Améliorer ma concentration'
                }
            ]
        };

        // Initialize Strategies Section
        function initializeStrategiesSection() {
            renderStrategiesContent();
        }

        // Render Strategies Content
        function renderStrategiesContent() {
            strategiesContent.innerHTML = '';
            
            strategiesData.biologyCards.forEach((card) => {
                const biologyCard = document.createElement('div');
                biologyCard.className = 'biology-card-section';
                biologyCard.setAttribute('data-card-id', card.id);
                
                biologyCard.innerHTML = `
                    <div class="biology-card-content">
                        <h3>${card.title}</h3>
                        <p>${card.description}</p>
                        <a href="${card.link}" class="biology-card-link" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i>
                            ${card.linkText}
                        </a>
                    </div>
                `;
                
                strategiesContent.appendChild(biologyCard);
            });
        }

        // DOM Elements
        const bottomNavItems = document.querySelectorAll('.nav-item');
        const pageSections = document.querySelectorAll('.page-section');
        const coursesSlider = document.getElementById('coursesSlider');
        const yourCoursesGrid = document.getElementById('yourCoursesGrid');
        const exercisesGrid = document.getElementById('exercisesGrid');
        const searchInput = document.getElementById('searchInput');
        const startButton = document.getElementById('startButton');
        const quizSection = document.getElementById('quizSection');

        // QCM Elements
        const qcmModelsContainer = document.getElementById('qcmModelsContainer');
        const qcmBiologyBtn = document.getElementById('qcmBiologyBtn');
        const qcmQuizOverlay = document.getElementById('qcmQuizOverlay');
        const qcmQuizClose = document.getElementById('qcmQuizClose');
        const qcmQuizTitle = document.getElementById('qcmQuizTitle');
        const qcmQuizQuestionCount = document.getElementById('qcmQuizQuestionCount');
        const qcmQuizInstruction = document.getElementById('qcmQuizInstruction');
        const qcmQuizProgress = document.getElementById('qcmQuizProgress');
        const qcmQuizContent = document.getElementById('qcmQuizContent');

        // Models & Gallery elements
        const viewSchemasButton = document.getElementById('viewSchemasButton');
        const modelsPopup = document.getElementById('modelsPopup');
        const modelsPopupClose = document.getElementById('modelsPopupClose');
        const modelsGrid = document.getElementById('modelsGrid');

        const galleryPopup = document.getElementById('galleryPopup');
        const galleryPopupClose = document.getElementById('galleryPopupClose');
        const galleryTitle = document.getElementById('galleryTitle');
        const galleryGrid = document.getElementById('galleryGrid');

        const fullscreenViewer = document.getElementById('fullscreenViewer');
        const fullscreenImage = document.getElementById('fullscreenImage');
        const backFromFullscreen = document.getElementById('backFromFullscreen');

        // Popup elements
        const popularCoursesPopup = document.getElementById('popularCoursesPopup');
        const popularCoursesPopupClose = document.getElementById('popularCoursesPopupClose');
        const popularCoursesPopupTitle = document.getElementById('popularCoursesPopupTitle');
        const popularCoursesPopupDescription = document.getElementById('popularCoursesPopupDescription');
        const popularCoursesOptions = document.getElementById('popularCoursesOptions');

        const exerciseModal = document.getElementById('exerciseModal');
        const exerciseModalClose = document.getElementById('exerciseModalClose');
        const exerciseModalTitle = document.getElementById('exerciseModalTitle');
        const exerciseModalDescription = document.getElementById('exerciseModalDescription');
        const exercisePdfsList = document.getElementById('exercisePdfsList');

        const pdfViewerPopup = document.getElementById('pdfViewerPopup');
        const pdfViewerPopupClose = document.getElementById('pdfViewerPopupClose');
        const pdfViewerPopupTitle = document.getElementById('pdfViewerPopupTitle');
        const pdfViewerContainer = document.getElementById('pdfViewerContainer');
        const pdfViewer = document.getElementById('pdfViewer');
        const pdfFullscreenBtn = document.getElementById('pdfFullscreenBtn');

        // State variables
        let currentExerciseId = null;
        let currentModelId = null;

        // QCM State Variables
        let currentQuiz = null;
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let quizScore = 0;
        let selectedChoices = new Set();

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderPopularCourses();
            renderYourCourses();
            renderExercises();
            renderModels();
            renderQCM();
            setupEventListeners();
            // Initialize Strategies section
            initializeStrategiesSection();
        });

        // Navigation
        function setupNavigation() {
            bottomNavItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const page = this.getAttribute('data-page');

                    // Update active nav item
                    bottomNavItems.forEach(nav => nav.classList.remove('active'));
                    this.classList.add('active');

                    // Show corresponding page
                    pageSections.forEach(section => section.classList.remove('active'));
                    document.getElementById(`${page}-page`).classList.add('active');

                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
        }

        // Render QCM Models and Chapters
        function renderQCM() {
            qcmModelsContainer.innerHTML = '';

            qcmData.models.forEach(model => {
                const modelCard = document.createElement('div');
                modelCard.className = 'qcm-model-card';
                modelCard.setAttribute('data-model-id', model.id);

                // Create model header
                const modelHeader = document.createElement('div');
                modelHeader.className = 'qcm-model-header';
                modelHeader.innerHTML = `
                    <div class="qcm-model-title">
                        <div class="qcm-model-icon">
                            <i class="fas fa-book"></i>
                        </div>
                        ${model.title}
                    </div>
                    <div class="qcm-model-toggle">
                        <i class="fas fa-chevron-down"></i>
                    </div>
                `;

                // Create chapters container
                const chaptersContainer = document.createElement('div');
                chaptersContainer.className = 'qcm-chapters-container';

                // Add chapters
                model.chapters.forEach(chapter => {
                    const chapterItem = document.createElement('div');
                    chapterItem.className = 'qcm-chapter-item';
                    chapterItem.setAttribute('data-chapter-id', chapter.id);
                    chapterItem.setAttribute('data-model-id', model.id);
                    chapterItem.innerHTML = `
                        <div class="qcm-chapter-title">${chapter.title}</div>
                        <div class="qcm-chapter-meta">
                            <i class="fas fa-question-circle"></i>
                            <span>${chapter.questions.length} questions</span>
                        </div>
                    `;
                    chaptersContainer.appendChild(chapterItem);
                });

                // Assemble model card
                modelCard.appendChild(modelHeader);
                modelCard.appendChild(chaptersContainer);

                // Add toggle functionality
                modelHeader.addEventListener('click', function() {
                    const isActive = modelHeader.classList.contains('active');

                    // Close all other model cards
                    document.querySelectorAll('.qcm-model-header').forEach(header => {
                        if (header !== modelHeader) {
                            header.classList.remove('active');
                            header.nextElementSibling.classList.remove('active');
                        }
                    });

                    // Toggle current model
                    modelHeader.classList.toggle('active');
                    chaptersContainer.classList.toggle('active');
                });

                qcmModelsContainer.appendChild(modelCard);
            });
        }

        // Scroll to QCM models
        function scrollToQCM() {
            const qcmPage = document.getElementById('qcm-page');
            if (qcmPage.classList.contains('active')) {
                const modelsContainer = document.querySelector('.qcm-models-container');
                if (modelsContainer) {
                    modelsContainer.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        // Start Quiz
        function startQuiz(modelId, chapterId) {
            const model = qcmData.models.find(m => m.id === modelId);
            if (!model) return;

            const chapter = model.chapters.find(c => c.id === chapterId);
            if (!chapter) return;

            currentQuiz = chapter;
            currentQuestionIndex = 0;
            userAnswers = [];
            quizScore = 0;
            selectedChoices.clear();

            // Update quiz title
            qcmQuizTitle.textContent = `${model.title} - ${chapter.title}`;

            // Show quiz overlay
            qcmQuizOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Load first question
            loadQuestion();
        }

        // Load Question
        function loadQuestion() {
            if (!currentQuiz || currentQuestionIndex >= currentQuiz.questions.length) {
                showResults();
                return;
            }

            const question = currentQuiz.questions[currentQuestionIndex];
            const progressPercentage = ((currentQuestionIndex) / currentQuiz.questions.length) * 100;
            const isMultiSelect = Array.isArray(question.correct_index);

            // Update progress bar
            qcmQuizProgress.style.width = `${progressPercentage}%`;

            // Update question count
            qcmQuizQuestionCount.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;

            // Update instruction based on question type
            if (isMultiSelect) {
                const correctCount = question.correct_index.length;
                qcmQuizInstruction.innerHTML = `<i class="fas fa-check-double"></i> Sélectionnez ${correctCount} réponse(s)`;
            } else {
                qcmQuizInstruction.innerHTML = `<i class="fas fa-check"></i> Sélectionnez 1 réponse`;
            }

            // Reset selected choices
            selectedChoices.clear();

            // Create question HTML
            const questionHTML = `
                <div class="qcm-quiz-question-container">
                    <div class="qcm-quiz-question">${question.question}</div>
                </div>
                <div class="qcm-quiz-choices" id="qcmQuizChoices">
                    ${question.choices.map((choice, index) => `
                        <div class="qcm-quiz-choice" data-choice-index="${index}">
                            <div class="qcm-quiz-choice-letter">${String.fromCharCode(65 + index)}</div>
                            <div class="qcm-quiz-choice-text">${choice}</div>
                            <div class="qcm-quiz-choice-check"></div>
                        </div>
                    `).join('')}
                </div>
                <div class="qcm-quiz-actions">
                    <button class="qcm-quiz-submit" id="qcmQuizSubmit" disabled>
                        <i class="fas fa-paper-plane"></i>
                        ${isMultiSelect ? 'Soumettre les réponses' : 'Soumettre la réponse'}
                    </button>
                </div>
            `;

            qcmQuizContent.innerHTML = questionHTML;

            // Add event listeners to choices
            const choices = document.querySelectorAll('.qcm-quiz-choice');
            const submitButton = document.getElementById('qcmQuizSubmit');

            choices.forEach(choice => {
                choice.addEventListener('click', function() {
                    const choiceIndex = parseInt(this.getAttribute('data-choice-index'));

                    if (isMultiSelect) {
                        // Toggle selection for multi-select
                        if (selectedChoices.has(choiceIndex)) {
                            selectedChoices.delete(choiceIndex);
                            this.classList.remove('selected');
                        } else {
                            selectedChoices.add(choiceIndex);
                            this.classList.add('selected');
                        }
                    } else {
                        // Single selection for single-answer questions
                        selectedChoices.clear();
                        choices.forEach(c => c.classList.remove('selected'));
                        selectedChoices.add(choiceIndex);
                        this.classList.add('selected');
                    }

                    // Enable submit button if at least one choice is selected
                    submitButton.disabled = selectedChoices.size === 0;
                });
            });

            // Add event listener to submit button
            submitButton.addEventListener('click', submitAnswer);
        }

        // Submit Answer with multi-select support
        function submitAnswer() {
            const question = currentQuiz.questions[currentQuestionIndex];
            const isMultiSelect = Array.isArray(question.correct_index);

            // Convert selectedChoices Set to sorted array
            const userSelected = Array.from(selectedChoices).sort((a, b) => a - b);

            // Determine if answer is correct
            let isCorrect = false;

            if (isMultiSelect) {
                const correctAnswers = question.correct_index.sort((a, b) => a - b);
                // Check if arrays are identical
                isCorrect = userSelected.length === correctAnswers.length && 
                           userSelected.every((value, index) => value === correctAnswers[index]);
            } else {
                // Single answer
                isCorrect = userSelected.length === 1 && userSelected[0] === question.correct_index;
            }

            // Store user answer with correct answer(s)
            const userChoices = userSelected.map(idx => question.choices[idx]);
            const correctChoices = isMultiSelect 
                ? question.correct_index.map(idx => question.choices[idx])
                : [question.choices[question.correct_index]];

            userAnswers.push({
                question: question.question,
                userChoices: userChoices,
                correctChoices: correctChoices,
                isCorrect: isCorrect,
                isMultiSelect: isMultiSelect
            });

            // Update score
            if (isCorrect) {
                quizScore++;
            }

            // Show feedback
            const choices = document.querySelectorAll('.qcm-quiz-choice');
            const correctIndices = isMultiSelect ? question.correct_index : [question.correct_index];

            choices.forEach((choice, index) => {
                const choiceIndex = parseInt(choice.getAttribute('data-choice-index'));

                if (correctIndices.includes(choiceIndex)) {
                    choice.classList.add('correct');
                }

                if (userSelected.includes(choiceIndex) && !correctIndices.includes(choiceIndex)) {
                    choice.classList.add('incorrect');
                }
            });

            // Disable all choices
            choices.forEach(choice => {
                choice.style.pointerEvents = 'none';
            });

            // Show feedback message
            const feedback = document.createElement('div');
            feedback.className = `qcm-quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;

            let feedbackText = '';
            if (isCorrect) {
                feedbackText = 'Bonne réponse !';
            } else {
                if (isMultiSelect) {
                    const correctAnswersList = correctChoices.map((choice, idx) => 
                        `${String.fromCharCode(65 + question.choices.indexOf(choice))}. ${choice}`
                    ).join(', ');
                    feedbackText = `Incorrect. Les bonnes réponses étaient: ${correctAnswersList}`;
                } else {
                    feedbackText = `Incorrect. La bonne réponse était: ${correctChoices[0]}`;
                }
            }

            feedback.innerHTML = `
                <div class="qcm-quiz-feedback-icon">
                    <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                </div>
                <div>${feedbackText}</div>
            `;

            qcmQuizContent.insertBefore(feedback, document.querySelector('.qcm-quiz-actions'));

            // Replace submit button with next button
            const submitButton = document.getElementById('qcmQuizSubmit');
            submitButton.style.display = 'none';

            const nextButton = document.createElement('button');
            nextButton.className = 'qcm-quiz-next';
            nextButton.innerHTML = `
                <i class="fas fa-arrow-right"></i>
                ${currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
            `;
            nextButton.addEventListener('click', nextQuestion);

            document.querySelector('.qcm-quiz-actions').innerHTML = '';
            document.querySelector('.qcm-quiz-actions').appendChild(nextButton);
        }

        // Next Question
        function nextQuestion() {
            currentQuestionIndex++;
            selectedChoices.clear();

            if (currentQuestionIndex < currentQuiz.questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }

        // Show Results with multi-select support
        function showResults() {
            const scorePercentage = Math.round((quizScore / currentQuiz.questions.length) * 100);

            // Generate detailed corrections
            const correctionsHTML = userAnswers.map((answer, index) => {
                const questionNumber = index + 1;
                const userChoicesList = answer.userChoices.map((choice, idx) => 
                    `<div class="qcm-results-answer your-answer">
                        <div class="qcm-results-answer-marker">${String.fromCharCode(65 + idx)}</div>
                        <div>${choice}</div>
                    </div>`
                ).join('');

                const correctChoicesList = answer.correctChoices.map((choice, idx) => 
                    `<div class="qcm-results-answer correct-answer">
                        <div class="qcm-results-answer-marker">${String.fromCharCode(65 + idx)}</div>
                        <div>${choice}</div>
                    </div>`
                ).join('');

                return `
                    <div class="qcm-results-correction-item ${answer.isCorrect ? 'correct' : 'incorrect'}">
                        <div class="qcm-results-question">Question ${questionNumber}: ${answer.question}</div>
                        ${!answer.isCorrect ? `
                            <div class="qcm-results-answers">
                                <div style="font-size: 13px; color: var(--medium-text); margin-bottom: 4px;">Vos réponses:</div>
                                ${userChoicesList}
                                <div style="font-size: 13px; color: var(--secondary-color); margin: 8px 0 4px;">Réponses correctes:</div>
                                ${correctChoicesList}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');

            const resultsHTML = `
                <div class="qcm-results-container">
                    <div class="qcm-results-score-container">
                        <div class="qcm-results-score">${quizScore}/${currentQuiz.questions.length}</div>
                        <div class="qcm-results-message">
                            ${scorePercentage >= 80 ? 'Excellent travail !' : 
                              scorePercentage >= 60 ? 'Bon travail !' : 
                              'Continuez à vous entraîner !'}
                        </div>
                        <div class="qcm-results-percentage">${scorePercentage}% de bonnes réponses</div>
                    </div>
                    
                    <div class="qcm-results-corrections">
                        <div class="qcm-results-corrections-title">Détail des réponses :</div>
                        ${correctionsHTML}
                    </div>
                    
                    <div class="qcm-results-actions">
                        <button class="qcm-results-retry" id="qcmRetryButton">
                            <i class="fas fa-redo"></i>
                            Recommencer ce chapitre
                        </button>
                        <button class="qcm-results-close" id="qcmCloseResultsButton">
                            <i class="fas fa-times"></i>
                            Fermer
                        </button>
                    </div>
                </div>
            `;

            qcmQuizContent.innerHTML = resultsHTML;

            // Add event listeners to result buttons
            document.getElementById('qcmRetryButton').addEventListener('click', function() {
                const modelId = currentQuiz.id.split('_')[0];
                const chapterId = currentQuiz.id;
                startQuiz(modelId, chapterId);
            });

            document.getElementById('qcmCloseResultsButton').addEventListener('click', closeQuiz);
        }

        // Close Quiz
        function closeQuiz() {
            qcmQuizOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentQuiz = null;
            selectedChoices.clear();
        }

        // Render Popular Courses from JSON data
        function renderPopularCourses() {
            coursesSlider.innerHTML = '';

            Object.keys(popularCoursesData).forEach(courseId => {
                const course = popularCoursesData[courseId];
                const courseCard = document.createElement('div');
                courseCard.className = `square-course-card ${getColorClass(courseId)}`;
                courseCard.setAttribute('data-course-id', courseId);
                courseCard.setAttribute('data-title', course.title);
                courseCard.setAttribute('data-description', course.description);

                courseCard.innerHTML = `
                    <div class="course-icon"><i class="${getCourseIcon(courseId)}"></i></div>
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> ${getCourseDuration(courseId)}</span>
                        <span><i class="fas fa-book"></i> ${getCourseLessons(courseId)} Quiz à faire</span>
                    </div>
                `;

                coursesSlider.appendChild(courseCard);
            });
        }

        // Render Your Courses from JSON data
        function renderYourCourses() {
            yourCoursesGrid.innerHTML = '';

            Object.keys(yourCoursesData).forEach(courseId => {
                const course = yourCoursesData[courseId];
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';
                courseCard.setAttribute('data-course-id', courseId);

                courseCard.innerHTML = `
                    <div class="course-icon"><i class="${getYourCourseIcon(courseId)}"></i></div>
                    <h3>${course.title}</h3>
                    <p>${course.description}</p>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> ${getYourCourseDuration(courseId)}</span>
                        <span><i class="fas fa-book"></i> ${getYourCourseLessons(courseId)} leçons</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${getYourCourseProgress(courseId)}"></div>
                    </div>
                    <div class="course-meta">
                        <span>${getYourCourseProgress(courseId)} Complete</span>
                    </div>
                `;

                yourCoursesGrid.appendChild(courseCard);
            });
        }

        // Render Exercises from JSON data
        function renderExercises() {
            exercisesGrid.innerHTML = '';

            Object.keys(exercisesData).forEach(exerciseId => {
                const exercise = exercisesData[exerciseId];

                const exerciseCard = document.createElement('div');
                exerciseCard.className = `exercise-card`;
                exerciseCard.setAttribute('data-exercise-id', exerciseId);

                exerciseCard.innerHTML = `
                    <div class="course-icon"><i class="${getExerciseIcon(exerciseId)}"></i></div>
                    <h3>${exercise.title}</h3>
                    <p>${exercise.description}</p>
                    <div class="course-meta">
                        <span><i class="far fa-clock"></i> ${exercise.duration}</span>
                        <span><i class="fas fa-tasks"></i> ${exercise.exerciseCount} exercices</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${exercise.progress}%"></div>
                    </div>
                    <div class="course-meta">
                        <span>${exercise.progress}% Complete</span>
                    </div>
                `;

                exercisesGrid.appendChild(exerciseCard);
            });
        }

        // NEW: Render Models from JSON data
        function renderModels() {
            modelsGrid.innerHTML = '';

            Object.keys(modelsData).forEach(modelId => {
                const model = modelsData[modelId];
                const modelCard = document.createElement('div');
                modelCard.className = 'model-card';
                modelCard.setAttribute('data-model-id', modelId);

                modelCard.innerHTML = `
                    <div class="model-icon">
                        <i class="${model.icon}"></i>
                    </div>
                    <h4>${model.title}</h4>
                    <p>${model.description}</p>
                `;

                modelsGrid.appendChild(modelCard);
            });
        }

        // Helper functions for course data
        function getColorClass(courseId) {
            const colors = ['green', 'purple', 'blue', 'orange', 'green'];
            return colors[Object.keys(popularCoursesData).indexOf(courseId) % colors.length];
        }

        function getCourseIcon(courseId) {
            const icons = {
                'reproduction-humaine': 'fas fa-heartbeat',
                'evolution-biologique': 'fas fa-flask',
                'genetique-humaine': 'fas fa-dna',
                'neurophysiologie': 'fas fa-brain',
                'immunite': 'fas fa-shield-virus'
            };
            return icons[courseId] || 'fas fa-book';
        }

        function getCourseDuration(courseId) {
            const durations = {
                'reproduction-humaine': ' 50min',
                'evolution-biologique': ' 30min',
                'genetique-humaine': ' 45min',
                'neurophysiologie': '1h 20min',
                'immunite': '1h 45min'
            };
            return durations[courseId] || '2h 00min';
        }

        function getCourseLessons(courseId) {
            const lessons = {
                'reproduction-humaine': '48',
                'evolution-biologique': '15',
                'genetique-humaine': '22',
                'neurophysiologie': '56',
                'immunite': '34'
            };
            return lessons[courseId] || '10';
        }

        function getYourCourseIcon(courseId) {
            const icons = {
                'reproduction-humaine1': 'fas fa-heartbeat',
                'reproduction-humaine2': 'fas fa-heartbeat',
                'reproduction-humaine3': 'fas fa-heartbeat',
                'evolution-biologique': 'fas fa-dna',
                'genetique-humaine': 'fas fa-dna',
                'evolution-des-especes': 'fas fa-frog',  
                'système-nerveux': 'fas fa-brain',
                'musqule': 'fas fa-bone',
                'presion': 'fas fa-tachometer-alt',
                'immu': 'fas fa-shield-virus'
            };
            return icons[courseId] || 'fas fa-book';
        }

        function getYourCourseDuration(courseId) {
            const durations = {
                'reproduction-humaine1': ' ',
                'reproduction-humaine2': ' ',
                'reproduction-humaine3': ' ',
                'evolution-biologique': ' ',
                'genetique-humaine': ' '
            };
            return durations[courseId] || '';
        }

        function getYourCourseLessons(courseId) {
            const lessons = {
                'reproduction-humaine1': '2',
                'reproduction-humaine2': '7',
                'reproduction-humaine3': '3',
                'evolution-biologique': '15',
                'genetique-humaine': '2',
                'système-nerveux': '5',
                'musqule': '2',
                'presion': '3',
                'immu': '4'
            };
            return lessons[courseId] || '2';
        }

        function getYourCourseProgress(courseId) {
            const progress = {
                'reproduction-humaine1': '100%',
                'reproduction-humaine2': '100%',
                'reproduction-humaine3': '100%',
                'evolution-biologique': '40%',
                'genetique-humaine': '100%'
            };
            return progress[courseId] || '100%';
        }

        function getExerciseIcon(exerciseId) {
            const icons = {
                'ex01': 'fas fa-file-pdf',
                'ex02': 'fas fa-file-pdf',
                'ex03': 'fas fa-flask',
                'ex04': 'fas fa-shield-virus'
            };
            return icons[exerciseId] || 'fas fa-file-pdf';
        }

        // Setup event listeners
        function setupEventListeners() {
            // Navigation
            setupNavigation();

            // Start button scroll to quiz section
            startButton.addEventListener('click', function() {
                quizSection.scrollIntoView({ behavior: 'smooth' });
            });

            // NEW: Biology QCM button
            qcmBiologyBtn.addEventListener('click', scrollToQCM);

            // NEW: View schemas button
            viewSchemasButton.addEventListener('click', openModelsPopup);

            // NEW: QCM chapter click
            qcmModelsContainer.addEventListener('click', function(e) {
                const chapterItem = e.target.closest('.qcm-chapter-item');
                if (chapterItem) {
                    const modelId = chapterItem.getAttribute('data-model-id');
                    const chapterId = chapterItem.getAttribute('data-chapter-id');
                    startQuiz(modelId, chapterId);
                }
            });

            // NEW: QCM quiz close
            qcmQuizClose.addEventListener('click', closeQuiz);

            // NEW: QCM quiz overlay close
            qcmQuizOverlay.addEventListener('click', function(e) {
                if (e.target === qcmQuizOverlay) {
                    closeQuiz();
                }
            });

            // Search functionality for Popular Courses
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase().trim();
                const courseCards = coursesSlider.querySelectorAll('.square-course-card');

                courseCards.forEach(card => {
                    const title = card.getAttribute('data-title').toLowerCase();
                    const description = card.getAttribute('data-description').toLowerCase();

                    if (searchTerm === '' || title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });

            // NEW: Models popup
            modelsGrid.addEventListener('click', function(e) {
                const modelCard = e.target.closest('.model-card');
                if (modelCard) {
                    const modelId = modelCard.getAttribute('data-model-id');
                    openGalleryPopup(modelId);
                }
            });

            // Popular Courses popup
            coursesSlider.addEventListener('click', function(e) {
                const courseCard = e.target.closest('.square-course-card');
                if (courseCard) {
                    const courseId = courseCard.getAttribute('data-course-id');
                    openPopularCoursesPopup(courseId);
                }
            });

            // Your Courses PDF popup
            yourCoursesGrid.addEventListener('click', function(e) {
                const courseCard = e.target.closest('.course-card');
                if (courseCard) {
                    const courseId = courseCard.getAttribute('data-course-id');
                    openPdfViewerPopup(courseId, 'course');
                }
            });

            // Exercises modal
            exercisesGrid.addEventListener('click', function(e) {
                const exerciseCard = e.target.closest('.exercise-card');
                if (exerciseCard) {
                    const exerciseId = exerciseCard.getAttribute('data-exercise-id');
                    openExerciseModal(exerciseId);
                }
            });

            // NEW: Gallery image click
            galleryGrid.addEventListener('click', function(e) {
                const galleryItem = e.target.closest('.gallery-item');
                if (galleryItem) {
                    const img = galleryItem.querySelector('.gallery-image');
                    openFullscreenImage(img.src, img.alt);
                }
            });

            // Close popups
            modelsPopupClose.addEventListener('click', closeModelsPopup);
            galleryPopupClose.addEventListener('click', closeGalleryPopup);
            popularCoursesPopupClose.addEventListener('click', closePopularCoursesPopup);
            exerciseModalClose.addEventListener('click', closeExerciseModal);
            pdfViewerPopupClose.addEventListener('click', closePdfViewerPopup);

            // NEW: Fullscreen back button
            backFromFullscreen.addEventListener('click', closeFullscreenImage);

            // Close popups when clicking outside
            modelsPopup.addEventListener('click', function(e) {
                if (e.target === modelsPopup) {
                    closeModelsPopup();
                }
            });

            galleryPopup.addEventListener('click', function(e) {
                if (e.target === galleryPopup) {
                    closeGalleryPopup();
                }
            });

            popularCoursesPopup.addEventListener('click', function(e) {
                if (e.target === popularCoursesPopup) {
                    closePopularCoursesPopup();
                }
            });

            exerciseModal.addEventListener('click', function(e) {
                if (e.target === exerciseModal) {
                    closeExerciseModal();
                }
            });

            pdfViewerPopup.addEventListener('click', function(e) {
                if (e.target === pdfViewerPopup) {
                    closePdfViewerPopup();
                }
            });

            // NEW: Fullscreen viewer close when clicking outside image
            fullscreenViewer.addEventListener('click', function(e) {
                if (e.target === fullscreenViewer) {
                    closeFullscreenImage();
                }
            });

            // Close popups with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    if (qcmQuizOverlay.classList.contains('active')) {
                        closeQuiz();
                    } else if (fullscreenViewer.classList.contains('active')) {
                        closeFullscreenImage();
                    } else if (modelsPopup.classList.contains('active')) {
                        closeModelsPopup();
                    } else if (galleryPopup.classList.contains('active')) {
                        closeGalleryPopup();
                    } else if (popularCoursesPopup.classList.contains('active')) {
                        closePopularCoursesPopup();
                    } else if (exerciseModal.classList.contains('active')) {
                        closeExerciseModal();
                    } else if (pdfViewerPopup.classList.contains('active')) {
                        closePdfViewerPopup();
                    }
                }
            });

            // PDF fullscreen button
            pdfFullscreenBtn.addEventListener('click', function() {
                if (pdfViewer.requestFullscreen) {
                    pdfViewer.requestFullscreen();
                } else if (pdfViewer.webkitRequestFullscreen) {
                    pdfViewer.webkitRequestFullscreen();
                } else if (pdfViewer.msRequestFullscreen) {
                    pdfViewer.msRequestFullscreen();
                }
            });

            // PDF viewer load event
            pdfViewer.addEventListener('load', function() {
                pdfViewerContainer.classList.remove('loading');
            });
        }

        // NEW: Open Models popup
        function openModelsPopup() {
            modelsPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // NEW: Close Models popup
        function closeModelsPopup() {
            modelsPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // NEW: Open Gallery popup
        function openGalleryPopup(modelId) {
            const model = modelsData[modelId];
            if (!model) return;

            currentModelId = modelId;
            galleryTitle.textContent = model.title;

            // Clear previous gallery items
            galleryGrid.innerHTML = '';

            // Add gallery items
            model.images.forEach((image, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';

                galleryItem.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}" class="gallery-image">
                `;

                galleryGrid.appendChild(galleryItem);
            });

            // Close models popup and open gallery popup
            closeModelsPopup();
            galleryPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // NEW: Close Gallery popup
        function closeGalleryPopup() {
            galleryPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentModelId = null;
        }

        // NEW: Open Fullscreen Image
        function openFullscreenImage(src, alt) {
            fullscreenImage.src = src;
            fullscreenImage.alt = alt;
            fullscreenViewer.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // NEW: Close Fullscreen Image
        function closeFullscreenImage() {
            fullscreenViewer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Open Popular Courses popup
        function openPopularCoursesPopup(courseId) {
            const course = popularCoursesData[courseId];
            if (!course) return;

            popularCoursesPopupTitle.textContent = course.title;
            popularCoursesPopupDescription.textContent = course.description;

            // Clear previous options
            popularCoursesOptions.innerHTML = '';

            // Add new options
            course.options.forEach(option => {
                const optionCard = document.createElement('div');
                optionCard.className = `option-card ${option.color}`;

                optionCard.innerHTML = `
                    <div>
                        <div class="option-icon">
                            <i class="${option.icon}"></i>
                        </div>
                        <h4 class="option-title">${option.title}</h4>
                        <p>${option.description}</p>
                    </div>
                    <a href="${option.link}" class="option-link" target="_blank">Essayer<i class="fas fa-arrow-right"></i></a>
                `;

                popularCoursesOptions.appendChild(optionCard);
            });

            // Show popup
            popularCoursesPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Popular Courses popup
        function closePopularCoursesPopup() {
            popularCoursesPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Open Exercise modal
        function openExerciseModal(exerciseId) {
            const exercise = exercisesData[exerciseId];
            if (!exercise) return;

            currentExerciseId = exerciseId;

            exerciseModalTitle.textContent = exercise.title;
            exerciseModalDescription.textContent = exercise.description;

            // Clear previous PDFs
            exercisePdfsList.innerHTML = '';

            // Add PDFs - entire PDF item is clickable
            exercise.pdfs.forEach((pdf, index) => {
                const pdfItem = document.createElement('div');
                pdfItem.className = 'pdf-item';
                pdfItem.setAttribute('data-pdf-url', pdf.url);
                pdfItem.setAttribute('data-pdf-title', pdf.title);

                pdfItem.innerHTML = `
                    <div class="pdf-info">
                        <div class="pdf-icon">
                            <i class="fas fa-file-pdf"></i>
                        </div>
                        <h4>${pdf.title}</h4>
                    </div>
                `;

                // Add click event to the entire PDF item
                pdfItem.addEventListener('click', function() {
                    const pdfUrl = this.getAttribute('data-pdf-url');
                    const pdfTitle = this.getAttribute('data-pdf-title');
                    openPdfViewerPopup(pdfUrl, 'pdf', pdfTitle);
                });

                exercisePdfsList.appendChild(pdfItem);
            });

            // Show modal
            exerciseModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close Exercise modal
        function closeExerciseModal() {
            exerciseModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentExerciseId = null;
        }

        // Open PDF Viewer popup
        function openPdfViewerPopup(resource, type, customTitle = null) {
            let title = customTitle || '';
            let pdfUrl = resource;

            if (type === 'course') {
                const course = yourCoursesData[resource];
                if (!course) return;
                title = course.title;
                pdfUrl = course.pdfUrl;
            } else if (type === 'exercise') {
                const exercise = exercisesData[resource];
                if (!exercise) return;
                title = exercise.title;
                pdfUrl = exercise.pdfs[0].url;
            }

            pdfViewerPopupTitle.textContent = title || 'PDF Viewer';

            // Show loading spinner
            pdfViewerContainer.classList.add('loading');

            // Set PDF source (lazy loading)
            pdfViewer.src = pdfUrl;

            // Show popup
            pdfViewerPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close PDF Viewer popup
        function closePdfViewerPopup() {
            pdfViewerPopup.classList.remove('active');
            document.body.style.overflow = 'auto';

            // Reset PDF viewer
            pdfViewer.src = '';
        }
