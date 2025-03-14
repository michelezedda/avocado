import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex bg-amber-800/70 mt-6 py-4">
        <h4>NEWSLETTER</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="your email"
            className="bg-white rounded-full px-2 border-amber-950 border-2"
          />
          <input type="checkbox" /> privacy
          <input
            type="submit"
            className="text-white bg-amber-950 rounded-full px-2 py-1"
          />
        </form>
      </div>
    </>
  );
}

export default Newsletter;
