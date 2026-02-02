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
                    id: "forceq50", 
                    name: "RLC force Q50", 
                    icon: "fas fa-book",
                    videoCount: 50,
                    subject: "Physique"
                },
                { 
                    id: "forcecours", 
                    name: "RLC force Cours", 
                    icon: "fas fa-bolt",
                    videoCount: 5,
                    subject: "Physique"
                }
                
            ],
           
            "science": [
                { 
                    id: "sc_analyse", 
                    name: "Révision", 
                    icon: "fas fa-microscope",
                    videoCount: 6,
                    subject: "science"
                },
                { 
                    id: "genetique", 
                    name: "Génétique", 
                    icon: "fas fa-dna",
                    videoCount: 5,
                    subject: "science"
                },
                { 
                    id: "ecologie", 
                    name: "Neurophysiologie", 
                    icon: "fas fa-leaf",
                    videoCount: 4,
                    subject: "science"
                },
                { 
                    id: "biologie_physiologie", 
                    name: "Préparation Bac", 
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
                    name: "Writing", 
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
       
         

            // Chimie - Cinétique Chimique videos
            {
                id: 8,
                title: "Vitesse des Réactions Chimiques",
                description: "Facteurs influençant la vitesse des réactions et méthodes de mesure.",
                duration: "38:20",
                instructor: "Dr. Marie Laurent",
                date: "2024-03-11",
                views: "1.3K",
                subject: "Anglais",
                course: "Writing",
                source: "drive",
                sourceId: "1ekhuLnJl5hHDxJlnzNdY2WbI98PgKiAN",
                isNew: true,
                isFeatured: true,
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
