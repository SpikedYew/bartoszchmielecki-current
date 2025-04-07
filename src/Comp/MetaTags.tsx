import React, { useEffect } from "react";

// Define types for props
interface MetaTagsProps {
  title: string;
  description: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ title, description }) => {
  useEffect(() => {
    // Update title
    document.title = title || "Bartosz Chmielecki – Strony Internetowe Zabrze";

    // Update description meta tag
    const descriptionMetaTag = document.querySelector(
      'meta[name="description"]'
    );
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute(
        "content",
        description ||
          "Bartosz Chmielecki – freelancer oferujący tworzenie stron internetowych w Zabrzu. Projektowanie wizytówek, one page, sklepy internetowe, strony zoptymalizowane pod SEO, dopasowane do potrzeb lokalnych firm."
      );
    } else {
      // If description meta tag doesn't exist, create it
      const newMetaTag = document.createElement("meta");
      newMetaTag.name = "description";
      newMetaTag.content =
        description ||
        "Bartosz Chmielecki – freelancer oferujący tworzenie stron internetowych w Zabrzu. Projektowanie wizytówek, one page, sklepy internetowe, strony zoptymalizowane pod SEO, dopasowane do potrzeb lokalnych firm.";
      document.head.appendChild(newMetaTag);
    }
  }, [title, description]);

  return null;
};

export default MetaTags;
