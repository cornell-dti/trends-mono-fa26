import { useTheme } from "../ThemeContext";

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({ course }: CourseCardProps) => {
  // Lecture 4, slides 28–29: Theme extension — consume the shared theme.
  const theme = useTheme();

  return (
    <div className={`courseCard ${theme}`}>
      <p className="courseCode">
        {course.subject} {course.catalogNbr}
      </p>
      <p className="courseTitle">{course.titleShort}</p>
    </div>
  );
};

export default CourseCard;
