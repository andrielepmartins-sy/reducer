'use client';

import { useEffect, useState } from 'react';

export default function home() {
    const [name, setName] = useState("beltrano");
    const [idade, setIdade] = useState(25);

    useEffect(() => {
        console.log("rodou o effect");
    }, [idade, name]);

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-2xl mb-10">UseEffect - Etapas</h1>

            <ol className="list-decimal list-inside">
                <li>Definir a função que vai rodar</li>
                <li>Definir quando ela vai rodar -{''}
                    <span className="text-red-700 font-bold">
                        QUANDO ALTERAR O COMPONENTE
                    </span>
                </li>
                <li>Definir o que fazer quando o componente sumir/unload</li>
            </ol>


            <div className="mt-6">
                <p className="mt-3">
                    Meu nome é {name} e tenho {idade} anos
                </p>
                <div>
                    <button
                        onClick={() => setName('fulano')}
                        className="bg-blue-600 text-white rounded-md p-3 m-4"
                    >
                        mudar para fulano
                    </button>
                </div>
            </div>
        </div>
    );
}
