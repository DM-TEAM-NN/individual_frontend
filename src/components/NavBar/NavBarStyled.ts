import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import { NavBarProps } from "./NavBarTypes";

export const StyledNavBar = styled.div<NavBarProps>`
  max-width: 1120px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 60px auto;
`;

export const StyledNavItem = styled(Typography)`
  cursor: pointer;
  &:hover {
    color: #239ad6;
  }
`;
