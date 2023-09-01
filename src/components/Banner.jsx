import React from "react";
import imgBanner from "../Img/1.jpg";
import '../style/Components/_Banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <img
                className="img_banner"
                src={imgBanner}
                alt="banner"
            />
            <h2>Front-end Developer</h2>
        </div>
    )
}
export default Banner;

