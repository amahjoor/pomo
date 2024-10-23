import PomoTimer from "./components/PomoTimer"; // Import Pomodoro Timer
import AudioPlayer from "./components/AudioButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <AudioPlayer src="/audio/brown-noise.mp3" />

      <main className="flex flex-col gap-3 row-start-2 items-center">
        <h1 className="text-4xl">lock in.</h1>
        < PomoTimer />
      </main>
      <Footer />
    </div>
  );
}
