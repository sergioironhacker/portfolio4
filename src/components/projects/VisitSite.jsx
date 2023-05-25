import { Link } from "react-router-dom";

function VisitSite({ to, children }) {
  return (
    <Link to={to} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
}

export default VisitSite;
