import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextType,
} from "../context/LanguageContext";

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) throw new Error("Error loading LanguageContext");

  return context;
};
