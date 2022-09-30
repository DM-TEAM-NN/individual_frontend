import { Button, Grid, Typography } from "@mui/material";

import { StyledServiceCard, StyledButtonContainer } from "./ServiceCardStyled";

type ServiceCardProps = {
  name: string;
  description: string;
  price: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,
  price,
}) => {
  return (
    <StyledServiceCard item>
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "16px" }}
      >
        <Grid item>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">{description}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h4">{price}$</Typography>
        </Grid>
        <StyledButtonContainer item>
          <Button variant="contained" fullWidth>
            BUY
          </Button>
        </StyledButtonContainer>
      </Grid>
    </StyledServiceCard>
  );
};
export default ServiceCard;
