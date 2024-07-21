// GOLDEN JAVASCRIPT CODE
// var counter = 1;
// setInterval(function () {
//     document.getElementById('radio' + counter).checked = true;
//     counter++
//     if (counter > 4) {
//         counter = 1;
//     }
// }, 5000)


// Three card script
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');
let currentIndex = 0;
let autoScrollInterval;
const visibleSlides = 2; // Number of slides visible at a time
const totalSlides = slides.length;

function updateSlider() {
    if (currentIndex >= totalSlides - visibleSlides) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = 0;
            slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
        }, 500);
    }
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
    updatePagination();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
    }
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setTimeout(() => {
        slider.style.transition = 'transform 0.5s ease-in-out';
        updateSlider();
    }, 20);
}

function updatePagination() {
    pagination.innerHTML = '';
    const totalDots = Math.ceil(totalSlides / visibleSlides);
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElement('div');
        if (i === Math.floor(currentIndex / visibleSlides)) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            currentIndex = i * visibleSlides;
            updateSlider();
        });
        pagination.appendChild(dot);
    }
}

function startAutoScroll() {
    stopAutoScroll();
    autoScrollInterval = setInterval(nextSlide, 3000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

slider.addEventListener('mouseenter', stopAutoScroll);
slider.addEventListener('mouseleave', startAutoScroll);

updateSlider();
startAutoScroll();

