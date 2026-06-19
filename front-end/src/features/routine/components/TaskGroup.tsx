import { Task } from "./Task";
import type { TaskGroup } from "../types/routine.domain.type";
import { AddButton } from "./AddButton";
import { useEditMode } from "../../../context/EditModeContext";
import { ExpandButton } from "./ExpandButton";
import { useExpand } from "../hooks/useExpand";

interface Props {
    group: TaskGroup;
}

export function TaskGroup({ group }: Props) {
    
        const { isExpanded, controlExpand } = useExpand(true);
        const { isEditMode } = useEditMode();

    return (
        <div className="text-left text-muted text-xs flex flex-col gap-2 text-3 border-2 p-2.5 rounded-xl border-line">
            <div className="flex gap-2 items-center justify-between">
                <div>
                    <h2 className="uppercase pb-1 font-secondary font-semibold tracking-wider text-muted">{group?.title}</h2>
                    <p className="leading-5">{group?.description}</p>
                </div>
                {!(group.tasks.length === 0) &&  <ExpandButton onClick={controlExpand} isExpanded={isExpanded} className="size-5" />}
            </div>
            {isExpanded &&             
                <div className="flex flex-col gap-2">
                    {group.tasks.map(task => (
                        <Task key={task.id} task={task} />
                     ))}
                </div>        
            }

            {isEditMode && <AddButton title="Add Task"/>}
            {group.tasks.length === 0 &&  !isEditMode && <AddButton title="Add Task" classNameButton="border-line" classNameText="text-muted"/>}
           
        </div>
    )
}