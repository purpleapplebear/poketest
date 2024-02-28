import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Play from './Play';


function MyRouter() {
    return (
          <BrowserRouter>
          <div>
          <Routes>
            <Route path="play" element={<Play />} />
  
          </Routes>
          </div>
        </BrowserRouter>
      
  
    );
  }
  
  export default MyRouter;