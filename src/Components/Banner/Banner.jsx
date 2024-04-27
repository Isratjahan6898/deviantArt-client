
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="mt-[60px]">

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/wNz67pG/2151123847.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Landscape Painting</h1>
      <p className="mb-5 font-bold">landscape painting, the depiction of natural scenery in art. Landscape paintings may capture mountains, valleys, bodies of water, fields, forests, and coasts and may or may not include man-made structures as well as people.</p>
      <button className="btn text-white bg-[#FF497C]">view Deatails</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Z6r55kx/7027.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"> Oil Painting</h1>
      <p className="mb-5 font-bold">oil painting, painting in oil colours, a medium consisting of pigments suspended in drying oils. The outstanding facility with which fusion of tones or colour is achieved makes it unique among fluid painting mediums.</p>
      <button className="btn text-white bg-[#FF497C]">View details</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide>

        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/dQtcdWj/Untitled-design-1.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Watercolour Painting:</h1>
      <p className="mb-5 font-bold">Many people describe watercolors as being “soft” or “light” because the pigments in watercolors are often not as bright as acrylics or oil paints. Watercolor contains pigment particles combined with a binder from natural sources like gum, glucose, and glycerine..</p>
      <button className="btn text-white bg-[#FF497C]">view details</button>
    </div>
  </div>
</div>
        </SwiperSlide>
        
      </Swiper>
         
        </div>
    );
};

export default Banner;