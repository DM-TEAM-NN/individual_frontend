import React, { useCallback, useMemo } from "react";

import Logo from "@images/Logo";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { StyledNavBar, StyledNavItem } from "./NavBarStyled";
import { NavBarProps } from "./NavBarTypes";

const NavBar = (props: NavBarProps) => {
  const navigate = useNavigate();

  const navigation = useMemo(() => {
    const navigationItems = ["Home", "About", "Contact", "Services"];
    return navigationItems.map((item) => (
      <Grid item>
        <StyledNavItem variant="body1">{item}</StyledNavItem>
      </Grid>
    ));
  }, []);

  const handleAuthClick = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <StyledNavBar>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item container spacing={4} justifyContent="center">
        {navigation}
      </Grid>
      <Grid item sx={{ minWidth: "100px" }}>
        <Button variant="contained" onClick={handleAuthClick}>
          Sign in
        </Button>
      </Grid>
    </StyledNavBar>
  );
};

export default NavBar;
