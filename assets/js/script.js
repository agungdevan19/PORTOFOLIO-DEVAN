  // Dynamic Cursor logic
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  // Scale cursor on hoverable elements
  const links = document.querySelectorAll('a, .btn-glow, .btn-outline, .social-btn');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'rgba(123,110,246,0.3)';
      cursorRing.style.width = '50px';
      cursorRing.style.height = '50px';
    });
    link.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      cursor.style.background = 'var(--accent)';
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
    });
  });

  // Nav Scrolled Class injection
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if(window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Reveal animations on scrolling viewports
  const revealElements = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
