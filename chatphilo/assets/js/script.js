
/* ══════ DATA ══════ */
const UNITS=[
  {name:'الأنية والغيرية',   desc:'الهوية الذاتية وعلاقتها بالآخر',     icon:'fa-user-circle',     bg:'linear-gradient(135deg,#4F46E5,#7C3AED)', color:'#4F46E5', nodeColor:'#4F46E5', shadow:'#3730A3', light:'#EEF2FF', border:'rgba(79,70,229,.15)', dark:'#3730A3'},
  {name:'الخصوصية والكونية',desc:'التوتر بين الخاص والعام',            icon:'fa-globe-europe',    bg:'linear-gradient(135deg,#0369A1,#0EA5E9)', color:'#0369A1', nodeColor:'#1CB0F6', shadow:'#075985', light:'#E0F2FE', border:'rgba(3,105,161,.15)',  dark:'#075985'},
  {name:'النمذجة',           desc:'بناء النماذج الفكرية',              icon:'fa-project-diagram', bg:'linear-gradient(135deg,#047857,#10B981)', color:'#047857', nodeColor:'#10B981', shadow:'#065F46', light:'#D1FAE5', border:'rgba(4,120,87,.15)',   dark:'#065F46'},
  {name:'الدولة',            desc:'السياسة والسلطة والشرعية',          icon:'fa-balance-scale',   bg:'linear-gradient(135deg,#B45309,#F59E0B)', color:'#B45309', nodeColor:'#F59E0B', shadow:'#92400E', light:'#FEF3C7', border:'rgba(180,83,9,.15)',   dark:'#92400E'},
  {name:'الخير والسعادة',   desc:'الأخلاق والفضيلة والغاية القصوى',   icon:'fa-seedling',        bg:'linear-gradient(135deg,#BE185D,#EC4899)', color:'#BE185D', nodeColor:'#EC4899', shadow:'#9D174D', light:'#FCE7F3', border:'rgba(190,24,93,.15)',  dark:'#9D174D'},
];
const STAGES_RAW = [
  {id:1, title:'الإنيّة كجوهر روحاني', sub:'أفلاطون وابن سينا والنفس المتعالية', icon:'fa-brain', driveId:'11i38Hx-lGC_iEM-AUyYvb7-5YvcccybW', duration:'15 دقيقة', level:'مبتدئ'},
  {id:2, title:'الكوجيتو الديكارتي', sub:'أنا أفكر إذن أنا موجود', icon:'fa-lightbulb', driveId:'1uRPgCJZEvmmCltEFF7yl4u9JkAwxcA25', duration:'10 دقيقة', level:'متوسط'},
  {id:3, title:'ثنائية النفس والجسد', sub:'حدود التصور المتعالي للإنيّة', icon:'fa-scale-balanced', driveId:'1iGXMwslyVZba0QBw-MFVx3wVCyBVjq3g', duration:'15 دقيقة', level:'متوسط'},
  {id:4, title:'الجسد والإدراك', sub:'الجسد كوسيلة لفهم العالم', icon:'fa-child-reaching', driveId:'1KQevUR6SkxXuUqkpfguAhiu9Z1GlP_nV', duration:'10 دقيقة', level:'متقدم'},
  {id:5, title:'تاريخية الوعي', sub:'الواقع الاجتماعي وتشكّل الذات', icon:'fa-clock-rotate-left', driveId:'1KZlSbyPcC09s3Vi9FxYsM5qlFeQrza8b', duration:'15 دقيقة', level:'متوسط'},
  {id:6, title:'اللاوعي وحدود الذات', sub:'فرويد وخفايا النفس الإنسانية', icon:'fa-moon', driveId:'1YriiCtr7oSKbwFNnckI3gOBVIoB_DrTH', duration:'10 دقيقة', level:'متقدم'},
  {id:7, title:'الغير والاعتراف', sub:'هيقل وتكوّن الوعي بالآخر', icon:'fa-handshake', driveId:'13uh6wkxNX6eYFrZ2VsIEJ-f_EggV959x', duration:'50 دقيقة', level:'متوسط'},
  
  {id:8,title:'مفهوم الهوية',sub:'الهوية الفردية والجماعية والثقافية',icon:'fa-id-card',driveId:'156V1_0a3an8W6iW8e-nE6LztZPX0O5hI',duration:'10 دقيقة',level:'متوسط'},
  {id:9,title:'أزمة الهوية والانتماء',sub:'شروط تحقق الهوية وتجاوز الأزمة',icon:'fa-person-circle-question',driveId:'1TC63Sn_gSq1GSP-YsCH6MDI0TRKGKSc6',duration:'15 دقيقة',level:'متوسط'},
  {id:10,title:'الكونية والقيم المشتركة',sub:'الحرية والعدالة والكرامة الإنسانية',icon:'fa-earth-americas',driveId:'1K_NV7IMQc7bvjns7GOXtXl8YiNWAzHkP',duration:'10 دقيقة',level:'متقدم'},
  {id:11,title:'تعاون الخصوصيات',sub:'الفارابي وبناء الكونية الإنسانية',icon:'fa-people-arrows',driveId:'1RGeUyyieVWtJCaReOLSFB1R2xuTCsSKD',duration:'10 دقيقة',level:'متوسط'},
  {id:12,title:'التعصب وصراع الهويات',sub:'تهديد التعايش والاعتراف بالآخر',icon:'fa-triangle-exclamation',driveId:'1jkfcGSA56ygrUpGMmQHxc7y36ktUE9Mt',duration:'15 دقيقة',level:'متوسط'},
  {id:13,title:'العولمة والهوية الثقافية',sub:'بين الانفتاح وتهديد الخصوصيات',icon:'fa-network-wired',driveId:'19_qvr7huiS4EH4k2NrjNqAnrM3iigr5w',duration:'10 دقيقة',level:'متقدم'},
  {id:14,title:'الاختلاف داخل العالم المعولم',sub:'حماية الخصوصية مع الانفتاح',icon:'fa-globe',driveId:'1sraVLX4g8Wl_2t5OWZiw5v6cxrith9dz',duration:'15 دقيقة',level:'متوسط'},

  {id:15,title:'ما هو النموذج؟',      sub:'تعريفات وأنواع النمذجة',       icon:'fa-cube',              driveId:'',duration:'45 دقيقة',level:'مبتدئ'},
  {id:16,title:'النماذج العلمية',     sub:'بين الواقع والتجريد',          icon:'fa-flask-vial',        driveId:'',duration:'55 دقيقة',level:'متوسط'},
  {id:17,title:'النمذجة الرياضية',    sub:'الصياغة الرمزية للعالم',       icon:'fa-infinity',          driveId:'',duration:'65 دقيقة',level:'متقدم'},
  {id:18,title:'حدود النماذج',        sub:'ما لا يمكن للنموذج قوله',      icon:'fa-circle-question',   driveId:'',duration:'50 دقيقة',level:'متقدم'},
  {id:19,title:'النموذج والواقع',     sub:'علاقة التمثيل بالحقيقة',       icon:'fa-mirror',            driveId:'',duration:'55 دقيقة',level:'متقدم'},
  {id:20,title:'النمذجة والمعرفة',    sub:'كيف نبني المعرفة نمذجةً؟',    icon:'fa-brain',             driveId:'',duration:'60 دقيقة',level:'متقدم'},
  {id:21,title:'النمذجة الفلسفية',    sub:'تطبيقات فكرية معاصرة',        icon:'fa-lightbulb',         driveId:'',duration:'50 دقيقة',level:'متوسط'},
  {id:22,title:'نشأة الدولة',         sub:'نظريات العقد الاجتماعي',       icon:'fa-city',              driveId:'',duration:'55 دقيقة',level:'متوسط'},
  {id:23,title:'السلطة والشرعية',     sub:'من أين تأتي السلطة؟',          icon:'fa-gavel',             driveId:'',duration:'60 دقيقة',level:'متوسط'},
  {id:24,title:'العدالة السياسية',    sub:'توزيع الموارد والحقوق',        icon:'fa-scale-balanced',    driveId:'',duration:'65 دقيقة',level:'متقدم'},
  {id:25,title:'الديمقراطية والحرية', sub:'نقد وتأسيس الأنظمة',          icon:'fa-landmark-dome',     driveId:'',duration:'70 دقيقة',level:'متقدم'},
  {id:26,title:'الدولة والمجتمع',     sub:'الفرد والجماعة والمؤسسة',      icon:'fa-people-roof',       driveId:'',duration:'60 دقيقة',level:'متوسط'},
  {id:27,title:'الثورة والإصلاح',     sub:'متى يحق تغيير النظام؟',        icon:'fa-fire',              driveId:'',duration:'65 دقيقة',level:'متقدم'},
  {id:28,title:'الدولة والأخلاق',     sub:'الحياد أم الالتزام الأخلاقي؟', icon:'fa-hand-holding-heart',driveId:'',duration:'60 دقيقة',level:'متقدم'},
  {id:29,title:'الفضيلة الأرسطية',   sub:'السعادة كغاية قصوى',           icon:'fa-star-half-stroke',  driveId:'',duration:'50 دقيقة',level:'متوسط'},
  {id:30,title:'اللذة والألم',        sub:'المذاهب الأبيقورية والرواقية', icon:'fa-yin-yang',          driveId:'',duration:'55 دقيقة',level:'متوسط'},
  {id:31,title:'الأخلاق الواجبية',   sub:'كانط والفعل الأخلاقي',         icon:'fa-compass',           driveId:'',duration:'60 دقيقة',level:'متقدم'},
  {id:32,title:'معنى الوجود',         sub:'الوجودية والإنسانية',          icon:'fa-question-circle',   driveId:'',duration:'65 دقيقة',level:'متقدم'},
  {id:33,title:'الخير والشر',         sub:'ثنائية القيمة الأخلاقية',      icon:'fa-circle-half-stroke',driveId:'',duration:'55 دقيقة',level:'متوسط'},
  {id:34,title:'السعادة الحديثة',    sub:'ما السعادة في عالمنا اليوم؟',  icon:'fa-sun',               driveId:'',duration:'50 دقيقة',level:'مبتدئ'},
  {id:35,title:'الحياة الجيدة',       sub:'نحو فلسفة عيش متكاملة',        icon:'fa-seedling',          driveId:'',duration:'55 دقيقة',level:'متوسط'},
];
const STAGES_PER_UNIT=7;

/* ══════ STATE ══════ */
function loadProgress(){try{const r=localStorage.getItem('edupath_ar_progress');return r?JSON.parse(r):{}}catch(e){return{}}}
function saveProgress(p){try{localStorage.setItem('edupath_ar_progress',JSON.stringify(p))}catch(e){}}
let progress=loadProgress(), currentStageId=1, activeEntry=null, readerOpenTime=0;

function getStages(){return STAGES_RAW.map(s=>({...s,completed:!!progress[s.id],prog:progress[s.id]?100:(s.id===currentStageId?20:0)}))}
function markComplete(id){if(progress[id])return false;progress[id]=true;saveProgress(progress);return true}
function getXP(){return Object.keys(progress).length*10}
function getStreak(){return Object.keys(progress).length>0?Math.min(Object.keys(progress).length,30):0}

/* ══════ BUILD MAP ══════ */
const ZIGZAG=['center','right','center','left','center','right','center'];

function buildMap(){
  const outer=document.getElementById('mapOuter');
  outer.innerHTML='';
  const stages=getStages();

  UNITS.forEach((unit,ui)=>{
    const unitStages=stages.slice(ui*STAGES_PER_UNIT,ui*STAGES_PER_UNIT+STAGES_PER_UNIT);
    const doneCount=unitStages.filter(s=>s.completed).length;
    const pct=Math.round(doneCount/unitStages.length*100);

    const banner=document.createElement('div');
    banner.className='unit-banner';
    banner.style.background=unit.bg;
    banner.innerHTML=`
      <div class="unit-banner-orb"></div>
      <div class="ub-ico"><i class="fas ${unit.icon}"></i></div>
      <div class="ub-text">
        <div class="ub-eyebrow">الوحدة ${ui+1} · ${unitStages.length} دروس</div>
        <div class="ub-title">${unit.name}</div>
        <div class="ub-desc">${unit.desc}</div>
      </div>
      <div class="ub-progress">
        <div class="ub-pct">${pct}%</div>
        <div class="ub-pct-lbl">مكتمل</div>
        <div class="ub-mini-bar"><div class="ub-mini-fill" style="width:${pct}%"></div></div>
      </div>`;
    outer.appendChild(banner);

    const path=document.createElement('div');
    path.className='duo-path';
    path.style.paddingTop='28px';
    path.style.paddingBottom=(ui<UNITS.length-1)?'0':'200px';

    unitStages.forEach((stage,si)=>{
      const globalIdx=ui*STAGES_PER_UNIT+si;
      const isDone=stage.completed;
      const isCurrent=stage.id===currentStageId&&!isDone;

      let nodeState=isDone?'done':(isCurrent?'current':'locked');
      const align=ZIGZAG[si]||'center';

      const row=document.createElement('div');
      row.className=`duo-row ${align}`;

      const nodeEl=document.createElement('div');
      nodeEl.className=`duo-node ${nodeState}`;
      nodeEl.dataset.id=stage.id;
      nodeEl.style.transitionDelay=(si*60)+'ms';

      let btnBg,btnShadow;
      if(isDone){btnBg='var(--green)';btnShadow='#3d9400';}
      else if(isCurrent){btnBg=unit.nodeColor||unit.color;btnShadow=unit.shadow;}
      else{btnBg='#E5E5E5';btnShadow='#C0C0C0';}

      const checkBadge=isDone?'<div class="node-check"><i class="fas fa-check"></i></div>':'';
      const crownEl=isCurrent?'<div class="node-crown">👑</div>':'';

      const ttBg=isDone?'var(--green)':(isCurrent?unit.color:'var(--green)');
      const ttShadow=isDone?'#3d9400':(isCurrent?unit.shadow:'#3d9400');
      const ttBtnLabel=isDone?'مراجعة':'ابدأ الدرس';
      const ttBtnIcon=isDone?'fa-redo':'fa-book-open';

      nodeEl.innerHTML=`
        ${crownEl}
        ${checkBadge}
        <div class="node-btn" style="background:${btnBg};--node-shadow:${btnShadow}">
          <i class="fas ${stage.icon}"></i>
        </div>
        <div class="node-label">${stage.title}</div>
        <div class="duo-tooltip">
          <div class="tt-icon" style="background:${isDone?'#D7F5B1':(isCurrent?unit.light:'#F0F0F0')};color:${isDone?'var(--green-dk)':(isCurrent?unit.color:'#9CA3AF')}">
            <i class="fas ${stage.icon}"></i>
          </div>
          <div class="tt-title">${stage.title}</div>
          <div class="tt-sub">${stage.sub}</div>
          <div class="tt-chips">
            <div class="tt-chip"><i class="fas fa-clock"></i>${stage.duration}</div>
            <div class="tt-chip"><i class="fas fa-signal"></i>${stage.level}</div>
          </div>
          <button class="tt-btn" style="background:${ttBg};--tt-shadow:${ttShadow}">
            <i class="fas ${ttBtnIcon}" style="margin-left:6px"></i>${ttBtnLabel}
          </button>
        </div>`;

      nodeEl.addEventListener('click',()=>{currentStageId=stage.id;openDetail(stage,unit);updateNavBtns();buildNavDots()});

      row.appendChild(nodeEl);
      path.appendChild(row);
    });

    outer.appendChild(path);

    if(ui<UNITS.length-1){
      const gap=document.createElement('div');
      gap.className='unit-gap';
      gap.innerHTML=`<div class="unit-gap-chip"><i class="fas fa-arrow-down"></i> الوحدة التالية</div>`;
      outer.appendChild(gap);
    }
  });

  updateTopBar();buildNavDots();updateNavBtns();
  requestAnimationFrame(()=>setTimeout(revealNodes,50));
}

function revealNodes(){
  document.querySelectorAll('.duo-node').forEach((n,i)=>{
    setTimeout(()=>n.classList.add('visible'),i*30);
  });
}

let resizeTimer;
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(buildMap,120)});

/* ══════ DETAIL PANEL ══════ */
function openDetail(stage,unit){
  const stages=getStages();const s=stages.find(x=>x.id===stage.id)||stage;
  activeEntry={stage:s,unit};
  document.getElementById('detHeroBg').style.background=unit.bg;
  document.getElementById('detIco').innerHTML=`<i class="fas ${s.icon}"></i>`;
  document.getElementById('detUnitLabel').textContent=`${unit.name} · الدرس ${s.id}`;
  document.getElementById('detTitle').textContent=s.title;
  document.getElementById('detSub').textContent=s.sub;
  document.getElementById('detStats').innerHTML=`
    <div class="det-stat"><div class="det-stat-label">المدة</div><div class="det-stat-value">${s.duration}</div></div>
    <div class="det-stat"><div class="det-stat-label">المستوى</div><div class="det-stat-value">${s.level}</div></div>
    <div class="det-stat"><div class="det-stat-label">الحالة</div><div class="det-stat-value" style="color:${s.completed?'var(--green-dk)':unit.color}">${s.completed?'مكتمل ✓':'جاري'}</div></div>`;
  document.getElementById('detPct').textContent=s.prog+'%';
  const fill=document.getElementById('detFill');
  fill.style.background=s.completed?'var(--green)':unit.color;
  fill.style.width='0%';
  setTimeout(()=>fill.style.width=s.prog+'%',80);
  const note=document.getElementById('detNote');const noteText=document.getElementById('detNoteText');
  if(s.completed){note.className='det-note';note.querySelector('i').className='fas fa-check-circle';noteText.textContent='أحسنت! لقد أتممت هذا الدرس. يمكنك مراجعته متى شئت.';}
  else{note.className='det-note info';note.querySelector('i').className='fas fa-info-circle';noteText.textContent='افتح ملف PDF، اقرأ الدرس، ثم أغلق القارئ — سيتم حفظ تقدمك تلقائيًا.';}
  const btn=document.getElementById('btnStart');btn.style.background=s.completed?'var(--green)':unit.color;
  btn.style.setProperty('--btn-shadow',s.completed?'var(--green-dk)':unit.shadow);
  document.getElementById('btnStartLabel').textContent=s.completed?'مراجعة الدرس':'ابدأ الدرس';
  btn.querySelector('i').className=s.completed?'fas fa-redo':'fas fa-book-open';
  document.getElementById('overlay').classList.add('active');
}
function closeDetail(){document.getElementById('overlay').classList.remove('active');activeEntry=null}

/* ══════ PDF READER ══════ */
let readerStageId=null,pdfTimerStarted=false;
const MIN_READ_MS=3000;

function openReader(stage){
  const url=stage.driveId?`https://drive.google.com/file/d/${stage.driveId}/preview`:'';
  readerStageId=stage.id;pdfTimerStarted=false;readerOpenTime=Date.now();
  document.getElementById('readerPill').textContent=stage.title;
  document.getElementById('readerCompleteBar').classList.remove('visible');
  const frame=document.getElementById('readerFrame'),ph=document.getElementById('readerPh');
  if(url){frame.src=url;frame.style.display='block';ph.style.display='none';}
  else{frame.style.display='none';ph.style.display='flex';}
  setTimeout(()=>{if(document.getElementById('readerModal').classList.contains('active')){pdfTimerStarted=true;document.getElementById('readerCompleteBar').classList.add('visible');}},MIN_READ_MS);
  document.getElementById('readerModal').classList.add('active');
}

function closeReader(forceComplete){
  const modal=document.getElementById('readerModal');
  if(!modal.classList.contains('active'))return;
  const elapsed=Date.now()-readerOpenTime;
  const shouldComplete=forceComplete||pdfTimerStarted||elapsed>=MIN_READ_MS;
  modal.classList.remove('active');
  setTimeout(()=>{document.getElementById('readerFrame').src='';document.getElementById('readerCompleteBar').classList.remove('visible');},400);
  if(shouldComplete&&readerStageId){
    const wasNew=markComplete(readerStageId);
    if(wasNew){
      const idx=STAGES_RAW.findIndex(s=>s.id===readerStageId);
      if(idx>=0&&idx<STAGES_RAW.length-1)currentStageId=STAGES_RAW[idx+1].id;
      buildMap();closeDetail();showToast(STAGES_RAW[idx]);spawnXP();
    } else {buildMap();closeDetail();}
  }
  readerStageId=null;
}

function showToast(stage){
  const toast=document.getElementById('toast');
  document.getElementById('toastTitle').textContent=`"${stage.title}" مكتمل! 🎉`;
  document.getElementById('toastSub').textContent=`عمل رائع — +10 XP`;
  toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4000);
}

function spawnXP(){
  const el=document.createElement('div');el.className='xp-burst';
  el.textContent='+10 XP';
  el.style.cssText=`left:${window.innerWidth/2-30}px;top:${window.innerHeight/2}px;`;
  document.body.appendChild(el);setTimeout(()=>el.remove(),1800);
}

/* ══════ TOP BAR ══════ */
function updateTopBar(){
  const done=STAGES_RAW.filter(s=>progress[s.id]).length;
  const xp=done*10;const pct=Math.round(xp/350*100);
  document.getElementById('gemCount').textContent=done*5;
  setTimeout(()=>document.getElementById('xpFill').style.width=Math.min(pct,100)+'%',300);
}

function buildNavDots(){
  const c=document.getElementById('navDots');c.innerHTML='';
  STAGES_RAW.forEach((s,i)=>{
    const d=document.createElement('div');
    d.className='ndot'+(s.id===currentStageId?' active':'')+(progress[s.id]&&s.id!==currentStageId?' done-dot':'');
    d.title=s.title;d.addEventListener('click',()=>goTo(i));c.appendChild(d);
  });
}
function updateNavBtns(){const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);document.getElementById('navPrev').disabled=idx<=0;document.getElementById('navNext').disabled=idx>=STAGES_RAW.length-1}
function goTo(idx){currentStageId=STAGES_RAW[Math.max(0,Math.min(STAGES_RAW.length-1,idx))].id;buildMap();setTimeout(()=>{const el=document.querySelector(`[data-id="${currentStageId}"]`);if(el)el.scrollIntoView({behavior:'smooth',block:'center'})},80)}

/* ══════ EVENTS ══════ */
document.getElementById('ovScrim').addEventListener('click',closeDetail);
document.getElementById('detClose').addEventListener('click',closeDetail);
document.getElementById('btnStart').addEventListener('click',()=>{if(activeEntry)openReader(activeEntry.stage)});
document.getElementById('readerScrim').addEventListener('click',()=>closeReader(false));
document.getElementById('readerClose').addEventListener('click',()=>closeReader(false));
document.getElementById('rdotClose').addEventListener('click',()=>closeReader(false));
document.getElementById('rcbClose').addEventListener('click',()=>closeReader(true));
document.getElementById('rdotExpand').addEventListener('click',()=>{if(readerStageId){const s=STAGES_RAW.find(x=>x.id===readerStageId);if(s?.driveId)window.open(`https://drive.google.com/file/d/${s.driveId}/view`,'_blank')}});
document.getElementById('readerNewTab').addEventListener('click',()=>{if(readerStageId){const s=STAGES_RAW.find(x=>x.id===readerStageId);if(s?.driveId)window.open(`https://drive.google.com/file/d/${s.driveId}/view`,'_blank')}});
document.getElementById('navPrev').addEventListener('click',()=>{const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);if(idx>0)goTo(idx-1)});
document.getElementById('navNext').addEventListener('click',()=>{const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);if(idx<STAGES_RAW.length-1)goTo(idx+1)});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(document.getElementById('filoReaderOverlay').classList.contains('active')){closeFiloReader();}
    else if(document.getElementById('exdetOverlay').classList.contains('active')){closeExdetModal();}
    else if(document.getElementById('readerModal').classList.contains('active')){closeReader(false);}
    else if(document.getElementById('filoOverlay').classList.contains('active')){closeFiloPanel();}
    else if(document.getElementById('overlay').classList.contains('active')){closeDetail();}
  }
  if(!document.getElementById('overlay').classList.contains('active')){
    const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);
    if(e.key==='ArrowRight')goTo(idx-1);
    if(e.key==='ArrowLeft')goTo(idx+1);
  }
});

/* ══════ FILO DATA ══════ */
const FILO_LESSONS=[
  {unitName:'الأنية والغيرية',   unitIcon:'fa-user-circle',     unitColor:'#4F46E5',unitBg:'#EEF2FF',items:[{title:'الأنية والغيرية',     sub:'درس فلسفي يعرّف بمفهوم الأنية وعلاقتها بالغير',tag:'درس كامل',docs:1,driveId:'1lgQtrt8w5feiJ4pV9lhP0laKfLq5OX8j'}]},
  {unitName:'الخصوصية والكونية',unitIcon:'fa-globe-europe',    unitColor:'#0369A1',unitBg:'#E0F2FE',items:[{title:'الخصوصية والكونية',   sub:'درس فلسفي حول التوتر بين الخاص والعام',         tag:'درس كامل',docs:1,driveId:'1yMiRH-usumvip9CsYp_FLq5fJzBa_Byt'}]},
  {unitName:'النمذجة',           unitIcon:'fa-project-diagram',unitColor:'#047857',unitBg:'#D1FAE5',items:[{title:'النمذجة',             sub:'بناء النماذج الفكرية وتمثيل الواقع',            tag:'درس كامل',docs:1,driveId:'1i03yMC4njP9235OBnL3v28M2saaN31BD'}]},
  {unitName:'الدولة',            unitIcon:'fa-balance-scale',  unitColor:'#B45309',unitBg:'#FEF3C7',items:[{title:'الدولة',              sub:'فلسفة السياسة والسلطة والشرعية',                tag:'درس كامل',docs:1,driveId:'1qP6RKVc357OpP8BUjMxuu8evtNHaa0Cv'}]},
  {unitName:'الخير والسعادة',   unitIcon:'fa-seedling',        unitColor:'#BE185D',unitBg:'#FCE7F3',items:[{title:'الخير والسعادة',     sub:'الأخلاق والفضيلة والغاية القصوى',              tag:'درس كامل',docs:1,driveId:'1zTmk3QWQ7adOYD0NOaRCMX0L09xEwmo9'}]},
];
const FILO_EXERCISES=[
  {unitName:'الأنية والغيرية',unitIcon:'fa-user-circle',unitColor:'#4F46E5',unitBg:'#EEF2FF',items:[{title:'الأنية والغيرية',sub:'فروض ومواضيع اختبارات بتصحيح',tag:'تمرين',docs:4,subItems:[
    {title:'تمارين مع الإصلاح',type:'sujet',icon:'fa-file-alt',desc:'موضوع الاختبار الأول',duration:'30min',difficulty:'متوسط',driveId:'1egBp-8_IzGrrrjEKnpDDnR3xItxMyIFp'},
    
  ]}]},
  {unitName:'الخصوصية والكونية',unitIcon:'fa-globe-europe',unitColor:'#0369A1',unitBg:'#E0F2FE',items:[{title:'الخصوصية والكونية',sub:'فروض ومواضيع اختبارات بتصحيح',tag:'تمرين',docs:3,subItems:[
    {title:'فقرة: الخصوصية والكونية',type:'sujet',icon:'fa-file-alt',desc:'موضوع الاختبار الأول',duration:'2h',difficulty:'متوسط',driveId:'1TLK9pZ36ZhYl2BFgI3wRwOdskWZqMR--'},
    {title:'تمارين باك (1)',type:'corrige',icon:'fa-check-double',desc:'التصحيح النموذجي',duration:'—',difficulty:'—',driveId:'1znKznhFSEeh41qTHwqU_8wCb1bKlI0Kr'},
    {title:'تمارين باك (2)',type:'sujet',icon:'fa-file-alt',desc:'موضوع الاختبار الثاني',duration:'1h',difficulty:'متقدم',driveId:'1Mi1itwHIIB_6rE62zxuBTQ0j8SPxE2Xw'},
    {title:'تمارين باك (3) ',type:'sujet',icon:'fa-file-alt',desc:'موضوع الاختبار الثاني',duration:'2h',difficulty:'متقدم',driveId:'1ktNiRLagWXGjLw3nfE5be7qsbQu6rtk8'},
    {title:'تمارين باك (4) ',type:'sujet',icon:'fa-file-alt',desc:'موضوع الاختبار الثاني',duration:'2h',difficulty:'متقدم',driveId:'1-Cmsfw1imogld59n4ls0L7HxTeJrEncc'},
    {title:'تمارين باك (5) ',type:'sujet',icon:'fa-file-alt',desc:'موضوع الاختبار الثاني',duration:'2h',difficulty:'متقدم',driveId:'1n5itg2okXfN73x-MQJ-z6eniFS1F1Bt_'},
  ]}]},
  {
    unitName: 'النمذجة',
    unitIcon: 'fa-project-diagram',
    unitColor: '#047857',
    unitBg: '#D1FAE5',
    items: [
      {
        title: 'النمذجة',
        sub: 'فروض ومواضيع اختبارات',
        tag: 'تمرين',
        docs: 6,
        subItems: [
          {
            title: 'تمارين مع الإصلاح',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'ملف تمارين مع الإصلاح',
            driveId: '1d7pUS4QD_bFDPZAXiyISTuSA_yM2IvBy'
          },
          {
            title: 'فقرة: النمذجة',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'شرح الدرس',
            driveId: '1FM5WvkoMu6SlISqnt-sPoiPWy8tOLQ01'
          },
          {
            title: 'تمارين باك (1)',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تمارين بكالوريا 1',
            driveId: '1rdhkWsmFNUhcv7UeUR9o7_nF2-XnofGW'
          },
          {
            title: 'تمارين باك (2)',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تمارين بكالوريا 2',
            driveId: '1IN9b7RuCbjOJtfJ3JH77Xq1LCVf-Bi_X'
          },
          {
            title: 'تمارين باك (3)',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تمارين بكالوريا 3',
            driveId: '1a0y4ge6FH4g85UvNsABM9i65Y9xosPLy'
          },
          {
            title: 'تمارين باك (4)',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تمارين بكالوريا 4',
            driveId: '1J22_4pdNnp7urZ_6r084PMei8CX3tTQ-'
          }
        ]
      }
    ]
  },
  {
    unitName: 'منهجية الإجابة',
    unitIcon: 'fa-pen',
    unitColor: '#f59e0b',
    unitBg: '#fffbeb',
    items: [
      {
        title: 'منهجية الإجابة',
        sub: 'منهجية الفلسفة',
        tag: 'منهجية',
        docs: 8,
        subItems: [
          {
            title: 'منهجية الإجابة في فرض الفلسفة',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'منهجية عامة للإجابة في الفروض',
            driveId: '1wkw2Cq5xZ49JZkCPGH7yWoslr5oqNTSL'
          },
          {
            title: 'حدّد المسلّمات الضمنية / المفترضات / الضمنيّات',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تحليل الافتراضات الضمنية في النصوص',
            driveId: '1zTXmISQAnQ_13N8A3s-PMev9WHRLKyiL'
          },
          {
            title: 'ما معنى / ما دلالة / ما المقصود بـ',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'شرح المفاهيم والتعريفات',
            driveId: '1EJS3gWYHVAYnSw6bB2tDknYbfuc6AwHj'
          },
          {
            title: 'ماهي الإحراجات / الهواجس / المخاوف / التبعات / المخاطر',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تحليل الإشكالات والمخاطر',
            driveId: '1jT8TNWE62Q4KLZkC3_wIJhej1gNsGrLH'
          },
          {
            title: 'حدّد رهانات / غايات / أهداف / ما يريد تحقيقه',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'استخراج الأهداف والغايات',
            driveId: '1sN76uUTSL6BFzwXy0kaZY-2366jGejzE'
          },
          {
            title: 'ما مدى راهنية / حضور / ملائمة (اليوم)',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'مدى ارتباط الأفكار بالواقع',
            driveId: '14GrDGgzBCW7VkdtAVDvNaFPM9ferNtr4'
          },
          {
            title: 'ما وظيفة / ما مهمّة / ما الذي ينجزه',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تحديد الوظيفة والدور',
            driveId: '1Wetb4ZRzEP5obKpnalrVQtrb_gfkH2A_'
          },
          {
            title: 'ما قيمة / ما مشروعية / ما وجاهة / ما مدى صحّة',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تقييم القيمة والمشروعية',
            driveId: '17G3qAR0RDZmK68EaEAhYw8QKkoYvks6F'
          }
        ]
      }
    ]
  },{
    unitName: 'الدولة',
    unitIcon: 'fa-landmark',
    unitColor: '#10b981',
    unitBg: '#ecfdf5',
    items: [
      {
        title: 'الدولة',
        sub: 'درس فلسفة',
        tag: 'درس',
        docs: 1,
        subItems: [
          {
            title: 'تمارين مع الإصلاح',
            type: 'pdf',
            icon: 'fa-file-alt',
            desc: 'تمارين مع الإصلاح في درس الدولة',
            driveId: '1D8h_s1sfrkyT1WrMy4GqoBj48Jp9nfXE'
          }
        ]
      }
    ]
  },
];
const FILO_DEVOIRS=[
  {
    unitName: 'Devoirs de contrôle 1',
    unitIcon: 'fa-user-circle',
    unitColor: '#4F46E5',
    unitBg: '#EEF2FF',
    items: [
      {
        title: 'Devoir de contrôle 1 ',
        sub: 'Sujet + Corrigé + Training',
        tag: 'Devoir',
        docs: 6,
        subItems: [
          {
            title: 'Devoir de contrôle 1 (1)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'موضوع الفرض المراقب 1',
            driveId: '164y8kKzkYhwBflRhugu_h7AQ_kFflvyS'
          },
          {
            title: 'Devoir de contrôle 1 (2)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'موضوع الفرض المراقب 2',
            driveId: '1sBsxqr5pqvYIGi7m63jPHEkk7HEitYo_'
          },
          {
            title: 'Devoir de contrôle 1 (3)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'موضوع الفرض المراقب 3',
            driveId: '1zo9lm2kMnDuEbo-wpTyYTcfwVumbU_wl'
          },
          {
            title: 'Devoir de contrôle 1 (4)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'موضوع الفرض المراقب 4',
            driveId: '1Osk5D_6KUna-6a8JNOIhTZ4zEVX7p6pZ'
          },
          {
            title: 'Devoir de contrôle 1 (5)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'موضوع الفرض المراقب 5',
            driveId: '1xD3Xg6vgQCC_1ZY26i_e6BFk0OG24VAS'
          },
          {
            title: 'تدريب على إنجاز إختبار فلسفة + الإصلاح',
            type: 'training',
            icon: 'fa-check-double',
            desc: 'تمرين شامل مع الإصلاح',
            driveId: '1b0ix5y4coFJw2izz6-YR6NUNjWieHP-q'
          }
        ]
      }
    ]
  },
  {
    unitName: 'Devoir de synthèse 1',
    unitIcon: 'fa-file-signature',
    unitColor: '#0EA5E9',
    unitBg: '#E0F2FE',
    items: [
      {
        title: 'Devoir de synthèse 1',
        sub: 'فلسفة — فرض تأليفي',
        tag: 'Synthèse',
        docs: 5,
        subItems: [
          {
            title: 'Devoir de synthèse 1 (1)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 1',
            driveId: '1pSY-n6_UkbMRYX_n3wH4rN6MojseR6B7'
          },
          {
            title: 'Devoir de synthèse 1 (2)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 2',
            driveId: '1vsPoVv697z5wPE4GZKxOl8nImGau3HWO'
          },
          {
            title: 'Devoir de synthèse 1 (3)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3',
            driveId: '1skfvrN65M9Bc-vWpc2HPB713G8Co0IIt'
          },
          {
            title: 'Devoir de synthèse 1 (4)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 4',
            driveId: '1FtA3WCWvnCnWNq6gqydJwN4wze3mZuu_'
          },
          {
            title: 'Devoir de synthèse 1 (5)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 5',
            driveId: '1Rz7spYJF_BqIwdwlkNIcqhsfXM3j5xL3'
          }
        ]
      }
    ]
  },
  {
    unitName: 'Devoirs de contrôle 2',
    unitIcon: 'fa-user-circle',
    unitColor: '#4F46E5',
    unitBg: '#EEF2FF',
    items: [
      {
        title: 'Devoir de contrôle 2',
        sub: 'فلسفة — سلسلة فروض',
        tag: 'Devoir',
        docs: 8,
        subItems: [
          {
            title: 'Devoir de contrôle 2 (1)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 1',
            driveId: '1fhhL39WPPtI5oyITJKrXlM6LJr6Kd8Rb'
          },
          {
            title: 'Devoir de contrôle 2 (2)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 2',
            driveId: '1Nh7SotvvZLhEW_SP8v_I5F9XwQrm2R5p'
          },
          {
            title: 'Devoir de contrôle 2 (3)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 3',
            driveId: '14NPVOyOcsctWQPPvX0QBTTRyNknvoOD8'
          },
          {
            title: 'Devoir de contrôle 2 (4)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 4',
            driveId: '1a5B-yIx-zgzUTxqRsZj_NHtaZjIJW8SL'
          },
          {
            title: 'Devoir de contrôle 2 (5)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 5',
            driveId: '1RqsiEao9Kp1NZIbBa3XQipwW8IZvW6oV'
          },
          {
            title: 'Devoir de contrôle 2 (6)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 6',
            driveId: '1SJDVWdImNaWnZTc1tRpisIjPCHY4KLAw'
          },
          {
            title: 'Devoir de contrôle 2 (7)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 7',
            driveId: '1b4yTMIktmO8UI7PCuFc3LvqMDQuwLut8'
          },
          {
            title: 'Devoir de contrôle 2 (8)',
            type: 'devoir',
            icon: 'fa-file-alt',
            desc: 'فرض مراقب 2 رقم 8',
            driveId: '1ui80vi5ID4JGN2hrq9iyX0jE2rJoaKoV'
          }
        ]
      }
    ]
  },
  {
    unitName: 'Devoirs de synthèse 2',
    unitIcon: 'fa-file-alt',
    unitColor: '#0EA5E9',
    unitBg: '#E0F2FE',
    items: [
      {
        title: 'Devoir de synthèse 2',
        sub: 'فلسفة — فرض تأليفي 2',
        tag: 'Synthèse',
        docs: 2,
        subItems: [
          {
            title: 'Devoir de synthèse 2 (1)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 2 رقم 1',
            driveId: '1kG2i-k9udFZcAhVrjtDYOy5bpsm-V0XI'
          },
          {
            title: 'Devoir de synthèse 2 (2)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 2 رقم 2',
            driveId: '1_RjJedsyfNtYEING4cmh7Y28ZvVt13SW'
          }
        ]
      }
    ]
  },
  {
    unitName: 'Devoir de synthèse 3',
    unitIcon: 'fa-file-alt',
    unitColor: '#0EA5E9',
    unitBg: '#E0F2FE',
    items: [
      {
        title: 'Devoir de synthèse 3',
        sub: 'فلسفة — فرض تأليفي 3',
        tag: 'Synthèse',
        docs: 6,
        subItems: [
          {
            title: 'Devoir de synthèse 3 (1)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3 رقم 1',
            driveId: '12rs_pVrNDi7ZrO5ANuM0NlU1kD-_ruQt'
          },
          {
            title: 'Devoir de synthèse 3 (2)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3 رقم 2',
            driveId: '16hMzrAccu3dVySdWlDuW-Wjq_RS20CcL'
          },
          {
            title: 'Devoir de synthèse 3 (3)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3 رقم 3',
            driveId: '1QcjVs64ZtpH2ttr7WyeTArDD6RQBwz6U'
          },
          {
            title: 'Devoir de synthèse 3 (4)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3 رقم 4',
            driveId: '17U8vtas_uylQvlDLRmP-juHR4f4sFjJL'
          },
          {
            title: 'Devoir de synthèse 3 (5)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3 رقم 5',
            driveId: '1w_Up93gvRakCV2Xqwx8HhWviAK_iQlde'
          },
          {
            title: 'Devoir de synthèse 3 (6)',
            type: 'synthese',
            icon: 'fa-file-alt',
            desc: 'فرض تأليفي 3 رقم 6',
            driveId: '1QqBW-yMx2A6zm_hxeR2Gdc5vTJ2tlt6m'
          }
        ]
      }
    ]
  },
  
];

const TAB_CONFIG={
  lessons:{label:'الدروس والملخّصات',sub:'بطاقات دروس كاملة للتحكّم في البرنامج',icon:'fa-book-open',grad:'linear-gradient(135deg,#58CC02,#2EA000)',itemsLbl:'دروس',data:()=>FILO_LESSONS},
  exercises:{label:'التمارين والنماذج',sub:'اختر الوحدة ثم المستند الذي تريد فتحه',icon:'fa-pen-to-square',grad:'linear-gradient(135deg,#1CB0F6,#0A95D3)',itemsLbl:'وحدات',data:()=>FILO_EXERCISES},
  devoirs:{label:'Devoirs',sub:'اختر الوحدة ثم المستند الذي تريد فتحه',icon:'fa-clipboard-list',grad:'linear-gradient(135deg,#CE82FF,#9333EA)',itemsLbl:'وحدات',data:()=>FILO_DEVOIRS},
};

let filoActiveTab='lessons';
function openFiloPanel(startTab){filoActiveTab=startTab||'lessons';updateFiloBanner();renderFiloContent(filoActiveTab);document.getElementById('filoOverlay').classList.add('active')}
function closeFiloPanel(){document.getElementById('filoOverlay').classList.remove('active')}
function updateFiloBanner(){
  const cfg=TAB_CONFIG[filoActiveTab];
  document.getElementById('filoBannerBg').style.background=cfg.grad;
  document.getElementById('filoBannerIcon').innerHTML=`<i class="fas ${cfg.icon}"></i>`;
  document.getElementById('filoBannerTitle').textContent=cfg.label;
  document.getElementById('filoBannerSub').textContent=cfg.sub;
  ['tabLessons','tabExercises','tabDevoirs'].forEach(id=>{const t={tabLessons:'lessons',tabExercises:'exercises',tabDevoirs:'devoirs'}[id];document.getElementById(id).classList.toggle('active',t===filoActiveTab)});
}
function switchFiloTab(tab){filoActiveTab=tab;updateFiloBanner();renderFiloContent(tab)}
function renderFiloContent(tab){
  const cfg=TAB_CONFIG[tab];const data=cfg.data();
  const content=document.getElementById('filoContent');
  content.innerHTML='';content.style.opacity='0';content.style.transform='translateY(12px)';
  const totalItems=data.reduce((a,u)=>a+u.items.length,0);
  const labelEl=document.createElement('div');labelEl.className='filo-section-label';
  labelEl.innerHTML=`<span>${cfg.itemsLbl}</span><span class="filo-section-count">${totalItems}</span>`;
  content.appendChild(labelEl);
  const iconName=tab==='lessons'?'fa-book-open':tab==='exercises'?'fa-file-pen':'fa-clipboard-list';
  data.forEach(unit=>{
    unit.items.forEach(item=>{
      const card=document.createElement('div');card.className='filo-item';
      card.style.setProperty('--fi-color',unit.unitColor);card.style.setProperty('--fi-bg',unit.unitBg);
      const hasSubs=(tab==='exercises'||tab==='devoirs')&&item.subItems;
      const docsCount=hasSubs?item.subItems.length:item.docs;
      card.innerHTML=`<div class="filo-item-accent"></div>
        <div class="filo-item-body">
          <div class="filo-item-header">
            <div class="filo-item-left">
              <div class="filo-item-badge"><i class="fas ${unit.unitIcon}"></i>${item.tag}</div>
              <div class="filo-item-title">${item.title}</div>
              <div class="filo-item-sub">${item.sub}</div>
            </div>
            <div class="filo-item-icon-wrap"><i class="fas ${iconName}"></i></div>
          </div>
          <div class="filo-item-footer">
            <div class="filo-item-meta-tag"><i class="fas fa-file-pdf"></i><span>${docsCount} ${hasSubs?'ملف':'وثيقة'}</span></div>
            <div class="filo-item-meta-tag"><i class="fas fa-layer-group"></i><span>${unit.unitName}</span></div>
            <div class="filo-item-spacer"></div>
            <div class="filo-item-open-btn">${hasSubs?'<i class="fas fa-list"></i>':'<i class="fas fa-arrow-left"></i>'}${hasSubs?'عرض الملفات':'فتح'}</div>
          </div>
        </div>`;
      if(hasSubs)card.addEventListener('click',()=>openExdetModal(item,unit,tab));
      else card.addEventListener('click',()=>openFiloReader(item,unit));
      content.appendChild(card);
    });
  });
  requestAnimationFrame(()=>{content.style.transition='opacity .3s ease,transform .3s var(--ease)';content.style.opacity='1';content.style.transform='translateY(0)'});
}

/* ══════ EXDET ══════ */
const TYPE_META={
  sujet:{label:'Sujet',icon:'fa-file-alt',color:'#0369A1',bg:'#E0F2FE'},
  corrige:{label:'Corrigé',icon:'fa-check-double',color:'#047857',bg:'#D1FAE5'},
  synthese:{label:'Synthèse',icon:'fa-layer-group',color:'#7C3AED',bg:'#EDE9FE'},
  bilan:{label:'Bilan',icon:'fa-book-reader',color:'#B45309',bg:'#FEF3C7'},
};
let _exdetSourceTab='exercises';
function openExdetModal(item,unit,sourceTab){
  _exdetSourceTab=sourceTab||'exercises';
  document.getElementById('exdetBannerBg').style.background=`linear-gradient(130deg,${unit.unitColor} 0%,${unit.unitColor}cc 100%)`;
  document.getElementById('exdetBannerIcon').innerHTML=`<i class="fas ${unit.unitIcon}"></i>`;
  document.getElementById('exdetEyebrow').textContent=(_exdetSourceTab==='devoirs'?'Devoirs':'التمارين')+' · '+unit.unitName;
  document.getElementById('exdetTitle').textContent=item.title;
  document.getElementById('exdetSub').textContent='اختر الملف الذي تريد فتحه';
  const chips=document.getElementById('exdetChips');chips.innerHTML='';
  const subItems=item.subItems||[];
  const sujets=subItems.filter(x=>x.type==='sujet').length;
  const corriges=subItems.filter(x=>x.type==='corrige').length;
  [{icon:'fa-file-alt',label:`${sujets} مواضيع`},{icon:'fa-check-double',label:`${corriges} تصحيح`},{icon:'fa-layer-group',label:`${subItems.length} ملف`}].forEach(c=>{
    const chip=document.createElement('div');chip.className='exdet-chip';chip.innerHTML=`<i class="fas ${c.icon}"></i>${c.label}`;chips.appendChild(chip);
  });
  const content=document.getElementById('exdetContent');content.innerHTML='';content.style.opacity='0';
  const lbl=document.createElement('div');lbl.className='exdet-section-lbl';lbl.innerHTML=`<span>الملفات المتاحة</span><span class="exdet-count">${subItems.length}</span>`;
  content.appendChild(lbl);
  subItems.forEach((si,idx)=>{
    const meta=TYPE_META[si.type]||TYPE_META.sujet;
    const card=document.createElement('div');card.className='exdet-subitem';card.dataset.type=si.type;
    card.style.opacity='0';card.style.transform='translateY(12px)';
    card.innerHTML=`<div class="exdet-si-top-bar" style="background:${meta.color}"></div>
      <div class="exdet-si-body">
        <div class="exdet-si-icon" style="background:${meta.bg};color:${meta.color}"><i class="fas ${si.icon}"></i></div>
        <div class="exdet-si-info">
          <div class="exdet-si-type" style="background:${meta.bg};color:${meta.color}"><i class="fas ${meta.icon}" style="font-size:7px"></i>${meta.label}</div>
          <div class="exdet-si-title">${si.title}</div>
          <div class="exdet-si-desc">${si.desc}</div>
        </div>
        <div class="exdet-si-meta">
          ${si.duration!=='—'?`<div class="exdet-si-tag" style="--si-color:${meta.color}"><i class="fas fa-clock"></i>${si.duration}</div>`:''}
          ${si.difficulty!=='—'?`<div class="exdet-si-tag" style="--si-color:${meta.color}"><i class="fas fa-signal"></i>${si.difficulty}</div>`:''}
          <div class="exdet-si-open" style="background:${meta.bg};color:${meta.color}"><i class="fas fa-folder-open" style="font-size:10px"></i>فتح</div>
        </div>
      </div>`;
    card.addEventListener('click',()=>openFiloReader(si,{unitName:unit.unitName}));
    content.appendChild(card);
    setTimeout(()=>{card.style.transition='opacity .3s,transform .3s var(--ease)';card.style.opacity='1';card.style.transform='translateY(0)'},60+idx*55);
  });
  requestAnimationFrame(()=>{content.style.transition='opacity .3s,transform .3s var(--ease)';content.style.opacity='1';});
  document.getElementById('exdetOverlay').classList.add('active');
}
function closeExdetModal(){document.getElementById('exdetOverlay').classList.remove('active')}
document.getElementById('exdetScrim').addEventListener('click',closeExdetModal);
document.getElementById('exdetCloseBtn').addEventListener('click',closeExdetModal);
document.getElementById('exdetBackBtn').addEventListener('click',()=>{closeExdetModal();if(!document.getElementById('filoOverlay').classList.contains('active'))openFiloPanel(_exdetSourceTab)});

/* ══════ FILO READER ══════ */
let filoCurrentDriveId='',filoCurrentTitle='';
function openFiloReader(item,unit){
  filoCurrentDriveId=item.driveId||'';filoCurrentTitle=item.title;
  document.getElementById('filoReaderPill').textContent=item.title;
  const frame=document.getElementById('filoReaderFrame'),ph=document.getElementById('filoReaderPh');
  if(filoCurrentDriveId){frame.src=`https://drive.google.com/file/d/${filoCurrentDriveId}/preview`;frame.style.display='block';ph.style.display='none';}
  else{frame.src='';frame.style.display='none';ph.style.display='flex';}
  document.getElementById('filoReaderOverlay').classList.add('active');
}
function closeFiloReader(){
  document.getElementById('filoReaderOverlay').classList.remove('active');
  setTimeout(()=>{document.getElementById('filoReaderFrame').src='';document.getElementById('filoReaderFrame').style.display='none';document.getElementById('filoReaderPh').style.display='flex'},400);
}
document.getElementById('filoScrim').addEventListener('click',closeFiloPanel);
document.getElementById('filoBannerClose').addEventListener('click',closeFiloPanel);
document.getElementById('filoReaderScrim').addEventListener('click',closeFiloReader);
document.getElementById('filoReaderCloseBtn').addEventListener('click',closeFiloReader);
document.getElementById('filoRdotClose').addEventListener('click',closeFiloReader);
document.getElementById('filoRdotExpand').addEventListener('click',()=>{if(filoCurrentDriveId)window.open(`https://drive.google.com/file/d/${filoCurrentDriveId}/view`,'_blank')});
document.getElementById('filoReaderExtBtn').addEventListener('click',()=>{if(filoCurrentDriveId)window.open(`https://drive.google.com/file/d/${filoCurrentDriveId}/view`,'_blank')});

/* ══════ INIT ══════ */
buildMap();
setTimeout(()=>{const el=document.querySelector(`[data-id="${currentStageId}"]`);if(el)el.scrollIntoView({behavior:'smooth',block:'center'})},700);
