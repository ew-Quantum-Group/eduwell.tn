// Multi-Step Popup functionality - Shows EVERY TIME
(function() {
  'use strict';
  
  console.log('Popup script loaded - will show every time');
  
  // Remove session storage check - always show
  const POPUP_DISABLED_KEY = 'sahlPopupDisabled_v2';
  
  const overlay = document.getElementById('sahlPopupOverlay');
  const closeBtn = document.getElementById('sahlPopupCloseBtn');
  const dontShowCheckbox = document.getElementById('sahlDontShowCheckbox');
  const testBtn = document.getElementById('sahlTestBtn');
  
  const step1 = document.getElementById('sahlStep1');
  const step2 = document.getElementById('sahlStep2');
  const step3 = document.getElementById('sahlStep3');
  
  const dot1 = document.getElementById('sahlProgressDot1');
  const dot2 = document.getElementById('sahlProgressDot2');
  const dot3 = document.getElementById('sahlProgressDot3');
  
  const step1Next = document.getElementById('sahlStep1NextBtn');
  const step2Next = document.getElementById('sahlStep2NextBtn');
  const step2Back = document.getElementById('sahlStep2BackBtn');
  const step3Back = document.getElementById('sahlStep3BackBtn');
  const step3Finish = document.getElementById('sahlStep3FinishBtn');
  
  let currentStep = 1;
  
  function showPopup() {
    console.log('showPopup called');
    if (!overlay) {
      console.error('Overlay not found');
      return;
    }
    
    // Check if permanently disabled by "Don't show again" checkbox
    if (localStorage.getItem(POPUP_DISABLED_KEY) === 'true') {
      console.log('Popup permanently disabled by user');
      return;
    }
    
    // REMOVED: sessionStorage check - popup will show every time
    // unless user checked "Don't show again"
    
    console.log('Showing popup');
    overlay.classList.add('active');
    // REMOVED: sessionStorage.setItem - don't track sessions
  }
  
  function hidePopup() {
    console.log('hidePopup called');
    if (!overlay) return;
    overlay.classList.remove('active');
    
    // Reset to step 1 for next time
    setTimeout(() => {
      if (!overlay.classList.contains('active')) {
        goToStep(1);
      }
    }, 500);
  }
  
  function updateProgress(step) {
    console.log('Updating progress to step:', step);
    
    if (dot1) dot1.classList.remove('active');
    if (dot2) dot2.classList.remove('active');
    if (dot3) dot3.classList.remove('active');
    
    if (step === 1 && dot1) dot1.classList.add('active');
    if (step === 2 && dot2) dot2.classList.add('active');
    if (step === 3 && dot3) dot3.classList.add('active');
  }
  
  function goToStep(step) {
    console.log('Going to step:', step);
    
    if (!step1 || !step2 || !step3) {
      console.error('Step elements not found');
      return;
    }
    
    step1.classList.remove('active');
    step2.classList.remove('active');
    step3.classList.remove('active');
    
    if (step === 1) step1.classList.add('active');
    if (step === 2) step2.classList.add('active');
    if (step === 3) step3.classList.add('active');
    
    updateProgress(step);
    currentStep = step;
  }
  
  // Show popup after 2 seconds - EVERY TIME
  setTimeout(function() {
    console.log('2 seconds passed, attempting to show popup');
    showPopup();
  }, 2000);
  
  // Also try on load complete as backup
  window.addEventListener('load', function() {
    console.log('Window loaded - backup show attempt');
    setTimeout(showPopup, 2100);
  });
  
  // Test button (if enabled)
  if (testBtn) {
    testBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Test button clicked');
      showPopup();
    });
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Close button clicked');
      hidePopup();
    });
  }
  
  if (step1Next) {
    step1Next.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Step 1 next clicked');
      goToStep(2);
    });
  }
  
  if (step2Next) {
    step2Next.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Step 2 next clicked');
      goToStep(3);
    });
  }
  
  if (step2Back) {
    step2Back.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Step 2 back clicked');
      goToStep(1);
    });
  }
  
  if (step3Back) {
    step3Back.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Step 3 back clicked');
      goToStep(2);
    });
  }
  
  if (step3Finish) {
    step3Finish.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Step 3 finish clicked');
      
      if (dontShowCheckbox && dontShowCheckbox.checked) {
        localStorage.setItem(POPUP_DISABLED_KEY, 'true');
        console.log('Popup permanently disabled by user');
      }
      
      hidePopup();
    });
  }
  
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        console.log('Overlay clicked');
        hidePopup();
      }
    });
  }
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
      console.log('ESC pressed');
      e.preventDefault();
      hidePopup();
    }
  });
  
  // Reset the disabled status if needed (uncomment to enable reset)
  // localStorage.removeItem(POPUP_DISABLED_KEY);
  
  console.log('Popup initialization complete - will show every time');
})();