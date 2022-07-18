const Logo = {
  addLogo(tituloDaJanela) {
    const titulo = document.createElement("title");
    const texto = document.createTextNode(tituloDaJanela);
    titulo.appendChild(texto);
    console.log(titulo);
    const head = document.head;
    head.appendChild(titulo); 
  }
}
