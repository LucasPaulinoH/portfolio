import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locale/en.json";
import pt from "./locale/pt.json";

i18next.use(initReactI18next).init({
  resources: {
    en: { ...en },
    pt: { ...pt },
  },
  lng: "en",
});
