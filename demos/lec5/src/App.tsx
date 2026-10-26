import "./App.css";
import CoursePlan from "./components/CoursePlan";
import { USE_MOCK_DATA } from "./util";

const App = () => (
  <div className="lectureDemo">
    <h1>Lecture 5: Data Fetching</h1>
    <section>
      <CoursePlan />
    </section>
  </div>
);

export default App;
