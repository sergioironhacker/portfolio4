import "../styles/home.css";
import Background from "../components/Background";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import F11Menssage from "../components/F11Menssage";
import { isMobile } from "react-device-detect";

function Home() {
  const IS_NOTEBOOK_OR_PC = !isMobile;

  return (
    <>
      {IS_NOTEBOOK_OR_PC && <F11Menssage />}

      <div className="home">
        <Background />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Home;
