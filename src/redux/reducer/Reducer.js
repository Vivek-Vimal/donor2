import { PATHNAME1, PATHNAME2, PATHNAME3, PATHNAME4, 
  PATHNAME5, PATHNAME6, PATHNAME7, PATHNAME8,
  BACK2, BACK3, BACK4, BACK5, BACK6, BACK7, MENU1, MENU2, MENU3, F1,F2,F3,F4,F5,F6,F7, PAY1, PAY2, PAY3
} from "../constants/action-types";

const initialState = {
  path: 'Registration1',
  // pay: '',
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
    case PATHNAME8 : 
      return { path : 'Registration9' }

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


      case F1 :
        return { path : 'F1' }
      case F2 :
        return { path : 'F2'}
      case F3 :
        return { path : 'F3' }
      case F4 : 
        return { path: 'F4' }
       case F5 :
        return { path : 'F5' }
      case F6 :
        return { path : 'F6' }
      case F7 : 
        return { path : 'F7' }

      

      case PAY1 :
        return { path: 'pay1' }
      
      case PAY2 :
        return { path: 'pay2' }

      case PAY3 :
        return { path: 'pay3' }
    
    default:
      return state
  }
};
