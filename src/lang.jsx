import { useEffect } from "react";

export default function TranslateWidget() {
  useEffect(() => {
    // Google scriptini yuklash
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    // Widget init
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "uz", // Asosiy til
          includedLanguages: "uz,en,ru", // Qaysi tillar bo'lishini yoz
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>
    </div>
  );
}
