
/* ─── INTRO ───────────────────── */
const WORD = [
  {ch:'S',  cls:''},
  {ch:'a',  cls:'italic-char'},
  {ch:'h',  cls:'italic-char'},
  {ch:'l',  cls:'italic-char'},
  {ch:' ',  cls:''},
  {ch:'A',  cls:''},
  {ch:'I',  cls:''},
];

// Build letters
const logoEl = document.getElementById('introLogo');
WORD.forEach((item,i) => {
  const span = document.createElement('span');
  span.className = 'char ' + item.cls;
  span.textContent = item.ch === ' ' ? '\u00A0' : item.ch;
  span.style.animationDelay = (0.06 + i * 0.07) + 's';
  logoEl.appendChild(span);
});

/* ─── AUTHENTICATION ───────────────────── */
const AUTH_CONFIG = {
    isLoggedInKey: 'eduwell_svt_isLoggedIn',
    usernameKey: 'eduwell_svt_username',
    lastActivityKey: 'eduwell_svt_lastActivity'
};

// Check if user is authenticated
function isAuthenticated() {
    const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
    if (!isLoggedIn) return false;
    
    const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
    if (lastActivity) {
        const lastActivityTime = parseInt(lastActivity);
        const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
        if (minutesDiff >= 30) {
            // Session expired due to inactivity
            localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
            localStorage.removeItem(AUTH_CONFIG.usernameKey);
            localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
            return false;
        }
    }
    return true;
}

// Update user activity timestamp
function updateUserActivity() {
    if (localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true') {
        localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());
    }
}

// Initialize activity tracking
function initActivityTracking() {
    ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
        document.addEventListener(event, updateUserActivity);
    });
    
    // Check session every minute
    window.activityTimer = setInterval(() => {
        if (isAuthenticated()) {
            const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
            if (lastActivity) {
                const lastActivityTime = parseInt(lastActivity);
                const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60);
                if (minutesDiff >= 30) {
                    toast('Session expirée - veuillez vous reconnecter');
                    showLoginOverlay();
                }
            }
        }
    }, 60000);
}

// Toast notification
let toastTimer;
function toast(message) {
    const el = document.getElementById('toast');
    el.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 3000);
}

// Show login overlay
function showLoginOverlay() {
    document.getElementById('protectedOverlay').style.display = 'flex';
}

// Redirect to login
function redirectToLogin() {
    sessionStorage.setItem('eduwell_redirect_url', window.location.href);
    window.location.href = 'login.html';
}

// Check authentication and show overlay if needed
function checkAuth() {
    if (!isAuthenticated()) {
        // Store current page for redirect back
        sessionStorage.setItem('eduwell_redirect_url', window.location.href);
        showLoginOverlay();
    } else {
        // Initialize activity tracking
        initActivityTracking();
        updateUserActivity();
        
        // Update UI to show logged in state
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.innerHTML = '<i class="fa-regular fa-circle-user"></i><span>Mon compte</span>';
            loginBtn.href = 'account.html';
        }
    }
}

// Check auth on load
setTimeout(checkAuth, 3000); // Check after intro

/* ─── STAGGER APP ELEMENTS IN ───── */
// Trigger curtains after hold
setTimeout(() => {
  document.getElementById('cTop').classList.add('away');
  document.getElementById('cBot').classList.add('away');

  const app = document.getElementById('app');
  app.classList.add('on');

  // fade out intro overlay
  const intro = document.getElementById('intro');
  setTimeout(() => {
    intro.style.transition = 'opacity 0.5s ease';
    intro.style.opacity = '0';
    setTimeout(() => intro.remove(), 520);
  }, 900);

  // stagger app elements in
  setTimeout(() => {
    document.getElementById('backBtn').classList.add('on');
    document.getElementById('navRight').classList.add('on');
  }, 200);
  setTimeout(() => {
    document.getElementById('iconUnit').classList.add('on');
  }, 380);
  setTimeout(() => {
    document.getElementById('panel-1').classList.add('on');
  }, 540);
  setTimeout(() => {
    document.getElementById('footer').classList.add('on');
  }, 680);

}, 2200);

/* ─── STEPS ───────────────────── */
let step = 1;
const $ = id => document.getElementById(id);

function setPips(n) {
  ['p1','p2pip','p3pip'].forEach((id,i) =>
    $(id).classList.toggle('on', i < n));
}
function setProgress(w) { $('prog').style.width = w; }

function swapBtn(txt, cls, icon, isTry=false, href='') {
  const btn = $('ctaBtn');
  btn.classList.add('fade-out');
  setTimeout(() => {
    if (isTry) {
      const a = document.createElement('a');
      a.href = href; a.target='_blank'; a.rel='noopener';
      a.className = 'cta ' + cls;
      a.style.cssText = 'flex:1;max-width:260px;opacity:0;transform:translateY(6px);transition:opacity 0.5s ease,transform 0.5s cubic-bezier(0.16,1,0.3,1),background 0.25s,box-shadow 0.25s;';
      a.innerHTML = `<span>${txt}</span><i class="fa-solid ${icon}"></i>`;
      btn.replaceWith(a);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        a.style.opacity='1'; a.style.transform='translateY(0)';
      }));
    } else {
      $('ctaTxt').textContent = txt;
      $('ctaIcon').className = 'fa-solid ' + icon;
      btn.className = 'cta ' + cls;
      btn.style.transition='opacity 0.5s ease,transform 0.5s cubic-bezier(0.16,1,0.3,1),background 0.25s,box-shadow 0.25s';
      btn.style.opacity='1'; btn.style.transform='translateY(0)';
      btn.classList.remove('fade-out');
    }
  }, 280);
}

function advance() {
  // Require authentication before advancing
  if (!isAuthenticated()) {
    toast('Veuillez vous connecter pour continuer');
    showLoginOverlay();
    return;
  }
  
  if (step===1) goStep2();
  else if (step===2) goStep3();
}

/* Step 1 → 2 */
function goStep2() {
  step=2; setPips(2); setProgress('66.66%');
  $('stepLbl').textContent = '2 of 3';

  // exit panel 1
  const p1 = $('panel-1');
  p1.classList.add('out');
  setTimeout(() => p1.style.display='none', 380);

  // icon morph
  setTimeout(() => {
    $('iconFa').className = 'fa-solid fa-layer-group';
  }, 200);

  // show panel 2
  setTimeout(() => {
    const p2 = $('panel-2');
    p2.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      p2.classList.add('on');
      setTimeout(() => $('capList').classList.add('on'), 300);
    }));
    swapBtn('Continue', 'ghost', 'fa-arrow-right');
  }, 300);
}

/* Step 2 → 3 */
function goStep3() {
  step=3; setPips(3); setProgress('100%');
  $('stepLbl').textContent = '3 of 3';

  const p2 = $('panel-2');
  p2.classList.add('out');
  setTimeout(() => p2.style.display='none', 360);

  // icon morph to check
  setTimeout(() => {
    $('iconFa').className = 'fa-solid fa-circle-check';
    // subtle icon-box green tint
    $('iconBox').style.background = 'linear-gradient(145deg,#14532d,#166534)';
    $('iconBox').style.boxShadow = '0 0 0 1px rgba(255,255,255,0.06) inset,0 8px 32px rgba(22,163,74,0.30),0 2px 8px rgba(0,0,0,0.12)';
  }, 180);

  // subtle bg tint
  setTimeout(() => {
    document.getElementById('app').style.background = 'linear-gradient(160deg,#f5fbf7 0%,#f2f9f5 60%,#eef7f2 100%)';
  }, 300);

  setTimeout(() => {
    const p3 = $('panel-3');
    p3.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      p3.classList.add('on');
      setTimeout(() => { $('p3h').classList.add('on'); }, 80);
      setTimeout(() => { $('p3sub').classList.add('on'); }, 240);
      setTimeout(() => { $('trustStrip').classList.add('on'); }, 460);
    }));
    swapBtn(' Essayer Sahl AI ', 'solid', 'fa-arrow-up-right', true, 'https://opal.google/app/1F_86EHR6cJa08lP1WzytSb5R_VpJgMPM');
  }, 320);
}

// Handle back button click
document.getElementById('backBtn').addEventListener('click', function(e) {
  // You can add custom behavior here if needed
  // For now, it's a simple link to index.html
});

// Handle page show event (for back/forward cache)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Page was restored from cache, re-check authentication
        if (!isAuthenticated()) {
            showLoginOverlay();
        }
    }
});

// Disable right-click and save shortcuts (optional)
document.addEventListener('contextmenu', function(e) { 
    if (!isAuthenticated()) return;
    e.preventDefault(); 
    return false; 
});

document.addEventListener('keydown', function(e) {
    if (!isAuthenticated()) return;
    if ((e.ctrlKey && e.key === 's') || 
        (e.ctrlKey && e.shiftKey && e.key === 'S') || 
        (e.ctrlKey && e.key === 'p') ||
        e.key === 'F12') {
        e.preventDefault();
        return false;
    }
});
