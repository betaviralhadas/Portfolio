import React, { useState, useEffect } from 'react';
import skills from '../components/Skills.json';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {

  return (
    <>
      {
        skills && skills.length > 0 && (
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
          >
            
              
                {skills.map((item) => (
                  <div className="content_skills" key={item.id}>
                  <img
                    
                    src={item.image}
                    alt={`Skill ${item.id}`}

                  />
                   </div>
                ))}
             
            
          </Carousel>
        )
      }

    </>
  );

}
export default Skills;




/*  return(
      <section className="skills">
          <h2>My Skills</h2>
          <div className="content_skills">
            {skills.map((item) => (
          <div key={item.id} className="carousel-slide">
            <img 
              src={item.image} 
              alt={`Skill ${item.id}`} 
            />
          </div>
        ))}

              <img className="icon_skill" src={iconHtlml} alt="html" />
              <img className="icon_skill" src={iconCss} alt="css" />
              <img className="icon_skill" src={iconsass} alt="sass" />
              <img className="icon_skill" src={iconJavascript} alt="javascript" />
              <img className="icon_skill" src={iconReact} alt="react" />
              <img className="icon_skill" src={iconRedux} alt="redux" />
              <img className="icon_skill" src={iconSeo} alt="seo" />
              <img className="icon_skill" src={iconGit} alt="git" />
              <img className="icon_skill" src={iconGithub} alt="github" />
              <img className="icon_skill" src={iconNpm} alt="npm" />
              <img className="icon_skill" src={iconNode} alt="node" />
          </div>
      </section>
  )
}
export default Skills;




/* const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [iconHtlml, iconCss, iconsass, iconJavascript, iconReact, iconRedux, iconSeo, iconGit, iconGithub];
  const numSlidesToShow = 5; // Define quantos slides serão exibidos simultaneamente

  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 3000); // Tempo em milissegundos para trocar de slide automaticamente
      return () => clearInterval(interval);
  }, [images.length]);

  const renderSlides = () => {
      const offset = Math.floor(numSlidesToShow / 2);
      return images.map((image, index) => {
          const className = index === currentSlide ? 'icon_skill active' : 'icon_skill';
          const style = {
              transform: `translateX(${(index - currentSlide + offset) * 100}%)`,
          };
          return (
              <div key={index} className={className} style={style}>
                  <img src={image} alt={`Skill ${index}`} />
              </div>
          );
      });
  };

  return (
      <section className="skills">
          <h2>My Skills</h2>
          <div className="content_skills">
              <div className="carousel">{renderSlides()}</div>
          </div>
      </section>
  );
};

export default Skills;
*/


/* const Carousel = () => {
  const [icons, setIcons] = useState([
    {
      id: 1,
      img: "/img/icon-1.png",
    },
    {
      id: 2,
      img: "/img/icon-2.png",
    },
    {
      id: 3,
      img: "/img/icon-3.png",
    },
    {
      id: 4,
      img: "/img/icon-4.png",
    },
  ]);

  const [currentIcon, setCurrentIcon] = useState(icons[0]);

  useEffect(() => {
    // Inicializa o carrossel no ícone central
    setCurrentIcon(icons[Math.floor(icons.length / 2)]);
  }, []);

  const handleSlide = (direction) => {
    // Desloca o carrossel na direção especificada
    const newIndex = setCurrentIcon.index + direction;
    const newIcon = icons[newIndex % icons.length];
    setCurrentIcon(newIcon);
  };

  return (
    <div className="carousel">
      {icons.map((icon, index) => (
        <div
          key={icon.id}
          className={`icon ${index === setCurrentIcon.index ? "active" : ""}`}
        >
          <img src={icon.img} />
        </div>
      ))}
      <div className="controls">
        <button onClick={() => handleSlide(-1)}>Anterior</button>
        <button onClick={() => handleSlide(1)}>Próximo</button>
      </div>
    </div>
  );
};

export default Carousel; */