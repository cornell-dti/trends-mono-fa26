import { useState } from "react";
import "./App.css";
import CoursePlan from "./components/CoursePlan";
import MemoDemo from "./components/hookDemos/MemoDemo";
import ContextDemo from "./components/hookDemos/ContextDemo";
import { ThemeContext, type Theme } from "./ThemeContext";

const App = () => {
  // Lecture 4, slides 28–29: Theme extension — provide the selected theme.
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="lectureDemo">
        <h1>Lecture 4 Demo</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Switch course cards to {theme === "light" ? "dark" : "light"} mode
        </button>
        <section>
          <CoursePlan />
        </section>
        <section>
          <MemoDemo />
        </section>
        <section>
          <ContextDemo />
        </section>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
