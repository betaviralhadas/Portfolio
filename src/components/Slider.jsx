import React, { useState, useEffect } from 'react';
import data from '../components/Skills.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style/Components/_Skills.scss';

const Slider = () => {
  return (
    <>
      {data && data.length > 0 && (
        <Carousel
          additionalTransfrom
          arrows
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          dotListClass=""
          draggable={true}
          focusOnSelect={false}
          infinite={true}
          /*customTransition="translateX(-320px) 10s infinite linear"*/
          transitionDuration={500}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1.5,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 4,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          
        >
          {data.map(donnee => (
            <div id="skills" className="content_skills" key={donnee.title}>
              <img className="icon_skill" src={donnee.image} alt="skills" />
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default Slider;