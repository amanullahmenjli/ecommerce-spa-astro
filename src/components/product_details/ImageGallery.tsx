import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type checking
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";



import { Carousel } from 'react-responsive-carousel';
import shipping from '../../assets/images/shipping.jpg';
import bonus from '../../assets/images/bonus.jpg';

import mousse4 from '../../assets/images/mousse42.jpg'
import mousse5 from '../../assets/images/mousse52.jpg'
import mousse6 from '../../assets/images/mousse62.png'
import bébé from '../../assets/images/bébé2.png'
import oreiller from '../assets/images/or.png';


interface DemoCarouselProps {
    image: string; // Define the 'image' prop as a string
    namee: string;
}





class DemoCarousel extends Component<DemoCarouselProps> {
    render(): ReactNode {
        const { image, namee } = this.props; // Get the 'image' prop

        let bn;

        if (namee.includes("mousse 4")) {
             bn = mousse4;
  } else if (namee.includes("mousse 5")) {
    bn = mousse5;
  } else if (namee.includes("mousse 6")) {
    bn = mousse6;
  }
  else if (namee.includes("Bébé")) {
    bn = bébé;
  } else if (namee.includes("Oreiller")) {
    bn = oreiller;
  }else {
    bn = bonus;
  }

        const images:ReactImageGalleryItem[] = [
            {
                original: image,
                thumbnail: image,
                
                
              },            
            {
                original: bn.src,
                thumbnail: bn.src,
              },            
        ]

        const withoutBonus = (
            <Carousel width={460} dynamicHeight autoPlay interval={1500} infiniteLoop>
                <div>
                    <img src={image} width={460} alt="Carousel 1" /> {/* Use the 'image' prop */}
                </div>
                <div>
                    <img src={shipping.src} width={460} alt="2 Oreillers gratuits" /> {/* Use the 'image' prop */}
                </div>
            </Carousel>
        );

        const withBonus = (
            <Carousel width={400} dynamicHeight autoPlay interval={1500} showStatus={false} infiniteLoop>
                <div>
                    <img src={image} width={460} alt="Carousel 1" /> {/* Use the 'image' prop */}
                </div>
                <div>
                    <img src={shipping.src} width={460} alt="2 Oreillers gratuits" /> {/* Use the 'image' prop */}
                </div>
                <div>
                    <img src={bonus.src} alt="Carousel 3" />
                </div>
            </Carousel>
        );

        return <div className='md:max-w-lg'><ImageGallery items={images} thumbnailPosition='left' showFullscreenButton={false} showPlayButton={false} infinite autoPlay/></div>;
    }
}

export default DemoCarousel;
