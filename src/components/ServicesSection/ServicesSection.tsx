import { useMemo } from "react";

import ServiceCard from "@components/ServiceCard/ServiceCard";
import { Grid } from "@mui/material";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ServicesSectionStyled, TitleStyled } from "./ServicesSectionStyled";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    name: "Создать стартап",
    description: "Создам стартап за вас",
    price: 100.0,
  },
  {
    name: "Ведение бизнеса",
    description: "Реабилитирую ваш бизнес",
    price: 100.0,
  },
  {
    name: "Создать стартап",
    description: "Создам стартап за вас",
    price: 100.0,
  },
  {
    name: "Ведение бизнеса",
    description: "Реабилитирую ваш бизнес",
    price: 100.0,
  },
];

const ServicesSection = () => {
  const servicesCards = useMemo(() => {
    return services.map((service) => (
      <SwiperSlide>
        <Grid item>
          <ServiceCard
            name={service.name}
            description={service.description}
            price={service.price}
          />
        </Grid>
      </SwiperSlide>
    ));
  }, []);

  return (
    <ServicesSectionStyled>
      <TitleStyled variant="h2">Наши услуги</TitleStyled>
      <Swiper
        className="mySwiper"
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {servicesCards}
      </Swiper>
    </ServicesSectionStyled>
  );
};
export default ServicesSection;
