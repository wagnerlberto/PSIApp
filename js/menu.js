// const Item = {
//   all: [
//     { label: 'Pacientes', url: '#' },
//     { label: 'Atendimentos', url: '#' },
//     { label: 'Recibos', url: '#' },
//     { label: 'Contato', url: '#' }
//   ]
// }

const DOM = {
  menu: document.querySelector('#menu')
  ,
  innerHTMLItem(item) {
    const html = `
      <a href="${item.url}">${item.label}</a>
    `
    return html
  }
  ,
  addItem(item){
    const li = document.createElement('li')
    li.innerHTML = DOM.innerHTMLItem(item)
    DOM.menu.appendChild(li)
  }
}

const Menu = {
  toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
  }
  ,
  addMenu(todos) {
  // addMenu() {
    todos.forEach( (items) => {
      DOM.addItem(items)
    });

    // Item.all.forEach( (item) => {
    //   DOM.addItem(item)
    // });

    const btnMobile = document.getElementById("btn-mobile");
    btnMobile.addEventListener("click", Menu.toggleMenu);
    btnMobile.addEventListener("touchstart", Menu.toggleMenu);
  }
}
