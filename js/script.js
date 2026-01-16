const getStartedBtn = document.querySelector('#get-started');
const form = document.querySelector(".get-started-form");
const formCloseBtn = document.querySelector(".form-close-btn");

getStartedBtn.addEventListener('click', () => {
    form.classList.toggle('hidden');
})

formCloseBtn.addEventListener('click', () => {
    form.classList.add("hidden");
})