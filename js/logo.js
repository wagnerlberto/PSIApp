const Logo = {
  addTitle(name) {
    const title = document.getElementById("title");
    const text = document.createTextNode(name);
    title.appendChild(text);
  }
  ,
  addHeader(name) {
    const p = document.getElementById("logo");
    const text = document.createTextNode(name);
    p.appendChild(text);
  }
}
