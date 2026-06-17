import { Task } from "./Task";
import { tasks } from "../../../constants/tasks";
import type { TaskGroup } from "../types/routine.domain";

export function TaskGroup({ 
    title, 
    description,
}: TaskGroup) {
    return (
        <div className="text-left text-muted text-xs flex flex-col gap-2 text-3">
            <div>
                <h2 className="uppercase pb-1 font-secondary font-medium tracking-wide">{title}</h2>
                <p className="leading-5">{description}</p>
            </div>
            {tasks.map(task => <Task 
                                    key={task.id} 
                                    {...task}
                                />
                            )}
        </div>
    )
}