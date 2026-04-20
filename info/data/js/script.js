
// ══════════════════════════════════════════════════════
//  PDF_DATA — Documents PDF section
//  Remplacer FILE_ID par les vrais identifiants Google Drive
//  Format URL Drive :
//    • view   : https://drive.google.com/file/d/FILE_ID/view
//    • preview (iframe embed) : auto-converti par le code
// ══════════════════════════════════════════════════════
const PDF_DATA = {
  'calcul-ch7': {
    name: '1-Structures des données',
    sub:  'info · 24 pages',
    pages: 24,
    icoClass: 'ico-r',
    // ↓ Remplacez ENONCE_FILE_ID et CORR_FILE_ID par vos vrais IDs Drive
    driveEnonce:     'https://drive.google.com/file/d/1GQA7AQESQHMf0cUyU2s0Z23DYYJTxcYT/view',
    driveCorrection: 'https://drive.google.com/file/d/1NgA3dIWscMaHhkPx2EYd7F8ApJW9WiCxview',
  },
  'mecanique-q': {
    name: '2-Les structures de contrôle itératives complète',
    sub:  'info· 38 pages',
    pages: 38,
    icoClass: 'ico-b',
    driveEnonce:     'https://drive.google.com/file/d/1GaBilcwhCwDFF4KVkGuBacr4OIb_4xMD/view',
    driveCorrection: 'https://drive.google.com/file/d/1J3DG_1rjqg9mUQtXYwKxI_xFe2hMkvhH/view',
  },
  'bio-cell': {
    name: '3-Structures de contrôle itératives à condition d_arrêt',
    sub:  'info · 16 pages',
    pages: 16,
    icoClass: 'ico-g',
    driveEnonce:     'https://drive.google.com/file/d/10QDwNBrkWqc3B95YmJCeOpAw2I76C29Aview',
    driveCorrection: 'https://drive.google.com/file/d/1ZItIYC2yM0sdCDG4Bb-iQy0NM01zLG5x/view',
  },
  'histoire-v2': {
    name: '4-Les sous-programmes',
    sub:  'info · 52 pages',
    pages: 52,
    icoClass: 'ico-a',
    driveEnonce:     'https://drive.google.com/file/d/16-NV6kmsQxKOAX0o7JOGerRo_VRdO9-T/view',
    driveCorrection: 'https://drive.google.com/file/d/13gePn9rc_Dsor5qobwiPOZPvJiUDuz6u/view',
  },
  'philo': {
    name: '5-La recherche séquentielle',
    sub:  'info· 30 pages',
    pages: 30,
    icoClass: 'ico-p',
    driveEnonce:     'https://drive.google.com/file/d/1f5g4CC4CdsSAc9mSao6UHmiHcjeB6Wc_/view',
    driveCorrection: 'https://drive.google.com/file/d/1SwInNMmXz9QEN6JUw8H1RsdEe-5NzD9C/view',
  },
  'chimie': {
    name: '6-serie  bac 2020',
    sub:  'info · 12 pages',
    pages: 12,
    icoClass: 'ico-t',
    driveEnonce:     'https://drive.google.com/file/d/1AYklDph4GVJ2bCwVjVJoAB77f6py_izS/view',
    driveCorrection: 'https://drive.google.com/file/d/1nXWKMijP1-eaLJmdE82ougXG8go6e9qG/view',
  },
  'chimie1': {
    name: '7-tri TRES TRES IMPORTANT',
    sub:  'info· 14 pages',
    pages: 14,
    icoClass: 'ico-t',
    driveEnonce:     'https://drive.google.com/file/d/1GBm-mB0DyIUsymavHbk-dHbbw4gAdo-z/view',
    driveCorrection: 'https://drive.google.com/file/d/1iIavCkxpimmDChAQGYdImIVIeMRXRLoJ/view',
  },
  'chimie2': {
    name: '8-Interface Graphique',
    sub:  'info · 14 pages',
    pages: 44,
    icoClass: 'ico-t',
    driveEnonce:     'https://drive.google.com/file/d/1zWdnMq5F-o5VPzTgNvINjNVxlQNtesMF/view',
    driveCorrection: 'https://drive.google.com/file/d/1X1JU8rr8LGjRJTlmLRIwaSxqODGUPZVb/view',
  },
   'chimie3': {
    name: '9-prob tableaux',
    sub:  'info · 12 pages',
    pages: 44,
    icoClass: 'ico-t',
    driveEnonce:     'https://drive.google.com/file/d/1Zyo1H4tBpDhQeMnp9gIUFHuoxxsVsATA/view',
    driveCorrection: 'https://drive.google.com/file/d/17HAlQYrCa7wvxO_p3RDgeTTdnJ9R1KIr/view',
  },
};

// ──────────────────────────────────────────────────
//  State
// ──────────────────────────────────────────────────
let currentPdfId = null;

const icoColorMap = {
  'ico-r': '#fff1f0',
  'ico-b': '#f0f6ff',
  'ico-g': '#f0fff3',
  'ico-a': '#fffbf0',
  'ico-p': '#faf0ff',
  'ico-t': '#f0faff',
};

// ──────────────────────────────────────────────────
//  MODAL A — Choix Énoncé / Correction
// ──────────────────────────────────────────────────
function openPdfChoice(id) {
  currentPdfId = id;
  const d = PDF_DATA[id];
  if (!d) return;

  const ico = document.getElementById('pdc-file-ico');
  ico.className = 'pdc-file-ico ' + d.icoClass;
  ico.innerHTML = '<i class="fas fa-file-pdf"></i>';
  ico.style.background = icoColorMap[d.icoClass] || 'var(--surface-2)';

  document.getElementById('pdc-title').textContent = d.name;
  document.getElementById('pdc-sub').textContent   = d.sub;

  document.getElementById('modal-pdf-choice').classList.add('open');
}

function closePdfChoice() {
  document.getElementById('modal-pdf-choice').classList.remove('open');
}

// ──────────────────────────────────────────────────
//  MODAL B — Visionneuse iframe Drive
// ──────────────────────────────────────────────────
function openDriveViewer(type) {
  const d = PDF_DATA[currentPdfId];
  if (!d) return;

  closePdfChoice();

  // Badge type
  const badge = document.getElementById('gdv-type-badge');
  if (type === 'enonce') {
    badge.className = 'gdv-type-badge enonce';
    badge.innerHTML = '<i class="fas fa-file-lines" style="font-size:9px"></i> Énoncé';
  } else {
    badge.className = 'gdv-type-badge correction';
    badge.innerHTML = '<i class="fas fa-circle-check" style="font-size:9px"></i> Correction';
  }

  // Header
  document.getElementById('gdv-doc-name').textContent = d.name;
  document.getElementById('gdv-doc-sub').textContent  = d.sub;
  document.getElementById('gdv-page-label').textContent = d.pages + ' pages';

  // Lien "Ouvrir dans Drive" → URL /view
  const driveViewLink = type === 'enonce' ? d.driveEnonce : d.driveCorrection;
  document.getElementById('gdv-open-btn').href = driveViewLink;

  // URL embed pour l'iframe → remplace /view par /preview
  const embedUrl = driveViewLink.replace('/view', '/preview');

  // Afficher le spinner
  const loading = document.getElementById('gdv-loading');
  loading.classList.remove('hidden');

  // Charger l'iframe
  const iframe = document.getElementById('gdv-iframe');
  iframe.src = '';                   // reset d'abord
  setTimeout(() => {
    iframe.src = embedUrl;
  }, 60);                            // petit délai pour que le reset soit effectif

  // Cacher le spinner une fois chargé
  iframe.onload = () => loading.classList.add('hidden');

  document.getElementById('modal-gdrive-viewer').classList.add('open');
}

function closeDriveViewer() {
  document.getElementById('modal-gdrive-viewer').classList.remove('open');
  // Stopper le chargement du PDF en arrière-plan
  const iframe = document.getElementById('gdv-iframe');
  if (iframe) iframe.src = '';
  const loading = document.getElementById('gdv-loading');
  if (loading) loading.classList.remove('hidden');
}

// Click-outside (nouveaux modals)
document.getElementById('modal-pdf-choice').addEventListener('click', function(e) {
  if (e.target === this) closePdfChoice();
});
document.getElementById('modal-gdrive-viewer').addEventListener('click', function(e) {
  if (e.target === this) closeDriveViewer();
});


// ══════════════════════════════════════════════════════
//  EXISTING MODAL SYSTEM (Supports de cours) — inchangé
// ══════════════════════════════════════════════════════
const DATA = {
  'calcul-ch7': {
    filename: 'Prototypes pratiques Bac.py',
    gdrive: 'https://drive.google.com/file/d/CALCUL_CH7_ID/view',
    iface_url: 'https://drive.google.com/file/d/1Snc3tbCZo6NdwNwK-4JESdyV5RGa5mix/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1kfekgV6bbPvFBmtZl0flitXz3WaBkgdk/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication

<span class="t-kw">def</span> <span class="t-fn">ondulant</span>(N):
    CH <span class="t-op">=</span> <span class="t-fn">str</span>(N)
    l <span class="t-op">=</span> <span class="t-fn">len</span>(CH)
    i <span class="t-op">=</span> <span class="t-nb">0</span>
    Ondul <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">while</span> i <span class="t-op"><=</span> l <span class="t-op">-</span> <span class="t-nb">3</span> :
        <span class="t-kw">if</span> CH[i] <span class="t-op">==</span> CH[i<span class="t-op">+</span><span class="t-nb">2</span>] <span class="t-kw">and</span> CH[i] <span class="t-op">!=</span> CH[i<span class="t-op">+</span><span class="t-nb">1</span>]:
            i <span class="t-op">+=</span> <span class="t-nb">1</span>
            Ondul <span class="t-op">=</span> <span class="t-nb">True</span>
        <span class="t-kw">else</span> :
            <span class="t-kw">return</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> Ondul
    
<span class="t-kw">def</span> <span class="t-fn">play</span>():
    NumCH <span class="t-op">=</span> windows.Number.text()
    <span class="t-kw">if</span> NumCH.isdigit():
        N <span class="t-op">=</span> <span class="t-fn">int</span>(NumCH)
        <span class="t-kw">if</span> N <span class="t-op">>=</span> <span class="t-nb">100</span>:
            <span class="t-kw">if</span> <span class="t-fn">ondulant</span>(N):
                msg <span class="t-op">=</span> NumCH <span class="t-op">+</span> <span class="t-st">" est Ondulant"</span>
            <span class="t-kw">else</span> :
                msg <span class="t-op">=</span> NumCH <span class="t-op">+</span> <span class="t-st">" n'est pas Ondulant"</span>
        <span class="t-kw">else</span> :
            msg <span class="t-op">=</span> <span class="t-st">"veuillez Introduire un nombre &gt;=100 :"</span>
    <span class="t-kw">else</span> :
        msg <span class="t-op">=</span> <span class="t-st">"veuillez Introduire une valeur numerique"</span>
    windows.Message.setText(msg)
        
app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceOndulant.ui"</span>)
windows.show()
windows.Verif.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`,
    iface_preview: `<div class="iface-preview">
  <div class="iface-preview-head">
    <div class="panel-ico ico-b" style="width:22px;height:22px;border-radius:6px;font-size:10px">
      <i class="fas fa-code"></i>
    </div>
    <span class="iface-preview-title">Vérificateur Ondulant (Python)</span>
  </div>

  <div class="iface-preview-body">
    <p style="font-size:10.5px;color:var(--ink-3);line-height:1.6">
      Testez si un nombre est ondulant à l’aide d’un programme Python interactif.
      Entrez une valeur et vérifiez le résultat instantanément.
    </p>

    <a href="https://ton-link-ici.com" target="_blank" 
       style="display:inline-block;margin-top:8px;padding:6px 10px;
       font-size:10px;border-radius:6px;background:var(--primary);
       color:#fff;text-decoration:none">
       Tester le code
    </a>
  </div>
</div>`
  },
  'mecanique-q': { filename:'Prototypes pratiques Bac.py', 
    gdrive: 'https://drive.google.com/file/d/CALCUL_CH7_ID/view',
    iface_url: 'https://drive.google.com/file/d/1jJfOP6KyxlOoPwXYivhf1CFZWz3Cnm3D/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1kfekgV6bbPvFBmtZl0flitXz3WaBkgdk/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication

<span class="t-kw">def</span> <span class="t-fn">PariteChif</span>(N):
    Nch <span class="t-op">=</span> <span class="t-fn">str</span>(N)
    <span class="t-kw">for</span> chif <span class="t-kw">in</span> Nch:
        <span class="t-kw">if</span> <span class="t-fn">int</span>(chif) <span class="t-op">%</span> <span class="t-nb">2</span> <span class="t-op">!=</span> <span class="t-nb">0</span>:
            <span class="t-kw">return</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> <span class="t-nb">True</span>

<span class="t-kw">def</span> <span class="t-fn">PariteDiv</span>(N):
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">2</span>, N <span class="t-op">//</span> <span class="t-nb">2</span>):
        <span class="t-kw">if</span> N <span class="t-op">%</span> i <span class="t-op">==</span> <span class="t-nb">0</span> <span class="t-kw">and</span> i <span class="t-op">%</span> <span class="t-nb">2</span> <span class="t-op">!=</span> <span class="t-nb">0</span>:
            <span class="t-kw">return</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> <span class="t-nb">True</span>

<span class="t-kw">def</span> <span class="t-fn">SuperPairplus</span>(N):
    <span class="t-kw">return</span> N <span class="t-op">%</span> <span class="t-nb">2</span> <span class="t-op">==</span> <span class="t-nb">0</span> <span class="t-kw">and</span> <span class="t-fn">PariteDiv</span>(N) <span class="t-kw">and</span> <span class="t-fn">PariteChif</span>(N)

<span class="t-kw">def</span> <span class="t-fn">Play</span>():
    Nch <span class="t-op">=</span> windows.Number.text()
    <span class="t-kw">if</span> Nch.isdigit():
        N <span class="t-op">=</span> <span class="t-fn">int</span>(Nch)
        <span class="t-kw">if</span> N <span class="t-op">&gt;</span> <span class="t-nb">0</span>:
            <span class="t-kw">if</span> <span class="t-fn">SuperPairplus</span>(N):
                msg <span class="t-op">=</span> Nch <span class="t-op">+</span> <span class="t-st">" est Super Pairplus"</span>
            <span class="t-kw">else</span>:
                msg <span class="t-op">=</span> Nch <span class="t-op">+</span> <span class="t-st">" n'est pas Super Pairplus"</span>
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"Veuillez Introduire un entier &gt; 0 :"</span>
    <span class="t-kw">else</span>:
        msg <span class="t-op">=</span> <span class="t-st">"Veuillez Introduire une valeur numerique"</span>
    windows.message.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceSuperPairplus.ui"</span>)
windows.show()
windows.Verif.clicked.connect(<span class="t-fn">Play</span>)
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },


  'bio-cell': { filename:'Prototypes pratiques Bac.py', 
     gdrive: 'https://drive.google.com/file/d/1iqxIvYwio-DtnH3KPqZ9tN7GQADh5KZh/view',
    iface_url: 'https://drive.google.com/file/d/1lOquRgf6bLqn-rjAuHijgx7kxqQomRhT/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1kfekgV6bbPvFBmtZl0flitXz3WaBkgdk/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication

<span class="t-kw">def</span> <span class="t-fn">premier</span>(N):
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">2</span>, (N <span class="t-op">//</span> <span class="t-nb">2</span>) <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> N <span class="t-op">%</span> i <span class="t-op">==</span> <span class="t-nb">0</span> :
            <span class="t-kw">return</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> <span class="t-nb">True</span>

<span class="t-kw">def</span> <span class="t-fn">SemiPremier</span>(N):
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">2</span>, (N <span class="t-op">//</span> <span class="t-nb">2</span>) <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> N <span class="t-op">%</span> i <span class="t-op">==</span> <span class="t-nb">0</span> <span class="t-kw">and</span> <span class="t-fn">premier</span>(i) <span class="t-kw">and</span> <span class="t-fn">premier</span>(N <span class="t-op">//</span> i):
            <span class="t-kw">return</span> <span class="t-nb">True</span>
    <span class="t-kw">return</span> <span class="t-nb">False</span>

<span class="t-kw">def</span> <span class="t-fn">Play</span>():
    Nch <span class="t-op">=</span> windows.Number.text()
    <span class="t-kw">if</span> Nch.isdigit():
        N <span class="t-op">=</span> <span class="t-fn">int</span>(Nch)
        <span class="t-kw">if</span> N <span class="t-op">&gt;</span> <span class="t-nb">2</span>:
            <span class="t-kw">if</span> <span class="t-fn">SemiPremier</span>(N):
                msg <span class="t-op">=</span> Nch <span class="t-op">+</span> <span class="t-st">" est Semi Premier"</span>
            <span class="t-kw">else</span>:
                msg <span class="t-op">=</span> Nch <span class="t-op">+</span> <span class="t-st">" n'est pas Semi Premier"</span>
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"Veuillez introduire un nombre &gt;2"</span>
    <span class="t-kw">else</span> :
        msg <span class="t-op">=</span> <span class="t-st">"Veuillez introduire une valeur numérique "</span>
    windows.message.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceSemiPremier.ui"</span>)
windows.show()
windows.Verif.clicked.connect(<span class="t-fn">Play</span>)
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },


    
    
 'climat': { filename:'Prototypes pratiques Bac.py', 
  gdrive: 'https://drive.google.com/file/d/1L_C9Mwryxovc0BuXYjKohxibut0sHFti/view',
    iface_url: 'https://drive.google.com/file/d/1k5Fs-SJ2KyNhq-gGLoQyymLGFTNQyR29/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1L_C9Mwryxovc0BuXYjKohxibut0sHFti/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">char_exists</span>(c, ch):
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(ch)):
        <span class="t-kw">if</span> ch[i] <span class="t-op">==</span> c:
            <span class="t-kw">return</span> <span class="t-nb">True</span>
    <span class="t-kw">return</span> <span class="t-nb">False</span>

<span class="t-kw">def</span> <span class="t-fn">Recherche</span>(ch1, ch2):
    res <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(ch1)):
        <span class="t-kw">if</span> <span class="t-fn">char_exists</span>(ch1[i], ch2) <span class="t-kw">and</span> <span class="t-kw">not</span>(<span class="t-fn">char_exists</span>(ch1[i], res)):
            res <span class="t-op">+=</span> ch1[i]
    <span class="t-kw">return</span> res

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    ch1 <span class="t-op">=</span> windows.ch1.text()
    ch2 <span class="t-op">=</span> windows.ch2.text()
    <span class="t-kw">if</span> <span class="t-fn">len</span>(ch1) <span class="t-op">&gt;</span> <span class="t-nb">0</span> <span class="t-kw">and</span> <span class="t-fn">len</span>(ch2) <span class="t-op">&gt;</span> <span class="t-nb">0</span>:
        <span class="t-kw">if</span> <span class="t-fn">len</span>(ch1) <span class="t-op">&lt;</span> <span class="t-nb">30</span> <span class="t-kw">and</span> <span class="t-fn">len</span>(ch2) <span class="t-op">&lt;</span> <span class="t-nb">30</span> <span class="t-kw">and</span> ch1.islower() <span class="t-kw">and</span> ch2.islower():
            msg <span class="t-op">=</span> <span class="t-st">"L'intersection est : "</span> <span class="t-op">+</span> <span class="t-fn">Recherche</span>(ch1, ch2)
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"Veuillez intoduire deux chaines valides"</span>
    <span class="t-kw">else</span> :
        msg <span class="t-op">=</span> <span class="t-st">"Veuillez intoduire deux chaines non vides"</span>
        
    windows.affiche.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceIntersection.ui"</span>)
windows.show()
windows.verif.clicked.connect(<span class="t-fn">play</span>)
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },


  'serie-9': { filename:'Prototypes pratiques Bac.py',   
    gdrive: 'https://drive.google.com/file/d/14uZblWrqG0syBnNm3Pzfa0xHaf2MHBa5/view',
    iface_url: 'https://drive.google.com/file/d/1jm-2PtsDElK9Rkf3Qcvet8X_GiqwKHuV/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/14uZblWrqG0syBnNm3Pzfa0xHaf2MHBa5/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">verifch</span>(ch):
    <span class="t-kw">if</span> <span class="t-nb">0</span> <span class="t-op">&lt;</span> <span class="t-fn">len</span>(ch) <span class="t-op">&lt;</span> <span class="t-nb">10</span> <span class="t-kw">and</span> ch.islower():
        verifch <span class="t-op">=</span> <span class="t-nb">True</span>
    <span class="t-kw">else</span>:
        verifch <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> verifch

<span class="t-kw">def</span> <span class="t-fn">Rotation</span>(ch):
    res <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(ch)):
        res <span class="t-op">+=</span> <span class="t-fn">chr</span>(<span class="t-nb">97</span> <span class="t-op">+</span> (<span class="t-fn">ord</span>(ch[i]) <span class="t-op">-</span> <span class="t-nb">97</span> <span class="t-op">+</span> <span class="t-nb">13</span>) <span class="t-op">%</span> <span class="t-nb">26</span>)
    <span class="t-kw">return</span> res

<span class="t-kw">def</span> <span class="t-fn">Miroir</span>(ch):
    <span class="t-kw">return</span> ch[::<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    ch <span class="t-op">=</span> windows.ch.text()
    <span class="t-kw">if</span> <span class="t-fn">len</span>(ch) <span class="t-op">&gt;</span> <span class="t-nb">0</span>:
        <span class="t-kw">if</span> <span class="t-fn">verifch</span>(ch):
            ch <span class="t-op">=</span> <span class="t-fn">Rotation</span>(ch)
            ch <span class="t-op">=</span> <span class="t-fn">Miroir</span>(ch)
            windows.affiche.setText(<span class="t-st">"La chaine crypte est : "</span> <span class="t-op">+</span> ch)
        <span class="t-kw">else</span> :
            windows.affiche.setText(<span class="t-st">"Veuillez introduire une chaine non valide"</span>)
    <span class="t-kw">else</span> :
        windows.affiche.setText(<span class="t-st">"Veuillez introduire une chaine"</span>)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceRotationMiroir.ui"</span>)
windows.show()
windows.Crypter.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },



  'labo-4': { filename:'Prototypes pratiques Bac.py',  gdrive: 'https://drive.google.com/file/d/14uZblWrqG0syBnNm3Pzfa0xHaf2MHBa5/view',
    iface_url: 'https://drive.google.com/file/d/1jm-2PtsDElK9Rkf3Qcvet8X_GiqwKHuV/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/14uZblWrqG0syBnNm3Pzfa0xHaf2MHBa5/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">verifch</span>(ch):
    <span class="t-kw">if</span> <span class="t-nb">0</span> <span class="t-op">&lt;</span> <span class="t-fn">len</span>(ch) <span class="t-op">&lt;</span> <span class="t-nb">10</span> <span class="t-kw">and</span> ch.islower():
        verifch <span class="t-op">=</span> <span class="t-nb">True</span>
    <span class="t-kw">else</span>:
        verifch <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> verifch

<span class="t-kw">def</span> <span class="t-fn">Rotation</span>(ch):
    res <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(ch)):
        res <span class="t-op">+=</span> <span class="t-fn">chr</span>(<span class="t-nb">97</span> <span class="t-op">+</span> (<span class="t-fn">ord</span>(ch[i]) <span class="t-op">-</span> <span class="t-nb">97</span> <span class="t-op">+</span> <span class="t-nb">13</span>) <span class="t-op">%</span> <span class="t-nb">26</span>)
    <span class="t-kw">return</span> res

<span class="t-kw">def</span> <span class="t-fn">Miroir</span>(ch):
    <span class="t-kw">return</span> ch[::<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    ch <span class="t-op">=</span> windows.ch.text()
    <span class="t-kw">if</span> <span class="t-fn">len</span>(ch) <span class="t-op">&gt;</span> <span class="t-nb">0</span>:
        <span class="t-kw">if</span> <span class="t-fn">verifch</span>(ch):
            ch <span class="t-op">=</span> <span class="t-fn">Rotation</span>(ch)
            ch <span class="t-op">=</span> <span class="t-fn">Miroir</span>(ch)
            windows.affiche.setText(<span class="t-st">"La chaine crypte est : "</span> <span class="t-op">+</span> ch)
        <span class="t-kw">else</span> :
            windows.affiche.setText(<span class="t-st">"Veuillez introduire une chaine non valide"</span>)
    <span class="t-kw">else</span> :
        windows.affiche.setText(<span class="t-st">"Veuillez introduire une chaine"</span>)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceRotationMiroir.ui"</span>)
windows.show()
windows.Crypter.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },




  'geo-projet': { filename:'Prototypes pratiques Bac.py', 
    
     iface_url: 'https://drive.google.com/file/d/1jm-2PtsDElK9Rkf3Qcvet8X_GiqwKHuV/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/14uZblWrqG0syBnNm3Pzfa0xHaf2MHBa5/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">verifch</span>(ch):
    <span class="t-kw">if</span> <span class="t-nb">0</span> <span class="t-op">&lt;</span> <span class="t-fn">len</span>(ch) <span class="t-op">&lt;</span> <span class="t-nb">10</span> <span class="t-kw">and</span> ch.islower():
        verifch <span class="t-op">=</span> <span class="t-nb">True</span>
    <span class="t-kw">else</span>:
        verifch <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> verifch

<span class="t-kw">def</span> <span class="t-fn">Rotation</span>(ch):
    res <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(ch)):
        res <span class="t-op">+=</span> <span class="t-fn">chr</span>(<span class="t-nb">97</span> <span class="t-op">+</span> (<span class="t-fn">ord</span>(ch[i]) <span class="t-op">-</span> <span class="t-nb">97</span> <span class="t-op">+</span> <span class="t-nb">13</span>) <span class="t-op">%</span> <span class="t-nb">26</span>)
    <span class="t-kw">return</span> res

<span class="t-kw">def</span> <span class="t-fn">Miroir</span>(ch):
    <span class="t-kw">return</span> ch[::<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    ch <span class="t-op">=</span> windows.ch.text()
    <span class="t-kw">if</span> <span class="t-fn">len</span>(ch) <span class="t-op">&gt;</span> <span class="t-nb">0</span>:
        <span class="t-kw">if</span> <span class="t-fn">verifch</span>(ch):
            ch <span class="t-op">=</span> <span class="t-fn">Rotation</span>(ch)
            ch <span class="t-op">=</span> <span class="t-fn">Miroir</span>(ch)
            windows.affiche.setText(<span class="t-st">"La chaine crypte est : "</span> <span class="t-op">+</span> ch)
        <span class="t-kw">else</span> :
            windows.affiche.setText(<span class="t-st">"Veuillez introduire une chaine non valide"</span>)
    <span class="t-kw">else</span> :
        windows.affiche.setText(<span class="t-st">"Veuillez introduire une chaine"</span>)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceRotationMiroir.ui"</span>)
windows.show()
windows.Crypter.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },


  
  'photo-video': { filename:'Prototypes pratiques Bac.py',
    
     iface_url: 'https://drive.google.com/file/d/1zP8rxR2PMJYjja4oEFdLqhE7Oc4zHbf7/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1YzpPAIbZC0w28jl0TjAqPfKGY7akOlw9/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">Etape1</span>(X):
    Y <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(X)):
        Y <span class="t-op">+=</span> <span class="t-fn">str</span>(<span class="t-fn">int</span>(X[i]) <span class="t-op">%</span> <span class="t-nb">7</span>)
    <span class="t-kw">return</span> Y       

<span class="t-kw">def</span> <span class="t-fn">Etape2</span>(Y):
    Z <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(Y) <span class="t-op">-</span> <span class="t-nb">2</span>, <span class="t-op">-</span><span class="t-nb">1</span>, <span class="t-op">-</span><span class="t-nb">2</span>):
        Z <span class="t-op">=</span> <span class="t-fn">str</span>(<span class="t-fn">int</span>(Y[i:i<span class="t-op">+</span><span class="t-nb">2</span>]) <span class="t-op">%</span> <span class="t-nb">7</span>) <span class="t-op">+</span> Z
        
    <span class="t-kw">if</span> <span class="t-fn">len</span>(Y) <span class="t-op">%</span> <span class="t-nb">2</span> <span class="t-op">==</span> <span class="t-nb">1</span> :
        Z <span class="t-op">=</span> <span class="t-fn">str</span>(<span class="t-fn">int</span>(Y[<span class="t-nb">0</span>]) <span class="t-op">%</span> <span class="t-nb">7</span>) <span class="t-op">+</span> Z

    <span class="t-kw">return</span> Z

<span class="t-kw">def</span> <span class="t-fn">Horner</span>(Z):
    M <span class="t-op">=</span> <span class="t-nb">0</span>
    <span class="t-kw">while</span> Z <span class="t-op">!=</span> <span class="t-st">""</span> :
        ch <span class="t-op">=</span> Z[<span class="t-nb">0</span>]
        M <span class="t-op">=</span> (M <span class="t-op">*</span> <span class="t-nb">2</span> <span class="t-op">+</span> <span class="t-fn">int</span>(ch)) <span class="t-op">%</span> <span class="t-nb">7</span>
        Z <span class="t-op">=</span> Z[<span class="t-nb">1</span>:]
    <span class="t-kw">return</span> M

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    X <span class="t-op">=</span> windows.X.text()
    <span class="t-kw">if</span> <span class="t-nb">5</span> <span class="t-op">&lt;=</span> <span class="t-fn">len</span>(X) <span class="t-op">&lt;=</span> <span class="t-nb">20</span> :
        Y <span class="t-op">=</span> <span class="t-fn">Etape1</span>(X)
        Z <span class="t-op">=</span> <span class="t-fn">Etape2</span>(Y)
        <span class="t-kw">if</span> <span class="t-fn">Horner</span>(Z) <span class="t-op">==</span> <span class="t-nb">0</span> :
            msg <span class="t-op">=</span> X <span class="t-op">+</span> <span class="t-st">" est divisible par 7"</span>
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> X <span class="t-op">+</span> <span class="t-st">" n'est pas divisible par 7"</span>
    <span class="t-kw">else</span>:
        msg <span class="t-op">=</span> <span class="t-st">"Veuillez saisir un nombre de 5 a 20 chiffres"</span>
        
    windows.affiche.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceHorner.ui"</span>)
windows.show()
windows.verifier.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
     'mindmap': { filename:'Prototypes pratiques Bac.py', 
      
      
      
       iface_url: 'https://drive.google.com/file/d/1j33_1bAAkJk8Vitgwd-X7KctWnElXV4l/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1lMO8o-oIqRbDcM-U_4X7uLntZtI8HOJ_/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">SommeChiffres</span>(X):
    S <span class="t-op">=</span> <span class="t-nb">0</span>
    <span class="t-kw">while</span> X <span class="t-op">!=</span> <span class="t-nb">0</span> :
        S <span class="t-op">+=</span> X <span class="t-op">%</span> <span class="t-nb">10</span>
        X <span class="t-op">=</span> X <span class="t-op">//</span> <span class="t-nb">10</span>
    <span class="t-kw">return</span> S

<span class="t-kw">def</span> <span class="t-fn">Verifier</span>(X):
    Autonombre <span class="t-op">=</span> <span class="t-nb">True</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">1</span>, X):
        <span class="t-kw">if</span> X <span class="t-op">==</span> i <span class="t-op">+</span> <span class="t-fn">SommeChiffres</span>(i):
            Autonombre <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> Autonombre

<span class="t-kw">def</span> <span class="t-fn">Chercher</span>(N, M):
    ch <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(N, M <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> <span class="t-fn">Verifier</span>(i):
            ch <span class="t-op">+=</span> <span class="t-fn">str</span>(i) <span class="t-op">+</span> <span class="t-st">"-"</span>
    <span class="t-kw">return</span> ch[:<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    n <span class="t-op">=</span> windows.N.text()
    m <span class="t-op">=</span> windows.M.text()
    
    <span class="t-kw">if</span> n.isnumeric() <span class="t-kw">and</span> m.isnumeric():
        N <span class="t-op">=</span> <span class="t-fn">int</span>(n)
        M <span class="t-op">=</span> <span class="t-fn">int</span>(m)
        ch <span class="t-op">=</span> <span class="t-fn">Chercher</span>(N, M)
        <span class="t-kw">if</span> <span class="t-nb">20</span> <span class="t-op">&lt;=</span> N <span class="t-op">&lt;=</span> <span class="t-nb">50</span> <span class="t-kw">and</span> N <span class="t-op">&lt;=</span> M <span class="t-op">&lt;=</span> <span class="t-nb">100</span> :
            <span class="t-kw">if</span> ch <span class="t-op">!=</span> <span class="t-st">""</span> :
                msg <span class="t-op">=</span> <span class="t-st">"Le(s) nombres(s) Autonomre(s) : "</span> <span class="t-op">+</span> ch
            <span class="t-kw">else</span>:
                msg <span class="t-op">=</span> <span class="t-st">"Aucun Autonombre entre "</span> <span class="t-op">+</span> n <span class="t-op">+</span> <span class="t-st">" et "</span> <span class="t-op">+</span> m
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"Veuillez respecter : 20 &lt;=N&lt;=50 et N&lt;M&lt;=100"</span>
    windows.affiche.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfaceAutonombre.ui"</span>)
windows.show()
windows.afficher.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
  
      'prononciation': { filename:'Prototypes pratiques Bac.py', 
        
        
       iface_url: 'https://drive.google.com/file/d/1fcIkU7TqYnflQbLNe2JZ9xme3iFFz8_n/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1No37WnJWjdXJGwXd0FOVq-gpAaBUhtnJ/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">Puissance</span>(A, B):
    P <span class="t-op">=</span> <span class="t-nb">1</span>
    <span class="t-kw">for</span> k <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">1</span>, B <span class="t-op">+</span> <span class="t-nb">1</span>):
        P <span class="t-op">*=</span> A
    <span class="t-kw">return</span> P

<span class="t-kw">def</span> <span class="t-fn">Transformer</span>(X):
    Y <span class="t-op">=</span> <span class="t-nb">1</span>
    <span class="t-kw">if</span> <span class="t-fn">len</span>(X) <span class="t-op">%</span> <span class="t-nb">2</span> <span class="t-op">==</span> <span class="t-nb">1</span>:
        X <span class="t-op">+=</span> <span class="t-st">"1"</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">0</span>, <span class="t-fn">len</span>(X) <span class="t-op">-</span> <span class="t-nb">1</span>, <span class="t-nb">2</span>):
        <span class="t-kw">if</span> X[i] <span class="t-op">!=</span> <span class="t-st">'0'</span> <span class="t-kw">and</span> X[i <span class="t-op">+</span> <span class="t-nb">1</span>] <span class="t-op">!=</span> <span class="t-st">'0'</span>:
            Y <span class="t-op">*=</span> <span class="t-fn">Puissance</span>(<span class="t-fn">int</span>(X[i]), <span class="t-fn">int</span>(X[i <span class="t-op">+</span> <span class="t-nb">1</span>]))
        <span class="t-kw">else</span>:
            Y <span class="t-op">*=</span> <span class="t-nb">1</span>
    <span class="t-kw">return</span> Y

<span class="t-kw">def</span> <span class="t-fn">Chercher</span>(N, M):
    ch <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(N, N <span class="t-op">+</span> M <span class="t-op">+</span> <span class="t-nb">1</span>):
        ch <span class="t-op">+=</span> <span class="t-fn">str</span>(<span class="t-fn">Transformer</span>(<span class="t-fn">str</span>(i))) <span class="t-op">+</span> <span class="t-st">"-"</span>
    <span class="t-kw">return</span> ch[:<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    N <span class="t-op">=</span> windows.N.text()
    M <span class="t-op">=</span> windows.M.text()
    
    <span class="t-kw">if</span> <span class="t-nb">200</span> <span class="t-op">&lt;=</span> <span class="t-fn">int</span>(N) <span class="t-op">&lt;=</span> <span class="t-nb">999999</span> <span class="t-kw">and</span> <span class="t-nb">3</span> <span class="t-op">&lt;=</span> <span class="t-fn">int</span>(M) <span class="t-op">&lt;=</span> <span class="t-nb">10</span> :
        windows.msg2.clear()
        windows.msg1.setText(<span class="t-st">"la transformation de "</span> <span class="t-op">+</span> N <span class="t-op">+</span> <span class="t-st">" et les "</span> <span class="t-op">+</span> M <span class="t-op">+</span> <span class="t-st">" entiers suivants sont : "</span> <span class="t-op">+</span> <span class="t-fn">Chercher</span>(<span class="t-fn">int</span>(N), <span class="t-fn">int</span>(M)))
    <span class="t-kw">else</span>:
        windows.msg1.clear()
        windows.msg2.setText(<span class="t-st">"Veulliez respecter : N (200≤N≤999999) et M (3≤M≤10)"</span>)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfacePowertrain.ui"</span>)
windows.show()
windows.Transformer.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
  
        'eco-data': { filename:'Prototypes pratiques Bac.py', 
          
       iface_url: 'https://drive.google.com/file/d/1F5HpnkgrdDO5G0zHG4iZLFf3C40eFMfh/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/13olCyW4lGyQDSryadtYRstzNT1B1Tn7j/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">Premier</span>(X):
    TEST <span class="t-op">=</span> <span class="t-nb">True</span>
    <span class="t-kw">if</span> X <span class="t-op">==</span> <span class="t-nb">1</span> :
        TEST <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">elif</span> X <span class="t-op">&gt;</span> <span class="t-nb">3</span> :
        K <span class="t-op">=</span> <span class="t-nb">2</span>
        <span class="t-kw">while</span> TEST <span class="t-kw">and</span> K <span class="t-op">&lt;=</span> X <span class="t-op">//</span> <span class="t-nb">2</span> :
            <span class="t-kw">if</span> X <span class="t-op">%</span> K <span class="t-op">==</span> <span class="t-nb">0</span> :
                TEST <span class="t-op">=</span> <span class="t-nb">False</span>
            <span class="t-kw">else</span>:
                K <span class="t-op">+=</span> <span class="t-nb">1</span>
    <span class="t-kw">return</span> TEST

<span class="t-kw">def</span> <span class="t-fn">Verifier</span>(P):
    Primere <span class="t-op">=</span> <span class="t-nb">False</span>
    <span class="t-kw">for</span> X <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">1</span>, P):
        K <span class="t-op">=</span> <span class="t-nb">1</span>
        <span class="t-kw">if</span> <span class="t-fn">Premier</span>(X):
            <span class="t-kw">while</span> X <span class="t-op">**</span> K <span class="t-op">&lt;</span> P :
                K <span class="t-op">+=</span> <span class="t-nb">1</span>
            <span class="t-kw">if</span> X <span class="t-op">**</span> K <span class="t-op">==</span> P:
                Primere <span class="t-op">=</span> <span class="t-nb">True</span>
    <span class="t-kw">return</span> Primere   

<span class="t-kw">def</span> <span class="t-fn">Chercher</span>(N, M):
    ch <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(N, M <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> <span class="t-fn">Verifier</span>(i):
            ch <span class="t-op">+=</span> <span class="t-fn">str</span>(i) <span class="t-op">+</span> <span class="t-st">"-"</span>
    <span class="t-kw">return</span> ch[:<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    n <span class="t-op">=</span> windows.N.text()
    m <span class="t-op">=</span> windows.M.text()
    
    <span class="t-kw">if</span> n.isnumeric() <span class="t-kw">and</span> m.isnumeric():
        N <span class="t-op">=</span> <span class="t-fn">int</span>(n)
        M <span class="t-op">=</span> <span class="t-fn">int</span>(m)
        ch <span class="t-op">=</span> <span class="t-fn">Chercher</span>(N, M)
        <span class="t-kw">if</span> <span class="t-nb">10</span> <span class="t-op">&lt;=</span> N <span class="t-op">&lt;=</span> <span class="t-nb">50</span> <span class="t-kw">and</span> N <span class="t-op">&lt;=</span> M <span class="t-op">&lt;=</span> <span class="t-nb">200</span> :
            <span class="t-kw">if</span> ch <span class="t-op">!=</span> <span class="t-st">""</span> :
                msg <span class="t-op">=</span> <span class="t-st">"Nombres(s) primaire(s) : "</span> <span class="t-op">+</span> ch
            <span class="t-kw">else</span>:
                msg <span class="t-op">=</span> <span class="t-st">"Aucun nombre primaire entre "</span> <span class="t-op">+</span> n <span class="t-op">+</span> <span class="t-st">" et "</span> <span class="t-op">+</span> m
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"Veuillez respecter : 10 &lt;=N&lt;=50 et N&lt;M&lt;=200"</span>
    windows.message.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"InterfacePrimaire.ui"</span>)
windows.show()
windows.afficher.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
  
          'mi-parcours': { filename:'Prototypes pratiques Bac.py', 
            
            
            
       iface_url: 'https://drive.google.com/file/d/1OwNYylvknAnaiPzuI4AkTeIJozJIQ0uB/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1YGP03rqCcUHbLDpPo_kGRwFk02IxjAZ4/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">Premier</span>(A):
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">2</span>, (A <span class="t-op">//</span> <span class="t-nb">2</span>) <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> A <span class="t-op">%</span> i <span class="t-op">==</span> <span class="t-nb">0</span>:
            <span class="t-kw">return</span> <span class="t-nb">False</span>
    <span class="t-kw">return</span> <span class="t-nb">True</span>

<span class="t-kw">def</span> <span class="t-fn">Palindrome</span>(CH):
    i <span class="t-op">=</span> <span class="t-nb">0</span>
    j <span class="t-op">=</span> <span class="t-fn">len</span>(CH) <span class="t-op">-</span> <span class="t-nb">1</span>
    <span class="t-kw">while</span> (i <span class="t-op">&lt;</span> j) <span class="t-kw">and</span> (CH[i] <span class="t-op">==</span> CH[j]):
        i <span class="t-op">+=</span> <span class="t-nb">1</span>    
        j <span class="t-op">-=</span> <span class="t-nb">1</span>
    <span class="t-kw">return</span> i <span class="t-op">&gt;=</span> j

<span class="t-kw">def</span> <span class="t-fn">Verif</span>(N):
    A <span class="t-op">=</span> <span class="t-fn">int</span>(N)
    <span class="t-kw">if</span> <span class="t-fn">Palindrome</span>(N) <span class="t-kw">and</span> <span class="t-fn">Premier</span>(A):
        <span class="t-kw">return</span> <span class="t-nb">True</span>
    <span class="t-kw">return</span> <span class="t-nb">False</span>

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    N <span class="t-op">=</span> windows.N.text()
    <span class="t-kw">if</span> <span class="t-fn">len</span>(N) <span class="t-op">&gt;=</span> <span class="t-nb">3</span> :
        <span class="t-kw">if</span> <span class="t-fn">Verif</span>(N):
            msg <span class="t-op">=</span> N <span class="t-op">+</span> <span class="t-st">" est premier palindrome"</span>
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> N <span class="t-op">+</span> <span class="t-st">" n'est pas premier palindrome"</span>
    <span class="t-kw">else</span>:
        msg <span class="t-op">=</span> <span class="t-st">"N doit etre de 3 chiffres au minimum!"</span>
    
    windows.affiche.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"interface.ui"</span>)
windows.show()
windows.verif.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
  
  
            'anglais-blanc': { filename:'Prototypes pratiques Bac.py', 
              
       iface_url: 'https://drive.google.com/file/d/1fDlxFPqyFiGUm2ahqXKDWEoF_rbN51Vt/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1KpzY0dSJl07hLR8r6E9ynVQu7zQYYlyc/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">Unitaire</span>(N):
    DU <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> A <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">2</span>, <span class="t-nb">10</span>):
        <span class="t-kw">if</span> <span class="t-fn">Verif</span>(<span class="t-fn">int</span>(N), A):
            DU <span class="t-op">+=</span> <span class="t-fn">str</span>(A) <span class="t-op">+</span> <span class="t-st">","</span>
    <span class="t-kw">return</span> DU[:<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">Verif</span>(N, A):
    B <span class="t-op">=</span> <span class="t-nb">1</span>
    <span class="t-kw">while</span> (N <span class="t-op">!=</span> A <span class="t-op">*</span> B) <span class="t-kw">and</span> (B <span class="t-op">!=</span> N):
        B <span class="t-op">+=</span> <span class="t-nb">1</span>
        
    <span class="t-kw">if</span> (N <span class="t-op">==</span> A <span class="t-op">*</span> B <span class="t-kw">and</span> <span class="t-fn">PGCD</span>(A, B) <span class="t-op">==</span> <span class="t-nb">1</span>):
        <span class="t-kw">return</span> <span class="t-nb">True</span>
    
    <span class="t-kw">return</span> <span class="t-nb">False</span>
        
<span class="t-kw">def</span> <span class="t-fn">PGCD</span>(A, B):
    <span class="t-kw">while</span> (B <span class="t-op">!=</span> <span class="t-nb">0</span>):
        R <span class="t-op">=</span> A <span class="t-op">%</span> B
        A <span class="t-op">=</span> B
        B <span class="t-op">=</span> R
    <span class="t-kw">return</span> A

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    N <span class="t-op">=</span> windows.N.text()
    <span class="t-kw">if</span> <span class="t-fn">len</span>(N) <span class="t-op">==</span> <span class="t-nb">3</span>:
        <span class="t-kw">if</span> <span class="t-fn">Unitaire</span>(N) <span class="t-op">!=</span> <span class="t-st">""</span>:
            msg <span class="t-op">=</span> <span class="t-st">"les diviseurs unitaires de "</span> <span class="t-op">+</span> N <span class="t-op">+</span> <span class="t-st">" sont: "</span> <span class="t-op">+</span> <span class="t-fn">Unitaire</span>(N)
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> N <span class="t-op">+</span> <span class="t-st">" ne possede aucun diviseurs unitaires"</span>
    <span class="t-kw">else</span>:
        msg <span class="t-op">=</span> <span class="t-st">"N doit etre composee de 3 chiffres !"</span>
    windows.affichage.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"Interface.ui"</span>)
windows.show()
windows.Afficher.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

              'physique-final': { filename:'Prototypes pratiques Bac.py', 
                
                
       iface_url: 'https://drive.google.com/file/d/1dcEKZmxm-2MFNv_uABUSB9CGa_jsXQnG/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1sdErQDS1iE-H2Qw5-Qv6MHPVYU0ot8AL/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">Verif</span>(N):
    ch <span class="t-op">=</span> <span class="t-fn">Conv_binaire</span>(N)
    S1 <span class="t-op">=</span> <span class="t-nb">0</span>
    S0 <span class="t-op">=</span> <span class="t-nb">0</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(ch)):
        <span class="t-kw">if</span> ch[i] <span class="t-op">==</span> <span class="t-st">"1"</span>:
            S1 <span class="t-op">+=</span> <span class="t-nb">1</span>
        <span class="t-kw">else</span>:
            S0 <span class="t-op">+=</span> <span class="t-nb">1</span>
    <span class="t-kw">if</span> S0 <span class="t-op">==</span> S1:
        <span class="t-kw">return</span> <span class="t-nb">True</span>
    <span class="t-kw">return</span> <span class="t-nb">False</span>

<span class="t-kw">def</span> <span class="t-fn">Conv_binaire</span>(N):
    <span class="t-kw">if</span> N <span class="t-op">==</span> <span class="t-nb">0</span> :
        ch <span class="t-op">=</span> <span class="t-st">"0"</span>
    <span class="t-kw">else</span>:
        ch <span class="t-op">=</span> <span class="t-st">""</span>
        <span class="t-kw">while</span> N <span class="t-op">!=</span> <span class="t-nb">0</span> :
            r <span class="t-op">=</span> N <span class="t-op">%</span> <span class="t-nb">2</span>
            N <span class="t-op">=</span> N <span class="t-op">//</span> <span class="t-nb">2</span>
            ch <span class="t-op">=</span> <span class="t-fn">str</span>(r) <span class="t-op">+</span> ch
    <span class="t-kw">return</span> ch

<span class="t-kw">def</span> <span class="t-fn">Ronds</span>(A, B):
    CHR <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> N <span class="t-kw">in</span> <span class="t-fn">range</span>(A, B <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> <span class="t-fn">Verif</span>(N):
            CHR <span class="t-op">+=</span> <span class="t-fn">str</span>(N) <span class="t-op">+</span> <span class="t-st">"-"</span>
    <span class="t-kw">return</span> CHR[:<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    A <span class="t-op">=</span> <span class="t-fn">int</span>(windows.A.text())
    B <span class="t-op">=</span> <span class="t-fn">int</span>(windows.B.text())
    <span class="t-kw">if</span> A <span class="t-op">&gt;=</span> <span class="t-nb">10</span> <span class="t-kw">and</span> A <span class="t-op">&lt;=</span> <span class="t-nb">30</span> :
        <span class="t-kw">if</span> B <span class="t-op">&gt;</span> A <span class="t-kw">and</span> B <span class="t-op">&lt;=</span> <span class="t-nb">99</span>:
            <span class="t-kw">if</span> <span class="t-fn">Ronds</span>(A, B) <span class="t-op">!=</span> <span class="t-st">""</span>:
                msg <span class="t-op">=</span> <span class="t-st">"Les nombres ronds sont :"</span> <span class="t-op">+</span> <span class="t-fn">Ronds</span>(A, B)
            <span class="t-kw">else</span>:
                msg <span class="t-op">=</span> <span class="t-st">"Aucun nombre rond"</span>
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"B doit etre dans ]"</span> <span class="t-op">+</span> <span class="t-fn">str</span>(A) <span class="t-op">+</span> <span class="t-st">"..99]!"</span>
    <span class="t-kw">else</span>:
        msg <span class="t-op">=</span> <span class="t-st">"A doit etre dans [10..30]!"</span>
    windows.affichage.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"Interface.ui"</span>)
windows.show()
windows.Afficher.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
                'formule-maths': { filename:'Prototypes pratiques Bac.py', 
                  
                  
                  
                
       iface_url: 'https://drive.google.com/file/d/1bVVvMH3Q7Ts_ccwjrINPYUet-67VMVIb/view?usp=drive_link',
    iface_label: 'Ouvrir QT',
    pages: '24', subject: 'Mathématiques',
    pdf_content: 'iframe:https://drive.google.com/file/d/1ylI4auJL7TUB07z0RtETjuo0YHiWIX8P/preview',
    python: `<span class="t-kw">from</span> PyQt5.uic <span class="t-kw">import</span> loadUi 
<span class="t-kw">from</span> PyQt5.QtWidgets <span class="t-kw">import</span> QApplication 

<span class="t-kw">def</span> <span class="t-fn">PUISS</span>(N, P):
    A <span class="t-op">=</span> <span class="t-nb">1</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-nb">1</span>, P <span class="t-op">+</span> <span class="t-nb">1</span>):
        A <span class="t-op">=</span> A <span class="t-op">*</span> N
    <span class="t-kw">return</span> A

<span class="t-kw">def</span> <span class="t-fn">SommePuiss</span>(N):
    S <span class="t-op">=</span> <span class="t-nb">0</span>
    <span class="t-kw">for</span> i <span class="t-kw">in</span> <span class="t-fn">range</span>(<span class="t-fn">len</span>(N)):
        S <span class="t-op">+=</span> <span class="t-fn">PUISS</span>(<span class="t-fn">int</span>(N[i]), <span class="t-fn">len</span>(N))
    <span class="t-kw">return</span> S

<span class="t-kw">def</span> <span class="t-fn">Arsmstorng</span>(A, B):
    CHR <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">for</span> N <span class="t-kw">in</span> <span class="t-fn">range</span>(A, B <span class="t-op">+</span> <span class="t-nb">1</span>):
        <span class="t-kw">if</span> N <span class="t-op">==</span> <span class="t-fn">SommePuiss</span>(<span class="t-fn">str</span>(N)):
            CHR <span class="t-op">+=</span> <span class="t-fn">str</span>(N) <span class="t-op">+</span> <span class="t-st">","</span>
    <span class="t-kw">return</span> CHR[:<span class="t-op">-</span><span class="t-nb">1</span>]

<span class="t-kw">def</span> <span class="t-fn">play</span>():
    A <span class="t-op">=</span> <span class="t-fn">int</span>(windows.A.text())
    B <span class="t-op">=</span> <span class="t-fn">int</span>(windows.B.text())
    msg <span class="t-op">=</span> <span class="t-st">""</span>
    <span class="t-kw">if</span> A <span class="t-op">&gt;=</span> <span class="t-nb">10</span> <span class="t-kw">and</span> A <span class="t-op">&lt;=</span> <span class="t-nb">1000</span> :
        <span class="t-kw">if</span> B <span class="t-op">&gt;</span> A <span class="t-kw">and</span> B <span class="t-op">&lt;=</span> <span class="t-nb">10000</span> :
            <span class="t-kw">if</span> <span class="t-fn">Arsmstorng</span>(A, B) <span class="t-op">!=</span> <span class="t-st">""</span>:
                msg <span class="t-op">=</span> <span class="t-fn">Arsmstorng</span>(A, B)
            <span class="t-kw">else</span>:
                msg <span class="t-op">=</span> <span class="t-st">"Aucun nombre d'armstrong dans cet intervalle"</span>
        <span class="t-kw">else</span>:
            msg <span class="t-op">=</span> <span class="t-st">"B doit etre dans ]"</span> <span class="t-op">+</span> <span class="t-fn">str</span>(A) <span class="t-op">+</span> <span class="t-st">"..10000]!"</span>
    <span class="t-kw">else</span>:
        msg <span class="t-op">=</span> <span class="t-st">"A doit etre dans [10..1000]!"</span>
    windows.affichage.setText(msg)

app <span class="t-op">=</span> <span class="t-fn">QApplication</span>([])
windows <span class="t-op">=</span> <span class="t-fn">loadUi</span>(<span class="t-st">"Interface.ui"</span>)
windows.show()
windows.Afficher.clicked.connect(<span class="t-fn">play</span>) 
app.exec_()`, 
    iface_preview:'<div class="iface-preview"><div class="iface-preview-body"><p style="font-size:10.5px;color:var(--ink-3)">QT Design.</p></div></div>' },

  
};

let currentId = null;

function openItemModal(id, title, sub) {
  currentId = id;
  document.getElementById('opt-title').textContent = title;
  document.getElementById('opt-sub').textContent = sub;
  document.getElementById('modal-options').classList.add('open');
}

function closeAll() {
  document.querySelectorAll('.modal-overlay,.pdf-viewer-overlay,.code-viewer-overlay,.iface-overlay').forEach(m => m.classList.remove('open'));
}

function openPdfViewer() {
  const d = DATA[currentId]; if (!d) return;
  document.getElementById('modal-options').classList.remove('open');
  document.getElementById('pv-name').textContent = document.getElementById('opt-title').textContent;
  document.getElementById('pv-meta').textContent = d.subject + ' · ' + d.pages + ' pages';
  document.getElementById('pv-page-info').textContent = 'Page 1 sur ' + d.pages;
  document.getElementById('pv-gdrive-btn').href = d.gdrive;

  const pvBody = document.getElementById('pv-body');
  if (d.pdf_content && d.pdf_content.startsWith('iframe:')) {
    const src = d.pdf_content.slice(7);
    pvBody.style.cssText = 'flex:1;padding:0;background:#525659;overflow:hidden;position:relative;min-height:400px';
    pvBody.innerHTML = '<iframe src="' + src + '" style="position:absolute;inset:0;width:100%;height:100%;border:none;display:block" allow="autoplay" allowfullscreen loading="lazy"></iframe>';
  } else {
    pvBody.style.cssText = 'flex:1;overflow-y:auto;background:var(--surface-2)';
    pvBody.innerHTML = '<div class="pv-doc-area">' + d.pdf_content + '</div>';
  }
  document.getElementById('modal-pdf-viewer').classList.add('open');
}
function closePdfViewer() {
  document.getElementById('modal-pdf-viewer').classList.remove('open');
  const pvBody = document.getElementById('pv-body');
  if (pvBody) pvBody.style.cssText = '';
}

function openCodeViewer() {
  const d = DATA[currentId]; if (!d) return;
  document.getElementById('modal-options').classList.remove('open');
  document.getElementById('cv-filename').textContent = d.filename;
  document.getElementById('cv-code-pre').innerHTML = d.python;
  document.getElementById('modal-code-viewer').classList.add('open');
}
function closeCodeViewer() { document.getElementById('modal-code-viewer').classList.remove('open'); }

function copyCode() {
  const pre = document.getElementById('cv-code-pre');
  navigator.clipboard.writeText(pre.innerText || pre.textContent).then(() => {
    const btn = document.getElementById('cv-copy-btn');
    btn.textContent = 'Copié !';
    setTimeout(() => btn.textContent = 'Copier', 1600);
  }).catch(() => {});
}

function openInterface() {
  const d = DATA[currentId]; if (!d) return;
  document.getElementById('modal-options').classList.remove('open');
  document.getElementById('iface-title').textContent = 'Interface — ' + document.getElementById('opt-title').textContent;
  document.getElementById('iface-sub').textContent = d.iface_label;
  document.getElementById('iface-body').innerHTML = d.iface_preview;
  const btn = document.getElementById('iface-open-btn');
  btn.href = d.iface_url;
  btn.innerHTML = `<i class="fas fa-arrow-up-right-from-square"></i> ${d.iface_label}`;
  document.getElementById('modal-interface').classList.add('open');
}
function closeInterface() { document.getElementById('modal-interface').classList.remove('open'); }

['modal-options','modal-pdf-viewer','modal-code-viewer','modal-interface'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', e => { if (e.target === el) el.classList.remove('open'); });
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeAll();
    closePdfChoice();
    closeDriveViewer();
  }
});

// ──────────────────────────────────────────────────
//  UI helpers
// ──────────────────────────────────────────────────
const ps = document.getElementById('panelsScroll');
const dots = document.querySelectorAll('#panelDots .dot');
if (ps && dots.length) {
  ps.addEventListener('scroll', () => {
    const i = Math.round(ps.scrollLeft / ps.clientWidth);
    dots.forEach((d, j) => d.classList.toggle('on', i === j));
  }, { passive: true });
}

document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(x => { x.classList.remove('on'); x.classList.add('off'); });
    c.classList.remove('off'); c.classList.add('on');
  });
});

document.querySelectorAll('.sb-item').forEach(l => {
  l.addEventListener('click', function() {
    document.querySelectorAll('.sb-item').forEach(x => x.classList.remove('active'));
    this.classList.add('active');
  });
});
