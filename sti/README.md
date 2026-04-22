Quiz STI






Quiz pour la matière STI destiné aux élèves de 3ᵉ et 4ᵉ années Sciences Informatiques (Tunisie). Projet simple en HTML/CSS/JavaScript pour réviser en autonomie : questions, réponses, score et feedback.

Licence : GPL-3.0. 
GitHub

✨ Fonctionnalités

Quiz côté client (aucun backend requis).

Banque de questions chargée depuis le dossier data/.

Interface légère et responsive.

Calcul de score et récapitulatif de fin.

Images/brand : logo.png (optionnel pour l’en-tête).

📦 Structure du projet
quiz-sti/
├─ index.html       # Page principale (ouvre le quiz)
├─ app.js           # Logique du quiz (chargement questions, navigation, score)
├─ data/            # Jeux de questions (JSON/…)
├─ logo.png         # Logo du projet (facultatif)
└─ LICENSE          # GPL-3.0


Les fichiers visibles dans le dépôt incluent index.html, app.js, data/, logo.png et LICENSE. 
GitHub

🚀 Démarrage rapide

Cloner le dépôt :

git clone https://github.com/fodel/quiz-sti.git
cd quiz-sti


Lancer localement :

Option 1 : double-clique simplement sur index.html (suffit pour la plupart des navigateurs).

Option 2 (recommandée) : servir en local pour éviter des soucis CORS :

# Python 3
python -m http.server 8000
# puis ouvre http://localhost:8000 dans ton navigateur

🧩 Données des questions

Place tes fichiers de questions dans data/.

Tu peux organiser par thème, niveau ou chapitre (ex. sti-reseaux.json, algorithmes-4SI.json, etc.).

Assure-toi que app.js charge les bons fichiers (voir variable/fonction de chargement des données).

Consulte les exemples présents dans data/ et adapte le format de manière cohérente. 
GitHub

🖥️ Personnalisation

Logo/Titre : remplace logo.png et mets à jour le titre dans index.html.

Styles : ajoute un fichier CSS ou des styles dans index.html.

Feedback : dans app.js, tu peux activer/désactiver l’affichage des réponses correctes à la fin du quiz.

✅ Bonnes pratiques pédagogiques

Mélange QCM, vrai/faux, complétion de code (pour STI/4SI).

Varie le niveau de difficulté (débutant → avancé).

Ajoute des explications après chaque réponse pour renforcer l’apprentissage.

🧪 Tests & Qualité

Ouvre le quiz et parcours un jeu de questions complet.

Vérifie :

le chargement des données,

le calcul du score,

le comportement sur mobile,

les cas limites (aucune question, formats inattendus).

🤝 Contribuer

Les contributions sont les bienvenues !

Fork le repo

Crée une branche : git checkout -b feat/nouvelle-fonction

Commit : git commit -m "Ajoute: …"

Push : git push origin feat/nouvelle-fonction

Ouvre une Pull Request

N’oublie pas :

d’ajouter/adapter les fichiers dans data/,

d’inclure des exemples de questions et un court README de données si tu ajoutes un nouveau format.

🗺️ Roadmap (suggestions)

 Chronomètre par question/série.

 Mode examen (désactive indication immédiate).

 Filtrage par niveau / chapitre.

 Export des résultats (CSV/JSON).

 Localisation (français → arabe/anglais).

 Hébergement via GitHub Pages (Settings → Pages).

📄 Licence

Ce projet est sous licence GPL-3.0 – voir le fichier LICENSE
. 
GitHub

👤 Auteur

Abidi Mohamed Fadhel — mainteneur du projet.
L’objectif est d’offrir un outil simple et libre pour réviser la matière STI en 3ᵉ/4ᵉ années sciences informatiques en Tunisie. 
GitHub
