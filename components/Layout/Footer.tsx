import { Rowdies } from "@next/font/google";

const rowdies = Rowdies({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  return (
    <div className="flex h-20 w-full justify-center items-center   bottom-0">
      <h1 className={rowdies.className}>
        <p className=" text-center text-lg text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-blue-600">
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
