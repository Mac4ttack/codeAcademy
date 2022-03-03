// A component class written in the usual way:
export class MyComponentClass extends React.Component {
    render() {
      return <h1>Hello world</h1>;
    }
  }
  
  // The same component class, written as a stateless functional component:
  export const MyComponentClass = () => {
    return <h1>Hello world</h1>;
  }
  
  // Works the same either way:
  ReactDOM.render(
      <MyComponentClass />,
      document.getElementById('app')
  );

  ////////////
/*Like any component, function components can receive information via props.
To access these props, give your function component a parameter named props. 
Within the function body, you can access the props using this pattern: props.propertyName. 
You don’t need to use the this keyword. */

import React from 'react';
import ReactDOM from 'react-dom';

export const NewFriend = (props) => {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

/*Well done! You’ve written your first function component. Here’s a recap:

Function components are React components defined as JavaScript functions
Function components must return JSX
Function components may accept a props parameter. Expect it to be a JavaScript object

Although function components and class components can do the same things, 
you’ll see a lot of function components in the React documentation and example apps. 
Some developers prefer them over class components for their simplicity and straightforward features,
 like Hooks, which you’ll learn later in your coding journey.
*/

