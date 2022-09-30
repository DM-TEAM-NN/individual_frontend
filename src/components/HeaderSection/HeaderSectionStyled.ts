import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeaderSectionStyled = styled("div")`
  max-width: 1120px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

export const HeaderSectionTitleStyled = styled(Typography)`
  white-space: pre-line;
  font-weight: 700;
`;

export const HeaderSectionSubTitleStyled = styled(Typography)`
  white-space: pre-line;
  margin-top: 64px;
  color: #445b78;
`;

export const HeaderSectionImage = styled("div")`
  position: absolute;
  max-width: 1120px;
  width: 100%;
  display: flex;
  justify-content: center;
  max-height: 1194px;
  height: 100%;
  z-index: -1;
`;
