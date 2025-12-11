import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Link from "@docusaurus/Link";
import { designPatterns } from "../../data/design-patterns";

const DesignPatternCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      swiperRef.current?.slideNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      swiperRef.current?.slidePrev();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Design Patterns Carousel"
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, A11y, Keyboard]}
        spaceBetween={20}
        slidesPerView={"auto"}
        loop={false}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        speed={500}
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
    </div>
  );
};

export default DesignPatternCarousel
