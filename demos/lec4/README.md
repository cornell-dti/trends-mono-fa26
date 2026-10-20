# Lecture 4: React Part 2

Completed lecture demos. Slide references use the [FA26 lecture 4 deck](https://docs.google.com/presentation/d/1Uxhyj36YgfUWl95fHbl8z5-UdFPCBSqErs-9osRu3Ds/edit).

| Slide / demo stop | Activity | Code |
| --- | --- | --- |
| 5 | **Adding Semesters:** map semester state to a list of components. | `src/components/CoursePlan.tsx` |
| 7 | **Toggling:** hide or show the dropdown and courses with conditional rendering. | `src/components/Semester.tsx` |
| After 25 | **useMemo:** compare Fibonacci with and without a cached result. | `src/components/hookDemos/MemoDemo.tsx` |
| After 27 | **useContext:** one provider shares the birthday count with parent, child, and grandchild. | `src/components/hookDemos/ContextDemo.tsx` |
| 28–29 | **Optional theme extension:** provide light/dark state, read it through `useTheme`, and style course cards. | `src/App.tsx`, `src/ThemeContext.ts`, `src/components/CourseCard.tsx` |

`App.tsx` renders all three demos. Add a course to see the theme toggle affect its card.

## Run locally

From this directory:

```sh
pnpm install
pnpm dev
```

Checks: `pnpm build` and `pnpm lint`.
