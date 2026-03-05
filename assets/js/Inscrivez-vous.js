
  const ws     = document.getElementById('ws');
  const app    = document.getElementById('app');
  const vSI    = document.getElementById('vSI');
  const vSU    = document.getElementById('vSU');
  const modal  = document.getElementById('modal');
  const vidFr  = document.getElementById('vidFr');
  const YT     = 'XSP2LBKky5c';

  /* Welcome → App */
  document.getElementById('btnWS').addEventListener('click', () => {
    ws.classList.add('out');
    setTimeout(() => { ws.style.display = 'none'; app.classList.add('live'); }, 1100);
  });

  /* Nav */
  document.getElementById('toSU').addEventListener('click', e => {
    e.preventDefault(); vSI.classList.remove('on');
    setTimeout(() => { vSU.classList.add('on'); scrollTo({ top:0, behavior:'smooth' }); }, 160);
  });
  document.getElementById('toSI').addEventListener('click', e => {
    e.preventDefault(); vSU.classList.remove('on');
    setTimeout(() => { vSI.classList.add('on'); scrollTo({ top:0, behavior:'smooth' }); }, 160);
  });

  /* Video modal */
  const openVid = () => {
    vidFr.src = `https://www.youtube.com/embed/${YT}?autoplay=1`;
    modal.classList.add('open');
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add('show')));
    document.body.style.overflow = 'hidden';
  };
  const closeVid = () => {
    modal.classList.remove('show');
    setTimeout(() => { modal.classList.remove('open'); vidFr.src = ''; document.body.style.overflow = ''; }, 440);
  };
  document.getElementById('btnHow').addEventListener('click', openVid);
  document.getElementById('closeVid').addEventListener('click', closeVid);
  modal.addEventListener('click', e => { if (e.target === modal) closeVid(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVid(); });
