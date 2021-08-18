'use strict';

const btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    btn3 = document.querySelector('.btn3');

const showAllBtn = () => {
    btn2.classList.remove('hide');
    btn3.classList.remove('hide');
    btn1.value = 1;
};

const hideBtn = e => e.target.classList.toggle('hide');

const showHiddenBtn = e => btn1.value = e.target.value;

document.addEventListener('click', e => {

    if (!e.target.classList.contains('btn')) return;

    if (e.target.matches('.btn1')) showAllBtn();

    if (e.target.matches('.btn2') || (e.target.matches('.btn3'))) {
        hideBtn(e);
        showHiddenBtn(e);
    }
});