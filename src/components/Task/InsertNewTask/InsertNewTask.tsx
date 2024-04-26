import { ChangeEvent, KeyboardEvent } from "react"
import { SquareCheckBig } from 'lucide-react'

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
    <div className="flex gap-1 h-10">
      <div className="border-[1px] border-slate-600/50 rounded-md w-60 h-full content-center">
        <input
          type="text"
          className="bg-transparent outline-none pl-3 w-full"
          autoComplete="off"
          value={text}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onChange={changeContent}
        />
      </div>
      <button className="h-full content-center" aria-label="Adicionar item" onClick={callback} >
        <SquareCheckBig />
      </button>
    </div>
  );
}
