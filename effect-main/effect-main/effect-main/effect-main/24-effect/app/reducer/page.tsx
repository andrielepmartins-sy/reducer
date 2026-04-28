"use client";

import { useReducer, useState } from "react";
import { listReducer } from "../reducers/listReducer";
import { Item } from "../types/Item";

export default function Page() {
    const [inputText, setInputText] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");

    const [list, dispatch] = useReducer(listReducer, [] as Item[]);

    const handleAdd = () => {
        if (inputText.trim() === "") return;

        dispatch({ type: "ADD", payload: { text: inputText } });
        setInputText("");
    };

    const handleToggle = (id: number) => {
        dispatch({ type: "TOGGLE", payload: { id } });
    };

    const handleDelete = (id: number) => {
        dispatch({ type: "REMOVE", payload: { id } });
    };

    const handleEdit = (id: number, text: string) => {
        setEditingId(id);
        setEditingText(text);
    };

    const handleSaveEdit = (id: number) => {
        if (editingText.trim() === "") return;

        dispatch({
            type: "EDIT",
            payload: { id, newText: editingText },
        });

        setEditingId(null);
        setEditingText("");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4">
            <h1 className="text-3xl text-purple-500 font-bold mb-8">
                Lista de Itens
            </h1>

            <div className="w-full max-w-md bg-gray-900 p-5 rounded-2xl shadow-lg border border-gray-700">
                <div className="flex gap-2 mb-4">
                    <input
                        type="text"
                        placeholder="Digite um novo item..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                        className="flex-1 p-2 rounded bg-gray-800 border border-gray-600 text-white outline-none"
                    />

                    <button
                        onClick={handleAdd}
                        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
                    >
                        Adicionar
                    </button>
                </div>

                <ul className="space-y-2">
                    {list.map((item) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between bg-gray-800 p-2 rounded"
                        >
                            <div className="flex items-center gap-2 w-full">
                                <input
                                    type="checkbox"
                                    checked={!!item.done}
                                    onChange={() => handleToggle(item.id)}
                                />

                                {editingId === item.id ? (
                                    <input
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        className="flex-1 p-1 rounded bg-gray-700 text-white"
                                    />
                                ) : (
                                    <span
                                        className={`flex-1 ${item.done
                                                ? "line-through text-gray-400"
                                                : "text-white"
                                            }`}
                                    >
                                        {item.text}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-1 ml-2">
                                {editingId === item.id ? (
                                    <button
                                        onClick={() => handleSaveEdit(item.id)}
                                        className="bg-green-500 px-2 py-1 rounded text-xs text-white"
                                    >
                                        Salvar
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(item.id, item.text)}
                                        className="bg-blue-500 px-2 py-1 rounded text-xs text-white"
                                    >
                                        Editar
                                    </button>
                                )}

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-red-500 px-2 py-1 rounded text-xs text-white"
                                >
                                    Deletar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}