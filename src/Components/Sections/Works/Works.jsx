import React from 'react';
import './style.css';
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
                     <h3>Учебные списки</h3>
                     <p>Приложение для создание списков , и заучивание слов.
                        Программа выводит случайной слово из списка.Можно поставить таймер.</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>React</li>
                        <li>React-router</li>
                        <li>js</li>
                     </ul>
                     <a href="https://github.com/DimaSleznik/RandomWords" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>
               </div>
            </div>

            <div className="Works_elem"><img src={weather} alt="project" />
               <div className="Work_description">
                  <div className='description_card'>
                     <h3>Погода</h3>
                     <p>Приложение с погодой. Использующее  openweathermap API.</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>React</li>
                        <li>React-router</li>
                        <li>Redux</li>
                     </ul>
                     <a href="https://github.com/DimaSleznik/Weather_Redux" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>
               </div>
            </div>
            <div className="Works_elem"><img src={Chat} alt="project" />
               <div className="Work_description">

                  <div className='description_card'>
                     <h3>Чат</h3>
                     <p>Приложение для групповых чатов. Серверную часть выполняла firebase API.А frontend : React/Redux.</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>React</li>
                        <li>React-router</li>
                        <li>Redux</li>
                        <li>firebase</li>
                     </ul>
                     <a href="https://github.com/DimaSleznik/Chat" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>

               </div>
            </div>
            <div className="Works_elem"><img src={Moon} alt="project" />
               <div className="Work_description">
                  <div className='description_card'>
                     <h3>Планирование</h3>
                     <p>Планирование задач,с возможностью выбрать дату,время.</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>js vanilla</li>
                        <li>html/css</li>
                     </ul>
                     <a href="https://github.com/DimaSleznik/Moon_Diary" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>
               </div>
            </div>
            <div className="Works_elem"><img src={Todo} alt="project" />
               <div className="Work_description">
                  <div className='description_card'>
                     <h3>Тудушка</h3>
                     <p>Список задачь</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>React</li>
                        <li>html/css</li>
                     </ul>
                     <a href="https://github.com/DimaSleznik/Moon_Diary" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>
               </div>
            </div>
            <div className="Works_elem"><img src={Bar} alt="project" />
               <div className="Work_description">
                  <div className='description_card'>
                     <h3>Игра для создания коктейлий</h3>
                     <p>Игра для вечеринок</p>
                     <h3>Технологии</h3>
                     <ul>
                        <li>Javascript</li>
                        <li>html/css</li>
                     </ul>
                     <a href="https://github.com/DimaSleznik/Tipsy" target="_blank" rel="noopener noreferrer">Ссылка на гитхаб</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}