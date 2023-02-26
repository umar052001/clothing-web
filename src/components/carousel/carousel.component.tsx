import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

interface CarouselProps {
  items: string[];
}

const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CarouselItem = styled.img`
  max-width: 100%;
  display: block;
  animation: ${fade} 0.5s ease-in;
  object-fit: contain;
  height: 250px;
  width: 400px;
  border-radius: 50px;
  box-shadow: 10px 5px 2px 0px;
`;

const CarouselDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const CarouselDot = styled.div<{ active: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin: 0 0.2rem;
  background-color: ${(props) => (props.active ? "#000" : "#ccc")};
  cursor: pointer;
`;

const items = [
  "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex >= items.length ? 0 : nextIndex);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <CarouselContainer>
      <CarouselItem src={items[currentIndex]} alt="Carousel item" />
      <CarouselDots>
        {items.map((item, index) => (
          <CarouselDot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
};

export default Carousel;
