import { TaskGroup } from "./TaskGroup";
import type { Routine } from "../types/routine.domain.type";
import { AddButton } from "./AddButton";
import { useEditMode } from "../../../context/EditModeContext";

interface Props {
  routine: Routine | undefined;
}

export function Routine({ routine }: Props) {

  const { isEditMode } = useEditMode();
    if (!routine) return <div className="text-muted">Something went wrong :(</div>;

    return (
        <>
          {isEditMode && <AddButton title="Add Group"/>}
          <p className="text-left text-muted text-[14px] flex flex-col gap-3 text-3">
            {routine.description}
          </p>
          {routine?.groups.map(group => (
            <TaskGroup key={group.id}
                       group={group} />
          ))}
        </>
    )
}