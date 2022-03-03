//creates an alert each time the button is pressed 
import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

//effect hook
  useEffect(() => {
    alert(`Count: ${count}`);
  });

  const handleClick = () => {
    setCount((prevCount) =>  prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}



//Control When Effects Are Called

import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    //dependency array
    //The dependency array is used to tell the useEffect() method when to call our effect and when to skip it. 
    //Our effect is always called after the first render but only called again if something in our dependency array has changed values between renders.
  }, []);

  const handleChange = ({ target }) => setName(target.value);

  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );
}
