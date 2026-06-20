import { TaskGroup } from "./TaskGroup";
import type { Routine } from "../types/routine.domain.type";
import { AddButton } from "./AddButton";
interface Props {
  routine: Routine | undefined;
}

export function Routine({ routine }: Props) {
    if (!routine) return <div className="text-muted">Something went wrong :(</div>;

    return (
        <>
          {routine.groups.length === 0 
            && <AddButton 
                title="Group"                     
                classNameButton="border-line" 
                classNameText="text-ink group-hover:text-edit"/>}
          {routine.description && 
            <p className="text-left text-muted text-[14px] flex flex-col gap-3 text-3">
              {routine.description}
            </p>}
          {routine?.groups.map(group => (
            <TaskGroup key={group.id}
                       group={group} />
          ))}
        </>
    )
}