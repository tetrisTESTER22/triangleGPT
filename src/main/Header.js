import React from 'react';
import './maincss/Header.css'; 
import iconPath from './mainPageIcons/userIcon.png';
const Header = ({ username, amount, userId, level, countOfReferrals, currentLevel, nextLevel }) => {
  return (
    <header className="header-container">
      <div className="header-border">
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
          <img src={iconPath} alt="icon" className='userIconImage' />
          <span className='userNameSpan'>{`${username.padEnd(20)}`}</span>
          <span className='balanceSpan'>Balance: ${amount}</span>
        </div>
        <div>
          <p>User ID: {userId}</p>
          <p>Level: {level}</p>
          <p>Referrals: {countOfReferrals}</p>
        </div>
      </div>
      <div>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
        <div className="level-container">
          <span>{currentLevel}</span>
          <span>{nextLevel}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;