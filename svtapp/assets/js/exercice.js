
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}

/* ══════════════════════════════════════════════════════
   ██  STAGES CONFIG
══════════════════════════════════════════════════════ */
const STAGES = [
  {id:1,title:"La Reproduction I",label:"Section 1 · Unité 1",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Appareils reproducteurs", "Gamètes", "Hormones"],questionIds:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],questions:[]},
  {id:2,title:"Le Cycle Ovarien",label:"Section 1 · Unité 2",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Cycle menstruel", "Ovulation", "Corps jaune"],questionIds:[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],questions:[]},
  {id:3,title:"Régulation Hormonale",label:"Section 1 · Unité 3",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["FSH / LH", "GnRH", "Rétrocontrôle"],questionIds:[6, 7, 8, 9, 10, 11, 12, 13, 14, 15],questions:[]},
  {id:4,title:"La Spermatogenèse",label:"Section 1 · Unité 4",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Cellules de Sertoli", "Cellules de Leydig", "Testostérone"],questionIds:[22, 23, 24, 25, 26, 27, 28, 29, 30, 31],questions:[]},
  {id:5,title:"L'Ovogenèse & Méiose",label:"Section 1 · Unité 5",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Méiose", "Ovocyte", "Follicule mûr"],questionIds:[15, 16, 17, 18, 19, 20, 21, 14, 13, 12],questions:[]},
  {id:6,title:"La Fécondation",label:"Section 2 · Unité 1",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Réaction acrosomique", "Blastocyste", "Caryogamie"],questionIds:[43, 44, 45, 47, 48, 49, 50, 51, 52, 46],questions:[]},
  {id:7,title:"Grossesse & Placenta",label:"Section 2 · Unité 2",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Trophoblaste", "HCG", "Nidation"],questionIds:[12, 13, 14, 43, 44, 45, 46, 47, 48, 49],questions:[]},
  {id:8,title:"Reproduction Assistée",label:"Section 2 · Unité 3",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["FIVETE", "Diagnostic prénatal", "Techniques"],questionIds:[44, 45, 22, 23, 24, 25, 26, 27, 28, 29],questions:[]},
  {id:9,title:"Reproduction — Approfondissement",label:"Section 2 · Unité 4",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Gènes & Reproduction", "Dihybridisme", "BAC"],questionIds:[46, 47, 48, 49, 50, 51, 52, 30, 31, 32],questions:[]},
  {id:10,title:"Bilan Reproduction",label:"Section 2 · Unité 5",icon:"fa-seedling",color:"#16a34a",colorLt:"#dcfce7",chips:["Résumé complet", "Programme BAC", "QCM mixtes"],questionIds:[1, 6, 11, 16, 21, 26, 31, 41, 48, 51],questions:[]},
  {id:11,title:"Transmission Génétique I",label:"Section 3 · Unité 1",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Hérédité", "Allèles", "Phénotype/Génotype"],questionIds:[53, 54, 55, 56, 57, 58, 59, 60, 61, 62],questions:[]},
  {id:12,title:"Maladies Génétiques",label:"Section 3 · Unité 2",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Dominante", "Récessive", "Liée au chromosome X"],questionIds:[53, 54, 55, 56, 63, 64, 65, 66, 67, 68],questions:[]},
  {id:13,title:"Génétique des Populations",label:"Section 3 · Unité 3",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Fréquences alléliques", "Mutation", "Dérive"],questionIds:[63, 64, 65, 66, 67, 68, 69, 70, 71, 72],questions:[]},
  {id:14,title:"Caryotype & Anomalies",label:"Section 3 · Unité 4",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Trisomie 21", "Monosomie", "Caryotype"],questionIds:[67, 68, 69, 70, 71, 72, 63, 64, 65, 66],questions:[]},
  {id:15,title:"Dihybridisme",label:"Section 3 · Unité 5",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Gènes liés", "Crossing-over", "Recombinaison"],questionIds:[46, 63, 64, 65, 66, 57, 58, 59, 60, 61],questions:[]},
  {id:16,title:"Génétique Humaine",label:"Section 4 · Unité 1",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Hérédité liée au sexe", "Arbres généalogiques", "Diagnostic"],questionIds:[55, 56, 57, 58, 59, 60, 61, 62, 70, 71],questions:[]},
  {id:17,title:"Génétique Moléculaire",label:"Section 4 · Unité 2",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["ADN", "Réplication", "Gamétogenèse"],questionIds:[94, 95, 96, 97, 98, 99, 100, 101, 102, 53],questions:[]},
  {id:18,title:"Liaisons Génomiques",label:"Section 4 · Unité 3",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Gènes liés", "Gamètes recombinants", "Test-cross"],questionIds:[94, 95, 96, 97, 98, 99, 100, 101, 102, 54],questions:[]},
  {id:19,title:"Évolution & Génomes",label:"Section 4 · Unité 4",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Amplification génique", "Phylogénie", "Spéciation"],questionIds:[110, 111, 112, 68, 69, 70, 71, 94, 95, 96],questions:[]},
  {id:20,title:"Bilan Génétique",label:"Section 4 · Unité 5",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Tout le chapitre", "Programme BAC", "QCM mixtes"],questionIds:[53, 57, 63, 67, 94, 98, 100, 111, 112, 55],questions:[]},
  {id:21,title:"Structure du Système Nerveux",label:"Section 5 · Unité 1",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Neurones", "Corps cellulaires", "Fibres nerveuses"],questionIds:[83, 84, 85, 86, 87, 88, 89, 90, 91, 92],questions:[]},
  {id:22,title:"Influx Nerveux",label:"Section 5 · Unité 2",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Potentiel d'action", "Dépolarisation", "Propagation"],questionIds:[113, 114, 115, 116, 117, 118, 119, 120, 121, 122],questions:[]},
  {id:23,title:"La Synapse Chimique",label:"Section 5 · Unité 3",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Neurotransmetteurs", "Fente synaptique", "Récepteurs"],questionIds:[116, 117, 118, 119, 120, 121, 122, 123, 124, 125],questions:[]},
  {id:24,title:"SNC & Moelle Épinière",label:"Section 5 · Unité 4",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Cerveau", "Moelle épinière", "Nerfs rachidiens"],questionIds:[83, 84, 85, 86, 87, 88, 89, 90, 91, 92],questions:[]},
  {id:25,title:"Le Réflexe Myotatique",label:"Section 5 · Unité 5",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Fuseau NM", "Fibres Ia", "Arc réflexe"],questionIds:[103, 104, 105, 106, 107, 108, 109, 83, 84, 85],questions:[]},
  {id:26,title:"Conduction Nerveuse",label:"Section 6 · Unité 1",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Myéline", "Nœuds de Ranvier", "Vitesse de conduction"],questionIds:[113, 114, 115, 116, 117, 118, 119, 120, 121, 122],questions:[]},
  {id:27,title:"Neurotransmetteurs & Drogues",label:"Section 6 · Unité 2",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Dopamine", "Cocaïne", "Dépendance"],questionIds:[133, 134, 135, 136, 137, 138, 139, 140, 141, 142],questions:[]},
  {id:28,title:"Intégration Synaptique",label:"Section 6 · Unité 3",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["PPSE / PPSI", "Sommation", "Inhibition"],questionIds:[116, 117, 118, 119, 120, 121, 122, 123, 124, 125],questions:[]},
  {id:29,title:"Stress & Système Nerveux",label:"Section 6 · Unité 4",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Cortisol", "Adrénaline", "Système limbique"],questionIds:[143, 144, 145, 134, 135, 136, 137, 138, 139, 140],questions:[]},
  {id:30,title:"Bilan Neurophysiologie",label:"Section 6 · Unité 5",icon:"fa-brain",color:"#1d6bf3",colorLt:"#dbeafe",chips:["Résumé complet", "Programme BAC", "QCM mixtes"],questionIds:[83, 93, 103, 107, 113, 118, 123, 133, 143, 109],questions:[]},
  {id:31,title:"Immunité Non Spécifique",label:"Section 7 · Unité 1",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["Phagocytose", "Macrophages", "Inflammation"],questionIds:[146, 147, 148, 149, 150, 151, 152, 153, 154, 155],questions:[]},
  {id:32,title:"Réponse Immunitaire Humorale",label:"Section 7 · Unité 2",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["Plasmocytes", "Anticorps", "Complexes immuns"],questionIds:[147, 148, 149, 150, 151, 162, 163, 164, 165, 146],questions:[]},
  {id:33,title:"Réponse Immunitaire Cellulaire",label:"Section 7 · Unité 3",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["LT cytotoxiques", "LT4", "Interleukines IL2"],questionIds:[146, 147, 148, 149, 150, 151, 152, 153, 154, 155],questions:[]},
  {id:34,title:"Allergie & Hypersensibilité",label:"Section 7 · Unité 4",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["IgE", "Mastocytes", "Choc anaphylactique"],questionIds:[148, 149, 150, 151, 152, 153, 154, 155, 156, 165],questions:[]},
  {id:35,title:"SIDA & VIH",label:"Section 7 · Unité 5",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["VIH", "Lymphocytes CD4", "Maladies opportunistes"],questionIds:[150, 151, 152, 153, 154, 155, 156, 157, 146, 147],questions:[]},
  {id:36,title:"Groupes Sanguins & Rhésus",label:"Section 8 · Unité 1",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["Agglutinogènes ABO", "Rhésus", "Transfusion"],questionIds:[157, 161, 162, 163, 164, 165, 146, 147, 148, 149],questions:[]},
  {id:37,title:"Transplantation & Rejet",label:"Section 8 · Unité 2",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["CMH", "Rejet de greffe", "Immunosuppresseurs"],questionIds:[150, 151, 152, 153, 154, 155, 156, 157, 162, 163],questions:[]},
  {id:38,title:"Vaccination",label:"Section 8 · Unité 3",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["Principe vaccinal", "Mémoire immunitaire", "Types de vaccins"],questionIds:[146, 147, 148, 149, 150, 151, 152, 153, 154, 155],questions:[]},
  {id:39,title:"Immunologie Appliquée",label:"Section 8 · Unité 4",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["Diagnostic immuno", "Maladies auto-immunes", "Greffes"],questionIds:[152, 153, 154, 155, 156, 157, 146, 147, 148, 149],questions:[]},
  {id:40,title:"Bilan Immunologie",label:"Section 8 · Unité 5",icon:"fa-shield-virus",color:"#0891b2",colorLt:"#cffafe",chips:["Résumé complet", "Programme BAC", "QCM mixtes"],questionIds:[146, 150, 156, 157, 161, 162, 163, 164, 165, 148],questions:[]},
  {id:41,title:"Régulation Cardiovasculaire",label:"Section 9 · Unité 1",icon:"fa-heart-pulse",color:"#dc2626",colorLt:"#fee2e2",chips:["Pression artérielle", "Barorécepteurs", "SNV"],questionIds:[158, 159, 160, 161, 169, 152, 153, 154, 155, 156],questions:[]},
  {id:42,title:"Système Endocrinien",label:"Section 9 · Unité 2",icon:"fa-heart-pulse",color:"#dc2626",colorLt:"#fee2e2",chips:["TSH", "Thyroïde", "Boucles de régulation"],questionIds:[158, 159, 160, 113, 114, 115, 116, 117, 118, 119],questions:[]},
  {id:43,title:"Muscle Squelettique",label:"Section 9 · Unité 3",icon:"fa-person-running",color:"#ea580c",colorLt:"#ffedd5",chips:["Sarcomère", "Actine", "Myosine"],questionIds:[166, 167, 168, 169, 170, 158, 159, 160, 161, 162],questions:[]},
  {id:44,title:"Régulation Nerveuse PA",label:"Section 9 · Unité 4",icon:"fa-heart-pulse",color:"#dc2626",colorLt:"#fee2e2",chips:["Ganglion étoilé", "Sympathique", "Parasympathique"],questionIds:[169, 152, 153, 154, 155, 156, 157, 158, 159, 160],questions:[]},
  {id:45,title:"Évolution des Espèces",label:"Section 9 · Unité 5",icon:"fa-dna",color:"#7c3aed",colorLt:"#ede9fe",chips:["Sélection naturelle", "Dérive génétique", "Phylogénie"],questionIds:[110, 111, 112, 68, 69, 70, 71, 94, 95, 96],questions:[]},
  {id:46,title:"Stress & Physiologie",label:"Section 9 · Unité 6",icon:"fa-heart-pulse",color:"#dc2626",colorLt:"#fee2e2",chips:["Cortisol", "Adrénaline", "Réponse au stress"],questionIds:[144, 145, 154, 155, 158, 159, 160, 161, 162, 163],questions:[]},
  {id:47,title:"Grand Bilan — Reproduction",label:"Section 10 · Unité 1",icon:"fa-graduation-cap",color:"#15803d",colorLt:"#dcfce7",chips:["Repro complète", "Programme BAC", "Simulation"],questionIds:[1, 11, 21, 31, 43, 48, 22, 6, 16, 14],questions:[]},
  {id:48,title:"Grand Bilan — Génétique & Neuro",label:"Section 10 · Unité 2",icon:"fa-graduation-cap",color:"#15803d",colorLt:"#dcfce7",chips:["Génétique + Neuro", "Programme BAC", "Simulation"],questionIds:[53, 63, 94, 103, 113, 83, 123, 133, 107, 109],questions:[]},
  {id:49,title:"Grand Bilan — Immuno & Cardio",label:"Section 10 · Unité 3",icon:"fa-graduation-cap",color:"#15803d",colorLt:"#dcfce7",chips:["Immuno + Cardio", "Programme BAC", "Simulation"],questionIds:[146, 150, 156, 162, 165, 158, 159, 160, 161, 169],questions:[]},
  {id:50,title:"Examen Final BAC SVT",label:"Section 10 · Unité 4",icon:"fa-graduation-cap",color:"#15803d",colorLt:"#dcfce7",chips:["Tout le programme", "Niveau BAC", "Simulation examen"],questionIds:[1, 21, 46, 53, 94, 103, 113, 146, 158, 168],questions:[]}
];

// Populate stage.questions from qcmData at runtime
function buildStageQuestions(stage){
  if(stage.questions && stage.questions.length>0) return stage.questions;
  const bank={};
  qcmData.models.forEach(m=>m.chapters.forEach(ch=>ch.questions.forEach(q=>{
    const ans=Array.isArray(q.correct_index)?[...q.correct_index]:[q.correct_index];
    bank[q.id]={text:q.question,options:q.choices,answers:ans};
  })));
  const iconsPool=['fa-circle','fa-circle-dot','fa-flask','fa-vial','fa-seedling','fa-dna','fa-brain','fa-heart','fa-shield','fa-star','fa-bolt','fa-leaf','fa-egg','fa-moon','fa-cube'];
  stage.questions=(stage.questionIds||[]).map(id=>bank[id]).filter(Boolean).map((q,i)=>({
    ...q,
    icons:[iconsPool[i%iconsPool.length],iconsPool[(i+1)%iconsPool.length],iconsPool[(i+2)%iconsPool.length],iconsPool[(i+3)%iconsPool.length]]
  }));
  return stage.questions;
}



/* ══════════════════════════════════════════════════════
   ██  STATE  (localStorage)
══════════════════════════════════════════════════════ */
function loadState(){
  try{ return JSON.parse(localStorage.getItem('svtapp_v2'))||{}; }
  catch(e){ return {}; }
}
function saveState(){
  localStorage.setItem('svtapp_v2', JSON.stringify(STATE));
}

let STATE = loadState();
if(!STATE.stages) STATE.stages = {};
// Stage 1 always unlocked
if(!STATE.stages[1]) STATE.stages[1] = {unlocked:true};

function starsFor(pct){
  if(pct==null||pct<0) return 0;
  if(pct>=90) return 3;
  if(pct>=60) return 2;
  if(pct>=30) return 1;
  return 0;
}

/* ══════════════════════════════════════════════════════
   ██  SCREEN SWITCHING
══════════════════════════════════════════════════════ */
function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  // Hide bottom nav during quiz, show it on all other screens
  const nav = document.getElementById('bottomNav');
  if(nav) nav.style.display = (id === 'quiz') ? 'none' : '';
}

/* ══════════════════════════════════════════════════════
   ██  HOME
══════════════════════════════════════════════════════ */
const POS = ['center','right','left','right','center','left','center','right','left','center',
             'center','right','left','right','center','left','center','right','left','center',
             'center','right','left','right','center','left','center','right','left','center',
             'center','right','left','right','center','left','center','right','left','center',
             'center','right','left','right','center','left','center','right','left','center'];

function renderHome(){
  let completed=0, totalAcc=0, accCount=0, totalStars=0;
  for(const id in STATE.stages){
    const s=STATE.stages[id];
    if(s.completed){ completed++; totalAcc+=s.accuracy||0; accCount++; totalStars+=(s.bestStars||s.stars||0); }
  }
  const avgAcc = accCount>0 ? Math.round(totalAcc/accCount) : null;
  const level = completed+1;
  const xp = completed*100+(avgAcc||0);
  const streak = completed;

  // Nav
  document.getElementById('navLevel').textContent = level;
  document.getElementById('navXp').textContent = xp;
  document.getElementById('navStreak').textContent = streak;
  const sp=document.getElementById('streakPill');
  streak>0 ? sp.classList.remove('inactive') : sp.classList.add('inactive');

  // Stats grid
  document.getElementById('stDone').textContent = completed;
  document.getElementById('stStars').textContent = totalStars+'/'+STAGES.length*3;
  document.getElementById('stAcc').textContent = avgAcc!=null ? avgAcc+'%' : '—';
  document.getElementById('pathCount').textContent = completed+' / '+STAGES.length;

  // Hero XP bar
  const heroPct=Math.round((completed/STAGES.length)*100);
  document.getElementById('heroXpVal').textContent = completed+' / '+STAGES.length+' étapes';
  setTimeout(()=>{ document.getElementById('heroXpFill').style.width=heroPct+'%'; },120);

  // Hero milestone dots
  const dotsRow=document.getElementById('heroDotsRow');
  dotsRow.innerHTML='';
  STAGES.forEach((stage,idx)=>{
    const sData=STATE.stages[stage.id]||{};
    const dot=document.createElement('div');
    dot.className='hsr-dot'+(sData.completed?' done':sData.unlocked?' current':'');
    dotsRow.appendChild(dot);
    if(idx<STAGES.length-1){ const g=document.createElement('div'); g.className='hsr-gap'; dotsRow.appendChild(g); }
  });

  // Path
  const path=document.getElementById('path');
  path.innerHTML='';

  STAGES.forEach((stage,idx)=>{
    const sData=STATE.stages[stage.id]||{};
    const isUnlocked=!!sData.unlocked, isCompleted=!!sData.completed, isCurrent=isUnlocked&&!isCompleted;
    const stars=sData.bestStars!=null ? sData.bestStars : starsFor(sData.accuracy);
    const pos=POS[idx]||'center';

    if(idx>0){
      const prevDone=!!(STATE.stages[STAGES[idx-1].id]||{}).completed;
      const conn=document.createElement('div');
      conn.className='connector'+(prevDone?' done':'');
      path.appendChild(conn);
    }

    const wrap=document.createElement('div');
    wrap.className=`node-wrap ${pos}`;
    wrap.style.animationDelay=(idx*.07)+'s';

    const btnClass='node-btn '+(isCompleted?'done':isCurrent?'current':'locked');
    const btnIcon=isCompleted?'fa-check':isCurrent?'fa-star':'fa-lock';
    const scoreTag=isCompleted?`<div class="node-score">${sData.accuracy}%</div>`:'';
    const starHtml=`<div class="stars">
      <i class="fas fa-star ${stars>=1?'on':''}"></i>
      <i class="fas fa-star ${stars>=2?'on':''}"></i>
      <i class="fas fa-star ${stars>=3?'on':''}"></i></div>`;

    let tipTxt='';
    if(isCompleted) tipTxt=`<i class="fas fa-check-circle" style="color:#16a34a"></i>${stage.title}`;
    else if(isCurrent) tipTxt=`<i class="fas fa-play-circle" style="color:#2563eb"></i>${stage.title}`;
    else tipTxt=`<i class="fas fa-lock" style="color:#94a3b8"></i>Verrouillé`;

    const btn=`<button class="${btnClass}" onclick="onNodeClick(${stage.id})"><i class="fas ${btnIcon}"></i>${scoreTag}</button>`;
    const tip=`<div class="tip${pos==='right'?' r':''}">${tipTxt}</div>`;

    wrap.innerHTML=`
      <div class="node-row">${pos==='right'?btn+tip:tip+btn}</div>
      ${starHtml}
      <div class="stage-lbl">Étape ${stage.id}</div>
      <div class="node-name">${stage.title}</div>`;
    path.appendChild(wrap);
  });

  // Trophy
  const lastConn=document.createElement('div');
  lastConn.className='connector'+((STATE.stages[5]||{}).completed?' done':'');
  path.appendChild(lastConn);
  const allDone=STAGES.every(s=>(STATE.stages[s.id]||{}).completed);
  const tw=document.createElement('div');
  tw.className='node-wrap center'; tw.style.animationDelay='.40s';
  tw.innerHTML=`
    <button class="node-btn trophy-btn${allDone?' unlocked':''}"
      onclick="${allDone?"showCongrats()":"showToast('fa-lock','Terminez toutes les étapes d\\'abord !')"}">
      <i class="fas fa-trophy"></i></button>
    <div class="stage-lbl" style="margin-top:9px">Grand Prix</div>
    <div class="node-name">🏆 Tout compléter</div>`;
  path.appendChild(tw);
}

function onNodeClick(stageId){
  openSheet(stageId);
}

/* ── Home Sheet ── */
function openSheet(stageId){
  const stage=STAGES.find(s=>s.id===stageId);
  const sData=STATE.stages[stageId]||{};
  const done=!!sData.completed;

  // Icon + header
  const ico=document.getElementById('shIco');
  ico.innerHTML=`<i class="fas ${stage.icon}"></i>`;
  ico.style.background=stage.colorLt;
  ico.style.color=stage.color;
  ico.style.borderColor=stage.color+'44';
  document.getElementById('shTitle').textContent=stage.title;
  document.getElementById('shMeta').innerHTML=`<i class="fas fa-layer-group"></i>${stage.label} · ${stage.questions.length} questions`;

  const sb=document.getElementById('shStartBlock');
  const db=document.getElementById('shDoneBlock');

  if(done){
    sb.style.display='none'; db.style.display='block';

    // Animate stars in sheet
    const bestStars=sData.bestStars||sData.stars||0;
    ['shStar1','shStar2','shStar3'].forEach((id,i)=>{
      const el=document.getElementById(id);
      el.classList.remove('on');
      void el.offsetWidth;
      if(i<bestStars) setTimeout(()=>el.classList.add('on'),(i+1)*150);
    });

    // Results row
    document.getElementById('shResults').innerHTML=`
      <div class="sh-rc g"><i class="fas fa-trophy"></i><div class="rcv">${sData.score}/${sData.qCount}</div><div class="rcl">Score</div></div>
      <div class="sh-rc b"><i class="fas fa-bullseye"></i><div class="rcv">${sData.accuracy}%</div><div class="rcl">Précision</div></div>
      <div class="sh-rc o"><i class="fas fa-star"></i><div class="rcv">${'★'.repeat(bestStars)}${'☆'.repeat(3-bestStars)}</div><div class="rcl">Étoiles</div></div>`;

    // Chips
    document.getElementById('shDoneChips').innerHTML=stage.chips.map(c=>
      `<div class="sh-chip done"><i class="fas fa-check-circle"></i>${c}</div>`).join('');

    document.getElementById('shReplayBtn').onclick=()=>{ closeSheet(); startQuiz(stageId); };

  } else {
    sb.style.display='block'; db.style.display='none';

    // Locked tip
    const lt=document.getElementById('shLockedTip');
    lt.style.display = sData.unlocked ? 'none' : 'flex';

    // Chips
    document.getElementById('shChips').innerHTML=stage.chips.map(c=>
      `<div class="sh-chip"><i class="fas fa-circle" style="font-size:7px"></i>${c}</div>`).join('');

    // Start button — disabled if locked
    const startBtn=document.getElementById('shStartBtn');
    if(sData.unlocked){
      startBtn.disabled=false;
      startBtn.style.opacity='1';
      startBtn.onclick=()=>{ closeSheet(); startQuiz(stageId); };
    } else {
      startBtn.disabled=true;
      startBtn.style.opacity='.45';
      startBtn.innerHTML='<i class="fas fa-lock"></i> Verrouillé';
    }
  }

  document.getElementById('hOverlay').classList.add('open');
}

function closeSheet(e){
  if(!e||e.target===document.getElementById('hOverlay')){
    document.getElementById('hOverlay').classList.remove('open');
  }
}

function showCongrats(){
  showToast('fa-trophy','🏆 Félicitations ! Vous avez tout terminé !');
  confetti();
}

/* ══════════════════════════════════════════════════════
   ██  QUIZ ENGINE
══════════════════════════════════════════════════════ */
let CURRENT_STAGE_ID = null;
let QUESTIONS = [];
let TOTAL = 0;
let qIdx=0, selSet=new Set(), checked=false, score=0, correct=0;
let startTime=Date.now(), timerInt=null, timeLeft=30;
const LTR=["A","B","C","D"];

// DOM refs (quiz)
const $prog    = ()=>document.getElementById('progFill');
const $navScr  = ()=>document.getElementById('navScore');
const $segs    = ()=>document.getElementById('segTrack');
const $badge   = ()=>document.getElementById('qBadge');
const $frac    = ()=>document.getElementById('qFrac');
const $timerF  = ()=>document.getElementById('timerFill');
const $timerV  = ()=>document.getElementById('timerVal');
const $qtext   = ()=>document.getElementById('qText');
const $opts    = ()=>document.getElementById('opts');
const $hint    = ()=>document.getElementById('footHint');
const $stat    = ()=>document.getElementById('footStat');
const $accv    = ()=>document.getElementById('accVal');
const $actBtn  = ()=>document.getElementById('actionBtn');
const $aIcon   = ()=>document.getElementById('aIcon');
const $aLbl    = ()=>document.getElementById('aLabel');
const $qcard   = ()=>document.getElementById('quizCard');
const $fcard   = ()=>document.getElementById('finishCard');

function startQuiz(stageId){
  CURRENT_STAGE_ID = stageId;
  const stage = STAGES.find(s=>s.id===stageId);
  buildStageQuestions(stage);
  QUESTIONS = stage.questions;
  TOTAL = QUESTIONS.length;

  // Reset state
  qIdx=0; selSet=new Set(); checked=false; score=0; correct=0;
  startTime=Date.now();

  // Style nav
  const meta = stage;
  document.getElementById('qNavIcon').style.background = meta.color;
  document.getElementById('qNavTitle').textContent = meta.title;
  document.getElementById('qNavIco').className = `fas ${meta.icon}`;

  // Style strip
  const ssIco=document.getElementById('ssIco');
  ssIco.innerHTML=`<i class="fas ${meta.icon}"></i>`;
  ssIco.style.background=meta.colorLt; ssIco.style.color=meta.color;
  document.getElementById('ssTitle').textContent=`Étape ${stageId} · ${meta.title}`;
  document.getElementById('ssSub').textContent=`${meta.label} · ${TOTAL} questions`;

  document.getElementById('fTotal').textContent=TOTAL;
  document.getElementById('navScore').textContent=0;
  document.getElementById('stageStrip').classList.remove('hidden');
  document.getElementById('quizCard').classList.remove('hidden');
  document.getElementById('finishCard').classList.add('hidden');

  // Remove old reward badge
  const ob=document.getElementById('rewardBadge');
  if(ob) ob.remove();

  // Wire up continue/retry once
  document.getElementById('continueBtn').onclick = goHome;
  document.getElementById('retryBtn').onclick = retryQuiz;

  showScreen('quiz');
  buildSegs();
  renderQ();

  // keyboard
  document.onkeydown = handleKey;
}

function buildSegs(){
  const st=document.getElementById('segTrack');
  st.innerHTML='';
  QUESTIONS.forEach(()=>{
    const s=document.createElement('div'); s.className='seg'; st.appendChild(s);
  });
}

function updSegs(){
  [...document.getElementById('segTrack').children].forEach((s,i)=>{
    s.className='seg';
    if(i<qIdx) s.classList.add('s-done');
    if(i===qIdx) s.classList.add('s-active');
  });
}

function renderQ(){
  const q=QUESTIONS[qIdx];
  $prog().style.width=(qIdx/TOTAL*100)+'%';
  $badge().innerHTML=`<i class="fa-solid fa-circle-question"></i>&nbsp;Question ${qIdx+1}`;
  $frac().textContent=`${qIdx+1} / ${TOTAL}`;
  $qtext().innerHTML=esc(q.text);
  $opts().innerHTML='';
  selSet.clear(); checked=false;
  $actBtn().classList.add('hidden'); $actBtn().disabled=true;
  setActionCheck();

  q.options.forEach((opt,i)=>{
    const btn=document.createElement('button');
    btn.className='opt'; btn.type='button';
    btn.innerHTML=`
      <div class="opt-icon-wrap"><div class="opt-icon"><i class="fa-solid ${q.icons?.[i]||'fa-circle'}"></i></div></div>
      <div class="opt-inner">
        <span class="opt-ltr">${LTR[i]}</span>
        <span class="opt-text">${esc(opt)}</span>
      </div>
      <div class="opt-cb"><i class="fa-solid fa-check"></i></div>`;
    btn.addEventListener('click',()=>toggleSel(i));
    $opts().appendChild(btn);
  });

  updSegs();
  startTimer();
  const fb=document.querySelector('.feedback'); if(fb) fb.remove();
  $hint().classList.remove('hidden'); $stat().classList.add('hidden');
  const qc=$qcard();
  qc.style.animation='none'; void qc.offsetWidth; qc.style.animation='cardUp .45s var(--ease) both';
}

function toggleSel(i){
  if(checked) return;
  const btns=[...$opts().querySelectorAll('.opt')];
  if(selSet.has(i)){ selSet.delete(i); btns[i].classList.remove('sel'); }
  else { selSet.add(i); btns[i].classList.add('sel'); }
  if(selSet.size>0){ $actBtn().classList.remove('hidden'); $actBtn().disabled=false; $hint().classList.add('hidden'); }
  else { $actBtn().classList.add('hidden'); $actBtn().disabled=true; $hint().classList.remove('hidden'); }
}

function onAction(){
  if(!checked) checkQ(); else nextQ();
}

function checkQ(){
  stopTimer(); checked=true;
  const q=QUESTIONS[qIdx];
  const btns=[...$opts().querySelectorAll('.opt')];
  btns.forEach(b=>b.disabled=true);
  const sel=[...selSet].sort();
  const ans=[...q.answers].sort();
  const ok=JSON.stringify(sel)===JSON.stringify(ans);
  if(ok){ correct++; score+=10; $navScr().textContent=score; }
  btns.forEach((b,i)=>{
    const ico=b.querySelector('.opt-cb i');
    if(ans.includes(i)){ b.classList.add('show-ok'); ico.className='fa-solid fa-check'; ico.style.color=''; }
    if(sel.includes(i)&&!ans.includes(i)){ b.classList.add('is-bad'); ico.className='fa-solid fa-xmark'; ico.style.color=''; }
    if(sel.includes(i)&&ans.includes(i)){ b.classList.remove('show-ok'); b.classList.add('is-ok'); }
  });
  insertFeedback(ok,
    ok?'Bonne réponse !':'Réponse incorrecte',
    ok?'Excellent ! Passez à la question suivante.':'Les bonnes réponses sont surlignées ci-dessus.'
  );
  setActionNext(); updateAcc();
}

function nextQ(){
  const fb=document.querySelector('.feedback'); if(fb) fb.remove();
  qIdx++;
  if(qIdx>=TOTAL){ showFinish(); return; }
  renderQ();
}

function insertFeedback(ok,t,s){
  const fb=document.createElement('div');
  fb.className=`feedback ${ok?'fb-ok':'fb-err'}`;
  fb.innerHTML=`<div class="fb-ico"><i class="fa-solid ${ok?'fa-check':'fa-xmark'}"></i></div><div><div class="fb-t">${t}</div><div class="fb-s">${s}</div></div>`;
  $opts().insertAdjacentElement('afterend',fb);
}

function setActionCheck(){ $aIcon().className='fa-solid fa-check'; $aLbl().textContent='Vérifier'; }
function setActionNext(){
  const last=qIdx===TOTAL-1;
  $aIcon().className=last?'fa-solid fa-flag-checkered':'fa-solid fa-arrow-right';
  $aLbl().textContent=last?'Voir les résultats':'Question suivante';
  $actBtn().disabled=false;
}
function updateAcc(){
  const done=qIdx+(checked?1:0);
  const pct=done>0?Math.round((correct/done)*100):0;
  $accv().textContent=pct+' %';
  $stat().classList.remove('hidden');
}

/* TIMER */
function startTimer(){
  clearInterval(timerInt); timeLeft=30;
  $timerF().style.transition='none'; $timerF().style.width='100%';
  $timerF().style.backgroundPosition='0% 50%';
  $timerV().textContent='30'; $timerV().classList.remove('low');
  setTimeout(()=>{
    $timerF().style.transition='width 1s linear,background-position 1s linear';
    timerInt=setInterval(()=>{
      timeLeft--;
      const pct=Math.max(0,(timeLeft/30)*100);
      $timerF().style.width=pct+'%';
      $timerF().style.backgroundPosition=(100-pct)+'% 50%';
      $timerV().textContent=timeLeft;
      if(timeLeft<=8) $timerV().classList.add('low');
      if(timeLeft<=0&&!checked){ clearInterval(timerInt); autoFail(); }
    },1000);
  },60);
}
function stopTimer(){ clearInterval(timerInt); }
function autoFail(){
  const q=QUESTIONS[qIdx];
  const btns=[...$opts().querySelectorAll('.opt')];
  btns.forEach(b=>b.disabled=true);
  q.answers.forEach(ai=>{
    btns[ai].classList.add('show-ok');
    const ico=btns[ai].querySelector('.opt-cb i');
    ico.className='fa-solid fa-check'; ico.style.color='';
  });
  insertFeedback(false,'Temps écoulé !','La ou les bonne(s) réponse(s) sont surlignées ci-dessus.');
  checked=true; setActionNext(); updateAcc();
}

/* FINISH */
function showFinish(){
  stopTimer();
  $prog().style.width='100%';
  $qcard().classList.add('hidden');
  document.getElementById('stageStrip').classList.add('hidden');
  $fcard().classList.remove('hidden');

  const elapsed=Math.round((Date.now()-startTime)/1000);
  const pct=Math.round((correct/TOTAL)*100);
  const stars=starsFor(pct);

  document.getElementById('fScore').textContent=correct;
  document.getElementById('fAcc').textContent=pct+' %';
  document.getElementById('fTime').textContent=elapsed+' s';

  // ── Animate stars ──
  ['fstar1','fstar2','fstar3'].forEach((id,i)=>{
    const el=document.getElementById(id);
    el.classList.remove('lit');
    // re-trigger animation
    void el.offsetWidth;
    if(i<stars) setTimeout(()=>el.classList.add('lit'),(i+1)*180);
  });

  // ── Tier badge + titles ──
  let tierClass,tierLabel,finTitle,finSub,tierIcon;
  if(stars===3){
    tierClass='tier-full';tierLabel='🏆 Score parfait !';tierIcon='fa-trophy';
    finTitle='Félicitations, score parfait !';
    finSub='Incroyable ! 3 étoiles — étape suivante débloquée !';
  } else if(stars===2){
    tierClass='tier-high';tierLabel='⭐⭐ Très bon score';tierIcon='fa-star';
    finTitle='Très bon score !';
    finSub='2 étoiles ! Étape suivante débloquée. Essayez d\'atteindre 3 étoiles !';
  } else if(stars===1){
    tierClass='tier-low';tierLabel='⭐ Score passable';tierIcon='fa-circle-check';
    finTitle='Bien joué, continuez !';
    finSub='1 étoile obtenue. Étape suivante débloquée. Vous pouvez faire mieux !';
  } else {
    tierClass='tier-none';tierLabel='❌ Aucune étoile';tierIcon='fa-rotate-right';
    finTitle='Pas d\'étoile cette fois…';
    finSub='Score trop bas. Retentez pour gagner au moins une étoile !';
  }

  document.getElementById('finishIcon').className=`fa-solid ${tierIcon}`;
  document.getElementById('finishTitle').textContent=finTitle;
  document.getElementById('finishSub').innerHTML=finSub;

  let badge=document.getElementById('rewardBadge');
  if(!badge){
    badge=document.createElement('div');
    badge.id='rewardBadge';
    badge.className='reward-badge';
    document.querySelector('.finish-hero').insertBefore(badge,document.getElementById('finishTitle'));
  }
  badge.className=`reward-badge ${tierClass}`;
  badge.textContent=tierLabel;

  // ── ALWAYS save result and unlock next stage ──
  if(!STATE.stages) STATE.stages={};
  // Keep best stars if replaying
  const prev=STATE.stages[CURRENT_STAGE_ID]||{};
  const bestStars=Math.max(stars, prev.stars||0);
  const bestAcc=Math.max(pct, prev.accuracy||0);
  STATE.stages[CURRENT_STAGE_ID]={
    unlocked:true, completed:true,
    score:correct, qCount:TOTAL,
    accuracy:pct, stars:stars,
    bestStars:bestStars, bestAcc:bestAcc,
    time:elapsed
  };
  const nextId=CURRENT_STAGE_ID+1;
  const nextStage=STAGES.find(s=>s.id===nextId);
  if(nextStage){
    if(!STATE.stages[nextId]) STATE.stages[nextId]={};
    STATE.stages[nextId].unlocked=true;
  }
  saveState();

  // ── Continue button — always "Go back to home" ──
  const continueBtn=document.getElementById('continueBtn');
  continueBtn.innerHTML='<i class="fa-solid fa-house"></i>&nbsp;Retour à l\'accueil';
  continueBtn.disabled=false;
  continueBtn.onclick=goHome;

  if(stars>0) confetti();
}

function goHome(){
  stopTimer();
  document.onkeydown=null;
  showScreen('home');
  renderHome();
  const sData=STATE.stages[CURRENT_STAGE_ID]||{};
  const stars=sData.bestStars||sData.stars||0;
  const starStr='⭐'.repeat(stars)||'💪';
  showToast('fa-star',`${starStr} Étape ${CURRENT_STAGE_ID} — ${sData.accuracy}% de précision !`);
  if(stars>0) confetti();
}

function retryQuiz(){
  qIdx=0; selSet=new Set(); checked=false; score=0; correct=0;
  startTime=Date.now();
  $navScr().textContent=0;
  $stat().classList.add('hidden');
  const ob=document.getElementById('rewardBadge'); if(ob) ob.remove();
  $fcard().classList.add('hidden');
  document.getElementById('stageStrip').classList.remove('hidden');
  $qcard().classList.remove('hidden');
  document.getElementById('continueBtn').onclick=goHome;
  buildSegs(); renderQ();
}

function confirmBack(){
  if(confirm('Quitter le quiz ? Votre progression sera perdue.')){
    stopTimer();
    document.onkeydown=null;
    showScreen('home');
    renderHome();
  }
}

function handleKey(e){
  if(!checked){
    if(e.key==='1') toggleSel(0);
    if(e.key==='2') toggleSel(1);
    if(e.key==='3') toggleSel(2);
    if(e.key==='4') toggleSel(3);
    if(e.key==='Enter'&&selSet.size>0) onAction();
  } else if(e.key==='Enter') onAction();
}

// Wire action button
document.getElementById('actionBtn').addEventListener('click', onAction);

/* ══════════════════════════════════════════════════════
   ██  TOAST
══════════════════════════════════════════════════════ */
let _tt;
function showToast(icon,msg){
  const el=document.getElementById('toast');
  document.getElementById('tIco').className='fas '+icon;
  document.getElementById('tMsg').textContent=msg;
  el.classList.add('show');
  clearTimeout(_tt);
  _tt=setTimeout(()=>el.classList.remove('show'),2800);
}

/* ══════════════════════════════════════════════════════
   ██  CONFETTI
══════════════════════════════════════════════════════ */
function confetti(){
  const colors=["#16a34a","#1d6bf3","#d97706","#dc2626","#38bdf8","#7c3aed","#fbbf24"];
  const cx=window.innerWidth/2, cy=window.innerHeight/2;
  for(let i=0;i<100;i++){
    const el=document.createElement('div'); el.className='cp';
    const angle=Math.random()*Math.PI*2, dist=80+Math.random()*220;
    const tx=(Math.cos(angle)*dist).toFixed(1), ty=(Math.sin(angle)*dist+240).toFixed(1);
    const d=(1.2+Math.random()*1.5).toFixed(2), dl=(Math.random()*.4).toFixed(2);
    const rot=((Math.random()-.5)*800).toFixed(0), sz=(5+Math.random()*8).toFixed(1);
    el.style.cssText=`left:${cx}px;top:${cy}px;width:${sz}px;height:${sz}px;background:${colors[~~(Math.random()*colors.length)]};border-radius:${Math.random()>.45?'50%':'3px'};--tx:${tx}px;--ty:${ty}px;--r:${rot}deg;--d:${d}s;--dl:${dl}s`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),(+d+ +dl+.6)*1000);
  }
}

/* ══════════════════════════════════════════════════════
   ██  WUIZ INTERACTIONS
══════════════════════════════════════════════════════ */
function wuizReact(el){
  const wasLit = el.classList.contains('lit');
  // toggle all circles in this row off
  el.closest('.wuiz-react-row').querySelectorAll('.wuiz-react-circle').forEach(c=>c.classList.remove('lit'));
  const countEl = el.closest('.wuiz-item-foot').querySelector('.wuiz-react-count');
  let n = parseInt(countEl.textContent.replace(/,/g,''));
  if(!wasLit){
    el.classList.add('lit');
    countEl.textContent = (n+1).toLocaleString();
  } else {
    countEl.textContent = Math.max(0,n-1).toLocaleString();
  }
}

/* ══════════════════════════════════════════════════════
   ██  CHAT INTERACTIONS
══════════════════════════════════════════════════════ */
function toggleReact(btn){
  const wasActive = btn.classList.contains('active');
  btn.closest('.cfi-reactions').querySelectorAll('.cfi-react-btn').forEach(b=>b.classList.remove('active'));
  if(!wasActive){
    btn.classList.add('active');
    const numEl = btn.querySelector('span:last-child');
    numEl.textContent = (parseInt(numEl.textContent.replace(/,/g,''))+1).toLocaleString();
  }
}
function chatTab(el, tab){
  document.querySelectorAll('.chat-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}

/* ══════════════════════════════════════════════════════
   ██  BOTTOM NAV
══════════════════════════════════════════════════════ */
function bnClick(tab){
  document.querySelectorAll('.bn-item').forEach(el=>el.classList.remove('active'));
  document.getElementById('bn-'+tab)?.classList.add('active');

  if(tab==='home'){
    if(document.getElementById('quiz').classList.contains('active')){
      if(confirm('Quitter le quiz ? Votre progression sera perdue.')){
        stopTimer();
        document.onkeydown=null;
        showScreen('home');
        renderHome();
      } else {
        document.getElementById('bn-home').classList.add('active');
      }
    } else {
      showScreen('home');
      renderHome();
    }
  } else if(tab==='hearts'){
    if(document.getElementById('quiz').classList.contains('active')){
      if(confirm('Quitter le quiz ? Votre progression sera perdue.')){
        stopTimer();
        document.onkeydown=null;
        showScreen('chat');
      } else {
        document.getElementById('bn-home').classList.add('active');
      }
    } else {
      showScreen('chat');
    }
  } else if(tab==='quiz'){
    if(document.getElementById('quiz').classList.contains('active')){
      if(confirm('Quitter le quiz ? Votre progression sera perdue.')){
        stopTimer();
        document.onkeydown=null;
        showScreen('exercices');
      } else {
        document.getElementById('bn-home').classList.add('active');
      }
    } else {
      showScreen('exercices');
    }
  } else if(tab==='profile'){
    if(document.getElementById('quiz').classList.contains('active')){
      if(confirm('Quitter le quiz ? Votre progression sera perdue.')){
        stopTimer();
        document.onkeydown=null;
        showScreen('wuiz');
      } else {
        document.getElementById('bn-home').classList.add('active');
      }
    } else {
      showScreen('wuiz');
    }
  }
  // other tabs: no-op for now (could add screens later)
  if(tab==='learn'){
    if(document.getElementById('quiz').classList.contains('active')){
      if(confirm('Quitter le quiz ? Votre progression sera perdue.')){
        stopTimer();
        document.onkeydown=null;
        showScreen('cartes');
      } else {
        document.getElementById('bn-home').classList.add('active');
      }
    } else {
      showScreen('cartes');
    }
  }
}
// Patch showScreen to sync bottom nav
const _orig_showScreen = showScreen;
showScreen = function(id){
  _orig_showScreen(id);
  document.querySelectorAll('.bn-item').forEach(el=>el.classList.remove('active'));
  if(id==='exercices')   document.getElementById('bn-quiz')?.classList.add('active');
  else if(id==='wuiz')   document.getElementById('bn-profile')?.classList.add('active');
  else if(id==='cartes') document.getElementById('bn-learn')?.classList.add('active');
  else if(id==='chat')   document.getElementById('bn-hearts')?.classList.add('active');
  else                   document.getElementById('bn-home')?.classList.add('active');
};
// Set home active on load
document.getElementById('bn-home')?.classList.add('active');

/* ══════════════════════════════════════════════════════
   ██  COURS — DATA
══════════════════════════════════════════════════════ */
const COURS_DATA = [
  {
    id: "cours-repro-h",
    name: "Reproduction – Partie Homme",
    short: "Repro H",
    desc: "Découvrir, de manière simple et claire, les étapes et les organes impliqués dans la reproduction masculine.",
    color: "indigo",
    icon: "fa-person",
    lessons: 1,
    url: "https://drive.google.com/file/d/19CprFYa7_ftc-DYKdnYF4JV1MJV_BZjO/preview"
  },
  {
    id: "cours-repro-f",
    name: "Reproduction – Partie Femme",
    short: "Repro F",
    desc: "Comprendre facilement le rôle des organes reproducteurs féminins et les différentes étapes du cycle reproductif.",
    color: "pink",
    icon: "fa-person-dress",
    lessons: 1,
    url: "https://drive.google.com/file/d/1GnOnoA_T_MIFNmuYBq8DjqqxrEzoeEfX/preview"
  },
  {
    id: "cours-procreation",
    name: "Procréation Humaine",
    short: "Procréation",
    desc: "Comprendre les mécanismes biologiques qui permettent la création d'un nouvel être humain.",
    color: "rose",
    icon: "fa-baby",
    lessons: 1,
    url: "https://drive.google.com/file/d/1Ghhgmb0qbvHbbOxwse8EVre0b3tkWy9F/preview"
  },
  {
    id: "cours-genetique",
    name: "Génétique des Diploïdes",
    short: "Génétique",
    desc: "Étudier l'hérédité et la variation des caractères chez l'humain.",
    color: "purple",
    icon: "fa-dna",
    lessons: 1,
    url: "https://drive.google.com/file/d/1hze7Bz3wn3mDRyn1qYQNU92QOLoDTCMf/preview"
  },
  {
    id: "cours-evolution",
    name: "Évolution des Espèces",
    short: "Évolution",
    desc: "Ce cours présente les mécanismes de transformation des espèces au cours du temps.",
    color: "green",
    icon: "fa-frog",
    lessons: 1,
    url: "https://drive.google.com/file/d/15IWz9XARnuB8NB3es7DJj1W2WR3YOebg/preview"
  },
  {
    id: "cours-nerveux",
    name: "Système Nerveux",
    short: "Nerveux",
    desc: "Contrôle les activités du corps en recevant, traitant et transmettant les messages nerveux.",
    color: "blue",
    icon: "fa-brain",
    lessons: 1,
    url: "https://drive.google.com/file/d/1-MfQN24ogZHwOGgNVqAQ7OwNGl1T46-I/preview"
  },
  {
    id: "cours-muscle",
    name: "Système Musculo-Squelettique",
    short: "Muscles",
    desc: "Permet le mouvement du corps et assure le soutien grâce aux muscles et aux os.",
    color: "orange",
    icon: "fa-person-running",
    lessons: 1,
    url: "https://drive.google.com/file/d/1oK8wddtjMIzMr3ps8LNmzfGQrUC6ay-g/preview"
  },
  {
    id: "cours-pression",
    name: "Pression Artérielle",
    short: "Cardio",
    desc: "Mesure la force du sang contre les parois des artères et reflète la santé du cœur et des vaisseaux.",
    color: "red",
    icon: "fa-heart-pulse",
    lessons: 1,
    url: "https://drive.google.com/file/d/1cXm2ILBGgjQK8xCRuLpIv8BX2UrH_fRh/preview"
  },
  {
    id: "cours-immuno",
    name: "Système Immunitaire",
    short: "Immuno",
    desc: "Protège le corps contre les infections en reconnaissant et en combattant les agents étrangers.",
    color: "teal",
    icon: "fa-shield-virus",
    lessons: 1,
    url: "https://drive.google.com/file/d/#/preview"
  }
];

/* ══════════════════════════════════════════════════════
   ██  EXERCICES — DATA (JSON)
══════════════════════════════════════════════════════ */
const EXERCICES_DATA = [
  {
    id: "dc1",
    name: "Devoir Contrôle 1",
    short: "DC 1",
    desc: "Toutes les copies types du Devoir de Contrôle 1 en SVT, analysées et expliquées pour préparer le Bac efficacement.",
    color: "indigo",
    icon: "fa-file-contract",
    docs: [
      { id:"dc1-1",  name:"Devoir de contrôle n°1 - 1",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1kV3SgxTy3OUdunymHPButv0NL6cjqc-l/preview" },
      { id:"dc1-c1", name:"Correction n°1 - 1",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1u_g16KgIoI_91VZuzZsGwIZKoMc10R34/preview" },
      { id:"dc1-2",  name:"Devoir de contrôle n°1 - 2",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1EGDdWmC6bFgxaUPvBfmckTQjo708TC09/preview" },
      { id:"dc1-c2", name:"Correction n°1 - 2",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1ScPH5pqQzB3rmHdCVDh2qCI8bywHw4hn/preview" },
      { id:"dc1-3",  name:"Devoir de contrôle n°1 - 3",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1XXf14GysWZ2ZiV_rKOg1Sopy0f11CDf_/preview" },
      { id:"dc1-c3", name:"Correction n°1 - 3",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1K25mNwH7ehgKZMf6o-U-RxZY_u3EhbZ2/preview" },
      { id:"dc1-4",  name:"Devoir de contrôle n°1 - 4",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/10VOFLTJwEscEYs3R1kl0FWKcw9N0yxyR/preview" },
      { id:"dc1-c4", name:"Correction n°1 - 4",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1bhx9Uj5uUqbX6Yn_o_iJ7Gc-Qn2Bugkq/preview" },
      { id:"dc1-5",  name:"Devoir de contrôle n°1 - 5",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/11YNhR45ZjtZ5t_EyEhH5gIlWtgeGeLqX/preview" },
      { id:"dc1-c5", name:"Correction n°1 - 5",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1looWDr8DWC7cF8VdzlKXypMAFAvzh15w/preview" },
      { id:"dc1-6",  name:"Devoir de contrôle n°1 - 6",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/19JvFK_FSSVABX0WdcD1Vbfp7H6k3V-x9/preview" },
      { id:"dc1-c6", name:"Correction n°1 - 6",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1vOYh3f2GSSdEUnOAVn19chjGA52jop4w/preview" },
      { id:"dc1-7",  name:"Devoir de contrôle n°1 - 7",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1L7fmwkz9uXdYYQkvYebqhAeR-eW1Edy-/preview" },
      { id:"dc1-c7", name:"Correction n°1 - 7",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1f4n-CRWd_LbIAwxQSuYzRlPPp0gOSoQs/preview" },
      { id:"dc1-8",  name:"Devoir de contrôle n°1 - 8",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1uCLrk0b2yT0pZQzX-BNJZV7pryQWLIyl/preview" },
      { id:"dc1-c8", name:"Correction n°1 - 8",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1sXUW8XQdBbZ3lpIXAKqeydramXjlGeql/preview" }
    ]
  },
  {
    id: "dc2",
    name: "Devoir Contrôle 2",
    short: "DC 2",
    desc: "Toutes les copies types du Devoir de Contrôle 2 en SVT, analysées et expliquées pour préparer le Bac efficacement.",
    color: "purple",
    icon: "fa-file-lines",
    docs: [
      { id:"dc2-1",   name:"Devoir de contrôle n°2 - 1",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1vP-dy1ixVT_oV0qwXh51OiIeHSB_Dxn8/preview" },
      { id:"dc2-c1",  name:"Correction n°2 - 1",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1iwR8n3kaovAin6fox7e99PKlezq24NNN/preview" },
      { id:"dc2-2",   name:"Devoir de contrôle n°2 - 2",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1x2SzBoyv2JPj72YHR17Cv9E5VEPAbtIx/preview" },
      { id:"dc2-c2",  name:"Correction n°2 - 2",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1o-LIrPnHMfpZjDGWCzTNVaiT_cR2rsCp/preview" },
      { id:"dc2-3",   name:"Devoir de contrôle n°2 - 3",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1zAEVxQDn4AztwlKk_TP1-gjXX1L9ibvu/preview" },
      { id:"dc2-c3",  name:"Correction n°2 - 3",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1AKW-G3QciSFjeVSoV4XqOy-fnjyaf0FG/preview" },
      { id:"dc2-4",   name:"Devoir de contrôle n°2 - 4",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1uokaWh3POG2l7SX4p0uepwDgu4tbniK5/preview" },
      { id:"dc2-c4",  name:"Correction n°2 - 4",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1Xed2Pbau9jU9IUbb5pRJUobEVvjgQtad/preview" },
      { id:"dc2-5",   name:"Devoir de contrôle n°2 - 5",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1cckv9f2CP3oB3k98Cl7X2R4R3bMYt8id/preview" },
      { id:"dc2-c5",  name:"Correction n°2 - 5",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1bi8gZkF3dsGRkNpgJdmBeSFTl61vxz0G/preview" },
      { id:"dc2-6",   name:"Devoir de contrôle n°2 - 6",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1QR7zWhGJrp9ED5EdFxzk1FemKrM3pua4/preview" },
      { id:"dc2-c6",  name:"Correction n°2 - 6",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1o-EURyFQ6hQwonnmF5TRosD19dEqmv9H/preview" },
      { id:"dc2-7",   name:"Devoir de contrôle n°2 - 7",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1bLYFO6g2nM1flSgA0lN20WW1g1bMFlRu/preview" },
      { id:"dc2-c7",  name:"Correction n°2 - 7",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1rTMQK-S-RGGps4iJLxdl62ruR5GU_Jmc/preview" },
      { id:"dc2-8",   name:"Devoir de contrôle n°2 - 8",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1Z0Avao0rWBKV63OBNjejN8g8ij8yupcK/preview" },
      { id:"dc2-c8",  name:"Correction n°2 - 8",           type:"correction", pages:1, url:"https://drive.google.com/file/d/18vkwSwxvTZ_v3QGYE7r56wY2qRzGLEr_/preview" },
      { id:"dc2-9",   name:"Devoir de contrôle n°2 - 9",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1fcFrxebQIAVaXhnHE-IXV6sItVZM15lL/preview" },
      { id:"dc2-c9",  name:"Correction n°2 - 9",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1L0ZXQvL11faCLKmhMiB_LFGj3_SEBnSu/preview" },
      { id:"dc2-10",  name:"Devoir de contrôle n°2 - 10", type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1307_PtyYtjCUJxp2lqkWC2_XJ4mqAL3J/preview" },
      { id:"dc2-c10", name:"Correction n°2 - 10",          type:"correction", pages:1, url:"https://drive.google.com/file/d/1Rek3xlV9CvR6DHCH1E6W2rZWrzxqL45K/preview" },
      { id:"dc2-11",  name:"Devoir de contrôle n°2 - 11", type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1UEfkXjxUgiksEq9OJuPR3OkRrR2ai6Le/preview" },
      { id:"dc2-c11", name:"Correction n°2 - 11",          type:"correction", pages:1, url:"https://drive.google.com/file/d/1IVjoZzvuCAcVa29Fle06hi3KRiFukMPP/preview" }
    ]
  },
  {
    id: "dc3",
    name: "Devoir Contrôle 3",
    short: "DC 3",
    desc: "Toutes les copies types du Devoir de Contrôle 3 en SVT, analysées et expliquées pour préparer le Bac efficacement.",
    color: "blue",
    icon: "fa-file-pen",
    docs: [
      { id:"dc3-1",  name:"Devoir de contrôle n°3 - 1",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1K6vk4qaWpWWe1rhTxxtYtR5J09BcTJHI/preview" },
      { id:"dc3-c1", name:"Correction n°3 - 1",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1QLiAtoc_2mDlqgK6X6IPX7TnnjdnPRLh/preview" },
      { id:"dc3-2",  name:"Devoir de contrôle n°3 - 2",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1QMQ1pOca3wS9lV3qKGZM0Ep5cbynY546/preview" },
      { id:"dc3-c2", name:"Correction n°3 - 2",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1-LfuH_zX8WFKMXhZxj0xdtjbgqhMzx-0/preview" },
      { id:"dc3-3",  name:"Devoir de contrôle n°3 - 3",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1OLrGzA_ROLbN3OMyJoS_GleC3IyLsYk9/preview" },
      { id:"dc3-c3", name:"Correction n°3 - 3",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1VGIfxq5pil1sDciZxpi-sEv1NpiiiCIW/preview" },
      { id:"dc3-4",  name:"Devoir de contrôle n°3 - 4",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/19mnZ2gUdOYfUCZm6a1pu3a9o497CctSP/preview" },
      { id:"dc3-c4", name:"Correction n°3 - 4",           type:"correction", pages:1, url:"https://drive.google.com/file/d/#/preview" }
    ]
  },
  {
    id: "ds1",
    name: "Devoir Synthèse 1",
    short: "DS 1",
    desc: "Analyse complète des devoirs SVT — Copies modèles et corrections pour le Devoir de Synthèse 1.",
    color: "teal",
    icon: "fa-file-lines",
    docs: [
      { id:"ds1-1",  name:"Devoir de Synthèse n°1 - 1",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1t0Fg7h1bTTmx2vj8iW-cRBab5wauHE8P/preview" },
      { id:"ds1-c1", name:"Correction n°1 - 1",           type:"correction", pages:1, url:"https://drive.google.com/file/d/15r6etwFagbEtFvwhFZppCEaV2-vKasPO/preview" },
      { id:"ds1-2",  name:"Devoir de Synthèse n°1 - 2",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1ZpEUvFYNJ8O-afCEv21Lt9CRtyIjaiKJ/preview" },
      { id:"ds1-c2", name:"Correction n°1 - 2",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1BqrO14cebgI5cpxkjsLYAugEOtoEfnNK/preview" },
      { id:"ds1-3",  name:"Devoir de Synthèse n°1 - 3",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1hMZjtQ0crvaGS7LVueIT1HsspGq46QPD/preview" },
      { id:"ds1-c3", name:"Correction n°1 - 3",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1J_OF8qoq4PdT4rmH5tuIQDJDn4wepJzj/preview" },
      { id:"ds1-4",  name:"Devoir de Synthèse n°1 - 4",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1m0XzvDWEuFFq2BVcfVpZKUBN6AqlypoF/preview" },
      { id:"ds1-c4", name:"Correction n°1 - 4",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1cRv8K5Fq_pRXh7ijeOMc_Pwt45CWJN-G/preview" },
      { id:"ds1-5",  name:"Devoir de Synthèse n°1 - 5",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1MoVImSn3gvRsFAvtEs_bDW1-ald3ATEx/preview" },
      { id:"ds1-c5", name:"Correction n°1 - 5",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1fATQ8WHKwNUw6IHw8k8MxoObGIP3NEaK/preview" },
      { id:"ds1-6",  name:"Devoir de Synthèse n°1 - 6",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1iRAZ4lmOS70JryDX9VIwejfgpe5oGuVP/preview" },
      { id:"ds1-c6", name:"Correction n°1 - 6",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1TJniXtIfLfe5RjtUn1B9PeJjWYn1WwqQ/preview" },
      { id:"ds1-7",  name:"Devoir de Synthèse n°1 - 7",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1JCUspvbQTTZiZQvuId_gAk6fsL7HjIvx/preview" },
      { id:"ds1-c7", name:"Correction n°1 - 7",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1gcT9sKOnNs-5MCAHHYxfGpsY4Wu-5qjJ/preview" }
    ]
  },
  {
    id: "ds2",
    name: "Devoir Synthèse 2",
    short: "DS 2",
    desc: "Tous les devoirs de synthèse 2 avec corrections complètes et explications détaillées pour le Bac SVT.",
    color: "orange",
    icon: "fa-file-contract",
    docs: [
      { id:"ds2-1",  name:"Devoir de Synthèse n°2 - 1",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1BppMoMAQusin8pBD8aZRlz21DLJyOkv_/preview" },
      { id:"ds2-c1", name:"Correction n°2 - 1",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1MgQY2IcxI-OVcFLEUeIYbLyqEb5PyTc3/preview" },
      { id:"ds2-2",  name:"Devoir de Synthèse n°2 - 2",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1ljEq_kYXoz_TFxtxGmAg3DDiv4bmpvB1/preview" },
      { id:"ds2-c2", name:"Correction n°2 - 2",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1KVwdGlXKGonSFx0FdD_CNhRcXeAWptug/preview" },
      { id:"ds2-3",  name:"Devoir de Synthèse n°2 - 3",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1g_ucSrhYrk7ty4s5XZraJhY0VMFncX3J/preview" },
      { id:"ds2-c3", name:"Correction n°2 - 3",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1DRvRB5PkupxlOd0fV-v4uYu-bb9dZIQb/preview" },
      { id:"ds2-4",  name:"Devoir de Synthèse n°2 - 4",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1hH9kCXULmB4t_tHhyvkXouU7sstAg6hr/preview" },
      { id:"ds2-c4", name:"Correction n°2 - 4",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1s881DCVLaMafNIYR7Y9gebcGlJHaheOi/preview" },
      { id:"ds2-5",  name:"Devoir de Synthèse n°2 - 5",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1jjOuGivmRo3oxYCq56QgKLUmGBJnulZw/preview" },
      { id:"ds2-c5", name:"Correction n°2 - 5",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1qFl_1auY2MgnzzDEWNQxnbuo1P4mnmHX/preview" },
      { id:"ds2-6",  name:"Devoir de Synthèse n°2 - 6",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/17jTtksChAQ3HTb-4iVTSkM3rfZo8fKJ8/preview" },
      { id:"ds2-c6", name:"Correction n°2 - 6",           type:"correction", pages:1, url:"https://drive.google.com/file/d/174EzYYUa3IhVhIpc7r1W0NaK822YE_ag/preview" }
    ]
  },
  {
    id: "ds3",
    name: "Devoir Synthèse 3",
    short: "DS 3",
    desc: "Analyse complète des devoirs SVT — Copies modèles et corrections pour le Devoir de Synthèse 3.",
    color: "red",
    icon: "fa-graduation-cap",
    docs: [
      { id:"ds3-1",  name:"Devoir de Synthèse n°3 - 1",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1Pcu_KJDtsCIxu4r-4el4P9LsygMe0cCV/preview" },
      { id:"ds3-c1", name:"Correction n°3 - 1",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1M0uy7SQAWv_qChiiie8Az9SynlUnYLFf/preview" },
      { id:"ds3-2",  name:"Devoir de Synthèse n°3 - 2",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1XRh_EKWpNjSdA13ei_H4K-4P9twCjZNs/preview" },
      { id:"ds3-c2", name:"Correction n°3 - 2",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1bW4QT1nxrqKDrYQhs9Ou57QuMJy6fY1l/preview" },
      { id:"ds3-3",  name:"Devoir de Synthèse n°3 - 3",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/11ci6vka0YS6FDM0C0S32xqgdP29wkPFQ/preview" },
      { id:"ds3-c3", name:"Correction n°3 - 3",           type:"correction", pages:1, url:"https://drive.google.com/file/d/13niJzN6AcdAZQMpNExjIzEbezBbQGCeY/preview" },
      { id:"ds3-4",  name:"Devoir de Synthèse n°3 - 4",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1MHTIiC9fGejsIyNV0aKOe-uYbQbcRtMc/preview" },
      { id:"ds3-c4", name:"Correction n°3 - 4",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1ukBKHXibt1vMvoBih8lQs5VuabOh7sF9/preview" },
      { id:"ds3-5",  name:"Devoir de Synthèse n°3 - 5",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1uIgdnRIUR6mrttLnRLBI0mr1oj211IV6/preview" },
      { id:"ds3-c5", name:"Correction n°3 - 5",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1E6K4uXlZ7WLdJtQG30GNEF4rNUG-JKas/preview" },
      { id:"ds3-6",  name:"Devoir de Synthèse n°3 - 6",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1bgGsiLGVqeZ_MowdSiwmxF3KOfwLn81I/preview" },
      { id:"ds3-c6", name:"Correction n°3 - 6",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1p_p2dl9W1uEh3gBcRe4NyoT7hVtGxjAg/preview" },
      { id:"ds3-7",  name:"Devoir de Synthèse n°3 - 7",  type:"devoir",     pages:1, url:"https://drive.google.com/file/d/1spZ83XEB2oBk4XQNNgXx-g2fCI9S5bE3/preview" },
      { id:"ds3-c7", name:"Correction n°3 - 7",           type:"correction", pages:1, url:"https://drive.google.com/file/d/1_7wzkJgJUKxXiaGPvFy0D4D3t0gY5sld/preview" }
    ]
  }
];

/* ══════════════════════════════════════════════════════
   ██  EXERCICES — RENDER
══════════════════════════════════════════════════════ */
/* current tab: 'cours' or 'exercices' */
let _exTab = 'cours';

function exSwitchTo(tab){
  _exTab = tab;
  document.getElementById('exSwitchCours').classList.toggle('active', tab==='cours');
  document.getElementById('exSwitchExercices').classList.toggle('active', tab==='exercices');
  renderExercices();
}

function renderExercices(){
  const grid = document.getElementById('exGrid');
  if(_exTab === 'cours'){
    const total = COURS_DATA.length;
    document.getElementById('exHeroTitle').innerHTML = 'Cours &amp; Résumés';
    document.getElementById('exHeroSub').textContent = 'Fiches de cours complètes pour maîtriser le programme';
    document.getElementById('exHeroLabel').innerHTML = '<i class="fa-solid fa-book-open"></i>&nbsp;BAC SVT · 2026';
    document.getElementById('exHeroChapCount').textContent = total + ' chapitres';
    document.getElementById('exTotalDocs').textContent = total + ' cours';
    document.getElementById('exSecLabel').innerHTML = '<i class="fa-solid fa-book-open"></i>&nbsp;Cours';
    document.getElementById('exSecCount').textContent = total;
    grid.innerHTML = COURS_DATA.map((c,i)=>`
      <div class="ex-card ${c.color}" onclick="exOpenCoursePdf('${c.id}')"
           style="animation:nodeIn .45s var(--ease) ${i*60}ms both">
        <div class="ex-card-icon"><i class="fa-solid ${c.icon}"></i></div>
        <div>
          <div class="ex-card-name">${c.name}</div>
          <div class="ex-card-sub">${c.short} · BAC SVT</div>
        </div>
        <div class="ex-card-count"><i class="fa-solid fa-book-open"></i>${c.lessons} leçons</div>
        <div class="ex-card-prog">
          <div class="ex-card-prog-track"><div class="ex-card-prog-fill" style="width:0%"></div></div>
          <div class="ex-card-prog-label">0% Complete</div>
        </div>
      </div>
    `).join('');
  } else {
    const total = EXERCICES_DATA.reduce((s,c)=>s+c.docs.length,0);
    document.getElementById('exHeroTitle').innerHTML = 'Exercices &amp; Modèles';
    document.getElementById('exHeroSub').textContent = 'Copies types, corrections et devoirs de synthèse';
    document.getElementById('exHeroLabel').innerHTML = '<i class="fa-solid fa-file-lines"></i>&nbsp;BAC SVT · 2026';
    document.getElementById('exHeroChapCount').textContent = EXERCICES_DATA.length + ' chapitres';
    document.getElementById('exTotalDocs').textContent = total + ' documents';
    document.getElementById('exSecLabel').innerHTML = '<i class="fa-solid fa-grid-2"></i>&nbsp;Chapitres';
    document.getElementById('exSecCount').textContent = EXERCICES_DATA.length;
    grid.innerHTML = EXERCICES_DATA.map((cat,i)=>`
      <div class="ex-card ${cat.color}" onclick="exOpenSheet('${cat.id}')"
           style="animation:nodeIn .45s var(--ease) ${i*60}ms both">
        <div class="ex-card-icon"><i class="fa-solid ${cat.icon}"></i></div>
        <div>
          <div class="ex-card-name">${cat.name}</div>
          <div class="ex-card-sub">${cat.short} · BAC SVT</div>
        </div>
        <div class="ex-card-count"><i class="fa-solid fa-file"></i>${cat.docs.length} docs</div>
        <div class="ex-card-prog">
          <div class="ex-card-prog-track"><div class="ex-card-prog-fill" style="width:0%"></div></div>
          <div class="ex-card-prog-label">0% consulté</div>
        </div>
      </div>
    `).join('');
  }
}

/* Open a cours PDF directly */
function exOpenCoursePdf(coursId){
  const c = COURS_DATA.find(x=>x.id===coursId);
  if(!c) return;
  document.getElementById('exPdfTitle').textContent = c.name;
  document.getElementById('exPdfPageInfo').textContent = c.lessons + ' leçons';
  document.getElementById('exPdfLoading').classList.remove('hide');
  document.getElementById('exPdfFrame').src = '';
  document.getElementById('exPdfOverlay').classList.add('open');
  setTimeout(()=>{ document.getElementById('exPdfFrame').src = c.url; }, 120);
  document.getElementById('exPdfExpandBtn').onclick = ()=>{
    window.open(c.url.replace('/preview',''), '_blank');
  };
}

/* ── Sheet open / close ── */
let _exCurrentCat = null;
function exOpenSheet(catId){
  const cat = EXERCICES_DATA.find(c=>c.id===catId);
  if(!cat) return;
  _exCurrentCat = cat;
  document.getElementById('exSheetTitle').textContent = cat.name;
  document.getElementById('exSheetDesc').textContent = cat.desc;
  const list = document.getElementById('exSheetList');
  list.innerHTML = cat.docs.map(doc=>`
    <div class="ex-sheet-item ${doc.type==='correction'?'correction':doc.type==='cours'?'cours':''}" onclick="exOpenPdf('${doc.id}')">
      <div class="ex-sheet-item-icon">
        <i class="fa-solid ${doc.type==='cours'?'fa-book-open':'fa-file-lines'}"></i>
      </div>
      <div class="ex-sheet-item-info">
        <div class="ex-sheet-item-name">${doc.name}</div>
        <div class="ex-sheet-item-meta">
          <i class="fa-regular fa-file-lines"></i>
          ${doc.pages} page${doc.pages>1?'s':''} &nbsp;·&nbsp;
          <i class="fa-solid fa-tag"></i>
          ${doc.type==='correction'?'Correction':doc.type==='cours'?'Cours PDF':'Devoir'}
        </div>
      </div>
      <i class="fa-solid fa-chevron-right ex-sheet-item-arrow"></i>
    </div>
  `).join('');
  document.getElementById('exModalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function exCloseSheet(e){
  if(e && e.target !== document.getElementById('exModalOverlay')) return;
  exCloseSheetForce();
}
function exCloseSheetForce(){
  document.getElementById('exModalOverlay').classList.remove('open');
  document.body.style.overflow='';
}

/* ── PDF open / close ── */
let _exCurrentPdfUrl = '';
function exOpenPdf(docId){
  const doc = _exCurrentCat?.docs.find(d=>d.id===docId);
  if(!doc) return;
  _exCurrentPdfUrl = doc.url;
  document.getElementById('exPdfTitle').textContent = doc.name;
  document.getElementById('exPdfPageInfo').textContent = 'Page 1 / '+doc.pages;
  document.getElementById('exPdfLoading').classList.remove('hide');
  document.getElementById('exPdfFrame').src = '';
  document.getElementById('exPdfOverlay').classList.add('open');
  // slight delay for animation then load iframe
  setTimeout(()=>{
    document.getElementById('exPdfFrame').src = doc.url;
  }, 120);
  // expand button opens in new tab
  document.getElementById('exPdfExpandBtn').onclick = ()=>{
    window.open(doc.url.replace('/preview',''), '_blank');
  };
}
function exClosePdf(){
  document.getElementById('exPdfOverlay').classList.remove('open');
  setTimeout(()=>{ document.getElementById('exPdfFrame').src = ''; }, 300);
}
function exPdfLoaded(){
  document.getElementById('exPdfLoading').classList.add('hide');
}
