const getClassUm = document.querySelector(".um");
const getSideUm = document.querySelector(".side-um")
const getClassDois = document.querySelector(".dois")
const getClassTres = document.querySelector(".tres")
const getClassQuatro = document.querySelector(".quatro")
const getClassCinco = document.querySelector(".cinco")
const getClassSeis = document.querySelector(".seis")
const getImg = document.querySelector(".logo")

getClassUm.addEventListener('click', ()=>{
  mostrarConteudoUm();
})
getClassDois.addEventListener('click', ()=>{
  mostrarConteudoDois();
})
getClassTres.addEventListener('click', ()=>{
  mostrarConteudoTres();
})
getClassQuatro.addEventListener('click', ()=>{
  mostrarConteudoQuatro();
})
getClassCinco.addEventListener('click', ()=>{
  mostrarConteudoCinco();
})
getClassSeis.addEventListener('click', ()=>{
  mostrarConteudoSeis();
})

function mostrarConteudoUm(){
  getImg.style.display= 'none';
}
function mostrarConteudoDois(){
  getImg.style.display= 'none';
}
function mostrarConteudoTres(){
  getImg.style.display= 'none';
}
function mostrarConteudoQuatro(){
  getImg.style.display= 'none';
}
function mostrarConteudoCinco(){
  getImg.style.display= 'none';
}
function mostrarConteudoSeis(){
  getImg.style.display= 'none';
}
