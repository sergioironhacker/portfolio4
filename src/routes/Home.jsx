import "../styles/home.css";
import { isMobile } from "react-device-detect";
import F11Message from "../components/f11Message/F11Message";
import Background from "../components/background/Background";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

function Home() {
  const IS_NOTEBOOK_OR_PC = !isMobile;

  return (
    <>
      {IS_NOTEBOOK_OR_PC && <F11Message />}

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
