import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { gapi } from "gapi-script";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GoogleLogin />
      <FacebookLogin />
    </>
  );
}

export default App;
