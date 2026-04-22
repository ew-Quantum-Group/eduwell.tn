document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const screens = { home: document.getElementById('home-screen'), config: document.getElementById('config-screen'), quiz: document.getElementById('quiz-screen'), results: document.getElementById('results-screen') };
    const buttons = { startConfig: document.getElementById('start-config-btn'), startQuiz: document.getElementById('start-quiz-btn'), prev: document.getElementById('prev-btn'), next: document.getElementById('next-btn'), replay: document.getElementById('replay-btn'), quit: document.getElementById('quit-btn'), skip: document.getElementById('skip-btn') };
    const containers = { themes: document.getElementById('themes-container'), levels: document.getElementById('level-container'), length: document.getElementById('length-container'), questionText: document.getElementById('question-text'), options: document.getElementById('options-container'), wrongAnswers: document.getElementById('wrong-answers-container'), themeScores: document.getElementById('theme-scores-container'), quizScreen: document.getElementById('quiz-screen') };
    const indicators = { progress: document.getElementById('progress-indicator'), timer: document.getElementById('timer'), finalScore: document.getElementById('final-score'), totalTime: document.getElementById('total-time'), theme: document.getElementById('question-theme') };

    // === State ===
    let allQuestions = [], currentQuizQuestions = [], currentQuestionIndex = 0, userAnswers = {}, timerInterval, secondsElapsed = 0, skippedCount = 0;

    const THEMES = ['Bases de données', 'HTML', 'CSS', 'JavaScript', 'PHP'];
    const LEVELS = ['mixte', 'debutant', 'intermediaire', 'avance'];
    const QUIZ_LENGTHS = { courte: 20, moyenne: 40, longue: 60 };
    const THEME_COLORS = { 'HTML': 'bg-red-600', 'CSS': 'bg-blue-600', 'JavaScript': 'bg-yellow-600', 'PHP': 'bg-indigo-600', 'Bases de données': 'bg-green-600' };
    const THEME_FILES = { 'Bases de données': 'bases_de_donnees.json', 'HTML': 'html.json', 'CSS': 'css.json', 'JavaScript': 'javascript.json', 'PHP': 'php.json' };

    // === Functions ===
    const themeToPrismLanguage = (theme) => ({ 'HTML': 'html', 'CSS': 'css', 'JavaScript': 'javascript', 'PHP': 'php', 'Bases de données': 'sql' })[theme] || '';
    const escapeHTML = (str) => { const p = document.createElement("p"); p.textContent = str; return p.innerHTML; };

    const formatTextForDisplay = (text, theme) => {
        if (!text) return '';
        const language = themeToPrismLanguage(theme);
        const blockRegex = /```([\s\S]+?)```/g;
        const inlineRegex = /`([^`]+?)`/g;
        let formattedText = text;
        if (text.includes('```')) {
            return formattedText.replace(blockRegex, (match, codeContent) => `<pre class="language-${language}"><code class="language-${language}">${escapeHTML(codeContent.trim())}</code></pre>`);
        }
        formattedText = escapeHTML(text);
        return formattedText.replace(inlineRegex, '<code>$1</code>');
    };

    const showScreen = (screenName) => { Object.values(screens).forEach(screen => screen.classList.add('hidden')); screens[screenName].classList.remove('hidden'); };

    const loadAllQuestions = async () => {
        try {
            const responses = await Promise.all(Object.values(THEME_FILES).map(file => fetch(`./data/${file}`)));
            for (const response of responses) if (!response.ok) throw new Error(`HTTP Error: ${response.status} for ${response.url}`);
            const dataArrays = await Promise.all(responses.map(res => res.json()));
            const flattenedQuestions = dataArrays.flat();
            const uniqueQuestions = [];
            const seenIds = new Set();
            for (const question of flattenedQuestions) {
                if (!seenIds.has(question.id)) {
                    uniqueQuestions.push(question);
                    seenIds.add(question.id);
                }
            }
            allQuestions = uniqueQuestions;
            populateConfigScreen();
        } catch (error) { console.error("Error loading questions:", error); containers.themes.innerHTML = `<p class="text-red-500 col-span-full">Impossible de charger les questions. Vérifiez le dossier 'data' et la console (F12).</p>`; }
    };
    
    const populateConfigScreen = () => {
        containers.themes.innerHTML = THEMES.map(theme => `<label class="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700"><input type="checkbox" name="theme" value="${theme}" class="form-checkbox h-5 w-5 bg-slate-900 border-slate-600 text-emerald-500 focus:ring-emerald-500"><span class="text-white font-medium">${theme}</span></label>`).join('');
        containers.levels.innerHTML = LEVELS.map((level, index) => `<label class="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 flex-1"><input type="radio" name="level" value="${level}" required class="form-radio h-5 w-5 bg-slate-900 border-slate-600 text-emerald-500 focus:ring-emerald-500" ${index === 0 ? 'checked' : ''}><span class="text-white font-medium capitalize">${level}</span></label>`).join('');
        containers.length.innerHTML = Object.keys(QUIZ_LENGTHS).map((key, index) => `<label class="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg cursor-pointer hover:bg-slate-700 flex-1"><input type="radio" name="length" value="${key}" required class="form-radio h-5 w-5 bg-slate-900 border-slate-600 text-emerald-500 focus:ring-emerald-500" ${index === 0 ? 'checked' : ''}><span class="text-white font-medium capitalize">${key} (${QUIZ_LENGTHS[key]} questions)</span></label>`).join('');
        document.getElementById('config-screen').addEventListener('change', validateConfig);
        validateConfig();
    };

    const validateConfig = () => { buttons.startQuiz.disabled = document.querySelectorAll('input[name="theme"]:checked').length === 0; };
    const shuffleArray = (array) => { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; };
    
    const startQuiz = () => {
        const selectedThemes = Array.from(document.querySelectorAll('input[name="theme"]:checked')).map(cb => cb.value);
        const selectedLevel = document.querySelector('input[name="level"]:checked').value;
        const desiredLength = QUIZ_LENGTHS[document.querySelector('input[name="length"]:checked').value];
        let finalQuestions = [];

        if (selectedLevel === 'mixte') {
            const proportions = { debutant: 0.5, intermediaire: 0.3, avance: 0.2 };
            const byLevel = { debutant: shuffleArray(allQuestions.filter(q => q.niveau === 'debutant' && selectedThemes.includes(q.theme))), intermediaire: shuffleArray(allQuestions.filter(q => q.niveau === 'intermediaire' && selectedThemes.includes(q.theme))), avance: shuffleArray(allQuestions.filter(q => q.niveau === 'avance' && selectedThemes.includes(q.theme))) };
            let dCount = Math.round(desiredLength * proportions.debutant), iCount = Math.round(desiredLength * proportions.intermediaire);
            finalQuestions.push(...byLevel.debutant.slice(0, dCount), ...byLevel.intermediaire.slice(0, iCount), ...byLevel.avance.slice(0, desiredLength - dCount - iCount));
        } else {
            let pool = allQuestions.filter(q => q.niveau === selectedLevel && selectedThemes.includes(q.theme));
            const byTheme = {};
            selectedThemes.forEach(theme => { byTheme[theme] = shuffleArray(pool.filter(q => q.theme === theme)); });
            for (let i = 0; finalQuestions.length < desiredLength; i++) {
                let added = false;
                selectedThemes.forEach(theme => { if (byTheme[theme][i] && finalQuestions.length < desiredLength) { finalQuestions.push(byTheme[theme][i]); added = true; } });
                if (!added) break;
            }
        }
        if (finalQuestions.length < desiredLength && finalQuestions.length > 0) { alert(`Attention : seulement ${finalQuestions.length} questions sont disponibles.`); }
        if (finalQuestions.length === 0) { alert("Aucune question trouvée."); return; }
        currentQuizQuestions = shuffleArray(finalQuestions);
        currentQuestionIndex = 0; userAnswers = {}; secondsElapsed = 0; skippedCount = 0;
        showScreen('quiz'); displayQuestion(); startTimer();
    };

    const displayQuestion = () => {
        const question = currentQuizQuestions[currentQuestionIndex];
        indicators.theme.textContent = question.theme;
        indicators.theme.className = `text-white text-sm font-medium px-2.5 py-1 rounded ${THEME_COLORS[question.theme] || 'bg-gray-600'}`;
        containers.questionText.innerHTML = formatTextForDisplay(question.question, question.theme);
        
        const savedAnswer = userAnswers[question.id];
        let optionsHTML = '';
        if (question.type === 'choix_simple' || question.type === 'choix_multiple') {
            optionsHTML = question.options.map(option => {
                const isChecked = savedAnswer && ((question.type === 'choix_simple' && savedAnswer[0] === option) || (question.type === 'choix_multiple' && savedAnswer.includes(option)));
                return `<label class="flex items-center p-4 bg-slate-700 rounded-lg cursor-pointer hover:bg-slate-600">
                            <input type="${question.type === 'choix_simple' ? 'radio' : 'checkbox'}" name="option" value="${escapeHTML(option)}" class="form-checkbox h-5 w-5 bg-slate-900 border-slate-600 text-emerald-500 focus:ring-emerald-500" ${isChecked ? 'checked' : ''}>
                            <span class="ml-3">${formatTextForDisplay(option, question.theme)}</span>
                        </label>`;
            }).join('');
        } else if (question.type === 'zone_saisie' || question.type === 'saisie_libre') {
            optionsHTML = `<input type="text" placeholder="Votre réponse..." value="${savedAnswer ? escapeHTML(savedAnswer[0]) : ''}" class="w-full p-3 bg-slate-600 border border-slate-500 rounded-lg focus:outline-none focus:ring-emerald-500 text-white font-mono">`;
        }
        containers.options.innerHTML = optionsHTML;
        
        updateNavigation();
        if (window.Prism) {
            setTimeout(() => { Prism.highlightAll(); }, 0);
        }
    };
    
    const updateNavigation = () => {
        buttons.prev.disabled = currentQuestionIndex === 0;
        buttons.prev.classList.toggle('opacity-50', buttons.prev.disabled);
        buttons.skip.style.display = (currentQuizQuestions.length - currentQuestionIndex <= skippedCount + 1) ? 'none' : 'inline-block';
        buttons.next.textContent = (currentQuestionIndex === currentQuizQuestions.length - 1) ? 'Soumettre' : 'Suivant';
        indicators.progress.textContent = `Question ${currentQuestionIndex + 1} / ${currentQuizQuestions.length}`;
    };
    
    const saveAnswer = () => {
        const question = currentQuizQuestions[currentQuestionIndex];
        let answer;
        switch (question.type) {
            case 'choix_simple': answer = document.querySelector('input[name="option"]:checked') ? [document.querySelector('input[name="option"]:checked').value] : []; break;
            case 'choix_multiple': answer = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(cb => cb.value); break;
            case 'zone_saisie': case 'saisie_libre': const input = document.querySelector('#options-container input[type="text"]'); answer = input && input.value.trim() !== '' ? [input.value.trim()] : []; break;
        }
        if (answer && answer.length > 0) userAnswers[question.id] = answer; else delete userAnswers[question.id];
    };

    const nextQuestion = () => { saveAnswer(); if (currentQuestionIndex < currentQuizQuestions.length - 1) { currentQuestionIndex++; displayQuestion(); } else { showResults(); } };
    const prevQuestion = () => { saveAnswer(); if (currentQuestionIndex > 0) { currentQuestionIndex--; displayQuestion(); } };
    const skipQuestion = () => { saveAnswer(); currentQuizQuestions.push(currentQuizQuestions.splice(currentQuestionIndex, 1)[0]); skippedCount++; displayQuestion(); };
    const startTimer = () => { timerInterval = setInterval(() => { secondsElapsed++; const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0'); const seconds = (secondsElapsed % 60).toString().padStart(2, '0'); indicators.timer.textContent = `${minutes}:${seconds}`; }, 1000); };
    const stopTimer = () => clearInterval(timerInterval);

    const showResults = () => {
        stopTimer();
        showScreen('results');
        let score = 0;
        const themeScores = {};
        currentQuizQuestions.forEach(q => { if (!themeScores[q.theme]) themeScores[q.theme] = { correct: 0, total: 0 }; });
        let wrongAnswersHTML = '<h3 class="text-2xl font-semibold mb-4 border-b-2 border-slate-700 pb-2">Détails des erreurs :</h3>';

        currentQuizQuestions.forEach(q => {
            const userAnswer = userAnswers[q.id] || [];
            const isCorrect = questionIsCorrect(q, userAnswer);
            themeScores[q.theme].total++;
            if (isCorrect) {
                score++;
                themeScores[q.theme].correct++;
            } else {
                wrongAnswersHTML += `<div class="bg-slate-800 p-4 rounded-lg mb-4">
                                        <div class="font-bold text-lg mb-2">${formatTextForDisplay(q.question, q.theme)}</div>
                                        <p class="text-red-400"><strong>Votre réponse :</strong> ${formatTextForDisplay(userAnswer.join(', ') || 'Aucune', q.theme)}</p>
                                        <p class="text-green-400"><strong>Bonne réponse :</strong> ${formatTextForDisplay(q.reponse.join(', '), q.theme)}</p>
                                        <p class="mt-2 text-slate-300"><em>${formatTextForDisplay(q.explication, q.theme)}</em></p>
                                    </div>`;
            }
        });

        containers.wrongAnswers.innerHTML = wrongAnswersHTML;
        containers.themeScores.innerHTML = '<h3 class="text-2xl font-semibold mb-4 border-b-2 border-slate-700 pb-2">Score par Thème :</h3>' + Object.entries(themeScores).map(([theme, scores]) => scores.total > 0 ? `<div class="flex justify-between items-center bg-slate-800 p-3 rounded-lg mb-2"><span class="font-medium">${theme}</span><span class="font-bold text-lg">${scores.correct} / ${scores.total}</span></div>` : '').join('');
        indicators.finalScore.textContent = `${score} / ${currentQuizQuestions.length}`;
        indicators.totalTime.textContent = `Terminé en ${indicators.timer.textContent}`;
        if (window.Prism) {
            setTimeout(() => { Prism.highlightAll(); }, 0);
        }
    };

    /**
     * CORRECTION : Ajout de .replace(/^`|`$/g, '') pour retirer les backticks
     * des réponses correctes avant la comparaison.
     */
    const questionIsCorrect = (question, userAnswer) => {
        const correctAnswer = question.reponse;
        if (question.type === 'zone_saisie' || question.type === 'saisie_libre') {
            if (userAnswer.length === 0) return false;
            
            // Normalise une chaîne pour la comparaison :
            // 1. Retire les backticks ` au début/fin
            // 2. Retire tous les espaces
            // 3. Retire le point-virgule final
            // 4. Met en minuscules
            const normalize = (str) => str.replace(/^`|`$/g, '').replace(/\s/g, '').replace(/;$/, '').toLowerCase();

            const userClean = normalize(userAnswer[0]);
            
            // Permet plusieurs réponses correctes possibles
            return correctAnswer.some(correct => normalize(correct) === userClean);
        }
        if (userAnswer.length !== correctAnswer.length) return false;
        return [...userAnswer].sort().join(',') === [...correctAnswer].sort().join(',');
    };

    const resetAndShowConfig = () => { populateConfigScreen(); showScreen('config'); };

    // === Event Listeners ===
    buttons.startConfig.addEventListener('click', () => showScreen('config'));
    buttons.startQuiz.addEventListener('click', startQuiz);
    buttons.next.addEventListener('click', nextQuestion);
    buttons.prev.addEventListener('click', prevQuestion);
    buttons.skip.addEventListener('click', skipQuestion);
    buttons.replay.addEventListener('click', resetAndShowConfig);
    buttons.quit.addEventListener('click', () => { populateConfigScreen(); showScreen('home'); });

    // === Initialisation ===
    loadAllQuestions();
    showScreen('home');
});
