import React from "react";

function Hero() {
  return (
    <>
      <div className="mt-6 text-center justify-center items-center">
        <ul className="grid grid-cols-4 md:grid-cols-8 gap-4">
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/appetizers.png"
              alt=""
              className="rounded-full border-2"
            />
            APPETIZERS
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/main-courses.png"
              alt=""
              className="rounded-full border-2"
            />
            MAIN COURSES
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/side-dishes.png"
              alt=""
              className="rounded-full border-2"
            />
            SIDE DISHES
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/finger-food.png"
              alt=""
              className="rounded-full border-2"
            />
            FINGER FOOD
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/snacks.png"
              alt=""
              className="rounded-full border-2"
            />
            SNACKS
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/salads.png"
              alt=""
              className="rounded-full border-2"
            />
            SALADS
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/desserts.png"
              alt=""
              className="rounded-full border-2"
            />
            DESSERTS
          </li>
          <li className="cursor-pointer active:scale-98">
            <img
              src="/media/beverages.png"
              alt=""
              className="rounded-full border-2"
            />
            BEVERAGES
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;
