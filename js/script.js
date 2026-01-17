const wrapper = document.querySelector(".form-wrapper");
const getStartedBtn = document.querySelector('#get-started');
const formCloseBtn = document.querySelector(".form-close-btn");
const menu = document.querySelector('.navigation');
const menuBtn = document.querySelector('#burger-menu');
const menuCloseBtn = document.querySelector('#menu-close');

function toggleMenu() {
    menu.classList.toggle("visible");
}

function closeMenu() {
    menu.classList.remove("visible");
}

function openForm() {
    wrapper.classList.add("is-open");
    wrapper.classList.remove("is-closed");
}

function closeForm() {
    wrapper.classList.remove("is-open");
    wrapper.classList.add("is-closed");
    
}

window.addEventListener('load', () => {
    if (window.innerWidth < 1400) {
        closeForm();
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth < 1400) {
        closeForm();
    } else {
        openForm();
    }
})

getStartedBtn.addEventListener("click", openForm);
formCloseBtn.addEventListener("click", closeForm);
menuBtn.addEventListener('click', toggleMenu);
menuCloseBtn.addEventListener('click', closeMenu);
