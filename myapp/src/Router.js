import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";


function MyRouter() {
    return (
          <BrowserRouter>
          <div>
          <Routes>
            <Route path="/" element={<nav><Link to="/">a</Link><Outlet /></nav>} />
            <Route path="a" element={<h1>Hello: Page 2</h1>} />
            <Route path="b" element={<h1>Hello: Page 3</h1>} />
  
          </Routes>
          </div>
        </BrowserRouter>
      
  
    );
  }
  
  export default MyRouter;