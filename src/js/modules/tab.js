const tab = (parentSelector, tabSelector, contentSelector, btnSelector) => {
    const parent = document.querySelector(parentSelector);
    const tabTriggers = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    if (!parent) return;

    function hideTabContent() {
        content.forEach(element => {
            element.classList.remove('show');
            element.classList.add('hide');
        });

        tabTriggers.forEach(element => element.classList.remove('is-active'));
    }
    function showTabContent(i = 0) {
        content[i].classList.remove('hide');
        content[i].classList.add('show');

        tabTriggers[i].classList.add('is-active');
    }

    hideTabContent();
    showTabContent();

    parent.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest(btnSelector)) {
            // if (target && target.classList.contains(btnSelector.replace(/\./, ""))) {
                tabTriggers.forEach((btn, index) => {
                    if (target.closest(btnSelector) === btn) {
                        hideTabContent();
                        showTabContent(index);
                    }
                });
            // }
        } else {
            return;
        }
    });
};

export default tab;