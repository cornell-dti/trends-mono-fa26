import { useState } from "react";

const NonMemoizedFib = () => {
  const [foo, setFoo] = useState(0);
  const [input, setInput] = useState(34);

  const fib = (n: number): number => {
    if (n <= 1) {
      return 1;
    }
    return fib(n - 1) + fib(n - 2);
  };

  const value = fib(input);

  return (
    <div>
      <button onClick={() => setFoo(foo + 1)}>Trigger re-render</button>
      <input
        type="number"
        min={0}
        max={35}
        aria-label="Fibonacci input"
        value={input}
        onChange={(e) => setInput(Math.min(35, Math.max(0, Math.trunc(Number(e.target.value) || 0))))}
      />

      <p>{`Value: ${value}`}</p>
      <p>{`Count: ${foo}`}</p>
    </div>
  );
};

// Copy NonMemoizedFib, then cache fib(input) with useMemo.
// Use input = 34 in both versions for a fair comparison.
const MemoizedFib = () => {
  return (
    <div>
     <p>Not yet implemented!</p>
    </div>
  );
};

const MemoDemo = () => {
  const [isMemo, setIsMemo] = useState(false);

  return (
    <div>
      <h1>Memoization Demo</h1>
      <p>{`${isMemo ? "" : "Non-"}Memoized Fibonacci`}</p>
      <button onClick={() => setIsMemo(!isMemo)}>Toggle Memo</button>
      {isMemo ? <MemoizedFib /> : <NonMemoizedFib />}
    </div>
  );
};

export default MemoDemo;
