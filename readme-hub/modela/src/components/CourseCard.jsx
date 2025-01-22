import { useTranslation } from "react-i18next";

function CourseCard({ course }) {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t(course.title)}</h2>
      <p>{t(course.description)}</p>
    </div>
  );
}

export default CourseCard;
