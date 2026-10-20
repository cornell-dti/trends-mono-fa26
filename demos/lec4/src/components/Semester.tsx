import { useState } from "react";
import CourseCard from "./CourseCard";
import Dropdown from "./lib/Dropdown";
import SlideToggle from "./lib/SlideToggle";

type SemesterProps = {
  name: string;
  allCourses: Course[];
};

const Semester = ({ name, allCourses }: SemesterProps) => {
  const [courses, setCourses] = useState<Course[]>([]);
  // Lecture 4, slide 7: Toggling — conditionally show the semester contents.
  const [isMinimized, setIsMinimized] = useState(false);

  const handleCourseSelection = (course: Course) => {
    setCourses([...courses, course]);
  };

  return (
    <div className="semesterBox">
      <div className="semesterHeader">
        <h2 className="semesterTitle">{name}</h2>
        <SlideToggle label={"minimize"} onChange={setIsMinimized} />
      </div>

      {!isMinimized && (
        <>
          <Dropdown options={allCourses} onChange={handleCourseSelection} />
          {courses.map((course, index) => (
            <CourseCard
              key={`${course.subject}-${course.catalogNbr}-${index}`}
              course={course}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Semester;
