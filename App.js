import { Button, Container, Row ,Col} from 'reactstrap';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Menus from './Components/Menus';
import AddProduct from './Components/AddProduct';
import AllProducts from './Components/AllProducts';
import UpdateProduct from './Components/UpdateProduct';
import Contact from './Components/Contact';


function App() {
  const btnHandle=()=>{
      toast.success("done",{
        position:"top-center",
      });
  };
  return (
    <div>
        
        <ToastContainer/>
          <Header/>
                <Container>
                    <div className="row">
                        <div className="col-4 col-md-4"><Menus/></div>
                        <div className="col-8 col-md-8">
                          <Router>
                              <Routes>
                                  <Route path="/" element={<Home />} exact/>
                      
                                  <Route path="/add-product" element={<AddProduct />} exact/> 
                        
                     
                                  <Route path="/view-products"element={<AllProducts />} exact/>

                                  <Route path="/update-product"element={<UpdateProduct />} exact/>
                                  <Route path="/contact-us"element={<Contact />} exact />

                        
                              </Routes>
                          </Router>
                          
                           
                            
                        </div>
                    </div>
                </Container>

        
      
    </div>
   
  );
}

export default App;