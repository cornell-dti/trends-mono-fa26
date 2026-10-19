import "./App.css";
import CoursePlan from "./components/CoursePlan";
// import MemoDemo from "./components/hookDemos/MemoDemo";
// import ContextDemo from "./components/hookDemos/ContextDemo";

// Activity 3 (optional): Share a light/dark theme using context.
// 1. In src/ThemeContext.ts, create ThemeContext and a useTheme() custom hook.
// 2. Add theme state, a ThemeContext.Provider, and a toggle button here.
// 3. In CourseCard.tsx, read the theme with useTheme() and style the card.
const App = () => {
  return (
    <div>
      <h1>Lecture 4 Demo</h1>
      <CoursePlan />
      {/* Replace CoursePlan with MemoDemo or ContextDemo for each hook demo. */}
    </div>
  );
};

export default App;
