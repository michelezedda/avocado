import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const QuickSelection = () => {
  const { setInputValue } = useAppContext();
  const navigate = useNavigate();

  const searchByCategory = (category: string) => {
    setInputValue(category);
    navigate("/results");
  };

  return (
    <>
      <div className="flex gap-2 mt-20 justify-center">
        <span
          className="bg-amber-800/20 rounded-full p-3 w-16 cursor-pointer"
          title="appetizer"
          onClick={() => searchByCategory("appetizer")}
        >
          <img src="/media/appetizers.png" alt="appetizer" />
        </span>
        <span
          className="bg-amber-800/20 rounded-full p-3 w-16 cursor-pointer"
          title="main course"
          onClick={() => searchByCategory("main course")}
        >
          <img src="/media/main-courses.png" alt="main course" />
        </span>
        <span
          className="bg-amber-800/20 rounded-full p-3 w-16 cursor-pointer"
          title="fingerfood"
          onClick={() => searchByCategory("fingerfood")}
        >
          <img src="/media/snacks.png" alt="fingerfood" />
        </span>
        <span
          className="bg-amber-800/20 rounded-full p-3 w-16 cursor-pointer"
          title="salad"
          onClick={() => searchByCategory("salad")}
        >
          <img src="/media/salads.png" alt="salad" />
        </span>
        <span
          className="bg-amber-800/20 rounded-full p-3 w-16 cursor-pointer"
          title="drink"
          onClick={() => searchByCategory("drink")}
        >
          <img src="/media/drinks.png" alt="drink" />
        </span>
        <span
          className="bg-amber-800/20 rounded-full p-3 w-16 cursor-pointer"
          title="dessert"
          onClick={() => searchByCategory("dessert")}
        >
          <img src="/media/desserts.png" alt="dessert" />
        </span>
      </div>
    </>
  );
};

export default QuickSelection;
