import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PersonalInformation from "./components/PersonalInfomationForm/PersonalInformation";
import MainForm from "./components/MainForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <MainForm />
      </div>
    </>
  );
}

export default App;
