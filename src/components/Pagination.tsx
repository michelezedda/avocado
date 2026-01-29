import React from "react";
import { PaginationProps } from "../types/Types";

function Pagination({
  totalRecipes,
  currentPage,
  setCurrentPage,
  recipesPerPage,
}: PaginationProps) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex mt-8 gap-4">
      {pages.map((page, index) => (
        <button
          className={`text-white rounded-full h-10 w-10 hover:bg-amber-900 cursor-pointer duration-300 ${currentPage === page ? "bg-amber-950" : "bg-amber-950/50"}`}
          onClick={() => setCurrentPage(page)}
          key={index}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
