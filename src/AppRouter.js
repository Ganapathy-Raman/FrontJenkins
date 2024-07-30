import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./HomePage.css";
import Main from './Main';
import Login from "./Login";
import Front from './Front';
import FrontPage from './FrontPage';
import Register from "./Register";
import AddCustomer from "./AddCustomer";
import AddInsurance from "./AddInsurance"
import EditCustomer from "./EditCustomer";
import ViewCustomer from './ViewCustomer';
import ViewInsurance from './ViewInsurance';
import EditInsurance from './EditInsurance';
import AboutUs from './AboutUs';


function AppRouter() {
  return (
    <Router class="head">

      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/add" element={<AddCustomer />} />
        <Route path="/addinsurance" element={<AddInsurance />} />
        <Route path="/viewCustomer" element={<ViewCustomer />} />
        <Route path="/viewInsurance" element={<ViewInsurance />} />
        <Route path="/updateCustomer/:customerid" element={<EditCustomer />} />
        <Route path="/updateInsurance/:insuranceid" element={<EditInsurance />} />


      </Routes>

    </Router>
  )
}

export default AppRouter;


