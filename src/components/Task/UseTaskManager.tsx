import { ChangeEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

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

export function UseTaskManager() {
    const LOCALSTORAGE_KEY = 'ToDo-LocalTaskList'
    const [taskValue, setTaskValue] = useState('')
    const [taskList, setTaskList] = useState<TaskProps[]>([])
    const [alert, setAlert] = useState<WrapperProps>({
        AlertMessage: '',
        AlertWarning: false,
        showAlert: false
    })

    const localStorageTasks = {
        get: () => {
            const localTasks = localStorage.getItem(LOCALSTORAGE_KEY)
            return localTasks ? JSON.parse(localTasks) : []
        },
        set: function ({ id, content }: TaskProps) {
            const localTasks = localStorageTasks.get()
            localTasks.push({ id, content })
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localTasks))

        },
        delete: function (id: string) {
            const localTasks = localStorageTasks.get()
            const newLocalTasks = localTasks.filter((task: { id: string; }) => task.id !== id)
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newLocalTasks))
        },
        load: function () {
            setTaskList(localStorageTasks.get())
        }
    }

    const handleAlert = ({ AlertMessage, AlertWarning = false }: handleAlertProps) => {
        setAlert(() => ({ AlertMessage, AlertWarning, showAlert: true }))
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
                const taskUuid = uuid()
                setTaskList((prevState) => [...prevState, { id: taskUuid, content: taskValue.trim() }])
                localStorageTasks.set({ id: taskUuid, content: taskValue.trim() })
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
        localStorageTasks.delete(id)
    }

    return {
        taskValue,
        taskList,
        alert,
        handleTaskValue,
        handleAddNewTask,
        handleDeleteTask,
        localStorageTasks
    }
}