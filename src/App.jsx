import React, { useState } from 'react';
import './App.scss';
import { Link } from 'react-router-dom';

const App = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveButton = () => {
    const newTop = Math.floor(Math.random() * (window.innerHeight - 50));
    const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    setPosition({ top: newTop, left: newLeft });
  };

  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header__wrapper">
            <h1>sosal?</h1>
            <div>
              
              <button>yes</button>
             
              
              <button
                style={{
                  position: 'absolute',
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                  transition: 'all 0.3s ease-in-out',
                }}
                onMouseEnter={moveButton}
              >
                no
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
