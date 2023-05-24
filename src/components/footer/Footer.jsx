import "../footer/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__status">Estado&nbsp;</p>
      <svg
        width="1rem"
        height="1rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        alt="circulo"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          fill="#4acb4a"
        />
      </svg>
      <p className="footer__active">&nbsp;Activo</p>
    </footer>
  );
}

export default Footer;
