*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
    --white:#ffffff;
    --surface:#f2f2f7;
    --surface-2:#e5e5ea;
    --surface-3:#d1d1d6;
    --border:rgba(0,0,0,0.09);
    --border-strong:rgba(0,0,0,0.15);
    --shadow-sm:0 1px 4px rgba(0,0,0,0.06),0 2px 8px rgba(0,0,0,0.04);
    --shadow-md:0 4px 20px rgba(0,0,0,0.07),0 1px 4px rgba(0,0,0,0.05);
    --shadow-lg:0 12px 40px rgba(0,0,0,0.10),0 4px 12px rgba(0,0,0,0.06);
    --text-primary:#1c1c1e;
    --text-secondary:#636366;
    --text-tertiary:#aeaeb2;
    --accent:#0071e3;
    --accent-dark:#0062c4;
    --accent-light:rgba(0,113,227,0.09);
    --accent-border:rgba(0,113,227,0.22);
    --green:#34c759;--green-light:rgba(52,199,89,0.10);--green-border:rgba(52,199,89,0.25);
    --red:#ff3b30;--red-light:rgba(255,59,48,0.09);--red-border:rgba(255,59,48,0.22);
    --yellow:#ff9f0a;--yellow-light:rgba(255,159,10,0.10);--yellow-border:rgba(255,159,10,0.22);
    --purple:#af52de;--teal:#32ade6;
    --r-sm:10px;--r-md:14px;--r-lg:20px;--r-xl:26px;--r-2xl:32px;
    --font:'Sora',-apple-system,BlinkMacSystemFont,sans-serif;
    --mono:'JetBrains Mono','Fira Code',monospace;
    --ease:0.22s cubic-bezier(0.4,0,0.2,1);
}
html{scroll-behavior:smooth;scrollbar-gutter:stable}
body{
    font-family:var(--font);background:var(--surface);color:var(--text-primary);
    min-height:100vh;display:flex;align-items:flex-start;justify-content:center;
    padding:40px 16px 80px;-webkit-font-smoothing:antialiased;
}
.container{width:100%;max-width:700px}
section{display:none}
section.visible{display:block;animation:fadeUp 0.4s cubic-bezier(0.4,0,0.2,1) both}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}

/* ── TYPOGRAPHY ── */
h1{font-size:clamp(26px,5vw,40px);font-weight:800;letter-spacing:-0.03em;line-height:1.1;color:var(--text-primary);margin-bottom:10px}
h1 sup{font-size:0.5em;vertical-align:super}
.subtitle{font-size:16px;font-weight:400;color:var(--text-secondary);line-height:1.65;margin-bottom:32px}

/* ── CARD ── */
.card{background:var(--white);border-radius:var(--r-2xl);border:1px solid var(--border);box-shadow:var(--shadow-md);padding:28px 32px}

/* ── BUTTONS ── */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;font-family:var(--font);font-size:14px;font-weight:600;padding:11px 22px;border-radius:var(--r-md);border:none;cursor:pointer;transition:all var(--ease);letter-spacing:-0.01em;white-space:nowrap;line-height:1;user-select:none;-webkit-tap-highlight-color:transparent}
.btn:disabled{opacity:0.38;cursor:not-allowed;pointer-events:none}
.btn svg{width:15px;height:15px;flex-shrink:0}
.btn-primary{background:var(--accent);color:#fff;box-shadow:0 3px 12px rgba(0,113,227,0.28)}
.btn-primary:hover:not(:disabled){background:var(--accent-dark);box-shadow:0 5px 20px rgba(0,113,227,0.36);transform:translateY(-1px)}
.btn-primary:active:not(:disabled){transform:translateY(0);box-shadow:0 2px 8px rgba(0,113,227,0.22)}
.btn-secondary{background:var(--white);color:var(--text-primary);border:1.5px solid var(--border)}
.btn-secondary:hover:not(:disabled){background:var(--surface);border-color:var(--border-strong);transform:translateY(-1px)}
.btn-ghost{background:transparent;color:var(--text-secondary);border:1.5px solid var(--border)}
.btn-ghost:hover:not(:disabled){background:var(--surface);color:var(--text-primary)}
.btn-danger{background:var(--red-light);color:var(--red);border:1.5px solid var(--red-border)}
.btn-danger:hover:not(:disabled){background:rgba(255,59,48,0.14)}
.btn-warn{background:var(--yellow-light);color:#9a5d00;border:1.5px solid var(--yellow-border)}
.btn-warn:hover:not(:disabled){background:rgba(255,159,10,0.16)}

/* ── HOME ── */
.app-icon{width:90px;height:90px;background:linear-gradient(150deg,#0071e3,#32ade6);border-radius:22px;display:flex;align-items:center;justify-content:center;margin:0 auto 24px;box-shadow:0 10px 36px rgba(0,113,227,0.26)}
.app-icon svg{width:48px;height:48px;color:#fff}
.home-tag{display:inline-flex;align-items:center;gap:6px;background:var(--accent-light);color:var(--accent);font-size:11px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;padding:5px 12px;border-radius:999px;margin-bottom:14px;border:1px solid var(--accent-border)}
.feature-pills{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:4px}
.feature-pill{display:flex;align-items:center;gap:6px;background:var(--white);border:1px solid var(--border);border-radius:999px;padding:7px 14px;font-size:12px;font-weight:500;color:var(--text-secondary);box-shadow:var(--shadow-sm)}
.feature-pill svg{width:13px;height:13px;flex-shrink:0}

/* ── CONFIG ── */
.section-label{font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--text-tertiary);margin-bottom:12px;display:flex;align-items:center;gap:6px}
.section-label svg{width:12px;height:12px}
.divider{height:1px;background:var(--border);margin:24px 0}
.theme-grid{display:flex;flex-wrap:wrap;gap:8px}
.theme-chip input{display:none}
.theme-chip label{display:flex;align-items:center;gap:8px;padding:10px 16px;border-radius:var(--r-md);border:1.5px solid var(--border);background:var(--white);cursor:pointer;font-size:13px;font-weight:500;color:var(--text-secondary);transition:all var(--ease);user-select:none;-webkit-tap-highlight-color:transparent;min-height:44px}
.theme-chip label:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-light)}
.theme-chip input:checked+label{background:var(--accent-light);border-color:var(--accent);color:var(--accent);font-weight:600}
.theme-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.dot-html{background:#ff3b30}.dot-css{background:#0071e3}.dot-js{background:#ff9f0a}.dot-php{background:#af52de}.dot-db{background:#34c759}
.pill-group{display:flex;flex-wrap:wrap;gap:7px}
.pill-option input{display:none}
.pill-option label{padding:9px 18px;border-radius:999px;border:1.5px solid var(--border);background:var(--white);cursor:pointer;font-size:13px;font-weight:500;color:var(--text-secondary);transition:all var(--ease);user-select:none;-webkit-tap-highlight-color:transparent;min-height:40px;display:flex;align-items:center}
.pill-option label:hover{border-color:var(--accent);color:var(--accent)}
.pill-option input:checked+label{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}

/* ── QUIZ HEADER ── */
.quiz-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;gap:12px;flex-wrap:wrap}
.quiz-meta{display:flex;align-items:center;gap:8px}
.progress-label{font-size:13px;font-weight:600;color:var(--text-secondary);white-space:nowrap}
.timer-pill{display:inline-flex;align-items:center;gap:5px;font-size:13px;font-weight:600;color:var(--text-secondary);background:var(--white);border:1px solid var(--border);padding:6px 12px;border-radius:999px;box-shadow:var(--shadow-sm);white-space:nowrap;flex-shrink:0}
.timer-pill svg{width:13px;height:13px;color:var(--accent)}
.cancel-btn-top{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:600;color:var(--red);background:var(--red-light);border:1.5px solid var(--red-border);padding:6px 12px;border-radius:999px;cursor:pointer;transition:all var(--ease);white-space:nowrap;flex-shrink:0;-webkit-tap-highlight-color:transparent}
.cancel-btn-top:hover{background:rgba(255,59,48,0.14);transform:translateY(-1px)}
.cancel-btn-top svg{width:12px;height:12px}
.progress-track{width:100%;height:6px;background:var(--surface-2);border-radius:999px;margin-bottom:24px;overflow:hidden}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--teal));border-radius:999px;transition:width 0.4s cubic-bezier(0.4,0,0.2,1);min-width:6px}

/* ── QUESTION ── */
.q-badge{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;padding:4px 10px;border-radius:999px;margin-bottom:16px;flex-shrink:0}
.q-badge-dot{width:5px;height:5px;border-radius:50%;flex-shrink:0}
.q-type-tag{display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;color:var(--text-tertiary);background:var(--surface);border:1px solid var(--border);padding:3px 8px;border-radius:999px;margin-left:8px;vertical-align:middle;white-space:nowrap}
#question-text{font-size:17px;font-weight:600;line-height:1.6;color:var(--text-primary);margin-bottom:22px;word-break:break-word}

/* ── OPTIONS ── */
.option-label{display:flex;align-items:flex-start;gap:12px;padding:13px 16px;border-radius:var(--r-md);border:1.5px solid var(--border);background:var(--white);cursor:pointer;font-size:14px;color:var(--text-primary);transition:all var(--ease);margin-bottom:9px;line-height:1.5;-webkit-tap-highlight-color:transparent;user-select:none;word-break:break-word}
.option-label:hover{border-color:var(--accent);background:var(--accent-light);color:var(--text-primary)}
.option-label.selected{border-color:var(--accent);background:var(--accent-light)}
.option-label:last-child{margin-bottom:0}
.opt-indicator{width:20px;height:20px;min-width:20px;flex-shrink:0;border-radius:50%;border:2px solid var(--border-strong);display:flex;align-items:center;justify-content:center;margin-top:2px;transition:all var(--ease)}
.opt-indicator.box{border-radius:6px}
.option-label.selected .opt-indicator{background:var(--accent);border-color:var(--accent)}
.option-label:hover:not(.selected) .opt-indicator{border-color:var(--accent)}
.opt-indicator svg{width:10px;height:10px;color:#fff;opacity:0;transition:opacity 0.12s}
.option-label.selected .opt-indicator svg{opacity:1}
input.quiz-input{width:100%;padding:13px 16px;font-family:var(--mono);font-size:14px;border-radius:var(--r-md);border:1.5px solid var(--border);background:var(--white);color:var(--text-primary);outline:none;transition:border-color var(--ease),box-shadow var(--ease)}
input.quiz-input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(0,113,227,0.12)}
input.quiz-input::placeholder{color:var(--text-tertiary)}

/* ── NAV ── */
.quiz-nav{display:flex;align-items:center;justify-content:space-between;margin-top:28px;padding-top:20px;border-top:1px solid var(--border);flex-wrap:wrap;gap:10px}
.quiz-nav-right{display:flex;gap:8px;align-items:center;flex-wrap:wrap}

/* ── CODE ── */
:not(pre)>code{font-family:var(--mono);background:#eef3ff;color:var(--accent);padding:2px 6px;border-radius:5px;font-size:0.87em;border:1px solid rgba(0,113,227,0.14);word-break:break-all}
pre[class*="language-"]{border-radius:var(--r-md);font-family:var(--mono)!important;font-size:12.5px;margin:10px 0;border:1px solid var(--border);overflow-x:auto;-webkit-overflow-scrolling:touch}
pre[class*="language-"] code{word-break:normal}

/* ── CANCEL MODAL ── */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.4);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:1000;opacity:0;pointer-events:none;transition:opacity 0.2s;padding:16px}
.modal-overlay.open{opacity:1;pointer-events:all}
.modal-box{background:var(--white);border-radius:var(--r-xl);padding:32px;max-width:360px;width:100%;box-shadow:var(--shadow-lg);transform:scale(0.94) translateY(8px);transition:all 0.22s cubic-bezier(0.4,0,0.2,1);border:1px solid var(--border)}
.modal-overlay.open .modal-box{transform:scale(1) translateY(0)}
.modal-icon{width:52px;height:52px;border-radius:16px;background:var(--red-light);border:1px solid var(--red-border);display:flex;align-items:center;justify-content:center;margin:0 auto 18px}
.modal-icon svg{width:26px;height:26px;color:var(--red)}
.modal-title{font-size:18px;font-weight:700;text-align:center;margin-bottom:8px;letter-spacing:-0.02em}
.modal-subtitle{font-size:14px;color:var(--text-secondary);text-align:center;margin-bottom:24px;line-height:1.55}
.modal-actions{display:flex;gap:10px}
.modal-actions .btn{flex:1;justify-content:center}

/* ── RESULTS ── */
.results-hero{background:linear-gradient(145deg,#f0f7ff,var(--white));border-radius:var(--r-2xl);border:1px solid rgba(0,113,227,0.13);padding:36px 28px;text-align:center;margin-bottom:16px;position:relative;overflow:hidden}
.results-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 70% 20%,rgba(0,113,227,0.05),transparent 55%);pointer-events:none}
.results-hero .rh-label{font-size:11px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:var(--text-tertiary);margin-bottom:8px}
.score-big{font-size:clamp(52px,10vw,72px);font-weight:800;letter-spacing:-0.05em;color:var(--accent);line-height:1;margin-bottom:4px}
.score-sub{font-size:13px;color:var(--text-tertiary);margin-bottom:16px}
.score-time-badge{display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1px solid var(--border);padding:6px 14px;border-radius:999px;font-size:12px;font-weight:500;color:var(--text-secondary)}
.score-time-badge svg{width:12px;height:12px;color:var(--accent)}

/* stats row */
.stats-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:16px}
.stat-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:16px 12px;text-align:center}
.stat-card .sv{font-size:clamp(22px,5vw,28px);font-weight:800;letter-spacing:-0.03em;margin-bottom:4px}
.stat-card .sl{font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-tertiary)}
.stat-card.ok .sv{color:var(--green)}
.stat-card.err .sv{color:var(--red)}
.stat-card.skip .sv{color:var(--yellow)}

/* theme scores */
.theme-breakdown{background:var(--white);border:1px solid var(--border);border-radius:var(--r-xl);overflow:hidden;margin-bottom:16px}
.theme-breakdown-header{padding:16px 20px 12px;border-bottom:1px solid var(--border)}
.theme-breakdown-header h3{font-size:15px;font-weight:700;letter-spacing:-0.01em}
.theme-row{display:flex;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--border)}
.theme-row:last-child{border-bottom:none}
.theme-row-dot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.theme-row-name{font-size:13px;font-weight:600;flex:1;color:var(--text-primary);min-width:80px}
.theme-row-bar-track{flex:2;height:8px;background:var(--surface-2);border-radius:999px;overflow:hidden;min-width:0}
.theme-row-bar-fill{height:100%;border-radius:999px;transition:width 0.6s cubic-bezier(0.4,0,0.2,1);min-width:4px}
.theme-row-score{font-size:12px;font-weight:700;color:var(--text-secondary);min-width:40px;text-align:right;flex-shrink:0}

/* wrong answers */
.wrong-section-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.wrong-section-header h3{font-size:16px;font-weight:700;letter-spacing:-0.01em}
.wrong-section-header .count-badge{background:var(--red-light);color:var(--red);border:1px solid var(--red-border);font-size:11px;font-weight:700;padding:3px 10px;border-radius:999px}

.wrong-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-xl);overflow:hidden;margin-bottom:12px;box-shadow:var(--shadow-sm)}
.wrong-card-header{padding:16px 20px 12px;border-bottom:1px solid var(--border);display:flex;align-items:flex-start;gap:10px}
.wrong-card-num{width:24px;height:24px;min-width:24px;border-radius:8px;background:var(--red-light);border:1px solid var(--red-border);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--red);flex-shrink:0;margin-top:2px}
.wrong-card-q{font-size:14px;font-weight:600;line-height:1.55;color:var(--text-primary);flex:1;min-width:0;word-break:break-word}
.wrong-card-body{padding:14px 20px;overflow:hidden}
.answer-block{border-radius:var(--r-md);padding:10px 14px;margin-bottom:9px;display:flex;align-items:flex-start;gap:10px;word-break:break-word;overflow:hidden}
.answer-block:last-child{margin-bottom:0}
.answer-block.user-wrong{background:var(--red-light);border:1px solid var(--red-border)}
.answer-block.correct-ans{background:var(--green-light);border:1px solid var(--green-border)}
.answer-block.user-correct{background:var(--green-light);border:1px solid var(--green-border)}
.ab-icon{width:20px;height:20px;min-width:20px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.ab-icon svg{width:11px;height:11px}
.answer-block.user-wrong .ab-icon{background:rgba(255,59,48,0.18)}
.answer-block.user-wrong .ab-icon svg{color:var(--red)}
.answer-block.correct-ans .ab-icon,.answer-block.user-correct .ab-icon{background:rgba(52,199,89,0.22)}
.answer-block.correct-ans .ab-icon svg,.answer-block.user-correct .ab-icon svg{color:var(--green)}
.ab-label{font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:3px}
.answer-block.user-wrong .ab-label{color:var(--red)}
.answer-block.correct-ans .ab-label,.answer-block.user-correct .ab-label{color:var(--green)}
.ab-value{font-size:13px;font-weight:500;line-height:1.5;color:var(--text-primary);min-width:0;overflow-x:auto;-webkit-overflow-scrolling:touch}
.ab-value pre[class*="language-"]{margin:6px 0 0}
.wrong-explain{padding:12px 20px 16px;border-top:1px solid var(--border);background:var(--surface);display:flex;gap:8px;align-items:flex-start}
.wrong-explain-icon{width:18px;height:18px;min-width:18px;border-radius:5px;background:rgba(0,113,227,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.wrong-explain-icon svg{width:10px;height:10px;color:var(--accent)}
.wrong-explain p{font-size:12px;color:var(--text-secondary);line-height:1.6;flex:1;min-width:0;word-break:break-word}

.all-perfect{background:linear-gradient(145deg,#f0fff5,var(--white));border:1px solid var(--green-border);border-radius:var(--r-xl);padding:36px;text-align:center}
.all-perfect .ap-icon{font-size:44px;margin-bottom:12px}
.all-perfect p{font-size:15px;font-weight:600;color:var(--green)}

.results-actions{display:flex;justify-content:center;gap:10px;margin-top:28px;flex-wrap:wrap}
.results-actions .btn{padding:12px 28px}

footer{text-align:center;font-size:11px;color:var(--text-tertiary);margin-top:48px;padding-top:20px;border-top:1px solid var(--border)}

/* ── RESPONSIVE ── */
@media (max-width:480px){
    body{padding:20px 12px 60px}
    .card{padding:20px 18px}
    .quiz-topbar{gap:8px}
    .quiz-nav{flex-direction:column;align-items:stretch}
    .quiz-nav-right{justify-content:flex-end}
    .results-hero{padding:28px 20px}
    .theme-row-name{font-size:12px}
    .wrong-card-header{padding:14px 16px 10px}
    .wrong-card-body{padding:12px 16px}
    .wrong-explain{padding:10px 16px 14px}
    .answer-block{padding:9px 12px}
    .stats-row{gap:8px}
    .stat-card{padding:14px 8px}
    .results-actions .btn{flex:1;justify-content:center}
}

/* ── HEADER BUTTONS ── */
.header-buttons {
    position: fixed;
    top: 16px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    z-index: 100;
    pointer-events: none;
}.header-buttons .back-home-btn,
.header-buttons .profile-icon {
    pointer-events: auto;
}
.back-home-btn, .profile-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--ease);
    box-shadow: var(--shadow-sm);
    text-decoration: none;
    background: #ffffff;
    color: #1c1c1e;
}
.profile-icon {
    background: linear-gradient(135deg, var(--accent), var(--teal));
    color: white;
}
.back-home-btn:hover, .profile-icon:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-md);
}
.back-home-btn:hover {
    background: #f2f2f7;
}
.back-home-btn svg {
    width: 20px;
    height: 20px;
    stroke: #1c1c1e;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.profile-icon svg {
    width: 20px;
    height: 20px;
    stroke: white;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
}
.hidden-btn {
    display: none !important;
}

.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: var(--text-primary);
    color: white;
    padding: 12px 24px;
    border-radius: 40px;
    font-size: 0.9rem;
    font-weight: 500;
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    opacity: 0;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
    pointer-events: none;
}
.toast.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
.toast i {
    color: var(--green);
    margin-right: 8px;
}

.protected-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(24px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    color: white;
    text-align: center;
}
.protected-overlay h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
}
.protected-overlay p {
    font-size: 1rem;
    margin-bottom: 2rem;
    opacity: 0.7;
    max-width: 500px;
}
.protected-overlay .login-btn {
    background: var(--accent);
    color: white;
    padding: 14px 32px;
    border-radius: 40px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
}
.protected-overlay .login-btn:hover {
    filter: brightness(1.1);
    transform: translateY(-3px);
}
