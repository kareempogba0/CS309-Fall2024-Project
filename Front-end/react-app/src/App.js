import logo from './logo.svg';
import './App.css';

import { Routes,Route} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from'./Components/Home';
import Product from'./Components/ProductComp/Product';
import Admin from'./Components/AdminComp/Admin';
import AdminControl from './Components/AdminComp/AdminControl';
import Desc from './Components/ProductComp/DescriptionLink/DecsLink'
import PaymentPage from'./Components/ProductComp/Payment/PaymentPage'


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>

      <Route path='/product' element={<Product />}/>

      <Route path='/admin' element={<Admin />}/> 
      <Route path="/AdminControl" element={<AdminControl />} />
      <Route path='/Description' element={<Desc/>}></Route>
      <Route path="/payment" element={<PaymentPage />} /> 



    </Routes>

    </>
  );
}

export default App;
