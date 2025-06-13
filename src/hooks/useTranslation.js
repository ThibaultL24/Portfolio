import { useContext } from "react";
import { LanguageContext } from "../shared/contexts";
import { translations } from "../translations";

export const useTranslation = () => {
  const { isEnglish } = useContext(LanguageContext);
  const currentLanguage = isEnglish ? "en" : "fr";

  const t = (key, fallback) => {
    const keys = key.split(".");
    let value = translations[currentLanguage];

    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(
          `Translation key "${key}" not found for language "${currentLanguage}"`
        );
        return fallback !== undefined ? fallback : key;
      }
    }

    return value;
  };

  return {
    t,
    currentLanguage,
    isEnglish,
  };
};
