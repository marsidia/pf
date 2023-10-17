

import { Outlet, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Header from './components/Header';
import Layout from './components/Layout';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" element = {<Layout/>}>
          <Route index element={<Header />} />
          <Route path= 'about' element = {<About/>}/>
          <Route path= 'curriculum' element = {<Curriculum/>}/>
          <Route path= 'projects' element = {<Projects/>}/>
         

          
       

        </Route>

      </Routes>
      {/* <Outlet/> */}
      

      
      {/* <About/>
      <Curriculum/> */}
    </div>
  );
}

export default App;
