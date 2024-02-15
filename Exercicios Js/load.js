function carreguei(){
  document.getElementById("log").innerHTML += "carreguei<br>";

  /*
  -O document está referenciando a página em html. 
  Toda vez que houver essa palavra document é referência a página em htlml 
  que foi criada

  -O getElementById é para pegar algum elemento que foi criado na página html
  por exemplo na página load.html temos o elemento com id log

  -innerHTML é introduzir o código html
  
  - += Adicionando, significa que pega o que está nessa página em html e
   adicina mais esse trecho "carreguei<br>"



  */
}
function redimensionei(){
  document.getElementById("log").innerHTML += "redimensionei<br>";
}