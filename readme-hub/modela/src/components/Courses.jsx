import { useTranslation } from "react-i18next";
import CourseCard from "./CourseCard";

function Courses() {
  const { t } = useTranslation();

  const courses = [
    { title: "course1.title", description: "course1.description" },
    { title: "course2.title", description: "course2.description" },
  ];

  return (
    <div>
      <h1>{t("courses")}</h1>
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default Courses;
