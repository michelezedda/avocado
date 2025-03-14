import { useState } from "react";
import { FiSend } from "react-icons/fi";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email && alert(`${email}`);
  };

  return (
    <>
      <div className="relative flex flex-col items-center mt-6 py-6 border-amber-950 border-4 mx-9 text-amber-950 bg-amber-900/20">
        <h4 className="text-xl font-semibold mb-4">
          Sign up for our weekly newsletters!
        </h4>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full place-items-center relative"
        >
          <div className="flex relative">
            <input
              type="email"
              placeholder="your email"
              className="bg-white rounded-lg px-2 py-1 border-amber-950 border-2 w-80"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="text-white bg-amber-950 rounded-r-md px-6 py-2 cursor-pointer absolute right-0"
            >
              <FiSend className="size-4.5" />
            </button>
          </div>
          <div>
            <div className="flex mt-2">
              <input type="checkbox" required />
              <span className="ml-2">I agree to the privacy policy*</span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
