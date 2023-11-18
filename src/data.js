import algorithmic from "./assets/img/algorithmic.webp";
import passwordGenerator from "./assets/img/password.webp";
import clipboard from "./assets/img/clipboard.webp";
import taxiBarber from "./assets/img/taxi.webp";
import smartArtGenerator from "./assets/img/smart.webp";
import pomolym from "./assets/img/pomolym.webp";
import github from "./assets/svgs/github.svg";
import mail from "./assets/svgs/mail.svg";
import linkedin from "./assets/svgs/linkedin.svg";
import whatsapp from "./assets/svgs/whatsapp.svg";

const PROJECTS_ITEMS = [
  {
    id: 0,
    name: "pomoLym",
    image: pomolym,
    visitPage: "https://pomolym.netlify.app/",
    visitGitHub: "https://github.com/gioliotta/pomolym-app",
    description: {
      description:
        "Aplicación desarrollada en React Native para Android de tipo pomodoro que se centra en mantener un diseño simple e intuitivo.",
      itemOne: "Guardado de datos en la aplicación.",
      itemTwo: "Notificaciones push.",
      itemThree: "Pestaña para personalizar los ciclos de trabajo.",
    },
  },
  {
    id: 1,
    name: "algorithmic market",
    image: algorithmic,
    visitPage: "https://algorithmic-market.com/",
    description: {
      description:
        "Aplicación web desarrollada en equipo, en la cual se venden cursos de trading para ser consumidos dentro de la misma.",
      itemOne: "Alojamiento de videos en bunny.",
      itemTwo: "Login para usuarios utilizando Auth0.",
      itemThree: "Compras integradas con Stripe.",
    },
  },
  {
    id: 2,
    name: "clipboard notes",
    image: clipboard,
    visitPage: "https://clipboard-notes.netlify.app/",
    visitGitHub: "https://github.com/gioliotta/clipboard-extension",
    description: {
      description:
        "Convertí una app de notas en extensión configurando el manifest.json, disponible para navegadores como Chrome y Edge.",
      itemOne: "Papelera de reciclaje para recuperar notas eliminadas.",
      itemTwo: "Opciones para editar, borrar y copiar.",
      itemThree: "Versión disponible en inglés y español.",
    },
  },
  {
    id: 3,
    name: "taxiBarber",
    image: taxiBarber,
    visitPage: "https://taxi-barber.netlify.app/",
    visitGitHub: "https://github.com/gioliotta/TaxiBarber",
    description: {
      description:
        "Implementé la actualización de inputs utilizando estados y guardé la información en  el local storage.",
      itemOne: "Gestión el precio de un corte de pelo.",
      itemTwo: "Panel de configuración para modificar los parámetros.",
      itemThree: "Opción para cambiar contraseña.",
    },
  },

  {
    id: 4,
    name: "smartArt generator",
    image: smartArtGenerator,
    visitPage: "https://smartart-generator.netlify.app/",
    description: {
      description:
        "Integré la API de OpenAI, y la utilicé para generar imágenes por medio de un prompt del usuario.",
      itemOne: "Generar imágenes personalizadas.",
      itemTwo: "Seleccionar el tamaño de la imagen.",
      itemThree: "Botón para visitar la imagen generada.",
    },
  },

  {
    id: 5,
    name: "generador de contraseñas",
    image: passwordGenerator,
    visitPage: "https://passwords-generator-gioliotta.netlify.app/",
    visitGitHub: "https://github.com/gioliotta/generator-passwords",
    description: {
      description:
        "Aprendí a manipular y generar cadenas de caracteres de forma aleatoria.",
      itemOne: "Longitud personalizable.",
      itemTwo: "Capacidad de agregar caracteres especiales.",
      itemThree: "Copiar la contraseña generada y usarla en cualquier lugar.",
    },
  },

  // {
  //   id: 6,
  //   name: "Generador de cards",
  //   image: cardsGenerator,
  //   visitPage: "https://card-generator-ts.netlify.app/",
  //   visitGitHub: "https://github.com/gioliotta/card-generator",
  //   description: {
  //     description:
  //       "Integré React y TypeScript, trabajé con tipado estático, lo que brindó beneficios en términos de detección de errores.",
  //     itemOne: "Los datos ingresados se modifican en tiempo real.",
  //     itemTwo: "Botón para descargar la card generada.",
  //     itemThree: "Uso de styled-components para los estilos.",
  //   },
  // },
];

const CONTACT_ITEMS = [
  {
    id: 0,
    icon: linkedin,
    text: "Giovanni Liotta",
    href: "https://www.linkedin.com/in/giovanniliotta/",
  },
  {
    id: 1,
    icon: github,
    text: "gioliotta",
    href: "https://github.com/gioliotta",
  },
  {
    id: 2,
    icon: mail,
    text: "gioliotta.io@gmail.com",
    href: "#",
  },
  {
    id: 3,
    icon: whatsapp,
    text: "WhatsApp",
    href: "https://wa.me/2615731250?text=Hola Giovanni, te contacto por...",
  },
];

export { PROJECTS_ITEMS, CONTACT_ITEMS };
