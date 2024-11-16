

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Design from './Design';
import Home from './Home';
import RegisterForm from './RegisterForm';
import DynamiDesigns from './DynamiDesigns';


function App() {
  return (
    <div>

  <BrowserRouter>
  <Routes>
  <Route path='' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/design' element={<Design />}/>
    <Route path='/form' element={<RegisterForm />}/>
    <Route path='/dynamicdesign' element={<DynamiDesigns />} />
  </Routes>  
  </BrowserRouter>
   
    </div>
  );
}

export default App;
