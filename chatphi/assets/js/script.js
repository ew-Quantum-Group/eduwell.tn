
/* ══════════════════════════════════════════ AUTH ══════════════════════════════════════════ */
const AUTH_CONFIG = { isLoggedInKey: 'eduwell_svt_isLoggedIn', usernameKey: 'eduwell_svt_username', lastActivityKey: 'eduwell_svt_lastActivity' };
function getCurrentUser() { return { username: localStorage.getItem(AUTH_CONFIG.usernameKey) || 'طالب', email: localStorage.getItem(AUTH_CONFIG.usernameKey) || 'student@faylo.com' }; }
function isAuthenticated() { const isLoggedIn = localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true'; if (!isLoggedIn) return false; const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey); if (lastActivity) { const lastActivityTime = parseInt(lastActivity); const minutesDiff = (Date.now() - lastActivityTime) / (1000 * 60); if (minutesDiff >= 30) { localStorage.removeItem(AUTH_CONFIG.isLoggedInKey); localStorage.removeItem(AUTH_CONFIG.usernameKey); localStorage.removeItem(AUTH_CONFIG.lastActivityKey); return false; } } return true; }
function updateUserActivity() { if (localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true') { localStorage.setItem(AUTH_CONFIG.lastActivityKey, Date.now().toString()); } }
function initActivityTracking() { ['click', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => { document.addEventListener(event, updateUserActivity); }); window.activityTimer = setInterval(() => { if (isAuthenticated()) { const lastActivity = localStorage.getItem(AUTH_CONFIG.lastActivityKey); if (lastActivity) { const minutesDiff = (Date.now() - parseInt(lastActivity)) / (1000 * 60); if (minutesDiff >= 30) { toast('انتهت الجلسة - يرجى تسجيل الدخول مرة أخرى'); showLoginOverlay(); } } } }, 60000); }
let toastTimer; function toast(message) { const el = document.getElementById('toast'); if (el) { el.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3000); } }
function showLoginOverlay() { document.getElementById('protectedOverlay').style.display = 'flex'; }
function redirectToLogin() { sessionStorage.setItem('eduwell_redirect_url', window.location.href); window.location.href = '../profile/login.html'; }
function updateUserUI() { if (isAuthenticated()) { const userNameElement = document.getElementById('userName'); if (userNameElement) { userNameElement.textContent = getCurrentUser().username; } } }
function checkAuth() { if (!isAuthenticated()) { sessionStorage.setItem('eduwell_redirect_url', window.location.href); showLoginOverlay(); } else { initActivityTracking(); updateUserActivity(); updateUserUI(); } }
document.addEventListener('DOMContentLoaded', function() { checkAuth(); const msg = document.getElementById('mobileOnlyMsg'); const card = msg ? msg.querySelector('.mob-card') : null; const link = msg ? msg.querySelector('.mob-desktop-link') : null; if (msg) msg.style.pointerEvents = 'all'; if (card) card.style.pointerEvents = 'all'; if (link) link.style.pointerEvents = 'all'; });
window.addEventListener('pageshow', function(event) { if (event.persisted) { if (!isAuthenticated()) showLoginOverlay(); else { updateUserUI(); updateUserActivity(); } } });
document.addEventListener('contextmenu', function(e) { if (!isAuthenticated()) return; e.preventDefault(); return false; });
document.addEventListener('keydown', function(e) { if (!isAuthenticated()) return; if ((e.ctrlKey && e.key === 's') || (e.ctrlKey && e.shiftKey && e.key === 'S') || (e.ctrlKey && e.key === 'p') || e.key === 'F12') { e.preventDefault(); return false; } });

/* ══════════════════════════════════════════ STATE ══════════════════════════════════════════ */
const state = { completed: [], chatStage: null, chatLevel: 0, chatDone: false, typing: false };
const state2 = { completed: [], chatStage: null, chatLevel: 0, chatDone: false, typing: false };
const state3 = { completed: [], chatStage: null, chatLevel: 0, chatDone: false, typing: false };
const state4 = { completed: [], chatStage: null, chatLevel: 0, chatDone: false, typing: false };
const state5 = { completed: [], chatStage: null, chatLevel: 0, chatDone: false, typing: false };

/* ══════════════════════════════════════════ DOM REFS ══════════════════════════════════════════ */
const overlay = document.getElementById('modalOverlay'), chatBody = document.getElementById('chatBody'), btnReply = document.getElementById('btnReply'), btnClose = document.getElementById('btnCloseChat'), stagePill = document.getElementById('stagePill'), stagePillText = document.getElementById('stagePillText');

/* ══════════════════════════════════════════ MODAL ══════════════════════════════════════════ */
function openStage(stageIdx, btn) { doRipple(btn); const stageData = STAGES[stageIdx]; if (!stageData || Object.keys(stageData.levels).length === 0) { showToast('هذه المرحلة فارغة 🔒'); return; } state.chatStage = stageIdx; state.chatLevel = 0; state.chatDone = false; stagePillText.textContent = stageData.stageLabel; chatBody.innerHTML = ''; btnReply.classList.add('hidden'); btnClose.classList.add('hidden'); overlay.dataset.section = ''; overlay.classList.add('open'); document.body.style.overflow = 'hidden'; setTimeout(() => startChat(stageIdx), 300); }
function closeModal() { overlay.classList.remove('open'); overlay.dataset.section = ''; document.body.style.overflow = ''; }
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
btnClose.addEventListener('click', () => { closeModal(); });

/* ══════════════════════════════════════════ CHAT LOGIC ══════════════════════════════════════════ */
function startChat(stageIdx) { const stageData = STAGES[stageIdx]; state.chatLevel = 1; addProgressDots(stageIdx); showTyping(() => { addPhiloMsg(stageData.levels[1].message); updateProgressDots(stageIdx, 1); showReplyIfMore(stageIdx, 1); }); }
function showReplyIfMore(stageIdx, level) { const stageData = STAGES[stageIdx]; const totalLevels = Object.keys(stageData.levels).length; const levelData = stageData.levels[level]; if (level < totalLevels && levelData && levelData.forwardOption) { btnReply.textContent = ''; btnReply.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.3)" stroke-width=".8"/><polyline points="14 17 8 12 14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> ${levelData.forwardOption.label}`; btnReply.classList.remove('hidden'); btnClose.classList.add('hidden'); } else { btnReply.classList.add('hidden'); showFinishBanner(stageIdx); } }
btnReply.addEventListener('click', () => { const sec = overlay.dataset.section; const activeState = sec === '5' ? state5 : sec === '4' ? state4 : sec === '3' ? state3 : sec === '2' ? state2 : state; const activeStages = sec === '5' ? STAGES5 : sec === '4' ? STAGES4 : sec === '3' ? STAGES3 : sec === '2' ? STAGES2 : STAGES; if (activeState.typing) return; const stageData = activeStages[activeState.chatStage]; const totalLevels = Object.keys(stageData.levels).length; const prevLevel = activeState.chatLevel; const nextLevel = prevLevel + 1; if (nextLevel > totalLevels) return; const prevLevelData = stageData.levels[prevLevel]; if (prevLevelData && prevLevelData.forwardOption) { addUserMsg(prevLevelData.forwardOption.label); } btnReply.classList.add('hidden'); activeState.chatLevel = nextLevel; showTyping(() => { addPhiloMsg(stageData.levels[nextLevel].message); if (sec === '5') { updateProgressDots5(activeState.chatStage, nextLevel); showReplyIfMore5(activeState.chatStage, nextLevel); } else if (sec === '4') { updateProgressDots4(activeState.chatStage, nextLevel); showReplyIfMore4(activeState.chatStage, nextLevel); } else if (sec === '3') { updateProgressDots3(activeState.chatStage, nextLevel); showReplyIfMore3(activeState.chatStage, nextLevel); } else if (sec === '2') { updateProgressDots2(activeState.chatStage, nextLevel); showReplyIfMore2(activeState.chatStage, nextLevel); } else { updateProgressDots(activeState.chatStage, nextLevel); showReplyIfMore(activeState.chatStage, nextLevel); } }); });
function showFinishBanner(stageIdx) { state.chatDone = true; if (!state.completed.includes(stageIdx)) { state.completed.push(stageIdx); markStageDone(stageIdx); } setTimeout(() => { const banner = document.createElement('div'); banner.className = 'finish-banner'; banner.innerHTML = `<div class="fi-icon">🎉</div><div class="fi-title">أحسنت! أكملت المرحلة</div><div class="fi-sub">يمكنك الرجوع للمسار والمتابعة</div>`; chatBody.appendChild(banner); chatBody.scrollTop = chatBody.scrollHeight; btnClose.classList.remove('hidden'); }, 400); }
function markStageDone(completedIdx) { const completedBtn = document.getElementById(`node${completedIdx}`); if (completedBtn) { completedBtn.classList.remove('current'); completedBtn.classList.add('done', 'done-full'); if (!completedBtn.querySelector('.done-badge')) { const badge = document.createElement('div'); badge.className = 'done-badge'; badge.textContent = '✓'; completedBtn.appendChild(badge); } const wrap = completedBtn.closest('.node'); if (wrap) wrap.classList.remove('is-cur'); completedBtn.style.animation = 'floatNode 3.2s ease-in-out infinite'; } const totalStages = STAGES.filter(s => Object.keys(s.levels).length > 0).length; const pct = Math.round((state.completed.length / totalStages) * 100); document.getElementById('xpBar').style.width = pct + '%'; setTimeout(remapTrail, 100); }

/* ══════════════════════════════════════════ SECTION 2 ══════════════════════════════════════════ */
function openStage2(stageIdx, btn) { doRipple(btn); const stageData = STAGES2[stageIdx]; if (!stageData || Object.keys(stageData.levels).length === 0) { showToast('هذه المرحلة فارغة'); return; } state2.chatStage = stageIdx; state2.chatLevel = 0; state2.chatDone = false; stagePillText.textContent = stageData.stageLabel; chatBody.innerHTML = ''; btnReply.classList.add('hidden'); btnClose.classList.add('hidden'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; overlay.dataset.section = '2'; setTimeout(() => startChat2(stageIdx), 300); }
function startChat2(stageIdx) { const stageData = STAGES2[stageIdx]; state2.chatLevel = 1; addProgressDots2(stageIdx); showTyping(() => { addPhiloMsg(stageData.levels[1].message); updateProgressDots2(stageIdx, 1); showReplyIfMore2(stageIdx, 1); }); }
function showReplyIfMore2(stageIdx, level) { const stageData = STAGES2[stageIdx]; const totalLevels = Object.keys(stageData.levels).length; const levelData = stageData.levels[level]; if (level < totalLevels && levelData && levelData.forwardOption) { btnReply.textContent = ''; btnReply.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.3)" stroke-width=".8"/><polyline points="14 17 8 12 14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> ${levelData.forwardOption.label}`; btnReply.classList.remove('hidden'); btnClose.classList.add('hidden'); } else { btnReply.classList.add('hidden'); showFinishBanner2(stageIdx); } }
function showFinishBanner2(stageIdx) { state2.chatDone = true; if (!state2.completed.includes(stageIdx)) { state2.completed.push(stageIdx); markStageDone2(stageIdx); } setTimeout(() => { const banner = document.createElement('div'); banner.className = 'finish-banner'; banner.innerHTML = `<div class="fi-icon">🎉</div><div class="fi-title">أحسنت! أكملت المرحلة</div><div class="fi-sub">يمكنك الرجوع للمسار والمتابعة</div>`; chatBody.appendChild(banner); chatBody.scrollTop = chatBody.scrollHeight; btnClose.classList.remove('hidden'); }, 400); }
function markStageDone2(completedIdx) { const completedBtn = document.getElementById(`s2node${completedIdx}`); if (completedBtn) { completedBtn.classList.remove('current'); completedBtn.classList.add('done', 'done-full'); if (!completedBtn.querySelector('.done-badge')) { const badge = document.createElement('div'); badge.className = 'done-badge'; badge.textContent = '✓'; completedBtn.appendChild(badge); } const wrap = completedBtn.closest('.node'); if (wrap) wrap.classList.remove('is-cur'); completedBtn.style.animation = 'floatNode 3.2s ease-in-out infinite'; } const totalStages2 = STAGES2.length; const pct2 = Math.round((state2.completed.length / totalStages2) * 100); const xpBar2 = document.getElementById('xpBar2'); if (xpBar2) xpBar2.style.width = pct2 + '%'; setTimeout(remapTrail2, 100); }

/* ══════════════════════════════════════════ SECTION 3 ══════════════════════════════════════════ */
function openStage3(stageIdx, btn) { doRipple(btn); const stageData = STAGES3[stageIdx]; if (!stageData || Object.keys(stageData.levels).length === 0) { showToast('هذه المرحلة فارغة'); return; } state3.chatStage = stageIdx; state3.chatLevel = 0; state3.chatDone = false; stagePillText.textContent = stageData.stageLabel; chatBody.innerHTML = ''; btnReply.classList.add('hidden'); btnClose.classList.add('hidden'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; overlay.dataset.section = '3'; setTimeout(() => startChat3(stageIdx), 300); }
function startChat3(stageIdx) { const stageData = STAGES3[stageIdx]; state3.chatLevel = 1; addProgressDots3(stageIdx); showTyping(() => { addPhiloMsg(stageData.levels[1].message); updateProgressDots3(stageIdx, 1); showReplyIfMore3(stageIdx, 1); }); }
function showReplyIfMore3(stageIdx, level) { const stageData = STAGES3[stageIdx]; const totalLevels = Object.keys(stageData.levels).length; const levelData = stageData.levels[level]; if (level < totalLevels && levelData && levelData.forwardOption) { btnReply.textContent = ''; btnReply.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.3)" stroke-width=".8"/><polyline points="14 17 8 12 14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> ${levelData.forwardOption.label}`; btnReply.classList.remove('hidden'); btnClose.classList.add('hidden'); } else { btnReply.classList.add('hidden'); showFinishBanner3(stageIdx); } }
function showFinishBanner3(stageIdx) { state3.chatDone = true; if (!state3.completed.includes(stageIdx)) { state3.completed.push(stageIdx); markStageDone3(stageIdx); } setTimeout(() => { const banner = document.createElement('div'); banner.className = 'finish-banner'; banner.innerHTML = `<div class="fi-icon">🎉</div><div class="fi-title">أحسنت! أكملت المرحلة</div><div class="fi-sub">يمكنك الرجوع للمسار والمتابعة</div>`; chatBody.appendChild(banner); chatBody.scrollTop = chatBody.scrollHeight; btnClose.classList.remove('hidden'); }, 400); }
function markStageDone3(completedIdx) { const completedBtn = document.getElementById(`s3node${completedIdx}`); if (completedBtn) { completedBtn.classList.remove('current'); completedBtn.classList.add('done', 'done-full'); if (!completedBtn.querySelector('.done-badge')) { const badge = document.createElement('div'); badge.className = 'done-badge'; badge.textContent = '✓'; completedBtn.appendChild(badge); } const wrap = completedBtn.closest('.node'); if (wrap) wrap.classList.remove('is-cur'); completedBtn.style.animation = 'floatNode 3.2s ease-in-out infinite'; } const totalStages3 = STAGES3.length; const pct3 = Math.round((state3.completed.length / totalStages3) * 100); const xpBar3 = document.getElementById('xpBar3'); if (xpBar3) xpBar3.style.width = pct3 + '%'; setTimeout(remapTrail3, 100); }

/* ══════════════════════════════════════════ SECTION 4 ══════════════════════════════════════════ */
function openStage4(stageIdx, btn) { doRipple(btn); const stageData = STAGES4[stageIdx]; if (!stageData || Object.keys(stageData.levels).length === 0) { showToast('هذه المرحلة فارغة'); return; } state4.chatStage = stageIdx; state4.chatLevel = 0; state4.chatDone = false; stagePillText.textContent = stageData.stageLabel; chatBody.innerHTML = ''; btnReply.classList.add('hidden'); btnClose.classList.add('hidden'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; overlay.dataset.section = '4'; setTimeout(() => startChat4(stageIdx), 300); }
function startChat4(stageIdx) { const stageData = STAGES4[stageIdx]; state4.chatLevel = 1; addProgressDots4(stageIdx); showTyping(() => { addPhiloMsg(stageData.levels[1].message); updateProgressDots4(stageIdx, 1); showReplyIfMore4(stageIdx, 1); }); }
function showReplyIfMore4(stageIdx, level) { const stageData = STAGES4[stageIdx]; const totalLevels = Object.keys(stageData.levels).length; const levelData = stageData.levels[level]; if (level < totalLevels && levelData && levelData.forwardOption) { btnReply.textContent = ''; btnReply.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.3)" stroke-width=".8"/><polyline points="14 17 8 12 14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> ${levelData.forwardOption.label}`; btnReply.classList.remove('hidden'); btnClose.classList.add('hidden'); } else { btnReply.classList.add('hidden'); showFinishBanner4(stageIdx); } }
function showFinishBanner4(stageIdx) { state4.chatDone = true; if (!state4.completed.includes(stageIdx)) { state4.completed.push(stageIdx); markStageDone4(stageIdx); } setTimeout(() => { const banner = document.createElement('div'); banner.className = 'finish-banner'; banner.innerHTML = `<div class="fi-icon">🎉</div><div class="fi-title">أحسنت! أكملت المرحلة</div><div class="fi-sub">يمكنك الرجوع للمسار والمتابعة</div>`; chatBody.appendChild(banner); chatBody.scrollTop = chatBody.scrollHeight; btnClose.classList.remove('hidden'); }, 400); }
function markStageDone4(completedIdx) { const completedBtn = document.getElementById(`s4node${completedIdx}`); if (completedBtn) { completedBtn.classList.remove('current'); completedBtn.classList.add('done', 'done-full'); if (!completedBtn.querySelector('.done-badge')) { const badge = document.createElement('div'); badge.className = 'done-badge'; badge.textContent = '✓'; completedBtn.appendChild(badge); } const wrap = completedBtn.closest('.node'); if (wrap) wrap.classList.remove('is-cur'); completedBtn.style.animation = 'floatNode 3.2s ease-in-out infinite'; } const totalStages4 = STAGES4.length; const pct4 = Math.round((state4.completed.length / totalStages4) * 100); const xpBar4 = document.getElementById('xpBar4'); if (xpBar4) xpBar4.style.width = pct4 + '%'; setTimeout(remapTrail4, 100); }

/* ══════════════════════════════════════════ SECTION 5: الخير والسعادة ══════════════════════════════════════════ */
function openStage5(stageIdx, btn) {
  doRipple(btn);
  const stageData = STAGES5[stageIdx];
  if (!stageData || Object.keys(stageData.levels).length === 0) { showToast('هذه المرحلة فارغة'); return; }
  state5.chatStage = stageIdx;
  state5.chatLevel = 0;
  state5.chatDone = false;
  stagePillText.textContent = stageData.stageLabel;
  chatBody.innerHTML = '';
  btnReply.classList.add('hidden');
  btnClose.classList.add('hidden');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.dataset.section = '5';
  setTimeout(() => startChat5(stageIdx), 300);
}
function startChat5(stageIdx) {
  const stageData = STAGES5[stageIdx];
  state5.chatLevel = 1;
  addProgressDots5(stageIdx);
  showTyping(() => {
    addPhiloMsg(stageData.levels[1].message);
    updateProgressDots5(stageIdx, 1);
    showReplyIfMore5(stageIdx, 1);
  });
}
function showReplyIfMore5(stageIdx, level) {
  const stageData = STAGES5[stageIdx];
  const totalLevels = Object.keys(stageData.levels).length;
  const levelData = stageData.levels[level];
  if (level < totalLevels && levelData && levelData.forwardOption) {
    btnReply.textContent = '';
    btnReply.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" style="flex-shrink:0"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.3)" stroke-width=".8"/><polyline points="14 17 8 12 14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg> ${levelData.forwardOption.label}`;
    btnReply.classList.remove('hidden');
    btnClose.classList.add('hidden');
  } else {
    btnReply.classList.add('hidden');
    showFinishBanner5(stageIdx);
  }
}
function showFinishBanner5(stageIdx) {
  state5.chatDone = true;
  if (!state5.completed.includes(stageIdx)) {
    state5.completed.push(stageIdx);
    markStageDone5(stageIdx);
  }
  setTimeout(() => {
    const banner = document.createElement('div');
    banner.className = 'finish-banner';
    banner.innerHTML = `<div class="fi-icon">🎉</div><div class="fi-title">أحسنت! أكملت المرحلة</div><div class="fi-sub">يمكنك الرجوع للمسار والمتابعة</div>`;
    chatBody.appendChild(banner);
    chatBody.scrollTop = chatBody.scrollHeight;
    btnClose.classList.remove('hidden');
  }, 400);
}
function markStageDone5(completedIdx) {
  const completedBtn = document.getElementById(`s5node${completedIdx}`);
  if (completedBtn) {
    completedBtn.classList.remove('current');
    completedBtn.classList.add('done', 'done-full');
    if (!completedBtn.querySelector('.done-badge')) {
      const badge = document.createElement('div');
      badge.className = 'done-badge';
      badge.textContent = '✓';
      completedBtn.appendChild(badge);
    }
    const wrap = completedBtn.closest('.node');
    if (wrap) wrap.classList.remove('is-cur');
    completedBtn.style.animation = 'floatNode 3.2s ease-in-out infinite';
  }
  const totalStages5 = STAGES5.length;
  const pct5 = Math.round((state5.completed.length / totalStages5) * 100);
  const xpBar5 = document.getElementById('xpBar5');
  if (xpBar5) xpBar5.style.width = pct5 + '%';
  setTimeout(remapTrail5, 100);
}

/* ══════════════════════════════════════════ PROGRESS DOTS ══════════════════════════════════════════ */
function addProgressDots(stageIdx) { const total = Object.keys(STAGES[stageIdx].levels).length; const row = document.createElement('div'); row.className = 'progress-bar-row'; row.id = 'progRow'; for (let i = 1; i <= total; i++) { const d = document.createElement('div'); d.className = 'prog-dot'; d.id = `prog-${i}`; row.appendChild(d); } chatBody.appendChild(row); }
function updateProgressDots(stageIdx, currentLevel) { const total = Object.keys(STAGES[stageIdx].levels).length; for (let i = 1; i <= total; i++) { const d = document.getElementById(`prog-${i}`); if (d) d.classList.toggle('active', i <= currentLevel); } }
function addProgressDots2(stageIdx) { const total = Object.keys(STAGES2[stageIdx].levels).length; const row = document.createElement('div'); row.className = 'progress-bar-row'; row.id = 'progRow'; for (let i = 1; i <= total; i++) { const d = document.createElement('div'); d.className = 'prog-dot'; d.id = `prog-${i}`; row.appendChild(d); } chatBody.appendChild(row); }
function updateProgressDots2(stageIdx, currentLevel) { const total = Object.keys(STAGES2[stageIdx].levels).length; for (let i = 1; i <= total; i++) { const d = document.getElementById(`prog-${i}`); if (d) d.classList.toggle('active', i <= currentLevel); } }
function addProgressDots3(stageIdx) { const total = Object.keys(STAGES3[stageIdx].levels).length; const row = document.createElement('div'); row.className = 'progress-bar-row'; row.id = 'progRow'; for (let i = 1; i <= total; i++) { const d = document.createElement('div'); d.className = 'prog-dot'; d.id = `prog-${i}`; row.appendChild(d); } chatBody.appendChild(row); }
function updateProgressDots3(stageIdx, currentLevel) { const total = Object.keys(STAGES3[stageIdx].levels).length; for (let i = 1; i <= total; i++) { const d = document.getElementById(`prog-${i}`); if (d) d.classList.toggle('active', i <= currentLevel); } }
function addProgressDots4(stageIdx) { const total = Object.keys(STAGES4[stageIdx].levels).length; const row = document.createElement('div'); row.className = 'progress-bar-row'; row.id = 'progRow'; for (let i = 1; i <= total; i++) { const d = document.createElement('div'); d.className = 'prog-dot'; d.id = `prog-${i}`; row.appendChild(d); } chatBody.appendChild(row); }
function updateProgressDots4(stageIdx, currentLevel) { const total = Object.keys(STAGES4[stageIdx].levels).length; for (let i = 1; i <= total; i++) { const d = document.getElementById(`prog-${i}`); if (d) d.classList.toggle('active', i <= currentLevel); } }
function addProgressDots5(stageIdx) { const total = Object.keys(STAGES5[stageIdx].levels).length; const row = document.createElement('div'); row.className = 'progress-bar-row'; row.id = 'progRow'; for (let i = 1; i <= total; i++) { const d = document.createElement('div'); d.className = 'prog-dot'; d.id = `prog-${i}`; row.appendChild(d); } chatBody.appendChild(row); }
function updateProgressDots5(stageIdx, currentLevel) { const total = Object.keys(STAGES5[stageIdx].levels).length; for (let i = 1; i <= total; i++) { const d = document.getElementById(`prog-${i}`); if (d) d.classList.toggle('active', i <= currentLevel); } }

/* ══════════════════════════════════════════ MESSAGES ══════════════════════════════════════════ */
function formatText(txt) { return txt.split('\n').filter(l => l.trim()).map(l => `<p>${l.trim()}</p>`).join(''); }
function addPhiloMsg(text) { const d = document.createElement('div'); d.className = 'msg philo'; d.innerHTML = `<div class="msg-bubble">${formatText(text)}</div><div class="msg-time">${timeNow()}</div>`; chatBody.appendChild(d); chatBody.scrollTop = chatBody.scrollHeight; }
function addUserMsg(text) { const d = document.createElement('div'); d.className = 'msg user'; d.innerHTML = `<div class="msg-bubble"><p>${text}</p></div><div class="msg-time">${timeNow()}</div>`; chatBody.appendChild(d); chatBody.scrollTop = chatBody.scrollHeight; }
function showTyping(callback) { state.typing = true; const t = document.createElement('div'); t.className = 'typing-ind'; t.id = 'typer'; for (let i = 0; i < 3; i++) { const d = document.createElement('div'); d.className = 't-dot'; t.appendChild(d); } chatBody.appendChild(t); chatBody.scrollTop = chatBody.scrollHeight; setTimeout(() => { t.remove(); state.typing = false; callback(); }, 1400); }
function timeNow() { return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); }

/* ══════════════════════════════════════════ UTILS ══════════════════════════════════════════ */
function doRipple(btn) { const r = document.createElement('span'); r.className = 'ripple-el'; btn.appendChild(r); setTimeout(() => r.remove(), 460); }
function showToast(msg) { let t = document.getElementById('toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; t.style.cssText = `position:fixed; bottom:90px; left:50%; transform:translateX(-50%) translateY(10px); background:rgba(30,30,30,.92); color:#fff; border-radius:99px; padding:10px 20px; font-size:13px; font-family:'Cairo',sans-serif; font-weight:600; z-index:99999; opacity:0; transition:all .3s ease; white-space:nowrap; backdrop-filter:blur(10px);`; document.body.appendChild(t); } t.textContent = msg; t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; clearTimeout(t._timer); t._timer = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(10px)'; }, 2200); }

/* ══════════════════════════════════════════ TRAIL REMAP ══════════════════════════════════════════ */
function remapTrail() { const rows = document.querySelectorAll('.path-col .row'); if (rows.length < 2) return; const area = document.querySelector('.path-area'); const aRect = area.getBoundingClientRect(); const vw = 390, scale = aRect.width / vw; function cx(row, side) { const r = row.getBoundingClientRect(); const x = (r.left - aRect.left + (side === 'l' ? r.width * .32 : side === 'r' ? r.width * .68 : r.width * .5)); return x / scale; } function cy(row) { const r = row.getBoundingClientRect(); return (r.top - aRect.top + r.height * .5) / scale; } const r = rows; const segments = [`M ${cx(r[0],'l')} ${cy(r[0])} C ${cx(r[0],'l')} ${cy(r[0])+48} ${cx(r[1],'r')} ${cy(r[1])-48} ${cx(r[1],'r')} ${cy(r[1])}`, `M ${cx(r[1],'r')} ${cy(r[1])} C ${cx(r[1],'r')} ${cy(r[1])+50} ${cx(r[2],'c')} ${cy(r[2])-50} ${cx(r[2],'c')} ${cy(r[2])}`, `M ${cx(r[2],'c')} ${cy(r[2])} C ${cx(r[2],'c')} ${cy(r[2])+50} ${cx(r[3],'c')} ${cy(r[3])-50} ${cx(r[3],'c')} ${cy(r[3])}`]; segments.forEach((d, i) => { const seg = document.getElementById(`pSeg${i + 1}`); if (seg) { seg.setAttribute('d', d); if (state.completed.includes(i)) { seg.setAttribute('stroke', 'url(#gDone)'); seg.setAttribute('stroke-dasharray', '1 0'); seg.setAttribute('filter', 'url(#glow)'); } } }); }
function remapTrail2() { const rows = document.querySelectorAll('#pathCol2 .row'); if (rows.length < 2) return; const area = document.querySelector('#section2 .path-area'); if (!area) return; const aRect = area.getBoundingClientRect(); const vw = 390, scale = aRect.width / vw; function cx(row, side) { const r = row.getBoundingClientRect(); const x = (r.left - aRect.left + (side === 'l' ? r.width * .32 : side === 'r' ? r.width * .68 : r.width * .5)); return x / scale; } function cy(row) { const r = row.getBoundingClientRect(); return (r.top - aRect.top + r.height * .5) / scale; } const r = rows; const segments = [`M ${cx(r[0],'l')} ${cy(r[0])} C ${cx(r[0],'l')} ${cy(r[0])+48} ${cx(r[1],'r')} ${cy(r[1])-48} ${cx(r[1],'r')} ${cy(r[1])}`, `M ${cx(r[1],'r')} ${cy(r[1])} C ${cx(r[1],'r')} ${cy(r[1])+50} ${cx(r[2],'c')} ${cy(r[2])-50} ${cx(r[2],'c')} ${cy(r[2])}`]; segments.forEach((d, i) => { const seg = document.getElementById(`pSeg2-${i + 1}`); if (seg) { seg.setAttribute('d', d); if (state2.completed.includes(i)) { seg.setAttribute('stroke', 'url(#gDone2)'); seg.setAttribute('stroke-dasharray', '1 0'); seg.setAttribute('filter', 'url(#glow2)'); } } }); }
function remapTrail3() { const rows = document.querySelectorAll('#pathCol3 .row'); if (rows.length < 2) return; const area = document.querySelector('#section3 .path-area'); if (!area) return; const aRect = area.getBoundingClientRect(); const vw = 390, scale = aRect.width / vw; function cx(row, side) { const r = row.getBoundingClientRect(); const x = (r.left - aRect.left + (side === 'l' ? r.width * .32 : side === 'r' ? r.width * .68 : r.width * .5)); return x / scale; } function cy(row) { const r = row.getBoundingClientRect(); return (r.top - aRect.top + r.height * .5) / scale; } const r = rows; const segments = [`M ${cx(r[0],'l')} ${cy(r[0])} C ${cx(r[0],'l')} ${cy(r[0])+48} ${cx(r[1],'r')} ${cy(r[1])-48} ${cx(r[1],'r')} ${cy(r[1])}`, `M ${cx(r[1],'r')} ${cy(r[1])} C ${cx(r[1],'r')} ${cy(r[1])+50} ${cx(r[2],'c')} ${cy(r[2])-50} ${cx(r[2],'c')} ${cy(r[2])}`, `M ${cx(r[2],'c')} ${cy(r[2])} C ${cx(r[2],'c')} ${cy(r[2])+50} ${cx(r[3],'c')} ${cy(r[3])-50} ${cx(r[3],'c')} ${cy(r[3])}`]; segments.forEach((d, i) => { const seg = document.getElementById(`pSeg3-${i + 1}`); if (seg) { seg.setAttribute('d', d); if (state3.completed.includes(i)) { seg.setAttribute('stroke', 'url(#gDone3)'); seg.setAttribute('stroke-dasharray', '1 0'); seg.setAttribute('filter', 'url(#glow3)'); } } }); }
function remapTrail4() { const rows = document.querySelectorAll('#pathCol4 .row'); if (rows.length < 2) return; const area = document.querySelector('#section4 .path-area'); if (!area) return; const aRect = area.getBoundingClientRect(); const vw = 390, scale = aRect.width / vw; function cx(row, side) { const r = row.getBoundingClientRect(); const x = (r.left - aRect.left + (side === 'l' ? r.width * .32 : side === 'r' ? r.width * .68 : r.width * .5)); return x / scale; } function cy(row) { const r = row.getBoundingClientRect(); return (r.top - aRect.top + r.height * .5) / scale; } const r = rows; const segments = [`M ${cx(r[0],'l')} ${cy(r[0])} C ${cx(r[0],'l')} ${cy(r[0])+48} ${cx(r[1],'r')} ${cy(r[1])-48} ${cx(r[1],'r')} ${cy(r[1])}`, `M ${cx(r[1],'r')} ${cy(r[1])} C ${cx(r[1],'r')} ${cy(r[1])+50} ${cx(r[2],'c')} ${cy(r[2])-50} ${cx(r[2],'c')} ${cy(r[2])}`, `M ${cx(r[2],'c')} ${cy(r[2])} C ${cx(r[2],'c')} ${cy(r[2])+50} ${cx(r[3],'c')} ${cy(r[3])-50} ${cx(r[3],'c')} ${cy(r[3])}`]; segments.forEach((d, i) => { const seg = document.getElementById(`pSeg4-${i + 1}`); if (seg) { seg.setAttribute('d', d); if (state4.completed.includes(i)) { seg.setAttribute('stroke', 'url(#gDone4)'); seg.setAttribute('stroke-dasharray', '1 0'); seg.setAttribute('filter', 'url(#glow4)'); } } }); }
function remapTrail5() { const rows = document.querySelectorAll('#pathCol5 .row'); if (rows.length < 2) return; const area = document.querySelector('#section5 .path-area'); if (!area) return; const aRect = area.getBoundingClientRect(); const vw = 390, scale = aRect.width / vw; function cx(row, side) { const r = row.getBoundingClientRect(); const x = (r.left - aRect.left + (side === 'l' ? r.width * .32 : side === 'r' ? r.width * .68 : r.width * .5)); return x / scale; } function cy(row) { const r = row.getBoundingClientRect(); return (r.top - aRect.top + r.height * .5) / scale; } const r = rows; const segments = [`M ${cx(r[0],'l')} ${cy(r[0])} C ${cx(r[0],'l')} ${cy(r[0])+48} ${cx(r[1],'r')} ${cy(r[1])-48} ${cx(r[1],'r')} ${cy(r[1])}`, `M ${cx(r[1],'r')} ${cy(r[1])} C ${cx(r[1],'r')} ${cy(r[1])+50} ${cx(r[2],'c')} ${cy(r[2])-50} ${cx(r[2],'c')} ${cy(r[2])}`, `M ${cx(r[2],'c')} ${cy(r[2])} C ${cx(r[2],'c')} ${cy(r[2])+50} ${cx(r[3],'c')} ${cy(r[3])-50} ${cx(r[3],'c')} ${cy(r[3])}`]; segments.forEach((d, i) => { const seg = document.getElementById(`pSeg5-${i + 1}`); if (seg) { seg.setAttribute('d', d); if (state5.completed.includes(i)) { seg.setAttribute('stroke', 'url(#gDone5)'); seg.setAttribute('stroke-dasharray', '1 0'); seg.setAttribute('filter', 'url(#glow5)'); } } }); }
setTimeout(() => { remapTrail(); remapTrail2(); remapTrail3(); remapTrail4(); remapTrail5(); }, 100);
window.addEventListener('resize', () => { remapTrail(); remapTrail2(); remapTrail3(); remapTrail4(); remapTrail5(); });

/* ══════════════════════════════════════════ INIT ══════════════════════════════════════════ */
document.getElementById('node0').classList.remove('locked'); document.getElementById('node0').classList.add('current'); document.getElementById('nodeWrap0').classList.add('is-cur');
['node1', 'node2'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.classList.remove('locked'); btn.classList.add('current'); btn.style.cursor = 'pointer'; } });
['challengeDivider', 'section2', 'challengeDivider3', 'section3', 'challengeDivider4', 'section4', 'challengeDivider5', 'section5'].forEach(id => { const el = document.getElementById(id); if (el) { el.style.opacity = '1'; el.style.filter = 'none'; el.style.pointerEvents = 'auto'; } });
['s2node0', 's2node1', 's2node2'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.classList.remove('locked'); btn.classList.add('current'); btn.style.cursor = 'pointer'; } });
['s3node0', 's3node1', 's3node2', 's3node3'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.classList.remove('locked'); btn.classList.add('current'); btn.style.cursor = 'pointer'; } });
['s4node0', 's4node1', 's4node2', 's4node3'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.classList.remove('locked'); btn.classList.add('current'); btn.style.cursor = 'pointer'; } });
['s5node0', 's5node1', 's5node2', 's5node3'].forEach(id => { const btn = document.getElementById(id); if (btn) { btn.classList.remove('locked'); btn.classList.add('current'); btn.style.cursor = 'pointer'; } });
setTimeout(() => { remapTrail2(); remapTrail3(); remapTrail4(); remapTrail5(); }, 200);

/* ══════════════════════════════════════════ DOCS PAGE DATA ══════════════════════════════════════════ */
const DT_COURS = [
  { title: "الأنية والغيرية", sub: "درس فلسفي يعرّف بمفهوم الأنية وعلاقتها بالغير", meta: "درس كامل", pct: 0, ico: "🌍", faIcon: "fa-solid fa-globe-africa", strip: "#8b5cf6", icoBg: "#f5f3ff", pdfUrl: "https://drive.google.com/file/d/1lgQtrt8w5feiJ4pV9lhP0laKfLq5OX8j/preview", docs: [] },
  { title: "الخصوصية والكونية", sub: "درس فلسفي يدرس العلاقة بين الخصوصية الثقافية والكونية الإنسانية", meta: "درس كامل", pct: 0, ico: "🌍", faIcon: "fa-solid fa-globe-africa", strip: "#8b5cf6", icoBg: "#f5f3ff", pdfUrl: "https://drive.google.com/file/d/1yMiRH-usumvip9CsYp_FLq5fJzBa_Byt/preview", docs: [] },
  { title: "النمذجة", sub: "درس فلسفي يوضّح مفهوم النمذجة باعتبارها أداة معرفية", meta: "درس كامل", pct: 0, ico: "🔬", faIcon: "fa-solid fa-diagram-project", strip: "#0ea5e9", icoBg: "#e0f2fe", pdfUrl: "https://drive.google.com/file/d/1i03yMC4njP9235OBnL3v28M2saaN31BD/preview", docs: [] },
  { title: "الدولة", sub: "درس فلسفي يتناول مفهوم الدولة، الاستبداد، الديمقراطية، والمواطنة الكونية", meta: "4 مراحل", pct: 0, ico: "🏛️", faIcon: "fa-solid fa-landmark", strip: "#10b981", icoBg: "#ecfdf5", pdfUrl: "https://drive.google.com/file/d/1qP6RKVc357OpP8BUjMxuu8evtNHaa0Cv/preview", docs: [] },
  { title: "خير وسعادة", sub: "درس فلسفي في الأخلاق: العلاقة بين الخير والسعادة عند أرسطو، كانط، وأبيقور", meta: "4 مراحل", pct: 0, ico: "🌟", faIcon: "fa-solid fa-star", strip: "#f97316", icoBg: "#fff7ed", pdfUrl: "https://drive.google.com/file/d/1zTmk3QWQ7adOYD0NOaRCMX0L09xEwmo9/preview", docs: [] }
];

const DT_EXERCICES = [
   { title: "الأنية والغيرية", sub: "درس فلسفة", meta: "1 وثائق", pct: 0, ico: "🧩", faIcon: "fa-solid fa-diagram-project", strip: "#8b5cf6", icoBg: "#f5f3ff", docs: [{ name: "تمارين مع الإصلاح", type: "pdf", driveId: "1egBp-8_IzGrrrjEKnpDDnR3xItxMyIFp" }] },
  { title: "الخصوصية والكونية", sub: "درس فلسفة", meta: "6 وثائق", pct: 0, ico: "🌍", faIcon: "fa-solid fa-globe", strip: "#3b82f6", icoBg: "#eff6ff", docs: [{ name: "فقرة: الخصوصية والكونية", type: "pdf", driveId: "1TLK9pZ36ZhYl2BFgI3wRwOdskWZqMR--" }, { name: "تمارين باك (1)", type: "pdf", driveId: "1znKznhFSEeh41qTHwqU_8wCb1bKlI0Kr" }, { name: "تمارين باك (2)", type: "pdf", driveId: "1Mi1itwHIIB_6rE62zxuBTQ0j8SPxE2Xw" }, { name: "تمارين باك (3)", type: "pdf", driveId: "1ktNiRLagWXGjLw3nfE5be7qsbQu6rtk8" }, { name: "تمارين باك (4)", type: "pdf", driveId: "1-Cmsfw1imogld59n4ls0L7HxTeJrEncc" }, { name: "تمارين باك (5)", type: "pdf", driveId: "1n5itg2okXfN73x-MQJ-z6eniFS1F1Bt_" }] },
  { title: "النمذجة", sub: "درس فلسفة", meta: "5 وثائق", pct: 0, ico: "🧩", faIcon: "fa-solid fa-diagram-project", strip: "#8b5cf6", icoBg: "#f5f3ff", docs: [{ name: "تمارين مع الإصلاح", type: "pdf", driveId: "1d7pUS4QD_bFDPZAXiyISTuSA_yM2IvBy" }, { name: "فقرة: النمذجة", type: "pdf", driveId: "1FM5WvkoMu6SlISqnt-sPoiPWy8tOLQ01" }, { name: "تمارين باك (1)", type: "pdf", driveId: "1rdhkWsmFNUhcv7UeUR9o7_nF2-XnofGW" }, { name: "تمارين باك (2)", type: "pdf", driveId: "1IN9b7RuCbjOJtfJ3JH77Xq1LCVf-Bi_X" }, { name: "تمارين باك (3)", type: "pdf", driveId: "1a0y4ge6FH4g85UvNsABM9i65Y9xosPLy" }, { name: "تمارين باك (4)", type: "pdf", driveId: "1J22_4pdNnp7urZ_6r084PMei8CX3tTQ-" }] },
  {
    title: "منهجية الإجابة",
    sub: "منهجية الفلسفة",
    meta: "7 وثائق",
    pct: 0,
    ico: "✍️",
    faIcon: "fa-solid fa-pen",
    strip: "#f59e0b",
    icoBg: "#fffbeb",
    docs: [
      {
        name: "منهجية الإجابة في فرض الفلسفة",
        type: "pdf",
        driveId: "1wkw2Cq5xZ49JZkCPGH7yWoslr5oqNTSL"
      },
      {
        name: "حدّد المسلّمات الضمنية / المفترضات / الضمنيّات",
        type: "pdf",
        driveId: "1zTXmISQAnQ_13N8A3s-PMev9WHRLKyiL"
      },
      {
        name: "ما معنى / ما دلالة / ما المقصود بـ",
        type: "pdf",
        driveId: "1EJS3gWYHVAYnSw6bB2tDknYbfuc6AwHj"
      },
      {
        name: "ماهي الإحراجات / الهواجس / المخاوف / التبعات / المخاطر",
        type: "pdf",
        driveId: "1jT8TNWE62Q4KLZkC3_wIJhej1gNsGrLH"
      },
      {
        name: "حدّد رهانات / غايات / أهداف / ما يريد تحقيقه",
        type: "pdf",
        driveId: "1sN76uUTSL6BFzwXy0kaZY-2366jGejzE"
      },
      {
        name: "ما مدى راهنية / حضور / ملائمة (اليوم)",
        type: "pdf",
        driveId: "14GrDGgzBCW7VkdtAVDvNaFPM9ferNtr4"
      },
      {
        name: "ما وظيفة / ما مهمّة / ما الذي ينجزه",
        type: "pdf",
        driveId: "1Wetb4ZRzEP5obKpnalrVQtrb_gfkH2A_"
      },
      {
        name: "ما قيمة / ما مشروعية / ما وجاهة / ما مدى صحّة",
        type: "pdf",
        driveId: "17G3qAR0RDZmK68EaEAhYw8QKkoYvks6F"
      }
    ]
  },
{ title: "الدولة", sub: "درس فلسفة", meta: "1 وثائق", pct: 0, ico: "🏛️", faIcon: "fa-solid fa-landmark", strip: "#10b981", icoBg: "#ecfdf5", docs: [{ name: "تمارين مع الإصلاح", type: "pdf", driveId: "1D8h_s1sfrkyT1WrMy4GqoBj48Jp9nfXE" }] }
];
function renderDtGrid(data, gridId) {
  const isCours = gridId === 'dtCoursGrid';
  const g = document.getElementById(gridId);
  g.innerHTML = data.map((item, i) => {
    const clickAction = isCours && item.pdfUrl ? `openCoursDirectPdf('${item.pdfUrl}','${item.title}','${item.sub}')` : `openDsSheet(${i},'${gridId}')`;
    const iconContent = item.faIcon ? `<i class="${item.faIcon}"></i>` : item.ico;
    return `<div class="dt-card" style="--dt-strip:${item.strip};--dt-ico-bg:${item.icoBg}" onclick="${clickAction}"><div class="dt-card-ico">${iconContent}</div><div class="dt-card-body"><div class="dt-card-title">${item.title}</div><div class="dt-card-sub"><i class="fa-solid fa-tag"></i>${item.sub}</div><div class="dt-card-meta"><i class="fa-solid fa-file-lines"></i>${item.meta}</div><div class="dt-prog-wrap"><div class="dt-prog-bar" style="width:${item.pct}%"></div></div><div class="dt-prog-lbl">${item.pct}% مكتمل</div></div><div class="dt-card-arrow"><i class="fa-solid fa-chevron-left"></i></div></div>`;
  }).join('');
}
renderDtGrid(DT_COURS, 'dtCoursGrid');
renderDtGrid(DT_EXERCICES, 'dtExoGrid');

function dtSwitchTab(tab) {
  document.querySelectorAll('.dt-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('dtPageCours').style.display = tab === 'cours' ? '' : 'none';
  document.getElementById('dtPageExercices').style.display = tab === 'exercices' ? '' : 'none';
  document.getElementById(tab === 'cours' ? 'dtTabCours' : 'dtTabExercices').classList.add('active');
  document.getElementById('dtScroll').scrollTop = 0;
}

const SVG_FOLDER = `<svg id="fabIcon" width="19" height="19" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="fld" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(255,255,255,.9)"/><stop offset="100%" stop-color="rgba(255,255,255,.6)"/></linearGradient></defs><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="url(#fld)" stroke="rgba(255,255,255,.3)" stroke-width=".6"/><path d="M2 9h20" stroke="rgba(255,255,255,.25)" stroke-width=".8"/><rect x="4" y="5" width="7" height="4" rx="1" fill="rgba(255,255,255,.2)"/></svg>`;
const SVG_CLOSE = `<svg id="fabIcon" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.2)" stroke-width=".8"/><line x1="15" y1="9" x2="9" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/><line x1="9" y1="9" x2="15" y2="15" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`;
let docsPageOpen = false;
function toggleDocsPage() {
  docsPageOpen = !docsPageOpen;
  const btn = document.getElementById('docsFabBtn');
  const lbl = btn.querySelector('.fab-label');
  const iconSlot = btn.querySelector('svg');
  if (docsPageOpen) {
    document.getElementById('docsPage').classList.add('open');
    btn.classList.add('docs-open');
    iconSlot.outerHTML = SVG_CLOSE;
    lbl.textContent = 'المسار';
  } else {
    document.getElementById('docsPage').classList.remove('open');
    btn.classList.remove('docs-open');
    iconSlot.outerHTML = SVG_FOLDER;
    lbl.textContent = 'الدروس';
  }
}
function closeDocsPage() {
  docsPageOpen = false;
  document.getElementById('docsPage').classList.remove('open');
  const btn = document.getElementById('docsFabBtn');
  btn.classList.remove('docs-open');
  const iconSlot = btn.querySelector('svg');
  if (iconSlot) iconSlot.outerHTML = SVG_FOLDER;
  btn.querySelector('.fab-label').textContent = 'الدروس';
}

function openCoursDirectPdf(previewUrl, title, sub) {
  document.getElementById('pdfOvTitle').textContent = title;
  document.getElementById('pdfOvSub').textContent = sub;
  const match = previewUrl.match(/\/d\/([^/]+)\//);
  const driveId = match ? match[1] : '';
  document.getElementById('pdfOvDriveLink').href = driveId ? `https://drive.google.com/file/d/${driveId}/view` : '#';
  document.getElementById('pdfOvDlLink').href = driveId ? `https://drive.google.com/uc?export=download&id=${driveId}` : '#';
  const frame = document.getElementById('pdfFrame');
  const loading = document.getElementById('pdfLoadEl');
  frame.classList.remove('loaded');
  loading.style.display = 'flex';
  frame.src = '';
  document.getElementById('pdfOv').classList.add('open');
  setTimeout(() => {
    frame.src = previewUrl;
    frame.onload = () => { loading.style.display = 'none'; frame.classList.add('loaded'); };
    setTimeout(() => { loading.style.display = 'none'; frame.classList.add('loaded'); }, 5000);
  }, 200);
}

function openDsSheet(idx, gridId) {
  const data = gridId === 'dtCoursGrid' ? DT_COURS : DT_EXERCICES;
  const item = data[idx];
  document.getElementById('dsHdrTitle').textContent = item.title;
  document.getElementById('dsHdrCount').textContent = item.docs.length + ' وثائق';
  document.getElementById('dsMiniIco').textContent = item.ico;
  document.getElementById('dsMiniTitle').textContent = item.title;
  document.getElementById('dsMiniSub').textContent = item.sub;
  const list = document.getElementById('dsList');
  list.innerHTML = item.docs.map((doc) => {
    const cls = doc.type === 'pdf' ? 'pdf' : 'img';
    const ico = doc.type === 'pdf' ? `<i class="fa-solid fa-file-pdf"></i>` : `<i class="fa-solid fa-image"></i>`;
    return `<div class="ds-doc" onclick="openPdfOv('${doc.driveId}','${doc.name}','${item.sub}')"><div class="ds-doc-ico ${cls}">${ico}</div><div class="ds-doc-info"><div class="ds-doc-name">${doc.name}</div><div class="ds-doc-meta"><i class="fa-solid fa-cloud" style="margin-left:4px;font-size:10px;"></i>PDF · Google Drive</div></div><div class="ds-doc-open"><i class="fa-solid fa-arrow-up-right-from-square" style="font-size:11px;"></i></div></div>`;
  }).join('');
  document.getElementById('dsOverlay').classList.add('open');
  document.getElementById('dsSheet').classList.add('open');
}
function closeDsSheet() {
  document.getElementById('dsOverlay').classList.remove('open');
  document.getElementById('dsSheet').classList.remove('open');
}

function openPdfOv(driveId, name, sub) {
  document.getElementById('pdfOvTitle').textContent = name;
  document.getElementById('pdfOvSub').textContent = sub;
  const previewUrl = `https://drive.google.com/file/d/${driveId}/preview`;
  const driveUrl = `https://drive.google.com/file/d/${driveId}/view`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveId}`;
  document.getElementById('pdfOvDriveLink').href = driveUrl;
  document.getElementById('pdfOvDlLink').href = downloadUrl;
  const frame = document.getElementById('pdfFrame');
  const loading = document.getElementById('pdfLoadEl');
  frame.classList.remove('loaded');
  loading.style.display = 'flex';
  frame.src = '';
  document.getElementById('pdfOv').classList.add('open');
  setTimeout(() => {
    frame.src = previewUrl;
    frame.onload = () => { loading.style.display = 'none'; frame.classList.add('loaded'); };
    setTimeout(() => { loading.style.display = 'none'; frame.classList.add('loaded'); }, 5000);
  }, 200);
}
function closePdfOv() {
  document.getElementById('pdfOv').classList.remove('open');
  setTimeout(() => { document.getElementById('pdfFrame').src = ''; }, 400);
}
document.getElementById('pdfOv').addEventListener('click', (e) => { if (e.target === document.getElementById('pdfOv')) closePdfOv(); });
