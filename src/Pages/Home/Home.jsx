import React from "react";
import Products from "./Products/Products";
import Newsletter from "./Newsletter/Newsletter";
import Contact from "./Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
        <title>Home || Revere</title>
      </Helmet> */}
      <Products></Products>
      <Newsletter></Newsletter>
      <Contact></Contact>
    </div>
  );
};

export default Home;
