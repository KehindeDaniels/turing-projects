import { useTranslation } from "react-i18next";

function Courses() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1>{t("courses")}</h1>
      <ul>
        <li>
          <h2>{t("course1Title")}</h2>
          <p>{t("course1Description")}</p>
        </li>
        <li>
          <h2>{t("course2Title")}</h2>
          <p>{t("course2Description")}</p>
        </li>
      </ul>
    </div>
  );
}

export default Courses;
