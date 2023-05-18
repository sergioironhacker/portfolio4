import { useState, useEffect } from "react";
import ContentLoader from "react-content-loader";

function ContactItems({ iconClass, href, textIcon, iconItem }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = iconItem;
    image.onload = () => setLoading(false);
  }, [iconItem]);

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
    if (textIcon === "gioliotta.io@gmail.com") {
      return window.open("mailto:gioliotta.io@gmail.com");
    } else {
      return;
    }
  };

  return (
    <>
      {loading ? (
        <ContentLoader
          animationDuration={2000}
          backgroundColor="rgba(23, 195, 178, 0.2)"
        >
          <rect width="100%" height="5rem" />
        </ContentLoader>
      ) : (
        <li onClick={OPEN_EMAIL} className="contact__list-item">
          <a className="contact__link" target="_blank" href={href}>
            <p className="contact__text-icon">{textIcon}</p>

            <img src={iconItem} className={HANDLE_ICON_CLASS()} />
          </a>
        </li>
      )}
    </>
  );
}

export default ContactItems;
