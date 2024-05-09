import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Pasword = () => {
  const [slider, setSlider] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [eye, setEye] = useState(false);
  const [ans, setAns] = useState("");

  const notify = () => toast("Password Coppied");

  const genratePasword = () => {
    let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let small = "abcdefghijklmnopqrstuvwxyz";
    let sym = "!@#$%^&*()_+";
    let num = "0123456789";
    let ans = "";

    if (upper) ans += cap;
    if (lower) ans += small;
    if (symbol) ans += sym;
    if (number) ans += num;

    let pass = "";

    for (let i = 0; i < slider; i++) {
      let index = Math.floor(Math.random() * ans.length);
      pass += ans[index];
    }

    setAns(pass);
  };

  useEffect(() => {
    genratePasword();
  }, [upper, lower, symbol, number, slider]);

  return (
    <div className="flex flex-col items-center p-4 border w-1/2  shadow-2xl ">
      <h1 className="p-4 text-5xl m-6">Password Generator</h1>
      <div className="flex border w-1/2 rounded-md p-2 text-xl">
        <input
          type={eye ? "text" : "password"}
          value={ans}
          className="w-full outline-none"
        />
        <span
          className="cursor-pointer color-red-500 text-gray-500"
          onClick={() => setEye(!eye)}
        >
          {eye ? <FaRegEye size={25} /> : <FaRegEyeSlash size={25} />}
        </span>
      </div>
      <Box className=" mt-10">
        <Slider
          sx={{ width: 350 }}
          size="small"
          defaultValue={slider}
          aria-label="Small"
          max={50}
          min={5}
          valueLabelDisplay="auto"
          onChange={(e) => setSlider(e.target.value)}
        />
        <p className="w-full text-center text-xl">
          {"Password Length " + slider}
        </p>
      </Box>

      <div className="flex p-4 gap-4 mt-8">
        <div>
          <input
            className="h-4 w-4 align-center"
            type="checkbox"
            name="uppercase"
            checked={upper}
            onChange={() => setUpper(!upper)}
          />
          <label className="text-xl" htmlFor="uppercase">
            Upper case
          </label>
        </div>

        <div>
          <input
            className="h-4 w-4 align-center"
            type="checkbox"
            name="lowercase"
            checked={lower}
            onChange={() => setLower(!lower)}
          />
          <label className="text-xl" htmlFor="lowercase">
            Lower case
          </label>
        </div>

        <div>
          <input
            className="h-4 w-4 align-center"
            type="checkbox"
            name="symbol"
            checked={symbol}
            onChange={() => setSymbol(!symbol)}
          />
          <label className="text-xl" htmlFor="symbol">
            Symbol
          </label>
        </div>

        <div>
          <input
            className="h-4 w-4 align-center"
            type="checkbox"
            name="number"
            checked={number}
            onChange={() => setNumber(!number)}
          />
          <label className="text-xl" htmlFor="number">
            Number
          </label>
        </div>
      </div>

      <button
        className="button-57 mt-8"
        onClick={() => {
          navigator.clipboard.writeText(ans);
          notify();
        }}
      >
        <span className="text">COPY</span>
        <span>CLICK TO COPY</span>
      </button>

      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Pasword;
