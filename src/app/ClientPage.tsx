"use client";

import { useState } from "react";

interface ClientPageProps {
  session: any;
}

export default function ClientPage({ session }: ClientPageProps) {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 dark:bg-gradient-to-r dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 text-white dark:text-gray-200">
      <div className="flex flex-col items-center justify-center text-center p-8 w-full max-w-4xl mx-auto min-h-screen">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Bem-vindo ao Dashboard, {session?.user?.name || "Usuário"}!
        </h1>
        <p className="text-lg sm:text-2xl mb-8">
          Sua jornada começa aqui, explore e aproveite os recursos incríveis!
        </p>

        <button
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-600 rounded-lg text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setButtonClicked(true)}
        >
          {buttonClicked ? "Explorando..." : "Vamos explorar"}
        </button>
      </div>
    </div>
  );
}
