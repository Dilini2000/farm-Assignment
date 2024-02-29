
import './App.css';
import Admin from './components/admin/Admin';
import PermisionList from './components/admin/PermisionList';
import AddEmployee from './components/admin/AddEmployees';

import Signup from './components/customer/Signup';
import Nav from './components/aboutAndContact/Nav';
import Home from './components/customer/Home';
import Homepage from './components/aboutAndContact/Homepage';
import Login from './components/customer/Login';
import PaymentPortal from './components/customer/PaymentPortal';
import Cart from './components/order/Cart';

import About from './components/aboutAndContact/About';
import Contact from './components/aboutAndContact/contact';



import AddStaff from './components/delivery/AddStaff';
import RootLayout from './components/layouts/rootLayout';
import Checkout from './components/order/Checkout';
import Order from './components/order/Order';
import CartProvider from './components/order/cartItemContext';
import OrderProcessed from './components/order/orderProcessed';
import Farm from './components/productionStoc/Farm';
import Outlet from './components/productionStoc/Outlet';
import {createBrowserRouter, Routes, Route,Link, createRoutesFromElements, RouterProvider} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(

     
      <Route path='/' element={<RootLayout/>}>
        {/* <Route  index element={<Admin/>} />    */}
        <Route path='homepage' element={<Homepage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='/home/signup' element={<Signup/>}/>
        <Route path='/home/signin' element={<Login/>}/>
        <Route path='farm' element={<Farm/>}  />    
        <Route path='order' element={ <Order/> }/>
        <Route path='/order/checkout' element={<Checkout/>}/>
        <Route path='/order/paymetPortal' element={<PaymentPortal/>}/>
        <Route path='/order/checkout/processed' element={<OrderProcessed/>}/>  
      </Route>
      
   
    )
  )

  
  return (
    <div className="App">
      {/* <Nav/> */}
        {/* <Home/> */}

        {/* <AddStaff/> */}
        
        {/* <Outlet/> */}
        {/* <Farm/> */}
        {/* <Cart/> */}

        {/* <Admin/>
        <PermisionList/>
        <AddEmployee/> */}


          
      <CartProvider>
        <RouterProvider router={router}/>
      </CartProvider>
    </div>
  );
}

export default App;
