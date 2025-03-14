import "./App.css";
import About from "./views/About";
import Detail from "./views/Detail";
import ErrorPage from "./views/ErrorPage";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const pathname = useLocation();
  // console.log(pathname);

  return (
    <>
      {pathname !== "/" ? <Navbar /> : null}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

