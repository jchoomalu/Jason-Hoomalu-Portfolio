import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import GotYourSix from "./pages/GotYourSix";
import SymbolSaga from "./pages/SymbolSaga";
import SymbolSagaMapEditor from "./pages/SymbolSagaMapEditor";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/allprojects" element={<Experience />} />
        <Route path="/gotyoursix" element={<GotYourSix />} />
        <Route path="/symbolsaga" element={<SymbolSaga />} />
        <Route path="/ssmapeditor" element={<SymbolSagaMapEditor />} />
      </Routes>
    </BrowserRouter>
  );
};
