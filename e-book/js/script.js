
  /* ===================================================
     INTRO ANIMATION
  ==================================================== */

  (function() {
    const intro = document.getElementById('siteIntro');
    const header = document.getElementById('siteHeader');
    setTimeout(() => {
      intro.classList.add('dismissing');
      setTimeout(() => { header.classList.add('revealed'); }, 200);
      setTimeout(() => { intro.classList.add('gone'); }, 700);
    }, 1600);
  })();

  const resources = [
    { id: 17, title: "Séries d'exercices – Pression intérieure", description: "Série d'exercices sur la pression interieure (énoncés + corrections) pour préparation Bac avec amélioration du niveau.", files: [ { name: "Énoncé - 1", url: "https://drive.google.com/file/d/1d1HuTg4dpr26cmlyGjl5pO_Wig47oUyj/preview" }, { name: "Correction - 1", url: "https://drive.google.com/file/d/1fvO2wT5lGYwf3lK4sCNaR3dfIgAYLztm/preview" }, { name: "Énoncé - 2", url: "https://drive.google.com/file/d/1z3guLBD25Seo-CL38L2c97HYqe5OZdM9/preview" }, { name: "Correction - 2", url: "https://drive.google.com/file/d/1dLD590UVbtGApsrB85UOCAv-vzi99isu/preview" }, { name: "Énoncé - 3", url: "https://drive.google.com/file/d/1KQutZfvgJ57a-PhjS6ieyavue42veI4b/preview" }, { name: "Correction - 3", url: "https://drive.google.com/file/d/1FaerIfWgKuwBMIZWplilo5pQUBoIP8Gs/preview" }, { name: "Correction - 8", url: "https://drive.google.com/file/d/1R6KElxabF9QYKwFxBaU4H9lOl28ksnMK/preview" } ] },
    { id: 18, title: "Cours – Pression intérieure", description: "Cours complet sur la pression interieure pour bien comprendre les notions essentielles et préparer le Bac efficacement.", files: [ { name: "Cours - Pression intérieure", url: "https://drive.google.com/file/d/1L1Gdp_Gv8AMS2te4F5qoHT2NZPnmGCej/preview" } ] },
    { "id": 13, "title": "Oscillation Mécanique – Force", "description": "Fiches de méthode et séries d'exercices avec corrections pour maîtriser les oscillations mecaniques force.", "files": [ { "name": "Fiche de méthode – Oscillation Mécanique Force", "url": "https://drive.google.com/file/d/1_5OSDcNtn0XncXGjEQTW6ts7gvqzLRFi/preview" }, { "name": "Série d'exercices 1 – Oscillation Mécanique Force", "url": "https://drive.google.com/file/d/1emPCMvH4KIpMgpJnSr6pAP61To0QBZ-h/preview" }, { "name": "Correction Série 1 – Oscillation Mécanique Force", "url": "https://drive.google.com/file/d/1W3RXFxRDqCYjg7ATPjQeAj-pai8b1gac/preview" }, { "name": "Correction Série 4 – Oscillation Mécanique Force", "url": "https://drive.google.com/file/d/1NQKYcXWo2bnUfel4yu04wYXBsZ16PYad/preview" } ] },
    { "id": 14, "title": "Oscillation Mécanique Libre", "description": "Séries d'exercices et corrections pour étudier l'oscillation mecanique libre et consolider les notions avant le Bac.", "files": [ { "name": "Série 1 – Oscillation Mécanique Libre", "url": "https://drive.google.com/file/d/1NHv0lICGxHAX4rS2hx8Z7djUkPXi9MfL/preview" }, { "name": "Correction Série 2 – Oscillation Mécanique Libre", "url": "https://drive.google.com/file/d/1DpZqaqkoncpPBvkqkeLne7e_RqrgTpyO/preview" } ] },
    { id: 16, title: "RC - Pack Révision BAC – Dipôle RC", description: "Cours sur le dipôle RC avec fiche de méthode et séries corrigées pour le BAC.", files: [ { name: "Cours – Dipôle RC", url: "https://drive.google.com/file/d/1LLVCH54WILXm5LMA-6X7oKgZSoVkptxs/preview" }, { name: "Fiche de méthode – Dipôle RC", url: "https://drive.google.com/file/d/1pL6CybKv8RwsHZU5hRgerNoRB6hF7GL2/preview" }, { name: "Série 1", url: "https://drive.google.com/file/d/1m8l3-xBjSdjcru2sIoN_Y7XpfguxKgJh/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1FcbL4h7h4pXwEy52_g_0MnHeWjDMZTDz/preview" }, { name: "Série 3", url: "https://drive.google.com/file/d/1jTsfza86Rhvh6qWmOe-N8GkKQaV7Bi5B/preview" }, { name: "Correction Série 3", url: "https://drive.google.com/file/d/1D43dVaGx6uUJbi_P8ejswStXHkFuHbHb/preview" } ] },
    { id: 17, title: "RL - Pack Révision BAC – Dipôle RL", description: "Cours + méthode + séries corrigées (Dipôle RL).", files: [ { name: "Cours – Dipôle RL", url: "https://drive.google.com/file/d/1BcrRsf1F4MB78bSXBOnp-ISZOL6ECPH4/preview" }, { name: "Fiche de méthode – Dipôle RL", url: "https://drive.google.com/file/d/12DFxwJ03tpfo-mkUysRDSuaIG-KOeHDn/preview" }, { name: "Série 1", url: "https://drive.google.com/file/d/1xys-CciliPMWUcyygKM-lubiXPdaesRS/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1ov8cUoCJhB_pw426A7aLVtHm77Ysusqv/preview" }, { name: "Série 4", url: "https://drive.google.com/file/d/1Q4R7meHuvFxXe8YGCS4uls02wfdLSkzJ/preview" }, { name: "Correction Série 4", url: "https://drive.google.com/file/d/1aIzaOVkNBLl03ML2RMD0EARpzXZLotDo/preview" } ] },
    { id: 18, title: "RLC - Pack Révision BAC – RLC Libre", description: "Cours + méthode + séries corrigées (RLC amorti et non amorti).", files: [ { name: "Cours 1 – RLC Libre", url: "https://drive.google.com/file/d/1Kx1zVKDFiqr1Xu7o1WSkA6IyCnQVQ8lu/preview" }, { name: "Cours 2 – RLC Libre", url: "https://drive.google.com/file/d/114cVVqt23C5q_seu8eqeHiHCyCU3wCdh/preview" }, { name: "Fiche de méthode – RLC", url: "https://drive.google.com/file/d/1JkJH94xSaonh5CqWol4QbFwqt5ySxxuJ/preview" }, { name: "Série 1", url: "https://drive.google.com/file/d/1xPDfIrDwYLs3wHL10OnDxDKjTldMzvJl/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1aLleGYAACAAN36Om0mjzQ2iAzgFW_M6U/preview" }, { name: "Série 4", url: "https://drive.google.com/file/d/1cdOWi9EnB2MsUyaIoj2YAjk8A2RQ8ZTd/preview" }, { name: "Correction Série 4", url: "https://drive.google.com/file/d/1A78L5EOhdpzyG_8hPpqt-qBxeYbH68cb/preview" } ] },
    { id: 19, title: "Force - Pack Révision BAC – Oscillations", description: "Cours + méthode + séries corrigées (Oscillations).", files: [ { name: "Cours – Oscillations", url: "https://drive.google.com/file/d/1YY_Mve9f1izU23brgz2sToOa6-E_8unt/preview" }, { name: "Fiche de méthode – Oscillations", url: "https://drive.google.com/file/d/1dOZYCtT_ffFnb9AAAuZCmiOPJgiVh36X/preview" }, { name: "Série 1", url: "https://drive.google.com/file/d/1jlLWFWmJDxwyNx0sndCt7FaAhc149qOi/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/11m1l4nTrzbONtbJshJm-k27hRuyPZ3JZ/preview" }, { name: "Série 5", url: "https://drive.google.com/file/d/1pj9MRQKi3sT-QQ-PNvnY_CRTKgP3hfCK/preview" }, { name: "Correction Série 5", url: "https://drive.google.com/file/d/1VSMYVaxKyaBPu5YhtztJz7IwiYHzmjCd/preview" } ] },
    { id: 20, title: "Bobine - Pack Révision BAC – Bobine", description: "Séries corrigées (Bobine).", files: [ { name: "Série 1", url: "https://drive.google.com/file/d/1JEhm3WIgtKY1LRRz_LN1PM7dBvd2hkUc/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1_6CSeP6G4eUCjaD2HLRxYNn86dnQ01E5/preview" }, { name: "Série 2", url: "https://drive.google.com/file/d/10YazIBjYdsh_9U0fd1w18cZtJokM01NJ/preview" }, { name: "Correction Série 2", url: "https://drive.google.com/file/d/1vNYU0iiQAfer4EMsYMLUYWl9MiamqBdQ/preview" } ] },
    { id: 31, title: "English Grammar and Writing Revision", description: "Tasks and corrections for grammar and writing practice.", files: [ { name: "Task 1", url: "https://drive.google.com/file/d/1oIMlJjplqsj6ymifT912PhiQu2rv2gX-/preview" }, { name: "Correction Task 1", url: "https://drive.google.com/file/d/1UtTyEEOIWN_b5j1lLrE3bCeeyevtD2s-/preview" }, { name: "Task 2", url: "https://drive.google.com/file/d/1OyMFnZL-1BGbpBoKNwOnbrogHsBbOl07/preview" }, { name: "Correction Task 2", url: "https://drive.google.com/file/d/1B3Z5ycnPY0lEtjb8jelfjHhzVuXwEYw9/preview" }, { name: "Task 3", url: "https://drive.google.com/file/d/1uV7maZKvFvRW0QHa2btYXvW4iBMSuefn/preview" }, { name: "Correction Task 3", url: "https://drive.google.com/file/d/1SXH5MN-lHizWESXhn5J-ouPaRd6YZ8od/preview" }, { name: "Task 4", url: "https://drive.google.com/file/d/1TlL1i98H1v15fVczgkxv5Bf57JCgVK1k/preview" }, { name: "Correction Task 4", url: "https://drive.google.com/file/d/1zyPc6UcSYH5g6IHoX1RSKwO4zbwhlreW/preview" } ] },
    { id: 32, title: "Immunité : Séries Corrigées", description: "Ensemble de séries d'exercices en immunité (SVT).", files: [ { name: "Série 1", url: "https://drive.google.com/file/d/1FgU_f3EMa7XWVdti9AADLa2SF9VjLjst/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1RSawQG5j_sMGmb6lUfVBw6uoW7POrtkH/preview" }, { name: "Série 2", url: "https://drive.google.com/file/d/1-DJlxPcAz0Sf2ymC7R54NVIFhelxYM3T/preview" }, { name: "Correction Série 2", url: "https://drive.google.com/file/d/1RhjJrxTJVNtotLD91kg5L_3XOOUJVFvj/preview" }, { name: "Série 5", url: "https://drive.google.com/file/d/1wguj9N6NYtKsV9CPcM_TFMfOj1xxCnif/preview" }, { name: "Correction Série 5", url: "https://drive.google.com/file/d/1x29no5EWhtEyIZ-PAG6blCOIoLFJiM9n/preview" } ] },
    { id: 33, title: "Les muscles squelettiques", description: "Séries d'exercices sur Les muscles squelettiques (SVT)", files: [ { name: "Série 1", url: "https://drive.google.com/file/d/1ZHb-Xlglorq8DahlKzr7y5SRLEbCAJaZ/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1mDRfhTJFaDeXo3Kfin1upLft7m8EOjyj/preview" }, { name: "Série 2", url: "https://drive.google.com/file/d/16paee30-W5X_gxgh_d75CpRRHyvh6xMh/preview" }, { name: "Série 5", url: "https://drive.google.com/file/d/1YF7qwAESD0cRHHyzrLdTEbNPCp3Tzqba/preview" }, { name: "Correction Série 5", url: "https://drive.google.com/file/d/1ewzSoAFqBFKVnaA9IqlH5Qk9EJjhN0Dq/preview" } ] },
    { "id": 34, "title": "Complexes & Analyse – Séries 1, 2, 3", "description": "Séries d'exercices sur les nombres complexes et l'analyse avec corrections.", "files": [ { "name": "Série 1 – Complexe + Analyse", "url": "https://drive.google.com/file/d/170eJsS1ai9pTtiADsLoMnQXTDs5rmDFr/preview" }, { "name": "Correction Série 1", "url": "https://drive.google.com/file/d/19MS0RGRSf74N8QT17jniG_7MhmlRU0hL/preview" }, { "name": "Série 2 – Complexe + Analyse", "url": "https://drive.google.com/file/d/1acp61r869r_RyjEGDmkOP3U4VijGFMRP/preview" }, { "name": "Correction Série 2", "url": "https://drive.google.com/file/d/1bdYroTxQEVGB38DBx2K_C7_npYCNGde-/preview" }, { "name": "Série 3 – Complexe", "url": "https://drive.google.com/file/d/1eKuVfoKcs989vPb4Ogp0oyBqHpZMMObX/preview" }, { "name": "Correction Série 3", "url": "https://drive.google.com/file/d/1P4tcltxYt_-l5aStZ6exnjiOzuqJRhrE/preview" } ] },
    { "id": 35, "title": "Fonction exponentielle – Série + Correction", "description": "Série d'exercices sur la fonction exponentielle avec correction détaillée.", "files": [ { "name": "Série Exponentielle", "url": "https://drive.google.com/file/d/1I-FeMbXprtaSefEud6S5K23nrX1kb0zK/preview" }, { "name": "Correction Série Exponentielle", "url": "https://drive.google.com/file/d/1mJWV3ITn8i1VN-uJrb7YBe4aTNRt2FbW/preview" } ] },
    { "id": 36, "title": "Fonction logarithme – Série + Correction", "description": "Série d'exercices sur la fonction logarithme népérien avec correction détaillée.", "files": [ { "name": "Série Logarithme", "url": "https://drive.google.com/file/d/1wV7H0TNb7kZDzST9t67wES5ODGfe0UB5/preview" }, { "name": "Correction Série Logarithme", "url": "https://drive.google.com/file/d/1PS4CCudGE02gycOXBxvOdvJcJMpRrXF3/preview" } ] },
    { "id": 37, "title": "Suites numériques – Série + Correction", "description": "Série d'exercices sur les suites numériques avec correction détaillée.", "files": [ { "name": "Série Suites", "url": "https://drive.google.com/file/d/1CwuAv5MrXmGzKGLD9rSmZ9gzmOfoflam/preview" }, { "name": "Correction Série Suites", "url": "https://drive.google.com/file/d/17MIliY2XqquCxs4eTcsSgSyLZao_dysJ/preview" } ] },
    { "id": 38, "title": "Révision Générale – Mathématiques", "description": "Série de révision générale en mathématiques pour les élèves du baccalauréat.", "files": [ { "name": "Série 1 (S1)", "url": "https://drive.google.com/file/d/1aLWxxkR-oxxY_BWH7gEumYjmhgc2_xVZ/preview" }, { "name": "Correction 1 (C1)", "url": "https://drive.google.com/file/d/13ytIwlJDUMbVwPPdTpzkZsVSAv-ghipd/preview" }, { "name": "Série 2 (S2)", "url": "https://drive.google.com/file/d/1JBF-IZnrCJyrdcJ596RIfDFbv3X-VNjq/preview" }, { "name": "Correction 2 (C2)", "url": "https://drive.google.com/file/d/1r9yMy12xiOZ_x8BKGY1nFIDFbv3X-VNjq/preview" } ] },
    { "id": 39, "title": "Intégrales – Séries 1 à 4 avec correction", "description": "Séries d'exercices sur les intégrales avec correction détaillée.", "files": [ { "name": "Série 1 + Correction", "url": "https://drive.google.com/file/d/1egbMCaDx1fTSoENQgxadit43wvWnTCg-/preview" }, { "name": "Série 2 + Correction", "url": "https://drive.google.com/file/d/1pNGZSgUhMVkz99kcPrPRayc_0FD8eBgV/preview" }, { "name": "Série 3 + Correction", "url": "https://drive.google.com/file/d/1QLcZFTIEOVZ-YwuxDhwOsfI7QypFoBNv/preview" }, { "name": "Série 4 + Correction", "url": "https://drive.google.com/file/d/1XseU26RFDUZcmlbO0C7RzrA61m-k9j0z/preview" } ] },
    { "id": 40, "title": "Ondes & Interaction matière – Série + Correction", "description": "Séries d'exercices sur les ondes mécaniques et leur interaction avec la matière.", "files": [ { "name": "Série 1 – Ondes & Interaction", "url": "https://drive.google.com/file/d/1P-0jrl687l20whMdRjaUnDX_plRtXdhY/preview" }, { "name": "Correction Série 1", "url": "https://drive.google.com/file/d/1dm1-EFzUVf_hnOpOmUyPs-s_d8OsYMyj/preview" }, { "name": "Série 2 – Ondes & Interaction", "url": "https://drive.google.com/file/d/1asJeYhD4pRL8qUmImh7jVC6awHgcvhWh/preview" }, { "name": "Correction Série 2", "url": "https://drive.google.com/file/d/1P8R1K-L55VbsnCuWcidOzkKqdBFBSKyi/preview" }, { "name": "Série 3 – Ondes & Interaction", "url": "https://drive.google.com/file/d/144nlY1UGOZDs3XIa4-Yp_SD81gnSDLDU/preview" }, { "name": "Correction Série 3", "url": "https://drive.google.com/file/d/1Eggm8SDZiIMU4mGCGVadPe_vhXd_x49q/preview" } ] },
    { "id": 41, "title": "Math – Intégrale", "description": "Séries d'exercices avec corrections pour maîtriser le calcul integral et se préparer au Bac.", "files": [ { "name": "Série 1 – Intégrale", "url": "https://drive.google.com/file/d/1wFWsbHSXBTV8snVzx6hHpB7Hkr9LUmAt/preview" }, { "name": "Correction Série 1 – Intégrale", "url": "https://drive.google.com/file/d/1wFWsbHSXBTV8snVzx6hHpB7Hkr9LUmAt/preview" }, { "name": "Série 2 – Intégrale", "url": "https://drive.google.com/file/d/1_qmruUYcu4d4OCsnGyqNpnP-ogk19eKd/preview" }, { "name": "Série 5 – Intégrale", "url": "https://drive.google.com/file/d/1l5aDIRTmSekTjDt6pQ388e6IO2AUVTrk/preview" }, { "name": "Correction Série 5 – Intégrale", "url": "https://drive.google.com/file/d/1da0QPlsTou8M0m1ygAUYFijrvy_p6Sr_/preview" } ] },
    { id: 43, title: "Le Spectre – Physique", description: "Cours, fiches de méthode et séries corrigées sur le chapitre du spectre en Physique.", files: [ { name: "Fiche de méthode – Le Spectre", url: "https://drive.google.com/file/d/17SG5v79gy_DTwv4N4w0OODpsptDi6qFQ/preview" }, { name: "Série 1 avec correction", url: "https://drive.google.com/file/d/1zIvo1rEGD9OxqZnIAJoPqmdH_2DhA9NZ/preview" }, { name: "Série 2 avec correction", url: "https://drive.google.com/file/d/1LHyNp_6t60t2KgzFaYtkDLKv_Xo6wu_f/preview" } ] },
    { id: 44, title: "Les Amides – Physique", description: "Séries corrigées sur le chapitre des amides en Physique.", files: [ { name: "Série 1 – Les Amides", url: "https://drive.google.com/file/d/1GD4YK62eaAAj_yO7pS16BzsppBLmSz_U/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1yqXGDBqp7fQE3J2byw0Dy-6Iq53Yfbic/preview" } ] },
    { id: 45, title: "Réactions Nucléaires – Physique", description: "Fiche de méthode et séries corrigées sur les réactions nucléaires en Physique.", files: [ { name: "Fiche de méthode – Réactions Nucléaires", url: "https://drive.google.com/file/d/14OcIQK-7Er7UcXVdQpKeW-gv8fKdc3Zk/preview" }, { name: "Série 1 – Réactions Nucléaires", url: "https://drive.google.com/file/d/1COFT64BhCER9rOom0Rqj9sQtnTXZq3M7/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/1i68qHgwNwJLTWwGV50Qc_YQ-9FiIfvfS/preview" } ] },
    { id: 46, title: "العربية – منهجية ولغة", description: "ملخصات، مسائل لغوية، ووثائق منهجية في مادة العربية.", files: [ { name: "أنواع الحجج في مادة العربية", url: "https://drive.google.com/file/d/1d18frNgUbF4UbW3KJ-ucrifGdlGt6dRb/preview" }, { name: "تلخيص المحتوى الفني والمسائل اللغوية", url: "https://drive.google.com/file/d/13mtNANhW6Hb3kru90EFsfcMD9BfUvpmu/preview" }, { name: "مسائل لغوية لمادة العربية", url: "https://drive.google.com/file/d/1KfP6f6g8ltd8noo-ajdKzSKrV3rnNtJC/preview" }, { name: "مساعدة منهجية للشعب العلمية", url: "https://drive.google.com/file/d/1u-Vj-8R0SIyqVLjmtdzzV8arB-VxZlni/preview" }, { name: "وثيقة منهجية لمادة العربية", url: "https://drive.google.com/file/d/1vy2TwO7qfE2gogeDSvRpJgDdjf7K8-R5/preview" } ] },
    { id: 47, title: "العربية – المعهد النموذجي بسوسة", description: "ملخصات شاملة لمحاور مادة العربية الخاصة بالمعهد النموذجي بسوسة.", files: [ { name: "تلخيص جميع المحاور", url: "https://drive.google.com/file/d/1MFYvJlAFxxrO3hqIQbtb536pC5ZP8d4d/preview" }, { name: "شواغل عالمنا المعاصر", url: "https://drive.google.com/file/d/1x6uaV6TreeTpTuVea-S3VDkbj5Jm4tAZ/preview" }, { name: "في التفكير العلمي", url: "https://drive.google.com/file/d/1HSsdJDLmq_KCm7hB8gXQDOAQ2YniKuPS/preview" }, { name: "في الفكر والفن", url: "https://drive.google.com/file/d/1cBAbFktFrNH1NIYLv6FdYKc9NPQJHp_p/preview" }, { name: "في الفن والأدب", url: "https://drive.google.com/file/d/1MHvqpMdXl7BreCjyIEso2IYUoq4I57IL-/preview" }, { name: "في حوار الحضارات", url: "https://drive.google.com/file/d/11-rldxUwap6SDGoNwqKYBnYyaiZ3WmQR/preview" } ] },
    { id: 48, title: "العربية – المعهد النموذجي بمدنين", description: "ملخصات لمحاور مادة العربية الخاصة بالمعهد النموذجي بمدنين.", files: [ { name: "في التفكير العلمي", url: "https://drive.google.com/file/d/1-2wCSo1HzdbLhEovvodv5owlCrEApY_5/preview" }, { name: "في الفكر والفنّ", url: "https://drive.google.com/file/d/1e7HwoAX9LtZbkQSDKjj9vk2lnnHu6aQa/preview" }, { name: "في حوار الحضارات", url: "https://drive.google.com/file/d/1dzJxJc9jDgu5A8GAB3EX70YFTBIzIXgh/preview" } ] },
    { id: 49, title: "Pile de Daniell – Physique", description: "Fiche de méthode et séries corrigées sur la pile de Daniell en Physique.", files: [ { name: "Fiche de méthode – Pile de Daniell", url: "https://drive.google.com/file/d/1z9RfPDpufPJFMUC6TffBBGSguX8Wo8AH/preview" }, { name: "Série 1 – Pile de Daniell", url: "https://drive.google.com/file/d/15aKSuhjSp6vaGd4DozujlNYeHpm0yyCe/preview" }, { name: "Correction Série 1", url: "https://drive.google.com/file/d/15jjKqLEXuxbCw1acB9tqdZzih9WH1gcC/preview" }, { name: "Série 2 – Pile de Daniell", url: "https://drive.google.com/file/d/1eTafJzW87QAvAA0aXqNnkLDi84YN0Hde/preview" }, { name: "Correction Série 2", url: "https://drive.google.com/file/d/144YOUNW_qWbzt2KygKcIhnMovBCi5NCq/preview" }, { name: "Série 3 – Pile de Daniell", url: "https://drive.google.com/file/d/1tlOq8lvjRMHD8JPEC1KkQRn8Np46kiNl/preview" }, { name: "Correction Série 3", url: "https://drive.google.com/file/d/12M76u2R9o3ZhyVQearuGuHCLo4ObcTjU/preview" } ] }
  ];

  const DEFAULT_ICON = "fa-solid fa-file-lines";

  function deriveIconFromName(name) {
    const n = name.toLowerCase();
    if (n.includes("correction"))   return "fa-solid fa-check-double";
    if (n.includes("devoir"))       return "fa-solid fa-file-pen";
    if (n.includes("svt") || n.includes("biologie") || n.includes("vie")) return "fa-solid fa-dna";
    if (n.includes("math"))         return "fa-solid fa-square-root-variable";
    if (n.includes("physique"))     return "fa-solid fa-atom";
    if (n.includes("histoire"))     return "fa-solid fa-landmark";
    if (n.includes("langue") || n.includes("arabe") || n.includes("français")) return "fa-solid fa-book-open";
    return DEFAULT_ICON;
  }

  function deriveCategoryFromTitle(title) {
    const t = title.toLowerCase();
    if (t.includes("svt") || t.includes("vie et de la terre")) return "SVT";
    if (t.includes("math")) return "Mathématiques";
    if (t.includes("physique")) return "Physique";
    if (t.includes("histoire")) return "Histoire";
    if (t.includes("arabe"))    return "Langue Arabe";
    if (t.includes("français")) return "Français";
    return "Sciences";
  }

  /* Convert any Google Drive /view or /edit link to /preview */
  function toPreviewUrl(url) {
    if (!url) return url;
    // Already a preview link
    if (url.includes('/preview')) return url;
    // Replace /view or /edit with /preview
    return url.replace(/\/(view|edit)(\?.*)?$/, '/preview');
  }

  /* Get the raw Drive link for "open in new tab" */
  function toViewUrl(url) {
    if (!url) return url;
    return url.replace('/preview', '/view');
  }

  const allResults = resources.flatMap(resource =>
    resource.files.map(file => ({
      id:       resource.id,
      title:    file.name,
      domain:   "sahllearn.org",
      path:     resource.title,
      category: deriveCategoryFromTitle(resource.title),
      icon:     deriveIconFromName(file.name),
      desc:     resource.description,
      url:      toPreviewUrl(file.url),
      keywords: [ resource.title.toLowerCase(), file.name.toLowerCase(), resource.description.toLowerCase(), deriveCategoryFromTitle(resource.title).toLowerCase() ]
    }))
  );

  const $ = id => document.getElementById(id);

  function normalize(t) { return t.toLowerCase().trim(); }

  function fold(str) {
    return str.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/n[\u00b0°#]?\s*(\d)/g, 'n$1')
      .replace(/[\u2018\u2019\u02bc']/g, "'").trim();
  }

  function damerau(a, b) {
    const la = a.length, lb = b.length;
    if (!la) return lb; if (!lb) return la;
    if (Math.abs(la - lb) > Math.max(la, lb) * 0.6) return 9999;
    const d = Array.from({length: la+1}, (_, i) =>
      Array.from({length: lb+1}, (_, j) => i===0 ? j : j===0 ? i : 0));
    for (let i=1; i<=la; i++) for (let j=1; j<=lb; j++) {
      const c = a[i-1]===b[j-1] ? 0 : 1;
      d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, d[i-1][j-1]+c);
      if (i>1 && j>1 && a[i-1]===b[j-2] && a[i-2]===b[j-1]) d[i][j] = Math.min(d[i][j], d[i-2][j-2]+c);
    }
    return d[la][lb];
  }

  function tol(len) {
    if (len <= 2) return 0; if (len <= 4) return 1; if (len <= 7) return 2; return 3;
  }

  function wordScore(qw, tWords) {
    let bestDist = Infinity, prefix = 0;
    const limit = tol(qw.length);
    for (const tw of tWords) {
      if (tw === qw)           { return {dist:0, prefix:2}; }
      if (tw.startsWith(qw))   { return {dist:0, prefix:1}; }
      if (tw.includes(qw))     { return {dist:0, prefix:0}; }
      if (qw.includes(tw) && tw.length >= 3) { bestDist = Math.min(bestDist, 0); prefix = 0; continue; }
      const d = damerau(qw, tw);
      if (d <= limit && d < bestDist) { bestDist = d; prefix = tw.startsWith(qw[0]) ? 1 : 0; }
    }
    return {dist: bestDist, prefix};
  }

  function phraseScore(qWords, targetFolded) {
    const tWords = targetFolded.split(/\s+/).filter(Boolean);
    const qPhrase = qWords.join(' ');
    const phraseBonus = targetFolded.includes(qPhrase) ? -2 : 0;
    let total = 0, prefixBonus = 0;
    for (const qw of qWords) {
      const {dist, prefix} = wordScore(qw, tWords);
      if (dist === Infinity) return Infinity;
      total += dist; prefixBonus += prefix;
    }
    return total - prefixBonus * 0.3 + phraseBonus;
  }

  const FIELD_WEIGHT = { title: 0.6, path: 0.8, cat: 0.9, desc: 1.3 };

  function buildIndex() {
    const idx = [], seenPaths = new Set();
    allResults.forEach(item => {
      idx.push({folded: fold(item.title),    ref: item, type:'title'});
      idx.push({folded: fold(item.desc),     ref: item, type:'desc'});
      idx.push({folded: fold(item.category), ref: item, type:'cat'});
      if (!seenPaths.has(item.path)) {
        seenPaths.add(item.path);
        idx.push({folded: fold(item.path),   ref: item, type:'path'});
      }
    });
    return idx;
  }
  const searchIndex = buildIndex();

  function smartSearch(query) {
    if (!query.trim()) return [];
    const qf = fold(query), qWords = qf.split(/\s+/).filter(Boolean);
    const scored = new Map();
    searchIndex.forEach(tok => {
      const raw = phraseScore(qWords, tok.folded);
      if (raw === Infinity) return;
      const weighted = raw * (FIELD_WEIGHT[tok.type] || 1);
      const key = tok.ref.title + '||' + tok.ref.url;
      if (!scored.has(key) || weighted < scored.get(key).s)
        scored.set(key, {s: weighted, item: tok.ref});
    });
    return Array.from(scored.values()).sort((a,b) => a.s - b.s).map(v => v.item);
  }

  function findClosestMatch(query) {
    const qf = fold(query), qWords = qf.split(/\s+/).filter(Boolean);
    let best = null, bestS = Infinity;
    searchIndex.forEach(tok => {
      if (tok.type !== 'title' && tok.type !== 'path') return;
      const s = phraseScore(qWords, tok.folded);
      if (s < bestS) { bestS = s; best = tok.ref.path || tok.ref.title; }
    });
    return bestS < 4 ? best : null;
  }

  function highlight(text, query) {
    if (!query || !text) return text;
    const words = query.trim().split(/\s+/).filter(Boolean);
    let result = text;
    words.forEach(w => {
      const fw = fold(w);
      const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      try { result = result.replace(new RegExp('(' + esc + ')', 'gi'), '<mark>$1</mark>'); } catch(e) {}
      if (fw !== w.toLowerCase()) {
        const escF = fw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        try { result = result.replace(new RegExp('(' + escF + ')', 'gi'), '<mark>$1</mark>'); } catch(e) {}
      }
    });
    return result;
  }

  function getSuggestions(query) {
    if (!query || query.trim().length < 2) return [];
    const matches = smartSearch(query);
    const seen = new Set(), results = [];
    matches.forEach(item => {
      if (!seen.has(item.path)) {
        seen.add(item.path);
        results.push({ label: item.path, sub: item.category, icon: item.icon, query: item.path });
      }
    });
    matches.forEach(item => {
      if (!seen.has(item.title) && results.length < 8) {
        seen.add(item.title);
        results.push({ label: item.title, sub: item.path, icon: item.icon, query: item.title });
      }
    });
    return results.slice(0, 6);
  }

  function googleHighlight(label, query) {
    if (!query) return `<span class="sq-rest">${label}</span>`;
    const q = query.toLowerCase();
    const idx = label.toLowerCase().indexOf(q);
    if (idx === -1) return `<span class="sq-rest">${label}</span>`;
    const before = label.slice(0, idx), match = label.slice(idx, idx + query.length), after = label.slice(idx + query.length);
    return (before ? `<span class="sq-rest">${before}</span>` : '') +
           `<span class="sq-typed">${match}</span>` +
           (after ? `<span class="sq-rest">${after}</span>` : '');
  }

  function closeDropdown(containerId, shellId) {
    $(containerId).classList.add('hidden');
    if (shellId) $(shellId) && $(shellId).classList.remove('open');
  }

  function renderSuggestions(containerId, query, onSelect, shellId, fillInputId) {
    const el = $(containerId);
    const items = getSuggestions(query);
    if (!items.length || !query.trim()) { closeDropdown(containerId, shellId); return; }
    el.innerHTML =
      `<div class="suggestions-divider"></div>` +
      items.map(item => {
        const q = item.query.replace(/"/g,'&quot;');
        return `
        <div class="suggestion-item" data-query="${q}">
          <div class="suggestion-search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <div class="suggestion-text">
            <div class="suggestion-title">${googleHighlight(item.label, query)}</div>
            <div class="suggestion-category">${item.sub}</div>
          </div>
          ${fillInputId ? `<button class="suggestion-fill-btn" data-fill="${q}" tabindex="-1"><i class="fa-solid fa-arrow-up-left"></i></button>` : ''}
        </div>`;
      }).join('') +
      `<div class="suggestions-footer"><i class="fa-solid fa-keyboard"></i> Appuyez sur Entrée pour rechercher</div>`;

    el.querySelectorAll('.suggestion-item').forEach(row => {
      row.addEventListener('mousedown', e => {
        if (e.target.closest('.suggestion-fill-btn')) return;
        e.preventDefault();
        closeDropdown(containerId, shellId);
        onSelect(row.dataset.query);
      });
    });

    if (fillInputId) {
      el.querySelectorAll('.suggestion-fill-btn').forEach(btn => {
        btn.addEventListener('mousedown', e => {
          e.preventDefault();
          const inp = $(fillInputId);
          inp.value = btn.dataset.fill;
          inp.focus();
          renderSuggestions(containerId, inp.value, onSelect, shellId, fillInputId);
        });
      });
    }

    el.classList.remove('hidden');
    if (shellId) $(shellId) && $(shellId).classList.add('open');
  }

  /* ===================================================
     PAGE TRANSITIONS
  ==================================================== */

  function showResultsPage() {
    $('homePage').classList.add('hidden');
    $('resultsPage').classList.remove('hidden');
    $('resultsPage').classList.remove('page-enter');
    void $('resultsPage').offsetWidth;
    $('resultsPage').classList.add('page-enter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showHomePage() {
    $('resultsPage').classList.add('hidden');
    $('homePage').classList.remove('hidden');
    $('homePage').classList.remove('page-enter');
    void $('homePage').offsetWidth;
    $('homePage').classList.add('page-enter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ===================================================
     PDF VIEWER MODAL
  ==================================================== */

  function openPdfModal(url, title, subtitle) {
    const overlay  = $('pdfOverlay');
    const iframe   = $('pdfIframe');
    const loading  = $('pdfLoading');
    const titleEl  = $('pdfModalTitle');
    const subEl    = $('pdfModalSub');
  

    // Set header content
    titleEl.textContent = title || 'Document';
    subEl.textContent   = subtitle || 'sahllearn.org';

   

    // Reset iframe state
    iframe.classList.add('hidden');
    loading.classList.remove('hidden');
    iframe.src = '';

    // Show overlay
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Load iframe
    iframe.src = url;
    iframe.onload = () => {
      loading.classList.add('hidden');
      iframe.classList.remove('hidden');
    };
  }

  function closePdfModal() {
    const overlay = $('pdfOverlay');
    const iframe  = $('pdfIframe');
    overlay.classList.add('hidden');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  $('pdfClose').addEventListener('click', closePdfModal);
  $('pdfOverlay').addEventListener('click', e => {
    if (e.target === $('pdfOverlay')) closePdfModal();
  });

  /* ===================================================
     SAHL AI MODAL
  ==================================================== */

  function openSahlAi() {
    $('sahlAiOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSahlAi() {
    $('sahlAiOverlay').classList.add('hidden');
    document.body.style.overflow = '';
  }

  $('sahlAiTab').addEventListener('click', openSahlAi);
  $('sahlAiClose').addEventListener('click', closeSahlAi);
  $('sahlAiOverlay').addEventListener('click', e => { if (e.target === $('sahlAiOverlay')) closeSahlAi(); });

  /* ===================================================
     SETTINGS + DARK MODE
  ==================================================== */

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sl-theme', theme);
    document.querySelectorAll('.theme-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.theme === theme);
    });
  }

  const savedTheme = localStorage.getItem('sl-theme') || 'light';
  applyTheme(savedTheme);

  function openSettings() {
    $('settingsOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSettings() {
    $('settingsOverlay').classList.add('hidden');
    document.body.style.overflow = '';
  }

  $('openSettings').addEventListener('click', e => { e.preventDefault(); openSettings(); });
  $('settingsClose').addEventListener('click', closeSettings);
  $('settingsOverlay').addEventListener('click', e => { if (e.target === $('settingsOverlay')) closeSettings(); });

  document.querySelectorAll('.theme-option').forEach(opt => {
    opt.addEventListener('click', () => applyTheme(opt.dataset.theme));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePdfModal(); closeSahlAi(); closeSettings(); }
  });

  /* ===================================================
     SEARCH ENGINE
  ==================================================== */

  function search(query) {
    if (!query.trim()) return;
    closeDropdown('homeSuggestions', 'homeShell');
    closeDropdown('resultsSuggestions', null);
    const originalQuery = query;
    let results = smartSearch(query);
    let suggestion = null;
    if (results.length === 0) {
      suggestion = findClosestMatch(query);
      if (suggestion) results = smartSearch(suggestion);
    }
    $('resultsInput').value = originalQuery;
    renderResults(results, originalQuery, suggestion);
    showResultsPage();
  }

  /* ===================================================
     RENDER RESULTS
  ==================================================== */

  function renderResults(results, query, suggestion) {
    const meta = $('resultsMeta'), list = $('resultsList'), snippet = $('snippetArea');
    const sidebar = $('sidebarArea'), correction = $('correctionBox'), statsBar = $('statsBar');
    const displayQuery = suggestion || query;

    if (suggestion && normalize(suggestion) !== normalize(query)) {
      correction.innerHTML = `
        <div class="correction-box">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <div>Résultats affichés pour <strong style="color:var(--accent)">${suggestion}</strong>. Vous avez saisi : <em style="color:var(--ink-3)">${query}</em></div>
        </div>`;
    } else { correction.innerHTML = ''; }

    if (results.length) {
      const categories = [...new Set(results.map(r => r.category))];
      statsBar.innerHTML = `
        <div class="stat-pill"><i class="fa-solid fa-list"></i> ${results.length} résultat${results.length > 1 ? 's' : ''}</div>
        ${categories.map(c => `<div class="stat-pill"><i class="fa-solid fa-tag"></i> ${c}</div>`).join('')}`;
    } else { statsBar.innerHTML = ''; }

    meta.innerHTML = `Environ <strong>${results.length}</strong> résultat${results.length !== 1 ? 's' : ''} pour <strong>"${query}"</strong>`;

    if (results.length) {
      const top = results[0];
      snippet.innerHTML = `
        <div class="snippet-card">
          <div class="snippet-icon"><i class="${top.icon}"></i></div>
          <div>
            <div class="snippet-label">Meilleur résultat</div>
            <div class="snippet-title">${top.path}</div>
            <div class="snippet-desc">${top.desc}</div>
          </div>
        </div>`;
    } else { snippet.innerHTML = ''; }

    if (results.length > 0) {
      list.innerHTML = results.map((item, i) => `
        <div class="result-card" data-pdf-url="${item.url}" data-pdf-title="${item.title.replace(/"/g,'&quot;')}" data-pdf-sub="${item.path.replace(/"/g,'&quot;')}">
          <div class="result-source">
            <div class="result-favicon"><i class="fa-solid fa-globe"></i></div>
            <div class="result-breadcrumb">
              <span class="result-domain">${item.domain}</span>
              <span class="result-breadcrumb-sep">›</span>
              <span class="result-path">${item.path}</span>
            </div>
          </div>
          <span class="result-title">${highlight(item.title, displayQuery)}</span>
          <p class="result-snippet">${highlight(item.desc, displayQuery)}</p>
          <div class="result-tags"><span class="tag">${item.category}</span></div>
        </div>
        ${i < results.length - 1 ? '<div class="result-divider"></div>' : ''}
      `).join('');

      /* Attach click → PDF modal */
      list.querySelectorAll('.result-card').forEach(card => {
        card.addEventListener('click', () => {
          openPdfModal(
            card.dataset.pdfUrl,
            card.dataset.pdfTitle,
            card.dataset.pdfSub
          );
        });
      });

    } else {
      list.innerHTML = `
        <div class="empty">
          <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3 class="empty-heading">Aucun résultat trouvé</h3>
          <p class="empty-sub">Essayez un autre mot-clé ou vérifiez l'orthographe.</p>
        </div>`;
    }

    if (results.length) {
      const related = allResults.filter(r => !results.find(x => x.title === r.title)).slice(0, 5);
      sidebar.innerHTML = related.length ? `
        <div class="sidebar-section">
          <div class="sidebar-card">
            <div class="sidebar-card-head"><i class="fa-solid fa-compass"></i> Suggestions</div>
            ${related.map(item => `
              <div class="sidebar-item" data-query="${item.title.replace(/"/g,'&quot;')}">
                <div class="sidebar-item-icon"><i class="${item.icon}"></i></div>
                <div class="sidebar-item-info">
                  <div class="sidebar-item-name">${item.title}</div>
                  <div class="sidebar-item-sub">${item.category}</div>
                </div>
                <i class="fa-solid fa-chevron-right sidebar-item-arrow"></i>
              </div>`).join('')}
          </div>
        </div>` : '';
      document.querySelectorAll('.sidebar-item').forEach(el => {
        el.addEventListener('click', () => search(el.dataset.query));
      });
    } else { sidebar.innerHTML = ''; }
  }

  /* ===================================================
     TABS
  ==================================================== */

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ===================================================
     SUGGESTIONS — HOME
  ==================================================== */

  function refreshHomeSuggestions() {
    renderSuggestions('homeSuggestions', $('homeInput').value, q => { $('homeInput').value = q; search(q); }, 'homeShell', 'homeInput');
  }
  $('homeInput').addEventListener('input', refreshHomeSuggestions);
  $('homeInput').addEventListener('focus', refreshHomeSuggestions);
  $('homeInput').addEventListener('blur', () => setTimeout(() => closeDropdown('homeSuggestions', 'homeShell'), 160));

  /* ===================================================
     SUGGESTIONS — RESULTS
  ==================================================== */

  function refreshResultsSuggestions() {
    renderSuggestions('resultsSuggestions', $('resultsInput').value, q => { $('resultsInput').value = q; search(q); }, null, 'resultsInput');
  }
  $('resultsInput').addEventListener('input', refreshResultsSuggestions);
  $('resultsInput').addEventListener('focus', refreshResultsSuggestions);
  $('resultsInput').addEventListener('blur', () => setTimeout(() => closeDropdown('resultsSuggestions', null), 160));

  /* ===================================================
     EVENTS
  ==================================================== */

  $('homeSubmit').addEventListener('click', () => search($('homeInput').value));
  $('homeSearchBtn').addEventListener('click', () => search($('homeInput').value));
  $('homeInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') { closeDropdown('homeSuggestions','homeShell'); search(e.target.value); }
    if (e.key === 'Escape') closeDropdown('homeSuggestions','homeShell');
  });

  $('resultsSubmit').addEventListener('click', () => search($('resultsInput').value));
  $('resultsInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') { closeDropdown('resultsSuggestions',null); search(e.target.value); }
    if (e.key === 'Escape') closeDropdown('resultsSuggestions',null);
  });

  $('backBtn').addEventListener('click', () => {
    showHomePage();
    $('homeInput').value = '';
    closeDropdown('homeSuggestions','homeShell');
  });

  $('logoLink').addEventListener('click', e => {
    e.preventDefault();
    showHomePage();
    $('homeInput').value = '';
    closeDropdown('homeSuggestions','homeShell');
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => { $('homeInput').value = chip.dataset.query; search(chip.dataset.query); });
  });

  $('luckyBtn').addEventListener('click', () => {
    const random = allResults[Math.floor(Math.random() * allResults.length)];
    search(random.title);
  });

  /* Ecosystem card search button */
  document.getElementById('ecoSearchBtn').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => $('resultsInput').focus(), 400);
  });

  /* ===================================================
     ECOSYSTEM CAROUSEL — drag-scroll + dot nav
  ==================================================== */

  (function() {
    const track = $('ecoTrack');
    const dotsWrap = $('ecoDots');
    const CARD_W = 252 + 16;
    const CARD_COUNT = 8;

    for (let i = 0; i < CARD_COUNT; i++) {
      const btn = document.createElement('button');
      btn.className = 'eco-dot-btn' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', `App ${i + 1}`);
      btn.addEventListener('click', () => {
        track.scrollTo({ left: i * CARD_W, behavior: 'smooth' });
      });
      dotsWrap.appendChild(btn);
    }

    track.addEventListener('scroll', () => {
      const idx = Math.round(track.scrollLeft / CARD_W);
      dotsWrap.querySelectorAll('.eco-dot-btn').forEach((b, i) => {
        b.classList.toggle('active', i === idx);
      });
    }, { passive: true });

    let startX, startLeft, dragging = false;

    track.addEventListener('mousedown', e => {
      dragging = true;
      startX = e.pageX;
      startLeft = track.scrollLeft;
      track.classList.add('is-dragging');
    });

    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      track.scrollLeft = startLeft - (e.pageX - startX);
    });

    document.addEventListener('mouseup', () => {
      dragging = false;
      track.classList.remove('is-dragging');
    });
  })();
