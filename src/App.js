import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Form from "./pages/Form/Form";
import HomeNavbar from "./pages/Home/Navbar/HomeNavbar";

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
          <Route path="bar" element={<Main type="1" />} />
          <Route path="cr" element={<Main type="2" />} />
          <Route path="karinderya" element={<Main type="3" />} />

          <Route path="*" element={<ErrorPage />} />
          <Route path="add-markers" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
