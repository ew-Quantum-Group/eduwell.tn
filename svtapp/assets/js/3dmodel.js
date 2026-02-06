 // Main data structure for all cards and their 3D models
        const biologyData = {
            1: { // Reproduction
                title: "Reproduction Cellulaire",
                secondaryCards: [
                    {
                        id: "mitosis",
                        title: "Processus de Mitose",
                        description: "Division cellulaire produisant deux cellules filles identiques",
                        icon: "fas fa-divide",
                        color: "#1976d2",
                        sketchfabId: "6e3a378a83054e60a7f2299dbaeb1b52"
                    },
                    {
                        id: "meiosis",
                        title: "Stades de Méiose",
                        description: "Division cellulaire produisant des gamètes avec la moitié des chromosomes",
                        icon: "fas fa-dna",
                        color: "#2196f3",
                        sketchfabId: "8d76a4d7e7a74c6e9c7b5a5e5e5e5e5e"
                    },
                    {
                        id: "cell_cycle",
                        title: "Cycle Cellulaire",
                        description: "Cycle complet de croissance et division cellulaire",
                        icon: "fas fa-sync-alt",
                        color: "#64b5f6",
                        sketchfabId: "9c8b7a6d5e4f3a2b1c0d9e8f7a6b5c4d"
                    }
                ]
            },
            2: { // Human Reproduction
                title: "Systèmes Reproducteurs Humains",
                secondaryCards: [
                   
                   
    {
        id: "new_model_1",
        title: "Fécondation Ovule et Spermatozoïde",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-cube",
        color: "#1976d2",
        sketchfabId: "176d526066ca4c33b4b5fdfe33998e76"
    },
    {
        id: "new_model_2",
        title: "Première Semaine de la Conception – Modèle 3D",
        description: "Exploration 3D interactive du modèle",
        icon: "fas fa-cube",
        color: "#1976d2",
        sketchfabId: "81815e43185344f981498052118804c8"
    },
    {
        id: "new_model_3",
        title: "Début de la Conception",
        description: "Visualisation 3D du modèle avec détails interactifs",
        icon: "fas fa-cube",
        color: "#1976d2",
        sketchfabId: "81815e43185344f981498052118804c8"
    }


                ]
            },
            3: { // Diploid Genetics
                title: "Structures Génétiques",
                secondaryCards: [
                   
    {
        id: "fertilization_model",
        title: "Division Cellulaire : Méiose I – Prophase I Diplotène",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-egg",
        color: "#ff5722",
        sketchfabId: "50cbb0db95194b84a9f7908525cf35b2"
    },
    {
        id: "first_week_conception",
        title: "Division Cellulaire",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-baby",
        color: "#e91e63",
        sketchfabId: "dbb61c9222b547b7b819a5e077721464"
    },
    {
        id: "gene_transfer",
        title: "Diversité Génétique – Simulation Interactive",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-dna",
        color: "#4caf50",
        embedUrl: "https://javalab.org/en/human_gene_transfer_en/"
    },
    {
        id: "embryo_development",
        title: "Méiose – Animation 3D – Modèle 3D",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-baby-carriage",
        color: "#ff9800",
        sketchfabId: "1772cb63102b4f1c9ff5e607643cde83"
    },
    {
        id: "fertilization_cell_model",
        title: "Mouche du Fruit Drosophile – Modèle 3D",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-vial",
        color: "#03a9f4",
        sketchfabId: "bb82f275798740ec9154d21e3fe36e25"
    },
    {
        id: "dna_electrophoresis",
        title: "Électrophorèse de l’ADN",
        description: "Visualisation 3D détaillée du modèle interactif",
        icon: "fas fa-flask",
        color: "#9c27b0",
        embedUrl: "https://javalab.org/en/dna-electrophoresis/"
    }

                ]
            },
            4: { // Species Evolution
                title: "Adaptations Évolutives",
                secondaryCards: [
                    {
                        id: "homologous_structures",
                        title: "Structures Homologues",
                        description: "Structures similaires dans différentes espèces",
                        icon: "fas fa-bone",
                        color: "#f57c00",
                        sketchfabId: "9e8f7a6b5c4d3e2f1a0b9c8b7a6b5c4d"
                    },
                    {
                        id: "fossil_comparison",
                        title: "Comparaison Fossile",
                        description: "Anatomie comparative des espèces fossiles",
                        icon: "fas fa-fossil",
                        color: "#ff9800",
                        sketchfabId: "8f7a6b5c4d3e2f1a0b9c8b7a6b5c4d3e"
                    },
                    {
                        id: "natural_selection",
                        title: "Sélection Naturelle",
                        description: "Visualisation des pressions de sélection",
                        icon: "fas fa-leaf",
                        color: "#ffb74d",
                        sketchfabId: "7a6b5c4d3e2f1a0b9c8b7a6b5c4d3e2f"
                    }
                ]
            },
           5: { // Nervous System
    title: "Anatomie Neurale",
    secondaryCards: [
     
    {
        id: "brain_model_1",
        title: "Cerveau 3D",
        description: "Modèle 3D détaillé du cerveau humain",
        icon: "fas fa-brain",
        color: "#c2185b",
        sketchfabId: "a002e06b09ca45b2b7b521fbf745b18b"
    },
    {
        id: "nerve_system_1",
        title: "Système Nerveux 3D",
        description: "Visualisation interactive des nerfs et connexions neuronales",
        icon: "fas fa-project-diagram",
        color: "#e91e63",
        sketchfabId: "be679731525c457cb01036fcf25afc37"
    },
    {
        id: "neuron_model_1",
        title: "Neurone 3D",
        description: "Structure complète d'un neurone",
        icon: "fas fa-project-diagram",
        color: "#f06292",
        sketchfabId: "6ef85cb9061a4ef2abb9e87258c7d0fb"
    },
    {
        id: "brain_structure_2",
        title: "Cerveau et Nerfs",
        description: "Visualisation des structures cérébrales et nerfs",
        icon: "fas fa-brain",
        color: "#d32f2f",
        sketchfabId: "a87a33a1f54c4ba0942217e3d37cc324"
    },
    {
        id: "brain_model_3",
        title: "Cerveau 3D détaillé",
        description: "Explorez le cerveau humain en détail",
        icon: "fas fa-brain",
        color: "#c2185b",
        sketchfabId: "1300870efedf40cfb50b43e463ef360a"
    },
    {
        id: "brain_nerve_2",
        title: "Cerveau et Système Nerveux",
        description: "Connexions cérébrales et nerfs en 3D",
        icon: "fas fa-project-diagram",
        color: "#e91e63",
        sketchfabId: "70e43c1afc9d4ab280c5f5be03f8487f"
    },
    {
        id: "neuron_model_2",
        title: "Neurone interactif",
        description: "Visualisation interactive d'un neurone",
        icon: "fas fa-project-diagram",
        color: "#f06292",
        sketchfabId: "42d2791d85c74a31873e369583262ec0"
    },
    {
        id: "muscle_neuron_interaction",
        title: "Interaction Muscle-Neurone 3D",
        description: "Explorer la connexion entre neurones et muscles",
        icon: "fas fa-dumbbell",
        color: "#e91e63",
        sketchfabId: "e660db1f374b45e6a2ab6c29aac7130c"
    }
]

       
       
        
},

            6: { // Musculoskeletal System
                title: "Systèmes de Mouvement",
                secondaryCards: [
                    {
                        id: "skeletal_system",
                        title: "Squelette Humain",
                        description: "Système squelettique humain complet",
                        icon: "fas fa-skull",
                        color: "#0097a7",
                        sketchfabId: "3e2f1a0b9c8b7a6b5c4d3e2f1a0b9c8b"
                    },
                    {
                        id: "muscle_system",
                        title: "Système Musculaire",
                        description: "Principaux groupes musculaires et attachements",
                        icon: "fas fa-dumbbell",
                        color: "#00bcd4",
                        sketchfabId: "2f1a0b9c8b7a6b5c4d3e2f1a0b9c8b7a"
                    },
                    {
                        id: "joint_anatomy",
                        title: "Structures Articulaires",
                        description: "Anatomie des différents types d'articulations",
                        icon: "fas fa-link",
                        color: "#4dd0e1",
                        sketchfabId: "1a0b9c8b7a6b5c4d3e2f1a0b9c8b7a6b"
                    }
                ]
            },
            7: { // Immune System
                title: "Défense Immunitaire",
                secondaryCards: [
                    {
                        id: "immune_cells",
                        title: "Cellules Immunitaires",
                        description: "Diverses cellules du système immunitaire",
                        icon: "fas fa-shield-alt",
                        color: "#ff8f00",
                        sketchfabId: "0b9c8b7a6b5c4d3e2f1a0b9c8b7a6b5c"
                    },
                    {
                        id: "antibody_structure",
                        title: "Structure d'Anticorps",
                        description: "Modèle 3D de molécules d'anticorps",
                        icon: "fas fa-plus-square",
                        color: "#ffa726",
                        sketchfabId: "9c8b7a6b5c4d3e2f1a0b9c8b7a6b5c4d"
                    },
                    {
                        id: "virus_structure",
                        title: "Anatomie Virale",
                        description: "Structure de virus communs",
                        icon: "fas fa-virus",
                        color: "#ffcc80",
                        sketchfabId: "8b7a6b5c4d3e2f1a0b9c8b7a6b5c4d3e"
                    }
                ]
            }
        };
