import { useState } from "react";
import Onboard from "./components/Onboard";
import Home from "./components/Home";

export default function App() {
  const [showBoard, setShowBoard] = useState(true);

  const handleOnboardFinish = () => {
    setShowBoard(false);
  };

  return (
    <>
      {showBoard && <Onboard handleFinish={handleOnboardFinish} />}
      {!showBoard && <Home />}
    </>
  );
}
