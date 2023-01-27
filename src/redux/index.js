import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from 'redux-thank';


const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : composeFunc
const composeEnhancers = composeFunc(appliMiddleware(thunk))

const store = createStore(rootReducer(),initialState,composeEnhancers)


export default store; 