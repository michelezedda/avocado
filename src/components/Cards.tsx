import type { CardProps } from "../types/Types";

const Cards = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-lg xl:max-w-screen-2xl mt-50 lg:mt-30">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-4 m-6">
          <Card
            pic="/media/search.png"
            step={1}
            title="Search the perfect recipe"
            middle={false}
          />
          <Card
            pic="/media/prepare.png"
            step={2}
            title="Prepare what you need"
            middle={true}
          />
          <Card
            pic="/media/cook.png"
            step={3}
            title="Cook, share and enjoy your meal!"
            middle={false}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;

function Card({ title, pic, step, middle }: CardProps) {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center p-6 bg-neutral-50 border border-neutral-100 shadow-lg rounded-xl w-full ${
          middle && "lg:mt-40"
        }`}
      >
        <img src={pic} className="w-40" />
        <span className="text-lg">Step {step}</span>
        <h4 className="text-2xl font-semibold">{title}</h4>
      </div>
    </>
  );
}
