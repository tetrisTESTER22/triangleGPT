import React from 'react';
import './maincss/Body.css';
import tasksLeft from './mainPageIcons/availableTasks.png';
import tasksAvailable from './mainPageIcons/toDoTask.jpg';

const Body = () => {
  return (
    <main>
      <div className="button-container">

        <div className="button-row">
          <button className="button">
            <img src={tasksLeft} alt="Описание 1" />
            <span>Tasks left</span>
          </button>
          <button className="button">
            <img src={tasksAvailable} alt="Описание 2" />
            <span>Tasks available</span>
          </button>
          <button className="button">
            <img src="path/to/image3.png" alt="Описание 3" />
            <span>Tasks done</span>
          </button>
        </div>

        <div className="button-row">
          <button className="button">
            <img src="path/to/image4.png" alt="Описание 4" />
            <span>Earned today</span>
          </button>
          <button className="button">
            <img src="path/to/image5.png" alt="Описание 5" />
            <span>Referrals revenue</span>
          </button>
        </div>

        <div className="button-row">
          <button className="button">
            <span>Start</span>
          </button>
          <button className="button">
            <img src="path/to/image7.png" alt="Описание 7" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Body;