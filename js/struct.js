const Struct = {
  addTitle(name) {
    const element = document.getElementById("title");
    const text = document.createTextNode(name);
    element.appendChild(text);
  }
  ,
  addHeader(name) {
    const element = document.getElementById("headerText");
    const text = document.createTextNode(name);
    element.appendChild(text);
  }
  ,
  addContainer(url) {
    const element = document.getElementById("centralImg");
    element.setAttribute("src", url);
  }
  ,
  addFooter(name) {
    const element = document.getElementById("footerText");
    const text = document.createTextNode(name);
    element.appendChild(text);
  }
}
