import { createContext, useContext, useState } from "react";

// Lecture 4, after slide 27: useContext — share count across generations.
const CountContext = createContext(0);

const GrandchildComponent = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <p>{`Grandchild: I am ${count} years old.`}</p>
    </div>
  );
};

const ChildComponent = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <p>{`Child: I am ${count + 30} years old.`}</p>
      <GrandchildComponent />
    </div>
  );
};

const Component = () => {
  const count = useContext(CountContext);

  return (
    <div>
      <p>{`Parent: I am ${count + 60} years old.`}</p>
      <ChildComponent />
    </div>
  );
};

const ContextDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Context Demo</h1>

      <CountContext.Provider value={count}>
        <button onClick={() => setCount(count + 1)}>Happy Birthday!</button>
        <p>{`Grandparent: I am ${count + 90} years old.`}</p>
        <Component />
      </CountContext.Provider>
    </div>
  );
};

export default ContextDemo;
