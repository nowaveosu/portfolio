import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome'
import Introduction from './pages/Introduction';
import Education from './pages/Education';
import Evaluation from './pages/Evaluation';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/introduction" element={<Introduction/>}></Route>
        <Route path="/education" element={<Education/>}></Route>
        <Route path="/evaluation" element={<Evaluation/>}></Route>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
  );
}

export default App;
