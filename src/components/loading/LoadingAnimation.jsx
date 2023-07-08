import ContentLoader from "react-content-loader";

function LoadingAnimation({ isProject }) {
  if (isProject) {
    return (
      <ContentLoader
        style={{ width: "100%", height: "150px", borderRadius: "1rem" }}
        backgroundColor="rgba(23, 195, 178, 0.2)"
      >
        <rect width="100%" height="100%" />
      </ContentLoader>
    );
  } else {
    return (
      <ContentLoader
        style={{ height: 16 * 4.5, borderRadius: "1rem" }}
        backgroundColor="rgba(23, 195, 178, 0.2)"
      >
        <rect width="100%" height="100%" />
      </ContentLoader>
    );
  }
}

export default LoadingAnimation;
