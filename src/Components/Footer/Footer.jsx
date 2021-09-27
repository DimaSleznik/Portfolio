import React from 'react';
import './style.css';

export const Footer = () => {

   return (
      <footer className='Footer'>
         <div className="Footer_email"><a href="http://dima.sleznik@gmail.com" target='_blank' rel="noreferrer">Gmail</a></div>
         <div className="Footer_github"><a href="https://github.com/DimaSleznik" target='_blank' rel="noreferrer">github</a></div>
         <div className="Footer_telegram"><a href="http://t.me/SLezDev" target='_blank' rel="noreferrer">telegram</a></div>
      </footer>
   )
}