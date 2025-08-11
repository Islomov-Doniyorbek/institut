import { useEffect } from "react";

export default function TranslateWidget() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    const addScript = document.createElement("script");
    addScript.id = "google-translate-script";
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "uz",
          includedLanguages: "uz,en,ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    // Banner iframe yashirish
    const interval = setInterval(() => {
      const iframe = document.querySelector("iframe.goog-te-banner-frame");
      if (iframe) {
        iframe.style.display = "none";
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="translate-wrapper">
      🌐 Tilni tanlash
      {/* Google select shu yerda bo‘ladi */}
      <div id="google_translate_element"></div>
    </div>
  );
}
