
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
                                <p class="nav-popup-feature-description">Le nom et l’adresse e-mail sont gérés par le support central Sahl.</p>
                            </div>
                        </div>
                        
                        <div class="nav-popup-feature">
                            <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="nav-popup-feature-content">
                                <h4 class="nav-popup-feature-title">Sécurité du Compte</h4>
                                <p class="nav-popup-feature-description">Gérez votre mot de passe, la double authentification et les sessions actives.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Statistiques</h3>
                        <div class="nav-popup-stats">
                           <div class="nav-popup-stat">
    <div class="nav-popup-stat-value">24h</div>
    <div class="nav-popup-stat-label">Traitement sous</div>
</div>
<div class="nav-popup-stat">
    <div class="nav-popup-stat-value">100%</div>
    <div class="nav-popup-stat-label">sécurisé</div>
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
                </div>

                <div class="nav-popup-section">
                    <h3 class="nav-popup-section-title">Matières Disponibles</h3>
                    <ul class="nav-popup-list" style="color: var(--gray-700);">
                        <li>Physique : explications claires et méthodes de résolution</li>
                        <li>Chimie : notions essentielles et entraînement progressif</li>
                        <li>Biologie : résumés, schémas et exercices corrigés</li>
                        <li>Anglais : grammar, vocabulary, writing et exercices corrigés</li>
                    </ul>
                </div>
                `
            },
            
            resources: {
                title: "Ressources d'Apprentissage",
                icon: "fas fa-folder",
                content: `
                   <div class="nav-popup-section">
                    <h3 class="nav-popup-section-title">Contenu de l'e-Book</h3>
                    <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
                        Un e-book complet pour le Bac, regroupant cours, devoirs et méthodes essentielles dans un seul support.
                    </p>
                    
                    <div class="nav-popup-feature">
                        <div class="nav-popup-feature-icon">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <div class="nav-popup-feature-content">
                            <h4 class="nav-popup-feature-title">Physique & Chimie</h4>
                            <p class="nav-popup-feature-description">
                                Cours bien organisés, devoirs Bac et Pilot, QCM complets et corrections détaillées.
                            </p>
                        </div>
                    </div>
                    
                    <div class="nav-popup-feature">
                        <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
                            <i class="fas fa-dna"></i>
                        </div>
                        <div class="nav-popup-feature-content">
                            <h4 class="nav-popup-feature-title">Biologie</h4>
                            <p class="nav-popup-feature-description">
                                Résumés clairs, exercices corrigés et fiches méthodiques pour maîtriser les concepts.
                            </p>
                        </div>
                    </div>
                    
                    <div class="nav-popup-feature">
                        <div class="nav-popup-feature-icon" style="background: var(--gradient-purple);">
                            <i class="fas fa-language"></i>
                        </div>
                        <div class="nav-popup-feature-content">
                            <h4 class="nav-popup-feature-title">Anglais</h4>
                            <p class="nav-popup-feature-description">
                                Grammar, writing, vocabulary et devoirs Bac corrigés.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="nav-popup-section">
                    <h3 class="nav-popup-section-title">Ce que contient l'e-Book</h3>
                    <ul class="nav-popup-list" style="color: var(--gray-700);">
                        <li>Cours complets et bien structurés</li>
                        <li>Devoirs Bac et Pilot avec corrections détaillées</li>
                        <li>QCM complets et autocorrigés</li>
                        <li>Fiches méthodiques et résumés efficaces</li>
                        <li>Méthodes de résolution étape par étape</li>
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
                </div>
                `
            },
            
            help: {
                title: "Centre d'Aide",
                icon: "fas fa-question-circle",
                content: `
                    <div class="nav-popup-section">
                        <h3 class="nav-popup-section-title">Support & Assistance</h3>
                        <p style="margin-bottom: var(--space-4); color: var(--gray-700);">
Besoin d’aide ? Notre équipe est là pour vous accompagner.
</p>

<div class="nav-popup-feature">
    <div class="nav-popup-feature-icon">
        <i class="fab fa-whatsapp"></i>
    </div>
    <div class="nav-popup-feature-content">
        <h4 class="nav-popup-feature-title">Support WhatsApp</h4>
        <p class="nav-popup-feature-description">
            Contactez-nous sur WhatsApp au <strong>47 050 644</strong> en précisant l’e-mail associé à votre compte et la nature de votre demande.
        </p>
    </div>
</div>

<div class="nav-popup-feature">
    <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
        <i class="fas fa-headset"></i>
    </div>
    <div class="nav-popup-feature-content">
        <h4 class="nav-popup-feature-title">Centre de support</h4>
        <p class="nav-popup-feature-description">
            Accédez au centre de support depuis la page d’accueil et discutez en direct avec notre équipe pour une assistance immédiate.
        </p>
    </div>
</div>

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
    <h4 class="nav-popup-feature-title">Comment réinitialiser ou modifier mon mot de passe ?</h4>
    <p class="nav-popup-feature-description">
        Contactez-nous via WhatsApp au <strong>47 050 644</strong> ou via le centre d’assistance disponible sur la page d’accueil.
    </p>
</div>
</div>

<div class="nav-popup-feature">
    <div class="nav-popup-feature-icon" style="background: var(--gradient-green);">
        <i class="fas fa-user-lock"></i>
    </div>
    <div class="nav-popup-feature-content">
        <h4 class="nav-popup-feature-title">J’ai un problème de connexion à mon compte</h4>
        <p class="nav-popup-feature-description">
            Notre équipe est disponible via WhatsApp au <strong>47 050 644</strong> ou en contact direct depuis le centre d’assistance sur la page d’accueil.
        </p>
    </div>
</div>

                    </div>
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
                                <p class="nav-popup-feature-description">Nous collectons uniquement les données nécessaires au fonctionnement de la plateforme.</p>
                            </div>
                        </div>
                    </div>
                `
            }
        };