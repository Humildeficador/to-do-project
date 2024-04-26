import { TrashIcon } from 'lucide-react';
import { ChangeEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import { AlertWrapper } from '../AlertWrapper/AlertWrapper';
import { InsertNewTask } from "./InsertNewTask/InsertNewTask";
import { TaskToDo } from "./TaskToDo/TaskToDo";

interface TaskProps {
    id: string,
    content: string
}

interface WrapperProps {
    showAlert: boolean
    AlertWarning: boolean
    AlertMessage: string
}

interface handleAlertProps {
    AlertMessage: string
    AlertWarning?: boolean
}

export function Task() {
    const [taskValue, setTaskValue] = useState('')
    const [taskList, setTaskList] = useState<TaskProps[]>([])
    const [alert, setAlert] = useState<WrapperProps>({
        AlertMessage: '',
        AlertWarning: false,
        showAlert: false
    })

    const handleAlert = ({ AlertMessage, AlertWarning = false }: handleAlertProps) => {
        setAlert(() => ({ AlertMessage: AlertMessage, AlertWarning: AlertWarning, showAlert: true }))
        setTimeout(() => {
            setAlert(() => ({ AlertMessage: '', AlertWarning: false, showAlert: false }))
        }, 2500)
    }

    const handleTaskValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        setTaskValue(value)
    }

    const handleAddNewTask = () => {
        try {
            if (taskValue.trim() !== '') {
                setTaskList((prevState) => [...prevState, { id: uuid(), content: taskValue.trim() }])
                handleAlert({ AlertMessage: 'Nova tarefa adicionada com sucesso' })
                setTaskValue('')
            } else {
                throw new Error(`Cannot assing empty value to task`)
            }
        } catch (error) {
            console.error(error)
            handleAlert({ AlertMessage: `${error}`, AlertWarning: true })
        }
    }

    const handleDeleteTask = (id: string) => {
        setTaskList(prevState => (
            prevState.filter(task => task.id !== id)
        ))
    }

    return (
        <div className="flex flex-col gap-2 p-4">
            {alert.showAlert && <AlertWrapper AlertWarning={alert.AlertWarning}>{alert.AlertMessage}</AlertWrapper>}
            <InsertNewTask callback={handleAddNewTask}
                changeContent={handleTaskValue} text={taskValue} />
            {taskList.map(({ id, content }) => (
                <div className="flex gap-5 items-baseline">
                    <TaskToDo key={id}>{content}</TaskToDo>
                    <button onClick={() => { handleDeleteTask(id) }}><TrashIcon className="size-4" /></button>
                </div>
            ))}
        </div>
    )
}