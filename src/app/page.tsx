import Image from "next/image";
import PomodoroTimer from "./components/PomodoroTimer"; // Import Pomodoro Timer


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-3 row-start-2 items-center">
        <h1 className="text-4xl">
          lock in.
        </h1>
        < PomodoroTimer />
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-1.5 hover:underline hover:underline-offset-4 text-sm"
          href="https://armanmahjoor.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={12}
            height={12}
          />
          Made by Arman Mahjoor.
        </a>
      </footer>
    </div>
  );
}
