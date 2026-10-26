# Lecture 5 sample course endpoint

`courses.json` contains every course from `demos/lec4/src/constants/consts.ts` (the same list used by the previous lecture 5 demo). Course codes and short titles are preserved. Descriptions, credits, offerings, and instructor names are synthetic teaching examples, not official Cornell data.

Vite serves this public file at `/data/courses.json` once the lecture 5 app is running. No Cornell API connection or separate backend is required.

```ts
const response = await fetch("/data/courses.json");
if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
const data = await response.json();
const course = data.data.classes.find(
  (course: { subject: string; catalogNbr: string }) =>
    course.subject === subject && Number(course.catalogNbr) === catalogNbr,
);
```

Unlike Cornell's subject-filtered endpoint, this file returns **all subjects**. Match both subject and catalog number to avoid selecting another department's course with the same number. URL query parameters do not filter a static JSON file.

The response keeps the fields used by the original demo: `description`, `catalogWhenOffered`, and `enrollGroups[0]` with `unitsMinimum` and `classSections[0].meetings[0].instructors`.

General topic references for the illustrative CS 1110 and CS 2110 descriptions:
- https://cs1110.cs.cornell.edu/
- https://courses.cis.cornell.edu/courses/cs2110/2026fa/
