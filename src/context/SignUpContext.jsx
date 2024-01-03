import React, { createContext, useContext, useState } from "react";

const SignUpContext = createContext();

export function useSignUp() {
  return useContext(SignUpContext);
}

export function SignUpProvider({ children }) {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState({
    page: false,
    animation: false,
  });

  return (
    <SignUpContext.Provider value={{ email, setEmail, success, setSuccess }}>
      {children}
    </SignUpContext.Provider>
  );
}
