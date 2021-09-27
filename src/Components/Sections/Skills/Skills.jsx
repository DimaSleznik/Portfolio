import React from 'react';
import './style.css';
export const Skills = () => {

   return (
      <>
         <h2 className='Skills_title' >Умения</h2>
         <div className="Skills">

            <ul className='Skills_list'>
               <li>знание HTML, CSS и SASS</li>
               <li>понимание блочной верстки и верстки на flexbox</li>
               <li>знание JavaScript ( ES6+)</li>
               <li>Умение работать со стеком: React + Redux + React router</li>
               <li>Основы работы с git,webpack</li>
               <li>понимание базовых Алгоритмов</li>
            </ul>
            <div className="img"></div>
         </div>
      </>
   )
}