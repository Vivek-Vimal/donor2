
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import {Reducer} from "../reducer/Reducer";


export const store = createStore(Reducer, composeWithDevTools(
  
));