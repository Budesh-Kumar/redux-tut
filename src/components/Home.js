import React from "react";

const Home = () => {
    return (
        <div>

            <div className="add-to-cart">
                <img src="https://iconarchive.com/download/i87054/graphicloads/colorful-long-shadow/Cart-add.ico" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.shopify.com/s/files/1/0083/6380/2720/products/147_1_b957c79c-11a8-40fd-92ab-179b95ad6a9d.jpg?v=1656510968" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
