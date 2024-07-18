import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mb-4">Our Story</h2>
            <p className="text-justify">
            Welcome to our Clothing Store, where style meets comfort, and every thread tells a story.

            <p>Our journey in fashion began with a similar passion—to curate the 
            trendiest clothing, accessories, and wardrobe essentials for all 
            occasions. Whether you’re looking for everyday basics, elegant 
            evening wear, or athleisure that seamlessly transitions from gym to 
            street, we’ve got you covered.</p>
            </p>
            <p className="text-justify">
            So go ahead, explore our virtual aisles, discover your next 
            favorite piece, and let your wardrobe be an extension of your
            personality. Happy shopping!
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="/images/about.jpeg"
              alt="About Us"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p className="text-justify">
              Our mission is to provide you with the best fitness products that
              support your journey to a healthier, more active lifestyle. We
              strive to offer a wide range of high-quality items that cater to
              various fitness preferences and goals.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Why Choose Us?</h2>
            <p className="text-justify">
              At Ecommerce App, we stand out for our commitment to customer
              satisfaction. We offer:
            </p>
            <ul>
              <li>Top-quality products from trusted brands</li>
              <li>Exceptional customer service</li>
              <li>Fast and secure delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
