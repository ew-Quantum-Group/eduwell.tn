/* ══════════════════════════════════════════════════════
   ██  CARTES — DATA
══════════════════════════════════════════════════════ */
const CARTES_DATA = [
  {
    id: 'repro-m',
    name: 'Système Reproducteur Masculin',
    desc: 'Schémas anatomiques détaillés du système reproducteur masculin',
    color: 'indigo',
    icon: 'fluent-emoji/dna',
    images: [
      { label: 'Schéma 1', emoji: '🔬', url: './flashcarts/1.webp' },
      { label: 'Schéma 2', emoji: '🔬', url: './flashcarts/2.webp' },
      { label: 'Schéma 3', emoji: '🔬', url: './flashcarts/3.webp' },
      { label: 'Schéma 4', emoji: '🔬', url: './flashcarts/4.webp' },
      { label: 'Schéma 5', emoji: '🔬', url: './flashcarts/5.webp' },
    ]
  },
  {
    id: 'repro-f',
    name: 'Système Reproducteur Féminin',
    desc: 'Schémas anatomiques détaillés du système reproducteur féminin',
    color: 'pink',
    icon: 'fluent-emoji/cherry-blossom',
    images: [
      { label: 'Schéma 1', emoji: '🔬', url: './flashcarts/6.webp' },
      { label: 'Schéma 2', emoji: '🔬', url: './flashcarts/7.webp' },
      { label: 'Schéma 3', emoji: '🔬', url: './flashcarts/8.webp' },
      { label: 'Schéma 4', emoji: '🔬', url: './flashcarts/9.webp' },
      { label: 'Schéma 5', emoji: '🔬', url: './flashcarts/10.webp' },
    ]
  },
  {
    id: 'evolution',
    name: 'Évolution des Espèces',
    desc: 'Illustrations et schémas montrant les principales étapes de l\'évolution biologique',
    color: 'green',
    icon: 'fluent-emoji/t-rex',
    images: [
      { label: 'Schéma 1', emoji: '🌳', url: 'https://drive.google.com/thumbnail?id=1_OJnEyrY70oyKebFF_ZZUHj2T-Nf6gpH&sz=w1000' },
      { label: 'Schéma 2', emoji: '🌳', url: 'https://drive.google.com/thumbnail?id=1NTjml5dBl6AC9_Xrtou-0nFULyjPQS3x&sz=w1000' },
    ]
  },
  {
    id: 'genetique',
    name: 'Génétique Moléculaire',
    desc: 'Schémas et illustrations des gènes, ADN et mécanismes héréditaires',
    color: 'purple',
    icon: 'fluent-emoji/microscope',
    images: [
      { label: 'Schéma 1', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=15OMkxGZ3QRVmSXIC00KycQoatDflaEo2&sz=w1000' },
      { label: 'Schéma 2', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1h5Kl3S8-dX5bixHksgrrtLyoaD0iqume&sz=w1000' },
      { label: 'Schéma 3', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1r86nzVZa4ThaWXOK45XzOlGP6cZeZ407&sz=w1000' },
      { label: 'Schéma 4', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1yHxM47zsY-cEO4ZTEt2S2HIR0YYLNwhh&sz=w1000' },
      { label: 'Schéma 5', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1h2iuEC1OBA0ibUgcavec2-oeJ4pd3-6W&sz=w1000' },
      { label: 'Schéma 6', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1iTrGKkm9aqx3qQJ43Dbu5zFEqKpoABE1&sz=w1000' },
      { label: 'Schéma 7', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1qKYto4ndqVBsK_GzPMPfyUTmodglbxKA&sz=w1000' },
      { label: 'Schéma 8', emoji: '🧬', url: 'https://drive.google.com/thumbnail?id=1ExtY4Vi2tSV3mD8adgQXOnPrZ6Lb7VDc&sz=w1000' },
    ]
  },
  {
    id: 'nerveux',
    name: 'Système Nerveux',
    desc: 'Schémas détaillés du cerveau, des nerfs et de leurs fonctions',
    color: 'blue',
    icon: 'fluent-emoji/brain',
    images: [
      { label: 'Schéma 1',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1ek0W8ZWOqSe_GOKaKWAJlLl7EgKDqfF2&sz=w1000' },
      { label: 'Schéma 2',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1LOStn1SBXNSCzk94vWHeRtVPhoCKg8iW&sz=w1000' },
      { label: 'Schéma 3',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1Ha-WUQskzEOxHTcLs2UJ2qnyJ9KqbAx6&sz=w1000' },
      { label: 'Schéma 4',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1zQGYlzSxNanMpPF0T--AUndgX7aCgoke&sz=w1000' },
      { label: 'Schéma 5',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=14JizLYbt2kwXyPS8pVY6bMMAhPtbOQOj&sz=w1000' },
      { label: 'Schéma 6',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1so5gU6kPIHvLwn-Hu3UFT3MLeJ_n5cOq&sz=w1000' },
      { label: 'Schéma 7',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1mAxe5olLsW2JUdfO3ZB1CSodBW6sIenh&sz=w1000' },
      { label: 'Schéma 8',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1rdbpEervmKrPDHB73C7xwesLy8voE4pZ&sz=w1000' },
      { label: 'Schéma 9',  emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1Q1XGFkN_xZPi4255doQG7Vs9iE7ba7bw&sz=w1000' },
      { label: 'Schéma 10', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1fqvUV--ees-9qlcWoxP5nDJL7ltm86Bk&sz=w1000' },
      { label: 'Schéma 11', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1-S_3m177TcJex0AWX4s-c9DeugX871P4&sz=w1000' },
      { label: 'Schéma 12', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1djZJkRN4RavVlGEK3P8WhIxRW5aOoLb-&sz=w1000' },
      { label: 'Schéma 13', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1USWIA4GW9K7irjhQUT8RK8cbqJdvrwE_&sz=w1000' },
      { label: 'Schéma 14', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1v2e_G9zBbJ3TA8oTZNoDLfI7Fh4eUcif&sz=w1000' },
      { label: 'Schéma 15', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=13dsGS7LzTdxgPGGPawQKzvI_lCtG3qwE&sz=w1000' },
      { label: 'Schéma 16', emoji: '🧠', url: 'https://drive.google.com/thumbnail?id=1TEPOlDN_Jn0BauWZA7BSY5zhVBCCMbvj&sz=w1000' },
    ]
  },
  {
    id: 'musculo',
    name: 'Système Musculo-Squelettique',
    desc: 'Schémas du squelette et des muscles expliquant le mouvement et le soutien du corps',
    color: 'orange',
    icon: 'fluent-emoji/bone',
    images: [
      { label: 'Schéma 1',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1lszSL1Wqb-z_wMbHvZM5-uBueEKBzCkK&sz=w1000' },
      { label: 'Schéma 2',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1JVjWiTo7kgSbFaZ8fUPSr7EQZ4OQyIcT&sz=w1000' },
      { label: 'Schéma 3',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1ozZRdTPqwCe4J2ZNAbyAtACkFVAbY_Ny&sz=w1000' },
      { label: 'Schéma 4',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1HSl-NY6eGbuVl5BYI_XuTy2w3XS8xuRq&sz=w1000' },
      { label: 'Schéma 5',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1MCBgxp1_mZoNKiY2zs_XqlwQpYODYIoy&sz=w1000' },
      { label: 'Schéma 6',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1Ap2PUUCORqZkEeB_gYVkmYmj4eyb8gZC&sz=w1000' },
      { label: 'Schéma 7',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1hsGfrLnQLnXWsX6hbuBn_E_EzYQwWnbM&sz=w1000' },
      { label: 'Schéma 8',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1crpb1RGAHczr3wLUw2jGKzeC_iOhWcg-&sz=w1000' },
      { label: 'Schéma 9',  emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1ESG767XOwMJ9sebDC_LDFiq9natrYoNQ&sz=w1000' },
      { label: 'Schéma 10', emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=18klWx_yCy5eVsexz-Ry0PwsPHdGCXwvP&sz=w1000' },
      { label: 'Schéma 11', emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1NB8TFe0saVfu6l-lWhgSNBj2aBepDPSh&sz=w1000' },
      { label: 'Schéma 12', emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1XPMBA6TxmNvJhX0zCjP7ZF8eeQR0fiv_&sz=w1000' },
      { label: 'Schéma 13', emoji: '🦴', url: 'https://drive.google.com/thumbnail?id=1v9je3lWxXBJTttOh__kJR20vwRdrYokE&sz=w1000' },
    ]
  },
  {
    id: 'cardio',
    name: 'Pression Artérielle',
    desc: 'Schémas expliquant la pression du sang et son rôle dans la circulation',
    color: 'red',
    icon: 'fluent-emoji/anatomical-heart',
    images: [
      { label: 'Schéma 1', emoji: '❤️', url: 'https://drive.google.com/thumbnail?id=1pcCH0Mx3BxlNng1LaDQXa10AmGlvTOzN&sz=w1000' },
      { label: 'Schéma 2', emoji: '❤️', url: 'https://drive.google.com/thumbnail?id=1Nzg6oESGffepdHUzHnQKundo3wj2qw_W&sz=w1000' },
      { label: 'Schéma 3', emoji: '❤️', url: 'https://drive.google.com/thumbnail?id=1g5kK1pqcF6bFXfYpmOUJvKKqUiiyqhaJ&sz=w1000' },
      { label: 'Schéma 4', emoji: '❤️', url: 'https://drive.google.com/thumbnail?id=1iR1TTWBUVFb2wjKR2cdRt5ybJFQdq2TB&sz=w1000' },
    ]
  },
  {
    id: 'immunitaire',
    name: 'Système Immunitaire',
    desc: 'Schémas des cellules immunitaires et des mécanismes de défense de l\'organisme',
    color: 'teal',
    icon: 'fluent-emoji/shield',
    images: []
  }
];

/* ══════════════════════════════════════════════════════
   ██  CARTES — RENDER
══════════════════════════════════════════════════════ */
renderCartes();
function renderCartes(){
  const grid = document.getElementById('cartesGrid');
  if(!grid) return;
  document.getElementById('cartesCatCount').textContent = CARTES_DATA.length + ' catégories';
  grid.innerHTML = CARTES_DATA.map((cat, i) => `
    <div class="carte-cat-card ${cat.color}" onclick="cartesOpenSheet('${cat.id}')"
         style="animation-delay:${i*55}ms">
      <div class="cccard-top">
        <div class="cccard-icon">
          <img src="https://api.iconify.design/${cat.icon}.svg" width="30px" height="30px" loading="lazy"/>
        </div>
        <div class="cccard-titles">
          <div class="cccard-name">${cat.name}</div>
          <div class="cccard-subtitle">Schémas · BAC SVT</div>
        </div>
      </div>
      <div class="cccard-desc">${cat.desc}</div>
      <div class="cccard-meta">
        <div class="cccard-meta-item"><i class="fa-solid fa-images"></i>${cat.images.length} schémas</div>
      </div>
      <div class="cccard-prog-track"><div class="cccard-prog-fill" style="width:0%"></div></div>
      <div class="cccard-prog-label">0% consulté</div>
    </div>
  `).join('');
}

/* Sheet open/close */
const CARTES_COLOR_BG = {
  indigo:'#eef2ff', purple:'#faf5ff', blue:'#eff6ff', teal:'#f0fdfa',
  orange:'#fff7ed', green:'#f0fdf4', red:'#fef2f2', pink:'#fdf2f8'
};
let _cartesCurrent = null;
function cartesOpenSheet(catId){
  const cat = CARTES_DATA.find(c=>c.id===catId);
  if(!cat) return;
  _cartesCurrent = cat;
  document.getElementById('cartesSheetTitle').textContent = cat.name;

  /* — icon — */
  const iconEl = document.getElementById('cartesSheetIcon');
  const bg = CARTES_COLOR_BG[cat.color] || '#f1f5f9';
  iconEl.style.background = bg;
  iconEl.innerHTML = `<img src="https://api.iconify.design/${cat.icon}.svg" width="30" height="30" loading="lazy" alt=""/>`;

  /* — desc with count — */
  document.getElementById('cartesSheetDesc').innerHTML = `<i class="fa-solid fa-images"></i> ${cat.images.length} schéma${cat.images.length>1?'s':''} · BAC SVT`;

  const grid = document.getElementById('cartesImagesGrid');
  grid.innerHTML = cat.images.map((img, i) => `
    <div class="cartes-img-card" onclick="cartesOpenLightbox(${i})" style="animation-delay:${i*60}ms">
      <img class="cartes-img-thumb" src="${img.url}" alt="${img.label}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
           loading="lazy"/>
      <div class="cartes-img-thumb-placeholder" style="display:none">${img.emoji}</div>
      <div class="cartes-img-label">${img.label}</div>
    </div>
  `).join('');
  document.getElementById('cartesModalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function cartesCloseSheet(e){
  if(e && e.target !== document.getElementById('cartesModalOverlay')) return;
  cartesCloseSheetForce();
}
function cartesCloseSheetForce(){
  document.getElementById('cartesModalOverlay').classList.remove('open');
  document.body.style.overflow='';
}

/* Lightbox */
let _cartesLbIdx = 0;
function cartesOpenLightbox(idx){
  if(!_cartesCurrent) return;
  _cartesLbIdx = idx;
  const img = _cartesCurrent.images[idx];
  const el = document.getElementById('cartesLightboxImg');
  el.src = img.url;
  el.alt = img.label;
  document.getElementById('cartesLightboxTitle').textContent = img.label;
  document.getElementById('cartesLightboxCounter').textContent =
    (idx+1) + ' / ' + _cartesCurrent.images.length;
  document.getElementById('cartesLightbox').classList.add('open');
}
function cartesCloseLightbox(){
  document.getElementById('cartesLightbox').classList.remove('open');
}
