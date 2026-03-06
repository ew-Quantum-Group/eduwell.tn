
/* ═══════════════════════════════════════════════════
   AUTHENTICATION CONFIG & FUNCTIONS
═══════════════════════════════════════════════════ */
const AUTH_CONFIG = {
    isLoggedInKey: 'eduwell_svt_isLoggedIn',
    usernameKey: 'eduwell_svt_username',
    lastActivityKey: 'eduwell_svt_lastActivity'
};

// Get current user info
function getCurrentUser() {
    return {
        username: localStorage.getItem(AUTH_CONFIG.usernameKey) || 'Student',
        email: localStorage.getItem(AUTH_CONFIG.usernameKey) || 'student@edu.com'
    };
}

// Update user activity timestamp
function updateUserActivity() {
    if (localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true') {
        localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
    }
}

// Logout function
function logout() {
    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
    localStorage.removeItem(AUTH_CONFIG.usernameKey);
    localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
    
    // Clear any activity tracking timers
    if (window.activityTimer) clearInterval(window.activityTimer);
    
    // Redirect to login page
    window.location.href = 'login.html';
}

// Initialize activity tracking
function initActivityTracking() {
    ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, updateUserActivity);
    });
    
    // Check session every minute
    window.activityTimer = setInterval(() => {
        const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        if (isLoggedIn) {
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
                if (minutesDiff >= 30) {
                    logout();
                }
            }
        }
    }, 60000);
}

// Update UI with user info
function updateUserUI() {
    const user = getCurrentUser();
    const username = user.username;
    const email = user.email;
    
    // Get initials for avatar
    const initials = username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 
                    username.substring(0, 2).toUpperCase();
    
    // Update sidebar
    document.getElementById('user-name').textContent = username;
    document.getElementById('user-email').textContent = email;
    document.getElementById('user-avatar').textContent = initials;
    
    // Update welcome banner
    document.getElementById('welcome-name').textContent = username;
    document.getElementById('welcome-email').textContent = email;
    document.getElementById('welcome-avatar').textContent = initials;
    
    // Update profile card
    document.getElementById('profile-name').textContent = username;
    document.getElementById('profile-email').textContent = email;
    document.getElementById('profile-avatar').textContent = initials;
    
    // Generate a simple student ID from username
    const studentId = 'SHL-' + username.substring(0, 3).toUpperCase() + '-' + 
                      Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    document.getElementById('profile-id').textContent = studentId;
}

/* ── DATA ── */
const apps = [
  { name:'SVT App',      desc:'Révise les SVT chaque jour  ',       color:'linear-gradient(135deg,#ff453a,#ff6b35)', tag:'SVT',    tagC:'#ff453a', url:'../svtapp/index.html',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
<path d="M8 2c6 4 6 16 0 20"/>
<path d="M16 2c-6 4-6 16 0 20"/>
<path d="M9 6h6"/>
<path d="M9 10h6"/>
<path d="M9 14h6"/>
<path d="M9 18h6"/>
</svg>` },
  { name:'SpeakWell',    desc:'Grammar, Writing, Tenses  ',    color:'linear-gradient(135deg,#7C3AED,#4338CA)', tag:'Langue', tagC:'#7C3AED', url:'../speakwell/index.html',
    icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
<rect x="4" y="3" width="16" height="18" rx="2"/>
<line x1="8" y1="8" x2="16" y2="8"/>
<line x1="8" y1="12" x2="16" y2="12"/>
<line x1="8" y1="16" x2="13" y2="16"/>
</svg>` },
  { name:'ChatPhilo',    desc:'Cours et exercices interactifs en philosophie',        color:'linear-gradient(135deg,#0891B2,#0066CC)', tag:'Bac',   tagC:'#0891B2', url:'../chatphi/index.html',
    icon:`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>` },
  { name:'Sahl Academy', desc:'votre bibliothèque vidéo pédagogique', color:'linear-gradient(135deg,#F57C00,#E53935)', tag:'Academy',  tagC:'#F57C00', url:'../sahlacademy/index.html',
    icon:`<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>` },
  { name:'E-Books',      desc:'Tout le contenu Bac en un seul endroit (12,000)',               color:'linear-gradient(135deg,#059669,#10b981)', tag:'DOC',  tagC:'#059669', url:'../sahl haven/index.html',
    icon:`<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>` },
  { name:'Sahl AI',      desc:'Votre assistant d’étude intelligent',         color:'linear-gradient(135deg,#4338CA,#0066CC)', tag:'AI',       tagC:'#4338CA', url:'../sahlai/index.html',
   icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
<circle cx="12" cy="8" r="3"/>
<circle cx="6" cy="14" r="2"/>
<circle cx="18" cy="14" r="2"/>
<circle cx="9" cy="18" r="2"/>
<circle cx="15" cy="18" r="2"/>
<line x1="12" y1="11" x2="6" y2="14"/>
<line x1="12" y1="11" x2="18" y2="14"/>
<line x1="6" y1="14" x2="9" y2="18"/>
<line x1="18" y1="14" x2="15" y2="18"/>
</svg>` },
];

const notifications = [

  { 
  title: 'Nouvelle vidéo ajoutée',
  desc: 'Cours avancé de Physique : Ondes mécaniques (12 min) ',
  time: '02/03',
  color: 'linear-gradient(135deg,#ff453a,#ff6b35)',
  unread: true,
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
  unread: true,
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
  unread: true,
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
  unread: true,
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
  title: 'Annonce de la plateforme',
  desc: 'Un nouveau quiz interactif vient d’être ajouté à l’application SVT pour vous aider à réviser efficacement.',
  time: '02/03',
  color: 'linear-gradient(135deg,#F57C00,#E53935)',
  unread: true,
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

const news = [
  { 
    title:'Sahl AI lance l’Assistant d’Étude Nouvelle Génération (4.0)',
    desc:'Préparez vos examens, résumez vos manuels et générez des quiz — tout cela grâce à la technologie IA avancée.',
    tag:'Mise à jour IA',
    tagC:'#0066CC',
    bg:'linear-gradient(140deg,#0052a3,#4338CA)',
    date:'4 mars 2026',
    featured:true,
    url:'../sahlai/index.html',
    icon:`<svg viewBox="0 0 24 24">
            <rect x="3" y="11" width="18" height="11" rx="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>` 
  },
  { 
    title:'Plateforme Sahl Academy',
    desc:'Découvrez la plateforme Sahl Academy et accédez à tous vos cours et contenus pédagogiques depuis un seul endroit.',
    tag:'Plateforme',
    tagC:'#059669',
    bg:'linear-gradient(140deg,#059669,#0891B2)',
    date:'1 mars 2026',
    featured:false,
    url:'../sahlacademy/index.html',
    icon:`<svg viewBox="0 0 24 24">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>` 
},
  { 
    title:'SVT App : Contenu Scientifique Mis à Jour',
    desc:'Toutes vos ressources SVT sont désormais regroupées, mises à jour et prêtes pour vos révisions quotidiennes.',
    tag:'Mise à jour',
    tagC:'#F57C00',
    bg:'linear-gradient(140deg,#F57C00,#E53935)',
    date:'27 février 2026',
    featured:false,
    url:'../svtapp/index.html',
    icon:`<svg viewBox="0 0 24 24">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2"/>
          </svg>` 
},
 { 
    title:'Bibliothèque E-Books mise à jour',
    desc:'Plus de 12 000 documents disponibles : devoirs Bac, projets pilotes, cours complets et fiches méthodiques pour vos révisions.',
    tag:'Bibliothèque',
    tagC:'#7C3AED',
    bg:'linear-gradient(140deg,#7C3AED,#4338CA)',
    date:'22 février 2026',
    featured:false,
    url:'../sahl haven/index.html',
    icon:`<svg viewBox="0 0 24 24">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>` 
},
];

const schedule = [
  { day:' March 9', items:[
    { 
      title: 'Physique : Ondes – Stroboscope',
      time: '09/03',
      meta: 'Sahl Academy',
      type: 'BAC',
      typeC: '#0066CC',
      bar: '#0066CC',
      url: '../sahlacademy/index.html'
    },
    { 
      title: 'Physique : Ondes à la surface de l’eau',
      time: '09/03',
      meta: 'Sahl Academy',
      type: 'BAC',
      typeC: '#059669',
      bar: '#059669',
      url: '../sahlacademy/index.html'
    }, { 
      title: 'Physique : Questions les plus fréquentes',
      time: '09/03',
      meta: 'Sahl Academy',
      type: 'BAC',
      typeC: '#4338CA',
      bar: '#4338CA',
      url: '../sahlacademy/index.html'
    },
  ]},
  { day:' March 12', items:[
     { 
      title: 'Grammaire : Exercices Tenses',
      time: '12/03',
      meta: 'Sahl Academy',
      type: 'BAC',
      typeC: '#0066CC',
      bar: '#0066CC',
      url: '../sahlacademy/index.html'
    },
    { 
      title: 'Writing : Techniques & Pratique',
      time: '12/03',
      meta: 'Sahl Academy',
      type: 'BAC',
      typeC: '#059669',
      bar: '#059669',
      url: '../sahlacademy/index.html'
    },
    { 
      title: 'Grammaire : Tenses Bac – Exemples',
      time: '12/03',
      meta: 'Sahl Academy',
     type: 'BAC',
      typeC: '#4338CA',
      bar: '#4338CA',
      url: '../sahlacademy/index.html'
    }]},
 
];

const courses = [
  { name:'SVT App',      pct:90, color:'#0066CC', url:'#' },
  { name:'E-Books', pct:53, color:'#059669', url:'#' },
  { name:'Chat-philo',       pct:64, color:'#7C3AED', url:'#' },
];



/* ── RENDER FUNCTIONS WITH LINKS ── */
function renderApps() {
  document.getElementById('apps-list').innerHTML = apps.map(a => `
    <div class="app-row clickable-card" data-url="${a.url}">
      <div class="app-ico" style="background:${a.color}">${a.icon}</div>
      <div class="app-info">
        <div class="app-name">${a.name}</div>
        <div class="app-desc">${a.desc}</div>
      </div>
      <div class="app-rr">
        <span class="app-tag" style="background:${a.tagC}18;color:${a.tagC}">${a.tag}</span>
        <div class="app-arr"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></div>
      </div>
      <a href="${a.url}" class="card-link" aria-label="${a.name}"></a>
    </div>`).join('');
}

let currentFilter = 'all';
function renderNotifications(filter) {
  filter = filter || currentFilter;
  const list = filter==='all' ? notifications
    : filter==='unread' ? notifications.filter(n=>n.unread)
    : notifications.filter(n=>n.cat===filter);
  document.getElementById('notif-list').innerHTML = list.map(n => `
    <div class="notif-r ${n.unread?'unread':''} clickable-card" data-url="${n.url}">
      <div class="notif-ico" style="background:${n.color}">${n.icon}</div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-desc">${n.desc}</div>
        <div class="notif-meta">
          <div class="notif-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${n.time}</div>
          <span class="notif-cat" style="background:${n.catC}18;color:${n.catC}">${n.catLbl}</span>
        </div>
      </div>
      ${n.unread?'<div class="u-pip"></div>':''}
      <a href="${n.url}" class="card-link" aria-label="Notification"></a>
    </div>`).join('') || '<div class="empty-state">No notifications found.</div>';
}

function filterNotifs(filter, el) {
  currentFilter = filter;
  document.querySelectorAll('.nf-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderNotifications(filter);
}

function renderNews() {
  document.getElementById('news-list').innerHTML = news.map((item,i) => `
    <div class="news-card clickable-card" data-url="${item.url}">
      <div class="news-vis ${i===0?'tall':'short'}" style="background:${item.bg}">
        ${item.featured?'<div class="news-feat-badge">✦ Featured</div>':''}
        <div class="news-vis-ico">${item.icon}</div>
      </div>
      <div class="news-body">
        <div class="news-tag" style="background:${item.tagC}18;color:${item.tagC}">${item.tag}</div>
        <div class="news-title">${item.title}</div>
        <div class="news-desc">${item.desc}</div>
        <div class="news-foot">
          <div class="news-date">${item.date}</div>
          <button class="read-btn" style="background:${item.tagC}" onclick="event.stopPropagation(); readMore('${item.title}'); window.location.href='${item.url}'; return false;">
            Read more<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
      <a href="${item.url}" class="card-link" aria-label="${item.title}"></a>
    </div>`).join('');
}

function renderSchedule() {
  document.getElementById('schedule-list').innerHTML = schedule.map(day => `
    <div class="sched-day">
      <div class="sched-day-lbl">${day.day}</div>
      <div class="sched-items">
        ${day.items.map(item => `
          <div class="sched-item clickable-card" data-url="${item.url}">
            <div class="sched-bar" style="background:${item.bar}"></div>
            <div class="sched-body">
              <div class="sched-time"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${item.time}</div>
              <div class="sched-title">${item.title}</div>
              <div class="sched-meta">${item.meta}</div>
            </div>
            <div class="sched-right"><span class="sched-type" style="background:${item.typeC}18;color:${item.typeC}">${item.type}</span></div>
            <a href="${item.url}" class="card-link" aria-label="${item.title}"></a>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

function renderProgress() {
  document.getElementById('prog-list').innerHTML = courses.map(c => `
    <div class="prog-item clickable-card" data-url="${c.url}">
      <div class="prog-row"><div class="prog-name">${c.name}</div><div class="prog-pct">${c.pct}%</div></div>
      <div class="prog-bar"><div class="prog-fill" style="background:${c.color}" data-pct="${c.pct}"></div></div>
      <a href="${c.url}" class="card-link" aria-label="${c.name}"></a>
    </div>`).join('');
  requestAnimationFrame(() => setTimeout(() => {
    document.querySelectorAll('.prog-fill').forEach(el => { el.style.width = el.dataset.pct + '%'; });
  }, 120));
}

function renderCalendar() {
  const year=2026, month=2, today=6;
  const eventDays=[8,11,14];
  document.getElementById('cal-month').textContent='March';
  document.getElementById('cal-year').textContent='2026';
  document.getElementById('cal-head').innerHTML=['S','M','T','W','T','F','S'].map(d=>`<div class="cal-dlbl">${d}</div>`).join('');
  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const daysInPrev=new Date(year,month,0).getDate();
  let cells='';
  for(let i=firstDay-1;i>=0;i--) cells+=`<div class="cal-day other past">${daysInPrev-i}</div>`;
  for(let d=1;d<=daysInMonth;d++){
    const iT=d===today, isE=eventDays.includes(d)&&!iT, isP=d<today&&!iT;
    cells+=`<div class="cal-day clickable-card ${iT?' today':''}${isE?' has-ev':''}${isP?' past':''}" data-url="/calendar/day/${d}">${d}<a href="/calendar/day/${d}" class="card-link" aria-label="Day ${d}"></a></div>`;
  }
  const rem=42-(firstDay+daysInMonth);
  for(let d=1;d<=rem;d++) cells+=`<div class="cal-day other">${d}</div>`;
  document.getElementById('cal-days').innerHTML=cells;
  document.getElementById('cal-evs').innerHTML=calEvents.map(ev=>`
    <div class="cal-ev clickable-card" data-url="${ev.url}">
      <div class="cal-ev-bar" style="background:${ev.color}"></div>
      <div><div class="cal-ev-title">${ev.title}</div><div class="cal-ev-time">${ev.time}</div></div>
      <a href="${ev.url}" class="card-link" aria-label="${ev.title}"></a>
    </div>`).join('');
}

/* ── SWITCH PAGE ── */
const pageMeta = {
  home:          ['Tableau de bord', ''],
  notifications: ['Notifications', '3 mises à jour non lues'],
  explore:       ['Explorer', 'Actualités & mises à jour'],
  schedule:      ['Planning', 'Votre semaine à venir'],
};

function switchPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('[data-page]').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll(`[data-page="${id}"]`).forEach(b => b.classList.add('active'));

  const [title, sub] = pageMeta[id] || [id,''];
  const ttEl = document.getElementById('topbar-title');
  const subEl = document.getElementById('topbar-sub');
  if (ttEl) ttEl.textContent = title;
  if (subEl) subEl.textContent = sub;

  if (id === 'notifications') {
    ['sb-badge','tb-pip','mob-pip','mob-nav-dot'].forEach(did => {
      const el = document.getElementById(did); if (el) el.style.display = 'none';
    });
  }
  window.scrollTo({ top:0, behavior:'smooth' });
  
  // Update activity on page switch
  updateUserActivity();
}

/* ── DARK MODE ── */
let dark = false;
function toggleDark() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  const sunPath = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  const moonPath = `<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`;
  const ico = dark ? sunPath : moonPath;
  ['sb-theme-ico','tb-theme-ico','mob-theme-ico'].forEach(id => {
    const el = document.getElementById(id); if (el) el.innerHTML = ico;
  });
  const lbl = document.getElementById('sb-theme-lbl');
  if (lbl) lbl.textContent = dark ? 'Light Mode' : 'Dark Mode';
  toast(dark ? 'Dark mode on 🌙' : 'Light mode on ☀️');
  updateUserActivity();
}

/* ── TOAST ── */
let toastTmr;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTmr);
  toastTmr = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ── GREETING ── */
function setGreeting() {
  const h = new Date().getHours();
  const g = h<12 ? 'Good morning' : h<17 ? 'Good afternoon' : 'Good evening';
  const e = h<12 ? '☀️' : h<17 ? '👋' : '🌙';
  const wb = document.getElementById('wb-greet'); if (wb) wb.textContent = g;
  const ts = document.getElementById('topbar-sub'); if (ts) ts.textContent = `${g}, ${getCurrentUser().username} ${e}`;
}

/* ── SEARCH ── */
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById('search-inp');
  if (inp) inp.addEventListener('keydown', e => {
    if (e.key==='Enter' && inp.value.trim()) { 
      toast(`Searching "${inp.value.trim()}"…`); 
      inp.value=''; 
      updateUserActivity();
    }
  });
});

/* ── HELPERS ── */
function openApp(name) { 
  const app = apps.find(a => a.name === name);
  if (app && app.url) {
    window.location.href = app.url;
  } else {
    toast(`Launching ${name}…`);
  }
  updateUserActivity();
}
function readMore(title) { 
  toast('Opening article…'); 
  updateUserActivity();
}

// Handle click on clickable cards
document.addEventListener('click', function(e) {
  const card = e.target.closest('.clickable-card');
  if (card && !e.target.closest('a') && !e.target.closest('button')) {
    const url = card.getAttribute('data-url');
    if (url && url !== '#') {
      e.preventDefault();
      window.location.href = url;
    }
  }
});

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function() {
    // Update user activity on load
    updateUserActivity();
    
    // Initialize activity tracking
    initActivityTracking();
    
    // Update UI with user info
    updateUserUI();
    
    // Render all components
    renderApps();
    renderNotifications();
    renderNews();
    renderSchedule();
    renderProgress();
    renderCalendar();
    setGreeting();
    
    // Check for redirect after login
    const redirectUrl = sessionStorage.getItem('eduwell_redirect_url');
    if (redirectUrl && redirectUrl !== window.location.href) {
        sessionStorage.removeItem('eduwell_redirect_url');
        // Could redirect if needed
    }
});

// Handle page show event (for back/forward cache)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page was restored from cache, re-check authentication
        const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        if (!isLoggedIn) {
            window.location.href = 'login.html';
        } else {
            updateUserUI();
            setGreeting();
            updateUserActivity();
        }
    }
});

// Disable right-click and save shortcuts (optional)
document.addEventListener('contextmenu', function(e) { e.preventDefault(); return false; });
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 's') || 
        (e.ctrlKey && e.shiftKey && e.key === 'S') || 
        (e.ctrlKey && e.key === 'p') ||
        e.key === 'F12') {
        e.preventDefault();
        return false;
    }
});