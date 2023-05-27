import ContentLoader from "react-content-loader";

function LoadingAnimation({ isCircle }) {
  return (
    <ContentLoader backgroundColor="rgba(23, 195, 178, 0.2)">
      {isCircle ? (
        <circle cx="50%" cy="50%" r="20%" />
      ) : (
        <rect width="100%" height={16 * 5} />
      )}
    </ContentLoader>
  );
}

export default LoadingAnimation;
