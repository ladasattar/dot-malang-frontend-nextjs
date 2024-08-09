import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white h-[72px] flex items-center justify-center shadow-sm border-b-2 border-b-brand max-2xl:px-6">
      <section className="container">
        <ul className="flex justify-between">
          <li>
            <a
              className="text-opacity-95 font-bold italic flex items-center gap-2.5"
              href="/"
            >
              <Image
                priority
                src="/pokeball.png"
                alt="Pokewiki Logo"
                width={30}
                height="0"
                className="w-auto h-6"
              />
              <p>Pokewiki by DOT</p>
            </a>
          </li>
          <li>
            <a
              className="italic font-[500] text-gray-700 text-sm text-opacity-75"
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
};
