(function(){
  const h=new Date().getHours();
  const greet=h<12?'Bonjour,':h<18?'Bon après-midi,':'Bonsoir,';
  const el=document.getElementById('banner-greeting');
  if(el) el.innerHTML=greet+'<br><span>Alex.</span>';
})();

setTimeout(()=>{ const f=document.getElementById('progress-fill'); if(f) f.style.width='72%'; },600);

const notifications = [


 
{ 
  title: 'Nouveau document d’étude',
  desc: 'Pack de révision – Pression intérieure : 86 exercices avec correction',
  time: '23/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: true,
  cat: 'platform',
  catLbl: 'SVT',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1-oBs4iU3M6tIc0TVS-79-xUuGYFUf6uM?usp=drive_link',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
}, 

{ 
  title: 'Nouveau document d’étude',
  desc: 'تمارين فلسفية مع الإصلاح',
  time: '22/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: true,
  cat: 'platform',
  catLbl: 'PHILO',
  catC: '#059669',
  url: 'https://drive.google.com/drive/u/1/folders/14H1J7gFpinJmWHbDoI9VG9R_lID4SVPA',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
{ 
  title: 'Nouveau document d’étude',
  desc: 'مراجعة مكثفة في الفلسفة مع إصلاح مواضيع الباك',
  time: '22/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: true,
  cat: 'platform',
  catLbl: 'PHILO',
  catC: '#059669',
  url: 'https://drive.google.com/drive/u/1/folders/1C4GwaECN8eSsIR2owMuApMSAHI0ZiTB1',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
{ 
  title: 'Nouveau document d’étude',
  desc: 'Pack de révision BAC pratique 2026 : +40 sujets corrigés',
  time: '22/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: true,
  cat: 'platform',
  catLbl: 'INFO',
  catC: '#3a1bc5',
  url: 'https://drive.google.com/drive/u/1/folders/1tFALZ8OWMILwE5e5SedBtlsfBkscttUg',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},





{ 
  title: 'Nouveau document d’étude',
  desc: 'Pack de Révision Générale.',
  time: '18/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'MATH',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1rYIugQXxBXtZ_MCm9fGPBAA_7Sk1eXQT',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},

{ 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Grammar Correction – Tenses (BAC 2017) (4 min) ',
  time: '18/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: false,
  cat: 'academic',
  catLbl: 'English',
  catC: '#ff453a',
  url: '../sahlacademy/index.html',
  icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` 
},
{ 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Grammar Correction – Tenses (BAC 2016) (3:34 min) ',
  time: '17/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: false,
  cat: 'academic',
  catLbl: 'English',
  catC: '#ff453a',
  url: '../sahlacademy/index.html',
  icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` 
},
  { 
  title: 'Nouveau document d’étude',
  desc: 'Suites – Cours & Exercices Corrigés.',
  time: '16/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'MATH',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1zjkf2HmaPGxcJ8PnxwBHS5NmapdBIeEq',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
 { 
  title: 'Nouveau document d’étude',
  desc: 'Logarithmes – Cours & Exercices Corrigés.',
  time: '16/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'MATH',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1F-3GHGYdI-tGbGk6jZ6FCoEGGwbAbLU4',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
  { 
  title: 'Nouveau document d’étude',
  desc: 'Pack Révision : Intégrales + Exercices Corrigés.',
  time: '16/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'MATH',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1h1QEgI2vPDvhdj9hkbsoMK9YSVzmywDA',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
{ 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Grammar Correction – Tenses (BAC 2018) (12 min) ',
  time: '17/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: false,
  cat: 'academic',
  catLbl: 'English',
  catC: '#ff453a',
  url: '../sahlacademy/index.html',
  icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` 
},
{ 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Grammar Correction – Tenses (BAC 2019) (12 min) ',
  time: '17/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: false,
  cat: 'academic',
  catLbl: 'English',
  catC: '#ff453a',
  url: '../sahlacademy/index.html',
  icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` 
},
{ 
  title: 'Nouveau document d’étude',
  desc: 'Révision de la Fonction Exponentielle (Pack Corrigé).',
  time: '16/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'MATH',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1QJUkDidijJXo9MG1eASMlBGwyD_OV-6I',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},

  { 
  title: 'Nouveau document d’étude',
  desc: 'Pack de Révision Complexe & Analyse.',
  time: '16/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'MATH',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/120uEIK4VflsWTLJ9rLcYiIFPGhkEDEDT',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},

  { 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Cours avancé de Physique : Ondes mécaniques (12 min) ',
  time: '02/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: false,
  cat: 'academic',
  catLbl: 'Physique',
  catC: '#ff453a',
  url: '../sahlacademy/index.html',
  icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` 
},
  
{ 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Cours avancé de Physique : Ondes mécaniques – Équation horaire (9 min) ',
  time: '02/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: false,
  cat: 'academic',
  catLbl: 'Physique',
  catC: '#4a90e2',
  url: '../sahlacademy/index.html',
   icon: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><polygon points="10 8 16 12 10 16 10 8"/></svg>` 
},

{ 
  title: 'Nouveau document d’étude',
  desc: 'Le chapitre complet de révision en Informatique est désormais disponible dans votre bibliothèque E-Books.',
  time: '02/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'INFO',
  catC: '#059669',
  url: '../sahl haven/index.html',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},

{ 
  title: 'Nouveau document d’étude',
  desc: '25 Sujet de révision pratique pour le Bac.',
  time: '06/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'INFO',
  catC: '#059669',
  url: '../sahl haven/index.html',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
{ 
  title: 'Nouveau document d’étude',
  desc: 'Revision Sciences Complètes (Exercices + Corrections) – Bac 2026.',
  time: '05/03',
  color: 'linear-gradient(135deg,#059669,#10b981)',
  unread: false,
  cat: 'platform',
  catLbl: 'SVT',
  catC: '#059669',
  url: 'https://drive.google.com/drive/folders/1fOE-ddqEuG1eAKuWa7nN-LvnhCnj-Pei',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
           <polyline points="14 2 14 8 20 8"/>
           <line x1="16" y1="13" x2="8" y2="13"/>
           <line x1="16" y1="17" x2="8" y2="17"/>
         </svg>` 
},
 
   { 
  title: 'Annonce de la plateforme',
  desc: 'Un nouveau quiz interactif vient d’être ajouté à l’application SVT pour vous aider à réviser efficacement.',
  time: '02/03',
  color: 'linear-gradient(135deg,#F57C00,#E53935)',
  unread: false,
  cat: 'unread',
  catLbl: 'SVT',
  catC: '#F57C00',
  url: '../svtapp/index.html',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M22 17H2a3 3 0 003-3V9a7 7 0 0114 0v5a3 3 0 003 3z"/>
           <path d="M13.73 21a2 2 0 01-3.46 0"/>
         </svg>` 
},
  
   { 
  title: 'SpeakWell mis à jour',
  desc: 'Un nouveau test interactif vient d’être ajouté à votre bibliothèque SpeakWell pour améliorer vos compétences.',
  time: '27/02',
  color: 'linear-gradient(135deg,#7C3AED,#4338CA)',
  unread: false,
  cat: 'all',
  catLbl: 'Plateforme',
  catC: '#7C3AED',
  url: '../speakwell/index.html',
  icon: `<svg viewBox="0 0 24 24">
           <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
           <path d="M19 10v2a7 7 0 01-14 0v-2"/>
         </svg>` 
},

{ 
  title: 'Sahl AI Model mis à jour',
  desc: 'Un modèle d’intelligence artificielle plus puissant vient d’être ajouté pour améliorer vos révisions et performances.',
  time: '28/02',
  color: 'linear-gradient(135deg,#0891B2,#0066CC)',
  unread: false,
  cat: 'all',
  catLbl: 'Académique',
  catC: '#0891B2',
  url: '../sahlai/index.html',
  icon: `<svg viewBox="0 0 24 24">
           <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
         </svg>` 
}
];

function renderNotifications(){
  const list=document.getElementById('notif-list');
  const uc=notifications.filter(n=>n.unread).length;
  document.getElementById('unread-lbl').textContent=uc+' Non lus';
  const sb=document.getElementById('sb-badge');
  const bb=document.getElementById('bnav-badge');
  const td=document.getElementById('tb-dot');
  if(sb){sb.textContent=uc;sb.style.display=uc?'':'none';}
  if(bb){bb.textContent=uc;bb.style.display=uc?'':'none';}
  if(td) td.style.display=uc?'':'none';
  list.innerHTML=notifications.map((n,i)=>`
    <a class="notif-item${n.unread?' unread':''}" href="${n.url}" target="${n.url!=='#'?'_blank':'_self'}" rel="noopener noreferrer" data-idx="${i}">
      <div class="n-ico" style="background:${n.color};">${n.icon}</div>
      <div class="n-body">
        <div class="n-title">${n.title}</div>
        <div class="n-desc">${n.desc}</div>
        <div class="n-cat-badge" style="background:${n.catC}18;color:${n.catC};">${n.catLbl}</div>
      </div>
      <div class="n-right">
        <div class="n-time">${n.time}</div>
        ${n.unread?'<div class="n-dot"></div>':''}
      </div>
    </a>`).join('');
}
renderNotifications();

function markAllRead(){ notifications.forEach(n=>n.unread=false); renderNotifications(); }

/* ═══════════════════════════════════════════════════════════════
   UNIVERSAL DOC ICON
   One single icon used everywhere: search results, sheet header,
   and individual file rows. No id mapping. No conditions.
   Add any number of resources below — nothing else needs to change.
═══════════════════════════════════════════════════════════════ */
const DOC_ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';



/* ─── Navigation ─── */
const titles={home:'Accueil',search:'Recherche',notifications:'Notifications',features:'Outils'};
function navigate(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.getElementById('topbar-title').textContent=titles[page];
  document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
  const sl=document.querySelector('.nav-link[data-page="'+page+'"]');
  if(sl) sl.classList.add('active');
  document.querySelectorAll('.bnav-item').forEach(n=>n.classList.remove('active'));
  const bl=document.querySelector('.bnav-item[data-page="'+page+'"]');
  if(bl) bl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelector('.sidebar').addEventListener('click',e=>{
  const it=e.target.closest('.nav-link[data-page]');
  if(it) navigate(it.dataset.page);
});
document.getElementById('bnav').addEventListener('click',e=>{
  const it=e.target.closest('.bnav-item[data-page]');
  if(it) navigate(it.dataset.page);
});

/* ─── Search ─── */
function handleSearch(val){
  const q=val.toLowerCase().trim();
  const drop=document.getElementById('search-dropdown');
  const def=document.getElementById('search-default');
  if(!q){drop.innerHTML='';drop.classList.remove('show');def.style.display='';return;}
  def.style.display='none';
  const hits=resources.filter(r=>r.title.toLowerCase().includes(q)||r.description.toLowerCase().includes(q));
  if(!hits.length){
    drop.innerHTML=`<div class="no-results">No results for "<strong>${val}</strong>"</div>`;
    drop.classList.add('show');
    return;
  }
  drop.innerHTML=hits.map(r=>{
    const idx=resources.indexOf(r);
    return `<div class="drp-row" onclick="openSheet(${idx})">
      <div class="drp-ico bg-blue"><span class="c-blue">${DOC_ICO}</span></div>
      <div class="drp-info"><div class="drp-title">${r.title}</div><div class="drp-sub">${r.description}</div></div>
      <div class="drp-count">${r.files.length} files</div>
    </div>`;
  }).join('');
  drop.classList.add('show');
}

function searchCat(cat){
  const inp=document.getElementById('search-input');
  inp.value=cat;
  handleSearch(cat);
  inp.focus();
}

/* ─── Sheet ─── */
function openSheet(idx){
  const r=resources[idx]; if(!r) return;
  document.getElementById('sheet-title').textContent=r.title;
  document.getElementById('sheet-desc').textContent=r.description;
  const icoEl=document.getElementById('sheet-ico');
  icoEl.className='sheet-ico bg-blue';
  icoEl.innerHTML=`<span class="c-blue">${DOC_ICO}</span>`;
  document.getElementById('sheet-body').innerHTML=r.files.map(f=>`
    <a class="sheet-file" href="${f.url}" target="_blank" rel="noopener noreferrer">
      <div class="sf-ico">${DOC_ICO}</div>
      <div class="sf-name">${f.name}</div>
      <div class="sf-arr"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
    </a>`).join('');
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeSheet(){
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow='';
}

function handleOverlayClick(e){
  if(e.target===document.getElementById('overlay')) closeSheet();
}

document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeSheet(); });

/* ─── Features tabs ─── */
function setFeatTab(el,cat){
  document.querySelectorAll('.feat-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  const heroCard=document.querySelector('.feat-hero-card');
  const wideCard=document.querySelector('.feat-wide-card');
  const featCards=document.querySelectorAll('.feat-card2');
  if(cat==='all'){heroCard.style.display='';wideCard.style.display='';featCards.forEach(c=>c.style.display='');return;}
  heroCard.style.display=(cat==='new')?'':'none';
  wideCard.style.display=(cat==='new')?'':'none';
  featCards.forEach(c=>{c.style.display=(c.dataset.featTag===cat)?'':'none';});
}

/* ─── Sheet swipe to close ─── */
let ty0=0;
const sheet=document.getElementById('sheet');
sheet.addEventListener('touchstart',e=>{ty0=e.touches[0].clientY;},{passive:true});
sheet.addEventListener('touchmove',e=>{if(e.touches[0].clientY-ty0>72) closeSheet();},{passive:true});

/* ─── Drag-scroll for carousels ─── */
document.querySelectorAll('.hscroll, #videos-hscroll').forEach(el=>{
  let down=false,sx=0,sl=0;
  el.addEventListener('mousedown',e=>{down=true;sx=e.pageX-el.offsetLeft;sl=el.scrollLeft;el.style.cursor='grabbing';});
  el.addEventListener('mousemove',e=>{if(!down) return;e.preventDefault();el.scrollLeft=sl-(e.pageX-el.offsetLeft-sx);});
  ['mouseup','mouseleave'].forEach(ev=>el.addEventListener(ev,()=>{down=false;el.style.cursor='grab';}));
});

/* ─── Apps bleed margin ─── */
const appsHscroll=document.querySelector('.apps-hscroll');
function setAppsBleed(){
  if(window.innerWidth>768){
    appsHscroll.style.margin='0 -48px';
    appsHscroll.style.padding='4px 48px 16px';
  } else {
    appsHscroll.style.margin='0 -14px';
    appsHscroll.style.padding='4px 14px 16px';
  }
}
setAppsBleed();
window.addEventListener('resize',setAppsBleed);
