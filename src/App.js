
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quemsomos" element={<Projects />} />
          <Route path="/especialidades" element={<About />} />
          <Route path="/nossaequipe" element={<Resume />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
