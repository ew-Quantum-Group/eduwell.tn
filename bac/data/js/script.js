
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
    posts_eyebrow:'أحدث الدروس',posts_h2:'ما الجديد على',posts_h2_em:'منصة سهل؟',all_lessons:'جميع الدروس',
    f_all:'الكل',f_philo:'فلسفة',f_math:'رياضيات',f_science:'علوم طبيعية',f_physics:'فيزياء',f_chem:'كيمياء',
    sb_trending:'الأكثر قراءةً',sb_topics:'تصفّح بالموضوع',sb_newsletter:'النشرة البريدية',
    nl_desc:'استقبل أحدث الدروس في بريدك مجاناً',nl_placeholder:'بريدك الإلكتروني',nl_btn:'اشترك الآن',
    cta_sb_t:'طوّر مستواك',cta_sb_s:'مئات الدروس مع أفضل الأساتذة التونسيين. ابدأ مجاناً.',
    views:'مشاهدة',load_more:'عرض المزيد',pill_science:'علوم',pill_state:'الدولة',pill_genetics:'الوراثة',pill_bac:'باكالوريا',
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
    posts_eyebrow:'Derniers cours',posts_h2:'Quoi de neuf sur',posts_h2_em:'Sahl ?',all_lessons:'Tous les cours',
    f_all:'Tout',f_philo:'Philosophie',f_math:'Mathématiques',f_science:'Sciences naturelles',f_physics:'Physique',f_chem:'Chimie',
    sb_trending:'Les plus lus',sb_topics:'Parcourir par thème',sb_newsletter:'Newsletter',
    nl_desc:'Recevez les derniers cours dans votre boîte mail gratuitement',nl_placeholder:'Votre adresse e-mail',nl_btn:"S'abonner",
    cta_sb_t:'Améliorez votre niveau',cta_sb_s:'Des centaines de cours avec les meilleurs professeurs tunisiens. Commencez gratuitement.',
    views:'vues',load_more:'Voir plus',pill_science:'Sciences',pill_state:'État',pill_genetics:'Génétique',pill_bac:'Baccalauréat',
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

/* Track arrows */
const trk = document.getElementById('track');
document.getElementById('tLeft').addEventListener('click',  () => trk.scrollBy({left: -270, behavior:'smooth'}));
document.getElementById('tRight').addEventListener('click', () => trk.scrollBy({left:  270, behavior:'smooth'}));

/* View toggle */
const gBtn = document.getElementById('gBtn');
const lBtn = document.getElementById('lBtn');
const pm   = document.getElementById('postsMain');
gBtn.addEventListener('click', () => { gBtn.classList.add('on'); lBtn.classList.remove('on'); pm.classList.remove('list'); });
lBtn.addEventListener('click', () => { lBtn.classList.add('on'); gBtn.classList.remove('on'); pm.classList.add('list'); });

/* Filter tabs */
document.querySelectorAll('.ftab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.ftab').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    const cards = document.querySelectorAll('.pc, .feat-card');
    cards.forEach(c => { c.style.transition='none'; c.style.opacity='0'; c.style.transform='translateY(12px)'; });
    requestAnimationFrame(() => {
      cards.forEach((c,i) => {
        c.style.transition = `opacity .4s ${i*40}ms var(--ease), transform .4s ${i*40}ms var(--ease)`;
        c.style.opacity='1'; c.style.transform='translateY(0)';
      });
    });
  });
});

/* Bookmark */
function doBm(btn, e) {
  e.preventDefault(); e.stopPropagation();
  btn.classList.toggle('bm');
  btn.querySelector('i').className = btn.classList.contains('bm') ? 'fas fa-bookmark' : 'far fa-bookmark';
  btn.style.transform = 'scale(1.35)';
  setTimeout(() => btn.style.transform = '', 300);
}

/* Load More */
const lb = document.getElementById('loadBtn');
const hiddenCards = document.querySelectorAll('.pc.hidden-card');
let revealed = false;
lb.addEventListener('click', () => {
  if (revealed) return;
  const loadingTxt = currentLang === 'fr' ? 'Chargement...' : 'جارٍ التحميل...';
  const doneTxt = currentLang === 'fr' ? 'Tous les cours affichés' : 'تم عرض جميع الدروس';
  lb.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${loadingTxt}`;
  lb.disabled = true;
  setTimeout(() => {
    hiddenCards.forEach((card, i) => { setTimeout(() => card.classList.add('revealed'), i * 80); });
    lb.innerHTML = `<i class="fas fa-check"></i> ${doneTxt}`;
    lb.style.color = 'var(--blue)';
    lb.style.borderColor = 'rgba(37,99,235,.3)';
    revealed = true;
  }, 1200);
});

/* ─────────────────────────────────────────────
   SEARCH — reads directly from the post cards
   ───────────────────────────────────────────── */
const searchBar     = document.getElementById('searchBar');
const searchResults = document.getElementById('searchResults');
const noResultsMsg  = document.getElementById('noResultsMsg');

// Extract searchable text straight from each .pc card's HTML
function getCardsData() {
  // Include both visible and hidden cards
  return [...document.querySelectorAll('.pc, .feat-card')].map(card => ({
    el: card,
    text: card.innerText.toLowerCase()   // all visible text in the card
  }));
}

function highlight(text, q) {
  if (!q) return text;
  const re = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
  return text.replace(re, '<mark>$1</mark>');
}

// Build dropdown results from card DOM
function buildDropdown(q) {
  q = q.trim().toLowerCase();
  if (!q) { searchResults.classList.remove('show'); return; }

  const matches = getCardsData().filter(({ text }) =>
    q.split(/\s+/).every(w => text.includes(w))
  );

  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="sr-empty"><i class="fas fa-search-minus"></i>لا توجد نتائج لـ "${q}"</div>`;
  } else {
    searchResults.innerHTML =
      `<div class="sr-count">وجدنا ${matches.length} نتيجة</div>` +
      matches.slice(0, 7).map(({ el }) => {
        // Pull title from .pc-title or .feat-title
        const titleEl = el.querySelector('.pc-title, .feat-title');
        const title   = titleEl ? titleEl.innerText.trim() : '';
        // Pull category from .pc-cat or .feat-badge
        const catEl   = el.querySelector('.pc-cat, .badge-cat');
        const cat     = catEl ? catEl.innerText.trim() : '';
        // Pull author from .pc-aname or .feat-aname
        const authEl  = el.querySelector('.pc-aname, .feat-aname');
        const auth    = authEl ? authEl.innerText.trim() : '';
        // Pull duration from .pc-stat, .feat-stat
        const statEls = el.querySelectorAll('.pc-stat, .feat-stat');
        const dur     = statEls[0] ? statEls[0].innerText.trim() : '';

        // Pick icon colour class from the category badge class list
        const catClass = catEl ? [...catEl.classList].find(c => c.startsWith('t-')) || '' : '';
        const bgMap    = {'t-blue':'g1','t-green':'g2','t-gold':'g3','t-purple':'g4','t-cyan':'g5','t-red':'g7'};
        const bg       = bgMap[catClass] || 'g6';
        const iconMap  = {'t-blue':'fa-brain','t-green':'fa-atom','t-gold':'fa-infinity','t-purple':'fa-flask','t-cyan':'fa-wave-square','t-red':'fa-atom'};
        const icon     = iconMap[catClass] || 'fa-book';

        return `
          <a class="sr-item" href="${el.href || '#'}" onclick="scrollToCard(event, '${el.dataset.searchId || ''}')">
            <div class="sr-ico ${bg}"><i class="fas ${icon}"></i></div>
            <div class="sr-info">
              <div class="sr-title">${highlight(title, q)}</div>
              <div class="sr-meta">${auth}${dur ? ' · ' + dur : ''}</div>
            </div>
            <span class="sr-tag ${catClass || 'g6'}" style="background:none;color:var(--text-3);border:1px solid var(--border);font-size:10px;padding:2px 8px;border-radius:99px;">${cat}</span>
            <i class="fas fa-arrow-left sr-arrow"></i>
          </a>`;
      }).join('');
  }
  searchResults.classList.add('show');
}

// Filter the actual post cards in the section
function filterCards(q) {
  q = q.trim().toLowerCase();
  const noMsg   = document.getElementById('noResultsMsg');
  const allCards = [...document.querySelectorAll('.pc, .feat-card')];

  if (!q) {
    // Reset: show all normally-visible cards
    allCards.forEach(c => c.classList.remove('search-hidden'));
    if (noMsg) noMsg.style.display = 'none';
    return;
  }

  let visibleCount = 0;
  allCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const matches = q.split(/\s+/).every(w => text.includes(w));
    card.classList.toggle('search-hidden', !matches);
    if (matches) visibleCount++;
  });

  if (noMsg) noMsg.style.display = visibleCount === 0 ? 'block' : 'none';

  // If there are matches that are hidden (load more), reveal them
  if (q && visibleCount > 0) {
    allCards.forEach(card => {
      if (!card.classList.contains('search-hidden') && card.classList.contains('hidden-card')) {
        card.classList.add('revealed');
      }
    });
  }
}

// Wire up events
searchBar.addEventListener('input', e => {
  buildDropdown(e.target.value);
  filterCards(e.target.value);
});

document.getElementById('searchBtn').addEventListener('click', () => {
  buildDropdown(searchBar.value);
  filterCards(searchBar.value);
  searchResults.classList.remove('show');
  document.getElementById('lessons-section').scrollIntoView({ behavior: 'smooth' });
});

searchBar.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    buildDropdown(searchBar.value);
    filterCards(searchBar.value);
    searchResults.classList.remove('show');
    document.getElementById('lessons-section').scrollIntoView({ behavior: 'smooth' });
  }
  if (e.key === 'Escape') {
    searchResults.classList.remove('show');
    filterCards('');
    searchBar.value = '';
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-bar-wrap')) searchResults.classList.remove('show');
});

searchBar.addEventListener('focus', () => {
  if (searchBar.value.trim()) buildDropdown(searchBar.value);
});

// Quick-chips
document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    searchBar.value = c.dataset.q;
    searchBar.focus();
    buildDropdown(c.dataset.q);
    filterCards(c.dataset.q);
  });
});

/* Pills */
document.querySelectorAll('.pill').forEach(p => {
  p.addEventListener('click', e => { e.preventDefault(); p.classList.toggle('on'); });
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