

import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Projects from "./components/Projects";

function App() {
  

 
  


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
