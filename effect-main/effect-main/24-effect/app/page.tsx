"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [name, setName] = useState("beltrano");
  useEffect(() => {
    console.log("rodou eo effect");
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-2xl mb-10">UseEffect - Etapas</h1>
      <div className="mt-6">
        <p className="mt-3">Meu nome é {name}</p>
        <div>
          <button
            onClick={() => setName('fulano')}
            className="bg-blue-600 text-white rounded-md p-3 m-4"
          > Mudar nome para fulano</button>
          <button
            onClick={() => setName('ciclano')}
            className="bg-blue-600 text-white rounded-md p-3 m-4"
          >
            Mudar nome para ciclano </button>
        </div>
      </div>
    </div>
  );
}
