
/* ══════════════════════════════════════════════════
   CONFIGURATION
══════════════════════════════════════════════════ */
const UNITS = [
    { name:'الأنية والغيرية',    desc:'استكشاف الهوية الذاتية وعلاقتها بالآخر في الفكر الفلسفي', icon:'fa-user-circle',     bg:'linear-gradient(130deg,#4F46E5 0%,#7C3AED 100%)', color:'#4F46E5', light:'#EEF2FF', border:'rgba(79,70,229,.14)',  dark:'#3730A3', shadow:'rgba(79,70,229,.35)',  conn:'rgba(120,110,255,.45)' },
    { name:'الخصوصية والكونية', desc:'التوتر بين الخاص والعام، المحلي والإنساني في الفلسفة',   icon:'fa-globe-europe',    bg:'linear-gradient(130deg,#0369A1 0%,#0EA5E9 100%)', color:'#0369A1', light:'#E0F2FE', border:'rgba(3,105,161,.14)',  dark:'#075985', shadow:'rgba(3,105,161,.35)',  conn:'rgba(14,165,233,.45)'  },
    { name:'النمذجة',            desc:'بناء النماذج الفكرية وتمثيل الواقع في الفلسفة والعلوم',  icon:'fa-project-diagram', bg:'linear-gradient(130deg,#047857 0%,#10B981 100%)', color:'#047857', light:'#D1FAE5', border:'rgba(4,120,87,.14)',   dark:'#065F46', shadow:'rgba(4,120,87,.35)',   conn:'rgba(16,185,129,.45)'  },
    { name:'الدولة',             desc:'فلسفة السياسة، السلطة، الشرعية وتنظيم المجتمع',          icon:'fa-balance-scale',   bg:'linear-gradient(130deg,#B45309 0%,#F59E0B 100%)', color:'#B45309', light:'#FEF3C7', border:'rgba(180,83,9,.14)',   dark:'#92400E', shadow:'rgba(180,83,9,.35)',   conn:'rgba(245,158,11,.45)'  },
    { name:'الخير والسعادة',     desc:'الأخلاق، الفضيلة، والغاية القصوى للوجود الإنساني',       icon:'fa-seedling',        bg:'linear-gradient(130deg,#BE185D 0%,#EC4899 100%)', color:'#BE185D', light:'#FCE7F3', border:'rgba(190,24,93,.14)',  dark:'#9D174D', shadow:'rgba(190,24,93,.35)',  conn:'rgba(236,72,153,.45)'  },
  ];
  
  const STAGES_RAW = [
    { id:1,  title:'مفهوم الذات',        sub:'الهوية والوعي الفردي',        icon:'fa-person-rays',        driveId:'1QCOoQ89FGJ6MdgVP6rIj0_3caQkAi07B', duration:'45 دقيقة', level:'مبتدئ'  },
    { id:2,  title:'الآخر والاعتراف',    sub:'ديالكتيك الأنا والغير',       icon:'fa-handshake',          driveId:'', duration:'50 دقيقة', level:'متوسط'  },
    { id:3,  title:'العلاقة بالجسد',     sub:'تجربة التجسّد الفلسفية',      icon:'fa-child-reaching',     driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:4,  title:'الهوية والاختلاف',   sub:'ما الذي يجعلني أنا؟',         icon:'fa-fingerprint',        driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:5,  title:'الذاكرة والزمن',     sub:'الهوية عبر التحول الزمني',    icon:'fa-hourglass-half',     driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:6,  title:'الحرية والمسؤولية',  sub:'الأنا المختارة والملزمة',     icon:'fa-unlock',             driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:7,  title:'الأنا والمجتمع',     sub:'بين الفردية والانتماء',       icon:'fa-people-group',       driveId:'', duration:'50 دقيقة', level:'متوسط'  },
    { id:8,  title:'الثقافة والكونية',   sub:'هل ثمة قيم إنسانية مشتركة؟', icon:'fa-earth-americas',     driveId:'', duration:'50 دقيقة', level:'متوسط'  },
    { id:9,  title:'النسبية الثقافية',   sub:'التنوع مقابل العالمية',       icon:'fa-arrows-left-right',  driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:10, title:'حقوق الإنسان',       sub:'الأساس الكوني للحقوق',        icon:'fa-scroll',             driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:11, title:'المواطنة العالمية',  sub:'ما وراء الانتماء الوطني',     icon:'fa-passport',           driveId:'', duration:'50 دقيقة', level:'متوسط'  },
    { id:12, title:'التواصل بين الثقافات',sub:'الحوار والترجمة الفلسفية',  icon:'fa-comments',           driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:13, title:'العولمة والهوية',    sub:'التوتر بين المحلي والعالمي',  icon:'fa-network-wired',      driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:14, title:'الخصوصية والحرية',   sub:'الحدود بين العام والخاص',     icon:'fa-shield-halved',      driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:15, title:'ما هو النموذج؟',     sub:'تعريفات وأنواع النمذجة',      icon:'fa-cube',               driveId:'', duration:'45 دقيقة', level:'مبتدئ'  },
    { id:16, title:'النماذج العلمية',    sub:'بين الواقع والتجريد',         icon:'fa-flask-vial',         driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:17, title:'النمذجة الرياضية',   sub:'الصياغة الرمزية للعالم',      icon:'fa-infinity',           driveId:'', duration:'65 دقيقة', level:'متقدم'  },
    { id:18, title:'حدود النماذج',       sub:'ما لا يمكن للنموذج قوله',     icon:'fa-circle-question',    driveId:'', duration:'50 دقيقة', level:'متقدم'  },
    { id:19, title:'النموذج والواقع',    sub:'علاقة التمثيل بالحقيقة',      icon:'fa-mirror',             driveId:'', duration:'55 دقيقة', level:'متقدم'  },
    { id:20, title:'النمذجة والمعرفة',   sub:'كيف نبني المعرفة نمذجةً؟',   icon:'fa-brain',              driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:21, title:'النمذجة الفلسفية',   sub:'تطبيقات فكرية معاصرة',       icon:'fa-lightbulb',          driveId:'', duration:'50 دقيقة', level:'متوسط'  },
    { id:22, title:'نشأة الدولة',        sub:'نظريات العقد الاجتماعي',      icon:'fa-city',               driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:23, title:'السلطة والشرعية',    sub:'من أين تأتي السلطة؟',         icon:'fa-gavel',              driveId:'', duration:'60 دقيقة', level:'متوسط'  },
    { id:24, title:'العدالة السياسية',   sub:'توزيع الموارد والحقوق',       icon:'fa-scale-balanced',     driveId:'', duration:'65 دقيقة', level:'متقدم'  },
    { id:25, title:'الديمقراطية والحرية',sub:'نقد وتأسيس الأنظمة',         icon:'fa-landmark-dome',      driveId:'', duration:'70 دقيقة', level:'متقدم'  },
    { id:26, title:'الدولة والمجتمع',    sub:'الفرد والجماعة والمؤسسة',     icon:'fa-people-roof',        driveId:'', duration:'60 دقيقة', level:'متوسط'  },
    { id:27, title:'الثورة والإصلاح',    sub:'متى يحق تغيير النظام؟',       icon:'fa-fire',               driveId:'', duration:'65 دقيقة', level:'متقدم'  },
    { id:28, title:'الدولة والأخلاق',    sub:'الحياد أم الالتزام الأخلاقي؟',icon:'fa-hand-holding-heart', driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:29, title:'الفضيلة الأرسطية',  sub:'السعادة كغاية قصوى',          icon:'fa-star-half-stroke',   driveId:'', duration:'50 دقيقة', level:'متوسط'  },
    { id:30, title:'اللذة والألم',       sub:'المذاهب الأبيقورية والرواقية', icon:'fa-yin-yang',          driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:31, title:'الأخلاق الواجبية',  sub:'كانط والفعل الأخلاقي',        icon:'fa-compass',            driveId:'', duration:'60 دقيقة', level:'متقدم'  },
    { id:32, title:'معنى الوجود',        sub:'الوجودية والإنسانية',         icon:'fa-question-circle',    driveId:'', duration:'65 دقيقة', level:'متقدم'  },
    { id:33, title:'الخير والشر',        sub:'ثنائية القيمة الأخلاقية',     icon:'fa-circle-half-stroke', driveId:'', duration:'55 دقيقة', level:'متوسط'  },
    { id:34, title:'السعادة الحديثة',   sub:'ما السعادة في عالمنا اليوم؟', icon:'fa-sun',                driveId:'', duration:'50 دقيقة', level:'مبتدئ'  },
    { id:35, title:'الحياة الجيدة',      sub:'نحو فلسفة عيش متكاملة',       icon:'fa-seedling',           driveId:'', duration:'55 دقيقة', level:'متوسط'  },
  ];
  
  const STAGES_PER_UNIT = 7;
  
  /* ── STATE ── */
  function loadProgress() { try { const r=localStorage.getItem('edupath_ar_progress'); return r?JSON.parse(r):{}; } catch(e){return{}} }
  function saveProgress(p) { try { localStorage.setItem('edupath_ar_progress', JSON.stringify(p)); } catch(e){} }
  
  let progress = loadProgress();
  let currentStageId = 1;
  let activeEntry = null;
  let readerOpenTime = 0;
  
  function getStages() {
    return STAGES_RAW.map(s => ({ ...s, completed:!!progress[s.id], prog:progress[s.id]?100:(s.id===currentStageId?20:0) }));
  }
  function markComplete(id) {
    if (progress[id]) return false;
    progress[id] = true; saveProgress(progress); return true;
  }
  
  /* ── BUILD MAP ── */
  function buildMap() {
    const outer = document.getElementById('mapOuter');
    outer.querySelectorAll('.mono-unit, .unit-gap').forEach(e=>e.remove());
    const stages = getStages();
    const isMobile = window.innerWidth <= 680;
  
    UNITS.forEach((unit, ui) => {
      const unitStages = stages.slice(ui*STAGES_PER_UNIT, ui*STAGES_PER_UNIT+STAGES_PER_UNIT);
      const doneInUnit = unitStages.filter(s=>s.completed).length;
      const unitPct = Math.round(doneInUnit/unitStages.length*100);
  
      const wrap = document.createElement('div'); wrap.className='mono-unit';
      const header = document.createElement('div'); header.className='unit-header'; header.style.background=unit.bg;
      header.innerHTML=`<div class="uh-orb1"></div><div class="uh-orb2"></div>
        <div class="uh-ico"><i class="fas ${unit.icon}"></i></div>
        <div class="uh-text">
          <div class="uh-eyebrow">الوحدة ${ui+1} · ${unitStages.length} دروس</div>
          <div class="uh-title">${unit.name}</div>
          <div class="uh-desc">${unit.desc}</div>
        </div>
        <div class="uh-meta">
          <div class="uh-count">${doneInUnit}/${unitStages.length} مكتمل</div>
          <div class="uh-prog-mini">
            <div class="uh-prog-track"><div class="uh-prog-fill" style="width:${unitPct}%"></div></div>
            ${unitPct}%
          </div>
        </div>`;
      wrap.appendChild(header);
  
      const grid = document.createElement('div'); grid.className='mono-grid';
      grid.style.setProperty('--conn-color', unit.conn); grid.style.position='relative';
  
      if (isMobile) {
        const cardEls=[];
        for(let i=0;i<4;i++){
          const card=makeCard(unitStages[i],unit,ui*STAGES_PER_UNIT+i);
          card.style.gridColumn=(i+1).toString(); card.style.gridRow='1'; card.style.position='relative'; card.style.zIndex='2';
          grid.appendChild(card); cardEls.push(card);
        }
        for(let i=0;i<3;i++){
          const card=makeCard(unitStages[4+i],unit,ui*STAGES_PER_UNIT+4+i);
          card.style.gridColumn=(i+1).toString(); card.style.gridRow='2'; card.style.position='relative'; card.style.zIndex='2';
          grid.appendChild(card); cardEls.push(card);
        }
        const pathColor=unit.color; const doneCount=unitStages.filter(s=>s.completed).length;
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
          const gridRect=grid.getBoundingClientRect();
          const centers=cardEls.map(c=>{const r=c.getBoundingClientRect();return{x:r.left-gridRect.left+r.width/2,y:r.top-gridRect.top+r.height/2};});
          const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
          svg.setAttribute('width',gridRect.width); svg.setAttribute('height',gridRect.height);
          svg.style.cssText='position:absolute;top:0;left:0;pointer-events:none;z-index:1;overflow:visible';
          for(let i=0;i<centers.length-1;i++){
            const a=centers[i],b=centers[i+1],isDone=i<doneCount-1;
            const mx=(a.x+b.x)/2,my=(a.y+b.y)/2,dx=b.x-a.x,dy=b.y-a.y,side=(i%2===0)?1:-1;
            const cp={x:mx-dy*0.22*side,y:my+dx*0.22*side};
            const d=`M ${a.x} ${a.y} Q ${cp.x} ${cp.y} ${b.x} ${b.y}`;
            const track=document.createElementNS('http://www.w3.org/2000/svg','path');
            track.setAttribute('d',d); track.setAttribute('fill','none'); track.setAttribute('stroke','rgba(160,155,220,0.28)'); track.setAttribute('stroke-width','4.5'); track.setAttribute('stroke-linecap','round'); track.setAttribute('stroke-dasharray','5 9');
            svg.appendChild(track);
            if(isDone){const fill=document.createElementNS('http://www.w3.org/2000/svg','path'); fill.setAttribute('d',d); fill.setAttribute('fill','none'); fill.setAttribute('stroke',pathColor); fill.setAttribute('stroke-width','4.5'); fill.setAttribute('stroke-linecap','round'); fill.setAttribute('opacity','0.65'); svg.appendChild(fill);}
          }
          for(let i=0;i<centers.length-1;i++){
            const a=centers[i],b=centers[i+1],isDone=i<doneCount-1,mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
            const dot=document.createElementNS('http://www.w3.org/2000/svg','circle'); dot.setAttribute('cx',mx); dot.setAttribute('cy',my); dot.setAttribute('r','3.5'); dot.setAttribute('fill',isDone?pathColor:'rgba(160,155,220,0.35)'); dot.setAttribute('opacity',isDone?'0.7':'1'); svg.appendChild(dot);
          }
          for(let i=0;i<centers.length;i++){
            const c=centers[i],isDone=i<doneCount,isNext=i===doneCount;
            if(isDone){const halo=document.createElementNS('http://www.w3.org/2000/svg','circle'); halo.setAttribute('cx',c.x); halo.setAttribute('cy',c.y); halo.setAttribute('r','28'); halo.setAttribute('fill',pathColor); halo.setAttribute('opacity','0.06'); svg.appendChild(halo);}
            else if(isNext){const ring=document.createElementNS('http://www.w3.org/2000/svg','circle'); ring.setAttribute('cx',c.x); ring.setAttribute('cy',c.y); ring.setAttribute('r','30'); ring.setAttribute('fill','none'); ring.setAttribute('stroke',pathColor); ring.setAttribute('stroke-width','2'); ring.setAttribute('opacity','0.2'); svg.appendChild(ring);}
          }
          grid.appendChild(svg);
        }));
      } else {
        ['slot-a1','slot-a2','slot-a3','slot-a4'].forEach((cls,i)=>{
          const card=makeCard(unitStages[i],unit,ui*STAGES_PER_UNIT+i); card.classList.add(cls); grid.appendChild(card);
          if(i<3){const conn=mkConn(unit.conn,['conn-a12','conn-a23','conn-a34'][i]); grid.appendChild(conn);}
        });
        const sc=makeCard(unitStages[4],unit,ui*STAGES_PER_UNIT+4); sc.classList.add('slot-side-card'); grid.appendChild(sc);
        [2,4].forEach(row=>{const vc=document.createElement('div'); vc.className='conn-v'; vc.style.gridColumn='9'; vc.style.gridRow=row; vc.style.setProperty('--conn-color',unit.conn); grid.appendChild(vc);});
        const c5=makeCard(unitStages[5],unit,ui*STAGES_PER_UNIT+5); c5.style.gridColumn='7'; c5.style.gridRow='5'; grid.appendChild(c5);
        const h5=document.createElement('div'); h5.className='conn-h'; h5.style.gridColumn='6'; h5.style.gridRow='5'; h5.style.background=unit.conn; h5.style.opacity='0.65'; h5.style.width='100%'; grid.appendChild(h5);
        const c6=makeCard(unitStages[6],unit,ui*STAGES_PER_UNIT+6); c6.style.gridColumn='5'; c6.style.gridRow='5'; grid.appendChild(c6);
        const h8=document.createElement('div'); h8.style.gridColumn='8'; h8.style.gridRow='5'; h8.style.height='2px'; h8.style.width='100%'; h8.style.background=unit.conn; h8.style.opacity='0.65'; h8.style.borderRadius='99px'; grid.appendChild(h8);
      }
  
      wrap.appendChild(grid); outer.appendChild(wrap);
      if(ui<UNITS.length-1){const gap=document.createElement('div'); gap.className='unit-gap'; gap.innerHTML=`<div class="unit-gap-inner"><div class="gap-line"></div><div class="gap-arrow"><i class="fas fa-arrow-down"></i></div><div class="gap-line"></div></div>`; outer.appendChild(gap);}
    });
  
    updateTopBar(); buildNavDots(); updateNavBtns();
    requestAnimationFrame(()=>setTimeout(()=>{revealCards();animateBars();},40));
  }
  
  function mkConn(color, cls) {
    const el=document.createElement('div'); el.className='conn-h '+(cls||'');
    el.style.background=color; el.style.width='100%'; return el;
  }
  
  function makeCard(stage, unit, globalIdx) {
    const isCurrent=stage.id===currentStageId;
    let cls='stage-card';
    if(stage.completed) cls+=' s-done';
    if(isCurrent&&!stage.completed) cls+=' s-current';
    const card=document.createElement('div'); card.className=cls; card.dataset.id=stage.id;
    card.style.transitionDelay=(globalIdx*55)+'ms';
    card.style.setProperty('--c-accent',unit.color); card.style.setProperty('--c-bg',unit.light);
    card.style.setProperty('--c-border-col',unit.border); card.style.setProperty('--c-dark',unit.dark);
    let statusCls,statusIcon,statusText;
    if(stage.completed){statusCls='st-done';statusIcon='fa-check';statusText='مكتمل';}
    else if(isCurrent){statusCls='st-active';statusIcon='fa-play';statusText='جاري';}
    else{statusCls='st-locked';statusIcon='fa-circle';statusText='لم يبدأ';}
    const doneStar=stage.completed?'<span class="done-star">⭐</span>':'';
    const doneBadge=stage.completed?'<div class="c-done-badge"><i class="fas fa-check"></i></div>':'';
    card.innerHTML=`${doneBadge}<div class="c-icon"><i class="fas ${stage.icon}"></i>${doneStar}</div>
      <div class="c-title">${stage.title}</div><div class="c-sub">${stage.sub}</div>
      <div class="c-status ${statusCls}"><i class="fas ${statusIcon}" style="font-size:8px"></i>${statusText}</div>
      <div class="c-bar"><div class="c-bar-track"><div class="c-bar-fill" data-p="${stage.prog}" style="background:${unit.color}"></div></div></div>`;
    card.addEventListener('click',()=>{ currentStageId=stage.id; openDetail(stage,unit); });
    return card;
  }
  
  function revealCards(){document.querySelectorAll('.stage-card').forEach(c=>requestAnimationFrame(()=>c.classList.add('visible')));}
  function animateBars(){document.querySelectorAll('.c-bar-fill').forEach(el=>el.style.width=el.dataset.p+'%');}
  
  let resizeTimer;
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(buildMap,120);});
  
  /* ── DETAIL PANEL ── */
  function openDetail(stage,unit){
    const stages=getStages(); const s=stages.find(x=>x.id===stage.id)||stage; activeEntry={stage:s,unit};
    const ico=document.getElementById('detIco'); ico.style.background=unit.light; ico.style.border=`2px solid ${unit.color}20`;
    ico.innerHTML=`<i class="fas ${s.icon}" style="font-size:30px;color:${unit.color}"></i>`;
    document.getElementById('detUnitLabel').textContent=`${unit.name} · الدرس ${s.id}`;
    document.getElementById('detTitle').textContent=s.title; document.getElementById('detSub').textContent=s.sub;
    document.getElementById('detStats').innerHTML=`
      <div class="det-stat"><div class="det-stat-label">المدة</div><div class="det-stat-value">${s.duration}</div></div>
      <div class="det-stat"><div class="det-stat-label">المستوى</div><div class="det-stat-value">${s.level}</div></div>
      <div class="det-stat"><div class="det-stat-label">الحالة</div><div class="det-stat-value" style="color:${s.completed?'var(--green-dk)':unit.color}">${s.completed?'مكتمل':'جاري'}</div></div>`;
    document.getElementById('detPct').textContent=s.prog+'%';
    const fill=document.getElementById('detFill'); fill.style.background=unit.color; fill.style.width='0%';
    setTimeout(()=>{fill.style.width=s.prog+'%';},100);
    const note=document.getElementById('detNote'); const noteText=document.getElementById('detNoteText');
    if(s.completed){note.className='det-completion-note done';note.querySelector('i').className='fas fa-check-circle';noteText.textContent='لقد أكملت هذا الدرس. يمكنك مراجعته في أي وقت.';}
    else{note.className='det-completion-note';note.querySelector('i').className='fas fa-info-circle';noteText.textContent='افتح ملف PDF، اقرأ الدرس، ثم أغلق القارئ — سيتم حفظ تقدمك تلقائيًا.';}
    const btn=document.getElementById('btnStart'); const lbl=document.getElementById('btnStartLabel');
    btn.style.background=unit.color; btn.style.borderBottomColor=unit.dark; btn.style.boxShadow=`0 6px 24px ${unit.shadow}`;
    lbl.textContent=s.completed?'مراجعة الدرس':'فتح الدرس'; btn.querySelector('i').className=s.completed?'fas fa-redo':'fas fa-book-open';
    document.getElementById('overlay').classList.add('active');
  }
  function closeDetail(){document.getElementById('overlay').classList.remove('active');activeEntry=null;}
  
  /* ── PDF READER ── */
  let readerStageId=null,pdfTimerStarted=false;
  const MIN_READ_MS=3000;
  
  function openReader(stage){
    const url=stage.driveId?`https://drive.google.com/file/d/${stage.driveId}/preview`:'';
    readerStageId=stage.id; pdfTimerStarted=false; readerOpenTime=Date.now();
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
        buildMap();closeDetail();showToast(STAGES_RAW[idx]);
      } else {buildMap();closeDetail();}
    }
    readerStageId=null;
  }
  
  function showToast(stage){
    const toast=document.getElementById('toast');
    document.getElementById('toastTitle').textContent=`"${stage.title}" مكتمل!`;
    document.getElementById('toastSub').textContent='عمل رائع — واصل إلى الدرس التالي.';
    toast.classList.add('show'); setTimeout(()=>toast.classList.remove('show'),4000);
  }
  
  /* ── TOP BAR ── */
  function updateTopBar(){
    const done=STAGES_RAW.filter(s=>progress[s.id]).length;
    const pct=Math.round(done/STAGES_RAW.length*100);
    document.getElementById('progLabel').textContent=`${done} من ${STAGES_RAW.length}`;
    document.getElementById('pctText').textContent=`${pct}% مكتمل`;
    setTimeout(()=>{document.getElementById('progFill').style.width=pct+'%';},300);
  }
  function buildNavDots(){
    const c=document.getElementById('navDots'); c.innerHTML='';
    STAGES_RAW.forEach((s,i)=>{const d=document.createElement('div');const isDone=!!progress[s.id];const isCur=s.id===currentStageId;d.className='ndot'+(isCur?' active':'')+(isDone&&!isCur?' done-dot':'');d.title=s.title;d.addEventListener('click',()=>goTo(i));c.appendChild(d);});
  }
  function updateNavBtns(){const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);document.getElementById('navPrev').disabled=idx<=0;document.getElementById('navNext').disabled=idx>=STAGES_RAW.length-1;}
  function goTo(idx){currentStageId=STAGES_RAW[Math.max(0,Math.min(STAGES_RAW.length-1,idx))].id;buildMap();setTimeout(()=>{const card=document.querySelector(`[data-id="${currentStageId}"]`);if(card)card.scrollIntoView({behavior:'smooth',block:'center'});},60);}
  
  /* ── EVENTS (main) ── */
  document.getElementById('ovScrim').addEventListener('click',closeDetail);
  document.getElementById('detClose').addEventListener('click',closeDetail);
  document.getElementById('btnStart').addEventListener('click',()=>{if(activeEntry)openReader(activeEntry.stage);});
  document.getElementById('readerScrim').addEventListener('click',()=>closeReader(false));
  document.getElementById('readerClose').addEventListener('click',()=>closeReader(false));
  document.getElementById('rdotClose').addEventListener('click',()=>closeReader(false));
  document.getElementById('rcbClose').addEventListener('click',()=>closeReader(true));
  document.getElementById('rdotExpand').addEventListener('click',()=>{if(readerStageId){const s=STAGES_RAW.find(x=>x.id===readerStageId);if(s?.driveId)window.open(`https://drive.google.com/file/d/${s.driveId}/view`,'_blank');}});
  document.getElementById('readerNewTab').addEventListener('click',()=>{if(readerStageId){const s=STAGES_RAW.find(x=>x.id===readerStageId);if(s?.driveId)window.open(`https://drive.google.com/file/d/${s.driveId}/view`,'_blank');}});
  document.getElementById('navPrev').addEventListener('click',()=>{const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);if(idx>0)goTo(idx-1);});
  document.getElementById('navNext').addEventListener('click',()=>{const idx=STAGES_RAW.findIndex(s=>s.id===currentStageId);if(idx<STAGES_RAW.length-1)goTo(idx+1);});
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
  
  /* ══════════════════════════════════════════════════
     FILO DATA
  ══════════════════════════════════════════════════ */
  
  const FILO_LESSONS = [
    { unitName:'الأنية والغيرية',   unitIcon:'fa-user-circle',     unitColor:'#4F46E5', unitBg:'#EEF2FF', items:[{ title:'الأنية والغيرية',     sub:'درس فلسفي يعرّف بمفهوم الأنية وعلاقتها بالغير', tag:'درس كامل', docs:1, driveId:'' }] },
    { unitName:'الخصوصية والكونية', unitIcon:'fa-globe-europe',    unitColor:'#0369A1', unitBg:'#E0F2FE', items:[{ title:'الخصوصية والكونية',   sub:'درس فلسفي حول التوتر بين الخاص والعام',          tag:'درس كامل', docs:1, driveId:'' }] },
    { unitName:'النمذجة',           unitIcon:'fa-project-diagram', unitColor:'#047857', unitBg:'#D1FAE5', items:[{ title:'النمذجة',             sub:'بناء النماذج الفكرية وتمثيل الواقع',             tag:'درس كامل', docs:1, driveId:'' }] },
    { unitName:'الدولة',            unitIcon:'fa-balance-scale',   unitColor:'#B45309', unitBg:'#FEF3C7', items:[{ title:'الدولة',              sub:'فلسفة السياسة والسلطة والشرعية',                 tag:'درس كامل', docs:1, driveId:'' }] },
    { unitName:'الخير والسعادة',    unitIcon:'fa-seedling',        unitColor:'#BE185D', unitBg:'#FCE7F3', items:[{ title:'الخير والسعادة',      sub:'الأخلاق والفضيلة والغاية القصوى',               tag:'درس كامل', docs:1, driveId:'' }] },
  ];
  
  /* ── EXERCISES — now with subItems for the two-level nav ── */
  const FILO_EXERCISES = [
    {
      unitName:'الأنية والغيرية', unitIcon:'fa-user-circle', unitColor:'#4F46E5', unitBg:'#EEF2FF',
      items:[{
        title:'الأنية والغيرية', sub:'فروض ومواضيع اختبارات بتصحيح', tag:'تمرين', docs:4,
        subItems:[
          { title:'Sujet 1 — الأنية والغيرية',   type:'sujet',   icon:'fa-file-alt',       desc:'موضوع الاختبار الأول مع تعليمات مفصّلة للإجابة',   duration:'2h', difficulty:'متوسط',  driveId:'' },
          { title:'Corrigé 1',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح النموذجي الكامل للاختبار الأول',            duration:'—',  difficulty:'—',      driveId:'' },
          { title:'Sujet 2 — الأنية والغيرية',   type:'sujet',   icon:'fa-file-alt',        desc:'موضوع الاختبار الثاني — مستوى أعلى',               duration:'2h', difficulty:'متقدم',  driveId:'' },
          { title:'Corrigé 2',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح النموذجي الكامل للاختبار الثاني',           duration:'—',  difficulty:'—',      driveId:'' },
          { title:'بطاقة مراجعة شاملة',          type:'synthese', icon:'fa-layer-group',    desc:'ملخص تركيبي لأهم مفاهيم الوحدة وإشكالياتها',       duration:'—',  difficulty:'مبتدئ',  driveId:'' },
        ]
      }]
    },
    {
      unitName:'الخصوصية والكونية', unitIcon:'fa-globe-europe', unitColor:'#0369A1', unitBg:'#E0F2FE',
      items:[{
        title:'الخصوصية والكونية', sub:'فروض ومواضيع اختبارات بتصحيح', tag:'تمرين', docs:3,
        subItems:[
          { title:'Sujet 1 — الخصوصية والكونية', type:'sujet',   icon:'fa-file-alt',       desc:'موضوع الاختبار الأول: التوتر بين الخاص والعالمي',   duration:'2h', difficulty:'متوسط',  driveId:'' },
          { title:'Corrigé 1',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح النموذجي مع تحليل تفصيلي',                 duration:'—',  difficulty:'—',      driveId:'' },
          { title:'Sujet 2 — الخصوصية والكونية', type:'sujet',   icon:'fa-file-alt',        desc:'موضوع الاختبار الثاني: حقوق الإنسان والنسبية',     duration:'2h', difficulty:'متقدم',  driveId:'' },
          { title:'Corrigé 2',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح النموذجي مع ملاحظات المصحح',               duration:'—',  difficulty:'—',      driveId:'' },
          { title:'تمرين مراجعة',                type:'bilan',   icon:'fa-book-reader',     desc:'أسئلة تدريبية لتقييم الفهم الذاتي',                duration:'1h', difficulty:'متوسط',  driveId:'' },
        ]
      }]
    },
    {
      unitName:'النمذجة', unitIcon:'fa-project-diagram', unitColor:'#047857', unitBg:'#D1FAE5',
      items:[{
        title:'النمذجة', sub:'فروض ومواضيع اختبارات بتصحيح', tag:'تمرين', docs:2,
        subItems:[
          { title:'Sujet 1 — النمذجة',            type:'sujet',   icon:'fa-file-alt',       desc:'موضوع الاختبار الأول: ماهية النموذج وحدوده',        duration:'2h', difficulty:'متوسط',  driveId:'' },
          { title:'Corrigé 1',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح المرجعي مع مسودة إجابة نموذجية',           duration:'—',  difficulty:'—',      driveId:'' },
          { title:'Sujet 2 — النمذجة',            type:'sujet',   icon:'fa-file-alt',        desc:'موضوع الاختبار الثاني: النموذج العلمي والمعرفة',   duration:'2h', difficulty:'متقدم',  driveId:'' },
          { title:'Corrigé 2',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح المفصّل مع ملاحظات تقييمية',               duration:'—',  difficulty:'—',      driveId:'' },
        ]
      }]
    },
    {
      unitName:'الدولة', unitIcon:'fa-balance-scale', unitColor:'#B45309', unitBg:'#FEF3C7',
      items:[{
        title:'الدولة', sub:'فروض ومواضيع اختبارات بتصحيح', tag:'تمرين', docs:4,
        subItems:[
          { title:'Sujet 1 — الدولة',             type:'sujet',   icon:'fa-file-alt',       desc:'موضوع الاختبار الأول: العقد الاجتماعي والسلطة',    duration:'2h', difficulty:'متوسط',  driveId:'' },
          { title:'Corrigé 1',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح الشامل مع تحليل الأفكار الرئيسية',         duration:'—',  difficulty:'—',      driveId:'' },
          { title:'Sujet 2 — الدولة',             type:'sujet',   icon:'fa-file-alt',        desc:'موضوع الاختبار الثاني: الشرعية والعدالة السياسية', duration:'2h', difficulty:'متقدم',  driveId:'' },
          { title:'Corrigé 2',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح المرجعي مع خطة مفصّلة',                   duration:'—',  difficulty:'—',      driveId:'' },
          { title:'بطاقة مفاهيم الدولة',         type:'synthese', icon:'fa-layer-group',    desc:'جدول ملخّص لأبرز مفاهيم وإشكاليات فلسفة الدولة',   duration:'—',  difficulty:'مبتدئ',  driveId:'' },
        ]
      }]
    },
    {
      unitName:'الخير والسعادة', unitIcon:'fa-seedling', unitColor:'#BE185D', unitBg:'#FCE7F3',
      items:[{
        title:'الخير والسعادة', sub:'فروض ومواضيع اختبارات بتصحيح', tag:'تمرين', docs:3,
        subItems:[
          { title:'Sujet 1 — الخير والسعادة',     type:'sujet',   icon:'fa-file-alt',       desc:'موضوع الاختبار الأول: الفضيلة والغاية الأرسطية',   duration:'2h', difficulty:'متوسط',  driveId:'' },
          { title:'Corrigé 1',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح الوافي مع تقييم منهجي',                    duration:'—',  difficulty:'—',      driveId:'' },
          { title:'Sujet 2 — الخير والسعادة',     type:'sujet',   icon:'fa-file-alt',        desc:'موضوع الاختبار الثاني: السعادة بين الأخلاق ومعنى الوجود', duration:'2h', difficulty:'متقدم', driveId:'' },
          { title:'Corrigé 2',                    type:'corrige', icon:'fa-check-double',    desc:'التصحيح المفصّل مع نقاط التقييم',                  duration:'—',  difficulty:'—',      driveId:'' },
          { title:'مراجعة نهائية',               type:'bilan',   icon:'fa-graduation-cap', desc:'تمرين تركيبي شامل لتحضير الامتحان',                 duration:'1h', difficulty:'متقدم',  driveId:'' },
        ]
      }]
    },
  ];
  
  const FILO_DEVOIRS = [
    {
      unitName:'الأنية والغيرية', unitIcon:'fa-user-circle', unitColor:'#4F46E5', unitBg:'#EEF2FF',
      items:[{
        title:'Devoir 1 — الأنية والغيرية', sub:'Sujet de devoir surveillé avec corrigé détaillé', tag:'Devoir', docs:3,
        subItems:[
          { title:'Sujet — الأنية والغيرية',    type:'sujet',   icon:'fa-file-alt',     desc:'موضوع الفرض المراقب الكامل مع التعليمات',            duration:'3h', difficulty:'متوسط', driveId:'' },
          { title:'Corrigé détaillé',            type:'corrige', icon:'fa-check-double', desc:'تصحيح مفصّل بخطة وتحليل لكل محور',                  duration:'—',  difficulty:'—',     driveId:'' },
          { title:'Grille d\'évaluation',        type:'bilan',   icon:'fa-table',        desc:'شبكة التنقيط المرجعية وملاحظات المصحح',             duration:'—',  difficulty:'—',     driveId:'' },
        ]
      }]
    },
    {
      unitName:'الخصوصية والكونية', unitIcon:'fa-globe-europe', unitColor:'#0369A1', unitBg:'#E0F2FE',
      items:[{
        title:'Devoir 1 — الخصوصية والكونية', sub:'Sujet de devoir surveillé avec corrigé détaillé', tag:'Devoir', docs:3,
        subItems:[
          { title:'Sujet — الخصوصية والكونية',  type:'sujet',   icon:'fa-file-alt',     desc:'موضوع الفرض المراقب: حقوق الإنسان والنسبية الثقافية', duration:'3h', difficulty:'متقدم', driveId:'' },
          { title:'Corrigé détaillé',            type:'corrige', icon:'fa-check-double', desc:'تصحيح وافٍ مع تفكيك الإشكاليات الكبرى',             duration:'—',  difficulty:'—',     driveId:'' },
          { title:'Points de méthode',           type:'synthese', icon:'fa-lightbulb',   desc:'نقاط منهجية لكيفية بناء الإجابة الفلسفية',          duration:'—',  difficulty:'مبتدئ', driveId:'' },
        ]
      }]
    },
    {
      unitName:'النمذجة', unitIcon:'fa-project-diagram', unitColor:'#047857', unitBg:'#D1FAE5',
      items:[{
        title:'Devoir 1 — النمذجة', sub:'Sujet de devoir surveillé avec corrigé détaillé', tag:'Devoir', docs:3,
        subItems:[
          { title:'Sujet — النمذجة',             type:'sujet',   icon:'fa-file-alt',     desc:'موضوع الفرض المراقب: النموذج بين التجريد والواقع',   duration:'3h', difficulty:'متقدم', driveId:'' },
          { title:'Corrigé détaillé',            type:'corrige', icon:'fa-check-double', desc:'تصحيح مرجعي مع مسودة الإجابة النموذجية',            duration:'—',  difficulty:'—',     driveId:'' },
          { title:'Fiche de révision',           type:'synthese', icon:'fa-layer-group', desc:'بطاقة مراجعة مركّزة لأهم مفاهيم النمذجة',           duration:'—',  difficulty:'مبتدئ', driveId:'' },
        ]
      }]
    },
    {
      unitName:'الدولة', unitIcon:'fa-balance-scale', unitColor:'#B45309', unitBg:'#FEF3C7',
      items:[{
        title:'Devoir 1 — الدولة', sub:'Sujet de devoir surveillé avec corrigé détaillé', tag:'Devoir', docs:4,
        subItems:[
          { title:'Sujet — الدولة',              type:'sujet',   icon:'fa-file-alt',     desc:'موضوع الفرض المراقب: الشرعية والعدالة السياسية',    duration:'3h', difficulty:'متقدم', driveId:'' },
          { title:'Corrigé détaillé',            type:'corrige', icon:'fa-check-double', desc:'تصحيح تفصيلي مع خطة مقترحة ومعايير التقييم',       duration:'—',  difficulty:'—',     driveId:'' },
          { title:'Sujet — الثورة والإصلاح',     type:'sujet',   icon:'fa-file-alt',     desc:'موضوع إضافي: متى يحق تغيير النظام؟',               duration:'3h', difficulty:'متقدم', driveId:'' },
          { title:'Corrigé Sujet 2',             type:'corrige', icon:'fa-check-double', desc:'التصحيح الكامل للموضوع الإضافي',                    duration:'—',  difficulty:'—',     driveId:'' },
        ]
      }]
    },
    {
      unitName:'الخير والسعادة', unitIcon:'fa-seedling', unitColor:'#BE185D', unitBg:'#FCE7F3',
      items:[{
        title:'Devoir 1 — الخير والسعادة', sub:'Sujet de devoir surveillé avec corrigé détaillé', tag:'Devoir', docs:3,
        subItems:[
          { title:'Sujet — الخير والسعادة',      type:'sujet',   icon:'fa-file-alt',     desc:'موضوع الفرض المراقب: الفضيلة ومعنى الوجود',         duration:'3h', difficulty:'متوسط', driveId:'' },
          { title:'Corrigé détaillé',            type:'corrige', icon:'fa-check-double', desc:'تصحيح وافٍ مع تقييم منهجي وملاحظات المصحح',         duration:'—',  difficulty:'—',     driveId:'' },
          { title:'Bilan de l\'unité',           type:'bilan',   icon:'fa-graduation-cap', desc:'تمرين تركيبي شامل + أهم الأسئلة المتوقعة',        duration:'1h', difficulty:'متقدم', driveId:'' },
        ]
      }]
    },
  ];
  
  const TAB_CONFIG = {
    lessons:   { label:'الدروس والملخّصات', sub:'بطاقات دروس كاملة للتحكّم في البرنامج', icon:'fa-book-open',      grad:'linear-gradient(135deg,#4F46E5,#7C3AED)', itemsLbl:'دروس',    data:()=>FILO_LESSONS   },
    exercises: { label:'التمارين والنماذج', sub:'اختر الوحدة ثم المستند الذي تريد فتحه', icon:'fa-pen-to-square',  grad:'linear-gradient(135deg,#0369A1,#0EA5E9)', itemsLbl:'وحدات',   data:()=>FILO_EXERCISES },
    devoirs:   { label:'Devoirs',           sub:'اختر الوحدة ثم المستند الذي تريد فتحه', icon:'fa-clipboard-list', grad:'linear-gradient(135deg,#047857,#10B981)', itemsLbl:'وحدات',   data:()=>FILO_DEVOIRS   },
  };
  
  /* ── FILO PANEL LOGIC ── */
  let filoActiveTab = 'lessons';
  
  function openFiloPanel(startTab){
    filoActiveTab=startTab||'lessons';
    updateFiloBanner(); renderFiloContent(filoActiveTab);
    document.getElementById('filoOverlay').classList.add('active');
  }
  function closeFiloPanel(){document.getElementById('filoOverlay').classList.remove('active');}
  function updateFiloBanner(){
    const cfg=TAB_CONFIG[filoActiveTab];
    document.getElementById('filoBannerBg').style.background=cfg.grad;
    document.getElementById('filoBannerIcon').innerHTML=`<i class="fas ${cfg.icon}"></i>`;
    document.getElementById('filoBannerTitle').textContent=cfg.label;
    document.getElementById('filoBannerSub').textContent=cfg.sub;
    ['tabLessons','tabExercises','tabDevoirs'].forEach(id=>{
      const t={'tabLessons':'lessons','tabExercises':'exercises','tabDevoirs':'devoirs'}[id];
      document.getElementById(id).classList.toggle('active',t===filoActiveTab);
    });
  }
  function switchFiloTab(tab){filoActiveTab=tab;updateFiloBanner();renderFiloContent(tab);}
  
  function renderFiloContent(tab){
    const cfg=TAB_CONFIG[tab]; const data=cfg.data();
    const content=document.getElementById('filoContent');
    content.innerHTML=''; content.style.opacity='0'; content.style.transform='translateY(12px)';
    const totalItems=data.reduce((a,u)=>a+u.items.length,0);
    const labelEl=document.createElement('div'); labelEl.className='filo-section-label';
    labelEl.innerHTML=`<span>${cfg.itemsLbl}</span><span class="filo-section-count">${totalItems}</span>`;
    content.appendChild(labelEl);
    const iconName=tab==='lessons'?'fa-book-open':tab==='exercises'?'fa-file-pen':'fa-clipboard-list';
  
    data.forEach(unit=>{
      unit.items.forEach(item=>{
        const card=document.createElement('div'); card.className='filo-item';
        card.style.setProperty('--fi-color',unit.unitColor);
        card.style.setProperty('--fi-bg',unit.unitBg);
  
        const hasSubs = (tab==='exercises' || tab==='devoirs') && item.subItems;
        const docsCount = hasSubs ? item.subItems.length : item.docs;
        const openLabel = hasSubs ? 'عرض الملفات' : 'فتح';
  
        card.innerHTML=`
          <div class="filo-item-accent"></div>
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
              <div class="filo-item-open-btn">
                ${hasSubs?'<i class="fas fa-list"></i>':'<i class="fas fa-arrow-left"></i>'}${openLabel}
              </div>
            </div>
          </div>`;
  
        if(hasSubs){
          card.addEventListener('click',()=>openExdetModal(item,unit,tab));
        } else {
          card.addEventListener('click',()=>openFiloReader(item,unit));
        }
        content.appendChild(card);
      });
    });
  
    requestAnimationFrame(()=>{
      content.style.transition='opacity .3s ease, transform .3s var(--ease-out)';
      content.style.opacity='1'; content.style.transform='translateY(0)';
    });
  }
  
  /* ══════════════════════════════════════════════════
     EXERCISE DETAIL MODAL (level 2)
  ══════════════════════════════════════════════════ */
  
  const TYPE_META = {
    sujet:    { label:'Sujet',    icon:'fa-file-alt',       color:'#0369A1', bg:'#E0F2FE' },
    corrige:  { label:'Corrigé',  icon:'fa-check-double',   color:'#047857', bg:'#D1FAE5' },
    synthese: { label:'Synthèse', icon:'fa-layer-group',    color:'#4F46E5', bg:'#EEF2FF' },
    bilan:    { label:'Bilan',    icon:'fa-book-reader',    color:'#B45309', bg:'#FEF3C7' },
  };
  
  function openExdetModal(item, unit) {
    /* Banner */
    document.getElementById('exdetBannerBg').style.background =
      `linear-gradient(130deg, ${unit.unitColor} 0%, ${unit.unitColor}cc 100%)`;
    document.getElementById('exdetBannerIcon').style.background = 'rgba(255,255,255,.2)';
    document.getElementById('exdetBannerIcon').innerHTML = `<i class="fas ${unit.unitIcon}"></i>`;
    document.getElementById('exdetEyebrow').textContent = 'التمارين · ' + unit.unitName;
    document.getElementById('exdetTitle').textContent   = item.title;
    document.getElementById('exdetSub').textContent     = 'اختر الملف الذي تريد فتحه';
  
    /* Chips */
    const chips = document.getElementById('exdetChips');
    chips.innerHTML = '';
    const subItems = item.subItems || [];
    const sujets  = subItems.filter(x=>x.type==='sujet').length;
    const corriges = subItems.filter(x=>x.type==='corrige').length;
    [
      { icon:'fa-file-alt',     label:`${sujets} مواضيع`  },
      { icon:'fa-check-double', label:`${corriges} تصحيح`  },
      { icon:'fa-layer-group',  label:`${subItems.length} ملف` },
    ].forEach(c=>{
      const chip=document.createElement('div'); chip.className='exdet-chip';
      chip.innerHTML=`<i class="fas ${c.icon}"></i>${c.label}`;
      chips.appendChild(chip);
    });
  
    /* Sub-items */
    const content = document.getElementById('exdetContent');
    content.innerHTML='';
    content.style.opacity='0'; content.style.transform='translateY(10px)';
  
    const lbl=document.createElement('div'); lbl.className='exdet-section-lbl';
    lbl.innerHTML=`<span>الملفات المتاحة</span><span class="exdet-count">${subItems.length}</span>`;
    content.appendChild(lbl);
  
    subItems.forEach((si, idx) => {
      const meta = TYPE_META[si.type] || TYPE_META.sujet;
  
      const card = document.createElement('div');
      card.className = 'exdet-subitem';
      card.dataset.type = si.type;
      card.style.transitionDelay = (idx * 55) + 'ms';
      card.style.opacity = '0';
      card.style.transform = 'translateY(14px)';
  
      card.innerHTML = `
        <div class="exdet-si-top-bar" style="background:${meta.color}"></div>
        <div class="exdet-si-body">
          <div class="exdet-si-icon" style="background:${meta.bg};color:${meta.color};border-color:${meta.color}22">
            <i class="fas ${si.icon}"></i>
          </div>
          <div class="exdet-si-info">
            <div class="exdet-si-type" style="background:${meta.bg};color:${meta.color}">
              <i class="fas ${meta.icon}" style="font-size:8px"></i>${meta.label}
            </div>
            <div class="exdet-si-title">${si.title}</div>
            <div class="exdet-si-desc">${si.desc}</div>
          </div>
          <div class="exdet-si-meta">
            ${si.duration!=='—'?`<div class="exdet-si-tag" style="--si-color:${meta.color}"><i class="fas fa-clock"></i>${si.duration}</div>`:''}
            ${si.difficulty!=='—'?`<div class="exdet-si-tag" style="--si-color:${meta.color}"><i class="fas fa-signal"></i>${si.difficulty}</div>`:''}
            <div class="exdet-si-open" style="background:${meta.bg};color:${meta.color}">
              <i class="fas fa-folder-open" style="font-size:10px"></i>فتح
            </div>
          </div>
        </div>`;
  
      card.addEventListener('click', () => openFiloReader(si, { unitName: unit.unitName }));
      content.appendChild(card);
  
      /* staggered entrance */
      setTimeout(()=>{
        card.style.transition='opacity .35s var(--ease-out), transform .35s var(--ease-out)';
        card.style.opacity='1'; card.style.transform='translateY(0)';
      }, 80 + idx*60);
    });
  
    /* Animate content in */
    requestAnimationFrame(()=>{
      content.style.transition='opacity .3s ease, transform .3s var(--ease-out)';
      content.style.opacity='1'; content.style.transform='translateY(0)';
    });
  
    document.getElementById('exdetOverlay').classList.add('active');
  }
  
  function closeExdetModal() {
    document.getElementById('exdetOverlay').classList.remove('active');
  }
  
  /* Events for exdet modal */
  document.getElementById('exdetScrim').addEventListener('click',   closeExdetModal);
  document.getElementById('exdetCloseBtn').addEventListener('click', closeExdetModal);
  document.getElementById('exdetBackBtn').addEventListener('click',  ()=>{
    closeExdetModal();
    /* reopen filo panel if it was closed — typically it stays open behind */
    if(!document.getElementById('filoOverlay').classList.contains('active')){
      openFiloPanel('exercises');
    }
  });
  
  /* ── FILO PDF READER ── */
  let filoCurrentDriveId='', filoCurrentTitle='';
  
  function openFiloReader(item, unit) {
    filoCurrentDriveId=item.driveId||''; filoCurrentTitle=item.title;
    document.getElementById('filoReaderPill').textContent=item.title;
    const frame=document.getElementById('filoReaderFrame'), ph=document.getElementById('filoReaderPh');
    if(filoCurrentDriveId){
      frame.src=`https://drive.google.com/file/d/${filoCurrentDriveId}/preview`;
      frame.style.display='block'; ph.style.display='none';
    } else { frame.src=''; frame.style.display='none'; ph.style.display='flex'; }
    document.getElementById('filoReaderOverlay').classList.add('active');
  }
  function closeFiloReader(){
    document.getElementById('filoReaderOverlay').classList.remove('active');
    setTimeout(()=>{
      document.getElementById('filoReaderFrame').src='';
      document.getElementById('filoReaderFrame').style.display='none';
      document.getElementById('filoReaderPh').style.display='flex';
    },400);
  }
  
  document.getElementById('filoScrim').addEventListener('click',      closeFiloPanel);
  document.getElementById('filoBannerClose').addEventListener('click', closeFiloPanel);
  document.getElementById('filoReaderScrim').addEventListener('click',    closeFiloReader);
  document.getElementById('filoReaderCloseBtn').addEventListener('click', closeFiloReader);
  document.getElementById('filoRdotClose').addEventListener('click',      closeFiloReader);
  document.getElementById('filoRdotExpand').addEventListener('click',()=>{if(filoCurrentDriveId)window.open(`https://drive.google.com/file/d/${filoCurrentDriveId}/view`,'_blank');});
  document.getElementById('filoReaderExtBtn').addEventListener('click',()=>{if(filoCurrentDriveId)window.open(`https://drive.google.com/file/d/${filoCurrentDriveId}/view`,'_blank');});
  
  /* ── INIT ── */
  buildMap();
  setTimeout(()=>{const card=document.querySelector(`[data-id="${currentStageId}"]`);if(card)card.scrollIntoView({behavior:'smooth',block:'center'});},600);
  