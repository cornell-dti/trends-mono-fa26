/**
 * Makes an array with the integers from 0 (inclusive) to n (exclusive).
 * @param n The size of the array with numbers from [0..n-1]. Requires n >= 0.
 */
export const makeArray = (n: number) =>
  Array.from({ length: n }).map((_, index) => index);

// API type definitions describe the shape of Cornell’s response

// A course: number, description, offering, enrollment groups
export interface ApiCourseData {
  subject: string;
  description?: string;
  catalogNbr: string | number;
  catalogWhenOffered?: string;
  enrollGroups: ApiEnrollGroup[];
}

// Credits and class sections
interface ApiEnrollGroup {
  unitsMinimum: number;
  classSections: ApiClassSection[];
}

// Meetings for a section
interface ApiClassSection {
  meetings: ApiMeeting[];
}

// Instructors for a meeting
interface ApiMeeting {
  instructors: Instructor[];
}

// MAINTENANCE: set false when classes.cornell.edu is back.
export const USE_MOCK_DATA = true;

/**
 * Fetches detailed course information from the Cornell API
 * @param subject The course subject code (e.g., "CS")
 * @param catalogNbr The course catalog number (e.g., 1110)
 */
export const fetchCourseDetails = async (
  subject: string,
  catalogNbr: number,
): Promise<Partial<Course>> => {
  const url = USE_MOCK_DATA
    ? "/data/courses.json"
    : `https://classes.cornell.edu/api/2.0/search/classes.json?roster=FA26&subject=${encodeURIComponent(subject)}`;

  // Lecture 5, CoursePlan live demo: fill in the steps below.
  try {
    // Make the API request to fetch course details

    // Retrieve the course data from the API response

    // Find the course matching the subject and catalog number

    const details: Partial<Course> = {};

    // Extract relevant details from the API response

    // Your turn: catalogWhenOffered, credits, instructors

    return details;
  } catch (error) {
    // Handle errors fetching course details
    console.error(error);
    return {};
  }
};
