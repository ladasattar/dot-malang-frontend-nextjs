"use client";

import Image from "next/image";
import LoginForm from "@/components/components/forms/LoginForm";

export default function LoginRoute() {
  return (
    <main>
      <section className="text-opacity-95 text-lg font-bold flex items-center gap-2.5 justify-center mb-4">
        <Image
          priority
          src="/pokeball.png"
          alt="Pokewiki Logo"
          width={30}
          height="0"
          className="w-auto h-6"
        />
        <h1>Pokewiki Login</h1>
      </section>
      <LoginForm />
    </main>
  );
}
