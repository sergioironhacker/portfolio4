import { useState, useEffect } from "react";

function useImageLoader(imageUrl) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = () => setLoading(false);

    return () => (image.onload = null);
  }, [imageUrl]);

  return loading;
}

export { useImageLoader };
