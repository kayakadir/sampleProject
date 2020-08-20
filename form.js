const formTitle = document.querySelector('.title');
const formEl = document.querySelector('.form-container');


const formSibyan = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf84yvS1F2O-5vnL1JNe0SBMyWctwuOgAxD_vnmUiIzi7q3Rg/viewform?embedded=true" width="640" height="1004" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>`;
const formEsnaf = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScpOyrYxp4kTGutQa2xb53h3suWsJYuAgPe2446RO9Hd_4BgQ/viewform?embedded=true" width="640" height="1004" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>`;
const formBatiAvrupa = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfJpUsjTyf97qkmRj2gXzHmi-nNksa22y5VAa-AUEHt_Dw7_Q/viewform?embedded=true" width="640" height="1805" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>`;



switch(sessionStorage.getItem('title')) {
  case 'sibyanForm':
    formTitle.innerHTML = 'Sıbyan Kayıt Formu'
    formEl.innerHTML = formSibyan;
    break;
  case 'esnafForm':
    formTitle.innerHTML = 'Esnaf Kayıt Formu'
      formEl.innerHTML = formEsnaf;
    break;
  case 'batiAvrupaForm':
    formTitle.innerHTML = 'Bölge Talebesi Kayıt Formu'
      formEl.innerHTML = formBatiAvrupa;
      break;
  default:
    // code block
} 


console.log(formEl)

