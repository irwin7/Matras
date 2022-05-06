const navListItems = ['Katalog', 'Aksiya', 'Biz haqimizda', 'Manzilimiz', 'Aloqa'];
const navList = document.querySelector('.nav__list');
for (i of navListItems) {
    navList.innerHTML += `<li>${i}</li>`
}

// modal
const modalEl = document.querySelector('.header__modal');
const modalOpen = document.querySelector('.header__burger');
const modalClose = document.querySelector('.header__close');
modalOpen.addEventListener('click', () => {
    modalEl.style.display = 'block';
    modalOpen.style.display = 'none';
    modalClose.style.display = 'block';
})
modalClose.addEventListener('click', () => {
    modalEl.style.display = 'none';
    modalOpen.style.display = 'block';
    modalClose.style.display = 'none';
})
const modalList = document.querySelector('.modal__list');
for (i of navListItems) {
    modalList.innerHTML += `<li>${i}</li>`
}

// modals
const modals = document.querySelector('.header__modals');
const modalsOpen = document.querySelector('.modals__open');
const modalsOpen2 = document.querySelector('.modal__btn');
const modalsClose = document.querySelector('.modals__close');
const modalsClose2 = document.querySelector('.wrap__close');
const modalsClose3 = document.querySelector('.wrap__btn');
modalsOpen.addEventListener('click', () => {
    modals.style.display = 'block';
})
modalsOpen2.addEventListener('click', () => {
    modals.style.display = 'block';
})
modalsClose.addEventListener('click', () => {
    modals.style.display = 'none';
})
modalsClose2.addEventListener('click', () => {
    modals.style.display = 'none';
})
modalsClose3.addEventListener('click', () => {
    modals.style.display = 'none';
})
const modalsInner = document.querySelector('.modals__inner');
const modalsWrapper = document.querySelector('.modals__wrapper');
const modalsSubmit = document.querySelector('.form__btn');
modalsSubmit.addEventListener('click', () => {
    modalsInner.style.display = 'none';
    modalsWrapper.style.display = 'block';
})
const elMenuItems = document.querySelectorAll(".products__menu-item");
const elModal = document.querySelectorAll(".modal");
const elModalOrder = document.querySelector(".modal-order");
const elModalSlide = document.querySelector(".modal-slide");
const elOrderCloseBtn = document.querySelector(".order__close-btn");
const elModalShadow = document.querySelectorAll(".modal__shadow");
const elProductBtn = document.querySelector(".product__btn");
const elCountInp = document.querySelector(".order__count-inp");
const elBtnMinus = document.querySelector(".order__btn-minus");
const elBtnPlus = document.querySelector(".order__btn-plus");
const elBtnScope = document.querySelector(".product__extend-btn");
const elTechnoItem = document.querySelectorAll(".technologies__item");
const elTechnoPreview = document.querySelectorAll(".technologies__preview-box");
const elUpBtn = document.querySelector(".up");

for (let item of elTechnoItem) {
    item.addEventListener('click', () => {
        item.classList.add("technologies__item--active");
    })
}
elUpBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
elBtnMinus.addEventListener('click', () => {
    if (+elCountInp.value > 1) {
        elCountInp.value = +elCountInp.value - 1;
    }
})
elBtnPlus.addEventListener('click', () => {
    elCountInp.value = +elCountInp.value + 1;
})

// modal
elBtnScope.addEventListener('click', () => {
    elModalSlide.classList.add("modal--active");
})
elProductBtn.addEventListener('click', () => {
    elModalOrder.classList.add("modal--active");
})
elOrderCloseBtn.addEventListener('click', () => {
    elModalOrder.classList.remove("modal--active");
})
for (let item of elModalShadow) {
    item.addEventListener('click', () => {
        removeActive(elModal, "modal--active")
    })
}
for (let item of elMenuItems) {
    item.addEventListener("click", () => {
        removeActive(elMenuItems, "products__menu-item--active");
        item.classList.add("products__menu-item--active");
    })
}
// active change
function removeActive(items, activeClass) {
    for (let item of items) {
        item.classList.remove(activeClass)
    }
}

// slick
$('.products__menu-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right'),
    responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 8
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 330,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
$('.slide__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
});
$('.slide__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    asNavFor: '.slide__for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});
$('.technologies__list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 590,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, ]
});