import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type checking
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import shipping from '../../assets/images/shipping.jpg';
import bonus from '../../assets/images/bonus.jpg';

interface DemoCarouselProps {
    image: string; // Define the 'image' prop as a string
    hasBonus: boolean;
}

class DemoCarousel extends Component<DemoCarouselProps> {
    render(): ReactNode {
        const { image, hasBonus } = this.props; // Get the 'image' prop

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
            <Carousel width={460} dynamicHeight autoPlay interval={1500} infiniteLoop>
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

        return hasBonus ? withBonus : withoutBonus;
    }
}

export default DemoCarousel;
