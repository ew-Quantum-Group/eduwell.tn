  // ============================
        // DATA MODELS WITH SUBJECT-COURSE-VIDEO HIERARCHY
        // ============================
        
        // Subject data
        const subjects = [
            { 
                id: 1, 
                name: "Physique", 
                icon: "fas fa-atom", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-blue)",
                progress: 72,
                videos: 18
            },
            
            { 
                id: 3, 
                name: "science", 
                icon: "fas fa-dna", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-purple)",
                progress: 79,
                videos: 21
            },
            { 
                id: 4, 
                name: "Anglais", 
                icon: "fas fa-language", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-orange)",
                progress: 88,
                videos: 12
            }
        ];

        // Course/Lesson data organized by subject
        const coursesBySubject = {
            "Physique": [
                { 
                    id: "physique_mecanique", 
                    name: "Mécanique", 
                    icon: "fas fa-cogs",
                    videoCount: 6,
                    subject: "Physique"
                },
                { 
                    id: "physique_electricite", 
                    name: "Électricité", 
                    icon: "fas fa-bolt",
                    videoCount: 5,
                    subject: "Physique"
                },
                { 
                    id: "physique_ondes", 
                    name: "Ondes", 
                    icon: "fas fa-wave-square",
                    videoCount: 4,
                    subject: "Physique"
                },
                { 
                    id: "physique_thermodynamique", 
                    name: "Thermodynamique", 
                    icon: "fas fa-thermometer-half",
                    videoCount: 3,
                    subject: "Physique"
                }
            ],
            "Chimie": [
                { 
                    id: "chimie_organique", 
                    name: "Chimie Organique", 
                    icon: "fas fa-atom",
                    videoCount: 5,
                    subject: "Chimie"
                },
                { 
                    id: "chimie_minerale", 
                    name: "Chimie Minérale", 
                    icon: "fas fa-vial",
                    videoCount: 4,
                    subject: "Chimie"
                },
                { 
                    id: "chimie_cinetique", 
                    name: "Cinétique Chimique", 
                    icon: "fas fa-tachometer-alt",
                    videoCount: 3,
                    subject: "Chimie"
                },
                { 
                    id: "chimie_equilibres", 
                    name: "Équilibres Chimiques", 
                    icon: "fas fa-balance-scale",
                    videoCount: 3,
                    subject: "Chimie"
                }
            ],
            "science": [
                { 
                    id: "biologie_cellulaire", 
                    name: "Biologie Cellulaire", 
                    icon: "fas fa-microscope",
                    videoCount: 6,
                    subject: "science"
                },
                { 
                    id: "biologie_genetique", 
                    name: "Génétique", 
                    icon: "fas fa-dna",
                    videoCount: 5,
                    subject: "science"
                },
                { 
                    id: "biologie_ecologie", 
                    name: "Écologie", 
                    icon: "fas fa-leaf",
                    videoCount: 4,
                    subject: "science"
                },
                { 
                    id: "biologie_physiologie", 
                    name: "Physiologie", 
                    icon: "fas fa-heartbeat",
                    videoCount: 6,
                    subject: "science"
                }
            ],
            "Anglais": [
                { 
                    id: "anglais_grammaire", 
                    name: "Old version", 
                    icon: "fas fa-book",
                    videoCount: 8,
                    subject: "Anglais"
                },
                { 
                    id: "anglais_vocabulaire", 
                    name: "Vocabulaire", 
                    icon: "fas fa-language",
                    videoCount: 6,
                    subject: "Anglais"
                },
                { 
                    id: "anglais_comprehension", 
                    name: "Compréhension", 
                    icon: "fas fa-headphones",
                    videoCount: 5,
                    subject: "Anglais"
                },
                { 
                    id: "anglais_expression", 
                    name: "Expression", 
                    icon: "fas fa-pen",
                    videoCount: 7,
                    subject: "Anglais"
                }
            ]
        };

        // Videos data - Each video is linked to both subject and course
        // Added level field to each video
        const videos = [
            // Physique - Mécanique videos
            {
                id: 1,
                title: "Introduction à la Mécanique Classique",
                description: "Les lois fondamentales de Newton et leurs applications dans la vie quotidienne.",
                duration: "45:32",
                instructor: "Dr. Sarah Chen",
                date: "2024-03-15",
                views: "2.4K",
                subject: "Physique",
                course: "Mécanique",
                source: "youtube",
                sourceId: "RBSGKlAvoiM",
                isNew: true,
                isFeatured: true,
                level: "beginner"
            },
            {
                id: 2,
                title: "Énergie Cinétique et Potentielle",
                description: "Comprendre les différentes formes d'énergie en mécanique et leurs conversions.",
                duration: "38:45",
                instructor: "Dr. Robert Kim",
                date: "2024-03-12",
                views: "1.8K",
                subject: "Physique",
                course: "Mécanique",
                source: "youtube",
                sourceId: "WUvTyaaNkzM",
                isNew: false,
                isFeatured: true,
                level: "beginner"
            },
            {
                id: 3,
                title: "Mouvement Circulaire Uniforme",
                description: "Analyse du mouvement circulaire et applications pratiques.",
                duration: "42:18",
                instructor: "Dr. Lisa Park",
                date: "2024-03-10",
                views: "1.5K",
                subject: "Physique",
                course: "Mécanique",
                source: "youtube",
                sourceId: "Levor9tELhE",
                isNew: true,
                isFeatured: false,
                level: "intermediate"
            },

            // Physique - Électricité videos
            {
                id: 4,
                title: "Circuits Électriques Série et Parallèle",
                description: "Principes fondamentaux des circuits électriques et calculs de résistance.",
                duration: "39:22",
                instructor: "Dr. Robert Kim",
                date: "2024-03-08",
                views: "1.2K",
                subject: "Physique",
                course: "Électricité",
                source: "drive",
                sourceId: "1zWXGkjgYvQO79KkEpzfkA_wHiOTAJGKZ",
                isNew: false,
                isFeatured: true,
                level: "intermediate"
            },
            {
                id: 5,
                title: "Loi d'Ohm et Puissance Électrique",
                description: "Application de la loi d'Ohm et calcul de la puissance dans les circuits.",
                duration: "35:45",
                instructor: "Dr. Sarah Chen",
                date: "2024-03-05",
                views: "1.1K",
                subject: "Physique",
                course: "Électricité",
                source: "youtube",
                sourceId: "URUJD5NEXC8",
                isNew: false,
                isFeatured: false,
                level: "advanced"
            },

            // Chimie - Chimie Organique videos
            {
                id: 6,
                title: "Introduction aux Composés Organiques",
                description: "Structure et propriétés des molécules organiques simples.",
                duration: "41:15",
                instructor: "Dr. Marie Laurent",
                date: "2024-03-18",
                views: "1.9K",
                subject: "Chimie",
                course: "Chimie Organique",
                source: "youtube",
                sourceId: "abc123def456",
                isNew: true,
                isFeatured: true,
                level: "intermediate"
            },
            {
                id: 7,
                title: "Réactions de Substitution",
                description: "Mécanismes des réactions de substitution en chimie organique.",
                duration: "47:30",
                instructor: "Dr. Pierre Martin",
                date: "2024-03-14",
                views: "1.4K",
                subject: "Chimie",
                course: "Chimie Organique",
                source: "youtube",
                sourceId: "def456ghi789",
                isNew: false,
                isFeatured: true,
                level: "advanced"
            },

            // Chimie - Cinétique Chimique videos
            {
                id: 8,
                title: "Vitesse des Réactions Chimiques",
                description: "Facteurs influençant la vitesse des réactions et méthodes de mesure.",
                duration: "38:20",
                instructor: "Dr. Marie Laurent",
                date: "2024-03-11",
                views: "1.3K",
                subject: "Chimie",
                course: "Cinétique Chimique",
                source: "drive",
                sourceId: "ghi789jkl012",
                isNew: true,
                isFeatured: false,
                level: "advanced"
            },

            // Biologie - Biologie Cellulaire videos
            {
                id: 9,
                title: "Structure de la Cellule Eucaryote",
                description: "Organites cellulaires et leurs fonctions spécifiques.",
                duration: "44:10",
                instructor: "Dr. Jean Dupont",
                date: "2024-03-16",
                views: "2.1K",
                subject: "science",
                course: "Biologie Cellulaire",
                source: "youtube",
                sourceId: "jkl012mno345",
                isNew: true,
                isFeatured: true,
                level: "beginner"
            },
            {
                id: 10,
                title: "Cycle Cellulaire et Mitose",
                description: "Phases du cycle cellulaire et processus de division mitotique.",
                duration: "39:55",
                instructor: "Dr. Sophie Bernard",
                date: "2024-03-13",
                views: "1.6K",
                subject: "Biologie",
                course: "Biologie Cellulaire",
                source: "youtube",
                sourceId: "mno345pqr678",
                isNew: false,
                isFeatured: true,
                level: "intermediate"
            },

            // Biologie - Génétique videos
            {
                id: 11,
                title: "Mendel et les Lois de l'Hérédité",
                description: "Expériences de Mendel et principes fondamentaux de la génétique.",
                duration: "42:25",
                instructor: "Dr. Jean Dupont",
                date: "2024-03-09",
                views: "1.7K",
                subject: "Biologie",
                course: "Génétique",
                source: "drive",
                sourceId: "pqr678stu901",
                isNew: false,
                isFeatured: false,
                level: "advanced"
            },

            // Anglais - Grammaire videos
            {
                id: 12,
                title: "Present Tenses: Simple and Continuous",
                description: "Master the use of present simple and present continuous tenses.",
                duration: "36:40",
                instructor: "Prof. Emily Johnson",
                date: "2024-03-17",
                views: "2.2K",
                subject: "Biologie",
                course: "Génétique",
                source: "youtube",
                sourceId: "stu901vwx234",
                isNew: true,
                isFeatured: true,
                level: "beginner"
            },
            {
                id: 13,
                title: "Past Tenses: Perfect and Perfect Continuous",
                description: "Understanding and using past perfect and past perfect continuous.",
                duration: "40:15",
                instructor: "Prof. David Wilson",
                date: "2024-03-14",
                views: "1.8K",
                subject: "Anglais",
                course: "Grammaire",
                source: "youtube",
                sourceId: "vwx234yza567",
                isNew: false,
                isFeatured: true,
                level: "intermediate"
            },

            // Anglais - Vocabulaire videos
            {
                id: 14,
                title: "Academic Vocabulary for Essays",
                description: "Essential vocabulary for academic writing and formal essays.",
                duration: "34:50",
                instructor: "Prof. Emily Johnson",
                date: "2024-03-10",
                views: "1.5K",
                subject: "Anglais",
                course: "Vocabulaire",
                source: "drive",
                sourceId: "yza567bcd890",
                isNew: false,
                isFeatured: false,
                level: "advanced"
            }
        ];
