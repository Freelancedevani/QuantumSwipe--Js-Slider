let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
//const dots = document.querySelectorAll('.dots .dot');
const dots = document.querySelector('.dots');
const totalSlides = slides.length;

function createDots(){
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dots.appendChild(dot);
      dot.setAttribute('data-index', i);
    // add active class to the first dot 
    if (i === 0) {
        dot.classList.add('active');
    }

    }
  }
  createDots();

 // click on dot to move the slides
  dots.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('dot')) {
        const index = target.getAttribute('data-index');
        showSlide(index);
        // add active class to slides 
        dots.querySelectorAll('.dot').forEach((dot) => {
            dot.classList.remove('active');
        });
        target.classList.add('active');

    }
  });


// display slide content
function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;

    } else {
        currentIndex = index;
    }

    // Update slide position based on current slide position
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transition = 'transform 0.9s ease-in-out';
    slider.style.transform = 'translateX(' + translateValue + ')';

    // Update dots position based on current slide position
    const dots = document.querySelectorAll('.dots .dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    setTimeout(() => {
        slider.style.transition = 'none';
    }, 11000);

    eachSlideAnimation();
}

// dynamicaly add dots 




// previous slide position
function prevSlide() {
    showSlide(currentIndex - 1);
}

// next slide position
function nextSlide() {
    showSlide(currentIndex + 1);
}

 // add animation to slide
  const eachSlide = document.querySelectorAll('.slide');
  function eachSlideAnimation() {
    eachSlide.forEach((slide, index)=> {
      if(index === currentIndex){
        const slide_info = slide.querySelector('.slide_info');
        slide_info.classList.add(...['animate__animated', 'animate__fadeInDown']);

      } else{
        const slide_info = slide.querySelector('.slide_info');
        slide_info.classList.remove(...['animate__animated', 'animate__fadeInDown']);
      }
    })
  };

setInterval(nextSlide, 5000);
left.addEventListener('click', prevSlide);
right.addEventListener('click', nextSlide);