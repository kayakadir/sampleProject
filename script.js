const sibyanOkutma = document.getElementById('sıbyan');
const esnafOkutma = document.getElementById('esnaf');
const batiAvrupa = document.getElementById('batı-avrupa');






// Event Listeners
sibyanOkutma.addEventListener('click', () => {
  sessionStorage.setItem('title', 'sibyanForm')
});

esnafOkutma.addEventListener('click', () => {
  sessionStorage.setItem('title', 'esnafForm')
});

batiAvrupa.addEventListener('click', () => {
  sessionStorage.setItem('title', 'batiAvrupaForm')
});
