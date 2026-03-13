
  // ── Intro animation ──
  const intro = document.getElementById('intro');
  const app   = document.getElementById('app');
  setTimeout(() => {
    intro.classList.add('leaving');
    setTimeout(() => { app.classList.add('visible'); }, 280);
    setTimeout(() => { intro.classList.add('done');  }, 920);
  }, 1650);

  // ── Sahl sheet ──
  function openSheet() {
    document.getElementById('sheetBackdrop').classList.add('open');
    document.getElementById('sahlSheet').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSheet() {
    document.getElementById('sheetBackdrop').classList.remove('open');
    document.getElementById('sahlSheet').classList.remove('open');
    document.body.style.overflow = '';
  }
  // Close on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });