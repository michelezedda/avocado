import React from "react";

function Footer() {
  return (
    <>
      <div className="flex items-end justify-center bg-amber-950/30 text-white py-6">
        <img src="/media/logo.png" alt="avocado logo" className="w-28" />
        <span className="ml-2 text-amber-950 text-md font-medium">
          &#169; {new Date().getFullYear()}
        </span>
      </div>
    </>
  );
}

export default Footer;
