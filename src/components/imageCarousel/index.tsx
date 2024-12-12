import { CSSProperties, useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../theme/palette";

interface ImageCarouselProps {
  imageUrls: string[];
  arrowIconSize: number;
}

const ImageCarousel = (props: ImageCarouselProps) => {
  const { imageUrls, arrowIconSize: size } = props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImageClick = () => {
    setCurrentImageIndex(
      currentImageIndex === imageUrls.length - 1
        ? 0
        : (prevImageIndex) => prevImageIndex + 1
    );
  };

  const handlePreviousImageClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0
        ? imageUrls.length - 1
        : (prevImageIndex) => prevImageIndex - 1
    );
  };

  return (
    <Container>
      <img
        src={imageUrls[currentImageIndex]}
        loading="lazy"
        style={styles.image}
        alt={`${currentImageIndex + 1}`}
      />
      {imageUrls.length > 1 ? (
        <>
          <CarouselStepContainer>
            {imageUrls.map((_, index) => (
              <GoDotFill
                key={index}
                fill={
                  currentImageIndex === index ? PRIMARY_COLOR : SECONDARY_COLOR
                }
                style={{ padding: 0, margin: 0 }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </CarouselStepContainer>
          <LeftButtonContainer onClick={handlePreviousImageClick}>
            <FaAngleLeft size={size} className="carousel-icon" />
          </LeftButtonContainer>
          <RightButtonContainer onClick={handleNextImageClick}>
            <FaAngleRight size={size} className="carousel-icon" />
          </RightButtonContainer>
        </>
      ) : null}
    </Container>
  );
};

export default ImageCarousel;

const styles = {
  image: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    borderRadius: "8px",
  } as CSSProperties,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 6/3;
  position: relative;
`;

const CarouselStepContainer = styled.div`
  position: absolute;
  width: 100%;
  justify-content: center;
  bottom: 0;
  display: flex;
`;

const LeftButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  left: 5px;
  transition: all ease 0.15s;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0;

  .carousel-icon {
    fill: var(--primary);
    width: 25px;
    height: 25px;

    &:hover {
      fill: var(--white);
    }
  }

  &:hover {
    background-color: var(--shadow-hover);
    border-radius: 50%;
  }
  cursor: pointer;
`;

const RightButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5px;
  border-radius: 50%;
  transition: all ease 0.15s;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0;

  .carousel-icon {
    fill: var(--primary);
    width: 25px;
    height: 25px;

    &:hover {
      fill: var(--white);
    }
  }

  &:hover {
    background-color: var(--shadow-hover);
    border-radius: 50%;
  }
  cursor: pointer;
`;
