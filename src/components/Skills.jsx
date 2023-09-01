import React from "react";

import iconHtlml from "../Img/html5.png";
import iconCss from "../Img/css.png";
import iconsass from "../Img/sass.png";
import iconJavascript from "../Img/javascript.jpg";
import iconReact from "../Img/react.png";
import iconRedux from "../Img/redux.png";
import iconSeo from "../Img/seo.png";
import iconGit from "../Img/git.png";
import iconGithub from "../Img/github.png";
import '../style/Components/_Skills.scss';

const Skills = () => {
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