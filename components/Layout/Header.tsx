import { Rowdies } from "@next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div className="flex h-24 w-1/3 justify-center items-center bg-gradient-to-r from-blue-700 to-cyan-700 rounded-3xl my-2">
      <h1 className={rowdies.className}>
        <p className="text-4xl text-center text-white">TO DO LIST</p>
        <p className=" text-center text-white">
          A simple to do list app made with Next.js and Nest.js
        </p>
      </h1>
    </div>
  );
}
