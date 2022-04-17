import burger from './modules/burger';
import swiperInit from './modules/swiper';
import tab from './modules/tab';
import accordion from './modules/accordion';
import imask from './modules/imask';
import basket from './modules/basket';

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dom-is-ready');
    AOS.init();
    burger();
    swiperInit('.intro-swiper', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    tab('[data-js-tab-parent]', '[data-js-tab]', '[data-js-tab-content]', '.knives__tab');
    tab('[data-js-tabservices-parent]', '[data-js-tabservices]', '[data-js-tabservices-content]', '.tab-services__tab');
    accordion('[data-js-accordion-trigger]');
    imask('[data-js-input-phone]', '+{7} (000) 000-00-00');
    tab('[data-js-tab-services-parent]', '[data-js-tab-services-trigger]', '[data-js-tab-services-content]', '.services__tab-btn');
    // document.addEventListener('click', (event) => {
    //     console.log(event.target);
    // });
    swiperInit('.slider-swiper', {
        slidesPerView: 2.5,
        initialSlide: 1,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 2000
        },
        simulateTouch: false,
        grabCursor: false,
        allowTouchMove: false,
        breakpoints: {
            540: {
                spaceBetween: 10
            }
        }
    });
    basket();
});