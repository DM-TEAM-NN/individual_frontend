import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const AboutSectionStyled = styled("div")`
  max-width: 1120px;
  width: 100%;
  display: flex;
  margin: 474px auto 0 auto;
  flex-direction: column;
`;

export const AboutSectionCategory = styled(Typography)`
  text-transform: uppercase;
  color: #92a0b3;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 2.24px;
`;

export const AboutSectionTitle = styled(Typography)`
  white-space: pre-line;
`;

export const AboutSectionSubtitle = styled(Typography)`
  color: #445b78;
  max-width: 470px;
  width: 100%;
`;

export const AboutSectionImage = styled("img")`
  max-width: 804px;
  width: 100%;
`;
