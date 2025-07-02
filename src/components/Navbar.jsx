import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

function Navbar() {
  const { setInput, fetchRecipes } = useAppContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
    navigate("/results");
  };

  return (
    <>
      <div className="fixed top-0 bg-white flex w-full p-2 shadow-md shadow-amber-950/20 justify-center items-center gap-6 z-50">
        <Link to="/">
          <img src="/media/logo.png" alt="logo" className="w-34 md:w-40" />
        </Link>
        <form action="" className="relative flex justify-center items-center">
          <input
            type="text"
            className="border-2 border-neutral-300 mt-1 w-60 lg:w-100 py-1 lg:py-1.5 px-2 focus:outline-none shadow-sm"
            placeholder="Find a recipe"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-3 top-3.5 text-lg cursor-pointer text-neutral-600"
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
