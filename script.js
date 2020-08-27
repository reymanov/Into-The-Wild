document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
    });
    });
    });
        
        

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation');
    
    const handleClick = () => {
      hamburger.classList.toggle('hamburger--active');
      nav.classList.toggle('navigation--active');
    }
    
    hamburger.addEventListener('click', handleClick);