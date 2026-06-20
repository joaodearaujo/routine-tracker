import { Link } from "react-router-dom"
import { cn } from "../utils/cn"
import type { Task } from "../features/routine/types/routine.domain.type";
import { useEditMode } from "../context/EditModeContext";
import { useCheckToDelete } from "../features/routine/hooks/useCheckToDelete";
import { X } from "lucide-react";
import { CheckButton } from "../features/routine/components/CheckButton";

export interface Props {
    title: string;
    tasks: Task[];
    isActive: boolean;
}

export function SetRoutineButton({title, tasks, isActive}: Props) {
  
  const { isEditMode } = useEditMode();
  const { handleCheckToDelete, isCheckedToDelete } = useCheckToDelete();
  const tasksQuantity = tasks?.length;
  const tasksDone = tasks?.filter(task => task.isComplete).length;

  return (
      <Link to={`/${title}`}
          className={cn(
              'flex w-full h-12.5 min-w-0  border rounded-lg py-2 px-2.75 items-center cursor-pointer ',
              isActive ? 'border-line2/50 bg-surface2' : 'border-line bg-surface',
              isEditMode ? 'justify-between' : 'justify-center'
            )}
        >
          <div className="flex flex-col">
            <span className={cn(
                    'text-sm max-w-14 capitalize font-secondary transition-colors duration-300 ease-in-out ',
                    isActive ? 'text-ink font-bold' : 'text-muted font-medium'
              )}
            >
              {title}
            </span>
            <span className={cn(
                    'text-xs capitalize font-secondary transition-colors duration-300 ease-in-out',
                    isActive ? 'text-ink' : 'text-muted font-medium'
              )}
            >
              {tasksDone ?? 0} / {tasksQuantity ?? 0}
            </span>
          </div>
          {isEditMode && 
              <CheckButton 
                Icon={X} 
                onClick={handleCheckToDelete}
                isChecked={isCheckedToDelete} 
                className={isCheckedToDelete ? 'bg-red border-red': ''} 
            />}
      </Link>
  )
};
