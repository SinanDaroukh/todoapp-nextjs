import { Rowdies } from "@next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

export default function TodoCard({ obj }: any) {
  return (
    <div className={rowdies.className}>
      <div className=" rounded-lg w-full bg-gray-500 bg-opacity-20 p-2 m-2">
        <div className="flex items-center">
          <div className="border-4 rounded-full text-center px-4 py-2 m-2">
            <p>{obj.id}</p>
          </div>
          <p className="text-center px-4 py-2 m-2">Title : {obj.title}</p>
        </div>

        <p>{obj.description}</p>
        <p>{String(obj.done)}</p>
      </div>
    </div>
  );
}
