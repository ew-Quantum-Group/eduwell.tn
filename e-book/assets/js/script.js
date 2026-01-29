
    // ==================== CONFIGURATION ====================
    const GOOGLE_DRIVE_LINK = 'https://drive.google.com/drive/folders/1-d-iLHxrV60r37VSuU8BVptMhYG3a-nb';
    const CREATE_ACCOUNT_LINK = '../inscrire.html'; // ← CORRIGÉ: Lien pour créer un compte
    
   
    
    // ==================== DOM ELEMENTS ====================
    const landingPage = document.getElementById('landingPage');
    const websiteContent = document.getElementById('websiteContent');
    const enterButton = document.getElementById('enterButton');
    
    // Main website elements
    const itemsGrid = document.getElementById('itemsGrid');
    const categoryTabs = document.getElementById('categoryTabs');
    const accessButton = document.getElementById('accessButton');
    
    // Modal elements
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalActionButton = document.getElementById('modalActionButton');
    const modalClose = document.getElementById('modalClose');
    
    // Email verification modal elements
    const emailVerificationModalOverlay = document.getElementById('emailVerificationModalOverlay');
    const emailVerificationModalClose = document.getElementById('emailVerificationModalClose');
    const emailVerificationTitle = document.getElementById('emailVerificationTitle');
    const emailVerificationDescription = document.getElementById('emailVerificationDescription');
    const emailVerificationForm = document.getElementById('emailVerificationForm');
    const emailInput = document.getElementById('emailInput');
    const emailErrorMessage = document.getElementById('emailErrorMessage');
    const successMessage = document.getElementById('successMessage');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const verifyButton = document.getElementById('verifyButton');
    const accessHelpButton = document.getElementById('accessHelpButton');
    const accessHelpContent = document.getElementById('accessHelpContent');
    const createAccountButton = document.getElementById('createAccountButton');
    const emailVerificationContent = document.getElementById('emailVerificationContent');
    
    // ==================== SECURITY FEATURES ====================
    // Block right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Block keyboard shortcuts for dev tools
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });
    
    // ==================== LANDING PAGE ====================
    window.addEventListener('load', function() {
        landingPage.classList.remove('hidden');
        websiteContent.classList.remove('visible');
        document.body.style.overflow = 'hidden';
    });
    
    enterButton.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = '', 150);
        
        landingPage.classList.add('hidden');
        
        setTimeout(() => {
            websiteContent.classList.add('visible');
            document.body.style.overflow = 'auto';
            initializeMainWebsite();
        }, 800);
    });
    
    // ==================== DATA ====================
const folderItems = [
    // Math Category
    { id: 1, title: "Mathématiques - Cours", description: "Cours complets de la bibliothèque numérique", category: "math", icon: "fa-solid fa-square-root-variable", color: "var(--math-color)" },
    { id: 2, title: "Mathématiques - Exercices", description: "Collection Réo, Pilote et sujets Bac", category: "math", icon: "fa-solid fa-border-all", color: "var(--math-color)" },
    { id: 3, title: "Mathématiques - Fiches", description: "Fiches méthodologiques et résumés", category: "math", icon: "fa-solid fa-chart-line", color: "var(--math-color)" },
    
    // Physics Category
    { id: 4, title: "Physique - Cours", description: "Cours détaillés de la bibliothèque", category: "physics", icon: "fa-solid fa-atom", color: "var(--physics-color)" },
    { id: 5, title: "Physique - Exercices", description: "Séries Pilote Sfax et Réo Mars", category: "physics", icon: "fa-solid fa-bolt", color: "var(--physics-color)" },
    { id: 6, title: "Physique - Fiches", description: "Fiches de synthèse et analyse", category: "physics", icon: "fa-solid fa-wave-square", color: "var(--physics-color)" },
    
    // Science Category
    { id: 7, title: "Sciences - Cours", description: "Cours SVT et Chimie complets", category: "science", icon: "fa-solid fa-flask", color: "var(--science-color)" },
    { id: 8, title: "Sciences - Exercices", description: "Exercices et devoirs corrigés", category: "science", icon: "fa-solid fa-dna", color: "var(--science-color)" },
    { id: 9, title: "Sciences - Fiches", description: "Résumés et fiches méthodologiques", category: "science", icon: "fa-solid fa-globe", color: "var(--science-color)" },
    
    // English Category
    { id: 10, title: "Anglais - Cours", description: "Cours structurés de grammaire", category: "english", icon: "fa-solid fa-book-open", color: "var(--english-color)" },
    { id: 11, title: "Anglais - Exercices", description: "Pratique écrite et orale", category: "english", icon: "fa-solid fa-pen-fancy", color: "var(--english-color)" },
    { id: 12, title: "Anglais - Fiches", description: "Guides et mémentos de vocabulaire", category: "english", icon: "fa-solid fa-language", color: "var(--english-color)" },
    
    // Computer Science Category
    { id: 13, title: "Informatique - Cours", description: "Cours d'algorithmes et programmation", category: "cs", icon: "fa-solid fa-diagram-project", color: "var(--cs-color)" },
    { id: 14, title: "Informatique - Exercices", description: "Problèmes pratiques et TP", category: "cs", icon: "fa-solid fa-code", color: "var(--cs-color)" },
    { id: 15, title: "Informatique - Fiches", description: "Résumés des concepts clés", category: "cs", icon: "fa-solid fa-robot", color: "var(--cs-color)" }
];
    
    const categories = {
        "math": { name: "Mathématiques", color: "var(--math-color)", icon: "fa-solid fa-calculator" },
        "physics": { name: "Physique", color: "var(--physics-color)", icon: "fa-solid fa-atom" },
        "science": { name: "Sciences", color: "var(--science-color)", icon: "fa-solid fa-flask" },
        "english": { name: "Anglais", color: "var(--english-color)", icon: "fa-solid fa-book-open" },
        "cs": { name: "Informatique", color: "var(--cs-color)", icon: "fa-solid fa-laptop-code" }
    };
    
    // ==================== STATE VARIABLES ====================
    let currentCategory = 'all';
    let pendingRedirectUrl = null;
    let pendingResourceTitle = null;
    
    // ==================== HELPER FUNCTIONS ====================
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showError(message) {
        emailErrorMessage.textContent = message;
        emailErrorMessage.classList.add('visible');
        successMessage.classList.remove('visible');
        emailInput.style.borderColor = 'var(--apple-red)';
        emailInput.style.boxShadow = '0 0 0 4px rgba(255, 55, 95, 0.1)';
    }
    
    function showSuccess(message) {
        successMessage.textContent = message;
        successMessage.classList.add('visible');
        emailErrorMessage.classList.remove('visible');
        emailInput.style.borderColor = 'var(--apple-green)';
        emailInput.style.boxShadow = '0 0 0 4px rgba(48, 209, 88, 0.1)';
    }
    
    function resetInputStyles() {
        emailInput.style.borderColor = '';
        emailInput.style.boxShadow = '';
        emailErrorMessage.classList.remove('visible');
        successMessage.classList.remove('visible');
    }
    
    function showLoading() {
        loadingSpinner.style.display = 'block';
        verifyButton.disabled = true;
        verifyButton.innerHTML = 'Vérification en cours...';
    }
    
    function hideLoading() {
        loadingSpinner.style.display = 'none';
        verifyButton.disabled = false;
        verifyButton.innerHTML = 'Vérifier l\'accès <span class="button-icon">→</span>';
    }
    
    // ==================== EMAIL VERIFICATION ====================
    function setupEmailVerification() {
        emailVerificationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const email = emailInput.value.trim().toLowerCase();
            
            // Reset states
            resetInputStyles();
            accessHelpButton.style.display = 'none';
            
            // Basic validation
            if (!email) {
                showError("Veuillez entrer une adresse email.");
                return;
            }
            
            if (!isValidEmail(email)) {
                showError("Veuillez entrer une adresse email valide.");
                return;
            }
            
            // Show loading
            showLoading();
            
            // Simulate network delay
            setTimeout(() => {
                // Check if email is authorized
                if (authorizedEmails.includes(email)) {
                    // Email is authorized
                    showSuccess("Email vérifié! Redirection en cours...");
                    
                    // Wait a moment, then redirect to Google Drive
                    setTimeout(() => {
                        hideLoading();
                        closeEmailVerificationModal();
                        // REDIRECT TO GOOGLE DRIVE (pour les emails autorisés)
                        window.location.href = pendingRedirectUrl || GOOGLE_DRIVE_LINK;
                    }, 1500);
                } else {
                    // Email not authorized
                    hideLoading();
                    showError("Email non reconnu. L'accès est restreint.");
                    accessHelpButton.style.display = 'inline-flex';
                }
            }, 1000);
        });
        
        // Reset input styles when user starts typing
        emailInput.addEventListener('input', resetInputStyles);
        
        // Access Help Button
        accessHelpButton.addEventListener('click', function() {
            emailVerificationContent.style.display = 'none';
            accessHelpContent.style.display = 'block';
            createAccountButton.style.display = 'flex';
        });
        
        // Create Account Button - CORRIGÉ: redirige vers ./inscript.html
        createAccountButton.addEventListener('click', function() {
            window.location.href = CREATE_ACCOUNT_LINK; // ← Utilise le lien de création de compte
        });
        
        // Close email verification modal
        emailVerificationModalClose.addEventListener('click', closeEmailVerificationModal);
        emailVerificationModalOverlay.addEventListener('click', function(e) {
            if (e.target === emailVerificationModalOverlay) {
                closeEmailVerificationModal();
            }
        });
    }
    
    // ==================== MODAL FUNCTIONS ====================
    function openEmailVerificationModal(resourceName, redirectUrl) {
        pendingRedirectUrl = redirectUrl || GOOGLE_DRIVE_LINK;
        pendingResourceTitle = resourceName;
        
        // Reset form
        emailInput.value = '';
        resetInputStyles();
        accessHelpButton.style.display = 'none';
        accessHelpContent.style.display = 'none';
        createAccountButton.style.display = 'none';
        emailVerificationContent.style.display = 'block';
        hideLoading();
        
        // Update content
        emailVerificationTitle.textContent = `Accéder à ${resourceName}`;
        emailVerificationDescription.textContent = `Veuillez entrer votre adresse email pour accéder à ${resourceName}.`;
        
        // Open modal
        emailVerificationModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus on input
        setTimeout(() => emailInput.focus(), 300);
    }
    
    function closeEmailVerificationModal() {
        emailVerificationModalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        pendingRedirectUrl = null;
        pendingResourceTitle = null;
    }
    
    function openModal() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // ==================== MAIN WEBSITE FUNCTIONS ====================
    function generateFolderItems(category = 'all') {
        itemsGrid.innerHTML = '';
        
        const filteredItems = category === 'all' 
            ? folderItems 
            : folderItems.filter(item => item.category === category);
        
        filteredItems.forEach(item => {
            const categoryName = categories[item.category].name;
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <div class="item-category" style="background: ${item.color}">${categoryName}</div>
                <div class="item-icon" style="background: ${item.color}">
                    <i class="${item.icon}"></i>
                </div>
                <h3 class="item-title">${item.title}</h3>
                <p class="item-description">${item.description}</p>
            `;
            
            itemCard.addEventListener('click', () => openItemModal(item));
            itemsGrid.appendChild(itemCard);
        });
    }
    
    function openItemModal(item) {
        const categoryInfo = categories[item.category];
        
        modalTitle.textContent = item.title;
        modalContent.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 16px; background: #f5f5f7; border-radius: 14px;">
                <div style="width: 50px; height: 50px; background: ${item.color}; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; color: white; font-size: 22px;">
                    <i class="${item.icon}"></i>
                </div>
                <div>
                    <div style="font-weight: 600; font-size: 15px; margin-bottom: 4px;">${categoryInfo.name}</div>
                    <div style="font-size: 14px; color: var(--apple-text-tertiary);">${item.description}</div>
                </div>
            </div>
                   <p>Collection complète pour le Bac Sciences : cours, séries d'exercices (Pilote, Réo, Bac), corrigés, fiches méthode et résumés. Tout pour réussir.</p>
        `;
        
        modalActionButton.innerHTML = `Ouvrir ${item.title} <span class="button-icon">↗</span>`;
        modalActionButton.style.background = item.color;
        
        modalActionButton.onclick = () => {
            closeModal();
            openEmailVerificationModal(item.title, GOOGLE_DRIVE_LINK);
        };
        
        openModal();
    }
    
    function openCategoryModal(category) {
        const categoryInfo = categories[category];
        const categoryItems = folderItems.filter(item => item.category === category);
        
        modalTitle.textContent = `Ressources ${categoryInfo.name}`;
        modalContent.innerHTML = `
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding: 16px; background: #f5f5f7; border-radius: 14px;">
                <div style="width: 50px; height: 50px; background: ${categoryInfo.color}; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 16px; color: white; font-size: 22px;">
                    <i class="${categoryInfo.icon}"></i>
                </div>
                <div>
                    <div style="font-weight: 600; font-size: 17px; margin-bottom: 4px;">${categoryInfo.name}</div>
                    <div style="font-size: 14px; color: var(--apple-text-tertiary);">${categoryItems.length} ressources principales</div>
                </div>
            </div>
            <p style="margin-bottom: 12px;"><strong>Sujets couverts :</strong></p>
            <ul style="margin-left: 20px; color: var(--apple-text-tertiary);">
                ${categoryItems.map(item => `<li style="margin-bottom: 8px;">${item.title}</li>`).join('')}
            </ul>
        `;
        
        modalActionButton.innerHTML = `Ouvrir ${categoryInfo.name} <span class="button-icon">↗</span>`;
        modalActionButton.style.background = categoryInfo.color;
        
        modalActionButton.onclick = () => {
            closeModal();
            openEmailVerificationModal(`Ressources ${categoryInfo.name}`, GOOGLE_DRIVE_LINK);
        };
        
        openModal();
    }
    
    function openFolderModal() {
        modalTitle.textContent = "Ressources Académiques";
        modalContent.innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 24px;">
                <div style="padding: 16px; background: #f5f5f7; border-radius: 12px; text-align: center;">
                    <div style="font-size: 22px; font-weight: 700; color: var(--apple-text-primary); margin-bottom: 4px;">5</div>
                    <div style="font-size: 13px; color: var(--apple-text-tertiary);">Matières</div>
                </div>
                <div style="padding: 16px; background: #f5f5f7; border-radius: 12px; text-align: center;">
                    <div style="font-size: 22px; font-weight: 700; color: var(--apple-text-primary); margin-bottom: 4px;">18</div>
                    <div style="font-size: 13px; color: var(--apple-text-tertiary);">Ressources</div>
                </div>
                <div style="padding: 16px; background: #f5f5f7; border-radius: 12px; text-align: center;">
                    <div style="font-size: 22px; font-weight: 700; color: var(--apple-text-primary); margin-bottom: 4px;">3428</div>
                    <div style="font-size: 13px; color: var(--apple-text-tertiary);">Fichiers</div>
                </div>
                <div style="padding: 16px; background: #f5f5f7; border-radius: 12px; text-align: center;">
                    <div style="font-size: 22px; font-weight: 700; color: var(--apple-text-primary); margin-bottom: 4px;">9 Go</div>
                    <div style="font-size: 13px; color: var(--apple-text-tertiary);">Taille</div>
                </div>
            </div>
            <p>Des E-books organisés par matière et niveau pour une révision efficace.</p>
        `;
        
        modalActionButton.innerHTML = `Ouvrir la Bibliothèque <span class="button-icon">↗</span>`;
        modalActionButton.style.background = 'var(--apple-blue)';
        
        modalActionButton.onclick = () => {
            closeModal();
            openEmailVerificationModal("Bibliothèque", GOOGLE_DRIVE_LINK);
        };
        
        openModal();
    }
    
    // ==================== INITIALIZATION ====================
    function initializeMainWebsite() {
        // Generate initial items
        generateFolderItems();
        
        // Setup category tabs
        categoryTabs.querySelectorAll('.category-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                categoryTabs.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.dataset.category;
                currentCategory = category;
                
                if (category === 'all') {
                    generateFolderItems();
                } else {
                    generateFolderItems(category);
                    setTimeout(() => openCategoryModal(category), 50);
                }
            });
        });
        
        // Setup main buttons
        accessButton.addEventListener('click', openFolderModal);
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeModal();
        });
        
        // Setup email verification
        setupEmailVerification();
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (modalOverlay.classList.contains('active')) closeModal();
                if (emailVerificationModalOverlay.classList.contains('active')) closeEmailVerificationModal();
            }
            if (e.ctrlKey && e.key === 'Enter' && emailVerificationModalOverlay.classList.contains('active')) {
                emailVerificationForm.dispatchEvent(new Event('submit'));
            }
        });
    }
