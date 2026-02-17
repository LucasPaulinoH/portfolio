import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { Language } from "../types/language";
import { useTranslation } from "react-i18next";

export interface LanguageContextType {
  selectedLanguage: Language;
  setSelectedLanguage: Dispatch<SetStateAction<Language>> | VoidFunction;
  handleChangeLanguage: (selectedLanguage?: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  selectedLanguage: Language.EN,
  setSelectedLanguage: () => {},
  handleChangeLanguage: () => {},
});

interface ILanguageProps {
  children: ReactNode;
}

export const LanguageContextProvider: React.FC<ILanguageProps> = ({
  children,
}) => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    language as Language,
  );

  const handleChangeLanguage = (selectedLanguage?: Language) => {
    const newLanguage =
      selectedLanguage === Language.PT ? Language.EN : Language.PT;

    changeLanguage(selectedLanguage || newLanguage);
    setSelectedLanguage(selectedLanguage || newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage, handleChangeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
