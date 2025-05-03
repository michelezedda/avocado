import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { inputValue, setInputValue, findRecipes } = useAppContext();
  const navigate = useNavigate();

  const searchRecipes = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) {
      return;
    }
    navigate("/results");
    findRecipes();
  };

  useEffect(() => {
    findRecipes();
  }, []);

  return (
    <>
      <div className="fixed top-0 bg-white flex w-full p-2 shadow-md shadow-amber-950/20 justify-center items-center gap-6 z-50">
        <Link to="/">
          <img src="/media/logo.png" alt="logo" className="w-34 md:w-40" />
        </Link>
        <form action="" className="relative flex justify-center items-center">
          <input
            type="text"
            className="border-2 border-amber-950 rounded-lg w-60 lg:w-100 py-1 lg:py-1.5 px-2"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="Find a recipe"
          />
          <button
            className="absolute right-2 text-lg cursor-pointer text-amber-950"
            onClick={searchRecipes}
          >
            <FaSearch />
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
