let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const totalSlides = slides.length;

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
    document.querySelector('.slider').style.transform = 'translateX(' + translateValue + ')';
}

// previous slide position
function prevSlide() {
    showSlide(currentIndex - 1);
}

// next slide position
function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 5000);
left.addEventListener('click', prevSlide);
right.addEventListener('click', nextSlide);
