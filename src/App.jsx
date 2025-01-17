import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const moveButton = () => {
    const newTop = Math.max(0, Math.floor(Math.random() * (window.innerHeight - 50)));
    const newLeft = Math.max(0, Math.floor(Math.random() * (window.innerWidth - 100)));
    setPosition({ top: newTop, left: newLeft });
  };

  useEffect(() => {
    let interval;

    if (isHovering) {
      interval = setInterval(() => {
        moveButton();
      }, 100); // Move every 100ms while hovering
    } else {
      clearInterval(interval); // Stop moving when hover ends
    }

    return () => clearInterval(interval); // Cleanup interval on unmount or hover stop
  }, [isHovering]);

  return (
    <section className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1>sosal?</h1>
          <div>
            <button>yes</button>
            <button
              className="button-no"
              style={{
                position: 'absolute',
                top: `${position.top}px`,
                left: `${position.left}px`,
                transition: 'all 0.1s ease-in-out',
              }}
              onMouseEnter={() => setIsHovering(true)}  // Start movement when hovering
              onMouseLeave={() => setIsHovering(false)} // Stop movement when hover ends
            >
              no
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
  