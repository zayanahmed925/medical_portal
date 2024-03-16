import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarr from './pages/Shared/Navbarr';
import Homee from './pages/Home/Homee';



function App() {
  return (
    <div >
      <Navbarr></Navbarr>
      <Routes>
        <Route path='/' element={<Homee></Homee>}></Route>
        <Route path='/home' element={<Homee></Homee>}></Route>
      </Routes>
    </div>
  );
}

export default App;
