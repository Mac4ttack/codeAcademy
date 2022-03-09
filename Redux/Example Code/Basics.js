/*
Every action must have a type property with a string value. This describes the action.
Typically, an action has a payload property with an object value. This includes any information related to the action. In this case, the payload is the todo text.
When an action is generated and notifies other parts of the application, we say that the action is dispatched.
*/
const action = {
  type: "todos/removeTodo",
  payload: "Pack snacks",
};
// “Remove all todos”. This requires no payload because no additional information is needed:
const action = {
  type: "todos/removeAll",
};

/* Reducers

  
So far, we’ve defined the state of our application and the actions representing requests to change that state, but we haven’t seen how these changes are carried out in JavaScript. The answer is a reducer.

A reducer, or reducer function, is a plain JavaScript function that defines how the current state and an action are used in combination to create the new state.

Always the case: 
It’s a plain JavaScript function
It defines the application’s next state given a current state and a specific action
It returns a default initial state if no action is provided
It returns the current state if the action is not recognized

Rules:
They should only calculate the new state value based on the state and action arguments.
They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
They must not do any asynchronous logic or have other “side effects”.

Redux: reducers must make immutable updates and be pure functions.
*/
const initialState = ["Print trail map", "Pack snacks", "Summit the mountain"];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/addTodo": {
      return [...state, action.payload];
    }
    case "todos/removeAll": {
      return [];
    }
    default: {
      return state;
    }
  }
};

//another basic example:
// Define reducer here
const reducer = (state = initialState, action) => {
  switch (action.type) {
    //add song to current array
    case "songs/addSong": {
      return [...state, action.payload];
    }

    //return songs that weren't requested to be removed
    case "songs/removeSong": {
      return state.filter((song) => song !== action.payload);
    }
    //do nothing, return unedited state
    default: {
      return state;
    }
  }
};

const initialState = ["Take Five", "Claire de Lune", "Respect"];

const addNewSong = {
  type: "songs/addSong",
  payload: "Halo",
};

const removeSong = {
  type: "songs/removeSong",
  payload: "Take Five",
};

const removeAll = {
  type: "songs/removeAll",
};

//remove an item at an index

const removeItemAtIndex = (list, index) => {
  return [...list.slice(0, index), ...list.slice(index + 1, list.length)];
};

console.log(removeItemAtIndex(["a", "b", "c", "d"], 1));

//pass in a file - file must be read outside

const fs = require("fs");
const file = "./data.txt";

const message = fs.readFileSync(file, "utf8");

const capitalizeMessage = (message) => {
  return message.toUpperCase();
};

console.log(capitalizeMessage(message));



/////// store


import { createStore } from 'redux';

const increment = () => {
  return { type: 'increment' }
}

const decrement = () => {
  return { type: 'decrement' }
}

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(countReducer);

// Define your change listener function here.
const printCountStatus = () => {
  console.log(`The count is ${store.getState()}`);
}
store.subscribe(printCountStatus);
store.dispatch(decrement()); // store.getState() === -1
store.dispatch(increment()); // store.getState() === 0
store.dispatch(increment()); // store.getState() === 1
