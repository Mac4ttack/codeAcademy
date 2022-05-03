 //Importing the provider

//The <Provider> component from the react-redux library gives the components of an application access 
//to the Redux store without the need to pass the store directly to the React components through props.
// Importing Provider from react-redux.
// Wrapping the <Provider> component around the root <App /> component.
// Passing the store through the <Provider> component’s store prop. 
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app/App.js';
import { store } from './app/store.js';
 
import { Provider } from 'react-redux'
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



  /***********Selectors *******************************
   * 
   * A selector function, or selector, is a pure function that selects data from the Redux store’s state. Each component in an application that needs access to the state will have one or more selectors that extract only the necessary data for that component.

As pure functions, selectors should output the same data given the same input. This means that no randomness or side effects can occur inside the function.

A selector:

Takes state as an argument.
Returns what is needed by the component from state.

 
Given a state with an array of objects, labeled 'todos', and a string, labeled 'filter':

state = {
  todos: [
    {id: 1, isComplete: true, text: 'Go shopping'}
    {id: 2, isComplete: false, text: 'Call home'}  
  ],
  filter: 'SHOW_ALL'
}
*/
 
// Select the current filter
export const selectFilter = state => state.filter;
 
// Select the `text` from each todo in an array.
export const selectTodoText = state => state.todos.map(
  todo => todo.text);
 
// Select the id values of completed todos in an array.
export const selectIsCompleteIDs = state => state.todos.filter(
  todo => todo.isComplete).map(todo => todo.id)










//******************recipes example */
import allRecipesData from '../../../data.js'
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

export const loadData = () => {
  return {
    type: 'allRecipes/loadData',
    payload: allRecipesData
  }
}

const initialState = [];
export const allRecipesReducer = (allRecipes = initialState, action) => {
  switch (action.type) {
    case 'allRecipes/loadData':
      return action.payload;
    case 'favoriteRecipes/addRecipe':
      return allRecipes.filter(recipe => recipe.id !== action.payload.id);
    case 'favoriteRecipes/removeRecipe':
      return [...allRecipes, action.payload]
    default:
      return allRecipes;
  }
}

// Implement the selectors below.
export const selectAllRecipes = state => {
  return state.allRecipes;
}

export const selectFilteredAllRecipes = state => {
  const allRecipes  = selectAllRecipes(state);
  const searchTerm  = selectSearchTerm(state);

  return allRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm.toLowerCase()))
}
// This code is for testing the seletors only.
const testState = {
  allRecipes: allRecipesData,
  searchTerm: 'ch'
}

const testSelectAllRecipes = () => {
  console.log('All Recipes')
  console.log(selectAllRecipes(testState));
}

const testSelectFilteredAllRecipes = () => {
  console.log('\nRecipes filtered by searchTerm')
  console.log(selectFilteredAllRecipes(testState));
}

// Uncomment these to test each selector.
testSelectAllRecipes();
testSelectFilteredAllRecipes(); 



/*****************Use selector hook
With selectors, you have given your application the instructions to access data from the Redux store. To use these instructions the useSelector() hook is provided by react-redux. useSelector() accomplishes two things:

It returns data from the Redux store using selectors
It subscribes a child component of <Provider /> to changes in the store. React, not Redux, will re-render the component if the data from the selector changes.
These tasks are both accomplished by calling useSelector() inside a component definition and assigning its returned value to a variable.
 */


// Todos.js
import { useSelector } from 'react-redux';
import { selectTodos } from 'todosSlice.js';
 
export const Todos = () => {
  const todos = useSelector(selectTodos);
 
  return (
    <p>{todos}</p>
  )
};

//inline selector function
//Inline selectors can be useful if you need to use props for data retrieval.
const todos = useSelector(state => state.todos);


//This final example uses props.id to extract a single element from an array or object in the Redux store.
export const Todo = (props) => {
    const todo = useSelector(state => state.todos[props.id]);
}

/**********The useDispatch() Hook
  With the <Provider> component, selectors, and useSelector() implemented, you are now able to access the application state and subscribe component rendering to data changes. In this exercise, you are going to look at the final step: dispatching actions.

Without the react-redux library, you needed to create a reference to store.dispatch 
and pass it through the application’s props. 
With react-redux you can now access this reference from each component with useDispatch().


Imports useDispatch from react-redux.
Calls useDispatch() to obtain a reference to the Redux store dispatch() function and assigns it to dispatch.
Dispatches an action using dispatch() with an action object as the argument.
 */
import { useDispatch } from 'react-redux';
 
// within component definition
const dispatch = useDispatch() 
dispatch({type: 'addTodo'});


/**********
 Congratulations on finishing this lesson on the react-redux library! Let’s review what you’ve learned:

React and Redux work well together but need more to support React’s UI optimization and Redux’s one-way data flow.
The react-redux library provides React application components access to the Redux store
The <Provider> component wraps around the root component to give its descendants access to the - Redux store without props drilling
Selectors are pure function used to access all or part of the state in the Redux store
useSelector() retrieves the application state through selectors. It must be called from within a component
useSelector() subscribes components to data retrieved from the selectors. React, not Redux, re-renders those components when the selected data changes
useDispatch() returns a reference to Redux store dispatch() function
*/