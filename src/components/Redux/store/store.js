// import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
// import thunk from 'redux-thunk'

// const reducer = combineReducers({
    
//   });

// const store = createStore(reducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

// export default store;

import { createStore ,applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
export default store;