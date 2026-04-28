import { Item } from '../types/Item';

type AddAction = {
    type: 'ADD';
    payload: { text: string };
};

type EditText = {
    type: 'EDIT';
    payload: { id: number; newText: string };
};

type ToggleDoneAction = {
    type: 'TOGGLE';
    payload: { id: number };
};

type RemoveAction = {
    type: 'REMOVE';
    payload: { id: number };
};

type ListActions = AddAction | EditText | ToggleDoneAction | RemoveAction;

export const listReducer = (list: Item[], action: ListActions) => {
    switch (action.type) {
        case 'ADD':
            return [
                ...list,
                {
                    id: Date.now(),
                    text: action.payload.text,
                    done: false
                }
            ];

        case 'EDIT':
            return list.map((t) =>
                t.id === action.payload.id
                    ? { ...t, text: action.payload.newText }
                    : t
            );

        case 'TOGGLE':
            return list.map((t) =>
                t.id === action.payload.id
                    ? { ...t, done: !t.done }
                    : t
            );

        case 'REMOVE':
            return list.filter((t) => t.id !== action.payload.id);

        default:
            return list;
    }
};