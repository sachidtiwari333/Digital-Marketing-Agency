import React from "react";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form className="flex flex-col justify-center items-center w-100 m-10 border-2 border-amber-50 rounded-3xl p-10 gap-10">
        <h1  className="text-4xl text-emerald-600">Login Admin panel</h1>
        <div className="flex flex-col gap-3 text-2xl">
          <label className="text-blue-400">Username</label>
          <input
            type="text"
            name="username"
            required
            placeholder="Enter username"
            className="border-2 border-amber-50 rounded-md px-3 py-2"
          />
        </div>
        <div className="flex flex-col gap-3 text-2xl">
          <label className="text-blue-400">Password</label>
          <input type="password" name="Password" required placeholder="Enter password"  className="border-2 border-amber-50 rounded-md px-3 py-2"/>
        </div>
        <button type="submit" className="text-3xl bg-emerald-800 px-6 py-2 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
