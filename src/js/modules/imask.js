import IMask from 'imask';

const imask = (inputSelector, maskNumbers) => {
    const inputImask = document.querySelector(inputSelector);

    if (!inputImask) return;

    IMask(inputImask, {
        mask: maskNumbers
    });
};

export default imask;