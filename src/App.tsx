import { Task } from "./components/Task/Task";
import { v4 as uuid } from 'uuid';
export function App() {
  return (
    <Task key={uuid()} />
  )
}