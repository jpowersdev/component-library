import { position, border } from "styled-system";
import styled from "@emotion/styled";
import { Box, Flex } from "rebass";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { Link } from "src/components/NextLink";
import { useScrollTop } from "src/hooks/useScrollTop";
import { css } from "@emotion/core";
import { useSpring } from "react-spring";

const NavIcon = styled(Box)`
  &:after,
  &:before,
  & > div {
    border-radius: 3px;
    content: "";
    display: block;
    height: 5px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }

  &.active:after,
  &.active:before,
  &.active div {
    margin: 7px 0;
  }

  &.active:before {
    transform: translateY(12px) rotate(135deg);
  }

  &.active:after {
    transform: translateY(-12px) rotate(-135deg);
  }

  &.active div {
    transform: scale(0);
  }
`;

const HamburgerMenu = ({ active, toggle, ...props }) => (
  <Box height="80%" width={40} mx={2} {...props} onClick={() => toggle()}>
    <NavIcon
      sx={{
        "&:after": {
          backgroundColor: "grey"
        },
        "&:before": {
          backgroundColor: "grey"
        }
      }}
      className={active ? "active" : ""}
    >
      <Box bg="grey" />
    </NavIcon>
  </Box>
);

const NavList = styled(Flex)(position, border);

const Nav = styled(Flex)(
  css`
    &.active {
      height: 80%;
    }
  `,
  position,
  border
);

const NavLink = ({ brand, shrink, ...props }: any) => {
  return (
    <Link
      {...props}
      variant="nav"
      fontSize={brand ? [3, 4, 5, 6] : [2, 3, 4, 5]}
    />
  );
};

const NavBar = () => {
  const [expanded, set] = useState(false);
  return (
    <Nav
      p={2}
      color="muted"
      bg="black"
      alignItems="center"
      position={["relative", "sticky"]}
      top={0}
      zIndex={99999}
    >
      <NavLink brand href="/" p={2} fontWeight="bold">
        Rebass
      </NavLink>
      <Box mx="auto" />

      <HamburgerMenu
        display={["block", "none"]}
        active={expanded}
        toggle={() => set(v => !v)}
      />
      <Box display={[expanded ? "block" : "none", "block"]}>
        <NavList
          top="100%"
          left={0}
          right={0}
          p={[2, 0]}
          position={["absolute", "static"]}
          color={["white"]}
          bg={["black", "transparent"]}
          flexDirection={["column", "row"]}
          borderTop={["2px solid", 0]}
          borderColor="muted"
        >
          <NavLink href="#">Small</NavLink>
          <NavLink href="#">Small</NavLink>
          <NavLink href="#">Small</NavLink>
          <NavLink href="#">Small</NavLink>
          <NavLink href="#">Small</NavLink>
        </NavList>
      </Box>
    </Nav>
  );
};

export { NavBar };
