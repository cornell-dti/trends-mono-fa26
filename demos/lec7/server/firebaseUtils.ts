/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  getDoc, // preferred in latest versions of firebase
  setDoc, // for upsert operations
} from "firebase/firestore";
import { db } from "./firebase"; // db is our Firestore instance!
import { Course } from "./types";

// TODO:
// Get all semesters and their courses
export const fetchAllSemesters = async (): Promise<
  {
    name: string;
    semNum: number;
    id: string;
  }[]
> => {
  try {
    const collectionRef = collection(db, "semesters");
    const docRef = await getDocs(collectionRef);
    return docRef.docs.map((doc) => ({
      id: doc.id,
      semNum: doc.data().semNum,
      name: doc.data().name,
    }));
  } catch (e) {
    console.error("Error fetching semesters:", e);
    return [];
  }
};

// TODO:
// Add a new semester
export const addSemester = async (name: string): Promise<string | null> => {
  try {
    // Extract semester number from name (i.e: Fall 2024 -> 2024)
    const semNum = parseInt(name.match(/\d+/)?.[0] || "0", 10);
    const docRef = await addDoc(collection(db, "semesters"), {
      name,
      semNum,
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding semester:", e);
    return null;
  }
};

// TODO
// Get all courses for a semester
export const fetchCoursesForSemester = async (
  semesterId: string,
): Promise<Course[]> => {
  try {
    const collectionRef = collection(db, `semesters/${semesterId}/courses`);
    const docRef = await getDocs(collectionRef);
    return docRef.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Course,
    );
  } catch (e) {
    console.error(`Error fetching courses for semester ${semesterId}:`, e);
    return [];
  }
};

// TODO
// Add a course to a semester
export const addCourseToSemester = async (
  semesterId: string,
  course: Course,
): Promise<string | null> => {
  // We use the setDoc upsert pattern option
  try {
    if (!course.id) {
      console.error("Course must have an ID to be added to a semester");
      return null;
    }
    const courseDocRef = doc(db, `semesters/${semesterId}/courses`, course.id);
    await setDoc(courseDocRef, course);
    return course.id;
  } catch (e) {
    console.error("error adding courses");
    return null;
  }
};

// TODO: Try it yoursel!f!
// Delete a course from a semester
export const deleteCourseFromSemester = async (
  semesterId: string,
  courseId: string,
): Promise<boolean> => {
  try {
    const courseDocRef = doc(db, `semesters/${semesterId}/courses`, courseId);
    await deleteDoc(courseDocRef);
    return true;
  } catch (e) {
    console.error("Error deleting course from semester:", e);
    return false;
  }
};

// NOTE: Will not be implemented during lecture
// Update course notes
export const updateCourseNotes = async (
  semesterId: string,
  courseId: string,
  notes: string,
): Promise<boolean> => {
  try {
    const docRef = doc(db, `semesters/${semesterId}/courses`, courseId);
    await updateDoc(docRef, { notes });
    return true;
  } catch (e) {
    console.error("Error updating course notes:", e);
    return false;
  }
};

// NOTE: Will not be implemented during lecture
// Update course details to show or hide
export const updateCourseDetails = async (
  semesterId: string,
  courseId: string,
  showDetails: boolean,
): Promise<boolean> => {
  try {
    const docRef = doc(db, `semesters/${semesterId}/courses`, courseId);
    await updateDoc(docRef, { showDetails });
    return true;
  } catch (error) {
    console.error("Error updating course details:", error);
    return false;
  }
};

// TODO:
// Add a course to the courses collection
// called by Cornell Roster API when we fetch courses from a particular semester, we also want to add it to the courses collection if it's not already there
export const addCourseToDB = async (course: any): Promise<string | null> => {
  try {
    const courseCollection = collection(db, "courses");
    const docRef = await addDoc(courseCollection, course); //auto generate an id
    return docRef.id;
  } catch (error) {
    console.error("Error adding course to DB:", error);
    return null;
  }
};

// NOTE: Will not be implemented during lecture
// Get all courses from the courses collection
// Called by /api/courses endpoint to get all courses already in database
export const fetchAllCourses = async (): Promise<Partial<Course>[]> => {
  try {
    const coursesCollection = collection(db, "courses");
    const querySnapshot = await getDocs(coursesCollection);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Partial<Course>[];
  } catch (error) {
    console.error("Error fetching all courses:", error);
    return [];
  }
};
