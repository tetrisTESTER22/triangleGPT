import React from 'react';
import './maincss/Header.css'; 

const Header = ({ username, amount, userId, level, countOfReferrals, currentLevel, nextLevel }) => {
  return (
    <header className="header-container">
      <div className="header-border">
        <pre>
          {`
icon ${username.padEnd(20)} Balance: $${amount}

 User ID: ${userId}
 Level: ${level}
 Referals: ${countOfReferrals}`}
        </pre>
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
}

export default Header;