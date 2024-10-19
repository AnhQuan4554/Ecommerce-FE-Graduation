/* eslint-disable react/prop-types */
import React from "react";
import {
  ContainerContentStyled,
  ImgCateforyItemStyled,
  NameCategoryStyled,
  WrapCategoryItemStyled,
} from "./CategoryList.styled";
import { Link, Typography } from "@mui/material";

const CateGoryItem = ({
  imgUrl,
  widthImg,
  heighImg,
  categoryName,
  descripstion,
  linkCategory,
  rightImg,
  topImg,
}) => {
  return (
    <WrapCategoryItemStyled>
      <ContainerContentStyled>
        <NameCategoryStyled variant="h4">{categoryName}</NameCategoryStyled>
        <Typography sx={{ maxWidth: "350px" }}>{descripstion}</Typography>
        <Typography>
          <Link>{linkCategory}</Link>
        </Typography>
      </ContainerContentStyled>
      <ImgCateforyItemStyled
        widthImg={widthImg}
        heighImg={heighImg}
        rightImg={rightImg}
        topImg={topImg}
        src={imgUrl}
      />
    </WrapCategoryItemStyled>
  );
};

export default CateGoryItem;
