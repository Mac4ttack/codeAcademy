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

//Put an Event Handler in a Component Class

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//Render Different UI Based on Props

export class Welcome extends React.Component {
  render() {
    if (this.props.name === 'Wolfgang Amadeus Mozart') {
      return (
      	<h2>
      	  hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}

//pass props to a component from a component
import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Ruby" />
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// Remder a Component's props
import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Rybu' />, 
  document.getElementById('app')
);

//render props
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp= "Hello"/>, document.getElementById('app'))

//access props
import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp= "Hello"/>, document.getElementById('app'))

//pass an event handler as a prop - passing talk to button

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component { 
  //this is the talk handler
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>; 
    //we chose talk as attribute name passing in the talk handler
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick= {this.props.talk}>
        Click me!
      </button>
    );
  }
}

//refactor Previous example with better naming convention to explain what they do
/*
One major source of confusion is the fact that names like onClick have special meaning, but only if they’re used on HTML-like elements.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick= {this.props.onClick}>
        Click me!
      </button>
    );
  }
}


// props.children returns everything inbetween opening and closing tags - they don't have to be self closing
// If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. 
// However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.
import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

//define default props

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'I am a button' }; 

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);



//  STATE 

//setting initial state

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return <div></div>;
  }
}
 
<Example />


//Accessing State
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
  constructor(props) {
    super(props);
    this.state = { title: 'Best App' };
  }
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// calling this.setState from another Function

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: green}
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor () {
    const newColor =  this.state.color == yellow ? green : yellow ;
    this.setState({color: newColor});
  }
  render() {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor}>
        Change color
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById('app'))


//Stateless components from stateful components
import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child'

class Parent extends React.Component {
constructor(props){
  super(props);
  this.state = {name: 'Frarthur'};
}
render() {
  return <Child name= {this.state.name} />;
}
ReactDOM.render(<Parent />,document.getElementById('app'))
}
/////////
import React from 'react';


export class Child extends React.Component{
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}

//// child component updates their parent's state
//parent



import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <ChildClass onClick={this.handleClick} />
    );
  }
}
///////
//child 


import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}


//another example child updates parent 

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = { name: 'Frarthur' };
  }
changeName(newName) {
  this.setState({
    name: newName
  });
}
  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);


/// Parent

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = { name: 'Frarthur' };
  }
changeName(newName) {
  this.setState({
    name: newName
  });
}
  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);



/*
In lesson 1, you learned your first React programming pattern: a stateful, parent component passes down a prop to a stateless, child component.

In lesson 2, you learned that lesson 1’s pattern is actually part of a larger pattern: a stateful, parent component passes down an event handler to a stateless, child component. The child component then uses that event handler to update its parent’s state.

In this lesson, we will expand the pattern one last time. A child component updates its parent’s state, and the parent passes that state to a sibling component.

An understanding of this final pattern will be very helpful in the wild, not to mention in the next React course. Click Next and we’ll build an example!
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
import React from 'react';

export class Sibling extends React.Component {
  render() {
		const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}

import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}