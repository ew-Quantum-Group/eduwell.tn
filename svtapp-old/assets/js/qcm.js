// QCM Data Structure with multi-select questions
const qcmData = {
    "models": [
        {
            "id": "model1",
            "title": "Reproduction — Part I",
            "chapters": [
                {
                    "id": "ch1",
                    "title": "Organisation des Appareils Reproducteurs",
                    "questions": [
                        {
                            "id": 1,
                            "question": "L’ovulation chez la femme dépend directement : ?",
                            "choices": [
                                "des hormones ovariennes",
                                "des hormones hypophysaires",
                                "des hormones hypothalamiques",
                                "de la qualité de la glaire cervicale"
                            ],
                            "correct_index": 1
                        },
                        {
                            "id": 2,
                            "question": "Sélectionnez les organes qui font partie du système reproducteur masculin :",
                            "choices": [
                                "Testicules",
                                "Utérus",
                                "Prostate",
                                "Trompes de Fallope"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 3,
                            "question": "Quelle hormone est responsable du développement des caractères sexuels secondaires chez l'homme ?",
                            "choices": [
                                "La FSH",
                                "La LH",
                                "La testostérone",
                                "L'œstrogène"
                            ],
                            "correct_index": 2
                        },
                        {
                            "id": 4,
                            "question": "Sélectionnez les structures qui transportent les spermatozoïdes :",
                            "choices": [
                                "Le canal déférent",
                                "L'épididyme",
                                "Le canal éjaculateur",
                                "Les vésicules séminales"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 5,
                            "question": "Quelle est la température optimale pour la production de spermatozoïdes ?",
                            "choices": [
                                "37°C (température corporelle)",
                                "35°C (inférieure à la température corporelle)",
                                "39°C (supérieure à la température corporelle)",
                                "La température n'a pas d'importance"
                            ],
                            "correct_index": 1
                        }
                    ]
                },
                {
                    "id": "ch2",
                    "title": "Cycle Reproducteur et Régulation Hormonale",
                    "questions": [
                        {
                            "id": 6,
                            "question": "L’ovulation chez la femme dépend directement :",
                            "choices": [
                                "des hormones ovariennes",
                                "des hormones hypophysaires",
                                "des hormones hypothalamiques",
                                "de la qualité de la glaire cervicale"
                            ],
                            "correct_index": [1]
                        },
                        {
                            "id": 7,
                            "question": "La phase de maturation de la spermatogenèse :",
                            "choices": [
                                "se produit entièrement dans le testicule",
                                "s'achève dans les voies génitales de la femme",
                                "produit des spermatocytes II",
                                "produit des spermatides"
                            ],
                            "correct_index": [0, 3]
                        },
                        {
                            "id": 8,
                            "question": "Les cellules cibles de la LH chez les humains sont les cellules:",
                            "choices": [
                                "de Sertoli",
                                "de Leydig",
                                "les cellules du follicule mûr",
                                "les cellules du placenta"
                            ],
                            "correct_index": [1, 2]
                        },
                        {
                            "id": 9,
                            "question": "L'apparition des caractères sexuels secondaires chez l'homme dépend de la:",
                            "choices": [
                                "fonction exocrine du testicule",
                                "position (intra ou extra-abdominale) des testicules",
                                "sécrétion de la LH",
                                "sécrétion de FSH"
                            ],
                            "correct_index": [2]
                        },
                        {
                            "id": 10,
                            "question": "La baisse de la sécrétion de FSH peut être observée après une :",
                            "choices": [
                                "ovariectomie",
                                "diminution du taux de testostérone",
                                "injection de GnRH",
                                "ligature de la tige pituitaire"
                            ],
                            "correct_index": [3]
                        },
                        {
                            "id": 11,
                            "question": "Les cellules de Sertoli sont des cellules:",
                            "choices": [
                                "endocrines",
                                "germinales",
                                "somatique",
                                "de soutien"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 12,
                            "question": "Le trophoblaste est un ensemble de cellules :",
                            "choices": [
                                "sécrétant des enzymes",
                                "sécrétant des hormones",
                                "de soutien",
                                "d'origine maternelle"
                            ],
                            "correct_index": [0, 1]
                        },
                        {
                            "id": 13,
                            "question": "Le maintien de la muqueuse utérine en début de grossesse dépend :",
                            "choices": [
                                "de l'ovaire",
                                "du complexe hypothalamo-hypophysaire",
                                "de l'hypophyse",
                                "de cellules embryonnaires"
                            ],
                            "correct_index": [0, 3]
                        }
                    ]
                },
                {
                    "id": "ch3",
                    "title": "Production des Gamètes",
                    "questions": [
                        {
                            "id": 14,
                            "question": "Durant la grossesse, la progestérone assure indirectement:",
                            "choices": [
                                "l'inhibition de la croissance folliculaire",
                                "le blocage du cycle ovarien",
                                "l'inhibition de la sécrétion des gonadostimulines",
                                "la régression de la muqueuse utérine"
                            ],
                            "correct_index": [0, 1]
                        },
                        {
                            "id": 15,
                            "question": "Chez la femme, la division réductionnelle de la méiose:",
                            "choices": [
                                "se déroule entièrement dans l'ovaire",
                                "se déroule en partie dans la trompe",
                                "s'achève dans la trompe en cas de fécondation",
                                "s'achève au niveau de la cavité utérine"
                            ],
                            "correct_index": [0]
                        },
                        {
                            "id": 16,
                            "question": "Chez la femme, le développement maximal de la muqueuse utérine :",
                            "choices": [
                                "est observé au cours de la phase prémenstruelle",
                                "est observé au cours de la phase postmenstruelle",
                                "nécessite une sensibilisation des cellules par les œstrogènes",
                                "se fait exclusivement grâce à la progestérone"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 17,
                            "question": "Chez la femme, Le taux de progestérone se maintient constant et nul (ou presque) pendant:",
                            "choices": [
                                "la menstruation",
                                "la grossesse",
                                "la phase folliculaire d'un cycle non fécond",
                                "la phase lutéale d'un cycle fécond"
                            ],
                            "correct_index": [0, 1]
                        },
                        {
                            "id": 18,
                            "question": "L'œstradiol peut être sécrété par:",
                            "choices": [
                                "le placenta",
                                "le corps jaune",
                                "les cellules de la thèque interne d'un follicule cavitaire",
                                "les cellules de la thèque externe d'un follicule mûr"
                            ],
                            "correct_index": [2]
                        },
                        {
                            "id": 19,
                            "question": "Une femme ménopausée présente :",
                            "choices": [
                                "un taux faible de LH avec un pic vers le 13eme jour",
                                "un taux élevé et constant de progestérone",
                                "un taux élevé et constant de LH avec absence de pic",
                                "une sécrétion cyclique des hormones ovariennes"
                            ],
                            "correct_index": [1, 3]
                        },
                        {
                            "id": 20,
                            "question": "La capacitation des spermatozoïdes se fait dans :",
                            "choices": [
                                "les tubes séminifères",
                                "les voies génitales femelles",
                                "les canaux déférents",
                                "l'épididyme"
                            ],
                            "correct_index": [0, 1]
                        },
                        {
                            "id": 21,
                            "question": "Le blastocyste:",
                            "choices": [
                                "secrète des enzymes",
                                "secrète des hormones",
                                "se transforme en morula",
                                "se forme dans le pavillon"
                            ],
                            "correct_index": [0, 1]
                        }
                    ]
                }
            ]
        },
        {
            "id": "model2",
            "title": "Reproduction — Part II",
            "chapters": [
                {
                    "id": "ch1",
                    "title": "Architecture Fonctionnelle",
                    "questions": [
                        {
                            "id": 22,
                            "question": "Chez l'homme, la spermatogenèse est directement stimulée par:",
                            "choices": [
                                "la GnRH",
                                "la LH",
                                "la FSH",
                                "la testostérone"
                            ],
                            "correct_index": [3]
                        },
                        {
                            "id": 23,
                            "question": "Parmi les points communs entre les cellules de Sertoli et les cellules de Leydig on peut citer le fait que :",
                            "choices": [
                                "elles sont des cellules germinales",
                                "elles sont des cellules endocrines",
                                "elles exercent un freinage sur les neurones hypothalamiques",
                                "elles contrôlent les caractères sexuels secondaires"
                            ],
                            "correct_index": [1]
                        },
                        {
                            "id": 24,
                            "question": "Parmi les points communs entre le 1er et le 2ème globule polaire on peut citer le fait que:",
                            "choices": [
                                "ils sont haploïdes",
                                "ils sont produits par la division réductionnelle de méiose",
                                "ils contiennent des réserves cytoplasmiques",
                                "ils sont des cellules non fonctionnelles"
                            ],
                            "correct_index": [0, 3]
                        },
                        {
                            "id": 25,
                            "question": "Chez l'espèce humaine, les cibles de la LH sont:",
                            "choices": [
                                "le tissu interstitiel du testicule",
                                "les tubes séminifères du testicule",
                                "l'endomètre, le myomètre et le col de l'utérus",
                                "le follicule mûr, le follicule rompu et le corps jaune des ovaires"
                            ],
                            "correct_index": [0, 3]
                        },
                        {
                            "id": 26,
                            "question": "Chez un rat mâle adulte hypophysectomisé, on peut corriger la stérilité par des injections de:",
                            "choices": [
                                "LH",
                                "LH et FSH",
                                "testostérone et FSH",
                                "testostérone et LH"
                            ],
                            "correct_index": [1, 2]
                        },
                        {
                            "id": 27,
                            "question": "Parmi les effets physiologiques suivants, ceux qui peuvent être attribués aux œstrogènes sont:",
                            "choices": [
                                "le silence utérin",
                                "la sensibilisation des cellules de l'endomètre à l'action de la progestérone",
                                "la sécrétion d'une glaire cervicale dense à maillage serré",
                                "l'apparition et le maintien des caractères sexuels secondaires"
                            ],
                            "correct_index": [1, 3]
                        },
                        {
                            "id": 28,
                            "question": "La glaire cervicale est une production :",
                            "choices": [
                                "du col utérin",
                                "du vagin",
                                "de l'ovaire",
                                "de l'endomètre utérin"
                            ],
                            "correct_index": [0]
                        }
                    ]
                },
                {
                    "id": "ch2",
                    "title": "Production des Gamètes",
                    "questions": [
                        {
                            "id": 29,
                            "question": "Au cours de la spermiogenèse subie par une spermatide, il y a:",
                            "choices": [
                                "formation d'un acrosome",
                                "élimination de tout le cytoplasme",
                                "acquisition d'une forme allongée",
                                "réduction du nombre de chromosomes"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 30,
                            "question": "Chez un mâle pubère dont les testicules ont subi une destruction du tissu interstitiel, mais non des tubes séminifères, on observe:",
                            "choices": [
                                "une stérilité",
                                "une fertilité",
                                "une régression des caractères sexuels secondaires",
                                "un maintien de l'état développé du tractus génital"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 31,
                            "question": "Si l'ovocyte I contient une quantité d'ADN égale à '2Q', alors le 2ème globule polaire contient:",
                            "choices": [
                                "'Q' ADN",
                                "'2Q' ADN",
                                "'Q/2' ADN",
                                "'Q/4' ADN"
                            ],
                            "correct_index": [2]
                        },
                        {
                            "id": 32,
                            "question": "Parmi les évènements qui se produisent dans le follicule mûr, au cours des 24 heures qui précèdent l'ovulation, on cite:",
                            "choices": [
                                "la naissance d'un 2ème globule polaire",
                                "le détachement de l'ovocyte I de la granulosa",
                                "l'achèvement de la division équationnelle de méiose de la cellule germinale",
                                "l'achèvement de la division réductionnelle de méiose de la cellule germinale"
                            ],
                            "correct_index": [1, 3]
                        },
                        {
                            "id": 33,
                            "question": "Chez toutes les femmes à cycle normal, l'ovulation se produit :",
                            "choices": [
                                "1 jour avant le pic de LH",
                                "14 jours avant la fin du cycle",
                                "14 jours après le début du cycle",
                                "2 jours environ après le grand pic d'œstrogènes"
                            ],
                            "correct_index": [1, 3]
                        },
                        {
                            "id": 34,
                            "question": "Parmi les points communs entre la régulation de la fonction reproductrice masculine et la régulation du cycle sexuel féminin, on cite:",
                            "choices": [
                                "l'action directe de la gonadolibérine sur les gonades",
                                "la stimulation directe des gonades par les gonadostimulines",
                                "l'inhibition du complexe hypothalamo-hypophysaire par les hormones gonadiques",
                                "la stimulation du complexe hypothalamo-hypophysaire par les hormones gonadiques"
                            ],
                            "correct_index": [1, 2]
                        }
                    ]
                },
                {
                    "id": "ch3",
                    "title": "Cycle Reproducteur et Régulation Hormonale",
                    "questions": [
                        {
                            "id": 35,
                            "question": "Chez l'homme, les tubes séminifères sont le siège de la:",
                            "choices": [
                                "spermiogenèse",
                                "sécrétion d'inhibine",
                                "sécrétion de testostérone",
                                "maturation des spermatozoïdes"
                            ],
                            "correct_index": [0, 1]
                        },
                        {
                            "id": 36,
                            "question": "Un spermatocyte II résulte :",
                            "choices": [
                                "d'une mitose affectant une spermatogonie",
                                "d'un accroissement affectant une spermatogonie",
                                "d'une division équationnelle affectant un spermatocyte I",
                                "d'une division réductionnelle affectant un spermatocyte I"
                            ],
                            "correct_index": [3]
                        },
                        {
                            "id": 37,
                            "question": "Un sujet atteint de cryptorchidie possède :",
                            "choices": [
                                "un tissu interstitiel développé",
                                "des tubes séminifères développés",
                                "des caractères sexuels secondaires normaux",
                                "la capacité de production de spermatozoïdes"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 38,
                            "question": "Chez un mâle adulte hypophysectomisé, la restauration des fonctions testiculaires pourra se faire si :",
                            "choices": [
                                "on lui injecte des gonadostimulines",
                                "on lui injecte des extraits hypothalamiques",
                                "on lui injecte de la testostérone et de la FSH",
                                "on lui greffe une hypophyse au niveau de l'abdomen"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 39,
                            "question": "Chez l'homme, les cellules cibles de la FSH sont:",
                            "choices": [
                                "les cellules de Sertoli",
                                "les cellules germinales",
                                "les cellules de Leydig",
                                "les neurones hypothalamiques"
                            ],
                            "correct_index": [0]
                        },
                        {
                            "id": 40,
                            "question": "On peut observer une baisse de la sécrétion de FSH chez un mâle pubère après une :",
                            "choices": [
                                "castration bilatérale",
                                "augmentation du taux sanguin d'inhibine",
                                "diminution du taux sanguin de testostérone",
                                "augmentation du taux sanguin de GnRH"
                            ],
                            "correct_index": [1]
                        },
                        {
                            "id": 41,
                            "question": "Le follicule tertiaire se distingue par:",
                            "choices": [
                                "le début d'apparition des thèques",
                                "l'apparition de la zone pellucide",
                                "l'apparition de cavité(s) folliculaire(s)",
                                "la fusion des cavités folliculaires"
                            ],
                            "correct_index": [2]
                        },
                        {
                            "id": 42,
                            "question": "La GnRH est une :",
                            "choices": [
                                "neurohormone",
                                "gonadolibérine",
                                "gonadotrophine",
                                "hormone androgène"
                            ],
                            "correct_index": [0, 1]
                        }
                    ]
                }
            ]
        },
        {
            "id": "model3",
            "title": "Gènes et Reproduction",
            "chapters": [
                {
                    "id": "ch1",
                    "title": "Processus de Fécondation",
                    "questions": [
                        {
                            "id": 43,
                            "question": "Parmi les points communs entre la physiologie d'une femme ménopausée et celle d'une jeune femme enceinte, on cite:",
                            "choices": [
                                "l'absence des menstruations",
                                "l'évolution des structures ovariennes",
                                "la présence d'hormones placentaires dans le sang",
                                "la sécrétion de quantités importantes de gonadostimulines hypophysaires"
                            ],
                            "correct_index": [0]
                        },
                        {
                            "id": 44,
                            "question": "Lors de la FIVETE, au cours du cycle artificiel créé par l'équipe médicale chez la femme :",
                            "choices": [
                                "les injections de FSH au cours des 10 premiers jours accélèrent l'atrésie folliculaire",
                                "les injections de FSH au cours des 10 premiers jours empêchent l'atrésie folliculaire",
                                "l'injection d'une dose unique de HCG vers le 13ème jour stimule les phénomènes de l'ovulation",
                                "l'injection d'une dose unique de HCG vers le 13ème jour remplace le pic de LH"
                            ],
                            "correct_index": [1, 2]
                        },
                        {
                            "id": 45,
                            "question": "Le SAF :",
                            "choices": [
                                "est une malformation congénitale",
                                "est une affection de la femme enceinte qui consomme l'alcool",
                                "est induit par la consommation de tabac par la femme enceinte",
                                "est induit par la consommation de médicaments tératogènes par la femme enceinte"
                            ],
                            "correct_index": [0]
                        },
                        {
                            "id": 46,
                            "question": "Dans le dihybridisme à gènes autosomaux liés :",
                            "choices": [
                                "le pourcentage de recombinaison est de 50% si le linkage est absolu",
                                "le pourcentage de recombinaison est compris entre 0% et 50% si le linkage est partiel",
                                "les loci des 2 gènes se trouvent sur 2 paires différentes de chromosomes",
                                "les loci des 2 gènes se trouvent sur la même paire de chromosomes"
                            ],
                            "correct_index": [1, 3]
                        },
                        {
                            "id": 47,
                            "question": "Parmi les substances passant du sang fœtal vers le sang maternel à travers le placenta, on cite :",
                            "choices": [
                                "le CO2",
                                "les acides aminés",
                                "le glucose",
                                "l'urée"
                            ],
                            "correct_index": [0, 3]
                        },
                        {
                            "id": 48,
                            "question": "La caryogamie:",
                            "choices": [
                                "se déroule dans l'ovocyte II",
                                "est une fusion entre un spermatozoïde et un ovule",
                                "est la dernière étape de la fécondation",
                                "est une fusion entre un pronucléus mâle diploïde et un pronucléus femelle diploïde"
                            ],
                            "correct_index": [2]
                        },
                        {
                            "id": 49,
                            "question": "La réaction corticale et la réaction acrosomique ont en commun :",
                            "choices": [
                                "le même but",
                                "la même cible",
                                "la mise en jeu d'enzymes",
                                "la mise en jeu d'hormones"
                            ],
                            "correct_index": [1, 2]
                        },
                        {
                            "id": 50,
                            "question": "Le blastocyste :",
                            "choices": [
                                "dérive de la morula",
                                "dérive du trophoblaste",
                                "sécrète des enzymes",
                                "sécrète un mucus riche en glycogène"
                            ],
                            "correct_index": [0, 2]
                        },
                        {
                            "id": 51,
                            "question": "Le brassage de l'information génétique lors de la reproduction sexuée se produit au cours de:",
                            "choices": [
                                "la division réductionnelle de la méiose uniquement",
                                "la division réductionnelle de la méiose et la fécondation",
                                "la division équationnelle de la méiose et la fécondation",
                                "la mitose de la cellule œuf"
                            ],
                            "correct_index": [1]
                        },
                        {
                            "id": 52,
                            "question": "Le bec de lièvre :",
                            "choices": [
                                "est une malformation congénitale",
                                "est une affection de la femme enceinte qui consomme le tabac",
                                "est induit par la consommation d'alcool par la femme enceinte",
                                "est induit par la consommation de médicaments tératogènes par la femme enceinte"
                            ],
                            "correct_index": [0]
                         }
                    ]
                }
            ]
        },
{
    "id": "model4",
    "title": "Génétique & hérédité humaine",
    "chapters": [
        {
            "id": "ch1",
            "title": "Transmission des Caractères",
            "questions": [
                {
                    "id": 53,
                    "question": "Un garçon malade ayant l’un des parents malade :",
                    "choices": [
                        "la maladie peut être dominante",
                        "la maladie est surement dominante",
                        "la maladie peut être transmise par Y",
                        "la maladie est autosomique"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 54,
                    "question": "Dans le cas où un enfant sain est issu de deux parents malades, on peut déduire que :",
                    "choices": [
                        "la maladie est récessive",
                        "la maladie est dominante",
                        "l’enfant est homozygote",
                        "la maladie peut être autosomique"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 55,
                    "question": "Le résultat d’analyse d’ADN d’un homme malade montre deux types d’ADN :",
                    "choices": [
                        "la maladie est contrôlée par un gène dominant",
                        "le gène de la maladie peut être lié au chromosome X",
                        "le gène de la maladie est autosomique",
                        "cet homme donne des filles toutes malades"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 56,
                    "question": "Un homme malade est hétérozygote, dans ce cas :",
                    "choices": [
                        "la maladie est dominante autosomale",
                        "la maladie est récessive autosomale",
                        "la maladie est dominante liée à X",
                        "la maladie est récessive liée à X"
                    ],
                    "correct_index": [0]
                }
            ]
        },
        {
            "id": "ch2",
            "title": "Modalités de Transmission et Génétique des Populations",
            "questions": [
                {
                    "id": 63,
                    "question": "Dans le cas d'une maladie récessive autosomale :",
                    "choices": [
                        "tout individu sain est homozygote",
                        "un couple de phénotype sain doit être hétérozygote",
                        "un garçon atteint n'hérite la maladie que de son père",
                        "le mariage consanguin augmente le risque d'apparition de la maladie chez les descendants"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 64,
                    "question": "Dans le cas d'une maladie dominante autosomale :",
                    "choices": [
                        "des filles saines ayant un père atteint doivent avoir une mère saine",
                        "des enfants sains peuvent avoir deux parents atteints",
                        "deux parents sains peuvent avoir un enfant atteint",
                        "les enfants d'un père atteint homozygote sont tous atteints"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 65,
                    "question": "Dans le cas d'une maladie récessive liée au chromosome sexuel X :",
                    "choices": [
                        "toutes les filles d'une mère atteinte sont atteintes",
                        "tous les fils d'une mère atteinte sont atteints",
                        "le père d'une fille atteinte est atteint",
                        "le père d'une fille atteinte peut être sain"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 66,
                    "question": "Dans le cas d'une maladie dominante liée au chromosome sexuel X, le mariage entre un homme atteint et une femme saine donne :",
                    "choices": [
                        "des filles saines et des fils atteints",
                        "des filles atteintes et des fils sains",
                        "des filles toutes atteintes, des fils sains et des fils atteints",
                        "des enfants sains des deux sexes et des enfants atteints des deux sexes"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 67,
                    "question": "La formule chromosomique d'un garçon atteint du syndrome de Down est :",
                    "choices": [
                        "44 Autosomes + XY",
                        "45 Autosomes + XY",
                        "45 Autosomes + XX",
                        "44 Autosomes + X"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 68,
                    "question": "Les différences en acides aminés entre des protéines homologues appartenant à 2 espèces actuelles :",
                    "choices": [
                        "sont les conséquences de mutations ayant affecté le gène ancestral",
                        "constituent une preuve anatomique de l'évolution",
                        "sont d'autant plus nombreuses que l'ancêtre commun des 2 espèces est éloigné dans le temps",
                        "sont d'autant plus nombreuses que l'ancêtre commun des 2 espèces est proche dans le temps"
                    ],
                    "correct_index": [0, 2]
                }
            ]
        },
        {
            "id": "ch3",
            "title": "Évolution et Embryologie Comparée",
            "questions": [
                {
                    "id": 69,
                    "question": "Les organes homologues des êtres vivants ont :",
                    "choices": [
                        "nécessairement la même fonction",
                        "le même plan d'organisation",
                        "nécessairement la même forme",
                        "probablement la même origine"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 70,
                    "question": "En cas de trisomie 21 chez un garçon. Si l'anomalie de la méiose a lieu pendant la division réductionnelle chez la mère, le gamète ♂ à l'origine de ce garçon contient :",
                    "choices": [
                        "23 chromosomes dupliqués : 22 autosomes + Y",
                        "23 chromosomes simples : 22 autosomes + Y",
                        "24 chromosomes simples : 23 autosomes + X",
                        "24 chromosomes dupliqués : 23 autosomes + Y"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 71,
                    "question": "Le diagnostic prénatal d'aberrations chromosomiques se fait par :",
                    "choices": [
                        "l'analyse des protéines fœtales",
                        "l'établissement des caryotypes parentaux",
                        "l'analyse de l'ADN fœtal",
                        "l'établissement du caryotype fœtal"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 72,
                    "question": "Le nombre d'acides aminés identiques au niveau d'une protéine P (comportant 170 AA) existant chez trois espèces E1, E2, E3 est de: 156 entre PE1 et PE2 ; 165 entre PE1 et PE3 et 149 entre PE2 et PE3. On peut déduire de ces données que :",
                    "choices": [
                        "les gènes codant pour ces protéines sont homologues",
                        "le degré de parenté entre E1 et E2 est plus important que celui entre E1 et E3",
                        "on peut suggérer l'existence d'un ancêtre commun aux 3 espèces",
                        "l'ancêtre commun de E1 et E3 est plus ancien que celui de E2 et E3"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 73,
                    "question": "L'amniocentèse consiste à prélever :",
                    "choices": [
                        "du sang à partir du cordon ombilical",
                        "des villosités choriales",
                        "du liquide amniotique",
                        "des cellules fœtales"
                    ],
                    "correct_index": [2, 3]
                },
                {
                    "id": 74,
                    "question": "L'amplification génique a permis la :",
                    "choices": [
                        "stabilité de l'information génétique des êtres vivants au cours du temps",
                        "stabilité de la structure des chromosomes",
                        "complexification des structures et des fonctions des êtres vivants au cours du temps",
                        "création de nouveaux gènes"
                    ],
                    "correct_index": [2, 3]
                },
                {
                    "id": 75,
                    "question": "D'après l'embryologie comparée, la classe de vertébrés la plus primitive est celle :",
                    "choices": [
                        "des mammifères",
                        "des poissons",
                        "pour laquelle les différences entre l'embryon du stade initial et l'adulte sont les plus importantes",
                        "pour laquelle les différences entre l'embryon du stade initial et l'adulte sont les moins importantes"
                    ],
                    "correct_index": [1, 3]
                }
            ]
        },
        {
            "id": "ch4",
            "title": "Génétique & Évolution",
            "questions": [
                {
                    "id": 76,
                    "question": "Un individu double hétérozygote pour 2 gènes (A, a) et (B, b), produit des gamètes (aB) avec une fréquence de 0.25. On peut en déduire que :",
                    "choices": [
                        "Les deux gènes sont indépendants",
                        "La distance entre ces deux gènes est de 25 CM",
                        "Le génotype de cet individu est A//a B//b",
                        "Le génotype de cet individu est AB//ab"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 77,
                    "question": "Un père de génotype A//a, uni à une mère de génotype A//A, a eu un enfant atteint de trisomie 21, ayant 3 allèles au niveau de ses cellules : 2 allèles (A) et 1 allèle (a). On peut en déduire que :",
                    "choices": [
                        "le locus de ce gène est situé sur le chromosome 21",
                        "l'anomalie chromosomique est d'origine paternelle",
                        "l'anomalie chromosomique est d'origine maternelle",
                        "l'accident de la méiose s'est produit à la division équationnelle de la méiose"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 78,
                    "question": "On peut affirmer qu'un gène est lié au sexe porté par le chromosome sexuel X quand :",
                    "choices": [
                        "les deux sexes ont un seul allèle du gène",
                        "les deux sexes ont deux allèles du gène",
                        "le sexe masculin possède un allèle du gène alors que le sexe féminin n'en possède aucun",
                        "le sexe masculin possède un seul allèle du gène alors que le sexe féminin en possède deux"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 79,
                    "question": "Dans le cas d'une maladie autosomale récessive liée à l'absence d'une protéine enzymatique, l'électrophorèse des protéines révèle une bande unique pour les individus :",
                    "choices": [
                        "homozygotes récessifs",
                        "homozygotes dominants",
                        "hétérozygotes",
                        "atteints"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 80,
                    "question": "Une population :",
                    "choices": [
                        "est une sous unité de l'espèce",
                        "ne peut pas effectuer des échanges génétiques avec d'autres populations de la même espèce",
                        "peut devenir une nouvelle espèce",
                        "évolue sous l'effet des conditions de son environnement"
                    ],
                    "correct_index": [0, 2, 3]
                },
                {
                    "id": 81,
                    "question": "La sélection naturelle conduit à :",
                    "choices": [
                        "l'apparition de nouveaux gènes",
                        "l'apparition de nouveaux allèles pour certains gènes",
                        "la disparition progressive des individus porteurs de génotypes adaptés aux conditions de l'environnement",
                        "la persistance des individus de phénotypes adaptés aux conditions de l'environnement"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 82,
                    "question": "Les fentes branchiales :",
                    "choices": [
                        "apparaissent chez tous les embryons de vertébrés",
                        "apparaissent uniquement chez les tétrapodes (= vertébrés terrestres)",
                        "sont utiles chez les reptiles adultes",
                        "apparaissent chez les poissons au cours du développement embryonnaire et persistent chez la forme adulte"
                    ],
                    "correct_index": [0, 3]
                },
                {
                    "id": 83,
                    "question": "Chez l'Homme, il y a 4 gènes codant pour 4 chaînes légèrement différents d'hémoglobine. Ces gènes seraient formés par :",
                    "choices": [
                        "une amplification génique",
                        "une mutation chromosomique",
                        "la polyploïdie",
                        "le brassage interchromosomique"
                    ],
                    "correct_index": [0, 1]
                },
                {
                    "id": 84,
                    "question": "La substance grise des centres nerveux comporte des :",
                    "choices": [
                        "cellules",
                        "corps cellulaires",
                        "fibres nerveuses toutes parallèles",
                        "synapses"
                    ],
                    "correct_index": [0, 1, 3]
                },
                {
                    "id": 85,
                    "question": "Dans la substance blanche du cerveau, il y a :",
                    "choices": [
                        "des axones couverts d'une gaine de myéline",
                        "des corps cellulaires pyramidaux",
                        "des axones couverts d'une gaine de Schwann",
                        "des dendrites couvertes d'une gaine de myéline"
                    ],
                    "correct_index": [0]
                }
            ]
        },
        {
            "id": "ch5",
            "title": "Phylogénie et Système Nerveux",
            "questions": [
                {
                    "id": 86,
                    "question": "Un arbre phylogénétique est une représentation :",
                    "choices": [
                        "des relations de parenté entre des individus d'une espèce",
                        "des relations de parenté entre des espèces supposées avoir un ancêtre commun",
                        "qui est toujours établie à partir de données de la biologie moléculaire",
                        "qui peut être établie à partir de données paléontologiques"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 87,
                    "question": "La sélection naturelle :",
                    "choices": [
                        "est un mécanisme de l'évolution",
                        "est un phénomène par lequel une population évolue en fonction de son environnement",
                        "élimine toujours les nouveaux allèles apparus par mutation",
                        "favorise la propagation de certains caractères héréditaires plutôt que d'autres"
                    ],
                    "correct_index": [0, 1, 3]
                },
                {
                    "id": 88,
                    "question": "Deux organismes morphologiquement semblables O1 et O2 présentant respectivement 2n = 8 et 4n = 16 chromosomes. On peut penser que :",
                    "choices": [
                        "O1 est la forme ancestrale de O2",
                        "O1 et O2 appartiennent à deux espèces différentes",
                        "il s'agit d'un cas de fusion chromosomique",
                        "il s'agit d'un cas de polyploïdie"
                    ],
                    "correct_index": [0, 1, 3]
                },
                {
                    "id": 89,
                    "question": "La technique d'électrophorèse est utilisée en diagnostic prénatal pour :",
                    "choices": [
                        "prélever des cellules fœtales",
                        "établir le caryotype fœtal",
                        "analyser les protéines du fœtus",
                        "analyser l'ADN du fœtus"
                    ],
                    "correct_index": [2, 3]
                },
                {
                    "id": 90,
                    "question": "L'analyse de l'ADN fœtal fait intervenir, dans l'ordre, les étapes suivantes :",
                    "choices": [
                        "Electrophorèse - fragmentation de l'ADN - autoradiographie - utilisation de la sonde radioactive",
                        "Fragmentation de l'ADN - électrophorèse - utilisation de la sonde radioactive - autoradiographie",
                        "Autoradiographie - utilisation de la sonde radioactive - fragmentation de l'ADN - électrophorèse",
                        "Utilisation de la sonde radioactive - fragmentation de l'ADN - autoradiographie - électrophorèse"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 91,
                    "question": "Une femme atteinte d'une maladie dominante liée au chromosome X :",
                    "choices": [
                        "doit être issue obligatoirement d'une mère atteinte",
                        "doit être issue obligatoirement d'un père atteint",
                        "donne des fils tous atteints de cette maladie",
                        "peut être hétérozygote"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 92,
                    "question": "On peut conclure qu'une maladie est autosomale dominante quand :",
                    "choices": [
                        "tout individu atteint a au moins un parent atteint",
                        "les deux sexes ont deux allèles du gène",
                        "un sujet masculin atteint présente dans son ADN les deux formes alléliques du gène correspondant",
                        "deux parents atteints ont eu un enfant sain"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 93,
                    "question": "Le cerveau et la moelle épinière ont en commun le (ou les) points suivant(s) :",
                    "choices": [
                        "ils font partie des centres nerveux",
                        "ils comportent une substance blanche",
                        "ils comportent des corps cellulaires",
                        "ils appartiennent à l'encéphale"
                    ],
                    "correct_index": [0, 1, 2]
                }
            ]
        }
    ]
},

{
    "id": "model5",
    "title": "Génétique & Neurophysiologie",
    "chapters": [
        {
            "id": "ch1",
            "title": "Génétique et Liaison Génomique",
            "questions": [
                {
                    "id": 94,
                    "question": "Le croisement d'une drosophile femelle [AB] avec un mâle [ab] donne 50% [Ab] et 50% [aB]. Avec (A,a) et (B,b) sont deux couples d'allèles de deux gènes tels que A>a et B>b. Dans ce cas :",
                    "choices": [
                        "les gènes considérés sont liés",
                        "les gènes considérés sont indépendants",
                        "la femelle a produit deux types équiprobables de gamètes",
                        "il y a eu brassage intrachromosomique lors de la gamétogenèse chez la femelle"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 95,
                    "question": "Pour savoir si deux couples d'allèles sont indépendants ou liés, on peut réaliser :",
                    "choices": [
                        "un test cross",
                        "une analyse de l'ADN",
                        "un croisement entre deux individus de races pures",
                        "un croisement entre deux hybrides pour les deux couples d'allèles"
                    ],
                    "correct_index": [0, 3]
                },
                {
                    "id": 96,
                    "question": "A partir d'un caryotype à 2n chromosomes :",
                    "choices": [
                        "l'amplification génique peut être à l'origine d'un caryotype à 4n chromosomes",
                        "la fusion chromosomique peut être à l'origine d'un caryotype à 4n chromosomes",
                        "l'amplification génique peut être à l'origine d'un caryotype à 2n+1 chromosomes",
                        "la fusion chromosomique peut être à l'origine d'un autre caryotype à 2n chromosomes"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 97,
                    "question": "A partir du document 1 on peut déduire que :",
                    "choices": [
                        "la mère de cet enfant est homozygote pour les deux gènes considérés",
                        "la mère de cet enfant est hétérozygote uniquement pour l'un des deux gènes considérés",
                        "la mère de cet enfant est hétérozygote pour les deux gènes considérés",
                        "l'enfant est un garçon trisomique"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 98,
                    "question": "Les garnitures chromosomiques du document 1 permettent d'affirmer que cet enfant est issu de la fécondation :",
                    "choices": [
                        "de deux gamètes à n=23",
                        "d'un gamète paternel à n+1=24 avec un gamète maternel à n=23",
                        "d'un gamète paternel à n=23 avec un gamète maternel à n+1=24",
                        "de deux gamètes à n+1=24"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 99,
                    "question": "Les garnitures chromosomiques du document 1 permettent d'affirmer qu'il y a eu un déroulement anormal de la méiose lors de :",
                    "choices": [
                        "la spermatogenèse à l'anaphase I",
                        "la spermatogenèse à l'anaphase II",
                        "l'ovogenèse à l'anaphase I",
                        "l'ovogenèse à l'anaphase II"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 100,
                    "question": "Le croisement des deux drosophiles l'une [A1] l'autre [A2] peut produire une descendance homogène ayant le phénotype :",
                    "choices": [
                        "[A1A2] en cas de codominance",
                        "[A1] en cas de dominance absolue si ces drosophiles sont hétérozygotes",
                        "[A2] en cas de dominance absolue si ces drosophiles sont hétérozygotes",
                        "[A2] en cas de dominance absolue si ces drosophiles sont homozygotes"
                    ],
                    "correct_index": [0, 3]
                },
                {
                    "id": 101,
                    "question": "Dans le cas d'un monohybridisme autosomal avec dominance absolue ; la descendance du test-cross :",
                    "choices": [
                        "est homogène si l'individu testeur est de lignée pure",
                        "est homogène si l'individu à tester est de lignée pure",
                        "est hétérogène avec les proportions phénotypiques 1/2 ; 1/2 si l'individu à tester est hétérozygote",
                        "est hétérogène avec les proportions phénotypiques 1/2 ; 1/2 si l'individu testeur est homozygote"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 102,
                    "question": "Dans la F2 de monohybridisme, les individus à phénotype dominant :",
                    "choices": [
                        "ne peuvent être qu'hétérozygotes",
                        "ne peuvent être qu'homozygotes",
                        "peuvent être homozygotes",
                        "peuvent être hétérozygotes"
                    ],
                    "correct_index": [2, 3]
                }
            ]
        },
        {
            "id": "ch2",
            "title": "Neurophysiologie et Système Nerveux",
            "questions": [
                {
                    "id": 103,
                    "question": "Les fibres nerveuses de la racine antérieure d'un nerf rachidien sont :",
                    "choices": [
                        "des fibres afférentes",
                        "des fibres efférentes",
                        "des axones de motoneurones",
                        "des dendrites de neurones sensitifs"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 104,
                    "question": "L'observation clinique en rapport avec la poliomyélite permet de :",
                    "choices": [
                        "localiser les fibres sensitives",
                        "localiser les corps cellulaires",
                        "préciser le sens de conduction du message nerveux",
                        "suggérer la continuité entre les corps cellulaires et les fibres nerveuses"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 105,
                    "question": "Les terminaisons axoniques (arborisations terminales) des fibres nerveuses afférentes sont localisées au niveau :",
                    "choices": [
                        "des fibres intrafusales",
                        "des fibres extrafusales",
                        "de la substance grise médullaire",
                        "de la substance blanche médullaire"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 106,
                    "question": "Les fuseaux neuromusculaires :",
                    "choices": [
                        "sont des thermorécepteurs",
                        "sont des effecteurs du réflexe myotatique",
                        "existent au niveau des tendons des muscles",
                        "sont en relation directe avec des neurones sensitifs Ia"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 107,
                    "question": "Dans la substance blanche médullaire, il existe :",
                    "choices": [
                        "des dendrites et des axones",
                        "des axones et des cellules gliales",
                        "des dendrites et des cellules gliales",
                        "des dendrites, des axones et des cellules gliales"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 108,
                    "question": "La destruction des corps cellulaires situés dans la moelle épinière entraine la dégénérescence de certaines fibres du nerf rachidien correspondant. On en déduit :",
                    "choices": [
                        "l'existence d'une discontinuité entre corps cellulaires et fibres nerveuses",
                        "l'existence d'une continuité entre corps cellulaires et fibres nerveuses",
                        "que toutes les fibres de ce nerf ont des corps cellulaires situés dans la moelle épinière",
                        "que certaines fibres de ce nerf ont des corps cellulaires situés dans le ganglion spinal"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 109,
                    "question": "Dans la substance blanche cérébrale (du cerveau), il existe :",
                    "choices": [
                        "des dendrites et des axones",
                        "des corps cellulaires pyramidaux et des cellules gliales",
                        "des axones et des cellules gliales",
                        "des dendrites, des axones et des cellules gliales"
                    ],
                    "correct_index": [2]
                }
            ]
        },
        {
            "id": "ch3",
            "title": "Évolution et Phylogénie",
            "questions": [
                {
                    "id": 110,
                    "question": "La sélection naturelle :",
                    "choices": [
                        "crée de nouveaux allèles au sein d'une population",
                        "augmente de façon orientée la fréquence de certains allèles au sein des populations",
                        "est un processus aléatoire",
                        "favorise toujours les mêmes allèles même lorsque les conditions du milieu changent"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 111,
                    "question": "L'amplification génique :",
                    "choices": [
                        "est la création de nouveaux gènes à partir d'un gène ancestral",
                        "est une mutation chromosomique résultant de la non-disjonction des chromosomes lors de la méiose",
                        "est une mutation affectant le nombre de chromosomes",
                        "peut expliquer la complexification des structures et des fonctions des êtres vivants au cours de l'évolution"
                    ],
                    "correct_index": [0, 3]
                },
                {
                    "id": 112,
                    "question": "Un arbre phylogénétique :",
                    "choices": [
                        "peut être établi à partir de données de la paléontologie",
                        "peut être établi à partir de données de la biologie moléculaire",
                        "représente les liens de parenté entre des individus qui se ressemblent",
                        "représente les mécanismes de l'évolution des espèces"
                    ],
                    "correct_index": [0, 1]
                }
            ]
        }
    ]
},

{
    "id": "model6",
    "title": "Neurophysiologie et Synapses",
    "chapters": [
        {
            "id": "ch1",
            "title": "Structure du Système Nerveux et Conduction Nerveuse",
            "questions": [
                {
                    "id": 113,
                    "question": "Dans la substance blanche de la moelle épinière, il y a :",
                    "choices": [
                        "des dendrites",
                        "des corps cellulaires",
                        "des axones couverts d'une gaine de Schwann",
                        "des axones couverts d'une gaine de myéline"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 114,
                    "question": "La vitesse de propagation du message nerveux est :",
                    "choices": [
                        "la même pour toutes les fibres nerveuses",
                        "variable selon le diamètre de la fibre nerveuse",
                        "plus grande pour les fibres myélinisées que pour les fibres amyélinisées de même diamètre",
                        "plus importante quand la stimulation est plus intense"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 115,
                    "question": "Au niveau du site transducteur d'un récepteur sensoriel, la modification de la ddp suite à une stimulation efficace se manifeste par :",
                    "choices": [
                        "un potentiel d'action",
                        "un potentiel de récepteur",
                        "une dépolarisation plus ample que celle obtenue pour une stimulation inefficace",
                        "une dépolarisation de même amplitude que celle obtenue pour une stimulation inefficace"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 116,
                    "question": "De point de vue structural, les synapses neuro-neuroniques et neuro-musculaires ont en commun :",
                    "choices": [
                        "un élément pré-synaptique nerveux",
                        "un élément post synaptique musculaire",
                        "des canaux voltage dépendants au niveau de la membrane post-synaptique",
                        "une membrane post-synaptique fortement plissée"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 117,
                    "question": "De point de vue fonctionnel, la plaque motrice se distingue de la synapse neuro-neuronique par le fait que :",
                    "choices": [
                        "un PA pré-synaptique déclenche un PA post-synaptique",
                        "la transmission est chimique",
                        "la transmission est unidirectionnelle",
                        "l'acétylcholine provoque directement l'ouverture des canaux voltage dépendants à Na+"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 118,
                    "question": "Dans une cellule nerveuse au repos :",
                    "choices": [
                        "les ions Na+ entrent dans le milieu intracellulaire par un transport actif",
                        "les ions Na+ entrent dans le milieu intracellulaire par diffusion",
                        "la pompe Na+/K+ fonctionne en permanence",
                        "les canaux à Na+ et à K+ voltage-dépendants sont ouverts"
                    ],
                    "correct_index": [1, 2]
                }
            ]
        },
        {
            "id": "ch2",
            "title": "Potentiels Synaptiques et Propriétés des Neurones",
            "questions": [
                {
                    "id": 119,
                    "question": "Les ions Cl⁻ interviennent dans :",
                    "choices": [
                        "la transmission synaptique neuro-neuronique",
                        "la transmission synaptique neuromusculaire",
                        "l'exocytose des neurotransmetteurs",
                        "la phase de repolarisation du PA"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 120,
                    "question": "Les PPS sont qualifiés de graduables car :",
                    "choices": [
                        "ils sont non propageables",
                        "ils n'ont pas de périodes réfractaires",
                        "ils sont amortis",
                        "leur amplitude augmente avec la quantité du neurotransmetteur libéré"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 121,
                    "question": "Le caractère unidirectionnel de la propagation du potentiel d'action est dû :",
                    "choices": [
                        "à l'existence de courants locaux",
                        "à l'existence d'une phase d'hyperpolarisation",
                        "au blocage momentané de canaux voltage-dépendants",
                        "à l'existence d'une période réfractaire"
                    ],
                    "correct_index": [2, 3]
                },
                {
                    "id": 122,
                    "question": "La sommation spatiale de deux PPS s'effectue :",
                    "choices": [
                        "au niveau des membranes présynaptique",
                        "au niveau du cône axonique",
                        "suite à l'arrivée simultanée de deux ou plusieurs PA présynaptiques",
                        "suite à l'arrivée de deux ou plusieurs PA successifs dans un même bouton synaptique"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 123,
                    "question": "Suite à la section d'un nerf rachidien :",
                    "choices": [
                        "la région du corps innervée par ce nerf perd la sensibilité et la motricité",
                        "la région du corps innervée par ce nerf rachidien perd uniquement la motricité",
                        "il y a une dégénérescence des fibres nerveuses dans le bout central",
                        "il y a une dégénérescence de la moitié des fibres nerveuses dans le bout périphérique"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 124,
                    "question": "Les fibres sensitives Ia :",
                    "choices": [
                        "sont des axones de corps cellulaires du ganglion spinal",
                        "sont des dendrites de neurones bipolaires",
                        "innervent les fibres musculaires intrafusales",
                        "innervent les fibres musculaires extrafusales"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 125,
                    "question": "L'unité motrice est :",
                    "choices": [
                        "le sarcomère",
                        "la myofibrille",
                        "la synapse neuromusculaire",
                        "est composée de plusieurs cellules"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 126,
                    "question": "Les réflexes myotatiques sont :",
                    "choices": [
                        "polysynaptiques",
                        "médullaires",
                        "des réflexes d'étirement",
                        "des réflexes à point de départ musculaire"
                    ],
                    "correct_index": [1, 2, 3]
                }
            ]
        },
        {
            "id": "ch3",
            "title": "Calculs et Propriétés des Synapses",
            "questions": [
                {
                    "id": 127,
                    "question": "Une chaîne neuronique de 12,5 cm de long est parcourue par un message nerveux. Sachant que la vitesse le long des axones est de 25 m s⁻¹, le délai synaptique est de 0,5 ms et le temps de parcours de cette chaîne est de 6 ms, on peut alors déduire que le message nerveux a franchi :",
                    "choices": [
                        "une synapse",
                        "deux synapses",
                        "trois synapses",
                        "quatre synapses"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 128,
                    "question": "De point de vue structural, les synapses neuro-musculaires se distinguent des synapses neuro-neuroniques par :",
                    "choices": [
                        "le fait que l'élément présynaptique est nerveux",
                        "la présence de myofibrilles dans l'élément postsynaptique",
                        "la présence de replis au niveau de la membrane postsynaptique",
                        "la présence de CCD au niveau de la membrane postsynaptique"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 129,
                    "question": "Une unité motrice :",
                    "choices": [
                        "est l'ensemble des motoneurones α d'un muscle",
                        "est l'ensemble des motoneurones α et les fibres musculaires qu'ils innervent",
                        "est une synapse neuromusculaire",
                        "comporte un seul neurone"
                    ],
                    "correct_index": [0]
                }
            ]
        }
    ]
},

{
    "id": "model7",
    "title": "Neurophysiologie Avancée",
    "chapters": [
        {
            "id": "ch1",
            "title": "Propagation du Potentiel d'Action et Canaux Ioniques",
            "questions": [
                {
                    "id": 130,
                    "question": "Le caractère unidirectionnel de la propagation du potentiel d'action est dû :",
                    "choices": [
                        "à l'existence de courants locaux",
                        "à l'existence d'une période réfractaire",
                        "à l'existence d'une phase d'hyperpolarisation",
                        "au blocage momentané de canaux voltage-dépendants"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 131,
                    "question": "Les canaux ioniques de la membrane nerveuse :",
                    "choices": [
                        "sont spécifiques",
                        "sont de nature lipidique",
                        "assurent tous des flux ioniques par diffusion",
                        "font passer les ions à travers la membrane en consommant de l'énergie"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 132,
                    "question": "Les ions Ca²⁺ interviennent dans :",
                    "choices": [
                        "la transmission synaptique",
                        "la phase de repolarisation du PA",
                        "l'exocytose des neurotransmetteurs",
                        "l'arrivée d'un PA au bouton synaptique"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 133,
                    "question": "Pendant la phase de repolarisation d'un potentiel d'action :",
                    "choices": [
                        "les canaux de fuite se ferment",
                        "les canaux voltage-dépendants à Na⁺ se ferment",
                        "des ions K⁺ quittent en quantité importante le milieu intracellulaire",
                        "des ions négatifs entrent dans le milieu intracellulaire pour rétablir la négativité interne"
                    ],
                    "correct_index": [1, 2]
                }
            ]
        },
        {
            "id": "ch2",
            "title": "Calculs et Propriétés Synaptiques",
            "questions": [
                {
                    "id": 134,
                    "question": "Une chaîne de 3 neurones de 25 cm de long est parcourue par un PA de vitesse de propagation de 50 m s⁻¹ dans chaque neurone. Sachant que le délai synaptique est de 0.5 ms, le temps de parcours de cette chaîne est :",
                    "choices": [
                        "5 ms",
                        "5.5 ms",
                        "6 ms",
                        "6.5 ms"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 135,
                    "question": "La fixation d'acétylcholine sur les récepteurs de la membrane postsynaptique déclenche l'ouverture des canaux :",
                    "choices": [
                        "de fuite",
                        "chimio-dépendants aux ions K⁺",
                        "chimio-dépendants aux ions Na⁺",
                        "voltage-dépendants aux ions Ca²⁺"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 136,
                    "question": "La sommation spatiale des potentiels postsynaptiques se produit au niveau :",
                    "choices": [
                        "du cône axonique",
                        "du premier nœud de Ranvier",
                        "de la membrane présynaptique",
                        "de la membrane postsynaptique"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 137,
                    "question": "Les réflexes d'étirement :",
                    "choices": [
                        "sont médullaires ou encéphaliques",
                        "font intervenir des récepteurs cutanés",
                        "font intervenir deux types de circuits neuroniques",
                        "permettent d'éviter la perte de l'équilibre du corps"
                    ],
                    "correct_index": [2, 3]
                }
            ]
        }
    ]
},
{
    "id": "model8",
    "title": "Immunologie & Endocrinien",
    "chapters": [
        {
            "id": "ch1",
            "title": "Réponses au Stress et Immunologie de Base",
            "questions": [
                {
                    "id": 138,
                    "question": "Au cours des réactions de l'organisme aux agents stressants, la succession normale des sécrétions hormonales est :",
                    "choices": [
                        "thyroxine puis TSH puis corticolibérines puis adrénaline",
                        "TSH puis corticolibérines puis adrénaline puis thyroxine",
                        "adrénaline puis corticolibérines puis TSH puis thyroxine",
                        "adrénaline puis TSH puis corticolibérines puis thyroxine"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 139,
                    "question": "Les marqueurs membranaires des cellules immunitaires sont :",
                    "choices": [
                        "des récepteurs de reconnaissance du non soi",
                        "des antigènes du non soi",
                        "des molécules HLA",
                        "des glycoprotéines codées par le CMH"
                    ],
                    "correct_index": [2, 3]
                },
                {
                    "id": 140,
                    "question": "La reconnaissance d'un antigène par des lymphocytes T4 (LT4) :",
                    "choices": [
                        "se fait au moyen d'immunoglobulines membranaires",
                        "se fait au moyen de récepteurs de type TCR",
                        "nécessite des leucocytes comme cellules présentatrices de l'antigène",
                        "peut se faire à travers des lymphocytes B"
                    ],
                    "correct_index": [1, 2, 3]
                },
                {
                    "id": 141,
                    "question": "L'intervention du complément dans une réaction immunitaire spécifique :",
                    "choices": [
                        "montre qu'il s'agit d'une RIMH",
                        "montre qu'il s'agit d'une RIMC",
                        "se fait au cours de la phase d'induction",
                        "se fait au cours de la phase d'amplification"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 142,
                    "question": "Dans le cas d'une allergie, la sensibilisation des mastocytes consiste à :",
                    "choices": [
                        "la synthèse d'anticorps de classe E (Ig E) par ces cellules",
                        "la libération d'histamine par ces cellules",
                        "l'action des histamines sur ces cellules",
                        "la fixation d'Ig E sur ces cellules"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 143,
                    "question": "Le VIH est un rétrovirus car :",
                    "choices": [
                        "il renferme des molécules d'acide ribonucléique",
                        "il renferme des molécules d'acide désoxyribonucléique",
                        "il se réplique dans la cellule hôte",
                        "il retourne à la cellule hôte après bourgeonnement"
                    ],
                    "correct_index": [0]
                }
            ]
        },
        {
            "id": "ch2",
            "title": "Neurotransmetteurs et Réponses Immunitaires",
            "questions": [
                {
                    "id": 144,
                    "question": "Les neurones dopaminergiques :",
                    "choices": [
                        "existent dans le système limbique",
                        "renferment des vésicules de cocaïne",
                        "renferment des vésicules de dopamine",
                        "ne peuvent plus récupérer la dopamine en présence de cocaïne"
                    ],
                    "correct_index": [0, 2, 3]
                },
                {
                    "id": 145,
                    "question": "Les glandes surrénales interviennent dans le stress par la sécrétion :",
                    "choices": [
                        "de corticolibérine",
                        "d'adrénaline",
                        "d'ACTH",
                        "de cortisol"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 146,
                    "question": "Parmi les cellules suivantes, celles qui sont nécessairement impliquées dans toute réponse immunitaire acquise sont les :",
                    "choices": [
                        "lymphocytes B",
                        "macrophages",
                        "lymphocytes T4",
                        "plasmocytes"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 147,
                    "question": "Au cours de la phase effectrice humorale, la formation des complexes immuns :",
                    "choices": [
                        "fait intervenir les sites existant à l'extrémité de la partie constante des molécules d'anticorps",
                        "fait intervenir les parties variables des chaînes L et H des molécules d'anticorps",
                        "bloque l'action de l'antigène",
                        "détruit l'antigène"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 148,
                    "question": "Parmi les propositions suivantes, celles qui caractérisent les mastocytes sont :",
                    "choices": [
                        "la présence de récepteurs membranaires de type Igs",
                        "la présence de récepteurs membranaires spécifiques des IgE",
                        "la richesse en vésicules d'histamine",
                        "la richesse en vésicules de perforine"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 149,
                    "question": "Parmi les propositions suivantes, celles qui s'appliquent à l'interleukine 2 sont :",
                    "choices": [
                        "sa production par les macrophages activés",
                        "sa production par les Lymphocytes T auxiliaires",
                        "son action stimulatrice dans la phase d'amplification",
                        "son action stimulatrice dans la phase effectrice"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 150,
                    "question": "Parmi les caractères suivants, ceux qui conviennent aux ganglions lymphatiques sont :",
                    "choices": [
                        "ils sont le siège du déroulement des réponses immunitaires spécifiques",
                        "Ils sont le siège de maturation des lymphocytes",
                        "ils sont peuplés de divers clones de lymphocytes immunocompétents",
                        "Ils font partie des organes lymphoïdes centraux"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 151,
                    "question": "Les maladies caractérisant la phase du sida déclaré :",
                    "choices": [
                        "sont des maladies psychosomatiques",
                        "sont des maladies opportunistes",
                        "témoignent d'une déficience immunitaire",
                        "témoignent de réactions immunitaires excessives contraires à la protection"
                    ],
                    "correct_index": [1, 2]
                }
            ]
        },
        {
            "id": "ch3",
            "title": "Régulations Homéostatiques et Immunologie Appliquée",
            "questions": [
                {
                    "id": 152,
                    "question": "Une hémorragie importante provoque l'activation :",
                    "choices": [
                        "du système sympathique",
                        "du système parasympathique",
                        "de l'interneurone inhibiteur",
                        "des nerfs splanchniques"
                    ],
                    "correct_index": [0, 3]
                },
                {
                    "id": 153,
                    "question": "Les cellules corticosurrénaliennes sécrètent :",
                    "choices": [
                        "le cortisol",
                        "l'adrénaline",
                        "l'aldostérone",
                        "la corticolibérine"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 154,
                    "question": "Un homme ayant vécu pendant une minute un évènement terrifiant lors d'un jeu d'une caméra cachée, subit :",
                    "choices": [
                        "une augmentation de la sécrétion de thyroxine",
                        "une augmentation de la sécrétion d'adrénaline",
                        "une forte sécrétion du cortisol",
                        "une vasoconstriction au niveau de sa peau"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 155,
                    "question": "La stimulation de l'interneurone inhibiteur bulbaire chez un chien normal entraîne :",
                    "choices": [
                        "une vasoconstriction",
                        "une baisse de la fréquence cardiaque",
                        "une augmentation de la fréquence des PA dans les fibres sympathiques cardiaques",
                        "une diminution de la fréquence des PA dans les fibres du nerf splanchnique"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 156,
                    "question": "Les macrophages peuvent avoir le ou les rôle(s) suivants :",
                    "choices": [
                        "la sécrétion d'IL2",
                        "la présentation de l'antigène aux LB",
                        "la phagocytose de l'antigène",
                        "l'activation du complément"
                    ],
                    "correct_index": [1, 2]
                },
                {
                    "id": 157,
                    "question": "Les anticorps anti-Rhésus, quand ils existent, peuvent passer du sang maternel au sang fœtal à travers le placenta. Ces anticorps peuvent :",
                    "choices": [
                        "nuire à la santé du fœtus Rh⁺",
                        "nuire à la santé du fœtus Rh⁻",
                        "être issus d'une mère Rh⁺",
                        "être issus d'une mère Rh⁻"
                    ],
                    "correct_index": [0, 3]
                }
            ]
        }
    ]
},
{
    "id": "model9",
    "title": "Physio cardio – immuno",
    "chapters": [
        {
            "id": "ch1",
            "title": "Régulation Vasculaire et Système Endocrinien",
            "questions": [
                {
                    "id": 158,
                    "question": "La vasodilatation peut être déterminée par :",
                    "choices": [
                        "une libération d'acétylcholine par les fibres parasympathiques",
                        "une libération d'adrénaline par la médullosurrénale",
                        "une sécrétion d'aldostérone par la corticosurrénale",
                        "une stimulation de l'interneurone inhibiteur"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 159,
                    "question": "Parmi les organes suivants, celui (ou ceux) qui est (ou sont) la cible de la TSH est :",
                    "choices": [
                        "le cœur",
                        "la thyroïde",
                        "l'hypophyse",
                        "l'hypothalamus"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 160,
                    "question": "Le neurone dopaminergique est :",
                    "choices": [
                        "excitateur",
                        "la cible de la dopamine",
                        "la cible de la cocaïne",
                        "responsable de la sensation d'angoisse"
                    ],
                    "correct_index": [0, 2]
                },
                {
                    "id": 161,
                    "question": "Le plasma sanguin d'un sujet S agglutine in-vitro des globules rouges portant à la fois les agglutinogènes A et B. On peut en déduire que le sujet S :",
                    "choices": [
                        "est de groupe AB",
                        "est de groupe O",
                        "peut être de groupe A",
                        "peut être de groupe B"
                    ],
                    "correct_index": [2, 3]
                },
                {
                    "id": 162,
                    "question": "Les anticorps circulants sont :",
                    "choices": [
                        "des molécules spécifiques",
                        "des glycoprotéines membranaires",
                        "les récepteurs des LB immunocompétents",
                        "formés de quatre chaînes polypeptidiques identiques"
                    ],
                    "correct_index": [0]
                },
                {
                    "id": 163,
                    "question": "Les LB peuvent :",
                    "choices": [
                        "sécréter l'IL2",
                        "présenter l'antigène aux LT4",
                        "phagocyter le complexe immun",
                        "sécréter des anticorps circulants"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 164,
                    "question": "Le complément :",
                    "choices": [
                        "correspond à des cellules phagocytaires",
                        "correspond à des enzymes",
                        "est activé lors de la phase d'induction de la RIMH",
                        "est activé lors de la phase effectrice de la RIMH"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 165,
                    "question": "Le choc anaphylactique consécutif à une prise de pénicilline est :",
                    "choices": [
                        "le résultat d'un 1er contact avec l'allergène",
                        "provoqué par une activation des mastocytes",
                        "provoqué par une sensibilisation des mastocytes",
                        "une réaction allergique localisée"
                    ],
                    "correct_index": [1]
                }
            ]
        },
        {
            "id": "ch2",
            "title": "Physiologie Musculaire et Immunologie",
            "questions": [
                {
                    "id": 166,
                    "question": "L'unité structurale du muscle squelettique est :",
                    "choices": [
                        "le sarcomère",
                        "la myofibrille",
                        "le disque clair",
                        "la fibre musculaire"
                    ],
                    "correct_index": [3]
                },
                {
                    "id": 167,
                    "question": "Dans la fibre musculaire, la respiration cellulaire se déroule :",
                    "choices": [
                        "au niveau de l'hyaloplasme",
                        "au niveau des mitochondries",
                        "avant la glycolyse",
                        "après tout effort qu'il soit intense ou modéré"
                    ],
                    "correct_index": [1, 3]
                },
                {
                    "id": 168,
                    "question": "Au niveau de la bande H d'un sarcomère, on trouve :",
                    "choices": [
                        "une strie Z",
                        "des filaments d'actine",
                        "des filaments de myosine",
                        "des filaments d'actine et de myosine"
                    ],
                    "correct_index": [2]
                },
                {
                    "id": 169,
                    "question": "Lors la régulation nerveuse de la pression artérielle, l'activation du ganglion étoilé :",
                    "choices": [
                        "a un effet hypotenseur",
                        "a un effet hypertenseur",
                        "entraîne une vasodilatation",
                        "entraîne une vasoconstriction"
                    ],
                    "correct_index": [1]
                },
                {
                    "id": 170,
                    "question": "Dans la réponse immunitaire spécifique, les immunoglobulines peuvent jouer le rôle :",
                    "choices": [
                        "d'effecteurs",
                        "de marqueurs du soi",
                        "d'immunosuppresseurs",
                        "de récepteurs assurant la reconnaissance de l'antigène"
                    ],
                    "correct_index": [0, 3]
                }
            ]
        }
    ]
}

    ]
};
