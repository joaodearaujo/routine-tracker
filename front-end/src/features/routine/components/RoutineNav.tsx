import { useEditMode } from "@/context/EditModeContext";
import { useLocation } from "react-router-dom";
import { AddButton } from "../../../components/ui/AddButton";
import { SetRoutineButton } from "../../../components/ui/SetRoutineButton";
import { useRoutines } from "@/features/routine/hooks/useRoutines";
import { Form } from "@/components/Form";
import { ROUTINE_FIELDS } from "@/constants/FormFields";
import { useForm } from "@/features/routine/hooks/useForm";
import { useCreateRoutine } from "@/features/routine/hooks/useCreateRoutine";

export function RoutineNav() {
  const { isEditMode } = useEditMode();
  const location = useLocation();
  const { routines } = useRoutines();
  const { isFormOpen, setIsFormOpen, handleForm } = useForm();
  const { mutate: addRoutine } = useCreateRoutine();

    const handleSubmitRoutine = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      addRoutine({
          title: data.get('title') as string,       
          description: data.get('description') as string, 
          groups: [],
      });
      setIsFormOpen(false);
    };

  return (
    <>
      <div className="w-full h-fit flex flex-col gap-2">
        {isEditMode && (
            <div className="w-full flex gap-2">
                <AddButton
                  title="Routine"
                  label="Add Routine"
                  onClick={handleForm}
                  classNameWrapper="w-full"/>
            </div>
        )}

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
      
      {isFormOpen && (
        <Form
          title="Create Routine"
          fields={ROUTINE_FIELDS}
          method="POST"
          onSubmit={handleSubmitRoutine}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </>
  );
}