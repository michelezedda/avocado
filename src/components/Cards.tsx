import type { CardProps } from "../types/Types";

const Cards = () => {
  return (
    <div className="mx-auto max-w-screen-sm">
      <div className="flex justify-around items-center mt-70 gap-4 mx-4">
        <Card title="title" />
        <Card title="title" />
        <Card title="title" />
      </div>
    </div>
  );
};

export default Cards;

function Card({ title }: CardProps) {
  return (
    <>
      <div className="p-6 bg-neutral-50 border rounded-xl">{title}</div>
    </>
  );
}
