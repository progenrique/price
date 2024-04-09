/* 
        <figure>
            <img src="/assets/imagenes/caballero.jpg" alt="botas" />
            <figcaption>
              <div>ver catalogo</div>
              <div>descargar catalogo</div>
            </figcaption>
          </figure>

*/

const catalogos = [
  {
    nombre: "botas",
    imagen: "/assets/imagenes/botas.jpg",
    catalogo: "/assets/catalogos/BOTAS _ 23-24 _ 2E.pdf",
  },
  {
    nombre: "caballero",
    imagen: "/assets/imagenes/caballero.jpg",
    catalogo: "/assets/catalogos/CABALLEROS _ 23-24 _ 2E.pdf",
  },
  {
    nombre: "confort",
    imagen: "/assets/imagenes/confort.jpg",
    catalogo: "/assets/catalogos/CONFORT _ 2024 _ 1E.pdf",
  },
  {
    nombre: "escolar",
    imagen: "/assets/imagenes/escolar.jpg",
    catalogo: "/assets/catalogos/ESCOLAR _ 23-24 _ 2E.pdf",
  },
  {
    nombre: "esenciales",
    imagen: "/assets/imagenes/esenciales.jpg",
    catalogo: "/assets/catalogos/ESENCIALES _ PRI-VER _ 2024 _ 1E.pdf",
  },
  {
    nombre: "jeans",
    imagen: "/assets/imagenes/jeans.jpg",
    catalogo: "/assets/catalogos/JEANS _ PRI-VER _ 2024 _ 1E.pdf",
  },
  {
    nombre: "kids",
    imagen: "/assets/imagenes/kids.jpg",
    catalogo: "/assets/catalogos/KIDS _ PRI-VER _ 2024 _ 1E.pdf",
  },
  {
    nombre: "kidsTodoEnUno",
    imagen: "/assets/imagenes/kidsTodoEnUno.jpg",
    catalogo: "/assets/catalogos/KIDS _ TODO EN 1 _ 23-24 _ 1E.pdf",
  },
  {
    nombre: "man",
    imagen: "/assets/imagenes/man.jpg",
    catalogo: "/assets/catalogos/SEL MAN _ PRI-VER _ 2024 _ 1E.pdf",
  },
  {
    nombre: "sandalias",
    imagen: "/assets/imagenes/sandalias.jpg",
    catalogo: "/assets/catalogos/SANDALIAS _ 2024 _ 1E.pdf",
  },
  {
    nombre: "spring",
    imagen: "/assets/imagenes/spring.jpg",
    catalogo: "/assets/catalogos/IMP SPRING _ 2024 _ 1E (1).pdf",
  },
  {
    nombre: "tendencias",
    imagen: "/assets/imagenes/tendencias.jpg",
    catalogo: "/assets/catalogos/TENDENCIAS _ PRI VER _ 2024 _ 1E.pdf",
  },
  {
    nombre: "todoEnUno",
    imagen: "/assets/imagenes/todoEnUno.jpg",
    catalogo: "/assets/catalogos/TODO EN 1 _ 23-24 _ 1E.pdf",
  },
  {
    nombre: "urbano",
    imagen: "/assets/imagenes/urbano.jpg",
    catalogo: "/assets/catalogos/urbano.pdf",
  },
  {
    nombre: "vestir",
    imagen: "/assets/imagenes/vestir.jpg",
    catalogo: "/assets/catalogos/VESTIR CASUAL _ 23-24 _ 2E.pdf",
  },
];

const $template = document.getElementById("template").content,
  $fragment = document.createDocumentFragment(),
  $catalogos = document.querySelector(".catalogos"),
  $iframe = document.querySelector(".pdf iframe");

catalogos.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.imagen);
  $template.querySelector("img").setAttribute("data-url", el.catalogo);
  $template.querySelector(".verCatalogo").setAttribute("data-url", el.catalogo);
  $template
    .querySelector(".descargarCatalogo")
    .setAttribute("data-url", el.catalogo);

  let $clone = document.importNode($template, true);

  $fragment.appendChild($clone);
});

$catalogos.appendChild($fragment);

document.addEventListener("click", (e) => {
  if (e.target.matches(".verCatalogo")) {
    $iframe.src = e.target.getAttribute("data-url");
    document.querySelector(".pdf ").classList.remove("none");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (
    e.target.matches(".descargarCatalogo") ||
    e.target.matches(".catalogos img")
  ) {
    let enlace = e.target.getAttribute("data-url");

    let enlaceDescarga = document.createElement("a");
    enlaceDescarga.href = enlace;
    enlaceDescarga.download = enlace;
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    document.body.removeChild(enlaceDescarga);
  }
});

const download1 = () => {
  let enlaceDescarga = document.createElement("a");
  const $imgQr = document.querySelector(".codigo img");
  enlaceDescarga.href = $imgQr.src;
  enlaceDescarga.download = localStorage.getItem("url");
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();
  document.body.removeChild(enlaceDescarga);
};

const dowload = () => {};
