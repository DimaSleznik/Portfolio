import React, { useState } from "react";
import { Skills, Works } from "../Sections";
import { Greetings } from "../Sections/Greetings/Greetings";
import { Modal } from "../UI/Modal";
import './style.css';
export const Main = () => {
   const [active, setActive] = useState({ active: false, content: null })
   return (<main className='Main'>
      <Greetings></Greetings>
      <Skills></Skills>
      <Works setActive={setActive}></Works>
      <Modal active={active} setActive={setActive}>{active.active ? active.content : ''}</Modal>

   </main>);
}

