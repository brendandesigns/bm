/*

<div class="gallery-grid-one">
               <img src="pr2a.jpg" alt="Avatar" class="image">
                <div class="overlay-one">
                  <div class="hideone"><button id="pr1"><h3>STEAMPUNK TYPEFACE</h3></button>
                    <div id="popupone" class="displayBox">
                      <span class="closeBtnone"><B>X</B></span>
                      <img src="jpg(s)/pr2a.jpg">
                      <img src="jpg(s)/pr2b.jpg">
                      <img src="jpg(s)/pr2c.jpg">
                      <img src="jpg(s)/pr2d.jpg">
                      <h4>STEAMPUNK TYPEFACE</h4>
                      <p class="copy">This font was designed for my university exhibition in my final year for an A1 size 
                        display based around typography. I chose to use the steam punk/industrial art style for the design</p>
                  </div>
                  </div>
                </div>
              </div>

*/

//content

const modalcontentone = document.getElementById('popupone');
const modalcontenttwo = document.getElementById('popuptwo');
const modalcontentthree = document.getElementById('popupthree');
const modalcontentfour = document.getElementById('popupfour');
const modalcontentfive = document.getElementById('popupfive');
const modalcontentsix = document.getElementById('popupsix');
const modalcontentseven = document.getElementById('popupseven');
const modalcontenteight = document.getElementById('popupeight');
const modalcontentnine = document.getElementById('popupnine');
const modalcontentten = document.getElementById('popupten');
const modalcontenteleven = document.getElementById('popupeleven');
const modalcontenttwelve = document.getElementById('popuptwelve');



//button

const modalbtnone = document.getElementById('pr1');
const modalbtntwo = document.getElementById('pr2');
const modalbtnthree = document.getElementById('pr3');
const modalbtnfour = document.getElementById('pr4');
const modalbtnfive = document.getElementById('pr5');
const modalbtnsix = document.getElementById('pr6');
const modalbtnseven = document.getElementById('pr7');
const modalbtneight = document.getElementById('pr8');
const modalbtnnine = document.getElementById('pr9');
const modalbtnten = document.getElementById('pr10');
const modalbtneleven = document.getElementById('pr11');
const modalbtntwelve = document.getElementById('pr12');

//function

function openmodalcontentone(){
  modalcontentone.style.display = 'block';
}

function openmodalcontenttwo(){
modalcontenttwo.style.display = 'block';
}

function openmodalcontentthree(){
modalcontentthree.style.display = 'block';
}

function openmodalcontentfour(){
  modalcontentfour.style.display = 'block';
}

function openmodalcontentfive(){
  modalcontentfive.style.display = 'block';
}

function openmodalcontentsix(){
  modalcontentsix.style.display = 'block';
}

function openmodalcontentseven(){
  modalcontentseven.style.display = 'block';
}

function openmodalcontenteight(){
  modalcontenteight.style.display = 'block';
}

function openmodalcontentnine(){
  modalcontentnine.style.display = 'block';
}

function openmodalcontentten(){
  modalcontentten.style.display = 'block';
}

function openmodalcontenteleven(){
  modalcontenteleven.style.display = 'block';
}

function openmodalcontenttwelve(){
  modalcontenttwelve.style.display = 'block';
}




// click

modalbtnone.addEventListener('click', openmodalcontentone);
modalbtntwo.addEventListener('click', openmodalcontenttwo);
modalbtnthree.addEventListener('click', openmodalcontentthree);
modalbtnfour.addEventListener('click', openmodalcontentfour);
modalbtnfive.addEventListener('click', openmodalcontentfive);
modalbtnsix.addEventListener('click', openmodalcontentsix);
modalbtnseven.addEventListener('click', openmodalcontentseven);
modalbtneight.addEventListener('click', openmodalcontenteight);
modalbtnnine.addEventListener('click', openmodalcontentnine);
modalbtnten.addEventListener('click', openmodalcontentten);
modalbtneleven.addEventListener('click', openmodalcontenteleven);
/*
modalbtntwelve.addEventListener('click', openmodalcontenttwelve);
modalbtnthirteen.addEventListener('click', openmodalcontentthirteen);
*/



//close modal

const closedBtnone = document.getElementsByClassName('closeBtnone')[0];
const closedBtntwo = document.getElementsByClassName('closeBtntwo')[0];
const closedBtnthree = document.getElementsByClassName('closeBtnthree')[0];
const closedBtnfour = document.getElementsByClassName('closeBtnfour')[0];
const closedBtnfive = document.getElementsByClassName('closeBtnfive')[0];
const closedBtnsix = document.getElementsByClassName('closeBtnsix')[0];
const closedBtnseven = document.getElementsByClassName('closeBtnseven')[0];
const closedBtneight = document.getElementsByClassName('closeBtneight')[0];
const closedBtnnine = document.getElementsByClassName('closeBtnnine')[0];
const closedBtnten = document.getElementsByClassName('closeBtnten')[0];
const closedBtneleven = document.getElementsByClassName('closeBtneleven')[0];

/*
const closedBtntwelve = document.getElementsByClassName('closeBtntwelve')[0];
const closedBtnthirteen = document.getElementsByClassName('closeBtnthirteen')[0];
*/



closedBtnone.addEventListener('click', closeBtnone);
closedBtntwo.addEventListener('click', closeBtntwo);
closedBtnthree.addEventListener('click', closeBtnthree);
closedBtnfour.addEventListener('click', closeBtnfour);
closedBtnfive.addEventListener('click', closeBtnfive);
closedBtnsix.addEventListener('click', closeBtnsix);
closedBtnseven.addEventListener('click', closeBtnseven);
closedBtneight.addEventListener('click', closeBtneight);
closedBtnnine.addEventListener('click', closeBtnnine);
closedBtnten.addEventListener('click', closeBtnten);
closedBtneleven.addEventListener('click', closeBtneleven);

/*
closedBtntwelve.addEventListener('click', closeBtntwelve);
closedBtnthirteen.addEventListener('click', closeBtnthirteen);

*/

function closeBtnone(){
    modalcontentone.style.display = 'none';
}

function closeBtntwo(){
  modalcontenttwo.style.display = 'none';
}

function closeBtnthree(){
  modalcontentthree.style.display = 'none';
}

function closeBtnfour(){
  modalcontentfour.style.display = 'none';
}

function closeBtnfive(){
  modalcontentfive.style.display = 'none';
}

function closeBtnsix(){
  modalcontentsix.style.display = 'none';
}

function closeBtnseven(){
  modalcontentseven.style.display = 'none';
}

function closeBtneight(){
  modalcontenteight.style.display = 'none';
}

function closeBtnnine(){
  modalcontentnine.style.display = 'none';
}

function closeBtnten(){
  modalcontentten.style.display = 'none';
}

function closeBtneleven(){
  modalcontenteleven.style.display = 'none';
}

/*

function closeBtntwelve(){
  modalcontenttwelve.style.display = 'none';
}

function closeBtnthirteen(){
  modalcontentthirteen.style.display = 'none';
}

*/

window,addEventListener('click', outsideClick);

// outside click

function outsideClick(e) {
  if (e.target == modalcontentone) 
  modalcontentone.style.display = 'none'; 
} 
