import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Item from "../components/Item";
import "./HomePage.css";
import axios from "axios";
import Banner from "../assets/images/Banner.png";

function HomePage() {
  const [items, setItems] = useState([]);
  const [latestItems, setLatestItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setLatestItems(res.data.slice(-4));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <div className="banner">
        <img src={Banner} alt="Banner" className="banner-image" />
        <div className="banner-text">
          <h1>Welcome to Our Store</h1>
          <p>Discover the latest trends and exclusive collections</p>
        </div>
      </div>

      <div className="latest-items-section">
        <h2 className="section-title">Latest Items</h2>
        <div className="latest-items">
          {latestItems.map((item) => (
            <Item
              key={item.id}
              Id={item.id}
              Img={item.image}
              Title={item.title}
              Price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="home-body">
        {items.map((item) => (
          <Item
            key={item.id}
            Id={item.id}
            Img={item.image}
            Title={item.title}
            Price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
