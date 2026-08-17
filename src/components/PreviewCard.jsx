import { useSettings } from "../context/SettingsContext";

function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div className="card preview-card">
      <h2>
        {language === "en" ? "Preference Preview" : "ตัวอย่างการตั้งค่า"}
      </h2>

      <div className="preview-item">
        <strong>
          {language === "en" ? "Current Theme:" : "ธีมปัจจุบัน:"}
        </strong>

        <span>
          {theme === "light"
            ? language === "en"
              ? "Light"
              : "สว่าง"
            : language === "en"
              ? "Dark"
              : "มืด"}
        </span>
      </div>

      <div className="preview-item">
        <strong>
          {language === "en" ? "Current Language:" : "ภาษาปัจจุบัน:"}
        </strong>

        <span>{language === "en" ? "English" : "ไทย"}</span>
      </div>

      <div className="message-box">
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </div>
    </div>
  );
}

export default PreviewCard;