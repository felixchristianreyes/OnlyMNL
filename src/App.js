import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainNav from "./pages/Main/MainNav/MainNav";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="app" element={<Main />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="nav" element={<MainNav />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
