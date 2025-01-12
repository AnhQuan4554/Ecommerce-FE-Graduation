/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  BrandList,
  ContainerFeaturedHeader,
  HeaderTitle,
} from "./FeaturedProductStyled";

const FeaturedHeader = ({ headerTitle, brandList, setBrand }) => {
  const [valueDefault, setValueDefault] = useState(brandList?.[0]);
  return (
    <ContainerFeaturedHeader>
      <HeaderTitle variant="h4">{headerTitle}</HeaderTitle>
      {brandList &&
        brandList?.map((item) => (
          <BrandList
            className={`${valueDefault === item ? "selected" : ""}`}
            onClick={() => {
              setValueDefault(item);
              setBrand(item);
            }}
            key={item}
          >
            {item}
          </BrandList>
        ))}
    </ContainerFeaturedHeader>
  );
};

export default FeaturedHeader;
