import React, { useState } from "react";
import HeroSliderDemo from "src/demo/HeroSlider";
import { Box, Card, Heading, Text } from "rebass";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { css } from "@emotion/core";
import { NavBar } from "src/components/Navigation";
import { Tiles } from "@rebass/layout";

const OutlineCard = props => (
  <Card
    {...props}
    //width={[200, 300, 400]}
    mx={"auto"}
    sx={{
      boxShadow: "small"
    }}
  />
);

const BigOlCard = () => (
  <OutlineCard p={3} mx="auto">
    <Heading
      bg="highlight"
      as="h4"
      fontSize={[2, 4]}
      my={[2, 3]}
      color="primary"
    >
      Heading 4
    </Heading>
    <Text lineHeight={1.5}>
      Meatloaf pork belly hamburger drumstick short loin prosciutto. Rump
      leberkas corned beef, pancetta fatback pork burgdoggen. Hamburger flank
      kevin turkey pork chop corned beef meatball ham pork loin drumstick.
    </Text>
  </OutlineCard>
);

import { grid } from "styled-system";
const GridTiles = styled(Tiles)(grid);

const Home = () => (
  <div>
    <NavBar />
    <HeroSliderDemo />
    <Box p={3}>
      <Heading as="h1" fontSize={[5, 7]}>
        Heading 1
      </Heading>
      <Heading as="h1" fontSize={[4, 6]}>
        Heading 2
      </Heading>
      <Heading as="h3" fontSize={[3, 5]}>
        Heading 3
      </Heading>
    </Box>
    <GridTiles columns={[1, 2, null, null, 4]} gridGap={2} m={2}>
      <BigOlCard />
      <BigOlCard />
      <BigOlCard />
      <BigOlCard />
    </GridTiles>
    <GridTiles columns={[1, 2, null, null, 4]} gridGap={2} m={2}>
      <BigOlCard />
      <BigOlCard />
      <BigOlCard />
      <BigOlCard />
    </GridTiles>
    <GridTiles columns={[1, 2, null, null, 4]} gridGap={2} m={2}>
      <BigOlCard />
      <BigOlCard />
      <BigOlCard />
      <BigOlCard />
    </GridTiles>
  </div>
);

export default Home;
