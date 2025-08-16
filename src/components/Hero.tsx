const Hero = () => {
  return (
    <header className="bg-gradient-to-t from-white via-amber-900 to-amber-950 h-100 mt-29 md:mt-15">
      <div className="flex justify-center lg:items-center mx-auto max-w-screen-lg">
        <div className="flex flex-col my-10 mx-4 lg:basis-1/2">
          <h1 className="text-6xl md:text-7xl text-white font-[Rubik_Dirt]">
            Cook it. Love it. Share it.
          </h1>
          <div className="flex gap-2 mt-6">
            <a href="/#trending-recipes" className="z-3">
              <button className="border border-white text-white shadow shadow-neutral-900 hover:bg-white hover:text-black cursor-pointer duration-300 rounded-xl py-3 px-5 text-xl">
                See what's trending
              </button>
            </a>
          </div>
        </div>
        <div className="flex lg:basis-1/2">
          <img
            src="/media/avocado-toast.webp"
            alt="frying pan"
            className="absolute top-105 sm:top-75 md:top-45 lg:top-30 right-0 xl:right-40 2xl:right-100 lg:w-150 -rotate-15 z-2"
          />
          <div className="absolute rounded-full h-40 sm:h-50 w-40 sm:w-50 bg-neutral-800 blur-xl lg:blur-2xl -skew-x-50 rotate-28 top-145 sm:top-130 md:top-100 lg:top-105 right-23 sm:right-35 lg:right-40 xl:right-90 2xl:right-150 z-1" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
