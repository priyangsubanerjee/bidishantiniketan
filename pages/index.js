/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3225/3225632.png"
          className="h-16 animate-spin"
          alt=""
        />
        <p className="mt-9 text-neutral-700">This site is under development</p>
      </div>
    </main>
  );
}
