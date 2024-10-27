/* eslint-disable react/prop-types */
import React from "react";
import {
  BrandList,
  ContainerFeaturedHeader,
  HeaderTitle,
} from "./FeaturedProductStyled";

const FeaturedHeader = ({ headerTitle, brandList }) => {
  return (
    <ContainerFeaturedHeader>
      <HeaderTitle variant="h4">{headerTitle}</HeaderTitle>
      {brandList &&
        brandList.map((item) => <BrandList key={item}>{item}</BrandList>)}
    </ContainerFeaturedHeader>
  );
};

export default FeaturedHeader;
