import React from 'react';
import $ from 'jquery';
import LoadingScreen from './images/LoadingScreen';
import './style.css';

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            activeIndex: 0,
        };
    }

    componentDidMount() {
        this.setState({ images: this.props.products });

        var inWrap = $('.inner-wrapper');

        $('.prev').on('click', function () {
            inWrap.animate({ right: '0%' }, 50, function () {
                inWrap.css('left', '0%');
                $('.slide').first().before($('.slide').last());
            });
        });

        $('.next').on('click', function () {
            inWrap.animate({ left: '0%' }, 50, function () {
                inWrap.css('left', '0%');
                $('.slide').last().after($('.slide').first());
            });
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.products !== this.props.products) {
            this.setState({ images: this.props.products });
        }
    }

    render() {
        if (this.props.products.length === 0) {
            return <LoadingScreen />;
        } else {
            return (
                <div className="container">
                    <div className="slider-wrapper">
                        <div className="inner-wrapper">
                            {this.state.images.map((image, index) => {
                                return (
                                    <img
                                        className="slide"
                                        src={image}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="nav-button">
                        <button className="btn button prev"></button>
                        <button className="btn button next"></button>
                    </div>
                </div>
            );
        }
    }
}

export default ImageSlider;
