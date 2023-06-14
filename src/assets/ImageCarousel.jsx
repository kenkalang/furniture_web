import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';

const ImageCarousel = ({ images }) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const $carousel = $(carouselRef.current);

        $carousel.on(
            'init reInit afterChange',
            (event, slick, currentSlide) => {
                const nextSlide =
                    currentSlide === undefined
                        ? 1
                        : currentSlide === slick.slideCount - 1
                        ? 0
                        : currentSlide + 1;
                setActiveIndex(nextSlide);
            },
        );

        $carousel.slick({
            slidesToShow: 4,
            autoplay: false,
            arrows: false,
        });

        return () => {
            $carousel.slick('unslick');
        };
    }, []);

    const goPrev = () => {
        $(carouselRef.current).slick('slickPrev');
    };

    const goNext = () => {
        $(carouselRef.current).slick('slickNext');
    };

    return (
        <>
            <div ref={carouselRef} className="carousel">
                {images.map((image, index) =>
                    index === activeIndex ? (
                        <div key={index} className="slide-container">
                            <div className="cover_cost">
                                <h3 className="cost">${image.price}</h3>
                            </div>
                            <h2>{image.brand}</h2>
                            <img
                                className={
                                    activeIndex === index
                                        ? 'slide-image active'
                                        : 'slide-image'
                                }
                                src={image.images[0]}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    ) : (
                        <div key={index} className="slide-container">
                            <img
                                className={
                                    activeIndex === index
                                        ? 'slide-image active'
                                        : 'slide-image'
                                }
                                src={image.images[0]}
                                alt={`Slide ${index}`}
                            />
                        </div>
                    ),
                )}
            </div>
            <div className="navigation-buttons">
                <button className="btn" onClick={goPrev}>
                    Prev
                </button>
                <button className="btn" onClick={goNext}>
                    Next
                </button>
            </div>
        </>
    );
};

export default ImageCarousel;
