const basket = () => {
    const cartButtons = document.querySelectorAll('.knives__plus-btn');
    const cartParent = document.querySelector('.header__basket-list');
    const cartTotalPrice = document.querySelector('.header__basket-total-price');
    const cartBasket = document.querySelector('.header__ico-shop');
    const cartInnerBasket = document.querySelector('.header__basket-box');
    const cartEmpty = document.querySelector('.header__basket-empty')
    let price = 0;

    if (!cartParent) return;

    const randomId = () => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };

    const priceWithoutSpaces = (str) => {
        return str.replace(/\s/g, '');
    };

    const normalPrice = (str) => {
        return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    };

    const plusFullPrice = (currentPrice) => {
        return price += currentPrice;
    };

    const minusFullPrice = (currentPrice) => {
        return price -= currentPrice;
    };

    const printFullPrice = () => {
        cartTotalPrice.textContent = `${normalPrice(price)} тыс.р.`;
    };

    const activeBasket = () => {
        let length = cartParent.children.length;
        if (length > 0) {
            cartBasket.classList.add('is-active');
            cartEmpty.classList.add('is-active');
        } else {
            cartBasket.classList.remove('is-active');
            cartEmpty.classList.remove('is-active');
        }
    }

    const generateCartProduct = (img, title, price, id) => {
        return `
            <li class="header__basket-item">
                <div class="header__basket-inner" data-id="${id}">
                    <div class="header__basket-pictures">
                        <img class="header__basket-images" src="${img}" width="70" height="70" alt="knives" loading="lazy">
                    </div>
                    <p class="header__basket-knives-name">
                        ${title}
                    </p>
                    <div class="header__basket-wrapper">
                        <p class="header__basket-knives-price">
                            ${normalPrice(price)} тыс.р.
                        </p>
                        <img class="header__basket-close" src="assets/img/close.svg" width="16" height="16" alt="close" loading="lazy">
                    </div>
                </div>
            </li>
        `;
    };

    cartBasket.addEventListener('click', () => {
        cartInnerBasket.classList.toggle('is-active');
    });

    const deleteProducts = (productParent) => {
        let id = cartParent.querySelector('.header__basket-inner').dataset.id;
        document.querySelector(`.knives__grid-box[data-id="${id}"]`).querySelector('.knives__plus-btn').disabled = false;

        let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.header__basket-knives-price').textContent));
        minusFullPrice(currentPrice);
        productParent.remove();
        printFullPrice();
        activeBasket();
    };

    cartButtons.forEach(element => {
        element.closest('.knives__grid-box').setAttribute('data-id', randomId());
        element.addEventListener('click', (event) => {
            let self = event.currentTarget;
            let parent = self.closest('.knives__grid-box');
            let id = parent.dataset.id;
            let img = parent.querySelector('.knives__images').getAttribute('src').trim();
            let title = parent.querySelector('.knives__name').textContent.trim();
            let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.knives__price').textContent));

            plusFullPrice(priceNumber);
            printFullPrice();
            cartParent.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
            activeBasket();
            self.disabled = true;
        });
    });

    cartParent.addEventListener('click', (event) => {
        if (event.target.classList.contains('header__basket-close')) {
            deleteProducts(event.target.closest('.header__basket-item'));
        }
    });
}

export default basket;