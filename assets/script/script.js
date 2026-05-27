
    /* LOADER */
    (function(){
        const splash=document.getElementById('loader-splash');
        const MIN=2400,start=Date.now();
        let pageReady=false,timerDone=false;
        function tryDismiss(){if(!pageReady||!timerDone)return;splash.classList.add('hide');setTimeout(()=>{splash.style.display='none';},700);}
        setTimeout(()=>{timerDone=true;tryDismiss();},MIN);
        if(document.readyState==='complete'){pageReady=true;tryDismiss();}
        else window.addEventListener('load',()=>{pageReady=true;tryDismiss();});
      })();
  
      /* MORPHING TEXT */
      (function(){
        const MT=1.5,CT=0.5,texts=["Naja7","Commence","Fort","Révise","Intelligemment","Progresse","Chaque","Jour","Apprends","Avec","Méthode","Concentre-toi","Maintenant","Organise","Ton","Travail","Prépare","Ton","Bac","Persévère","Toujours","Évolue","Constamment","Brille","Dans","Tes","Études","Atteins","Tes","Objectifs"];
        const e1=document.getElementById('morph-text1'),e2=document.getElementById('morph-text2');
        let idx=0,morph=0,cool=CT,last=performance.now();
        function styles(f){
          e2.style.filter=`blur(${Math.min(8/f-8,100)}px)`;e2.style.opacity=`${Math.pow(f,.4)*100}%`;
          const v=1-f;e1.style.filter=`blur(${Math.min(8/v-8,100)}px)`;e1.style.opacity=`${Math.pow(v,.4)*100}%`;
          e1.textContent=texts[idx%texts.length];e2.textContent=texts[(idx+1)%texts.length];
        }
        function tick(now){
          requestAnimationFrame(tick);const dt=(now-last)/1e3;last=now;cool-=dt;
          if(cool<=0){morph-=cool;cool=0;let f=morph/MT;if(f>1){cool=CT;f=1;}styles(f);if(f===1)idx++;}
          else{morph=0;e2.style.filter='none';e2.style.opacity='100%';e1.style.filter='none';e1.style.opacity='0%';}
        }
        e1.textContent=texts[0];e2.textContent=texts[1];requestAnimationFrame(tick);
      })();
  
      /* HERO ENTRANCE */
      function eoe(t){return t===1?1:1-Math.pow(2,-10*t);}
      function animEl(el,fy,ty,fo,to,dur,del){
        let s=null;
        setTimeout(()=>{
          function step(ts){if(!s)s=ts;const p=Math.min((ts-s)/dur,1),e=eoe(p);el.style.transform=`translateY(${fy+(ty-fy)*e}px)`;el.style.opacity=fo+(to-fo)*e;if(p<1)requestAnimationFrame(step);}
          requestAnimationFrame(step);
        },del);
      }
  
      const hl = document.getElementById('headline');
  
      /* Word 1: "Sahl" — plain text */
      (function(){
        const wrap  = document.createElement('span'); wrap.className  = 'word-wrap';
        const inner = document.createElement('span'); inner.className = 'word-inner';
        inner.textContent = 'Sahl';
        inner.style.marginRight = '0.2em';
        wrap.appendChild(inner);
        hl.appendChild(wrap);
        animEl(inner, 120, 0, 0, 1, 600, 0);
      })();
  
      /* Word 2: "Learn" — background-clip gradient, strictly within text */
      (function(){
        const wrap  = document.createElement('span'); wrap.className  = 'word-wrap';
        const inner = document.createElement('span'); inner.className = 'word-inner';
  
        /* Gradient text element */
        const gt = document.createElement('span');
        gt.className = 'gradient-text';
        gt.textContent = 'Learn';
  
        /* Asterisk — separate element so it stays opaque */
        const ast = document.createElement('span');
        ast.className = 'asterisk';
        ast.textContent = '*';
  
        inner.appendChild(gt);
        inner.appendChild(ast);
        wrap.appendChild(inner);
        hl.appendChild(wrap);
        animEl(inner, 120, 0, 0, 1, 600, 80);
      })();
  
      animEl(document.getElementById('hero-text'), 20, 0, 0, 1, 800, 500);
      animEl(document.getElementById('btnJoin'),   20, 0, 0, 1, 800, 700);
      setTimeout(()=>document.getElementById('eduStrip').classList.add('visible'), 400);
  
      /* PAGE TRANSITIONS */
      const p1=document.getElementById('p1'),p2=document.getElementById('p2');
      const btnJoin=document.getElementById('btnJoin'),btnBack=document.getElementById('btnBack');
      function showPage2(){
        p1.classList.add('leave');
        setTimeout(()=>{
          p1.classList.add('gone');p1.classList.remove('leave');
          p2.classList.remove('gone');p2.classList.add('enter');
          p2.addEventListener('animationend',()=>p2.classList.remove('enter'),{once:true});
          const cards=p2.querySelectorAll('.action-card');
          cards.forEach(c=>{c.classList.remove('in');void c.offsetWidth;});
          requestAnimationFrame(()=>cards.forEach(c=>c.classList.add('in')));
          const ac=p2.querySelectorAll('.app-card');
          ac.forEach(c=>{c.classList.remove('in');void c.offsetWidth;});
          ac.forEach((c,i)=>setTimeout(()=>c.classList.add('in'),280+i*75));
          btnJoin.classList.remove('loading');btnJoin.disabled=false;
        },420);
      }
      function showPage1(){
        p2.classList.add('leave');p2.scrollTop=0;
        setTimeout(()=>{
          p2.classList.add('gone');p2.classList.remove('leave');
          p1.classList.remove('gone');p1.classList.add('enter');
          p1.addEventListener('animationend',()=>p1.classList.remove('enter'),{once:true});
        },420);
      }
      btnJoin.addEventListener('click',()=>{btnJoin.classList.add('loading');btnJoin.disabled=true;setTimeout(showPage2,600);});
      btnBack.addEventListener('click',showPage1);
  
      /* SCROLL DOTS */
      const sc=document.getElementById('collectionScroll'),dots=document.querySelectorAll('#scrollDots .scroll-dot');
      if(sc&&dots.length){sc.addEventListener('scroll',()=>{const i=Math.round(sc.scrollLeft/294);dots.forEach((d,j)=>d.classList.toggle('active',j===i));},{passive:true});}
  
      /* MODAL ENGINE */
      const overlay=document.getElementById('modalOverlay');
      let activeModalId=null;
      document.querySelectorAll('.fp-modal').forEach(m=>{m.style.willChange='transform, opacity';});
      function openModal(id){
        if(activeModalId&&activeModalId!==id){const prev=document.getElementById('modal-'+activeModalId);if(prev)prev.classList.remove('open');}
        activeModalId=id;const modal=document.getElementById('modal-'+id);if(!modal)return;
        overlay.classList.add('open');modal.classList.add('open');
      }
      function closeModal(){
        if(!activeModalId)return;const modal=document.getElementById('modal-'+activeModalId);
        activeModalId=null;if(modal)modal.classList.remove('open');overlay.classList.remove('open');
      }
      document.querySelectorAll('[data-modal]').forEach(el=>{
        el.addEventListener('click',e=>{e.preventDefault();activeModalId===el.dataset.modal?closeModal():openModal(el.dataset.modal);});
      });
      document.querySelectorAll('[data-close]').forEach(btn=>{btn.addEventListener('click',e=>{e.stopPropagation();closeModal();});});
      overlay.addEventListener('click',closeModal);
      document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
      document.querySelectorAll('.fp-modal').forEach(m=>{m.addEventListener('click',e=>e.stopPropagation());});