import { Button } from "react-bootstrap";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="wrapper" id="wrapper">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path ="skills" element={<Skills />} />
      <Route path ="projects" element={<Projects />} />
      <Route path ="about-me" element={<AboutMe />} />
      <Route path ="contact" element={<Contact />} />
     

     
    
      </Routes>
      </BrowserRouter>
      

     
      
      
    </div>
  );
}

export default App;
