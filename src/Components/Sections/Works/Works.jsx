import React from 'react';
import './style.css';
import work from '../../../img/work_img/portfolio.png';
import weather from '../../../img/work_img/weather.png';
import Random from '../../../img/work_img/RandomWords.png';
import Moon from '../../../img/work_img/moon.png';
import Chat from '../../../img/work_img/chat.png';
import Bar from '../../../img/work_img/bar.png';
import Todo from '../../../img/work_img/todo.png';


export const Works = ({ setActive }) => {
   const SendToModal = (e) => {
      if (e.target?.nextSibling?.innerHTML) {
         const description = e.target.nextSibling.innerHTML || 'emty';
         console.log(<div> {description}</div>);
         setActive({ active: true, content: description })
      }
   }
   return (
      <div className="Works">
         <h2>Работы</h2>
         <div className="Works_list" onClick={(e) => SendToModal(e)}>
            <div className="Works_elem" >
               <img src={Random} alt="project" />
               <div className="Work_description">
                  <div className='description_card'>
                     <h3>Портфолио</h3>
                     <p>Сайт с Портфолио для работы</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>React</li>
                        <li>Html</li>
                        <li>js</li>
                     </ul>
                     <a href="http://github.com" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>
               </div>
            </div>

            <div className="Works_elem"><img src={weather} alt="project" />
               <div className="Work_description">Проект портфолио113331</div>
            </div>
            <div className="Works_elem"><img src={Chat} alt="project" />
               <div className="Work_description">Проект портфолио11221</div>
            </div>
            <div className="Works_elem"><img src={Moon} alt="project" />
               <div className="Work_description">Проект портфолио11ss1</div>
            </div>
            <div className="Works_elem"><img src={Todo} alt="project" />
               <div className="Work_description">Проект портфолио11ss1</div>
            </div>
            <div className="Works_elem"><img src={Bar} alt="project" />
               <div className="Work_description">Проект портфолио11ss1</div>
            </div>
         </div>
      </div>
   )
}