
/* Reading progress */
const rp = document.getElementById('rp');
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  rp.style.transform = `scaleX(${d.scrollTop / (d.scrollHeight - d.clientHeight)})`;
});

/* i18n */
const translations = {
  ar: {
    nav_home:'الرئيسية',nav_subjects:'المواد',nav_philo:'الفلسفة',nav_lessons:'الدروس',nav_about:'عن المنصة',
    login:'تسجيل الدخول',start:'ابدأ مجاناً',badge_live:'مباشر',
    badge_sub:'منصة تعليمية تونسية · sahllearn.org',hero_prefix:'تعلّم بشكل',
    hero_p:'شروح مُبسّطة ومُعمّقة في الفلسفة والعلوم مع أفضل الأساتذة التونسيين.<br>كل ما تحتاجه لنجاح البكالوريا في مكان واحد.',
    cta_start:'ابدأ مجاناً الآن',cta_explore:'استكشف الدروس',
    stat_lessons:'درس منشور',stat_subjects:'مادة دراسية',stat_students:'طالب مستفيد',stat_rating:'تقييم الطلاب',
    search_label:'البحث الذكي',search_title:'ابحث عن أي',search_title_em:'درس أو موضوع',
    search_placeholder:'ابحث عن درس، موضوع، أستاذ...',search_btn:'بحث',search_quick:'بحث سريع:',
    scroll_eyebrow:'تطبيقات سهل',scroll_h2:'تصفّح عبر',scroll_h2_em:'أفضل تطبيقات سهل',view_all:'عرض الكل',
    posts_eyebrow_philo:'دروس الفلسفة',posts_h2_philo:'استكشف دروس',posts_h2_em_philo:'الفلسفة',all_philo:'جميع دروس الفلسفة',
    posts_eyebrow_svt:'دروس العلوم',posts_h2_svt:'استكشف دروس',posts_h2_em_svt:'العلوم الطبيعية',all_svt:'جميع دروس العلوم',
    footer_copy:'جميع الحقوق محفوظة © 2026',footer_privacy:'سياسة الخصوصية',footer_terms:'الشروط والأحكام',footer_contact:'تواصل معنا',
  },
  fr: {
    nav_home:'Accueil',nav_subjects:'Matières',nav_philo:'Philosophie',nav_lessons:'Cours',nav_about:'À propos',
    login:'Se connecter',start:'Commencer',badge_live:'En direct',
    badge_sub:'Plateforme éducative tunisienne · sahllearn.org',hero_prefix:'Apprendre de façon',
    hero_p:'Des explications claires et approfondies en philosophie et sciences avec les meilleurs professeurs tunisiens.<br>Tout ce qu\'il vous faut pour réussir le baccalauréat.',
    cta_start:'Commencer gratuitement',cta_explore:'Explorer les cours',
    stat_lessons:'cours publiés',stat_subjects:'matières',stat_students:'élèves bénéficiaires',stat_rating:'note des élèves',
    search_label:'Recherche intelligente',search_title:'Rechercher un',search_title_em:'cours ou un sujet',
    search_placeholder:'Rechercher un cours, sujet, professeur...',search_btn:'Rechercher',search_quick:'Recherche rapide :',
    scroll_eyebrow:'Applications Sahl',scroll_h2:'Parcourir via',scroll_h2_em:'les meilleures apps',view_all:'Tout voir',
    posts_eyebrow_philo:'Cours de Philosophie',posts_h2_philo:'Explorer les cours de',posts_h2_em_philo:'Philosophie',all_philo:'Tous les cours de philo',
    posts_eyebrow_svt:'Cours de Sciences',posts_h2_svt:'Explorer les cours de',posts_h2_em_svt:'Sciences naturelles',all_svt:'Tous les cours de SVT',
    footer_copy:'Tous droits réservés © 2026',footer_privacy:'Politique de confidentialité',footer_terms:"Conditions d'utilisation",footer_contact:'Nous contacter',
  }
};

const heroTextsLang = {
  ar: ['أذكى وأسرع','أعمق وأوضح','بثقة ونجاح','مع أفضل الأساتذة','نحو البكالوريا'],
  fr: ['plus intelligente','plus efficace','avec confiance','avec les meilleurs','vers le bac'],
};

let currentLang = 'ar';

function syncLangButtons(lang) {
  ['langAr','langFr','langArMob','langFrMob'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const isAr = id.includes('Ar');
    el.classList.toggle('active', (lang === 'ar') === isAr);
  });
}

function applyLang(lang) {
  const t = translations[lang];
  const isAr = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
  heroIdx = 0;
  heroEl.textContent = heroTextsLang[lang][0];
  syncLangButtons(lang);
  currentLang = lang;
}

document.getElementById('langAr').addEventListener('click',    () => { if(currentLang!=='ar') applyLang('ar'); });
document.getElementById('langFr').addEventListener('click',    () => { if(currentLang!=='fr') applyLang('fr'); });
document.getElementById('langArMob').addEventListener('click', () => { if(currentLang!=='ar') applyLang('ar'); });
document.getElementById('langFrMob').addEventListener('click', () => { if(currentLang!=='fr') applyLang('fr'); });

/* Hamburger */
const ham = document.getElementById('ham');
const mob = document.getElementById('mobDrawer');
const ovl = document.getElementById('mobOverlay');
const tog = o => { ham.classList.toggle('open',o); mob.classList.toggle('on',o); ovl.classList.toggle('on',o); document.body.style.overflow = o?'hidden':''; };
ham.addEventListener('click', () => tog(!mob.classList.contains('on')));
ovl.addEventListener('click', () => tog(false));
mob.querySelectorAll('a').forEach(l => l.addEventListener('click', () => tog(false)));

/* Apps track arrows */
const trk = document.getElementById('track');
document.getElementById('tLeft').addEventListener('click',  () => trk.scrollBy({left: -270, behavior:'smooth'}));
document.getElementById('tRight').addEventListener('click', () => trk.scrollBy({left:  270, behavior:'smooth'}));

/* Philo track arrows */
const philoTrk = document.getElementById('philoTrack');
document.getElementById('philoLeft').addEventListener('click',  () => philoTrk.scrollBy({left: -290, behavior:'smooth'}));
document.getElementById('philoRight').addEventListener('click', () => philoTrk.scrollBy({left:  290, behavior:'smooth'}));

/* SVT track arrows */
const svtTrk = document.getElementById('svtTrack');
document.getElementById('svtLeft').addEventListener('click',  () => svtTrk.scrollBy({left: -290, behavior:'smooth'}));
document.getElementById('svtRight').addEventListener('click', () => svtTrk.scrollBy({left:  290, behavior:'smooth'}));

/* Bookmark */
function doBm(btn, e) {
  e.preventDefault(); e.stopPropagation();
  btn.classList.toggle('bm');
  btn.querySelector('i').className = btn.classList.contains('bm') ? 'fas fa-bookmark' : 'far fa-bookmark';
  btn.style.transform = 'scale(1.35)';
  setTimeout(() => btn.style.transform = '', 300);
}

/* Search */
const searchBar     = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');

function getCardsData() {
  return [...document.querySelectorAll('.psc')].map(card => ({
    el: card,
    text: card.innerText.toLowerCase()
  }));
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

function buildDropdown(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.remove('show'); return; }
  const matches = getCardsData().filter(({ text }) => q.split(/\s+/).every(w => text.includes(w)));
  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="sr-empty"><i class="fas fa-search-minus"></i>لا توجد نتائج لـ "${q}"</div>`;
  } else {
    searchResults.innerHTML =
      `<div class="sr-count">وجدنا ${matches.length} نتيجة</div>` +
      matches.slice(0, 7).map(({ el }) => {
        const titleEl = el.querySelector('.psc-title');
        const title   = titleEl ? titleEl.innerText.trim() : '';
        const catEl   = el.querySelector('.psc-tag');
        const cat     = catEl ? catEl.innerText.trim() : '';
        const authEl  = el.querySelector('.psc-aname');
        const auth    = authEl ? authEl.innerText.trim() : '';
        const statEl  = el.querySelector('.psc-stat');
        const dur     = statEl ? statEl.innerText.trim() : '';
        const isPhilo = el.dataset.cat === 'f';
        const bg      = isPhilo ? 'g1' : 'g2';
        const icon    = isPhilo ? 'fa-brain' : 'fa-atom';
        return `
          <a class="sr-item" href="${el.href || '#'}">
            <div class="sr-ico ${bg}"><i class="fas ${icon}"></i></div>
            <div class="sr-info">
              <div class="sr-title">${highlight(title, q)}</div>
              <div class="sr-meta">${auth}${dur ? ' · ' + dur : ''}</div>
            </div>
            <span style="font-size:10px;padding:2px 8px;border-radius:99px;border:1px solid var(--border);color:var(--text-3)">${cat}</span>
            <i class="fas fa-arrow-left sr-arrow"></i>
          </a>`;
      }).join('');
  }
  searchResults.classList.add('show');
}

function filterCards(q) {
  q = q.trim().toLowerCase();
  const allCards = [...document.querySelectorAll('.psc')];
  if (!q) { allCards.forEach(c => c.classList.remove('search-hidden')); return; }
  allCards.forEach(card => {
    const matches = q.split(/\s+/).every(w => card.innerText.toLowerCase().includes(w));
    card.classList.toggle('search-hidden', !matches);
  });
}

searchBar.addEventListener('input', e => { buildDropdown(e.target.value); filterCards(e.target.value); });
document.getElementById('searchBtn').addEventListener('click', () => {
  filterCards(searchBar.value);
  searchResults.classList.remove('show');
  document.getElementById('philo-section').scrollIntoView({ behavior: 'smooth' });
});
searchBar.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    filterCards(searchBar.value);
    searchResults.classList.remove('show');
    document.getElementById('philo-section').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.key === 'Escape') { searchResults.classList.remove('show'); filterCards(''); searchBar.value = ''; }
});
document.addEventListener('click', e => { if (!e.target.closest('.search-bar-wrap')) searchResults.classList.remove('show'); });
searchBar.addEventListener('focus', () => { if (searchBar.value.trim()) buildDropdown(searchBar.value); });

document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    searchBar.value = c.dataset.q;
    searchBar.focus();
    buildDropdown(c.dataset.q);
    filterCards(c.dataset.q);
  });
});

/* Scroll reveal */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      const siblings = [...en.target.parentElement.querySelectorAll('.rv')];
      setTimeout(() => en.target.classList.add('visible'), siblings.indexOf(en.target) * 60);
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.rv').forEach(el => io.observe(el));

/* Hero text cycling */
let heroIdx = 0;
const heroEl = document.getElementById('heroAnimText');
setInterval(() => {
  heroEl.classList.remove('enter-down');
  heroEl.classList.add('exit-up');
  setTimeout(() => {
    heroIdx = (heroIdx + 1) % heroTextsLang[currentLang].length;
    heroEl.textContent = heroTextsLang[currentLang][heroIdx];
    heroEl.classList.remove('exit-up');
    void heroEl.offsetWidth;
    heroEl.classList.add('enter-down');
  }, 400);
}, 5000);

/* Page loader */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('page-loader').classList.add('done');
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');
  }, 1700);
});

/* Ripple */
document.querySelectorAll('.ripple-host').forEach(el => {
  el.addEventListener('click', function(e) {
    const r = document.createElement('span');
    r.className = 'ripple';
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    this.appendChild(r);
    r.addEventListener('animationend', () => r.remove());
  });
});
