import React from 'react';
import './style.css';

export const Modal = ({ status, setActive, children }) => {
   console.log(status);
   console.log(children);
   return (
      <div className={status.active ? 'Modal active' : 'Modal'} onClick={() => setActive({ active: false })}>
         <div className="Modal__content" id='modal' onClick={e => e.stopPropagation()} >
            <div dangerouslySetInnerHTML={{ __html: children }} ></div>
         </div>
      </div >
   )
}