import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contect from "./Components/Contect";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import User from "./Components/User";

function App() {
  return (
    <>
      <h1>Routing</h1>
   
      <BrowserRouter>
      <NavBar/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/User/ :id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
