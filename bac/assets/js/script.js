
const pfill = document.getElementById('progress-fill');
window.addEventListener('scroll', () => {
  const d = document.documentElement;
  pfill.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
});
const hbg = document.getElementById('hamburger');
const drw = document.getElementById('mobileDrawer');
const movl = document.getElementById('mobileOverlay');
function toggleMenu(o){ hbg.classList.toggle('open',o); drw.classList.toggle('open',o); movl.classList.toggle('open',o); document.body.style.overflow=o?'hidden':''; }
hbg.addEventListener('click',()=>toggleMenu(!drw.classList.contains('open')));
movl.addEventListener('click',()=>toggleMenu(false));
drw.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>toggleMenu(false)));
const PAGE_URL = window.location.href;
const PAGE_TITLE = 'Réflexe Myotatique — Cours BAC SVT';
function shareOn(plat) {
  const msg = `📚 Cours SVT BAC : "${PAGE_TITLE}"\n\nRéflexe rotulien, potentiel d'action, propagation de l'influx, synapse — cours complet pour le Bac Sciences.\n\n🔗 ${PAGE_URL}\n\n— sahllearn.org · Jamais Plus Simple 🎓`;
  if (plat === 'facebook') window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(PAGE_URL),'_blank','width=620,height=520');
  else if (plat === 'whatsapp') window.open('https://wa.me/?text='+encodeURIComponent(msg),'_blank');
  else if (plat === 'twitter') window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(`📚 "${PAGE_TITLE}" — Cours SVT BAC\n🔗 ${PAGE_URL}\n#svt #neurophysiologie #bac #sahllearn`),'_blank','width=560,height=440');
}
function copyLink() {
  navigator.clipboard.writeText(PAGE_URL).then(showToast).catch(()=>{
    const ta = document.createElement('textarea');
    ta.value = PAGE_URL; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta); showToast();
  });
}
function showToast() {
  const t = document.getElementById('copyToast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}