import { Task } from "@/features/routine/components/Task";
import type { TaskGroup } from "@/features/routine/types/routine.domain.type";
import { useEditMode } from "@/context/EditModeContext";
import { ExpandButton } from "@/features/routine/components/ExpandButton";
import { useExpand } from "@/features/routine/hooks/useExpand";

interface Props {
    group: TaskGroup;
}

export function TaskGroup({ group }: Props) {
    const { isExpanded, controlExpand } = useExpand(true);
    const { isEditMode } = useEditMode();

    return (
        <div className="bg-surface2 pb-1 rounded-xl first:-mb-1.25">
            <div className="text-left text-muted text-xs flex flex-col gap-2 text-3 border-2 p-4 bg-bg rounded-xl border-surface2">
                <div className="flex gap-2 items-center justify-between w-full">
                    <div className="flex h-10 w-full gap-4 items-center ">
                        <h2 className="uppercase font-secondary font-semibold text-nowrap tracking-wider text-muted leading-none">
                            {group.title}
                        </h2>                        
                    </div>       

                    {(group.tasks?.length > 0 && !isEditMode) && (
                        <ExpandButton
                            onClick={controlExpand}
                            isExpanded={isExpanded}
                        />
                    )}
                </div>
                    
                {group.description && (
                    <p className="leading-5 w-full">{group.description}</p>
                )}
                
                {isExpanded && (
                    group.tasks?.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))
                )}

            </div>
        </div>
    );
}