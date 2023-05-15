function ContactItems({ iconClass, href, textIcon, iconItem }) {
  const HANDLE_ICON_CLASS = () => {
    switch (iconClass) {
      case "linkedin":
        return "contact__icon linkedin";

      case "github":
        return "contact__icon github";

      case "email":
        return "contact__icon email";

      default:
        return "contact__icon";
    }
  };

  const OPEN_EMAIL = () => {
    if (href === "gioliotta.io@gmail.com") {
      return window.open("mailto:gioliotta.io@gmail.com");
    } else {
      return;
    }
  };

  return (
    <li onClick={OPEN_EMAIL} className="contact__list-item">
      <a
        className="contact__link"
        target={href === "gioliotta.io@gmail.com" ? "" : "_blank"}
        href={href}
      >
        <p className="contact__text-icon">{textIcon}</p>
        <img src={iconItem} className={HANDLE_ICON_CLASS()} />
      </a>
    </li>
  );
}

export default ContactItems;
