
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import {Reducer} from "../reducer/index";


const store = createStore(Reducer, composeWithDevTools(
  
));


export default store;