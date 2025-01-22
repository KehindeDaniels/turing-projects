import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1>{t("welcome")}</h1>
      <p>{t("overview")}</p>
      <Link to="/courses" className="text-blue-600">
        {t("courses")}
      </Link>
    </div>
  );
}

export default Home;
