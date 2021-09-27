import React from 'react';
import './style.css';

export const Modal = ({ active, setActive, children }) => {
   console.log(children);
   return (
      <div className={active.active ? 'Modal active' : 'Modal'} onClick={() => setActive({ active: false })}>
         <div className="Modal__content" id='modal' onClick={e => e.stopPropagation()} >
            <div dangerouslySetInnerHTML={{ __html: children }} ></div>
         </div>
      </div >
   )
}