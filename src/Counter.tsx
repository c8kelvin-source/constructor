import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Bộ đếm</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}

export default Counter;
