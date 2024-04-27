import { SquareCheckBig } from 'lucide-react';
import { ChangeEvent, KeyboardEvent } from "react";

interface InsertNewTaskProps {
  callback: () => void;
  text: string;
  changeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function InsertNewTask({ callback, changeContent, text, placeholder = "Enter your task to do..." }: InsertNewTaskProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      callback();
    }
  };

  return (
    <div className="flex gap-2 h-10 w-72">
      <div className="border border-slate-600/50 rounded-md w-10/12 h-full content-center">
        <input
          type="text"
          className="bg-transparent outline-none pl-3"
          autoComplete="off"
          value={text}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onChange={changeContent}
        />
      </div>
      <button className="border-slate-600/50 flex justify-center items-center border rounded-md w-10  hover:bg-slate-400/15 dark:hover:bg-slate-400/10" aria-label="Adicionar item" onClick={callback} >
        <SquareCheckBig />
      </button>
    </div>
  );
}