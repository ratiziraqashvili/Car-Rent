import React, { useRef, useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

type Props = {};

function Login({}: Props) {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );
        console.log(userCred.user);
      } catch (error) {
        if (typeof error === "object") {
          const e = error as Error;
          setError(e.message);
        }
      }
    }
  };

  const signIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (emailRef.current && passwordRef.current) {
      try {
        const userCred = await signInWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passwordRef.current.value
        );

        console.log(userCred.user);
      } catch (error) {
        if (typeof error === "object") {
          const e = error as Error;
          setError(e.message);
        }
      }
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-[#F6F7F9]">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded-lg px-8 py-6">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Sign In
          </h2>
          <h3>
            {error && <div className="text-red-500">{error.slice(9)}</div>}
            </h3>
          <div className="mb-4">
            <input
              ref={emailRef}
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <input
              ref={passwordRef}
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={signIn}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-center">
            <p className="pt-5 font-[manrope] text-gray-500">
              New to Carhub?{" "}
              <span
                onClick={register}
                className="underline cursor-pointer text-blue-500"
              >
                Sign up Here
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
