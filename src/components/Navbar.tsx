import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { IoMdHeart } from "react-icons/io";

function Navbar() {
  const { setInput, fetchRecipes } = useAppContext();

  const navigate = useNavigate();

  // Fetch recipes and navigate to results page
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchRecipes();
    navigate("/results");
  };

  return (
    <>
      <div className="fixed top-0 bg-white flex flex-col md:flex-row w-full p-2 shadow-md shadow-amber-950/20 justify-center items-center gap-2 md:gap-4 z-50">
        <div className="relative flex items-center">
          <Link to="/">
            <img
              src="/media/logo.png"
              alt="logo"
              className="sticky w-35 md:w-40"
            />
          </Link>
          <Link to="/favorites">
            <IoMdHeart
              size={25}
              className="absolute -right-30 md:-right-130 bottom-1 md:bottom-2 cursor-pointer duration-300 hover:text-red-800"
            />
          </Link>
        </div>
        {/* Search form */}
        <form action="" className="relative flex justify-center items-center">
          <input
            type="text"
            className="border-2 border-neutral-300 mt-1 w-100 py-1 lg:py-1.5 px-2 focus:outline-none shadow-sm rounded-lg"
            placeholder="Find a recipe"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-3 md:top-3.5 text-lg cursor-pointer text-neutral-600"
            onClick={handleSubmit}
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </>
  );
}

export default Navbar;
