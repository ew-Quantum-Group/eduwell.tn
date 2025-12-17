 // Video data in JSON format
        const videosData = [
            {
                "id": 1,
                "title": "Principes de Design Minimal pour Interfaces Modernes",
                "youtubeLink": "https://www.youtube.com/embed/6v2L2UGZJAM",
                "thumbnail": "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Design",
                "description": "Apprenez à appliquer des principes de design minimal pour créer des interfaces propres, fonctionnelles et belles qui mettent l'accent sur le contenu et l'expérience utilisateur. Découvrez l'art de la hiérarchie visuelle et de l'utilisation de l'espace."
            },
            {
                "id": 2,
                "title": "Le Futur des Technologies de Développement Web",
                "youtubeLink": "https://www.youtube.com/embed/XIMLoLxmTDw",
                "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Technologie",
                "description": "Exploration des dernières tendances, outils et technologies qui façonneront le développement web dans les années à venir. De l'intégration de l'IA aux nouveaux frameworks."
            },
            {
                "id": 3,
                "title": "Techniques Avancées de Disposition CSS Grid",
                "youtubeLink": "https://www.youtube.com/embed/SPFDLHNm5KQ",
                "thumbnail": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Développement",
                "description": "Un guide complet du CSS Grid, couvrant tout des concepts de base aux mises en page réactives avancées et aux applications réelles."
            },
            {
                "id": 4,
                "title": "Fondamentaux de JavaScript Expliqués",
                "youtubeLink": "https://www.youtube.com/embed/PkZNo7MFNFg",
                "thumbnail": "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Développement",
                "description": "Apprenez les concepts fondamentaux du langage de programmation JavaScript depuis les bases avec des exemples pratiques et des exercices."
            },
            {
                "id": 5,
                "title": "Théorie des Couleurs dans le Design UI Moderne",
                "youtubeLink": "https://www.youtube.com/embed/_2LLXnUdUIc",
                "thumbnail": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Design",
                "description": "Comment utiliser efficacement la couleur dans la conception d'interface utilisateur pour créer une hiérarchie, transmettre du sens et évoquer des émotions dans les applications modernes."
            },
            {
                "id": 6,
                "title": "Meilleures Pratiques de Design Web Réactif",
                "youtubeLink": "https://www.youtube.com/embed/VQraviuwbzU",
                "thumbnail": "https://images.unsplash.com/photo-1555066931-bf76d369d2f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Développement",
                "description": "Techniques et stratégies essentielles pour créer des sites web qui fonctionnent parfaitement sur tous les appareils et tailles d'écran avec des performances optimales."
            },
            {
                "id": 7,
                "title": "Psychologie derrière l'Expérience Utilisateur",
                "youtubeLink": "https://www.youtube.com/embed/7OSkB4BCx00",
                "thumbnail": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Design",
                "description": "Comment la compréhension de la psychologie humaine peut vous aider à créer des expériences utilisateur plus intuitives et engageantes qui résonnent avec votre public."
            },
            {
                "id": 8,
                "title": "Fonctionnalités Modernes de JavaScript Expliquées",
                "youtubeLink": "https://www.youtube.com/embed/MuBM8J2HfRA",
                "thumbnail": "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Développement",
                "description": "Explorez les dernières fonctionnalités de JavaScript et comment elles peuvent améliorer votre efficacité de codage et les performances de votre application dans des projets réels."
            },
            {
                "id": 9,
                "title": "Principes de Typographie pour le Design Numérique",
                "youtubeLink": "https://www.youtube.com/embed/sByzHoiYFX0",
                "thumbnail": "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Design",
                "description": "Un guide pour sélectionner et mettre en œuvre une typographie qui améliore la lisibilité et crée une harmonie visuelle dans les interfaces numériques."
            },
            {
                "id": 10,
                "title": "Construire des Applications Web Modernes",
                "youtubeLink": "https://www.youtube.com/embed/I7LrS1z_WNA",
                "thumbnail": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Développement",
                "description": "Apprenez à construire des applications web modernes en utilisant les derniers outils, frameworks et meilleures pratiques pour une architecture évolutive."
            },
            {
                "id": 11,
                "title": "Principes et Techniques d'Animation UI",
                "youtubeLink": "https://www.youtube.com/embed/YKYle5nR-7M",
                "thumbnail": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Design",
                "description": "Comment de petites animations et interactions peuvent significativement améliorer l'engagement et la satisfaction des utilisateurs dans les interfaces modernes."
            },
            {
                "id": 12,
                "title": "Fondamentaux de l'Accessibilité Web",
                "youtubeLink": "https://www.youtube.com/embed/20SHvU2PKsM",
                "thumbnail": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "Développement",
                "description": "Pratiques essentielles pour créer des applications web accessibles à tous les utilisateurs, quel que soit leur handicap ou appareil."
            }
        ];

        // Playlists data in JSON format
        const playlistsData = [
            {
                "id": 1,
                "title": "Design d'Interface Moderne",
                "topic": "Design",
                "cover": "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "videoIds": [1, 5, 7, 9, 11],
                "description": "Principes fondamentaux et techniques avancées pour créer des interfaces élégantes et fonctionnelles"
            },
            {
                "id": 2,
                "title": "Développement Web Avancé",
                "topic": "Développement",
                "cover": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "videoIds": [3, 4, 6, 8, 10, 12],
                "description": "Maîtrisez les technologies modernes du développement web avec des projets pratiques"
            },
            {
                "id": 3,
                "title": "JavaScript Professionnel",
                "topic": "Développement",
                "cover": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "videoIds": [4, 8, 10],
                "description": "De la syntaxe de base aux fonctionnalités ES6+ et aux meilleures pratiques"
            },
            {
                "id": 4,
                "title": "UX/UI & Psychologie",
                "topic": "Design",
                "cover": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "videoIds": [1, 5, 7, 11],
                "description": "Comprenez le comportement utilisateur pour créer des expériences mémorables"
            },
            {
                "id": 5,
                "title": "Tendances Technologiques",
                "topic": "Technologie",
                "cover": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "videoIds": [2],
                "description": "Explorez les innovations qui transforment le paysage numérique"
            },
            {
                "id": 6,
                "title": "Accessibilité Numérique",
                "topic": "Développement",
                "cover": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "videoIds": [6, 12],
                "description": "Créez des applications inclusives accessibles à tous les utilisateurs"
            }
        ];

        // Professional animated text options in French
        const animatedTexts = [
            "Sciences Physiques",
            "Mathématiques",
            "Sciences Exp",
            "Informatique",
            "Anglais",
            "Philosophie"
        ];
