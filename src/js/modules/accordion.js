const accordion = (triggerSelector) => {
    const triggersSelector = document.querySelectorAll(triggerSelector);

    triggersSelector.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('is-active');
            this.nextElementSibling.classList.toggle('is-active');

            if (this.classList.contains('is-active')) {
                this.nextElementSibling.style.maxHeight = `${this.nextElementSibling.scrollHeight}px`;
            } else {
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;