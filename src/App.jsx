import './App.css';
import Navbar from './assets/navbar';
import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LoadingScreen from './assets/images/LoadingScreen';
import {
    faMagnifyingGlass,
    faPlayCircle,
    faBriefcase,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './assets/ImageCarousel';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch('https://dummyjson.com/products/category/furniture')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ products: data.products });
            });
    }

    render() {
        if (this.state.products.length === 0) {
            return <LoadingScreen />;
        } else
            return (
                <>
                    <Navbar />
                    <section className="first">
                        <div className="first_left">
                            <h1>
                                The kind of furniture you have been looking for
                            </h1>
                            <div className="button_first_left">
                                <button className="secondary">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    SEARCH CATALOG
                                </button>
                                <button className="secondary">
                                    <FontAwesomeIcon icon={faPlayCircle} />
                                    WATCH VIDEOS
                                </button>
                            </div>
                        </div>
                        <div className="first_right">
                            <h2 className="cover_header">
                                HIGHLIGHTED PRODUCT
                            </h2>
                            <div className="cover_description">
                                <div className="cover_cost">
                                    <h2 className="cost">$329</h2>
                                </div>
                                <h2 className="cover_name">Pösht Sofa</h2>
                                <div className="cover_details">
                                    <button className="third">
                                        VIEW DETAILS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="second">
                        <h2 className="second_header">WHY CHOOSE US?</h2>
                        <h1>
                            We care about details and the quality of our
                            products
                        </h1>
                        <div className="second_description">
                            <div className="description_item">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <h2>MANUFACTURED WITH QUALITY MATERIALS</h2>
                            </div>
                            <div className="description_item">
                                <div className="icon">5</div>
                                <h2>5 YEARS OF WARRANTY FOR EACH PROFUCT</h2>
                            </div>
                            <div className="description_item">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faBriefcase} />
                                </div>
                                <h2>20 YEARS OF EXPERTISE</h2>
                            </div>
                        </div>
                    </section>
                    <section className="partnered">
                        <div className="partnered_header">
                            <h1>25 +</h1>
                            <h2>PARTNERED BRANDS</h2>
                        </div>
                        <div className="partnered_brands">
                            <img src="/src/assets/images/p1.png" alt="" />
                            <img src="/src/assets/images/p2.png" alt="" />
                            <img src="/src/assets/images/p3.png" alt="" />
                            <img src="/src/assets/images/p4.png" alt="" />
                        </div>
                    </section>
                    <section className="category">
                        <div className="category_header">
                            <h2>Categories</h2>
                            <h1>Furniture Sets Recommendations</h1>
                            <div className="category_list">
                                <h2>Bedroom</h2>
                                <h2>Living Room</h2>
                                <h2>Home Office</h2>
                                <h2>Gaming Room</h2>
                            </div>
                        </div>
                        <div className="image_category">
                            {
                                // render images on product[0]
                                this.state.products[0].images
                                    .slice(1, 4)
                                    .map((image, index) =>
                                        index !== 2 ? (
                                            <div
                                                key={index}
                                                className="image_items"
                                            >
                                                <img src={image} alt="" />
                                            </div>
                                        ) : (
                                            <div
                                                key={index}
                                                className="image_items image_items_last"
                                            >
                                                <img src={image} alt="" />
                                            </div>
                                        ),
                                    )
                            }
                        </div>
                    </section>
                    <section className="products">
                        <div className="products_header">
                            <div className="products_header_left">
                                <h2>OUR PRODUCTS</h2>
                                <h1>This month's best seller</h1>
                            </div>
                            <button className="btn">SEE MORE</button>
                        </div>
                        <div className="products_sell">
                            <ImageCarousel images={this.state.products} />
                        </div>
                    </section>
                    <section className="newsletter">
                        <h2>LIMITED DEALS</h2>
                        <h1>
                            Become a member and get 10% off of your first
                            purchase
                        </h1>
                        <div className="form-newsletter">
                            <input
                                type="text"
                                placeholder="Enter your email address"
                            />
                            <button className="btn btn-subs">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </div>
                    </section>
                    <section className="footer">
                        <div className="footer_left">
                            <img src="/src/assets/images/logo.png" alt="" />
                            <p>
                                Dekoor is a furniture company created to fulfill
                                the needs of family with aesthetic feeling in
                                their furniture. Always pay attention to details
                                and give clear communication for the customers.
                                Priority of our design is comfortability.
                            </p>
                        </div>
                        <div className="footer_right">
                            <div className="footer_right_item">
                                <h3>Support</h3>
                                <a href="">FAQ</a>
                                <a href="">Shipping & Returns</a>
                                <a href="">Care guide</a>
                                <a href="">Redeem warranty</a>
                            </div>
                            <div className="footer_right_item">
                                <h3>Social Media</h3>
                                <a href="">Instagram</a>
                                <a href="">Facebook</a>
                                <a href="">Twitter</a>
                                <a href="">TikTok</a>
                            </div>
                            <div className="footer_right_item">
                                <h3>About Us</h3>
                                <a href="">Our story</a>
                                <a href="">Designer</a>
                                <a href="">Craftmanship</a>
                                <a href="">Sustainability</a>
                            </div>
                        </div>
                    </section>
                </>
            );
    }
}

export default App;
