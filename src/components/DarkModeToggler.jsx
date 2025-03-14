import { useAppContext } from "../context/AppContext";
import { CgDarkMode } from "react-icons/cg";

function DarkModeToggler() {
  const { darkMode, setDarkMode } = useAppContext();
  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer scale-98
      "
      >
        <CgDarkMode className="size-8" />
      </button>
    </>
  );
}

export default DarkModeToggler;
