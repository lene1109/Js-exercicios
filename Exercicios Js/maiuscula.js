function maiuscula(){
  var letra = document.getElementById("texto").value;
  letra = letra.toUpperCase(); // para ficar o texto tudo maiusculo (toUpperCase)
  document.getElementById("texto").value = letra;
}