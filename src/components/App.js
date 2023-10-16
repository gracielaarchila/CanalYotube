import "../App.css";
import Modal from "./Modal";
import Header from "./Header";
import NavBar from "./NavBar";
import Carusel from "./Carusel";
import Card from "./Card";
import Footer from "./Footer";
import CommentList from "./CommentList";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Modal />
      <Header />
      <NavBar />
      <Carusel />
      <Card />
      <CommentList />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
