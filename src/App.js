import React from "react";
import { Route, Routes} from "react-router-dom";
import About from './Routes/about.jsx'
import Projects from './Routes/projects.jsx'
import Skills from './Routes/skills'
import Dreams from './Routes/dreams.jsx'
import Contact from './Routes/contact.jsx'
import Navigat from "./components/nav.jsx";
function App() {
  return (
    <React.Fragment>
      <Navigat />
      <Routes>
        <Route path="Jack-M.-Isaac/"exact element={<About/>} ></Route>
        <Route path="Jack-M.-Isaac/projects" element={<Projects />} ></Route>
        <Route path="Jack-M.-Isaac/skills" element={<Skills />} ></Route>
        <Route path="Jack-M.-Isaac/dreams" element={<Dreams />} ></Route>
        <Route path="Jack-M.-Isaac/contact"  element={<Contact/>} ></Route>
        </Routes>
    </React.Fragment>
  );
}

export default App;
