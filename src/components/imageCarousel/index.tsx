import { CSSProperties, useState } from "react";
import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../theme/palette";

interface ImageCarouselProps {
  imageUrls: string[];
  size: number;
}

const ImageCarousel = (props: ImageCarouselProps) => {
  const { imageUrls, size } = props;

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
        alt={`${currentImageIndex + 1}`}
        loading="lazy"
        style={styles.image}
      />
      <CarouselStepContainer>
        {imageUrls.map((_, index) => (
          <GoDotFill
            key={index}
            fill={currentImageIndex === index ? PRIMARY_COLOR : SECONDARY_COLOR}
            style={{ padding: 0, margin: 0 }}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </CarouselStepContainer>
      <LeftButtonContainer onClick={handlePreviousImageClick}>
        <FaAngleLeft size={size} />
      </LeftButtonContainer>
      <RightButtonContainer onClick={handleNextImageClick}>
        <FaAngleRight size={size} />
      </RightButtonContainer>
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
  } as CSSProperties,
};

const Container = styled.div`
  width: 100%;
  height: 200px;
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
  padding: 5px;
  justify-content: center;
  align-items: center;
  left: 5px;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  cursor: pointer;
`;

const RightButtonContainer = styled.div`
  position: absolute;

  top: 50%;
  transform: translateY(-50%);
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  right: 5px;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
  cursor: pointer;
`;
