import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="flex flex-col space-y-[70vh] h-[100vh]"
      style={{ backgroundColor: color }}
    >
      <div className="text-2xl text-center w-full my-10 font-bold">
        Bg Changer
      </div>
      <div className="py-2 px-3 bg-slate-300 shadow-xl rounded-2xl flex flex-row w-fit mx-auto gap-5 drop-shadow-2xl border-black border-[1px]">
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("red");
          }}
          style={{ backgroundColor: "red" }}
        >
          red
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("yellow");
          }}
          style={{ backgroundColor: "yellow" }}
        >
          yellow
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("pink");
          }}
          style={{ backgroundColor: "pink" }}
        >
          pink
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("green");
          }}
          style={{ backgroundColor: "green" }}
        >
          green
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("orange");
          }}
          style={{ backgroundColor: "orange" }}
        >
          orange
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("lightblue");
          }}
          style={{ backgroundColor: "lightblue" }}
        >
          lightblue
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("lime");
          }}
          style={{ backgroundColor: "lime" }}
        >
          lime
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("lightgreen");
          }}
          style={{ backgroundColor: "lightgreen" }}
        >
          lightgreen
        </button>
        <button
          className="px-4 text-white rounded-xl shadow-2xl drop-shadow-2xl border-black border-[1px]"
          onClick={() => {
            setColor("cyan");
          }}
          style={{ backgroundColor: "cyan" }}
        >
          cyan
        </button>
      </div>
    </div>
  );
}

export default App;
