import { Container, Grid2 } from '@mui/material'
import React from 'react'
import CateGoryItem from './CateGoryItem'
import cate from '../../assets/cate/cate.jpg'
import cate01 from '../../assets/cate/cate01.jpg'
import lap2 from '../../assets/cate/lap2.jpg'
import lap3 from '../../assets/cate/lap3.jpg'
const CategoryList = () => {
  return (
    <Container maxWidth={false}>
      <Grid2 container spacing={2}>
        <Grid2 size={8}>
          <CateGoryItem
            imgUrl={cate01}
            heighImg={'300px'}
            widthImg={'300px'}
            rightImg={'0px'}
            topImg={'-20px'}
            categoryName={'Technology'}
            descripstion={'Explore the Latest Innovations and Unleash the Power of Technology'}
            linkCategory={'Explore Category'}

          />
        </Grid2>
        <Grid2 size={4}>
          <CateGoryItem
            imgUrl={cate}
            heighImg={'150px'}
            widthImg={'150px'}
            rightImg={'-20px'}
            topImg={'-20px'}
            categoryName={'Technology'}
            descripstion={'Explore the Latest Innovations and Unleash the Power of Technology'}
            linkCategory={'Explore Category'}

          />
        </Grid2>
        <Grid2 size={4}>
          <CateGoryItem
            imgUrl={lap3}
            heighImg={'150px'}
            widthImg={'150px'}
            rightImg={'-20px'}
            topImg={'-20px'}
            categoryName={'Technology'}
            descripstion={'Explore the Latest Innovations and Unleash the Power of Technology'}
            linkCategory={'Explore Category'}

          />
        </Grid2>
        <Grid2 size={8}>
          <CateGoryItem
            imgUrl={lap2}
            heighImg={'400px'}
            widthImg={'400px'}
            rightImg={'-10px'}
            topImg={'-90px'}
            categoryName={'Technology'}
            descripstion={'Explore the Latest Innovations and Unleash the Power of Technology'}
            linkCategory={'Explore Category'}

          />
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default CategoryList