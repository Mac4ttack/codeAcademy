/*
propTypes
In this lesson, you will learn to use an important React feature called propTypes.

propTypes are useful for two reasons. The first reason is prop validation.

Validation can ensure that your props are doing what they’re supposed to be doing. 
If props are missing, or if they’re present but they aren’t what you’re expecting, then a warning will print 
in the console.

This is useful, but reason #2 is arguably more useful: documentation.

Documenting props makes it easier to glance at a file and quickly understand the component class inside. 
When you have a lot of files, and you will, this can be a huge benefit.

Click Next to learn how to use propTypes!
*/

// Normal way to display a prop:
export class MyComponentClass extends React.Component {
    render() {
      return <h1>{this.props.title}</h1>;
    }
  }
  
  // Functional component way to display a prop:
  export const MyComponentClass = (props) => {
    return <h1>{props.title}</h1>;
  }
  
  // Normal way to display a prop using a variable:
  export class MyComponentClass extends React.component {
    render() {
        let title = this.props.title;
      return <h1>{title}</h1>;
    }
  }
  
  // Functional component way to display a prop using a variable:
  export const MyComponentClass = (props) => {
      let title = props.title;
    return <h1>{title}</h1>;
  }


//example propType requirement for function
import React from 'react';
import PropTypes from 'prop-types';

export const GuineaPigs = (props) => {
  let src = props.src;
  return (
    <div>
      <h1>Cute Guinea Pigs</h1>
      <img src={src} />
    </div>
  );
}

GuineaPigs.propTypes = {
  src: PropTypes.string.isRequired
}

//example propType requirement for class
import React from 'react';
import PropTypes from 'prop-types';

export class MessageDisplayer extends React.Component {
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

// This propTypes object should have
// one property for each expected prop:
MessageDisplayer.propTypes = {
  message: PropTypes.string
};