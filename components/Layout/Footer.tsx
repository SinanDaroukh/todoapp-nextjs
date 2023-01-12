import { Rowdies } from "@next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <div className="flex h-20 w-1/3 justify-center items-center bg-gradient-to-r from-cyan-700 to-blue-700  fixed bottom-0 rounded-3xl my-2">
      <h1 className={rowdies.className}>
        <p className=" text-center text-white">
          Made with ❤️ by{" "}
          <a
            href="https://sinan.daroukh.fr"
            className="underline decoration-2 underline-offset-2 decoration-pink-300 hover:decoration-4 "
          >
            C9
          </a>
        </p>
      </h1>
    </div>
  );
}
