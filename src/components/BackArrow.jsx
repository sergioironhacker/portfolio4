import "../styles/backarrow.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleLeft as ArrowLeft } from "react-icons/ai";

function BackArrow() {
  return (
    <Link to="/">
      <ArrowLeft className="backarrow-btn" />
    </Link>
  );
}

export default BackArrow;
