import React from "react";

import NavBar from "@components/NavBar";

import { HeaderSectionStyled } from "./HeaderSectionStyled";
import { HeaderProps } from "./HeaderSectionTypes";

const HeaderSection = (props: HeaderProps) => {
  return (
    <HeaderSectionStyled>
      <NavBar />
    </HeaderSectionStyled>
  );
};

export default HeaderSection;
