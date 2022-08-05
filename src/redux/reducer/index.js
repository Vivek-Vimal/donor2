
import { PATHNAME2, PATHNAME3, PATHNAME4, PATHNAME5,PATHNAME6, PATHNAME7 } from "../constants/action-types";

const initialState = {
  path: 'Registration3',
}


export const Reducer = (state = initialState, action) => {
  switch (action.type){
    case PATHNAME2 :
      return state.path = 'Registration3'
    case PATHNAME3 :
      return state.path = 'Registration4'
    case PATHNAME4 : 
      return state.path = 'Registration5'
     case PATHNAME5 :
      return state.path = 'Registration6'
    case PATHNAME6 :
      return state.path = 'Registration7'
    case PATHNAME7 : 
      return state.path = 'Registration8'
    
    default:
      return state
  }
};
