import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './App.css';

function App() {
  const url = 'https://api.unsplash.com/photos/?client_id=TLh21EAauRE3D4AuMh-JzB-ZQ8CM9yIcnvYp0Q2NtbA&count=30';
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios.get(url).then((res)=>{
      setImages(res.data);
    });
  }

  useEffect(() => {
    getImages();
  },[]);

  if(!images){
    return <h1>Loading ...</h1>
  }
  
  return (
    <div className="App">
      <header>
        <h1>Lazy Load</h1>
      </header>
      <div>
        {images.map((image: any) => {
          return (
            <LazyLoadImage
              effect="blur" 
              src={image.urls.regular} 
              alt={image.alt_description} 
              key={image.id}
              height="700px"
              width="500px" 
              placeholderSrc={process.env.PUBLIC_URL + "/logo192.png"}              
            />

          )
        })}
      </div>
    </div>
  );
}

export default App;
