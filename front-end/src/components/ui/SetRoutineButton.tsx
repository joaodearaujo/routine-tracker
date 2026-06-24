import { Link } from "react-router-dom"
import { cn } from "@/utils/cn";
import type { Task } from "@/features/routine/types/routine.domain.type";

export interface Props {
    title: string;
    tasks: Task[];
    isActive: boolean;
}

export function SetRoutineButton({title, tasks, isActive}: Props) {
  
  const tasksQuantity = tasks?.length;
  const tasksDone = tasks.filter(task => task.isComplete).length;

  return (
    <>
      <div className="w-full h-18 flex items-center justify-center">
        <Link
          to={`/${title}`}
          className={cn('group relative flex w-full h-fit min-w-0 rounded-xl pb-1 hover:pb-0.5 active:pb-0 active:bg-transparent bg-surface2 items-center cursor-pointer')}
        >
          <div
            className={cn(
              'flex flex-col group-active:translate-y-0.5  group-active:pt-1 w-full border-2 group-hover:bg-surface/80 border-surface2 rounded-xl py-2 px-2.75 items-center cursor-pointer text-sm capitalize font-secondary',
              isActive ? 'border-surface2 bg-surface text-ink hover:text-ink/80 font-bold' : 'bg-surface/50 text-muted/50 hover:text-muted/80 font-medium',
            )}
          >
            <span>{title}</span>
            <span className="text-xs"> {tasksDone ?? 0} / {tasksQuantity ?? 0}</span>
          </div>
            </Link>
      </div>
    </>
  )
};
