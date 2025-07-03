import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 mt-6 py-6 px-10 lg:px-22 text-amber-950">
        <h3 className="font-semibold mb-4 text-amber-950 text-2xl">
          Newsletter Subscription
        </h3>
        <form
          className="flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="border-2 border-amber-950 w-80 py-1 px-2 focus:outline-none"
            placeholder="Your email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Sign Up"
            className="cursor-pointer active:scale-99 bg-amber-950 text-white w-80 p-1.5 text-center hover:brightness-110"
          />
        </form>
      </div>
    </>
  );
}

export default Newsletter;
