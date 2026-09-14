// src/shared/components/PageMeta.jsx
import { useEffect } from "react";
import { useTranslation } from "../../hooks/useTranslation";

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]');
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", "description");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export function PageMeta({ titleKey, descriptionKey }) {
  const { t, isEnglish } = useTranslation();
  const title = t(titleKey);
  const description = t(descriptionKey);

  useEffect(() => {
    document.title = title;
    setMetaDescription(description);
    document.documentElement.lang = isEnglish ? "en" : "fr";
  }, [title, description, isEnglish]);

  return null;
}
