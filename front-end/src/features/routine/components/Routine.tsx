import { TaskGroup } from "@/features/routine/components/TaskGroup";
import type { Routine } from "@/features/routine/types/routine.domain.type";
interface Props {
  routine: Routine;
}

export function Routine({ routine }: Props) {
      
  return (
          <main className='w-full min-h-fit  sm:max-h-135 flex flex-col gap-4 scrollbar-none overflow-y-auto border-t-2 border-b-2 rounded-xl border-surface2'>
            {routine?.groups.map(group => ( 
              <TaskGroup 
                key={`${group.id}-${routine.id}`}
                group={group} 
              />
            ))}
          </main>
    )
}