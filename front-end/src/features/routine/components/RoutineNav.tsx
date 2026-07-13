import { useLocation } from "react-router-dom";
import { SetRoutineButton } from "../../../components/ui/Buttons/SetRoutineButton";
import { useRoutines } from "@/features/routine/hooks/useRoutines";

export function RoutineNav() {
  const location = useLocation();
  const { routines } = useRoutines();

  return (
    <>
      <div className="w-full h-fit flex flex-col gap-2">
        <div className="w-full flex gap-2 items-center">
          {routines.map(routine => (
            <SetRoutineButton
              key={routine.id}
              title={routine.title}
              tasks={routine.groups.flatMap(group => group.tasks)}
              isActive={location.pathname === `/${routine?.title}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}