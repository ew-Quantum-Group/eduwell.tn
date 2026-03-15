
function openTopicSheet(topicId){
  const topic = TOPIC_PACKS[topicId];
  if(!topic) return;

  document.getElementById('topicSheetIcon').textContent = topic.emoji;
  document.getElementById('topicSheetTitle').textContent = topic.title;
  document.getElementById('topicSheetSub').innerHTML =
    `<i class="fa-solid fa-layer-group"></i> ${topic.options.length} pack${topic.options.length>1?'s':''}`;
  document.getElementById('topicSheetFooter').innerHTML =
    `<i class="fa-solid fa-layer-group"></i><span>${topic.options.length} pack${topic.options.length>1?'s':''} disponibles</span>`;

  const scroll = document.getElementById('topicPackScroll');
  scroll.innerHTML = topic.options.map((opt, i) => `
    <a class="pack-link-card" href="${opt.link}" style="animation:nodeIn .3s var(--ease) ${i*45}ms both">
      <div class="pack-link-icon ${opt.color}">
        <i class="fa-solid ${opt.icon}"></i>
      </div>
      <span class="pack-link-name">${opt.title}</span>
      <i class="fa-solid fa-chevron-right pack-link-arrow"></i>
    </a>
  `).join('');

  document.getElementById('topicOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeTopicSheet(e){
  if(e && e.target !== document.getElementById('topicOverlay')) return;
  closeTopicSheetForce();
}
function closeTopicSheetForce(){
  document.getElementById('topicOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════════
   ██  INVITE POPUP
══════════════════════════════════════════════════════ */
const INVITE_LINK = 'sahleducation.netlify.app/topoffers&specialdeals';
const INVITE_MSG  = '🎁 Rejoins-moi sur SVT App et obtiens 25% de réduction ! ' + INVITE_LINK;

function openInvitePopup(){
  document.getElementById('inviteOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  // reset copy button
  const btn  = document.getElementById('inviteCopyBtn');
  const icon = document.getElementById('inviteCopyIcon');
  btn.classList.remove('copied');
  icon.className = 'fa-regular fa-copy';
}

function closeInvitePopup(){
  document.getElementById('inviteOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeInviteOverlay(e){
  if(e && e.target !== document.getElementById('inviteOverlay')) return;
  closeInvitePopup();
}

function copyInviteLink(){
  navigator.clipboard.writeText(INVITE_LINK).then(()=>{
    const btn  = document.getElementById('inviteCopyBtn');
    const icon = document.getElementById('inviteCopyIcon');
    btn.classList.add('copied');
    icon.className = 'fa-solid fa-check';
    setTimeout(()=>{
      btn.classList.remove('copied');
      icon.className = 'fa-regular fa-copy';
    }, 2200);
  }).catch(()=>{
    // fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = INVITE_LINK;
    ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    const btn  = document.getElementById('inviteCopyBtn');
    const icon = document.getElementById('inviteCopyIcon');
    btn.classList.add('copied');
    icon.className = 'fa-solid fa-check';
    setTimeout(()=>{
      btn.classList.remove('copied');
      icon.className = 'fa-regular fa-copy';
    }, 2200);
  });
}

function shareVia(platform){
  // Copy link to clipboard first so user can paste anywhere
  navigator.clipboard.writeText(INVITE_LINK).catch(()=>{
    const ta = document.createElement('textarea');
    ta.value = INVITE_LINK; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  });

  const encodedMsg  = encodeURIComponent(INVITE_MSG);
  const encodedLink = encodeURIComponent(INVITE_LINK);
  let url = '';

  if(platform === 'whatsapp'){
    url = 'https://wa.me/?text=' + encodedMsg;
  } else if(platform === 'facebook'){
    url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodedLink;
  } else if(platform === 'instagram'){
    // Instagram has no direct web share URL — copy link & open app
    showToast('fa-check-circle',
      '✅ Lien copié ! Ouvre Instagram et colle-le dans ta bio ou story.');
    return;
  }

  if(url) window.open(url, '_blank', 'noopener');
}

/* ══════════════════════════════════════════════════════
   ██  FRIEND MODE POPUP
══════════════════════════════════════════════════════ */
function openFriendModePopup(){
  document.getElementById('fmodeOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFmodePopup(){
  document.getElementById('fmodeOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function closeFmodeOverlay(e){
  if(e && e.target !== document.getElementById('fmodeOverlay')) return;
  closeFmodePopup();
}
