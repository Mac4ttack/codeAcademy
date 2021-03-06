 /*
 The solution is to follow a pattern called reducer composition. 
 In this pattern, individual slice reducers are responsible for updating only one slice 
 of the application’s state, and their results are recombined by a rootReducer to form a 
 single state object.
 */



// Handles only `state.todos`.
const initialTodos = [
    { id: 0, text: 'learn redux', completed: false },
    { id: 1, text: 'build a redux app', completed: true },
    { id: 2, text: 'do a dance', completed: false },
  ];
  const todosReducer = (todos = initialTodos, action) => {
    switch (action.type) {
      case 'todos/addTodo': 
        return [...todos, action.payload]
      case 'todos/toggleTodo':
        return todos.map(todo => {
          return (todo.id === action.payload.id) ? 
            { ...todo, completed: !todo.completed } : 
            {...todo};
        });
      default:
        return todos;
    }
  };
   
  // Handles only `state.filter`
  const initialFilter = 'SHOW_INCOMPLETE',
  const filterReducer = (filter = initialFilter, action) => {
    switch (action.type) {
      case 'filter/setFilter':
        return action.payload;
      default:
        return filter;
  };
   
  const rootReducer = (state = {}, action) => {
    const nextState = {
      todos: todosReducer(state.todos, action),
      filter: filterReducer(state.filter, action)
    };
    return nextState;
  };
   
  const store = createStore(rootReducer);



  //example 2

  import { createStore } from 'redux';
import allRecipesData from './data.js';

// Action Creators
////////////////////////////////////////

const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe', 
    payload: recipe 
  };
}

const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe', 
    payload: recipe 
  };
}

const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}


const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }; 
}

const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipesData
  }; 
}

// Reducers
////////////////////////////////////////

const initialAllRecipes = [];
const allRecipesReducer = (allRecipes = initialAllRecipes, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return action.payload
    default:
      return allRecipes;
  }
}

const initialSearchTerm = '';
const searchTermReducer = (searchTerm = initialSearchTerm, action) => {
  switch(action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload;
    case 'searchTerm/clearSearchTerm':
      return '';
    default: 
      return searchTerm;
  }
}

// Create the initial state for this reducer.
var initialFavoriteRecipes = [];
const favoriteRecipesReducer = (favoriteRecipes = initialFavoriteRecipes, action) => {
  switch(action.type) {
    
    // Add action.type cases here.
    case 'favoriteRecipes/addRecipe':
      return [...favoriteRecipes, action.payload];
    case 'favoriteRecipes/removeRecipe':
      return favoriteRecipes.filter(element => element.id !== action.payload.id);
    default:
      return favoriteRecipes;

  }
}

const rootReducer = (state = {}, action) => {
  const nextState = {
    allRecipes: allRecipesReducer(state.allRecipes, action),
    searchTerm: searchTermReducer(state.searchTerm, action),
    favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
  } 
  return nextState;
}

const store = createStore(rootReducer);