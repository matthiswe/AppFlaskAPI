import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import counter from './counter';
import todos from './todos';
import wiki from './wikipedia';

const appReducer = combineReducers({
    counter: counter,
    todos: todos,
    wiki: wiki
})

const store = createStore(appReducer, composeWithDevTools(
    applyMiddleware(thunk),
))

export default store;