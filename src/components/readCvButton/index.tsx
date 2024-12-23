import { FaSpaceShuttle } from "react-icons/fa";
import styled from "styled-components";
import { FONT_SIZES } from "../../utils/fontSizes";

const CURRICULUM_LINK =
  "https://drive.google.com/drive/folders/1SdPhbAyMdBvWKSjUuJNmpH4z7ufXoSg1?usp=sharing";

const ReadCVButton = () => {
  return (
    <ButtonContainer href={CURRICULUM_LINK} target="_blank">
      <button>
        <h2>
          <div className="shuttle-icon">
            <FaSpaceShuttle size={25} />
          </div>
          <p>Read CV</p>
        </h2>
      </button>
    </ButtonContainer>
  );
};

export default ReadCVButton;

const ButtonContainer = styled.a`
  text-decoration: none;
  font-family: "Montserrat", sans-serif;

  button {
    background: linear-gradient(
      155deg,
      var(--gradient-start),
      var(--primary) 50%,
      var(--gradient-end)
    );
    border: 0;
    border-radius: 100px;
    box-shadow: var(--shadow) 0 2px 30px 5px;
    box-sizing: border-box;
    display: flex;
    padding: 10px;
    touch-action: manipulation;
    cursor: pointer;
    transition: all 0.2s;
    font-size: ${FONT_SIZES[3]};
    margin-top: 40px;
    font-weight: normal;
  }

  button:active,
  button:hover {
    outline: 0;
    box-shadow: var(--shadow-hover) 0 2px 30px 7px;
  }

  button h2 {
    background-color: var(--terciary);
    padding: 16px 24px;
    border-radius: 100px;
    transition: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  button:hover h2 {
    background: none;
  }

  button:active {
    transform: scale(0.9);
  }

  .shuttle-icon {
    margin-top: 5px;
    transition: all ease 0.2s;
  }

  button:hover .shuttle-icon {
    transform: translateX(7px);
  }
`;
