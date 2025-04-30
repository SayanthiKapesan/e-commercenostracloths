document.addEventListener('DOMContentLoaded', function() {
    // Initialize both carousels
    initializeCarousel('carousel1', 'prevBtn1', 'nextBtn1');
    initializeCarousel('carousel2', 'prevBtn2', 'nextBtn2');

    function initializeCarousel(carouselId, prevBtnId, nextBtnId) {
        const carousel = document.getElementById(carouselId);
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const items = carousel.querySelectorAll('.carousel-item');
        
        const getScrollAmount = () => {
            const itemStyle = window.getComputedStyle(items[0]);
            return items[0].offsetWidth + parseInt(itemStyle.marginLeft) + parseInt(itemStyle.marginRight);
        };
        
        const scrollNext = () => {
            carousel.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        };
        
        const scrollPrev = () => {
            carousel.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        };
        
        prevBtn.addEventListener('click', scrollPrev);
        nextBtn.addEventListener('click', scrollNext);
        
        // Auto-scroll logic for each carousel
        let autoScrollInterval;
        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 10) {
                    carousel.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    scrollNext();
                }
            }, 3000);
        };
        
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });
        
        carousel.addEventListener('mouseleave', startAutoScroll);
        
        startAutoScroll();
    }
    
    // Keyboard navigation (global)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            // You might want to modify this to handle focused carousel
        } else if (e.key === 'ArrowLeft') {
            // You might want to modify this to handle focused carousel
        }
    });
});
