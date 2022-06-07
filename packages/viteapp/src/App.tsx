import type { HumanCat } from "@knola-2/utils";
import { add } from "@knola-2/utils";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const myCat: HumanCat = { couldMeow: true }
  return (
    <>
      <div className="bg-gray-700">

        <h1 className="text-5xl text-orange-800">{add(5, 2)}</h1>
        {myCat.couldMeow && "Meowwwwww"}
      </div>
    </>
  );
}

export default App;
