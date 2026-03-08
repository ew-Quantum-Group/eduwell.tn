
const AUTH_CONFIG = {
    isLoggedInKey: 'eduwell_svt_isLoggedIn',
    usernameKey: 'eduwell_svt_username',
    lastActivityKey: 'eduwell_svt_lastActivity'
};

function getCurrentUser() {
    return {
        username: localStorage.getItem(AUTH_CONFIG.usernameKey) || 'Étudiant',
        email: localStorage.getItem(AUTH_CONFIG.usernameKey) || 'etudiant@lumiere.edu'
    };
}

function isAuthenticated() {
    const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
    if (!isLoggedIn) return false;
    const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
    if (lastActivity) {
        const lastActivityTime = parseInt(lastActivity);
        const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
        if (minutesDiff >= 30) {
            localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
            localStorage.removeItem(AUTH_CONFIG.usernameKey);
            localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
            return false;
        }
    }
    return true;
}

function updateUserActivity() {
    if (localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true') {
        localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
    }
}

function logout() {
    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
    localStorage.removeItem(AUTH_CONFIG.usernameKey);
    localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
    if (window.activityTimer) clearInterval(window.activityTimer);
    toast('Déconnexion réussie');
    updateAuthUI();
    document.getElementById('protectedOverlay').style.display = 'none';
    window.location.href = '#top';
}

function initActivityTracking() {
    ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, updateUserActivity);
    });
    window.activityTimer = setInterval(() => {
        const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
        if (isLoggedIn) {
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
                if (minutesDiff >= 30) {
                    toast('Session expirée - veuillez vous reconnecter');
                    logout();
                }
            }
        }
    }, 60000);
}

function updateAuthUI() {
    const isLoggedIn = isAuthenticated();
    const user = getCurrentUser();
    const username = user.username;
    const initials = username.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() ||
                    username.substring(0, 2).toUpperCase();
    document.getElementById('userName').textContent = username;
    document.getElementById('userEmail').textContent = user.email;
    document.getElementById('userAvatar').innerHTML = `${initials}<div class="sb-pf-av-dot"></div>`;
    const sidebarAuth = document.getElementById('sidebarAuth');
    if (sidebarAuth) {
        if (isLoggedIn) {
            sidebarAuth.innerHTML = `<button class="auth-btn logout-btn" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Déconnexion</button>`;
        } else {
            sidebarAuth.innerHTML = `<a href="login.html" class="auth-btn login-btn" onclick="redirectToLogin()"><i class="fas fa-sign-in-alt"></i> Se connecter</a>`;
        }
    }
    const mobileAuth = document.getElementById('mobileAuth');
    if (mobileAuth) {
        if (isLoggedIn) {
            mobileAuth.innerHTML = `<button class="mobile-auth-btn logout" onclick="logout()" title="Déconnexion"><i class="fas fa-sign-out-alt"></i></button>`;
        } else {
            mobileAuth.innerHTML = `<a href="login.html" class="mobile-auth-btn login" onclick="redirectToLogin()"><i class="fas fa-sign-in-alt"></i></a>`;
        }
    }
    const overlay = document.getElementById('protectedOverlay');
    if (overlay) { overlay.style.display = isLoggedIn ? 'none' : 'flex'; }
    if (isLoggedIn) {
        const redirectUrl = sessionStorage.getItem('eduwell_redirect_url');
        if (redirectUrl && redirectUrl !== window.location.href && !redirectUrl.includes('login.html')) {
            sessionStorage.removeItem('eduwell_redirect_url');
            window.location.href = redirectUrl;
        }
    }
}

function requireAuth() {
    if (isAuthenticated()) { return true; }
    else { toast('Veuillez vous connecter pour accéder à ce contenu'); document.getElementById('protectedOverlay').style.display = 'flex'; return false; }
}

function requireAuthThen(callback) {
    if (isAuthenticated()) { if (typeof callback === 'function') { callback(); } return true; }
    else { toast('Veuillez vous connecter pour accéder à ce contenu'); document.getElementById('protectedOverlay').style.display = 'flex'; return false; }
}

let toastTimer;
function toast(message) {
    const el = document.getElementById('toast');
    el.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

function redirectToLogin() {
    sessionStorage.setItem('eduwell_redirect_url', window.location.href);
    window.location.href = 'login.html';
}

window.addEventListener('scroll',()=>{
  const p=(scrollY/(document.body.scrollHeight-innerHeight))*100;
  document.getElementById('spb').style.width=p+'%';
},{passive:true});

function goTo(id){
  const el=document.getElementById(id)||document.querySelector(`[id="${id}"]`);
  if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
}

const ro=new IntersectionObserver(es=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}})
},{threshold:.06});
document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

function animBars(pan){
  pan.querySelectorAll('.cc-fill').forEach(b=>{
    b.style.width='0%';
    requestAnimationFrame(()=>setTimeout(()=>b.style.width=b.dataset.w+'%',80));
  });
}

/* Tab mapping: english -> pe, physics -> pp */
const PMAP={english:'pe',physics:'pp'};

function switchTab(s,btn){
  document.querySelectorAll('.ctab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  const pan=document.getElementById(PMAP[s]);
  pan.classList.add('on');
  pan.querySelectorAll('.reveal').forEach(el=>{el.classList.remove('in');setTimeout(()=>ro.observe(el),10)});
  animBars(pan);
  updateUserActivity();
}

function openSubj(s,card){
  document.querySelectorAll('.scard').forEach(c=>c.classList.remove('sel'));
  if(card.classList.contains('scard'))card.classList.add('sel');
  const TIDX={english:0,physics:1};
  document.querySelectorAll('.ctab').forEach(b=>b.classList.remove('on'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.ctab')[TIDX[s]].classList.add('on');
  const pan=document.getElementById(PMAP[s]);
  pan.classList.add('on');
  pan.querySelectorAll('.reveal').forEach(el=>{el.classList.remove('in');setTimeout(()=>ro.observe(el),10)});
  animBars(pan);
  updateUserActivity();
}

window.addEventListener('load',()=>{
  const ap=document.querySelector('.panel.on');
  if(ap)animBars(ap);
});




let CPL=[],CIdx=0;

function openMod(title){
  if (!requireAuth()) return;
  const d=PL[title];if(!d)return;
  CPL=d.videos;CIdx=0;
  const m=document.getElementById('modal');
  m.style.setProperty('--mod-a',d.accent);
  m.style.setProperty('--mod-ab',d.bg);
  const ico=document.getElementById('mIco');
  ico.innerHTML=`<i class="fas ${d.icon}" style="font-size:.9rem;color:${d.accent}"></i>`;
  ico.style.background=d.bg;
  document.getElementById('mSubj').textContent=d.subj.toUpperCase();
  document.getElementById('mTitle').textContent=title;
  document.getElementById('mPlC').textContent=CPL.length+' vidéos';
  renderPL();loadVid(0);
  document.getElementById('ov').classList.add('open');
  document.body.style.overflow='hidden';
  updateUserActivity();
}

function renderPL(){
  const c=document.getElementById('mPl');c.innerHTML='';
  CPL.forEach((v,i)=>{
    const r=document.createElement('div');
    r.className='vrow'+(i===CIdx?' on':'');
    r.onclick=()=>loadVid(i);
    r.innerHTML=`
      <div class="vrow-n">${i===CIdx?'<i class="fas fa-play" style="font-size:.48rem"></i>':i+1}</div>
      <div class="vrow-body">
        <div class="vrow-t">${v.title}</div>
        <div class="vrow-s"><i class="fas fa-clock"></i>${v.dur}&nbsp;&middot;&nbsp;<span class="mnow-lvl" style="font-size:.57rem;padding:1px 5px">${v.level}</span></div>
      </div>
      <span class="vsahl">SAHL</span>
      <div class="vrow-play"><i class="fas fa-play" style="font-size:.52rem"></i></div>`;
    c.appendChild(r);
  });
}

function loadVid(i){
  CIdx=i;const v=CPL[i];
  document.getElementById('mFrame').src=`https://drive.google.com/file/d/${v.id}/preview`;
  document.getElementById('mNowT').textContent=v.title;
  document.getElementById('mNowLvl').textContent=v.level;
  document.getElementById('mNowDur').textContent=v.dur;
  document.getElementById('mNowBadge').textContent=v.level;
  document.getElementById('mFill').style.width=((i+1)/CPL.length*100)+'%';
  renderPL();
  setTimeout(()=>{const a=document.querySelector('.vrow.on');if(a)a.scrollIntoView({behavior:'smooth',block:'nearest'})},80);
  updateUserActivity();
}

function closeMod(){
  document.getElementById('ov').classList.remove('open');
  document.getElementById('mFrame').src='about:blank';
  document.body.style.overflow='';
}
function closeOut(e){if(e.target===document.getElementById('ov'))closeMod()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMod()});

document.addEventListener('DOMContentLoaded', function() {
    updateAuthUI();
    if (isAuthenticated()) {
        initActivityTracking();
        updateUserActivity();
    }
});

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        updateAuthUI();
        if (isAuthenticated()) { updateUserActivity(); }
    }
});

document.addEventListener('contextmenu', function(e) {
    if (!isAuthenticated()) return;
    e.preventDefault(); return false;
});

document.addEventListener('keydown', function(e) {
    if (!isAuthenticated()) return;
    if ((e.ctrlKey && e.key === 's') ||
        (e.ctrlKey && e.shiftKey && e.key === 'S') ||
        (e.ctrlKey && e.key === 'p') ||
        e.key === 'F12') {
        e.preventDefault(); return false;
    }
});
