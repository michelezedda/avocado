import { useEffect, useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState<string>("");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
  };

  useEffect(() => {
    formSubmit;
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 mt-6 mx-8 py-6 text-amber-950">
        <h3 className="font-semibold mb-4 text-amber-950 text-2xl">
          Newsletter Subscription
        </h3>
        <form
          className="flex flex-col justify-center items-center gap-2"
          onSubmit={formSubmit}
        >
          <input
            type="email"
            className="border-2 border-amber-950 w-80 py-1 px-2"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="submit"
            value="Sign Up"
            className="cursor-pointer active:scale-99 bg-amber-950 text-white w-80 p-1.5 text-center"
          />
        </form>
      </div>
    </>
  );
};

export default Newsletter;
