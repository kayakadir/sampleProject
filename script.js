const sibyanOkutma = document.getElementById('sıbyan');
const esnafOkutma = document.getElementById('esnaf');
const batiAvrupa = document.getElementById('batı-avrupa');



// Functions
function myFunction(e) {
  console.log(e.target)
}


// Event Listeners
sibyanOkutma.addEventListener('click', myFunction);