import React from "react";

import NavBar from "@components/NavBar";
import MainSectionBg from "@images/MainSectionBg/MainSectionBg";

import {
  HeaderSectionStyled,
  HeaderSectionTitleStyled,
  HeaderSectionSubTitleStyled,
  HeaderSectionImage,
} from "./HeaderSectionStyled";

const HeaderSection = () => {
  const title = "A better way to \n build modern \n apps at scale.";
  const subtitle =
    "Our suite of developer-friendly products helps you build, secure, \n and deliver enterprise-grade apps on any platform—with support \n from the Ionic team every step of the way.";
  return (
    <HeaderSectionStyled>
      <NavBar />
      <HeaderSectionTitleStyled variant="h1">{title}</HeaderSectionTitleStyled>
      <HeaderSectionSubTitleStyled variant="subtitle1">
        {subtitle}
      </HeaderSectionSubTitleStyled>
      <HeaderSectionImage>
        <MainSectionBg />
      </HeaderSectionImage>
    </HeaderSectionStyled>
  );
};

export default HeaderSection;
