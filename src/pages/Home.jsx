import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const heroBoxes = [
  {
    image: '/img/headphones.jpeg',
    title: 'Latest Headphones',
    link: '/product/1',
    btnText: 'Shop Now',
  },
  {
    image: '/img/smartwatch.jpeg',
    title: 'Smart Watches',
    link: '/product/2',
    btnText: 'Discover',
  },
  {
    image: '/img/speaker.jpeg',
    title: 'Bluetooth Speakers',
    link: '/product/3',
    btnText: 'View Deals',
  },
  
];


const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2999,
    image: '/img/headphones.jpeg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 4999,
    image: '/img/smartwatch.jpeg',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 1999,
    image: '/img/speaker.jpeg',
  },
  {
    id: 4,
    name: 'Fitness Tracker',
    price: 2499,
    image: '/img/fitness.jpeg',
  },
];


const features = [
  {
    icon: "fas fa-shipping-fast",
    title: "Fast Delivery",
    desc: "Get your products delivered quickly and safely.",
  },
  {
    icon: "fas fa-rupee-sign",
    title: "Best Prices",
    desc: "Unbeatable prices on all your favorite gadgets.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Secure Payments",
    desc: "Your transactions are protected and encrypted.",
  },
  {
    icon: "fas fa-headset",
    title: "24/7 Support",
    desc: "We’re here to help, anytime you need us.",
  },
];


const testimonials = [
  {
    name: "Amit Sharma",
    text: "ShopEase made my shopping experience so smooth! Fast delivery and great support.",
    avatar: "/img/user1.jpg",
  },
  {
    name: "Priya Singh",
    text: "Loved the quality of the products. Will definitely shop again!",
    avatar: "/img/user2.jpg",
  },
  {
    name: "Rahul Verma",
    text: "Best prices and amazing variety. Highly recommended!",
    avatar: "/img/user3.jpg",
  },
];

function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIdx(
      testimonialIdx === 0 ? testimonials.length - 1 : testimonialIdx - 1
    );
  };

  
  const heroBgImage = '/img/background.jpeg'; 

  return (
    <div className="home-page">
      
      <section
        className="hero-multi"
        style={{
          backgroundImage: `linear-gradient(rgba(34,34,34,0.7), rgba(78,84,200,0.7)), url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1>Welcome to <span>ShopEase</span></h1>
        <p className="hero-subtitle">Find the best gadgets for your lifestyle!</p>
        <div className="hero-boxes">
          {heroBoxes.map((box, idx) => (
            <div className="hero-box" key={idx}>
              <img src={box.image} alt={box.title} />
              <div className="hero-box-content">
                <h3>{box.title}</h3>
                <Link to={box.link} className="hero-box-btn">{box.btnText}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="why-shop">
        <h2>Why Shop With Us?</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <i className={feature.icon}></i>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
            </div>
          ))}
        </div>
      </section>

     
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-card">
          <button className="testimonial-nav" onClick={prevTestimonial}>&lt;</button>
          <div className="testimonial-content">
            <img src={testimonials[testimonialIdx].avatar} alt={testimonials[testimonialIdx].name} className="testimonial-avatar" />
            <p className="testimonial-text">"{testimonials[testimonialIdx].text}"</p>
            <p className="testimonial-name">- {testimonials[testimonialIdx].name}</p>
          </div>
          <button className="testimonial-nav" onClick={nextTestimonial}>&gt;</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
