import "../styles/home.css";
import Background from "../components/Background";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
