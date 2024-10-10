import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';

function MainPage() {
  return (
    <div style={{ display: 'block', flexDirection: 'column', alignItems: 'center' }}>
      <Header
      username="username123"
      amount={150.75}
      userId={12345}
      level={5}
      countOfReferrals={10}
      currentLevel="lvl3"
      nextLevel="lvl4"
    />
    
      <Body />
      <Footer />
    </div>
  );
}

export default MainPage;