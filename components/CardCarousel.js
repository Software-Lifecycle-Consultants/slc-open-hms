import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomCard from "./Card";

const CardCarousel = ({ cards }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={cards.length}
    >
      <Slider>
        {cards.map((card, index) => (
          <Slide index={index} key={`slide-${index}`}>
            <CustomCard imageSrc={card.imageSrc} title={card.title} description={card.description} />
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default CardCarousel;
