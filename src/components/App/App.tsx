import React from "react";

import HeaderSection from "@components/HeaderSection";
import styled from "@emotion/styled";

const StyledAppContainer = styled("div")`
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledAppContainer>
      <HeaderSection />
    </StyledAppContainer>
  );
}

export default App;
