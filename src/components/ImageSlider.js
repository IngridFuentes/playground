import React, {Component} from 'react';
import {Data} from './Data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux';
import {slideRight} from "../components/Redux/actions/actions";
import { fetchPosts } from "../components/Redux/actions/actions";
//import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icon'


class ImageSlider extends Component {

  // state = {
  //   curr: 0
  // }

  // nextSlide = () => {
  //   const len = this.props.slides.length;

  //   const {curr} = this.state;
  //           this.setState({curr : curr === len - 1 ? 0 : curr + 1})
  //         };
        
  // prevSlide = () => {
  //   const len = this.props.slides.length;
  //   const {curr} = this.state;
  //           this.setState({curr: curr === 0 ? len- 1 : curr - 1})
  //         };
    
        // if (!Array.isArray(this.props.slides) || this.props.slides.length <= 0) {
        //     return null;
        //   }
componentDidMount() {
  this.props.fetchPosts()
  // console.log(this.props.fetchPosts())
}

  render() {
    // console.log(this.props)
    const {curr} = this.props;
    let len = Data.length;
    
    return (
      <div>
        <section className="slider">
{/* //             {this.state.curr===0? 'right' : 'left'} */}
            <div className= "show">
            <button className="left" onClick={() => this.props.slideLeft(len)}>⬅️</button>
                        <button className="right" onClick={() => this.props.slideRight(len)}>➡️</button>
            </div>
                        
            {Data.map((s, idx)=>{
                return(
                    <div
                    className={idx === curr ? 'slide active' : 'slide'}
                    key={idx}
                  >
                    {idx === curr && (
                      <img src={s.image} alt='travel image' className='image' />
                    )}
                  </div>
                )
            })}
            
        </section>
      </div>
    )
  }
}

const mapStateToProps = (state) => {  ///map state to props connects to the store and 
  // returns only the states that we need in this component
  console.log(state,'state from mapSTATETOPROPS ')
  return {
    curr: state.slideControl.curr,
    posts: state.slideControl.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    slideRight:(len)=>dispatch(slideRight(len)),
    slideLeft:(len)=>dispatch({type: 'SLIDE_LEFT', payload:{totalImages: len}}),
    fetchPosts:() => dispatch(fetchPosts())
  }
} 


export default connect(mapStateToProps, mapDispatchToProps)(ImageSlider)
// const ImageSlider = ({slides}) => {
//     const [curr, setCurr] = useState(0)
//     const len = slides.length;

//     const nextSlide = () => {
//         setCurr(curr === len - 1 ? 0 : curr + 1);
//       };
    
//       const prevSlide = () => {
//         setCurr(curr === 0 ? len- 1 : curr - 1);
//       };

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//       }

//     return (

//         <section className="slider">
//             {/* {curr===0? 'right' : 'left'} */}
//             <div className= "show">
//             <button className="left" onClick={prevSlide}>⬅️</button>
//                         <button className="right" onClick={nextSlide}>➡️</button>
//             </div>
                        
//             {Data.map((s, idx)=>{
//                 return(
//                     <div
//                     className={idx === curr ? 'slide active' : 'slide'}
//                     key={idx}
//                   >
//                     {idx === curr && (
//                       <img src={s.image} alt='travel image' className='image' />
//                     )}
//                   </div>
//                 )
//             })}
//         </section>
//     )
// }
// console.log(typeof(Data))

// export default ImageSlider
