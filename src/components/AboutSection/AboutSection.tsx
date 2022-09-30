import { Grid } from "@mui/material";

import {
  AboutSectionStyled,
  AboutSectionCategory,
  AboutSectionSubtitle,
  AboutSectionImage,
  AboutSectionTitle,
} from "./AboutSectionStyled";
const AboutSection = () => {
  const title = "Seamless \n cross-platform \n mobile \n development.";

  return (
    <AboutSectionStyled>
      <Grid container justifyContent="space-between">
        <Grid item container direction="column" spacing={2} md={6}>
          <Grid item>
            <AboutSectionCategory variant="subtitle1">
              Overview
            </AboutSectionCategory>
          </Grid>
          <Grid item>
            <AboutSectionTitle variant="h2">{title}</AboutSectionTitle>
          </Grid>
          <Grid item>
            <AboutSectionSubtitle variant="subtitle1">
              Let’s be honest. When it comes to mobile app experiences, the bar
              has been set high. In today’s world, people expect seamless,
              secure, lightning-fast apps that are fine-tuned to their
              particular needs. If you can’t deliver that kind of mobile app
              experience, you can’t expect to build out your business.
            </AboutSectionSubtitle>
          </Grid>
          <Grid item>
            <AboutSectionSubtitle variant="subtitle1">
              For enterprise developers aiming to deliver a seamless digital
              experience that follows them wherever they are, Ionic is here to
              help. Our powerful tools and services make it easy to deliver
              stunning mobile experiences across iOS, Android, and the Web—all
              with a single codebase that works everywhere. Move fast, spend
              less, create more, and build better.
            </AboutSectionSubtitle>
          </Grid>
        </Grid>
        <Grid item container md={6}>
          <AboutSectionImage
            src="./AboutSection.png"
            alt="PhoneImage"
          ></AboutSectionImage>
        </Grid>
      </Grid>
    </AboutSectionStyled>
  );
};
export default AboutSection;
