import styled from "styled-components";
import { useLanguage } from "../../hooks/useLanguage";
import { GrLanguage } from "react-icons/gr";
import { Language, languageLabelsMapping } from "../../types/language";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { handleChangeLanguage } = useLanguage();
  const {
    i18n: { language: selectedLanguage },
  } = useTranslation();

  return (
    <OutterContainer>
      <div className="paste-button">
        <GrLanguage style={{ cursor: "pointer" }} />

        <div className="dropdown-content">
          {Object.entries(languageLabelsMapping).map(([value, label]) => (
            <a
              key={value}
              className={selectedLanguage === value ? "active" : ""}
              onClick={() => handleChangeLanguage(value as Language)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </OutterContainer>
  );
};

const OutterContainer = styled.div`
  .dropdown-content {
    display: none;
    font-size: 14px;
    position: absolute;
    z-index: 1;
    background-color: var(--terciary);
    border-radius: 0px;
  }

  .dropdown-content a {
    padding: 8px 10px;
    text-decoration: none;
    display: block;
    transition: 0.1s;
    cursor: pointer;
  }

  .dropdown-content a:hover {
    color: var(--primary);
  }

  .dropdown-content a.active {
    background-color: var(--primary);
    color: var(--white);
    border-radius: 0px;
  }

  .paste-button:hover .dropdown-content {
    display: block;
  }
`;

export default LanguageSelector;
