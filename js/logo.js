const Logo = {
  addTitle(name) {
    const title = document.getElementById("title");
    console.log(title);
    const text = document.createTextNode(name);
    console.log(text);
    title.appendChild(text);
  }
  // ,
  // addHeader(name) {
  //   // const p = document.createElement("p");
  //   const p = document.createElement("p id='logo'");
  //   const text = document.createTextNode(name);
  //   p.appendChild(text);
  //   const body = document.body;
  //   body.appendChild(p); 
  // }
}
