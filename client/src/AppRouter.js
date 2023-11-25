import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import WordSlinger from "./pages/WordSlinger";
import SymbolSaga from "./pages/SymbolSaga";
import SymbolSagaMapEditor from "./pages/SymbolSagaMapEditor";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer/Footer";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/allprojects" element={<Experience />} />
        <Route path="/wordslinger" element={<WordSlinger />} />
        <Route path="/symbolsaga" element={<SymbolSaga />} />
        <Route path="/ssmapeditor" element={<SymbolSagaMapEditor />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
