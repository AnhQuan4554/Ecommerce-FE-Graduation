import React from "react";
import Banner from "../../components/banner/Banner";
import CategoryList from "../../components/category-list/CategoryList";
import BestSeller from "../../components/best-seller/BestSeller";
import FeaturedPhone from "../../components/FeaturedProduct/FeaturedPhone";
import FeaturedLaptop from "../../components/FeaturedProduct/FeaturedLaptop";
import StudentPromotion from "../../components/Promotions/StudentPromotion";

const Home = () => {
  return (
    <div>
      <Banner />
      <CategoryList />
      <BestSeller />
      <FeaturedPhone />
      <FeaturedLaptop />
      <StudentPromotion />
    </div>
  );
};

export default Home;
