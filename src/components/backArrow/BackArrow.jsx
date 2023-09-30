import "../backArrow/backArrow.css";
import { AiOutlineDoubleLeft as ArrowLeft } from "react-icons/ai";

function BackArrow() {
  return (
    <a to="/">
      <ArrowLeft className="backarrow__btn" />
    </a>
  );
}

export default BackArrow;
