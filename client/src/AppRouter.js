import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
