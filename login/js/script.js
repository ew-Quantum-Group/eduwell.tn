
// ═══════════════════════════════════════════
//  SECURITY
// ═══════════════════════════════════════════
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if ((e.ctrlKey && e.key === 's') ||
      (e.ctrlKey && e.shiftKey && e.key === 'S') ||
      (e.ctrlKey && e.key === 'p') ||
      e.key === 'F12') {
    e.preventDefault();
  }
});


// ═══════════════════════════════════════════
//  AUTH CONFIG  (script.js merged inline)
// ═══════════════════════════════════════════
const AUTH_CONFIG = {
  isLoggedInKey:   'eduwell_svt_isLoggedIn',
  usernameKey:     'eduwell_svt_username',
  lastActivityKey: 'eduwell_svt_lastActivity'
};

function eduwell_login(username, password) {
  localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
  localStorage.removeItem(AUTH_CONFIG.usernameKey);
  localStorage.removeItem(AUTH_CONFIG.lastActivityKey);

  const user = VALID_CREDENTIALS.find(u =>
    u.username === username && u.password === password
  );
  if (!user) return { success: false, message: 'Identifiants invalides. Veuillez réessayer.' };

  localStorage.setItem(AUTH_CONFIG.isLoggedInKey,   'true');
  localStorage.setItem(AUTH_CONFIG.usernameKey,     user.name || username);
  localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString());

  return { success: true, message: 'Connexion réussie !', username: user.name || username };
}

function eduwell_isAuthenticated() {
  return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
}

// ═══════════════════════════════════════════
//  SPLASH REMOVE
// ═══════════════════════════════════════════
setTimeout(() => {
  const splash = document.getElementById('splash');
  if (splash) splash.remove();
}, 3400);

// ═══════════════════════════════════════════
//  CHARACTER ANIMATION STATE
// ═══════════════════════════════════════════
let mouseX = 0, mouseY = 0;
let isTyping = false, isLookingAtEachOther = false, lookTimer = null;
let isPurpleBlinking = false, isBlackBlinking = false, isPurplePeeking = false;
let showPassword = false, passwordValue = '';

// DOM – characters
const purpleEl = document.getElementById('purple');
const blackEl  = document.getElementById('black');
const orangeEl = document.getElementById('orange');
const yellowEl = document.getElementById('yellow');

const purpleEyes = document.getElementById('purple-eyes');
const blackEyes  = document.getElementById('black-eyes');
const orangeEyes = document.getElementById('orange-eyes');
const yellowEyes = document.getElementById('yellow-eyes');
const yellowMouth= document.getElementById('yellow-mouth');

const purpleEyeL  = document.getElementById('purple-eye-l');
const purpleEyeR  = document.getElementById('purple-eye-r');
const purplePupilL= document.getElementById('purple-pupil-l');
const purplePupilR= document.getElementById('purple-pupil-r');
const blackEyeL   = document.getElementById('black-eye-l');
const blackEyeR   = document.getElementById('black-eye-r');
const blackPupilL = document.getElementById('black-pupil-l');
const blackPupilR = document.getElementById('black-pupil-r');
const orangePupilL= document.getElementById('orange-pupil-l');
const orangePupilR= document.getElementById('orange-pupil-r');
const yellowPupilL= document.getElementById('yellow-pupil-l');
const yellowPupilR= document.getElementById('yellow-pupil-r');

// DOM – form
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const pwToggle   = document.getElementById('pw-toggle');
const eyeIcon    = document.getElementById('eye-icon');
const loginForm  = document.getElementById('login-form');
const submitBtn  = document.getElementById('submit-btn');
const btnLabel   = document.getElementById('btn-label');
const btnArrow   = document.getElementById('btn-arrow');
const errorBox   = document.getElementById('error-box');
const errorText  = document.getElementById('error-text');
const successBox = document.getElementById('success-box');
const successText= document.getElementById('success-text');

// ── Mouse tracking
window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });

// ── Pupil helpers
function getPos(el) {
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2, cy = r.top + r.height / 3;
  const dx = mouseX - cx, dy = mouseY - cy;
  return {
    faceX: Math.max(-15, Math.min(15, dx / 20)),
    faceY: Math.max(-10, Math.min(10, dy / 30)),
    skew:  Math.max(-6,  Math.min(6,  -dx / 120))
  };
}
function setPupilFromMouse(p, max) {
  const r = p.getBoundingClientRect();
  const dx = mouseX - (r.left + r.width/2), dy = mouseY - (r.top + r.height/2);
  const dist = Math.min(Math.sqrt(dx*dx+dy*dy), max);
  const a = Math.atan2(dy, dx);
  p.style.transform = `translate(${Math.cos(a)*dist}px,${Math.sin(a)*dist}px)`;
}
function setPupilForced(p, x, y) { p.style.transform = `translate(${x}px,${y}px)`; }

// ── Main RAF loop
function animate() {
  const pp = getPos(purpleEl), bp = getPos(blackEl), op = getPos(orangeEl), yp = getPos(yellowEl);
  const pwVis = passwordValue.length > 0 && showPassword;
  const pwHid = passwordValue.length > 0 && !showPassword;

  // Purple body
  if (pwVis) { purpleEl.style.transform = 'skewX(0deg)'; purpleEl.style.height = '360px'; }
  else if (isTyping || pwHid) { purpleEl.style.transform = `skewX(${pp.skew-12}deg) translateX(38px)`; purpleEl.style.height = '420px'; }
  else { purpleEl.style.transform = `skewX(${pp.skew}deg)`; purpleEl.style.height = '360px'; }

  // Black body
  if (pwVis) blackEl.style.transform = 'skewX(0deg)';
  else if (isLookingAtEachOther) blackEl.style.transform = `skewX(${bp.skew*1.5+10}deg) translateX(18px)`;
  else if (isTyping || pwHid) blackEl.style.transform = `skewX(${bp.skew*1.5}deg)`;
  else blackEl.style.transform = `skewX(${bp.skew}deg)`;

  orangeEl.style.transform = pwVis ? 'skewX(0deg)' : `skewX(${op.skew}deg)`;
  yellowEl.style.transform = pwVis ? 'skewX(0deg)' : `skewX(${yp.skew}deg)`;

  // Purple eyes
  if (pwVis) { purpleEyes.style.left='18px'; purpleEyes.style.top='33px'; }
  else if (isLookingAtEachOther) { purpleEyes.style.left='53px'; purpleEyes.style.top='63px'; }
  else { purpleEyes.style.left=`${42+pp.faceX}px`; purpleEyes.style.top=`${38+pp.faceY}px`; }

  [purplePupilL,purplePupilR].forEach(p => {
    if (pwVis) setPupilForced(p, isPurplePeeking?4:-4, isPurplePeeking?5:-4);
    else if (isLookingAtEachOther) setPupilForced(p,3,4);
    else setPupilFromMouse(p,5);
  });
  purpleEyeL.style.height = purpleEyeR.style.height = isPurpleBlinking ? '2px' : '18px';

  // Black eyes
  if (pwVis) { blackEyes.style.left='8px'; blackEyes.style.top='26px'; }
  else if (isLookingAtEachOther) { blackEyes.style.left='30px'; blackEyes.style.top='10px'; }
  else { blackEyes.style.left=`${24+bp.faceX}px`; blackEyes.style.top=`${30+bp.faceY}px`; }

  [blackPupilL,blackPupilR].forEach(p => {
    if (pwVis) setPupilForced(p,-4,-4);
    else if (isLookingAtEachOther) setPupilForced(p,0,-4);
    else setPupilFromMouse(p,4);
  });
  blackEyeL.style.height = blackEyeR.style.height = isBlackBlinking ? '2px' : '16px';

  // Orange eyes
  if (pwVis) { orangeEyes.style.left='48px'; orangeEyes.style.top='84px'; [orangePupilL,orangePupilR].forEach(p=>setPupilForced(p,-5,-4)); }
  else { orangeEyes.style.left=`${80+op.faceX}px`; orangeEyes.style.top=`${90+op.faceY}px`; [orangePupilL,orangePupilR].forEach(p=>setPupilFromMouse(p,5)); }

  // Yellow eyes & mouth
  if (pwVis) {
    yellowEyes.style.left='18px'; yellowEyes.style.top='33px';
    yellowMouth.style.left='8px'; yellowMouth.style.top='86px';
    [yellowPupilL,yellowPupilR].forEach(p=>setPupilForced(p,-5,-4));
  } else {
    yellowEyes.style.left=`${50+yp.faceX}px`; yellowEyes.style.top=`${38+yp.faceY}px`;
    yellowMouth.style.left=`${36+yp.faceX}px`; yellowMouth.style.top=`${86+yp.faceY}px`;
    [yellowPupilL,yellowPupilR].forEach(p=>setPupilFromMouse(p,5));
  }

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// ── Blinking
function scheduleBlink(setFn) {
  setTimeout(() => { setFn(true); setTimeout(() => { setFn(false); scheduleBlink(setFn); }, 150); }, Math.random()*4000+3000);
}
scheduleBlink(v => isPurpleBlinking = v);
scheduleBlink(v => isBlackBlinking  = v);

// ── Peeking
function schedulePeek() {
  if (!showPassword || !passwordValue) return;
  setTimeout(() => {
    if (!showPassword || !passwordValue) return;
    isPurplePeeking = true;
    setTimeout(() => { isPurplePeeking = false; schedulePeek(); }, 800);
  }, Math.random()*3000+2000);
}

// ── Input events
[emailInput, passwordInput].forEach(el => {
  el.addEventListener('focus', () => {
    isTyping = true; isLookingAtEachOther = true;
    clearTimeout(lookTimer);
    lookTimer = setTimeout(() => { isLookingAtEachOther = false; }, 800);
  });
  el.addEventListener('blur', () => { isTyping = false; });
});
passwordInput.addEventListener('input', e => {
  passwordValue = e.target.value;
  hideMessages();
});
emailInput.addEventListener('input', hideMessages);

// ── Password toggle
pwToggle.addEventListener('click', () => {
  showPassword = !showPassword;
  passwordInput.type = showPassword ? 'text' : 'password';
  eyeIcon.innerHTML = showPassword
    ? `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>`
    : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
  if (showPassword && passwordValue) schedulePeek();
});

// ═══════════════════════════════════════════
//  AUTH FLOW
// ═══════════════════════════════════════════
function showError(msg) {
  hideMessages();
  errorText.textContent = msg;
  errorBox.classList.add('show');
}
function showSuccess(msg) {
  hideMessages();
  successText.textContent = msg;
  successBox.classList.add('show');
}
function hideMessages() {
  errorBox.classList.remove('show');
  successBox.classList.remove('show');
}

// Clear expired session on load
(function checkSession() {
  const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey);
  if (lastActivity) {
    const diff = (Date.now() - parseInt(lastActivity)) / 60000;
    if (diff >= 30) {
      localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
      localStorage.removeItem(AUTH_CONFIG.usernameKey);
      localStorage.removeItem(AUTH_CONFIG.lastActivityKey);
    }
  }

  // Already authenticated → redirect
  if (eduwell_isAuthenticated()) {
    window.location.href = sessionStorage.getItem('eduwell_redirect_url') || 'index.html';
    return;
  }

  // Session-expired message via URL param
  const params = new URLSearchParams(window.location.search);
  if (params.get('message') === 'session_expired') {
    showError('Votre session a expiré. Veuillez vous reconnecter.');
  }
})();

// Form submit
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = emailInput.value.trim();
  const password = passwordInput.value;

  if (!username || !password) { showError('Veuillez remplir tous les champs.'); return; }

  // Loading state
  btnLabel.textContent = 'Connexion…';
  btnArrow.innerHTML = '<div class="spinner"></div>';
  submitBtn.disabled = true;

  setTimeout(() => {
    const result = eduwell_login(username, password);

    if (result.success) {
      showSuccess(result.message);
      setTimeout(() => {
        const redirectUrl = sessionStorage.getItem('eduwell_redirect_url') || 'index.html';
        sessionStorage.removeItem('eduwell_redirect_url');
        window.location.href = redirectUrl;
      }, 600);
    } else {
      showError(result.message);
      btnLabel.textContent = 'Se connecter';
      btnArrow.innerHTML = `<svg viewBox="0 0 24 24" stroke="#fff" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
      submitBtn.disabled = false;
      passwordInput.value = '';
      passwordValue = '';
      passwordInput.focus();
    }
  }, 600);
});
