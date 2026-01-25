 // ============================
        // DATA MODELS
        // ============================
        const subjects = [
           
            { 
                id: 2, 
                name: "Physique", 
                icon: "fas fa-atom", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-green)",
                progress: 72,
                videos: 18
            },
           
            { 
                id: 4, 
                name: "Chimie", 
                icon: "fas fa-flask", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-orange)",
                progress: 68,
                videos: 15
            },
            { 
                id: 5, 
                name: "Biologie", 
                icon: "fas fa-dna", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-blue)",
                progress: 79,
                videos: 21
            },
            { 
                id: 6, 
                name: "Anglais", 
                icon: "fas fa-book", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-green)",
                progress: 88,
                videos: 12
            },
            
        ];

        const videos = [
            {
                id: 1,
                title: "Introduction au Machine Learning",
                description: "Apprenez les bases des algorithmes de ML et leurs applications pratiques dans la technologie moderne.",
                duration: "45:32",
                instructor: "Dr. Sarah Chen",
                date: "2024-03-15",
                views: "2.4K",
                subject: "Informatique",
                source: "youtube",
                sourceId: "RBSGKlAvoiM",
                isNew: true,
                isFeatured: true
            },
            {
                id: 2,
                title: "Calcul Différentiel Avancé",
                description: "Dérivées partielles, gradients et applications en physique.",
                duration: "38:45",
               
                date: "2024-03-12",
                views: "1.8K",
                subject: "Mathématiques",
                source: "youtube",
                sourceId: "WUvTyaaNkzM",
                isNew: false,
                isFeatured: true
            },
            {
                id: 22,
                title: "Calcuhl Différentiel Avancé",
                description: "Dérivées partielles, gradients et applications en physique.",
                duration: "38:45",
               
                date: "2024-03-12",
                views: "1.8K",
                subject: "Mathématiques",
                source: "youtube",
                sourceId: "WUvTyaaNkzM",
                isNew: false,
                isFeatured: true
            },
            {
                id: 3,
                title: "Introduction à la Physique Quantique",
                description: "Comprendre les principes fondamentaux de la mécanique quantique.",
                duration: "52:18",
                instructor: "Dr. Lisa Park",
                date: "2024-03-10",
                views: "3.1K",
                subject: "Physique",
                source: "drive",
                sourceId: "1zWXGkjgYvQO79KkEpzfkA_wHiOTAJGKZ",
                isNew: true,
                isFeatured: true
            },
            {
                id: 4,
                title: "Chimie Organique Avancée",
                description: "Réactions organiques complexes et leurs mécanismes.",
                duration: "41:22",
                instructor: "Dr. Robert Kim",
                date: "2024-03-08",
                views: "1.2K",
                subject: "Chimie",
                source: "youtube",
                sourceId: "Levor9tELhE",
                isNew: false,
                isFeatured: false
            },
            {
                id: 5,
                title: "Biologie Moléculaire",
                description: "Structure et fonction des macromolécules biologiques.",
                duration: "37:45",
                instructor: "Dr. Sarah Chen",
                date: "2024-03-05",
                views: "1.5K",
                subject: "Biologie",
                source: "youtube",
                sourceId: "URUJD5NEXC8",
                isNew: false,
                isFeatured: true
            }
        ];

        // ============================
        // NAVIGATION POPUP CONTENT
        // ============================
        const popupContent = {
            profile: {
                title: "Profil Utilisateur",
                icon: "fas fa-user",
                content: `
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Gestion de Profil</h3>
                        <p style="margin-bottom: var(--space-4); color: var(--gray-700);">Gérez vos informations personnelles, préférences et paramètres de compte.</p>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon">
                                <i class="fas fa-user-edit"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Informations Personnelles</h4>
                                <p class="nav-popup-feature-description">Mettez à jour votre nom, photo de profil, adresse email et autres informations personnelles.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Sécurité du Compte</h4>
                                <p class="nav-popup-feature-description">Changez votre mot de passe, activez l'authentification à deux facteurs et gérez les sessions actives.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
                                <i class="fas fa-bell"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Préférences de Notification</h4>
                                <p class="nav-popup-feature-description">Personnalisez les notifications que vous recevez par email et dans l'application.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Statistiques</h3>
                        <div class="nav-popup-stats">
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">24h</div>
                                <div class="nav-popup-stat-label">Temps d'étude</div>
                            </div>
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">92%</div>
                                <div class="nav-popup-stat-label">Moyenne générale</div>
                            </div>
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">24</div>
                                <div class="nav-popup-stat-label">Cours suivis</div>
                            </div>
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">8</div>
                                <div class="nav-popup-stat-label">Badges obtenus</div>
                            </div>
                        </div>
                    </div>
                `
            },
            
            subjects: {
                title: "Gestion des Matières",
                icon: "fas fa-book",
                content: `
                  <div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Nos Matières</h3>
    <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
        Découvrez les matières disponibles sur la plateforme, avec des cours clairs, des astuces pratiques et des exercices corrigés.
    </p>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon">
            <i class="fas fa-book-open"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Cours Structurés</h4>
            <p class="nav-popup-feature-description">
                Des cours bien organisés pour chaque matière, expliqués de manière simple et progressive.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
            <i class="fas fa-lightbulb"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Astuces & Méthodes</h4>
            <p class="nav-popup-feature-description">
                Des astuces efficaces et des méthodes de résolution pour mieux comprendre et gagner du temps.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
            <i class="fas fa-check-circle"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Exercices Corrigés</h4>
            <p class="nav-popup-feature-description">
                Une sélection d’exercices avec corrections détaillées pour s’entraîner efficacement.
            </p>
        </div>
    </div>
</div>

<div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Matières Disponibles</h3>
    <ul class="nav-popup-list" style="color: var(--gray-700);">
       
        <li>Physique : explications claires et méthodes de résolution</li>
        <li>Sciences (SVT) : résumés, schémas et exercices corrigés</li>
      
        <li>Anglais : grammar, vocabulary, writing et exercices corrigés</li>
        <li>Chimie : notions essentielles et entraînement progressif</li>
     
    </ul>
</div>

                `
            },
            
            videos: {
                title: "Bibliothèque Vidéo",
                icon: "fas fa-video",
                content: `
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Vidéos Éducatives</h3>
                        <p style="margin-bottom: var(--space-4); color: var(--gray-700);">Accédez à une vaste bibliothèque de vidéos éducatives organisées par matière et niveau.</p>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon">
                                <i class="fas fa-search"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Recherche Avancée</h4>
                                <p class="nav-popup-feature-description">Trouvez rapidement des vidéos par mot-clé, matière, professeur ou niveau de difficulté.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                                <i class="fas fa-bookmark"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Listes de Lecture</h4>
                                <p class="nav-popup-feature-description">Créez et organisez vos listes de lecture personnalisées pour un apprentissage structuré.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
                                <i class="fas fa-download"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Téléchargement Hors Ligne</h4>
                                <p class="nav-popup-feature-description">Téléchargez des vidéos pour les regarder hors ligne quand vous n'avez pas de connexion Internet.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Statistiques Vidéos</h3>
                        <div class="nav-popup-stats">
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">500+</div>
                                <div class="nav-popup-stat-label">Vidéos disponibles</div>
                            </div>
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">156</div>
                                <div class="nav-popup-stat-label">Vidéos regardées</div>
                            </div>
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">45h</div>
                                <div class="nav-popup-stat-label">Temps total visionné</div>
                            </div>
                            <div class="nav-popup-stat">
                                <div class="nav-popup-stat-value">12</div>
                                <div class="nav-popup-stat-label">Listes de lecture</div>
                            </div>
                        </div>
                    </div>
                `
            },
            
            resources: {
                title: "Ressources d'Apprentissage",
                icon: "fas fa-folder",
                content: `
                   <div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Contenu de l’e-Book</h3>
    <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
        Un e-book complet pour le Bac, regroupant cours, devoirs et méthodes essentielles dans un seul support.
    </p>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon">
            <i class="fas fa-calculator"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Mathématiques</h4>
            <p class="nav-popup-feature-description">
                Cours bien organisés, devoirs Bac et Pilot, QCM complets et corrections détaillées.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
            <i class="fas fa-atom"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Physique</h4>
            <p class="nav-popup-feature-description">
                Résumés clairs, exercices corrigés et fiches méthodiques pour maîtriser les concepts.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
            <i class="fas fa-dna"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Sciences (SVT)</h4>
            <p class="nav-popup-feature-description">
                Cours structurés, devoirs corrigés et méthodes efficaces pour la révision.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-orange);">
            <i class="fas fa-laptop-code"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Informatique & Anglais</h4>
            <p class="nav-popup-feature-description">
                Informatique : cours et exercices corrigés. Anglais : grammar, writing et devoirs Bac corrigés.
            </p>
        </div>
    </div>
</div>

<div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Ce que contient l’e-Book</h3>
    <ul class="nav-popup-list" style="color: var(--gray-700);">
        <li>Cours complets et bien structurés</li>
        <li>Devoirs Bac et Pilot avec corrections détaillées</li>
        <li>QCM complets et autocorrigés</li>
        <li>Fiches méthodiques et résumés efficaces</li>
        <li>Méthodes de résolution étape par étape</li>
        <li>Contenu clair et facile à réviser</li>
        <li>Adapté à toutes les sections du Bac</li>
        <li>Un support unique pour une préparation complète</li>
    </ul>
</div>

                `
            },
            
            activity: {
                title: "Activité Récente",
                icon: "fas fa-history",
                content: `
                  <div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Préparation & Conseils</h3>
    <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
        Préparez-vous efficacement et adoptez les bonnes méthodes pour réussir.
    </p>

    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-blue);">
            <i class="fas fa-book-open"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Méthodes de Révision</h4>
            <p class="nav-popup-feature-description">
                Découvrez des techniques simples et efficaces pour mieux mémoriser et réviser.
            </p>
        </div>
    </div>

    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-orange);">
            <i class="fas fa-lightbulb"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Conseils Pratiques</h4>
            <p class="nav-popup-feature-description">
                Profitez de conseils clairs pour améliorer votre concentration et votre organisation.
            </p>
        </div>
    </div>

    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
            <i class="fas fa-clock"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Gestion du Temps</h4>
            <p class="nav-popup-feature-description">
                Apprenez à planifier vos études et à optimiser votre temps avant les examens.
            </p>
        </div>
    </div>
</div>

                `
            },
            
            settings: {
                title: "Paramètres",
                icon: "fas fa-cog",
                content: `
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Paramètres du Compte</h3>
                        <p style="margin-bottom: var(--space-4); color: var(--gray-700);">Personnalisez votre expérience d'apprentissage et gérez vos préférences.</p>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon">
                                <i class="fas fa-palette"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Apparence</h4>
                                <p class="nav-popup-feature-description">Personnalisez le thème, la taille de police et l'interface de l'application.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                                <i class="fas fa-volume-up"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Notifications</h4>
                                <p class="nav-popup-feature-description">Gérez les notifications par email, push et dans l'application.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
                                <i class="fas fa-language"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Langue</h4>
                                <p class="nav-popup-feature-description">Changez la langue de l'interface et des contenus.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-orange);">
                                <i class="fas fa-download"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Téléchargements</h4>
                                <p class="nav-popup-feature-description">Gérez les paramètres de téléchargement et l'espace de stockage.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Paramètres d'Apprentissage</h3>
                        <ul class="nav-popup-list" style="color: var(--gray-700);">
                            <li>Objectifs quotidiens d'apprentissage</li>
                            <li>Préférences de difficulté</li>
                            <li>Mode d'apprentissage (visuel, auditif, kinesthésique)</li>
                            <li>Rappels et rapports de progression</li>
                            <li>Partage des données d'apprentissage</li>
                            <li>Contrôle parental (si applicable)</li>
                            <li>Export des données personnelles</li>
                        </ul>
                    </div>
                `
            },
            
            help: {
                title: "Centre d'Aide",
                icon: "fas fa-question-circle",
                content: `
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Support & Assistance</h3>
                        <p style="margin-bottom: var(--space-4); color: var(--gray-700);">Trouvez des réponses à vos questions et accédez à notre support technique.</p>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon">
                                <i class="fas fa-book"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Guide d'Utilisation</h4>
                                <p class="nav-popup-feature-description">Apprenez à utiliser toutes les fonctionnalités de la plateforme avec notre guide complet.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                                <i class="fas fa-video"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Tutoriels Vidéo</h4>
                                <p class="nav-popup-feature-description">Regardez nos tutoriels vidéo pour maîtriser rapidement l'application.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
                                <i class="fas fa-comments"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">FAQ & Forum</h4>
                                <p class="nav-popup-feature-description">Consultez les questions fréquentes et participez à notre forum communautaire.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-orange);">
                                <i class="fas fa-headset"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Support Technique</h4>
                                <p class="nav-popup-feature-description">Contactez notre équipe de support pour toute assistance technique.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Ressources d'Aide</h3>
                        <ul class="nav-popup-list" style="color: var(--gray-700);">
                            <li>Guide de démarrage rapide</li>
                            <li>Manuel d'utilisation complet</li>
                            <li>Tutoriels pas à pas</li>
                            <li>FAQ détaillée</li>
                            <li>Forum communautaire</li>
                            <li>Support technique 24/7</li>
                            <li>Centre de téléchargement</li>
                            <li>Mises à jour et nouveautés</li>
                        </ul>
                    </div>
                `
            },
            
            contact: {
                title: "Contact",
                icon: "fas fa-envelope",
                content: `
                   <div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Contactez-Nous</h3>
    <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
        Nous sommes disponibles pour vous accompagner et répondre à toutes vos questions.
    </p>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon">
            <i class="fas fa-envelope"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Email</h4>
            <p class="nav-popup-feature-description">
                eduwelltn@gmail.com<br>
                Réponse rapide et support continu.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
            <i class="fas fa-phone"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Téléphone</h4>
            <p class="nav-popup-feature-description">
                +216 47 050 644<br>
                Disponible tous les jours.
            </p>
        </div>
    </div>
</div>

<div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Contact Direct</h3>
    <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
        Contactez-nous directement par email ou par téléphone pour toute information.
    </p>
    <div style="background: var(--gray-50); padding: var(--space-4); border-radius: var(--radius-lg); border: 1px solid var(--gray-200);">
        <p style="color: var(--gray-600); font-size: var(--font-size-sm);">
            Support dédié aux élèves et parents.
        </p>
        <p style="color: var(--blue); font-weight: 500; margin-top: var(--space-2);">
            Assistance rapide et personnalisée.
        </p>
    </div>
</div>

                `
            },
            
            faq: {
                title: "FAQ",
                icon: "fas fa-question",
                content: `
                   <div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Questions Fréquentes</h3>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon">
            <i class="fas fa-user-plus"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Comment créer un compte ?</h4>
            <p class="nav-popup-feature-description">
                Lazmik titwasil m3a admin fi compte Instagram ta3 Eduwell, 
                w lazim ikon 3andik l’e-book باش يتم تفعيل الحساب.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
            <i class="fas fa-lock"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">Comment réinitialiser mon mot de passe ?</h4>
            <p class="nav-popup-feature-description">
                Lazmik titwasil m3a admin soit 3la Instagram 
                ou via WhatsApp باش يتم إعادة تعيين كلمة المرور.
            </p>
        </div>
    </div>
    
    <div class="nav-popup-feature">
        <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
            <i class="fas fa-question-circle"></i>
        </div>
        <div class="nav-popup-feature-content">
            <h4 class="nav-popup-feature-title">En cas de problème, qui contacter ?</h4>
            <p class="nav-popup-feature-description">
                Ey moshkil itwajhik ka user, lazmik tiwasil m3ana 
                fi Instagram ou WhatsApp et on vous aidera rapidement.
            </p>
        </div>
    </div>
</div>

<div class="nav-popup-section">
    <h3 class="nav-popup-section-title">Autres Questions</h3>
    <ul class="nav-popup-list" style="color: var(--gray-700);">
        <li>Est-ce que l’e-book est obligatoire pour avoir un compte ?</li>
        <li>Comment contacter l’admin rapidement ?</li>
        <li>Le support est-il disponible tous les jours ?</li>
        <li>Que faire si je perds l’accès à mon compte ?</li>
        <li>Comment signaler un problème technique ?</li>
        <li>Comment obtenir de l’aide pour l’e-book ?</li>
        <li>Est-ce que le support se fait via WhatsApp ?</li>
        <li>Est-ce que l’accès est réservé aux élèves du Bac ?</li>
    </ul>
</div>

                `
            },
            
            privacy: {
                title: "Confidentialité",
                icon: "fas fa-shield-alt",
                content: `
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Politique de Confidentialité</h3>
                        <p style="margin-bottom: var(--space-4); color: var(--gray-700);">Nous prenons la protection de vos données personnelles très au sérieux.</p>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Données Collectées</h4>
                                <p class="nav-popup-feature-description">Nous collectons uniquement les données nécessaires au fonctionnement de la plateforme et à l'amélioration de votre expérience.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                                <i class="fas fa-user-shield"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Protection des Données</h4>
                                <p class="nav-popup-feature-description">Vos données sont chiffrées et stockées en toute sécurité sur des serveurs sécurisés en Europe.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
                                <i class="fas fa-cookie"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Cookies</h4>
                                <p class="nav-popup-feature-description">Nous utilisons des cookies essentiels au fonctionnement et des cookies d'analyse pour améliorer nos services.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Vos Droits</h3>
                        <ul class="nav-popup-list" style="color: var(--gray-700);">
                            <li>Droit d'accès à vos données personnelles</li>
                            <li>Droit de rectification des informations inexactes</li>
                            <li>Droit à l'effacement de vos données</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                            <li>Droit d'opposition au traitement</li>
                            <li>Droit de retirer votre consentement</li>
                            <li>Droit de déposer une réclamation</li>
                        </ul>
                        <p style="margin-top: var(--space-4); color: var(--gray-600); font-size: var(--font-size-sm);">Pour exercer vos droits, contactez notre délégué à la protection des données : eduwelltn@gmail.com</p>
                    </div>
                `
            }
        };