import { TrashIcon } from 'lucide-react';
import { AlertWrapper } from '../AlertWrapper/AlertWrapper';
import { InsertNewTask } from "./InsertNewTask/InsertNewTask";
import { TaskToDo } from "./TaskToDo/TaskToDo";
import { UseTaskManager } from './UseTaskManager';
import { useEffect } from 'react';

export function Task() {
    const {
        taskValue,
        taskList,
        alert,
        handleTaks,
        localStorageTasks
    } = UseTaskManager()

    useEffect(() => {
        localStorageTasks.load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col gap-2 p-4">
            {alert.showAlert &&
                <AlertWrapper AlertWarning={alert.AlertWarning}>
                    {alert.AlertMessage}
                </AlertWrapper>}
            <div className='flex items-center justify-evenly'>
                <span className='text-3xl'><span className='text-red-600'>My</span> Tasks</span>
                <InsertNewTask
                    callback={handleTaks.add}
                    changeContent={handleTaks.setValue}
                    text={taskValue}
                />
            </div>
            {taskList.length ?
                <div className='flex items-center justify-center mt-6'>
                    <div className='border border-slate-600/50 rounded-lg xl:w-8/12 w-11/12 px-4'>
                        <table className='w-full'>
                            <tbody>
                                {taskList.map(({ id, content }) => (
                                    <tr className='border-b-[1px] border-slate-600/50 last-of-type:border-0' key={id}>
                                        <td className='py-3 px-2.5'>
                                            <TaskToDo>{content}</TaskToDo>
                                        </td>
                                        <td>
                                            <div className='flex w-full justify-end'>
                                                <button
                                                    onClick={() => { handleTaks.delete(id) }}>
                                                    <TrashIcon className="size-4" />
                                                </button>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                : null}
        </div>
    )
}