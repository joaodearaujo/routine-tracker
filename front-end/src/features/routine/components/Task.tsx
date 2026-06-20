import { useState } from "react";
import { cn } from "../../../utils/cn";
import { ExpandButton } from "./ExpandButton";
import { CheckButton } from "./CheckButton";
import type { Task as TaskType} from "../types/routine.domain.type";
import { CATEGORY_COLORS, type CategoryKey } from "../../../constants/categoryColors";
import { useEditMode } from "../../../context/EditModeContext";
import { Star } from "../../../components/Star";
import { Dot } from "../../../components/Dot";
import { useExpand } from "../hooks/useExpand";
import { Check, X } from "lucide-react";
import { useCheckToDelete } from "../hooks/useCheckToDelete";

interface Props {
    task: TaskType;
}

export function Task({ task }: Props) {

    const categoryColor = CATEGORY_COLORS[task?.category as CategoryKey] || CATEGORY_COLORS.STUDY;
    const [ isChecked, setIsChecked ] = useState<boolean>(task.isComplete)
    const { handleCheckToDelete, isCheckedToDelete } = useCheckToDelete();
    const { isEditMode } = useEditMode();
    const {isExpanded, controlExpand, handleExpand } = useExpand(false);

    const controlCheck = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsChecked(prev => !prev);
    }

    return (
        <div className="pb-1 pr-1 rounded-xl bg-surface2">
            <div className="w-full h-fit flex flex-col items-start bg-surface rounded-xl border border-surface overflow-hidden">
                <div
                    onClick={handleExpand}
                    className="w-full h-12 flex items-center justify-between p-4 gap-3"
                >
                        <Dot color={categoryColor}/>
                        <div className="flex-1 text-left flex items-center gap-2">
                            <span className={cn(
                                "transition-colors text-[15px] font-medium font-primary duration-300 ease-in-out",
                                isChecked ? 'line-through  opacity-50' : 'text-ink')}
                            >
                                {task?.title ?? 'Title not found'}
                            </span>
                        
                            {task?.isMandatory && <Star/>}
                    </div>
                    
                    {
                        isEditMode 
                        
                        ? <div className="flex gap-2">
                                <CheckButton 
                                    Icon={X} 
                                    onClick={handleCheckToDelete} 
                                    isChecked={isCheckedToDelete} 
                                    className={isCheckedToDelete ? 'bg-red border-red': ''}
                                />
                        </div> 
                            
                        : <>
                            <ExpandButton 
                                className="mr-2" 
                                onClick={controlExpand} 
                                isExpanded={isExpanded}
                            />

                            <CheckButton 
                                Icon={Check} 
                                onClick={controlCheck} 
                                isChecked={isChecked}
                            /> 
                        </> 
                    }
                </div>
                {
                    isExpanded && !isEditMode &&
                        <div className="text-xs w-full text-left text-muted font-regular leading-5 pr-3.5 pb-3.5 pl-8.5">
                            <p>{task?.description ?? 'Description not found'}</p>
                        </div>
                }
            </div>
        </div>
    )
}