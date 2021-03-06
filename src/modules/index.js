//-------------------------------------------------------------
// Messaging Client (Prototype)
//
// modules/index.js
//
// Redux reducers root
//--------------------------------------------------------------
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import messages from './messages';

export default combineReducers({
  routing: routerReducer,
  messages
});
