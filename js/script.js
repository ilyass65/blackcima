let starSubmit =document.getElementById('starSubmit');
let firstname = document.getElementById('firstname');
var winBtn = document.getElementById('winBtn');
let cards = document.getElementById('cards');
let floader = document.getElementById('floader')

function star(){
    firstname.focus();
};
function win(){
cards.style.display = 'block';
};

var countDownDate = new Date("may 18, 2024 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//modal ////////
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  floader.style.display = 'none';
  winBtn.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

  if (event.target == modal) {
    modal.style.display = "none";
    floader.style.display = 'none';
    winBtn.style.display = 'none'
  }
};
///////


