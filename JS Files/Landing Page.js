new Swiper('.mindflow-card-wrapper', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0:{
        slidesPerView: 2
      },
      768:{
        slidesPerView: 3
      },
      1024:{
        slidesPerView: 4
      },
    }
});

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