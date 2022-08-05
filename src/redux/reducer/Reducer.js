
import { PATHNAME1, PATHNAME2, PATHNAME3, PATHNAME4, PATHNAME5,PATHNAME6, PATHNAME7 } from "../constants/action-types";

const initialState = {
  path: 'Registration1',
}


export const Reducer = (state = initialState, action) => {
  switch (action.type){
    case PATHNAME1 :
      return { path : 'Registration2' }
    case PATHNAME2 :
      return { path : 'Registration3'}
    case PATHNAME3 :
      return { path : 'Registration4' }
    case PATHNAME4 : 
      return { path: 'Registration5' }
     case PATHNAME5 :
      return { path : 'Registration6' }
    case PATHNAME6 :
      return { path : 'Registration7' }
    case PATHNAME7 : 
      return { path : 'Registration8' }
    
    default:
      return state
  }
};
