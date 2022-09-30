import AboutSection from "@components/AboutSection/AboutSection";
import HeaderSection from "@components/HeaderSection";
import ServicesSection from "@components/ServicesSection/ServicesSection";
import styled from "@emotion/styled";
const MainPage = () => {
  const StyledAppContainer = styled("div")`
    max-width: 1440px;
    margin: 0 auto;
  `;

  return (
    <StyledAppContainer>
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
    </StyledAppContainer>
  );
};
export default MainPage;
