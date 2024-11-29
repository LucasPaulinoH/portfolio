import { IProjectCard } from "../../types/projects";
import styled from "styled-components";
import { shortenLargeTexts } from "../../utils/stringUtils";
import { PRIMARY_COLOR } from "../../theme/palette";
import { FONT_SIZES } from "../../utils/fontSizes";

const ProjectCard = (props: IProjectCard) => {
  const { images, title, description, technologies } = props;

  return (
    <CardContainer className="card">
      <img src={images[0]} alt="preview img" />
      <ContentContainer>
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
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
