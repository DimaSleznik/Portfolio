import React from 'react';
import './style.css';
import { Navbar } from '../Navbar/Navbar';
export const Header = () => {

   return (
      <header className="main-header">
         <div className="main-header_logo">
         </div>
         <Navbar></Navbar>
      </header>
   )

}