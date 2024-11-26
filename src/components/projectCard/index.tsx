import { IProjectCard } from "../../types/projects";
import styled from "styled-components";
import ImageCarousel from "../imageCarousel";
import { shortenLargeTexts } from "../../utils/stringUtils";

const ProjectCard = (props: IProjectCard) => {
  const { images, title, description, technologies } = props;

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <ImageCarousel imageUrls={images} size={25} />
          <h3>{title}</h3>
          <p>{shortenLargeTexts(description, 133)}</p>
          <TechnologiesContainer>
            {technologies.map((technology, index) => (
              <TechnologyChip key={index}>{technology}</TechnologyChip>
            ))}
          </TechnologiesContainer>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default ProjectCard;

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 370px;
    padding: 15px 15px 30px 15px;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(8px);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    text-align: justify;
    width: 100%;
    height: 100%;
    background: none;
  }
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: flex-start;
`;

const TechnologyChip = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 15px;
`;
