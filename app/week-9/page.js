"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list");
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
    }
  };

  return (
    <div className="text-center mt-10">
      {!user ? (
        <>
          <h1 className="text-5xl">Hi there, Login is required for access</h1>
          <button
            onClick={handleLogin}
            className="border-2 border-white rounded px-5 py-2 text-white hover:text-black hover:bg-white mt-5"
          >
            Login with GitHub
          </button>
        </>
      ) : (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <Link href="/week-9/shopping-list" className="text-blue-500">
            Go to Shopping List
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
