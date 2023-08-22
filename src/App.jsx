import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectFlip,
} from "swiper/modules";

import slide_image_1 from "./assets/images/img_1.png";
import slide_image_2 from "./assets/images/img_2.png";
import slide_image_3 from "./assets/images/img_3.png";
import slide_image_4 from "./assets/images/img_4.png";
import slide_image_5 from "./assets/images/img_5.png";
import slide_image_6 from "./assets/images/img_6.png";
import slide_image_7 from "./assets/images/img_7.png";
import slide_image_8 from "./assets/images/img_8.png";
import slide_image_9 from "./assets/images/img_9.png";
import slide_image_10 from "./assets/images/img_10.png";

function App() {
  const [flippedStates, setFlippedStates] = useState(new Array(10).fill(false)); // Assuming you have 7 slides/cards

  const handleCardClick = (index) => {
    const newFlippedStates = [...flippedStates];
    newFlippedStates[index] = !newFlippedStates[index];
    setFlippedStates(newFlippedStates);
  };

  const CardStyling = ({ title, role, description, image }) => {
    return (
      <div className="card">
        <div className="front">
          <img src={image} alt="slide_image" />
        </div>
        <div className="back">
          <div className="back-body">
            <h1 className="back-title">{title}</h1>
            <p className="back-sub-title">{role}</p>
            <p className="back-info">{description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <h3 className="heading">- ZEGO -</h3>
      <h4 className="heading">Welcome to the B2B family card selection</h4>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, EffectFlip]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[0] ? "flipped" : ""}`}
            onClick={() => handleCardClick(0)}
          >
            <CardStyling
              title="Marc"
              role="Senior systems engineer"
              description=" This is the Marc. Has a real hearty chuckle. The best kind
              of laugh! Also has some funky wall art."
              image={slide_image_1}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[1] ? "flipped" : ""}`}
            onClick={() => handleCardClick(1)}
          >
            <CardStyling
              title="Stu"
              role="Principle engineer"
              description="  This is the Stu. Kinda freaks me out how good of a listener he
              is. Brownie points for Fox's amazing drawing skills"
              image={slide_image_2}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[2] ? "flipped" : ""}`}
            onClick={() => handleCardClick(2)}
          >
            <CardStyling
              title="Sean"
              role="Senior systems engineer"
              description="  This is the Sean. Looks like Mort from Madagascar, if you
              know, you know. A loveable person across the boards"
              image={slide_image_3}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[3] ? "flipped" : ""}`}
            onClick={() => handleCardClick(3)}
          >
            <CardStyling
              title="Rodrigo"
              role="Senior front-end engineer"
              description="This is the Rodrigo. A proper thinker, can't you tell already
              :D If you want to challenge, he is the guy to go to for the
              extra spice"
              image={slide_image_4}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[4] ? "flipped" : ""}`}
            onClick={() => handleCardClick(4)}
          >
            <CardStyling
              title="Chris"
              role="Senior back-end engineer"
              description="This is the Chris. Appreciation for his witty commentary. I
              give his humour 10/10 - clever and slightly dry, the best
              combo really"
              image={slide_image_5}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[5] ? "flipped" : ""}`}
            onClick={() => handleCardClick(5)}
          >
            <CardStyling
              title="Rodo"
              role="Senior software engineer"
              description="This is the Rodo. My first impression was that he sounds
              exactly like Gru from Dispicable Me and I cannot unsee it.
              Awkward charm energy."
              image={slide_image_6}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[6] ? "flipped" : ""}`}
            onClick={() => handleCardClick(6)}
          >
            <CardStyling
              title="Vaneet"
              role="Senior software engineer and Tech Lead"
              description="   This is the Rodo. My first impression was that he sounds
              exactly like Gru from Dispicable Me and I cannot unsee it.
              Awkward charm energy."
              image={slide_image_7}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[7] ? "flipped" : ""}`}
            onClick={() => handleCardClick(7)}
          >
            <CardStyling
              title="Lefteris"
              role="Senior software engineer"
              description="something"
              image={slide_image_8}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[8] ? "flipped" : ""}`}
            onClick={() => handleCardClick(8)}
          >
            <CardStyling
              title="This is Ozzy"
              role="Senior front-end engineer"
              description="soemthing"
              image={slide_image_9}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`slide-content ${flippedStates[9] ? "flipped" : ""}`}
            onClick={() => handleCardClick(9)}
          >
            <CardStyling
              title="This is Andrezj"
              role="Senior back-end engineer"
              description="   something."
              image={slide_image_10}
            />
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
