import React from "react";
import imgBanner from "../Img/banner.webp";
import '../style/Components/_Banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <img
                className="img_banner"
                src={imgBanner}
                alt="banner"
            />
        </div>
    )
}
export default Banner;

