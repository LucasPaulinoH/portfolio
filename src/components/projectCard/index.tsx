import { IProjectCard } from "../../types/projects";
import styled from "styled-components";
import { shortenLargeTexts } from "../../utils/stringUtils";
import { FONT_SIZES } from "../../utils/fontSizes";
import ImageCarousel from "../imageCarousel";

const ProjectCard = (props: IProjectCard) => {
  const { images, title, description, technologies, link } = props;

  return (
    <CardContainer className="card">
      <ImageCarouselContainer>
        <ImageCarousel imageUrls={images} arrowIconSize={30} />
      </ImageCarouselContainer>
      <ContentContainer href={link}>
        <h3 className="title">{title}</h3>
        <span>{shortenLargeTexts(description, 100)}</span>
        <TechnologiesContainer>
          {technologies.map((technology, index) => (
            <TechnologyChip key={index}>{technology}</TechnologyChip>
          ))}
        </TechnologiesContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default ProjectCard;

const ImageCarouselContainer = styled.a`
  height: 250px;
`;

const CardContainer = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  white-space: initial;
  text-align: justify;
  cursor: pointer;

  :hover .title {
    color: var(--primary);
  }

  .title {
    transition: color ease 0.15s;
  }
`;

const ContentContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 14px;
  text-decoration: none;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: flex-start;
`;

const TechnologyChip = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
  font-size: ${FONT_SIZES[4]};
`;
