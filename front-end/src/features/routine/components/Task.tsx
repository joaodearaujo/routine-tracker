import { Check } from "lucide-react";
import { cn } from "@/utils/cn";
import { ExpandButton } from "./ExpandButton";
import { CheckButton } from "@/components/ui/CheckButton";
import type { Task as TaskType } from "../types/routine.domain.type";
import { CATEGORY_COLORS, type CategoryKey } from "@/constants/categoryColors";
import { useEditMode } from "@/context/EditModeContext";
import { Star } from "@/components/ui/Star";
import { Dot } from "@/components/ui/Dot";
import { useExpand } from "@/features/routine/hooks/useExpand";
import { CloseButton } from "@/components/ui/CloseButton";
import { useState } from "react";
import { useDeleteTask } from "../hooks/useDeleteTask";

interface Props {
    task: TaskType;
}

export function Task({ task }: Props) {
    const categoryColor = CATEGORY_COLORS[task.category as CategoryKey] || CATEGORY_COLORS.STUDY;
    const [isChecked, setIsChecked] = useState<boolean>(task.isComplete);
    const { isEditMode } = useEditMode();
    const { isExpanded, controlExpand, handleExpand } = useExpand(false);
    const { mutate: deleteTask } = useDeleteTask();

    const controlCheck = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsChecked((prev) => !prev);
    };
    

    return (
        <div className="pb-0.5 rounded-xl bg-surface2 overflow-hidden">
            <div className="w-full h-fit flex flex-col items-start bg-surface rounded-xl border-2 border-surface2 overflow-hidden">
                <div
                    onClick={handleExpand}
                    className="w-full h-12 flex items-center justify-between p-4 gap-3 cursor-pointer"
                >
                    <Dot color={categoryColor} />

                    <div className="flex-1 text-left flex items-center gap-2">
                        <span
                            className={cn(
                                "transition-colors text-[15px] font-medium font-primary duration-300 ease-in-out leading-none",
                                isChecked ? "line-through text-muted opacity-50" : "text-ink"
                            )}
                        >
                            {task.title}
                        </span>

                        {task.isMandatory && <Star />}
                    </div>

                    {isEditMode 
                        ? <CloseButton onClick={() => deleteTask(task.id)} className={"opacity-60 hover:text-red"} /> 
                        
                        : (
                        <>
                            {task.description && (
                                <ExpandButton
                                        className="mr-2"
                                        onClick={controlExpand}
                                        isExpanded={isExpanded}
                                />
                            )}
                            <CheckButton
                                Icon={Check}
                                onClick={controlCheck}
                                isChecked={isChecked}
                            />
                        </>
                    )}
                </div>

                {(isExpanded && !isEditMode) && (
                    <div className="text-xs w-full text-left text-muted leading-5 pr-3.5 pb-3.5 pl-8">
                        {task.description && <p>{task.description}</p>}
                    </div>
                )}
            </div>

        </div>
    );
}