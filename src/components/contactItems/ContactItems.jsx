import { useImageLoader } from "../loading/LoadingComponent";
import LoadingAnimation from "../loading/LoadingAnimation";
import ItemContact from "./ItemContact";

function ContactItems({ iconClass, href, textIcon, iconItem }) {
  const LOADING = useImageLoader(iconItem);

  return (
    <>
      {LOADING ? (
        <LoadingAnimation isCircle={false} />
      ) : (
        <ItemContact
          textIcon={textIcon}
          iconClass={iconClass}
          href={href}
          iconItem={iconItem}
        />
      )}
    </>
  );
}

export default ContactItems;
