//when the page loades, the modal should open
function openPopup() {
  window.location.hash = 'openModal';
}
window.onload = openPopup;


let input = document.querySelector("#name")
let submit = document.querySelector("#submit")
let invalid = document.querySelector("#invalid")

let zipcodes = [11111,22222,33333,44444];
submit.addEventListener("click", function(){
  //Grabbing the input and transforming it into a number
  let code = zipcodes.includes(Number(input.value))
  if(code){
    window.location.href = "index2.html";
  }else{
    invalid.style.display = 'block'
  }
})

