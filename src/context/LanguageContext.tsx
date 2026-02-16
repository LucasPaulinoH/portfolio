import { createContext, ReactNode, useState } from "react";
import { Language } from "../types/language";
import { useTranslation } from "react-i18next";

export interface LanguageContextType {
  handleChangeLanguage: VoidFunction;
}

export const LanguageContext = createContext<LanguageContextType>({
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

  const handleChangeLanguage = () => {
    const newLanguage =
      selectedLanguage === Language.PT ? Language.EN : Language.PT;

    changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
