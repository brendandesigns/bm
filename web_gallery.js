// WEB PORTFOLIO

const modalcontentthirteen = document.getElementById('popupthirteen');

const modalbtnthirteen = document.getElementById('pr13');

function openmodalcontentthirteen(){
    modalcontentthirteen.style.display = 'block';
  }

  modalbtnthirteen.addEventListener('click', openmodalcontentthirteen);

  const closedBtnthirteen = document.getElementsByClassName('closebtnthirteen')[0];


    closedBtnthirteen.addEventListener('click', closebtnthirteen);

    window.addEventListener('click', outsideClick);

    function closebtnthirteen(){
        modalcontentthirteen.style.display = 'none';
      }

function outsideClick(e) {
    if (e.target == modalcontentthirteen) {
    modalcontentthirteen.style.display = 'none';
}
}
