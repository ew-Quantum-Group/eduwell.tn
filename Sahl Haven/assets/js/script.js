
/* ============================================================
   DOCUMENT SEARCH ENGINE — JS (unchanged from original)
   ============================================================ */
(function () {
 

  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'); }
  function highlight(text, q) {
    if (!q) return text;
    return text.replace(new RegExp(`(${escRe(q)})`,'gi'),
      '<span class="doc-highlight">$1</span>');
  }
  function search(q) {
    const norm = q.toLowerCase().trim();
    if (!norm) return [];
    const words = norm.split(/\s+/);
    return resources.map(r => {
      let s = 0;
      if (r.title.toLowerCase().includes(norm))       s += 50;
      if (r.description.toLowerCase().includes(norm)) s += 20;
      r.files.forEach(f => {
        if (f.name.toLowerCase().includes(norm)) s += 15;
      });
      words.forEach(w => {
        if (w.length < 3) return;
        if (r.title.toLowerCase().includes(w))       s += 10;
        if (r.description.toLowerCase().includes(w)) s += 5;
        r.files.forEach(f => {
          if (f.name.toLowerCase().includes(w)) s += 3;
        });
      });
      return { ...r, score: s };
    }).filter(r => r.score > 0).sort((a,b) => b.score - a.score);
  }

  const input     = document.getElementById('docSearchInput');
  const dropdown  = document.getElementById('docResults');
  const spinner   = document.getElementById('docSpinner');
  const searchBtn = document.getElementById('docSearchBtn');
  const tags      = document.querySelectorAll('.doc-tag');

  const overlay   = document.getElementById('docModalOverlay');
  const modalIcon = document.getElementById('docModalIcon');
  const modalTitle= document.getElementById('docModalTitle');
  const modalSub  = document.getElementById('docModalSubtitle');
  const modalBody = document.getElementById('docModalBody');
  const modalClose= document.getElementById('docModalClose');

  function renderResults(results, q) {
    dropdown.innerHTML = '';
    if (results.length === 0) {
      dropdown.innerHTML = `
        <div class="doc-no-results">
          <i class="fas fa-search"></i>
          <p>No results for "<strong>${q}</strong>"</p>
          <small>Try different keywords</small>
        </div>`;
      showDrop();
      return;
    }
    dropdown.innerHTML = `<div class="doc-results-header">${results.length} result${results.length>1?'s':''} found</div>`;
    results.forEach(r => {
      const item = document.createElement('div');
      item.className = 'doc-result-item';
      item.innerHTML = `
        <div class="doc-result-icon"><i class="fas fa-folder-open"></i></div>
        <div class="doc-result-body">
          <div class="doc-result-title">${highlight(r.title, q)}</div>
          <div class="doc-result-desc">${highlight(r.description, q)}</div>
          <div class="doc-result-meta">
            <span><i class="fas fa-file-pdf"></i>${r.files.length} file${r.files.length>1?'s':''}</span>
          </div>
        </div>
        <span class="doc-result-badge">PDF</span>
      `;
      item.addEventListener('click', () => { hideDrop(); openModal(r); });
      dropdown.appendChild(item);
    });
    showDrop();
  }

  function showDrop() { dropdown.classList.add('visible'); }
  function hideDrop() { dropdown.classList.remove('visible'); }

  let timer;
  function runSearch(q) {
    q = q.trim();
    if (!q) { hideDrop(); return; }
    spinner.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(() => {
      spinner.style.display = 'none';
      renderResults(search(q), q);
    }, 350);
  }

  input.addEventListener('input', () => runSearch(input.value));
  searchBtn.addEventListener('click', () => runSearch(input.value));
  input.addEventListener('keydown', e => { if (e.key==='Enter') runSearch(input.value); });

  document.addEventListener('click', e => {
    if (!e.target.closest('.doc-search-wrap')) hideDrop();
  });

  tags.forEach(t => {
    t.addEventListener('click', () => {
      input.value = t.dataset.q;
      input.focus();
      runSearch(t.dataset.q);
    });
  });

  function openModal(r) {
    modalIcon.innerHTML = `<i class="fas fa-folder-open"></i>`;
    modalTitle.textContent = r.title;
    modalSub.innerHTML = `
      <span><i class="fas fa-file-pdf"></i>${r.files.length} file${r.files.length>1?'s':''}</span>
    `;
    modalBody.innerHTML = '';
    const folder = document.createElement('div');
    folder.className = 'doc-folder';
    folder.innerHTML = `
      <div class="doc-folder-header">
        <div class="doc-folder-icon"><i class="fas fa-folder-open"></i></div>
        <div class="doc-folder-name">${r.title}</div>
        <div class="doc-folder-count">${r.files.length} file${r.files.length>1?'s':''}</div>
      </div>
      <div class="doc-pdf-list" id="pdfList_${r.id}"></div>
    `;
    const list = folder.querySelector(`#pdfList_${r.id}`);
    r.files.forEach(f => {
      const item = document.createElement('div');
      item.className = 'doc-pdf-item';
      item.innerHTML = `
        <div class="doc-pdf-item-icon"><i class="fas fa-file-pdf"></i></div>
        <div class="doc-pdf-item-title">${f.name}</div>
        <div class="doc-pdf-item-actions">
          <a href="${f.url}" target="_blank" rel="noopener" class="doc-pdf-btn open">
            <i class="fas fa-external-link-alt"></i> Open
          </a>
          
        </div>
      `;
      list.appendChild(item);
    });
    modalBody.appendChild(folder);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

// ============================================================
// AUTH UI (LOGOUT + USERNAME at BOTTOM) + PRESERVE ORIGINAL FOOTER BADGES
// ============================================================
(function() {
  const AUTH_CONFIG = {
    isLoggedInKey: 'eduwell_svt_isLoggedIn',
    usernameKey: 'eduwell_svt_username',
  };

  function eduwell_isAuthenticated() {
    return localStorage.getItem(AUTH_CONFIG.isLoggedInKey) === 'true';
  }

  function logout() {
    localStorage.removeItem(AUTH_CONFIG.isLoggedInKey);
    localStorage.removeItem(AUTH_CONFIG.usernameKey);
    localStorage.removeItem('eduwell_svt_lastActivity');
    window.location.href = './login.html';
  }

  function updateAuthFooter() {
    const footerBottom = document.getElementById('authFooterContainer');
    if (!footerBottom) return;

    if (eduwell_isAuthenticated()) {
      const username = localStorage.getItem(AUTH_CONFIG.usernameKey) || 'User';
      // Keep original left text + badges + add logout button right
      footerBottom.innerHTML = `
       
        <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
          <span class="footer-badge" style="background: var(--indigo-lt); color: var(--indigo); border: none; padding: 6px 14px;">
            <i class="fas fa-user-circle"></i> ${username}
          </span>
          <button class="footer-badge" id="logoutFooterBtn" style="background: var(--rose-lt); color: var(--rose); border: none; cursor: pointer; padding: 6px 14px;">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
          <span class="footer-badge"><i class="fas fa-lock"></i> SSL Secured</span>
          <span class="footer-badge"><i class="fas fa-shield-alt"></i> GDPR Compliant</span>
          <span class="footer-badge"><i class="fas fa-certificate"></i> SOC 2 Certified</span>
        </div>
      `;
      document.getElementById('logoutFooterBtn')?.addEventListener('click', logout);
    } else {
      // fallback: show only badges (should not happen because auth guard already redirects)
      footerBottom.innerHTML = `
      
        <div class="footer-badges">
          <span class="footer-badge"><i class="fas fa-lock"></i> SSL Secured</span>
          <span class="footer-badge"><i class="fas fa-shield-alt"></i> GDPR Compliant</span>
          <span class="footer-badge"><i class="fas fa-certificate"></i> SOC 2 Certified</span>
        </div>
      `;
    }
  }

  // Execute after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAuthFooter);
  } else {
    updateAuthFooter();
  }

  // Re-run on pageshow (back/forward)
  window.addEventListener('pageshow', updateAuthFooter);
})();

// ============================================================
// ORIGINAL PAGE SCRIPTS (reveal, cards, drag, stat counters)
// ============================================================
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

const cardObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.fc, .vc, .testi-card');
      cards.forEach((c, i) => {
        const delay = parseInt(c.dataset.delay || 0) * 80;
        c.style.opacity = '0'; c.style.transform = 'translateY(28px)';
        c.style.transition = `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${80 + i * 75 + delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${80 + i * 75 + delay}ms`;
        setTimeout(() => { c.style.opacity = '1'; c.style.transform = 'translateY(0)'; }, 80);
      });
      cardObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.04 });
document.querySelectorAll('.feat-grid, .vgrid, .testi-grid').forEach(g => {
  g.querySelectorAll('.fc, .vc, .testi-card').forEach(c => c.style.opacity = '0');
  cardObs.observe(g);
});

const track = document.getElementById('htrack');
let isDown = false, startX, scrollL;
track.addEventListener('mousedown', e => { isDown = true; track.classList.add('dragging'); startX = e.pageX - track.offsetLeft; scrollL = track.scrollLeft; });
window.addEventListener('mouseup', () => { isDown = false; track.classList.remove('dragging'); });
track.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); track.scrollLeft = scrollL - (e.pageX - track.offsetLeft - startX) * 1.6; });

const statNums = document.querySelectorAll('.stat-num');
const numObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const suffix = el.querySelector('span')?.textContent || '';
      const baseText = el.textContent.replace(suffix, '').trim();
      const isInt = !baseText.includes('.');
      const target = parseFloat(baseText);
      const dur = 1400; const start = performance.now();
      function update(now) {
        const t = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        const val = target * ease;
        el.innerHTML = (isInt ? Math.round(val) : val.toFixed(1)) + `<span>${suffix}</span>`;
        if (t < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      numObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => numObs.observe(el));