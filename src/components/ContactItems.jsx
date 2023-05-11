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

  const HREF = () => (window.location.href = href);

  return (
    <li onClick={HREF} className="contact__list-item">
      <a className="contact__link">
        <p className="contact__text-icon">{textIcon}</p>
        {iconItem({ className: HANDLE_ICON_CLASS() })}
      </a>
    </li>
  );
}

export default ContactItems;
