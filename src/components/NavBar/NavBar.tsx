import React, { useMemo } from "react";

import Logo from "@images/Logo";
import { Button, Grid, Typography } from "@mui/material";

import { StyledNavBar } from "./NavBarStyled";
import { NavBarProps } from "./NavBarTypes";

const NavBar = (props: NavBarProps) => {
  const navigation = useMemo(() => {
    const navigationItems = ["Home", "About", "Contact", "Services"];
    return navigationItems.map((item) => (
      <Grid item>
        <Typography variant="body1">{item}</Typography>
      </Grid>
    ));
  }, []);

  return (
    <StyledNavBar>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item container spacing={4} justifyContent="center">
        {navigation}
      </Grid>
      <Grid item sx={{ minWidth: "100px" }}>
        <Button variant="contained">Sign in</Button>
      </Grid>
    </StyledNavBar>
  );
};

export default NavBar;
