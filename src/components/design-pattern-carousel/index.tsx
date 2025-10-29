import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Link from "@docusaurus/Link";
import { designPatterns } from "../../data/design-patterns";

const DesignPatternCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, A11y]}
      spaceBetween={20}
      slidesPerView={"auto"}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={3000}
      freeMode={true}
      navigation
      grabCursor
      style={
        {
          padding: "5rem 0",
          "--swiper-navigation-color": "var(--ifm-color-primary)",
        } as React.CSSProperties
      }
      aria-label="Design Patterns Carousel"
    >
      {designPatterns.map(({ name, description, path }, idx) => (
        <SwiperSlide
          key={idx}
          style={{
            width: "220px",
            boxShadow: "var(--ifm-shadow-md)",
            borderRadius: "8px",
            backgroundColor: "var(--ifm-card-background)",
            padding: "1rem",
            boxSizing: "border-box",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <Link
            to={"/docs/" + path}
            style={{ textDecoration: "none", color: "inherit" }}
            tabIndex={0}
            aria-label={`${name}: ${description}`}
          >
            <h3 style={{ margin: "0 0 8px 0" }}>{name}</h3>
            <p
              style={{
                margin: 0,
                color: "var(--ifm-color-gray-600)",
                fontSize: "0.9rem",
              }}
            >
              {description}
            </p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DesignPatternCarousel;
