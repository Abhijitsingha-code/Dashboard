import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Layout/Header/Navbar";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import Signin from "../Pages/Auth/Signin";
import SignUp from "../Pages/Auth/Signup";
import Order from "../Utils/Order";
import SalesDashboard from "../Utils/SalesDashboard";
import Form1 from '../Utils/Form1'
import Form2 from "../Utils/Form2";

const Routing = () => {
  return (
    <div className="light">
      <div className="flex flex-auto flex-col h-screen	">
        <div className="flex flex-auto min-w-0">
          <div className="h-[100vh] sticky top-0 side-nav">
            <Sidebar />
          </div>
          <div className="flex flex-auto flex-col min-h-screen min-w-0 w-full relative bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
            <Navbar />
            <main className="h-full ">
             
              <Routes>
                <Route path="/" element={<SalesDashboard />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<SalesDashboard />} />
                <Route path="/project-list" element={<Order />} />
                <Route path="/form1" element={<Form1 />} />
                <Route path="/form2" element={<Form2 />} />
              </Routes>
              
            </main>
          </div>
        </div>
      </div>

      <footer />
    </div>
  );
};

export default Routing;
