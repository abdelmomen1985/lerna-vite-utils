import { add } from "@knola-2/utils";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-700">

        <h1 className="text-5xl text-orange-800">{add(5, 2)}</h1>
      </div>
    </>
  );
}

export default App;
