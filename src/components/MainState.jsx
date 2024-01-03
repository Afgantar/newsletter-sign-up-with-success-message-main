import React, { useEffect, useState } from "react";
import SignUpPicture from "../assets/images/illustration-sign-up-desktop.svg";
import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import IconList from "../assets/images/icon-list.svg";
import { useSignUp } from "../context/SignUpContext";

const MainState = () => {
  const { setEmail, success, setSuccess } = useSignUp();
  const [inputEmail, setInputEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [warning, setWarning] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function validateEmail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  }

  useEffect(() => {
    function resize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    if (!inputEmail) return;

    if (!isValid) {
      setWarning(true);
      return;
    }

    setWarning(false);
    setEmail(inputEmail);
    setSuccess({
      ...success,
      animation: true,
    });
  }

  return (
    <div
      className={`bg-white flex flex-col mobile:flex-row items-center mobile:p-[20px] mobile:rounded-[25px] w-full mobile:w-[70%] small-laptop:w-fit h-full mobile:h-fit small-laptop:h-[65%] gap-[10px] tablet:gap-[25px] ${
        success.animation ? "animate-exit" : "animate-enter"
      }`}
      onAnimationEnd={() => {
        if (success.animation) {
          setSuccess({
            ...success,
            page: true,
          });
        }
      }}
    >
      <div className="mobile:grow-0 grow flex justify-center items-center">
        <div className="flex flex-col mobile:max-w-[320px] p-[10px] mobile:p-[10px] tablet:p-[20px] box-border gap-[15px] desktop:gap-[25px]">
          <h1 className="font-bold text-dark-slate-grey text-[20px] tablet:text-[40px]">
            Stay updated!
          </h1>
          <p className="text-[16px] mobile:text-[10px] tablet:text-[12px]">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul>
            <li className="text-[16px] mobile:text-[10px] tablet:text-[12px] flex flex-row items-start mobile:items-center gap-[10px]">
              <img
                src={IconList}
                alt="IconList"
                className="w-[16px] mobile:w-[10px] tablet:w-[12px] translate-y-[3px] mobile:translate-y-0"
              />
              Product discovery and building what matters
            </li>
            <li className="text-[16px] mobile:text-[10px] tablet:text-[12px] flex flex-row items-start mobile:items-center gap-[10px]">
              <img
                src={IconList}
                alt="IconList"
                className="w-[16px] mobile:w-[10px] tablet:w-[12px] translate-y-[3px] mobile:translate-y-0"
              />
              Measuring to ensure updates are a success
            </li>
            <li className="text-[16px] mobile:text-[10px] tablet:text-[12px] flex flex-row items-start mobile:items-center gap-[10px]">
              <img
                src={IconList}
                alt="IconList"
                className="w-[16px] mobile:w-[10px] tablet:w-[12px] translate-y-[3px] mobile:translate-y-0"
              />
              And much more!
            </li>
          </ul>
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col gap-[15px] desktop:gap-[20px]"
          >
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <p className="text-[10px] font-bold">Email address</p>
                {warning && (
                  <p className="text-[10px] font-bold text-tomato">
                    Valid email required
                  </p>
                )}
              </div>
              <input
                className={`text-[12px] w-full px-[20px] py-[10px] desktop:py-[15px] outline-none border-[1px] border-grey rounded-[8px] transition-all ease-in-out duration-500 ${
                  warning
                    ? "border-red-400 text-red-400 bg-tomato/25"
                    : "border-grey"
                }`}
                type="text"
                placeholder="email@company.com"
                value={inputEmail}
                onChange={(e) => {
                  setInputEmail(e.target.value);
                  setIsValid(validateEmail(inputEmail));
                }}
              />
            </div>
            <button
              className="text-[12px] mobile:text-[10px] tablet:text0[12px] font-bold bg-dark-slate-grey text-white w-full py-[15px] mobile:py-[10px] desktop:py-[15px] rounded-[8px] active:bg-gradient-to-r from-[#FF5379] to-[#FE693E]"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div className="mobile:h-full order-first mobile:order-none">
        <img
          src={width < 375 ? SignUpMobile : SignUpPicture}
          alt="SignUpPicture"
          className="mobile:h-full"
        />
      </div>
    </div>
  );
};
export default MainState;
