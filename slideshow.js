
const carouselElement = document.getElementById('default-carousel');

const items = [
    { position: 0, el: document.getElementById('carousel-item-1') },
    { position: 1, el: document.getElementById('carousel-item-2') },
    { position: 2, el: document.getElementById('carousel-item-3') },
    { position: 3, el: document.getElementById('carousel-item-4') },
];

const options = {
    defaultPosition: 0,
    interval: 3000,
    indicators: {
        activeClasses: 'bg-white',
        inactiveClasses: 'bg-white/50 hover:bg-white',
        items: [
            { position: 0, el: document.getElementById('carousel-indicator-1') },
            { position: 1, el: document.getElementById('carousel-indicator-2') },
            { position: 2, el: document.getElementById('carousel-indicator-3') },
            { position: 3, el: document.getElementById('carousel-indicator-4') },
        ],
    },
    onNext: () => console.log('Next Slide'),
    onPrev: () => console.log('Previous Slide'),
    onChange: () => console.log('Slide Changed'),
};

const carousel = new window.flowbite.Carousel(carouselElement, items, options);

const $prevButton = document.querySelector('[data-carousel-prev]');
const $nextButton = document.querySelector('[data-carousel-next]');

$prevButton.addEventListener('click', () => carousel.prev());
$nextButton.addEventListener('click', () => carousel.next());

carousel.cycle();

/*
document.addEventListener('DOMContentLoaded', function() {
    // Image data - replace with your own images
    const images = [
        {
            url: './images/2.jpeg',
            alt: '1'
        },
        {
            url: './images/3.jpeg',
            alt: '2'
        },
        {
            url: './images/1.jpeg',
            alt: '3'
        },
        {
            url: './images/2.jpeg',
            alt: '4'
        }
    ];

    const slidesContainer = document.getElementById('slides-container');
    const dotsContainer = document.getElementById('dots-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentSlide = 0;

    // Create slides and dots
    images.forEach((image, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = 'w-full flex-shrink-0';
        slide.innerHTML = `
            <img src="${image.url}" alt="${image.alt}" class="w-full h-auto object-cover">
        `;
        slidesContainer.appendChild(slide);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full ${index === 0 ? 'bg-white' : 'bg-white/50'}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Update slides position
    function updateSlides() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        const dots = dotsContainer.querySelectorAll('button');
        dots.forEach((dot, index) => {
            dot.className = `w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`;
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentSlide = index;
        updateSlides();
    }

    // Next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % images.length;
        updateSlides();
    }

    // Previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
        updateSlides();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-advance slides (optional)
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause on hover
    slidesContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slidesContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});*/