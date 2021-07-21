let nome = window.document.getElementById('nome')
let email = window.document.getElementById('#email')
let telefone = document.querySelector('#telefone')

function validaNome(){
    let txt = document.querySelector('#txtNome')
if(nome.value.length < 8){
txt.innerHTML = "Nome Inválido"
txt.style.color = 'red'
}else{
txt.innerHTML = "Nome Válido"
txt.style.color = 'green'
}
}
/*
function over(img) {
img.src = '../img/tartarugis.jpg';
}
function out(img) {
img.src = '../img/tartarugis.jpg';
 }
  */  