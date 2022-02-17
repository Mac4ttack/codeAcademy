//Create a component

import React from "react";
import ReactDOM from "react-dom";

//Component class variable names must begin with capital letters!
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(<MyComponentClass />, document.getElementById("app"));

//example component class 2

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish
          to add any more.
        </p>
        <cite>
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler"
          >
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
}

ReactDOM.render(<QuoteMaker />, document.getElementById("app"));

//example component 3


const owl = {
  title: "Excellent Owl",
  src: "https://content.codecademy.com/courses/React/react_photo-owl.jpg",
};

// Component class starts here:
class Owl extends React.Component {
  render() {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title} />
      </div>
    );
  }
}

ReactDOM.render(<Owl />, document.getElementById("app"));

// Logic in a render function (logic principles)

class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}


//component example with logic

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
class Friend extends React.Component {
render() {
  const choich = Math.floor(Math.random()*3);
  const friend = friends[choich];
  return (
    <div>
    <h1>{friend.title}</h1>
    <img src={friend.src}/>
    </div>
  );
}
};

ReactDOM.render(<Friend />,document.getElementById('app'));

// another component example

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>;
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>;
    }
  }
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);


//component object

class MyName extends React.Component {
	// name property goes here:
  get name() {
  	return 'Rybu';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));


//component with event listener

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'));


// other component with event listener

class MyClass extends React.Component {
    myFunc() {
      alert('Stop it.  Stop hovering.');
    }
   
    render() {
      return (
        <div onHover={this.myFunc}>
        </div>
      );
    }
  }