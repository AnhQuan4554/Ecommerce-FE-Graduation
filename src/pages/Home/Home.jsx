import React from "react";
import Banner from "../../components/banner/Banner";
import CategoryList from "../../components/category-list/CategoryList";
import BestSeller from "../../components/best-seller/BestSeller";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <BestSeller />
    </div>
  );
};

export default Home;
