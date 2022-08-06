import { PATHNAME1, PATHNAME2, PATHNAME3, PATHNAME4, 
  PATHNAME5, PATHNAME6, PATHNAME7, PATHNAME8,
  BACK2, BACK3, BACK4, BACK5, BACK6, BACK7
} from "../constants/action-types";

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

    case BACK2 :
      return { path : 'Back1' }
    case BACK3 : 
      return { path: 'Back2' }
     case BACK4 :
      return { path : 'Back3' }
    case BACK5 :
      return { path : 'Back4' }
    case BACK6 : 
      return { path : 'Back5' }
    case BACK7 : 
      return { path : 'Back6' }
    
    default:
      return state
  }
};
