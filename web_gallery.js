// WEB PORTFOLIO

const webviuno = document.getElementById('webvione');

const modalPortuno = document.getElementById('modaluno');

const closeBtnA_1 = document.getElementsByClassName('BtnA_1')[0];

modalPortuno.addEventListener('click', openModalPortuno);

function openModalPortuno(){
    webviuno.style.display = 'block';
}

closeBtnA_1.addEventListener('click', BtnA_1);

function BtnA_1(){
    webviuno.style.display = 'none';
}

window.addEventListener('click', clickOutside);

function clickOutside(e) {
    if (e.target == webvione) 
    webvione.style.display = 'none';
}
