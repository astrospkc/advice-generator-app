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

  function adviceChanged() {
    getAdvice();
  }

  return (
    <>
      <div className="  md:w-2/5 md:h-screen flex  items-center justify-center  mx-3 md:mx-auto my-24 md:my-auto  ">
        <div
          className="flex flex-col items-center justify-center rounded-xl p-10 w- fit relative"
          style={{ backgroundColor: "hsl(217, 19%, 24%)" }}
        >
          <div>
            <h1
              className="text-center mb-4"
              style={{ color: "hsl(150, 100%, 66%)" }}
            >
              Advice #{advice.id}
            </h1>
            <p className="text-center text-white text-3xl md:text-2xl mb-7">
              "{advice.advice}"
            </p>
            <img
              src="./images/pattern-divider-desktop.svg"
              alt=""
              className="mx-auto mb-5 "
            />
          </div>

          <div
            className="hovered rounded-full p-4 absolute top-[90%] bg-green-500 hover:shadow-[0_35px_60px_-15px] hover:shadow-green-300 "
            onClick={adviceChanged}
          >
            <img src="./images/icon-dice.svg" alt="" className="mx-auto " />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// Advice Slip API
