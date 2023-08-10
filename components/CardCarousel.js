import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import CustomCard from "./Card";

//With Image


// const CardCarousel = ({ cards }) => {
//   return (
//     <CarouselProvider
//       naturalSlideWidth={100}
//       naturalSlideHeight={125}
//       totalSlides={cards.length}
//       infinite
//       isPlaying
//       backgroundColor="#000"
//     >
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}></div>
//       <Slider>
//         {cards.map((card, index) => (
//           <Slide index={index} key={`slide-${index}`}>
//             <CustomCard
//               imageSrc={card.imageSrc}
//               title={card.title}
//               description={card.description}
//             />
//           </Slide>
//         ))}
//       </Slider>
//       <DotGroup className="my-dots" style={{ position: "relative", bottom: "30px" }} />
//     </CarouselProvider>
//   );
// };

// export default CardCarousel;



//Without Image

// const CardCarousel = ({ cards }) => {
//   return (
//     <CarouselProvider
//       naturalSlideWidth={100}
//       naturalSlideHeight={125}
//       totalSlides={cards.length}
//       infinite
//       isPlaying
//       style={{ backgroundColor: "#000" }}
//     >
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Slider>
//           {cards.map((card, index) => (
//             <Slide index={index} key={`slide-${index}`}>
//               <CustomCard
//                 imageSrc={card.imageSrc}
//                 title={card.title}
//                 description={card.description}
//               />
//             </Slide>
//           ))}
//         </Slider>
//         <DotGroup className="my-dots" style={{ marginTop: "10px" }} />
//       </div>
//     </CarouselProvider>
//   );
// };

// export default CardCarousel;


const CardCarousel = ({ cards }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={200}
      naturalSlideHeight={100}
      totalSlides={cards.length}
      infinite
      isPlaying
      backgroundcolor="#000"
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}></div>
      <Slider>
        {cards.map((card, index) => (
          <Slide index={index} key={`slide-${index}`}>
            <CustomCard
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          </Slide>
        ))}
      </Slider>
      <DotGroup className="my-dots" style={{ position: "relative", bottom: "10px" }} />
    </CarouselProvider>
  );
};

export default CardCarousel;

