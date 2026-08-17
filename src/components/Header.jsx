import { useSettings } from "../context/SettingsContext";

function Header() {
  const { language } = useSettings();

  return (
    <header className="header">
      <h1>{language === "en" ? "Welcome" : "ยินดีต้อนรับ"}</h1>

      <p>
        {language === "en"
          ? "Customize your application settings"
          : "ปรับแต่งการตั้งค่าแอปพลิเคชันของคุณ"}
      </p>
    </header>
  );
}

export default Header;