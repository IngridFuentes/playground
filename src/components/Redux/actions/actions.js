import { ResponsiveEmbed } from "react-bootstrap";
import { SLIDE_RIGHT, SLIDE_LEFT, UPDATE_DATA } from "../actionTypes/actionTypes";



export const slideRight = (len) =>
 {
   return ({

     type: SLIDE_RIGHT,
     payload:{totalImages: len}
   })
};
export const slideLeft = (len) => {
return({
  type: SLIDE_LEFT,
  payload:{totalImages: len}
});
}

export const updateData = (resBody) => {
  return ({type: UPDATE_DATA, payload: resBody})
} 

export const fetchPosts = () => async dispatch => {
        try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url)
        const respBody = await response.json();
        dispatch(updateData(respBody))
      } catch (error) {
        console.log(error)
      }
}