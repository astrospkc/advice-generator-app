import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const url = "https://api.adviceslip.com/advice";
  const getAdvice = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setAdvice(data.slip);
  };

  useEffect(() => {
    getAdvice(url);
  }, []);

  return (
    <>
      <div className="w-2/5  flex flex-col  items-center justify-center mx-auto my-auto ">
        <div
          className="rounded-xl p-3"
          style={{ backgroundColor: "hsl(217, 19%, 24%)" }}
        >
          <h1 className="text-center">{advice.id}</h1>
          <p className="text-center">{advice.advice}</p>
          <img
            src="./images/pattern-divider-desktop.svg"
            alt=""
            className="mx-auto mb-4"
          />
        </div>
        <div className=" bg-red-500">
          <img
            src="./images/icon-dice.svg"
            alt=""
            style={{ backgroundColor: "hsl(150, 100%, 66%)" }}
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
}

export default App;
// Advice Slip API
