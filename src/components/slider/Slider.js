import {CCarousel,CImage,CCarouselItem} from "@coreui/react";
import React, { Component } from 'react';

import Image1 from "../../assets/1.avif";
import Image2 from "../../assets/2.avif";
import Image3 from "../../assets/3.avif";
import Image4 from "../../assets/4.avif";


function Slider(){

    return (<div>
    <CCarousel controls>
    <CCarouselItem>
        <CImage d-block w-100 className="d-block w-100" src={Image1} alt="slide 1" />
    </CCarouselItem>
    <CCarouselItem>
        <CImage d-block w-100 className="d-block w-100" src={Image2} alt="slide 2" />
    </CCarouselItem>
    <CCarouselItem>
        <CImage d-block w-100 className="d-block w-100" src={Image3} alt="slide 3" />
    </CCarouselItem>
    <CCarouselItem>
        <CImage d-block w-100 className="d-block w-100" src={Image4} alt="slide 4" />
    </CCarouselItem>
    </CCarousel>
    </div>);
}

export default Slider;

