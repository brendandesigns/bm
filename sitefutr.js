/* 

 <div class="webcol">
            <button id="modaluno" class="button">
            <div class="item"><img src="jpg(w)/webpr1.jpg"></div></button>
                
                <div id="webvione" class="webportuno">
                    <div class="displayBox">
                <span class="closeBtnA_1"><B>X</B></span>
                <img src="jpg(w)/webpr1.jpg">
                <img src="jpg(w)/webpr2.jpg">
                <h3>Solice.eu</h3>
                <p class="copy">Working with a former colleague I was asked to build a wordpress site for a rehab company based in spain and was created by using a standard template and the assets (text and images) were then supplied to me to put the project together with the final outcome being a fully responsive website working accross all devices.</p>
                    
                </div>
                </div>
                </div>

 <div class="portcol1">
        <button id="modalone" class="button">
        <div class="item"><img src="jpg(p)/pr1.1.jpg"></div></button>
            
            <div id="contentone" class="popupone">
                <div class="displayBox">
            <span class="closeBtn"><B>X</B></span>
            <img src="jpg(s)/pr8a.jpg">
            <img src="jpg(s)/pr8b.jpg">
            <h3>HARPER'S FATE TRILOGY</h3>
            <p class="copy">Final designs for a series of three novels for a client as well as the text given to me, the request was for the ribbon design to extend the full width of the cover and spine as to give the impression that the book itself is a gift box to be opened, all three novels have been published.</p>
                
                </div>
                </div>

*/

// CONTENT

const modal = document.getElementById('contentone');
const modaltwo = document.getElementById('contenttwo');
const modalthree = document.getElementById('contentthree');
const modalfour = document.getElementById('contentfour');
const modalfive = document.getElementById('contentfive');
const modalsix = document.getElementById('contentsix');
const modalseven = document.getElementById('contentseven');
const modaleight = document.getElementById('contenteight');
const modalnine = document.getElementById('contentnine');
const modalten = document.getElementById('contentten');

// BUTTON

const modalBtn = document.getElementById('modalone');
const modalBtntwo = document.getElementById('modaltwo');
const modalBtnthree = document.getElementById('modalthree');
const modalBtnfour = document.getElementById('modalfour');
const modalBtnfive = document.getElementById('modalfive');
const modalBtnsix = document.getElementById('modalsix');
const modalBtnseven = document.getElementById('modalseven');
const modalBtneight = document.getElementById('modaleight');
const modalBtnnine = document.getElementById('modalnine');
const modalBtnten = document.getElementById('modalten');

const closeBtn = document.getElementsByClassName('closeBtn')[0];
const closeBtntwo = document.getElementsByClassName('closeBtntwo')[0];
const closeBtnthree = document.getElementsByClassName('closeBtnthree')[0];
const closeBtnfour = document.getElementsByClassName('closeBtnfour')[0];
const closeBtnfive = document.getElementsByClassName('closeBtnfive')[0];
const closeBtnsix = document.getElementsByClassName('closeBtnsix')[0];
const closeBtnseven = document.getElementsByClassName('closeBtnseven')[0];
const closeBtneight = document.getElementsByClassName('closeBtneight')[0];
const closeBtnnine = document.getElementsByClassName('closeBtnnine')[0];
const closeBtnten = document.getElementsByClassName('closeBtnten')[0];


// CLICK

modalBtn.addEventListener('click', openModal);
modalBtntwo.addEventListener('click', openModaltwo);
modalBtnthree.addEventListener('click', openModalthree);
modalBtnfour.addEventListener('click', openModalfour);
modalBtnfive.addEventListener('click', openModalfive);
modalBtnsix.addEventListener('click', openModalsix);
modalBtnseven.addEventListener('click', openModalseven);
modalBtneight.addEventListener('click', openModaleight);
modalBtnnine.addEventListener('click', openModalnine);
modalBtnten.addEventListener('click', openModalten);


// FUNCTION

function openModal(){
    modal.style.display = 'block';
}

function openModaltwo(){
    modaltwo.style.display = 'block';
}

function openModalthree(){
    modalthree.style.display = 'block';
}

function openModalfour(){
    modalfour.style.display = 'block';
}

function openModalfive(){
    modalfive.style.display = 'block';
}

function openModalsix(){
    modalsix.style.display = 'block';
}

function openModalseven(){
    modalseven.style.display = 'block';
}

function openModaleight(){
    modaleight.style.display = 'block';
}

function openModalnine(){
    modalnine.style.display = 'block';
}

function openModalten(){
    modalten.style.display = 'block';
}

//  CLOSE

closeBtn.addEventListener('click', closeModal);
closeBtntwo.addEventListener('click', closeModaltwo);
closeBtnthree.addEventListener('click', closeModalthree);
closeBtnfour.addEventListener('click', closeModalfour);
closeBtnfive.addEventListener('click', closeModalfive);
closeBtnsix.addEventListener('click', closeModalsix);
closeBtnseven.addEventListener('click', closeModalseven);
closeBtneight.addEventListener('click', closeModaleight);
closeBtnnine.addEventListener('click', closeModalnine);
closeBtnten.addEventListener('click', closeModalten);

function closeModal(){
    modal.style.display = 'none';
}

function closeModaltwo(){
    modaltwo.style.display = 'none';
}

function closeModalthree(){
    modalthree.style.display = 'none';
}

function closeModalfour(){
    modalfour.style.display = 'none';
}

function closeModalfive(){
    modalfive.style.display = 'none';
}

function closeModalsix(){
    modalsix.style.display = 'none';
}

function closeModalseven(){
    modalseven.style.display = 'none';
}

function closeModaleight(){
    modaleight.style.display = 'none';
}

function closeModalnine(){
    modalnine.style.display = 'none';
}

function closeModalten(){
    modalten.style.display = 'none';
}
/*

function outsideClick(e){
    if(e.target == modalone){
    modalone.style.display = 'none';
    }
}
