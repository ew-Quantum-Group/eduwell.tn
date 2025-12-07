// QCM Data Structure with multi-select questions
const qcmData = {
    "models": [
        {
            "id": "model1",
            "title": "Reproduction Humaine — Part I",
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
            "title": "Reproduction Humaine — Part II",
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
        }
    ]
};