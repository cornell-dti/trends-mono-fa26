type CourseCardProps = {
  course: Course;
};

// Activity 3: Import useTheme from "../ThemeContext".
// Convert to a block body, call useTheme() at the top, and add
// the theme class to the card: `courseCard ${theme}`.
const CourseCard = ({ course }: CourseCardProps) => (
  <div className="courseCard">
    <p className="courseCode">
      {course.subject} {course.catalogNbr}
    </p>
    <p className="courseTitle">{course.titleShort}</p>
  </div>
);

export default CourseCard;
