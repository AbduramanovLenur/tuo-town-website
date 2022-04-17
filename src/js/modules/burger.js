const burger = () => {
    const overlay = document.querySelector('.overlay-menu');
    const burgerTrigger = document.querySelector('.burger');
    const back = document.querySelector('.overlay-menu__back')

    if (!overlay) return;

    burgerTrigger.addEventListener('click', openMenuHandler);
    back.addEventListener('click', closeMenuHandler);
    overlay.addEventListener('click', closeOverlayHandler);
    document.addEventListener('keydown', closeHandler);

    function openMenuHandler() {
        document.body.style.overflow = 'hidden';
        overlay.classList.add('is-active');
    }
    function closeMenuHandler() {
        document.body.style.overflow = '';
        overlay.classList.remove('is-active');
    }
    function closeOverlayHandler(event) {
        if (event.target === overlay) closeMenuHandler();
    }
    function closeHandler(event) {
        if (event.code === 'Escape') closeMenuHandler();
    }
};

export default burger;