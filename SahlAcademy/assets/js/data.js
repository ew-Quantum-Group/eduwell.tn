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
                videos: 0
            },
            
            { 
                id: 3, 
                name: "science", 
                icon: "fas fa-dna", 
                color: "#FFFFFF",
                bgColor: "var(--gradient-purple)",
                progress: 79,
                videos: 0
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
                    videoCount: 0,
                    subject: "Physique"
                }
                
            ],
           
            "science": [
                { 
                    id: "sc_analyse", 
                    name: "Révision", 
                    icon: "fas fa-microscope",
                    videoCount: 0,
                    subject: "science"
                },
                { 
                    id: "genetique", 
                    name: "Génétique", 
                    icon: "fas fa-dna",
                    videoCount: 0,
                    subject: "science"
                },
                { 
                    id: "ecologie", 
                    name: "Neurophysiologie", 
                    icon: "fas fa-leaf",
                    videoCount: 0,
                    subject: "science"
                },
                { 
                    id: "biologie_physiologie", 
                    name: "Préparation Bac", 
                    icon: "fas fa-heartbeat",
                    videoCount: 0,
                    subject: "science"
                }
            ],
            "Anglais": [
                { 
                    id: "anglais_grammaire", 
                    name: "Old version", 
                    icon: "fas fa-book",
                    videoCount: 10,
                    subject: "Anglais"
                },
                { 
                    id: "anglais_vocabulaire", 
                    name: "Vocabulaire", 
                    icon: "fas fa-language",
                    videoCount: 0,
                    subject: "Anglais"
                },
                { 
                    id: "anglais_comprehension", 
                    name: "Compréhension", 
                    icon: "fas fa-headphones",
                    videoCount: 0,
                    subject: "Anglais"
                },
                { 
                    id: "anglais_expression", 
                    name: "Writing", 
                    icon: "fas fa-pen",
                    videoCount: 0,
                    subject: "Anglais"
                }
            ]
        };

        // Videos data - Each video is linked to both subject and course
        // Added level field to each video
        const videos = [
            // Physique - Mécanique videos
       
         

            // english - Cinétique Chimique videos
            {
                id: 1,
                title: "Active And Passive Voice (1)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1ekhuLnJl5hHDxJlnzNdY2WbI98PgKiAN",
                isNew: true,
                isFeatured: true,
                level: "Ancienne version"
            },
             {
                id: 2,
                title: "Active And Passive Voice (2)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1WSXgnnoHJkxzyCFukRgGeQ0ff_TmHVNr",
                isNew: true,
                isFeatured: true,
                level: "Ancienne version"
            },
             {
                id: 3,
                title: "Correction of the 2025 Baccalaureate Exam – Part 1",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "15mxWDTICcmEZz7HhIif84MXSNo3cgN4w",
                isNew: false,
                isFeatured: false,
                level: "Ancienne version"
            },
             {
                id: 4,
                title: "Correction of the 2025 Baccalaureate Exam – Part 2",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1M9DgB6Id1V1r5yjt1QwqJkoqZDEGh1vU",
                 isNew: false,
                isFeatured: false,
                level: "Ancienne version"
            },
             {
                id: 5,
                title: "Revision: Grammar Correction Exercises (Part 1)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1JtOD1EorV6ZGGx91UpO2bvdwqaq2IKtD",
                isNew: false,
                isFeatured: false,
                level: "Ancienne version"
            },
             {
                id: 6,
                title: "Revision: Grammar Correction Exercises (Part 2)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1ghkCIi9V6HRvhHJ1EcVC70HyID31ciPX",
                 isNew: false,
                isFeatured: false,
                level: "Ancienne version"
            },
             {
                id: 7,
                title: "Revision: Grammar Correction Exercises (Part 3)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1TtJnXpOQKUc3YqHZGPl5Ou0YXf9v-i8j",
                isNew: false,
                isFeatured: false,
                level: "Ancienne version"
            },
             {
                id: 8,
                title: "Adjectives & Adverbs – Lesson (Part 1)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "173h5_PtCky6NEIQsWJuE0lVapfvxVx2u",
                isNew: true,
                isFeatured: true,
                level: "Ancienne version"
            },
             {
                id: 9,
                title: "Adjectives & Adverbs – Lesson (Part 2)",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1ew9usBL0TloY_0LTY3DByfJ41m5Dm2Mo",
                isNew: true,
                isFeatured: true,
                level: "Ancienne version"
            },
             {
                id: 10,
                title: "Advanced Grammar Exercises – Revision ",
               
                instructor: "Eduwell",
               
                subject: "Anglais",
                course: "Old version",
                source: "drive",
                sourceId: "1WctGTWbFVyyy4FH-R79JpbDMjlZC_kkl",
                isNew: false,
                isFeatured: false,
                level: "Ancienne version"
            }

            // Biologie - Biologie Cellulaire videos
            
        ];
