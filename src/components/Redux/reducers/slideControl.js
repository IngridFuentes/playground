import { SLIDE_RIGHT, SLIDE_LEFT, UPDATE_DATA } from "../actionTypes/actionTypes";

const initialState = {
  curr:0,
  posts : []
};

export default function(state = initialState, action) {
  console.log(action,'action')
  switch (action.type) {
    case SLIDE_RIGHT: {
      const len = action.payload.totalImages - 1;
      const lastImage = state.curr === len 
    let newState = {
      ...state,
      curr:lastImage ? 0 : state.curr + 1
    }
    return newState
    
    }

    case SLIDE_LEFT: {
      const len = action.payload.totalImages - 1;
      const firstImage = state.curr === 0 
    let newState = {
      ...state,
      curr:firstImage ? len : state.curr - 1
    }
    return newState
    
    }
  
    case UPDATE_DATA: {

      let newState = {
        ...state,
        posts: action.payload
      }
      return newState
    }
    default:
      return state;
  }
}
