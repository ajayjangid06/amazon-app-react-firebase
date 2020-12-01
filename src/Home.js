import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
          alt=""
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id="4545323"
            title="Apple iPhone 11 (64GB, Black) [Locked] + Carrier Subscription"
            price={85500}
            image="https://m.media-amazon.com/images/I/71iO2R+CLjL.jpg"
            rating={4}
          />
          {/* Product */}
          <Product
            id="132155"
            title="Apple iPhone XS Max (64GB, Silver) [Locked] + Carrier Subscription"
            price={65500}
            image="https://m.media-amazon.com/images/I/71sITK2GB1L.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="45465"
            title="New Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Silver"
            price={93450}
            image="https://images-na.ssl-images-amazon.com/images/I/71BMVOs2xML._AC_SL1500_.jpg"
            rating={4}
          />
          {/* Product */}
          <Product
            id="564656"
            title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
            price={71000}
            image="https://images-na.ssl-images-amazon.com/images/I/71k3fJh5EwL._AC_SL1500_.jpg"
            rating={5}
          />
          {/* Product */}
          <Product
            id="547521"
            title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
            price={146000}
            image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="547521"
            title="SAMSUNG 75-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q60TAFXZA, 2020 Model)"
            price={91200}
            image="https://images-na.ssl-images-amazon.com/images/I/81fkfrkmjSL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
