import {useState} from 'react';
import './App.css';
const images=[
  "https://cdn.pixabay.com/photo/2023/04/26/08/09/porridge-7951848_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/07/10/47/elephant-2380009_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/02/04/08/03/baby-623417_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/01/08/17/06/poppy-1128683_1280.jpg"
];
export default function App(){
  const[current,setCurrent]=useState(0);
  function nextSlide(){
    setCurrent(current===images.length-1?0:current+1);
  };
  function prevSlide(){
    setCurrent(current===0?images.length-1:current-1);
  }
  return(
    <div>
      <h2>Project:Image Caraousel</h2>
      <div className='slider'>
      <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map((image,index)=>
        current===index && 
          <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
        )}
      </div>
    </div>
  )
}