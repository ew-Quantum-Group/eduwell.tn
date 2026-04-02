
/* ══ READING PROGRESS ══ */
const pfill = document.getElementById('progress-fill');
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  pfill.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
});

/* ══ HAMBURGER ══ */
const hbg   = document.getElementById('hamburger');
const drw   = document.getElementById('mobileDrawer');
const movl  = document.getElementById('mobileOverlay');
function toggleMenu(o){hbg.classList.toggle('open',o);drw.classList.toggle('open',o);movl.classList.toggle('open',o);document.body.style.overflow=o?'hidden':'';}
hbg.addEventListener('click',()=>toggleMenu(!drw.classList.contains('open')));
movl.addEventListener('click',()=>toggleMenu(false));
drw.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>toggleMenu(false)));

/* ══ SHARE SYSTEM ══ */
const PAGE_URL   = window.location.href;
const PAGE_TITLE = 'الدولة: السيادة والمواطنة';
const PAGE_DESC  = 'دراسة فلسفية شاملة في طبيعة الدولة، الاستبداد، الديمقراطية، وشروط المواطنة الحقيقية — مادة الفلسفة، شعب علمية، الأستاذ صابر بو زايدة.';

const MSGS = {
  facebook:
    '📚 أهلاً! أشاركك درساً فلسفياً رائعاً:\n\n' +
    '✨ ' + PAGE_TITLE + '\n\n' +
    PAGE_DESC + '\n\n' +
    '🔗 اقرأ الدرس كاملاً هنا:\n' + PAGE_URL + '\n\n' +
    '— منصة سهل · Jamais Plus Simple 🎓',

  whatsapp:
    '📚 *درس فلسفي مميّز!*\n\n' +
    '✨ *' + PAGE_TITLE + '*\n\n' +
    PAGE_DESC + '\n\n' +
    '👆 اقرأ الدرس كاملاً:\n🔗 ' + PAGE_URL + '\n\n' +
    '_منصة سهل · « Jamais Plus Simple » 🎓_',

  twitter:
    '📚 درس فلسفي شامل: "' + PAGE_TITLE + '"\n\n' +
    'من الاستبداد إلى الديمقراطية — دراسة في طبيعة الدولة وشروط المواطنة ✨\n\n' +
    '🔗 ' + PAGE_URL + '\n\n#فلسفة #باك #سهل #تعليم',

  instagram:
    '📚 درس جديد على منصة سهل!\n\n' +
    '✨ ' + PAGE_TITLE + '\n\n' +
    PAGE_DESC + '\n\n' +
    '🔗 ' + PAGE_URL + '\n\n' +
    '#فلسفة #باك #تعليم #سهل #JamaisPlusSimple',

  tiktok:
    '📚 درس فلسفي مميّز!\n\n' +
    PAGE_TITLE + '\n\n' +
    PAGE_DESC + '\n\n' +
    '🔗 ' + PAGE_URL + '\n\n#فلسفة #باك #تعليم #سهل',
};

const PLATFORMS = {
  facebook:{
    name:'فيسبوك ماسنجر', hint:'سيفتح فيسبوك مع خيار المشاركة مباشرةً',
    icon:'fab fa-facebook-messenger', gradient:'linear-gradient(135deg,#1877f2,#42a5f5)',
    goLabel:'مشاركة على فيسبوك', goIcon:'fab fa-facebook-f', type:'bubble',
    go(){ window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(PAGE_URL)+'&quote='+encodeURIComponent(MSGS.facebook),'_blank','width=620,height=520'); }
  },
  whatsapp:{
    name:'واتساب', hint:'ستُفتح واتساب مع رسالة جاهزة لإرسالها لأصدقائك',
    icon:'fab fa-whatsapp', gradient:'linear-gradient(135deg,#25d366,#128c7e)',
    goLabel:'إرسال عبر واتساب', goIcon:'fab fa-whatsapp', type:'bubble',
    go(){ window.open('https://wa.me/?text='+encodeURIComponent(MSGS.whatsapp),'_blank'); }
  },
  twitter:{
    name:'تويتر / X', hint:'ستُفتح X مع نص التغريدة جاهزاً للنشر',
    icon:'fab fa-x-twitter', gradient:'linear-gradient(135deg,#14171a,#657786)',
    goLabel:'نشر على تويتر', goIcon:'fab fa-x-twitter', type:'bubble',
    go(){ window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(MSGS.twitter),'_blank','width=560,height=440'); }
  },
  instagram:{
    name:'إنستغرام', hint:'انسخ النص ثم الصقه في قصتك أو رسالتك على إنستغرام',
    icon:'fab fa-instagram', gradient:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',
    goLabel:'نسخ النص وفتح إنستغرام', goIcon:'fab fa-instagram', type:'post',
    go(){ navigator.clipboard.writeText(MSGS.instagram).catch(()=>{}); window.open('https://www.instagram.com','_blank'); }
  },
  tiktok:{
    name:'تيك توك', hint:'انسخ النص ثم الصقه في تيك توك أو أرسله كرسالة',
    icon:'fab fa-tiktok', gradient:'linear-gradient(135deg,#010101,#ff0050)',
    goLabel:'نسخ النص وفتح تيك توك', goIcon:'fab fa-tiktok', type:'post',
    go(){ navigator.clipboard.writeText(MSGS.tiktok).catch(()=>{}); window.open('https://www.tiktok.com','_blank'); }
  },
};

let activePlat = null;

function openShare(plat){
  activePlat = plat;
  const p = PLATFORMS[plat];

  document.getElementById('sModalBar').style.background  = p.gradient;
  const icon = document.getElementById('sPlatIcon');
  icon.style.background = p.gradient;
  icon.innerHTML = '<i class="'+p.icon+'"></i>';
  document.getElementById('sPlatName').textContent = p.name;
  document.getElementById('sPlatHint').textContent = p.hint;

  const goBtn = document.getElementById('sGoBtn');
  goBtn.style.background = p.gradient;
  document.getElementById('sGoIcon').className = p.goIcon;
  document.getElementById('sGoText').textContent = p.goLabel;

  /* Preview */
  const prev = document.getElementById('sPreviewContent');
  const now  = new Date();
  const t    = now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');

  if(p.type === 'bubble'){
    const html = formatBubble(MSGS[plat], PAGE_URL);
    prev.innerHTML =
      '<div class="s-bubble-wrap"><div class="s-bubble">' +
        '<div class="s-bubble-avatar">س</div>' +
        '<div class="s-bubble-text">'+html+'</div>' +
        '<div class="s-bubble-time">'+t+' ✓✓</div>' +
      '</div></div>';
  } else {
    const platLabel = plat === 'instagram' ? 'إنستغرام' : 'تيك توك';
    prev.innerHTML =
      '<div class="s-post-card">' +
        '<div class="s-post-top" style="background:'+p.gradient+'">' +
          '<i class="'+p.icon+' s-post-bg-icon"></i>' +
          '<div class="s-post-title">'+PAGE_TITLE+'</div>' +
          '<div class="s-post-sub">مادة الفلسفة · الأستاذ صابر بو زايدة</div>' +
        '</div>' +
        '<div class="s-post-body">' +
          '<p>'+PAGE_DESC+'</p>' +
          '<span class="s-post-url">🔗 '+PAGE_URL+'</span>' +
        '</div>' +
        '<div class="s-post-foot">' +
          '<div class="s-post-logo">س</div>' +
          '<span>منصة سهل · Jamais Plus Simple</span>' +
        '</div>' +
      '</div>' +
      '<p class="s-copy-note"><i class="fas fa-circle-info" style="color:var(--blue)"></i> سيتم نسخ النص تلقائياً — الصقه في '+platLabel+'</p>';
  }

  document.getElementById('shareOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeShareModal(){
  document.getElementById('shareOverlay').classList.remove('active');
  document.body.style.overflow = '';
  activePlat = null;
}

document.getElementById('shareOverlay').addEventListener('click', function(e){
  if(e.target === this) closeShareModal();
});

document.getElementById('sGoBtn').addEventListener('click',()=>{
  if(activePlat && PLATFORMS[activePlat]){ PLATFORMS[activePlat].go(); closeShareModal(); }
});

function formatBubble(msg, url){
  let h = msg
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/\*(.*?)\*/g,'<strong>$1</strong>')
    .replace(/_(.*?)_/g,'<em>$1</em>');
  const eu = url.replace(/&/g,'&amp;');
  h = h.replace(eu,'<span class="s-url">🔗 '+eu+'</span>');
  h = h.replace(/\n/g,'<br>');
  return h;
}

function copyLink(){
  navigator.clipboard.writeText(PAGE_URL).then(showToast).catch(()=>{
    const ta=document.createElement('textarea');
    ta.value=PAGE_URL; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta); showToast();
  });
}

function showToast(){
  const t=document.getElementById('copyToast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2800);
}