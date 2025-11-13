import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome'
import Layout from "./Layout";
import Introduction from './pages/Introduction';
import Education from './pages/Education';
import Evaluation from './pages/Evaluation';
import Experience from './pages/Experience';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Contact from './pages/Contact';


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Welcome/>}></Route>
          <Route path="/introduction" element={<Introduction/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/evaluation" element={<Evaluation/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/project1" element={<Project1/>}></Route>
          <Route path="/project2" element={<Project2/>}></Route>
          <Route path="/project3" element={<Project3/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Route>
      </Routes>    
  );
}

export default App;
