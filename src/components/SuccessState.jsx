import React from "react";
import SuccessLogo from "../assets/images/icon-success.svg";
import { useSignUp } from "../context/SignUpContext";

const SuccessState = () => {
  const { email, setEmail, success, setSuccess } = useSignUp();

  function dismissHandler() {
    setSuccess({
      ...success,
      animation: false,
    });
  }

  return (
    <div
      className={`bg-white p-[40px] mobile:rounded-[25px] flex flex-col gap-[20px] w-full h-full mobile:h-fit mobile:max-w-[350px] box-border ${
        success.animation ? "animate-enter" : "animate-exit"
      }`}
      onAnimationEnd={() => {
        if (!success.animation) {
          setSuccess({
            ...success,
            page: false,
          });
          setEmail("");
        }
      }}
    >
      <div className="flex justify-center items-center grow box-border">
        <div className="flex flex-col gap-[20px] box-border">
          <img src={SuccessLogo} alt="SuccessLogo" className="w-[40px]" />
          <h1 className="text-[40px] text-dark-slate-grey font-bold leading-10">
            Thanks for subscribing!
          </h1>
          <p className="text-[16px] mobile:text-[12px]">
            A confirmation email has been sent to{" "}
            <strong className="text-[16px] mobile:text-[12px]">{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
      </div>
      <button
        onClick={dismissHandler}
        className="text-[12px] font-bold text-white bg-dark-slate-grey py-[15px] mobile:py-[10px] rounded-[8px] mt-auto mobile:mt-0 active:bg-gradient-to-r from-[#FF5379] to-[#FE693E]"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessState;
