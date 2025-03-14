import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col bg-white py-4 px-4 shadow-md z-10">
        <div className="flex items-center justify-between">
          <Sidebar />
          <Link to={"/"}>
            <img
              src="/media/logo.png"
              alt="avocado logo"
              className="h-9 ml-4"
            />
          </Link>
          <form className="ml-4 flex items-center">
            <input
              type="text"
              placeholder="find a recipe"
              className="ml-4 py-1 px-2 rounded-xl border-2 border-amber-950 text-amber-950 outline-none w-full"
            />
            <button
              type="submit"
              className="absolute right-5 ml-2 p-2 text-amber-950 active:scale-98 cursor-pointer"
              onClick={handleSubmit}
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Navbar;
