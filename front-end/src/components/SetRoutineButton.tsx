import { Link } from "react-router-dom"
import { cn } from "../utils/cn"
import type { Task } from "../features/routine/types/routine.domain.type";
import { DeleteButton } from "./DeleteButton";

export interface Props {
    title: string;
    tasks: Task[];
    isActive: boolean;
}

export function SetRoutineButton({title, tasks, isActive}: Props) {
  
  const tasksQuantity = tasks?.length;
  const tasksDone = tasks?.filter(task => task.isComplete).length;

  return (
    <div className={cn("relative flex flex-col flex-1 h-12.5 min-w-0 rounded-lg",
      isActive && 'shadow-aura shadow-white/60')}>
      <Link to={`/${title}`}
          className={cn(
              'relative flex flex-col w-full h-12.5 min-w-0  border-2 rounded-lg py-2 px-2.75 items-center justify-center cursor-pointer ',
              isActive ? 'border-line2 bg-surface2' : 'border-line bg-surface'
            )}
        >
          <DeleteButton className="absolute right-3 top-3 size"/>
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
      </Link>
    </div>
  )
};
