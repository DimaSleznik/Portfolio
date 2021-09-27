import React, { useState } from 'react';
import './style.css';
import { Modal } from '../UI/Modal/Modal';
export const Navbar = () => {
   const [modalActive, setModal] = useState({ active: false, content: '' })
   return (
      <div className="main-header__links">
         <div className="main-header_link" onClick={() => setModal({ active: true, content: '' })}>Контакты</div>
         <Modal status={modalActive} setActive={setModal}>

            {` <ul>
               <li><a href="https://github.com/DimaSleznik" target='_blank' rel="noreferrer">github</a></li>
               <li><a href="http://dima.sleznik@gmail.com" target='_blank' rel="noreferrer">dima.sleznik@gmail.com</a></li>
               <li><a href="http://t.me/SLezDev" target='_blank' rel="noreferrer">telegram</a></li>
            </ul>`}

         </Modal>
      </div>
   )
}