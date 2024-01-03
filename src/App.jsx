import React from "react";
import MainState from "./components/MainState";
import SuccessState from "./components/SuccessState";
import { useSignUp } from "./context/SignUpContext";

const App = () => {
  const {success} = useSignUp();

  return (
    <div className="bg-charcoal-grey w-full h-screen min-h-screen flex justify-center items-center">
      {success.page ? (<SuccessState />) : (<MainState />)}
    </div>
  );
};

export default App;
