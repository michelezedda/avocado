import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setInputValue, findRecipes } = useAppContext();
  const navigate = useNavigate();

  const searchRecipes = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/results");
    findRecipes();
  };

  useEffect(() => {
    findRecipes();
  }, []);

  return (
    <>
      <div className="fixed top-0 bg-white flex w-full p-2 shadow-md shadow-amber-950/20 justify-around items-center z-50">
        <Link to="/">
          <img src="/public/media/logo.png" alt="logo" className="w-34" />
        </Link>
        <form action="" className="relative flex justify-center items-center">
          <input
            type="text"
            className="border-2 border-amber-950 rounded-lg w-80 py-1 px-2"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
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
