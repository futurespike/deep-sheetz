import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { map } from 'lodash';

class App extends Component {
  render() {
    const robbColor = 'pink';
    const robbBg = 'darkblue';
    const erinColor = 'purple';

    const messages = [
      { name: 'Robb', says: 'Hi Erin, how are you?' },
      { name: 'Erin', says: "I'm great" },
      { name: 'Robb', says: 'Are you excited for your birthday at Playdate?' },
      { name: 'Erin', says: 'Yes, I am very excited for my birthday party at Playdate.' },
      { name: 'Robb', says: 'Wow! You sure are excited!' },
      { name: 'Robb', says: 'Your birthday party is coming up very soon' },
      { name: 'Robb', says: "We're going to have so much fun at Playdate." },
      { name: 'Robb', says: "You're going to have so much fun! Very, very much fun." },
      { name: 'Erin', says: "I'm going to have so much fun with the ball shooters!" },
      {
        name: 'Erin',
        says: 'We put them in the holes, then we shoot them out to the other ones on the green shooters.',
      },
      {
        name: 'Erin',
        says: 'From the blue shooter to the green shooters.',
      },
      {
        name: 'Erin',
        says:
          'Then the ones that go to the green shooters, the balls that we shoot to them,' +
          ' they pick up the balls that we shoot at the green shooters, then they shoot them back to us at the blue shooters.',
      },
      { name: 'Robb', says: "Ok, I'm glad you are excited, but now it is time for bed." },
      { name: 'Robb', says: 'Goodnight!' },
    ];

    return (
      <div className="App" style={{ backgroundColor: 'purple' }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style={{ width: '50%', margin: 'auto', padding: '10px' }}>
          {map(messages, (message, index) => {
            if (message.name === 'Robb') {
              return (
                <h1 style={{ color: robbColor, backgroundColor: robbBg }} key={index}>
                  {message.says}
                </h1>
              );
            } else if (message.name === 'Erin') {
              return (
                <h2 style={{ color: erinColor, backgroundColor: 'pink' }} key={index}>
                  {message.says}
                </h2>
              );
            } else {
              return <div key={index}> Opps!</div>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
