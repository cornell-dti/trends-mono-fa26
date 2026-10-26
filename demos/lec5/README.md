# Lecture 5: Data Fetching

CoursePlan live-coding starter for the [FA26 lecture 5 deck](https://docs.google.com/presentation/d/1LtgHW77SVmuIcmZ8fOPNFYjCtQ73v6O6XY7Vvk6NS-I/edit).

| Demo stop               | Activity                                                                          | Code                          |
| ----------------------- | --------------------------------------------------------------------------------- | ----------------------------- |
| Fetching course details | Send a request, check its status, read the JSON, and find the course description. | `src/util.ts`                 |
| Updating the UI         | Await details, update state, and handle loading and errors.                       | `src/components/Semester.tsx` |
| Your turn               | Add offering, credits, and instructors.                                           | `src/util.ts`                 |

10/26: Course details are fictional sample data while Cornell's roster is under maintenance.

## Run locally

From `demos/lec5`:

```sh
pnpm install
pnpm dev
```
