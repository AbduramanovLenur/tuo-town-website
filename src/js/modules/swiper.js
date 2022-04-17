const swiperInit = (parentSelector, objSettings) => {
    const element = document.querySelector(parentSelector);
    
    if (!element) return;

    new Swiper(element, objSettings);
};

export default swiperInit;