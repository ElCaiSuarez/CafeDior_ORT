/* Julian Modugno y Juan Carlos Suarez - v6(2022-04-25)  */
function iniciar(){
  document.getElementById("submit").addEventListener("click", hacerclic, false);
  document.elPedido.addEventListener("input", controlar, false);
}
function controlar(e){
  var elemento=e.target;
  if(elemento.validity.valid){
    elemento.style.background='#2a2a2a';
  }else{
    elemento.style.background='red';
  }
}
function enviar(){
  mostrarAlertaEnviado();
  document.elPedido.submit();
}
function mostrarAlertaEnviado(){
  alert('Pedidio enviado!!!');
}
function mostrarAlertaInvalido(){
  alert('Cantidad, Nombre o Email invalido!!!');
}
function hacerclic(){
  var nombre=document.getElementById("nombre");
  var email=document.getElementById("email");
  var nombreValido = nombre.checkValidity();
  var emailValido = email.checkValidity();
  /*FALTA HACER FUNCIONAR LA VALIDACION DE CANTIDADES*/
  /*var cantidadesValidas = validoCantidades();*/
  if(nombreValido && emailValido /*&& cantidadesValidas*/){
    enviar()
  }else{
    mostrarAlertaInvalido()
  }
}
function validoCantidades(){
  var listaCantidades = document.getElementsByClass("opcion-producto-cant").value;
  return listaCantidades.checkValidity();
}
window.addEventListener("load", iniciar, false);


/*SEGUNDA PRUEBA
function mostraralerta(){
alert('Pedidio enviado!!!');
}
function hacerclic(){
var elemento=document.getElementById("submit");
elemento.addEventListener("click", mostraralerta, false);
}
window.addEventListener("load", hacerclic, false);

/*PRIMERA PRUEBA
function mostraralerta(){
  alert('Pedidio enviado!!!');
}
function hacerclick(){
  document.getElementById('submit').onclick=mostraralerta;
}*/
/*function iniciar(){
  nombre=document.getElementById("")
  hacerclic();
}*/
/*window.onload=hacerclick;*/