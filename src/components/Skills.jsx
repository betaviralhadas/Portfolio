import React, { useState, useEffect } from 'react';

import iconHtlml from "../Img/html5.png";
import iconCss from "../Img/css.png";
import iconsass from "../Img/sass.png";
import iconJavascript from "../Img/javascript.png";
import iconReact from "../Img/react.png";
import iconRedux from "../Img/redux.png";
import iconSeo from "../Img/seo.png";
import iconGit from "../Img/git.png";
import iconGithub from "../Img/github.png";
import '../style/Components/_Skills.scss';

const Skills = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [iconHtlml, iconCss, iconsass, iconJavascript, iconReact, iconRedux, iconSeo, iconGit, iconGithub];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Tempo em milissegundos para trocar de slide automaticamente
        return () => clearInterval(interval);
    }, [images.length]);

    

    return(
        <section className="skills">
            <h2>My Skills</h2>
            <div className="content_skills">
                <img className="icon_skill" src={iconHtlml} alt="html" />
                <img className="icon_skill" src={iconCss} alt="css" />
                <img className="icon_skill" src={iconsass} alt="sass" />
                <img className="icon_skill" src={iconJavascript} alt="javascript" />
                <img className="icon_skill" src={iconReact} alt="react" />
                <img className="icon_skill" src={iconRedux} alt="redux" />
                <img className="icon_skill" src={iconSeo} alt="seo" />
                <img className="icon_skill" src={iconGit} alt="git" />
                <img className="icon_skill" src={iconGithub} alt="github" />
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