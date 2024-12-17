import logo from './logo.svg';
import './App.css';

import { Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from'./Components/Home';
import Product from'./Components/Product';
import Admin from'./Components/Admin';
import AdminControl from './Components/AdminControl';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/product' element={<Product />}/>

      <Route path='/admin' element={<Admin />}/> 
      <Route path="/AdminControl" element={<AdminControl />} />



    </Routes>

    </>
  );
}

export default App;
