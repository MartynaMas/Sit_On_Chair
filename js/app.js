/* -------------------------------------------- */
/* slider */
/* -------------------------------------------- */

const prev = document.querySelector('.banner-prev');
const next = document.querySelector('.banner-next');
const list = document.querySelectorAll('.banner-slide');
let index = 0;

list[index].classList.add('banner-slide-show');

prev.addEventListener('click', function (event) {
    event.preventDefault();
    list[index].classList.remove('banner-slide-show');

    if (index === 0 ) {
        index = list.length-1;
    } else {
        index--;
    }
    list[index].classList.add('banner-slide-show');
});

next.addEventListener('click', function (event) {
    event.preventDefault();

    list[index].classList.remove('banner-slide-show');

    if (index === list.length-1) {
        index = 0;
    } else {
        index++;
    }
    list[index].classList.add('banner-slide-show');
});
