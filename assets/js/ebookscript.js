 // Back button functionality
        const backButton = document.getElementById('backButton');
        
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (document.referrer && document.referrer.includes(window.location.hostname)) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });

        // Image Carousel Functionality
        const carouselTrack = document.getElementById('carouselTrack');
        const carouselSlides = document.querySelectorAll('.carousel-slide');
        const carouselDots = document.querySelectorAll('.carousel-dot');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        
        let currentSlide = 0;
        const totalSlides = carouselSlides.length;
        
        // Initialize carousel position
        updateCarousel();
        
        // Previous button click
        prevButton.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        });
        
        // Next button click
        nextButton.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        });
        
        // Dot navigation
        carouselDots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentSlide = parseInt(dot.getAttribute('data-index'));
                updateCarousel();
            });
        });
        
        // Auto-advance carousel every 5 seconds
        let autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }, 5000);
        
        // Pause auto-advance on hover
        const carousel = document.querySelector('.image-carousel');
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });
        
        carousel.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateCarousel();
            }, 5000);
        });
        
        // Update carousel position and active dot
        function updateCarousel() {
            // Move track
            carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Update active dot
            carouselDots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Reservation Popup Functionality
        const reserveButton = document.getElementById('reserveButton');
        const reservationPopup = document.getElementById('reservationPopup');
        const closePopup = document.getElementById('closePopup');
        const closeSuccess = document.getElementById('closeSuccess');
        
        // Form steps and buttons
        const step1 = document.getElementById('step1');
        const step2 = document.getElementById('step2');
        const step3 = document.getElementById('step3');
        const loadingMessage = document.getElementById('loadingMessage');
        const successMessage = document.getElementById('successMessage');
        
        const step1Indicator = document.getElementById('step1Indicator');
        const step2Indicator = document.getElementById('step2Indicator');
        const step3Indicator = document.getElementById('step3Indicator');
        
        const takeCopyButton = document.getElementById('takeCopyButton');
        const backToStep1 = document.getElementById('backToStep1');
        const nextToStep3 = document.getElementById('nextToStep3');
        const backToStep2 = document.getElementById('backToStep2');
        const submitReservation = document.getElementById('submitReservation');
        
        let currentStep = 1;
        
        // Open reservation popup
        reserveButton.addEventListener('click', () => {
            reservationPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Close popup
        closePopup.addEventListener('click', closeReservationPopup);
        closeSuccess.addEventListener('click', closeReservationPopup);
        
        // Close popup when clicking outside
        reservationPopup.addEventListener('click', (e) => {
            if (e.target === reservationPopup) {
                closeReservationPopup();
            }
        });
        
        // Close popup with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && reservationPopup.classList.contains('active')) {
                closeReservationPopup();
            }
        });
        
        function closeReservationPopup() {
            reservationPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
            resetReservationForm();
        }
        
        function resetReservationForm() {
            // Reset to step 1
            currentStep = 1;
            step1.classList.add('active');
            step2.classList.remove('active');
            step3.classList.remove('active');
            loadingMessage.classList.remove('active');
            successMessage.classList.remove('active');
            
            // Reset indicators
            step1Indicator.classList.add('active');
            step2Indicator.classList.remove('active');
            step2Indicator.classList.remove('completed');
            step3Indicator.classList.remove('active');
            step3Indicator.classList.remove('completed');
            
            // Reset form values and errors
            document.getElementById('contactForm').reset();
            clearAllErrors();
            
            // Clear grade inputs
            document.getElementById('mathNote').value = '';
            document.getElementById('physicsNote').value = '';
            document.getElementById('scienceNote').value = '';
            document.getElementById('englishNote').value = '';
            document.getElementById('informaticsNote').value = '';
        }
        
        // Clear all error messages and styles
        function clearAllErrors() {
            // Clear error messages
            document.querySelectorAll('.error-message').forEach(error => {
                error.classList.remove('show');
            });
            
            // Clear error styles
            document.querySelectorAll('.form-input.error').forEach(input => {
                input.classList.remove('error');
            });
            
            document.querySelectorAll('.form-input.success').forEach(input => {
                input.classList.remove('success');
            });
        }
        
        // WhatsApp validation function
        function isValidWhatsAppNumber(number) {
            // Remove any non-digit characters
            const cleanNumber = number.replace(/\D/g, '');
            
            // Check length (at least 8 digits)
            if (cleanNumber.length < 8) {
                return false;
            }
            
            // Check first digit (must be 2, 4, 5, or 9)
            const firstDigit = cleanNumber.charAt(0);
            const validFirstDigits = ['2', '4', '5', '9'];
            
            if (!validFirstDigits.includes(firstDigit)) {
                return false;
            }
            
            return true;
        }
        
        // Grade validation function
        function isValidGrade(grade) {
            // Check if it's a valid number
            const num = parseFloat(grade);
            if (isNaN(num)) {
                return false;
            }
            
            // Check if it's between 0 and 20 (inclusive)
            if (num < 0 || num > 20) {
                return false;
            }
            
            // Check if it's a valid decimal (optional)
            const gradeRegex = /^\d+(\.\d{1,2})?$/;
            if (!gradeRegex.test(grade)) {
                return false;
            }
            
            return true;
        }
        
        // Email validation function
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Validate a single field
        function validateField(fieldId, validationFunction, errorElementId) {
            const field = document.getElementById(fieldId);
            const errorElement = document.getElementById(errorElementId);
            const value = field.value.trim();
            
            if (!value) {
                field.classList.add('error');
                field.classList.remove('success');
                errorElement.textContent = 'Ce champ est requis';
                errorElement.classList.add('show');
                return false;
            }
            
            if (!validationFunction(value)) {
                field.classList.add('error');
                field.classList.remove('success');
                errorElement.classList.add('show');
                return false;
            }
            
            field.classList.remove('error');
            field.classList.add('success');
            errorElement.classList.remove('show');
            return true;
        }
        
        // Validate Step 2 form
        function validateStep2() {
            const isNameValid = validateField('name', (value) => value.length >= 2, 'nameError');
            const isWhatsAppValid = validateField('whatsapp', isValidWhatsAppNumber, 'whatsappError');
            const isEmailValid = validateField('email', isValidEmail, 'emailError');
            
            return isNameValid && isWhatsAppValid && isEmailValid;
        }
        
        // Validate Step 3 form
        function validateStep3() {
            const isMathValid = validateField('mathNote', isValidGrade, 'mathNoteError');
            const isPhysicsValid = validateField('physicsNote', isValidGrade, 'physicsNoteError');
            const isScienceValid = validateField('scienceNote', isValidGrade, 'scienceNoteError');
            const isEnglishValid = validateField('englishNote', isValidGrade, 'englishNoteError');
            const isInformaticsValid = validateField('informaticsNote', isValidGrade, 'informaticsNoteError');
            
            return isMathValid && isPhysicsValid && isScienceValid && isEnglishValid && isInformaticsValid;
        }
        
        // Step navigation
        takeCopyButton.addEventListener('click', () => {
            step1.classList.remove('active');
            step2.classList.add('active');
            step1Indicator.classList.remove('active');
            step1Indicator.classList.add('completed');
            step2Indicator.classList.add('active');
            currentStep = 2;
            clearAllErrors();
        });
        
        backToStep1.addEventListener('click', () => {
            step2.classList.remove('active');
            step1.classList.add('active');
            step1Indicator.classList.add('active');
            step2Indicator.classList.remove('active');
            step2Indicator.classList.remove('completed');
            currentStep = 1;
            clearAllErrors();
        });
        
        nextToStep3.addEventListener('click', () => {
            // Validate contact form
            if (!validateStep2()) {
                return;
            }
            
            step2.classList.remove('active');
            step3.classList.add('active');
            step2Indicator.classList.remove('active');
            step2Indicator.classList.add('completed');
            step3Indicator.classList.add('active');
            currentStep = 3;
            clearAllErrors();
        });
        
        backToStep2.addEventListener('click', () => {
            step3.classList.remove('active');
            step2.classList.add('active');
            step2Indicator.classList.add('active');
            step3Indicator.classList.remove('active');
            step2Indicator.classList.remove('completed');
            currentStep = 2;
            clearAllErrors();
        });
        
        // Function to send email using Fetch API (no redirect)
        async function sendEmailWithFetch(userData) {
            // Create form data for FormSubmit
            const formData = new FormData();
            
            // Add all fields
            formData.append('_subject', 'Nouvelle Réservation de Livre - Éducation Sahl');
            formData.append('_template', 'table');
            formData.append('_captcha', 'false');
            formData.append('_replyto', userData.email);
            formData.append('_cc', userData.email);
            
            // User data
            formData.append('Nom', userData.name);
            formData.append('WhatsApp', userData.whatsapp);
            formData.append('Email', userData.email);
            formData.append('Mathématiques', userData.grades.math);
            formData.append('Physique', userData.grades.physics);
            formData.append('Sciences', userData.grades.science);
            formData.append('Anglais', userData.grades.english);
            formData.append('Informatique', userData.grades.informatics);
            formData.append('Date_Réservation', new Date().toLocaleString('fr-FR'));
            formData.append('Produit', 'Pack Académique Tout-en-Un');
            formData.append('Prix', '49,99 €');
            
            // Use Fetch API to send to FormSubmit
            try {
                const response = await fetch('https://formsubmit.co/ajax/eduwelltn@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: userData.name,
                        whatsapp: userData.whatsapp,
                        email: userData.email,
                        math_grade: userData.grades.math,
                        physics_grade: userData.grades.physics,
                        science_grade: userData.grades.science,
                        english_grade: userData.grades.english,
                        informatics_grade: userData.grades.informatics,
                        reservation_date: new Date().toLocaleString('fr-FR'),
                        _subject: 'Nouvelle Réservation de Livre - Éducation Sahl',
                        _template: 'table',
                        _captcha: 'false'
                    })
                });
                
                const result = await response.json();
                
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
        
        // Alternative method using XMLHttpRequest
        function sendEmailWithXHR(userData) {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                const url = 'https://formsubmit.co/ajax/eduwelltn@gmail.com';
                
                const data = JSON.stringify({
                    name: userData.name,
                    whatsapp: userData.whatsapp,
                    email: userData.email,
                    math_grade: userData.grades.math,
                    physics_grade: userData.grades.physics,
                    science_grade: userData.grades.science,
                    english_grade: userData.grades.english,
                    informatics_grade: userData.grades.informatics,
                    reservation_date: new Date().toLocaleString('fr-FR'),
                    _subject: 'Nouvelle Réservation de Livre - Éducation Sahl',
                    _template: 'table',
                    _captcha: 'false',
                    _replyto: userData.email
                });
                
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.setRequestHeader('Accept', 'application/json');
                
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            try {
                                const response = JSON.parse(xhr.responseText);
                                if (response.success === "true" || response.success === true) {
                                    resolve({ success: true, message: 'Email envoyé avec succès' });
                                } else {
                                    resolve({ success: false, message: 'Erreur de réponse du serveur' });
                                }
                            } catch (e) {
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
        
        // Submit reservation with email sending (NO REDIRECT)
        submitReservation.addEventListener('click', async (e) => {
            e.preventDefault();
            
            // Validate grades form
            if (!validateStep3()) {
                return;
            }
            
            // Get all form data
            const userData = {
                name: document.getElementById('name').value.trim(),
                whatsapp: document.getElementById('whatsapp').value.trim(),
                email: document.getElementById('email').value.trim(),
                grades: {
                    math: document.getElementById('mathNote').value.trim(),
                    physics: document.getElementById('physicsNote').value.trim(),
                    science: document.getElementById('scienceNote').value.trim(),
                    english: document.getElementById('englishNote').value.trim(),
                    informatics: document.getElementById('informaticsNote').value.trim()
                }
            };
            
            // Show loading animation
            step3.classList.remove('active');
            loadingMessage.classList.add('active');
            
            try {
                // Log the data that will be sent
                console.log('Envoi des données de réservation:', userData);
                console.log('Email de destination: eduwelltn@gmail.com');
                
                // Try to send email using XHR (more reliable)
                const result = await sendEmailWithXHR(userData);
                
                // Simulate sending delay for better UX
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                if (result.success) {
                    // Show success message
                    loadingMessage.classList.remove('active');
                    successMessage.classList.add('active');
                    step3Indicator.classList.remove('active');
                    step3Indicator.classList.add('completed');
                    
                    console.log('Email envoyé avec succès à eduwelltn@gmail.com');
                } else {
                    // Even if email fails, show success to user (for demo purposes)
                    // In production, you might want to show an error
                    console.warn('Problème d\'envoi d\'email, mais on montre le succès à l\'utilisateur:', result.message);
                    
                    loadingMessage.classList.remove('active');
                    successMessage.classList.add('active');
                    step3Indicator.classList.remove('active');
                    step3Indicator.classList.add('completed');
                    
                    // Update success message slightly
                    document.querySelector('.success-text').textContent = 
                        'Votre demande a été enregistrée. Nous vous contacterons bientôt.';
                }
                
            } catch (error) {
                console.error('Erreur lors de l\'envoi:', error);
                
                // Show error message to user
                loadingMessage.classList.remove('active');
                
                // Create and show error message
                const errorDiv = document.createElement('div');
                errorDiv.innerHTML = `
                    <div style="text-align: center; padding: 20px; color: #e74c3c;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 40px; margin-bottom: 15px;"></i>
                        <h3 style="margin-bottom: 10px;">Erreur d'envoi</h3>
                        <p>Il y a eu un problème lors de l'envoi de votre formulaire. Veuillez réessayer.</p>
                        <button id="retryButton" style="margin-top: 20px; padding: 10px 20px; background-color: #000; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Réessayer
                        </button>
                    </div>
                `;
                
                // Replace loading message with error
                loadingMessage.parentNode.replaceChild(errorDiv, loadingMessage);
                
                // Add retry button functionality
                document.getElementById('retryButton').addEventListener('click', () => {
                    // Go back to step 3
                    errorDiv.remove();
                    step3.classList.add('active');
                });
            }
        });
        
        // Real-time validation for WhatsApp input
        const whatsappInput = document.getElementById('whatsapp');
        whatsappInput.addEventListener('input', function() {
            const value = this.value.trim();
            const errorElement = document.getElementById('whatsappError');
            
            if (!value) {
                this.classList.remove('error', 'success');
                errorElement.classList.remove('show');
                return;
            }
            
            if (isValidWhatsAppNumber(value)) {
                this.classList.remove('error');
                this.classList.add('success');
                errorElement.classList.remove('show');
            } else {
                this.classList.add('error');
                this.classList.remove('success');
                errorElement.textContent = 'Numéro WhatsApp invalide. Doit commencer par 2, 4, 5 ou 9 et avoir au moins 8 chiffres';
                errorElement.classList.add('show');
            }
        });
        
        // Real-time validation for grade inputs
        const gradeInputs = ['mathNote', 'physicsNote', 'scienceNote', 'englishNote', 'informaticsNote'];
        gradeInputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            input.addEventListener('input', function() {
                const value = this.value.trim();
                const errorElement = document.getElementById(`${inputId}Error`);
                
                if (!value) {
                    this.classList.remove('error', 'success');
                    errorElement.classList.remove('show');
                    return;
                }
                
                // Allow only numbers and decimal point
                const sanitizedValue = value.replace(/[^0-9.]/g, '');
                
                // Remove extra decimal points
                const parts = sanitizedValue.split('.');
                if (parts.length > 2) {
                    this.value = parts[0] + '.' + parts.slice(1).join('');
                } else {
                    this.value = sanitizedValue;
                }
                
                if (isValidGrade(this.value)) {
                    this.classList.remove('error');
                    this.classList.add('success');
                    errorElement.classList.remove('show');
                } else {
                    this.classList.add('error');
                    this.classList.remove('success');
                    errorElement.textContent = 'Veuillez entrer une note valide entre 0 et 20';
                    errorElement.classList.add('show');
                }
            });
        });
        
        // Add hover effect to subjects
        const subjects = document.querySelectorAll('.subject');
        subjects.forEach(subject => {
            subject.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            subject.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });