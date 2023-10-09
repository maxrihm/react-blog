// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  isLoggedIn: localStorage.getItem('username') ? true : false,
  username: localStorage.getItem('username') || null,
  role: localStorage.getItem('role') || null
};

function reducer(state = initialState, action) {
  switch (action.type) {
      case 'LOGIN':
          return { 
              ...state, 
              isLoggedIn: true, 
              username: action.payload.username, 
              role: action.payload.role
          };  
      case 'LOGOUT':
          return { ...state, isLoggedIn: false, username: null, role: null };  
      default:
          return state;
  }
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;
