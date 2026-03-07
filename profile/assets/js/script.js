
function showSection(id, linkEl) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const dn = document.getElementById('nav-' + id);
  if (dn) dn.classList.add('active');
  document.querySelectorAll('.mobile-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === id);
  });
  setTimeout(triggerReveal, 120);
  if (id === 'home') setTimeout(animateBars, 500);
  return false;
}

function triggerReveal() {
  const sec = document.querySelector('section.active');
  if (!sec) return;
  sec.querySelectorAll('.reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 55);
  });
}

function animateBars() {
  document.querySelectorAll('.prog-fill').forEach(b => b.classList.add('go'));
}

function toggleLesson(card) {
  const open = card.classList.contains('open');
  document.querySelectorAll('.lesson-card').forEach(c => c.classList.remove('open'));
  if (!open) card.classList.add('open');
}

function toggleGrammar(card) {
  const open = card.classList.contains('open');
  document.querySelectorAll('.grammar-card').forEach(c => c.classList.remove('open'));
  if (!open) card.classList.add('open');
}

function openModal(title, url) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  document.getElementById('modalTitle').textContent = title;
  if (url && url.trim() !== '') {
    body.innerHTML = `<iframe src="${url}" allowfullscreen loading="lazy"></iframe>`;
  } else {
    // Placeholder shown when no PDF URL is set yet
    body.innerHTML = `
      <div style="padding:40px 32px;font-family:'Jost',sans-serif;min-height:300px;">
        <div style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px;padding:20px 0 32px;">
          <div style="width:72px;height:72px;border-radius:16px;background:#FBF4E4;border:2px solid rgba(184,137,42,0.3);display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-file-pdf" style="font-size:2rem;color:#B8892A;"></i>
          </div>
          <div>
            <h3 style="font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:700;color:#1B2A4A;margin-bottom:8px;">${title}</h3>
            <p style="font-size:0.88rem;color:#6B6459;line-height:1.7;max-width:460px;font-family:'Libre Baskerville',serif;font-style:italic;">
              The PDF for this course is not linked yet. To add your PDF, replace the empty string in the button's 
              <code style="background:#F3F2ED;padding:2px 7px;border-radius:5px;font-style:normal;font-size:0.82em;color:#1B2A4A;">openModal()</code> 
              call with your Google Drive embed link.
            </p>
          </div>
        </div>
        <div style="background:#F3F2ED;border:1px solid #E0DDD5;border-radius:12px;padding:20px 24px;">
          <div style="font-size:0.76rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#9C9488;margin-bottom:10px;">How to add your PDF</div>
          <ol style="font-size:0.84rem;color:#3C3830;line-height:1.9;padding-left:18px;">
            <li>Upload your PDF to <strong>Google Drive</strong></li>
            <li>Click <em>Share → Anyone with the link → Viewer</em></li>
            <li>Copy the link and change <code style="background:#E0DDD5;padding:1px 6px;border-radius:4px;">/view</code> to <code style="background:#E0DDD5;padding:1px 6px;border-radius:4px;">/preview</code></li>
            <li>Paste the URL as the 2nd parameter of <code style="background:#E0DDD5;padding:1px 6px;border-radius:4px;">openModal()</code></li>
          </ol>
        </div>
      </div>`;
  }
  overlay.classList.add('open');
  requestAnimationFrame(() => overlay.classList.add('visible'));
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('visible');
  setTimeout(() => { overlay.classList.remove('open'); document.getElementById('modalBody').innerHTML = ''; }, 300);
}
function handleOverlayClick(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

let activeType = 'all', activeQuery = '';
function filterWriting(q) { activeQuery = q.toLowerCase().trim(); applyFilter(); }
function filterByType(type, btn) {
  activeType = type;
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  applyFilter();
}
function applyFilter() {
  const cards = document.querySelectorAll('.writing-card');
  let visible = 0;
  cards.forEach(card => {
    const t = (card.dataset.title || '').toLowerCase();
    const ty = (card.dataset.type || '').toLowerCase();
    const h = card.querySelector('h3').textContent.toLowerCase();
    const p = card.querySelector('p').textContent.toLowerCase();
    const ok = (activeType === 'all' || ty === activeType) && (!activeQuery || t.includes(activeQuery) || h.includes(activeQuery) || p.includes(activeQuery));
    card.style.display = ok ? '' : 'none';
    if (ok) visible++;
  });
  document.getElementById('emptyState').style.display = visible === 0 ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', () => { triggerReveal(); animateBars(); });
document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
