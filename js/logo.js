function addLogo() {
  const titulo = document.createElement("title");

  const texto = document.createTextNode("PSIApp");

  titulo.appendChild(texto);

  console.log(titulo);

  const head = document.head;

  head.appendChild(titulo); 
}

addLogo();
