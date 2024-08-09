import { FiBox } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full bg-brand h-[72px] flex items-center justify-center">
      <section className="container">
        <ul className="flex justify-between">
          <li>
            <a
              className="text-white text-opacity-95 font-bold italic flex items-center gap-2.5"
              href="/"
            >
              <FiBox className="text-2xl" />
              <p>DOT Shipping</p>
            </a>
          </li>
          <li>
            <a
              className="italic font-[500] text-white text-opacity-75"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ladasattar/dot-malang-frontend-nextjs/"
            >
              by Muqorroba Lada Sattar
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
