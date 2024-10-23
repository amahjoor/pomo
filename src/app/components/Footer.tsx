import Image from "next/image";

export default function Footer() {
    return (
        <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
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
    )
}
