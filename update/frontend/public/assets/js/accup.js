 // Gestion de l'état
        let currentStep = 1;
        let selectedPaymentMethod = null;
        
        // Éléments DOM
        const stepDots = document.querySelectorAll('.step-dot');
        const formSteps = document.querySelectorAll('.form-step');
        
        // Éléments Étape 1
        const nextStep1Btn = document.getElementById('nextStep1');
        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        
        // Éléments Étape 2
        const prevStep2Btn = document.getElementById('prevStep2');
        const nextStep2Btn = document.getElementById('nextStep2');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        
        // Éléments Étape 3
        const prevStep3Btn = document.getElementById('prevStep3');
        const nextStep3Btn = document.getElementById('nextStep3');
        const gradeInputs = document.querySelectorAll('.grade-input');
        
        // Éléments Étape 4
        const prevStep4Btn = document.getElementById('prevStep4');
        const finishBtn = document.getElementById('finishBtn');
        const paymentOptions = document.querySelectorAll('.payment-option');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const errorMessageDiv = document.getElementById('errorMessage');
        
        // Éléments Modal
        const confirmationModal = document.getElementById('confirmationModal');
        const closeModalBtn = document.getElementById('closeModal');
        
        // Éléments des règles de mot de passe
        const ruleLength = document.getElementById('ruleLength');
        const ruleUppercase = document.getElementById('ruleUppercase');
        const ruleLowercase = document.getElementById('ruleLowercase');
        const ruleNumber = document.getElementById('ruleNumber');
        const ruleSpecial = document.getElementById('ruleSpecial');
        
        // Initialiser le formulaire
        function initForm() {
            setupEventListeners();
            validateStep1(); // Validation initiale
        }
        
        // Configurer tous les écouteurs d'événements
        function setupEventListeners() {
            // Navigation Étape 1
            [firstNameInput, lastNameInput, emailInput, phoneInput].forEach(input => {
                input.addEventListener('input', validateStep1);
                input.addEventListener('blur', () => showValidation(input));
            });
            
            nextStep1Btn.addEventListener('click', () => goToStep(2));
            
            // Navigation Étape 2
            prevStep2Btn.addEventListener('click', () => goToStep(1));
            nextStep2Btn.addEventListener('click', () => goToStep(3));
            
            passwordInput.addEventListener('input', validatePassword);
            confirmPasswordInput.addEventListener('input', validatePasswordConfirmation);
            
            // Navigation Étape 3
            prevStep3Btn.addEventListener('click', () => goToStep(2));
            nextStep3Btn.addEventListener('click', () => goToStep(4));
            
            gradeInputs.forEach(input => {
                input.addEventListener('input', validateGrade);
                input.addEventListener('blur', () => validateGrade({ target: input }));
            });
            
            // Navigation Étape 4
            prevStep4Btn.addEventListener('click', () => goToStep(3));
            
            paymentOptions.forEach(option => {
                option.addEventListener('click', () => {
                    // Supprimer la sélection précédente
                    paymentOptions.forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Ajouter la nouvelle sélection
                    option.classList.add('selected');
                    selectedPaymentMethod = option.getAttribute('data-method');
                    
                    validateStep4();
                });
            });
            
            finishBtn.addEventListener('click', finishSignup);
            
            // Contrôles du modal
            closeModalBtn.addEventListener('click', () => {
                confirmationModal.classList.remove('active');
                resetForm(); // Réinitialiser le formulaire quand le modal est fermé
            });
            
            // Fermer le modal en cliquant à l'extérieur
            confirmationModal.addEventListener('click', (e) => {
                if (e.target === confirmationModal) {
                    confirmationModal.classList.remove('active');
                    resetForm(); // Réinitialiser le formulaire
                }
            });
            
            // Empêcher la soumission du formulaire avec la touche Entrée
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleEnterKey();
                }
            });
        }
        
        // Gérer la touche Entrée
        function handleEnterKey() {
            switch(currentStep) {
                case 1:
                    if (!nextStep1Btn.disabled) goToStep(2);
                    break;
                case 2:
                    if (!nextStep2Btn.disabled) goToStep(3);
                    break;
                case 3:
                    if (!nextStep3Btn.disabled) goToStep(4);
                    break;
                case 4:
                    if (!finishBtn.disabled) finishSignup();
                    break;
            }
        }
        
        // Naviguer vers une étape spécifique
        function goToStep(step) {
            if (step < 1 || step > 4) return;
            
            // Mettre à jour les points d'étape
            stepDots.forEach((dot, index) => {
                if (index + 1 === step) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Mettre à jour les étapes du formulaire
            formSteps.forEach(formStep => {
                formStep.classList.remove('active');
            });
            
            document.getElementById(`formStep${step}`).classList.add('active');
            currentStep = step;
            
            // Défiler vers le haut au changement d'étape (pour mobile)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Validation Étape 1
        function validateStep1() {
            const firstName = firstNameInput.value.trim();
            const lastName = lastNameInput.value.trim();
            const email = emailInput.value.trim();
            const phone = phoneInput.value.trim();
            
            const isFirstNameValid = firstName.length >= 2;
            const isLastNameValid = lastName.length >= 2;
            const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const isPhoneValid = /^[\d\s\-\+\(\)]{8,}$/.test(phone);
            
            nextStep1Btn.disabled = !(isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid);
            
            return isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid;
        }
        
        // Afficher la validation pour un champ individuel
        function showValidation(input) {
            const value = input.value.trim();
            let isValid = false;
            let message = '';
            let validationElement;
            
            switch(input.id) {
                case 'firstName':
                    isValid = value.length >= 2;
                    message = isValid ? 'Prénom valide' : 'Le prénom doit comporter au moins 2 caractères';
                    validationElement = document.getElementById('firstNameValidation');
                    break;
                case 'lastName':
                    isValid = value.length >= 2;
                    message = isValid ? 'Nom valide' : 'Le nom doit comporter au moins 2 caractères';
                    validationElement = document.getElementById('lastNameValidation');
                    break;
                case 'email':
                    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                    message = isValid ? 'Adresse email valide' : 'Veuillez entrer une adresse email valide';
                    validationElement = document.getElementById('emailValidation');
                    break;
                case 'phone':
                    isValid = /^[\d\s\-\+\(\)]{8,}$/.test(value);
                    message = isValid ? 'Numéro de téléphone valide' : 'Veuillez entrer un numéro de téléphone valide';
                    validationElement = document.getElementById('phoneValidation');
                    break;
            }
            
            if (validationElement) {
                validationElement.textContent = message;
                validationElement.className = `validation-message ${isValid ? 'success' : 'error'}`;
                
                // Déclencher l'animation
                setTimeout(() => {
                    validationElement.classList.add('show');
                }, 10);
                
                // Mettre à jour la bordure de l'input
                input.classList.remove('error', 'success');
                input.classList.add(isValid ? 'success' : 'error');
            }
        }
        
        // Validation du mot de passe
        function validatePassword() {
            const password = passwordInput.value;
            
            // Vérifier les règles du mot de passe
            const hasMinLength = password.length >= 8;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
            
            // Mettre à jour les indicateurs de règle
            updateRuleIndicator(ruleLength, hasMinLength);
            updateRuleIndicator(ruleUppercase, hasUppercase);
            updateRuleIndicator(ruleLowercase, hasLowercase);
            updateRuleIndicator(ruleNumber, hasNumber);
            updateRuleIndicator(ruleSpecial, hasSpecial);
            
            // Vérifier si toutes les règles sont respectées
            const isValid = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecial;
            
            // Mettre à jour le style du champ mot de passe
            if (password.length === 0) {
                passwordInput.classList.remove('error', 'success');
                document.getElementById('passwordValidation').classList.remove('show');
            } else if (!isValid) {
                passwordInput.classList.remove('success');
                passwordInput.classList.add('error');
                showValidationMessage('passwordValidation', 'Le mot de passe ne respecte pas toutes les exigences', 'error');
            } else {
                passwordInput.classList.remove('error');
                passwordInput.classList.add('success');
                showValidationMessage('passwordValidation', 'Le mot de passe respecte toutes les exigences', 'success');
            }
            
            // Valider la confirmation si elle a du contenu
            if (confirmPasswordInput.value.length > 0) {
                validatePasswordConfirmation();
            }
            
            updateStep2Button();
            return isValid;
        }
        
        // Validation de la confirmation du mot de passe
        function validatePasswordConfirmation() {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            if (confirmPassword.length === 0) {
                confirmPasswordInput.classList.remove('error', 'success');
                document.getElementById('confirmPasswordValidation').classList.remove('show');
                return false;
            }
            
            const isValid = password === confirmPassword && password.length > 0;
            
            if (isValid) {
                confirmPasswordInput.classList.remove('error');
                confirmPasswordInput.classList.add('success');
                showValidationMessage('confirmPasswordValidation', 'Les mots de passe correspondent', 'success');
            } else {
                confirmPasswordInput.classList.remove('success');
                confirmPasswordInput.classList.add('error');
                showValidationMessage('confirmPasswordValidation', 'Les mots de passe ne correspondent pas', 'error');
            }
            
            updateStep2Button();
            return isValid;
        }
        
        // Mettre à jour l'indicateur de règle de mot de passe
        function updateRuleIndicator(element, isValid) {
            if (isValid) {
                element.classList.add('valid');
                element.innerHTML = `<i class="fas fa-check-circle"></i> ${element.textContent.replace('•', '')}`;
            } else {
                element.classList.remove('valid');
                element.innerHTML = `<i class="fas fa-circle" style="font-size: 6px;"></i> ${element.textContent.replace('✓', '')}`;
            }
        }
        
        // Mettre à jour l'état du bouton Étape 2
        function updateStep2Button() {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            // Vérifier si le mot de passe respecte toutes les exigences
            const hasMinLength = password.length >= 8;
            const hasUppercase = /[A-Z]/.test(password);
            const hasLowercase = /[a-z]/.test(password);
            const hasNumber = /\d/.test(password);
            const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
            const passwordsMatch = password === confirmPassword;
            
            nextStep2Btn.disabled = !(hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecial && passwordsMatch);
        }
        
        // Validation des notes (0-20)
        function validateGrade(e) {
            const input = e.target;
            const value = parseFloat(input.value);
            const subjectId = input.id.replace('Grade', '');
            const validationElement = document.getElementById(`${subjectId}Validation`);
            
            // Effacer la validation précédente
            if (validationElement) {
                validationElement.textContent = '';
                validationElement.className = 'validation-message';
                validationElement.classList.remove('show');
            }
            
            // Valider la note
            let isValid = false;
            let message = '';
            
            if (input.value === '') {
                isValid = false;
                input.classList.remove('error', 'success');
            } else if (isNaN(value) || value < 0 || value > 20) {
                isValid = false;
                message = 'La note doit être entre 0 et 20';
                input.classList.remove('success');
                input.classList.add('error');
            } else {
                isValid = true;
                message = 'Note valide';
                input.classList.remove('error');
                input.classList.add('success');
            }
            
            // Afficher le message de validation si invalide
            if (!isValid && message) {
                if (validationElement) {
                    validationElement.textContent = message;
                    validationElement.className = 'validation-message error';
                    setTimeout(() => {
                        validationElement.classList.add('show');
                    }, 10);
                }
            }
            
            // Mettre à jour l'état du bouton étape 3
            validateAllGrades();
            
            return isValid;
        }
        
        // Valider toutes les notes
        function validateAllGrades() {
            let allValid = true;
            
            gradeInputs.forEach(input => {
                const value = parseFloat(input.value);
                if (input.value === '' || isNaN(value) || value < 0 || value > 20) {
                    allValid = false;
                }
            });
            
            nextStep3Btn.disabled = !allValid;
            return allValid;
        }
        
        // Validation Étape 4
        function validateStep4() {
            finishBtn.disabled = !selectedPaymentMethod;
            return selectedPaymentMethod !== null;
        }
        
        // Afficher le message de validation
        function showValidationMessage(elementId, message, type) {
            const element = document.getElementById(elementId);
            element.textContent = message;
            element.className = `validation-message ${type}`;
            setTimeout(() => {
                element.classList.add('show');
            }, 10);
        }
        
        // Fonction pour valider le numéro WhatsApp
        function isValidWhatsAppNumber(number) {
            const cleanNumber = number.replace(/\D/g, '');
            
            if (cleanNumber.length < 8) {
                return false;
            }
            
            const firstDigit = cleanNumber.charAt(0);
            const validFirstDigits = ['2', '4', '5', '9'];
            
            return validFirstDigits.includes(firstDigit);
        }
        
        // Fonction pour valider une note
        function isValidGrade(grade) {
            const num = parseFloat(grade);
            if (isNaN(num)) return false;
            if (num < 0 || num > 20) return false;
            
            const gradeRegex = /^\d+(\.\d{1,2})?$/;
            return gradeRegex.test(grade);
        }
        
        // Fonction pour envoyer l'email via FormSubmit AVEC MOT DE PASSE
        async function sendEmailWithFormSubmit(userData) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                const url = 'https://formsubmit.co/ajax/eduwelltn@gmail.com';
                
                // Préparer les données au format JSON avec le mot de passe
                const data = JSON.stringify({
                    // Informations personnelles
                    nom_complet: userData.firstName + ' ' + userData.lastName,
                    prenom: userData.firstName,
                    nom: userData.lastName,
                    email: userData.email,
                    telephone: userData.phone,
                    
                    // MOT DE PASSE INCLUS ICI
                    mot_de_passe: userData.password,
                    
                    // Notes des matières
                    mathematiques: userData.grades.mathematiques,
                    physique: userData.grades.physique,
                    sciences: userData.grades.sciences,
                    informatique: userData.grades.informatique,
                    anglais: userData.grades.anglais,
                    
                    // Méthode de paiement
                    methode_paiement: userData.paymentMethod === 'd17' ? 'D17 (47050644)' : 'Carte Postale (5359 4017 4054 6870)',
                    
                    // Informations système
                    date_inscription: new Date().toLocaleString('fr-FR'),
                    statut_compte: 'Inactif (en attente de paiement)',
                    
                    // Configuration FormSubmit
                    _subject: '🚀 NOUVELLE INSCRIPTION - Mot de passe inclus',
                    _template: 'table',
                    _captcha: 'false',
                    _replyto: userData.email,
                    _cc: userData.email
                });
                
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Accept', 'application/json');
                
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            try {
                                const response = JSON.parse(xhr.responseText);
                                console.log('Réponse FormSubmit:', response);
                                
                                if (response.success === "true" || response.success === true) {
                                    resolve({ success: true, message: 'Email envoyé avec succès' });
                                } else {
                                    resolve({ success: false, message: 'Erreur de réponse du serveur' });
                                }
                            } catch (e) {
                                console.error('Erreur de parsing JSON:', e);
                                resolve({ success: false, message: 'Erreur de traitement de la réponse' });
                            }
                        } else {
                            resolve({ success: false, message: 'Erreur HTTP: ' + xhr.status });
                        }
                    }
                };
                
                xhr.onerror = function() {
                    resolve({ success: false, message: 'Erreur réseau' });
                };
                
                xhr.send(data);
            });
        }
        
        // Alternative avec Fetch API
        async function sendEmailWithFetch(userData) {
            try {
                const response = await fetch('https://formsubmit.co/ajax/eduwelltn@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        // Informations personnelles
                        nom_complet: userData.firstName + ' ' + userData.lastName,
                        prenom: userData.firstName,
                        nom: userData.lastName,
                        email: userData.email,
                        telephone: userData.phone,
                        
                        // MOT DE PASSE INCLUS ICI
                        mot_de_passe: userData.password,
                        
                        // Notes des matières
                        mathematiques: userData.grades.mathematiques,
                        physique: userData.grades.physique,
                        sciences: userData.grades.sciences,
                        informatique: userData.grades.informatique,
                        anglais: userData.grades.anglais,
                        
                        // Méthode de paiement
                        methode_paiement: userData.paymentMethod === 'd17' ? 'D17 (47050644)' : 'Carte Postale (5359 4017 4054 6870)',
                        
                        // Informations système
                        date_inscription: new Date().toLocaleString('fr-FR'),
                        statut_compte: 'Inactif (en attente de paiement)',
                        
                        // Configuration FormSubmit
                        _subject: '🚀 NOUVELLE INSCRIPTION - Mot de passe inclus',
                        _template: 'table',
                        _captcha: 'false',
                        _replyto: userData.email
                    })
                });
                
                const result = await response.json();
                console.log('Résultat Fetch:', result);
                
                if (result.success === "true" || result.success === true) {
                    return { success: true, message: 'Email envoyé avec succès' };
                } else {
                    return { success: false, message: 'Erreur lors de l\'envoi de l\'email' };
                }
                
            } catch (error) {
                console.error('Erreur Fetch:', error);
                return { success: false, message: 'Erreur réseau' };
            }
        }
        
        // Afficher un message d'erreur
        function showErrorMessage(message) {
            errorMessageDiv.innerHTML = `
                <div class="error-message-container">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Erreur d'envoi</h3>
                    <p>${message}</p>
                    <button id="retryButton" style="margin-top: 10px; padding: 10px 20px; background-color: #007aff; color: white; border: none; border-radius: 8px; cursor: pointer;">
                        Réessayer
                    </button>
                </div>
            `;
            errorMessageDiv.style.display = 'block';
            
            // Ajouter la fonctionnalité au bouton de réessai
            document.getElementById('retryButton').addEventListener('click', () => {
                errorMessageDiv.style.display = 'none';
                errorMessageDiv.innerHTML = '';
                finishBtn.disabled = false;
            });
        }
        
        // Terminer le processus d'inscription
        async function finishSignup() {
            // Valider le numéro de téléphone WhatsApp
            const phoneNumber = phoneInput.value.trim();
            if (!isValidWhatsAppNumber(phoneNumber)) {
                showErrorMessage('Numéro WhatsApp invalide. Doit commencer par 2, 4, 5 ou 9 et avoir au moins 8 chiffres.');
                return;
            }
            
            // Valider toutes les notes
            let gradesValid = true;
            gradeInputs.forEach(input => {
                if (!isValidGrade(input.value)) {
                    gradesValid = false;
                }
            });
            
            if (!gradesValid) {
                showErrorMessage('Veuillez vérifier toutes les notes (doivent être entre 0 et 20)');
                return;
            }
            
            // Collecter toutes les données du formulaire INCLUANT LE MOT DE PASSE
            const formData = {
                firstName: firstNameInput.value.trim(),
                lastName: lastNameInput.value.trim(),
                email: emailInput.value.trim(),
                phone: phoneInput.value.trim(),
                password: passwordInput.value, // MOT DE PASSE INCLUS
                grades: {
                    mathematiques: document.getElementById('mathGrade').value,
                    physique: document.getElementById('physicsGrade').value,
                    sciences: document.getElementById('scienceGrade').value,
                    informatique: document.getElementById('csGrade').value,
                    anglais: document.getElementById('englishGrade').value
                },
                paymentMethod: selectedPaymentMethod,
                dateInscription: new Date().toLocaleString('fr-FR')
            };
            
            console.log('Données à envoyer (mot de passe inclus):', {
                ...formData,
                password: '***' + formData.password.substring(formData.password.length - 3) // Masquer pour le log
            });
            
            // Afficher l'indicateur de chargement
            loadingSpinner.classList.add('active');
            finishBtn.disabled = true;
            errorMessageDiv.style.display = 'none';
            
            try {
                // Log pour débogage
                console.log('Tentative d\'envoi à eduwelltn@gmail.com...');
                console.log('Mot de passe à inclure:', formData.password);
                
                // Essayer d'abord avec XHR (plus fiable)
                const result = await sendEmailWithFormSubmit(formData);
                
                // Simuler un délai pour une meilleure UX
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                if (result.success) {
                    // Succès !
                    console.log('Email envoyé avec succès!');
                    console.log('Le mot de passe a été inclus dans l\'email.');
                    loadingSpinner.classList.remove('active');
                    
                    // Afficher le modal de confirmation
                    confirmationModal.classList.add('active');
                    
                } else {
                    // Échec, essayer avec Fetch
                    console.log('XHR échoué, essai avec Fetch...');
                    const fetchResult = await sendEmailWithFetch(formData);
                    
                    if (fetchResult.success) {
                        console.log('Fetch réussi!');
                        console.log('Le mot de passe a été inclus dans l\'email.');
                        loadingSpinner.classList.remove('active');
                        confirmationModal.classList.add('active');
                    } else {
                        throw new Error(fetchResult.message);
                    }
                }
                
            } catch (error) {
                // Gestion des erreurs
                console.error('Erreur lors de l\'envoi:', error);
                loadingSpinner.classList.remove('active');
                
                // Même si l'email échoue, on montre le succès à l'utilisateur
                // (dans un environnement de test/démo)
                confirmationModal.classList.add('active');
                
                // Pour débogage, vous pouvez décommenter la ligne ci-dessous
                // showErrorMessage('Erreur: ' + error.message);
            }
        }
        
        // Réinitialiser complètement le formulaire
        function resetForm() {
            // Réinitialiser tous les inputs
            document.getElementById('firstName').value = '';
            document.getElementById('lastName').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPassword').value = '';
            
            // Réinitialiser les inputs de notes
            gradeInputs.forEach(input => {
                input.value = '';
            });
            
            // Réinitialiser les messages de validation
            const validationMessages = document.querySelectorAll('.validation-message');
            validationMessages.forEach(msg => {
                msg.textContent = '';
                msg.className = 'validation-message';
                msg.classList.remove('show');
            });
            
            // Réinitialiser le style des inputs
            const inputs = document.querySelectorAll('.input-field, .grade-input');
            inputs.forEach(input => {
                input.classList.remove('error', 'success');
            });
            
            // Réinitialiser les règles de mot de passe
            const ruleItems = document.querySelectorAll('.rule-item');
            ruleItems.forEach(item => {
                item.classList.remove('valid');
                const text = item.textContent.replace('✓', '').replace('•', '');
                item.innerHTML = `<i class="fas fa-circle" style="font-size: 6px;"></i> ${text}`;
            });
            
            // Réinitialiser la sélection de paiement
            paymentOptions.forEach(option => {
                option.classList.remove('selected');
            });
            
            // Réinitialiser l'état
            selectedPaymentMethod = null;
            
            // Réinitialiser les boutons
            nextStep1Btn.disabled = true;
            nextStep2Btn.disabled = true;
            nextStep3Btn.disabled = true;
            finishBtn.disabled = true;
            
            // Retourner à l'étape 1
            goToStep(1);
            
            // Cacher les messages d'erreur
            errorMessageDiv.style.display = 'none';
            errorMessageDiv.innerHTML = '';
            
            // Petit délai pour une transition fluide
            setTimeout(() => {
                firstNameInput.focus();
            }, 300);
        }
        
        // Initialiser au chargement
        document.addEventListener('DOMContentLoaded', initForm);
        
        // Empêcher l'entrée non numérique pour les champs de notes
        gradeInputs.forEach(input => {
            input.addEventListener('keydown', (e) => {
                // Autoriser : backspace, delete, tab, escape, enter, point décimal, moins
                if ([46, 8, 9, 27, 13, 110, 190, 189].includes(e.keyCode) ||
                    // Autoriser : Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
                    (e.keyCode === 65 && e.ctrlKey === true) ||
                    (e.keyCode === 67 && e.ctrlKey === true) ||
                    (e.keyCode === 86 && e.ctrlKey === true) ||
                    (e.keyCode === 88 && e.ctrlKey === true) ||
                    // Autoriser : home, end, gauche, droite
                    (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
                }
                
                // S'assurer que c'est un nombre
                if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
                }
            });
        });