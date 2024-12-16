//scroll menu
new Swiper('.mindflow-card-wrapper', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0:{
        slidesPerView: 1
      },
      750:{
        slidesPerView: 1
      },
      950:{
        slidesPerView: 3
      },
      1024:{
        slidesPerView: 4
      },
    }
});

//dynamically typed text
document.addEventListener("DOMContentLoaded", () => {
    const options = {
        root: null,
        threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start typing effect
                new Typed("#typed-text", {
                    strings: ["Your journey doesn't stop here.\nThe rest is up to you!"],
                    typeSpeed: 100,
                    backSpeed: 25,
                    startDelay: 300,
                    loop: false,
                    showCursor: true,
                    cursorChar: "|",
                });
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    const target = document.querySelector(".journey-section");
    observer.observe(target); 
});


//dynamic navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.nav-style');
  const targetSection = document.getElementById('landing-section');  

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  navbar.classList.remove('transparent');
              } else {
                  navbar.classList.add('transparent');
              }
          });
      },
      {
          root: null,  
          threshold: 0.1,  
      }
  );

  // Start observing the target section
  observer.observe(targetSection);
});

//dynamic navbar content
const navbar = document.querySelector('.nav-style');
const hiddenElements = document.querySelectorAll('.hidden-nav-section');

// Function to check scroll position
function checkScroll() {
    if (window.scrollY > 650) {  
        navbar.classList.add('transparent');
        hiddenElements.forEach(element => {
            element.classList.add('visible-nav-section'); 
        });
    } else {
        navbar.classList.remove('transparent');
        hiddenElements.forEach(element => {
            element.classList.remove('visible-nav-section'); 
        });
    }
}

// Event listener for scroll
window.addEventListener('scroll', checkScroll);