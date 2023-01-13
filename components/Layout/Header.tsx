import { Rowdies } from "@next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <div className="flex h-auto w-full justify-center items-center bg-slate-800 py-4 mb-10">
      <h1 className={rowdies.className}>
        <p className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600 py-2">
          TO DO LIST
        </p>
        <p className=" text-center text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600 mb-4">
          A simple to do list app made with Next.js and Nest.js
        </p>
      </h1>
    </div>
  );
}
