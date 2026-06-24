import { TaskGroup } from "@/features/routine/components/TaskGroup";
import type { Routine } from "@/features/routine/types/routine.domain.type";
import { AddButton } from "@/components/ui/AddButton";
import { useEditMode } from "@/context/EditModeContext";
import { Form } from "@/components/Form";
import { GROUP_FIELDS } from "@/constants/FormFields";
import { useForm } from "@/features/routine/hooks/useForm";
import { useCreateGroup } from "../hooks/useCreateGroup";
interface Props {
  routine: Routine;
}

export function Routine({ routine }: Props) {
  
  const { isEditMode } = useEditMode();
  const { isFormOpen, setIsFormOpen, handleForm } = useForm();  
  const { mutate: createGroup } = useCreateGroup();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);

    createGroup({
      routineId: routine.id as string,
      title: data.get('title') as string,
      description: data.get('description') as string,
      tasks: [],
    });
    setIsFormOpen(false);
  }
  
      
  return (
        <div>
          {(routine.groups.length === 0 || isEditMode) && (
                  <div className="w-full h-14 flex items-start justify-start">
                    <AddButton title="Group"  label="Add Group" onClick={handleForm} classNameWrapper="w-full"/>
                </div>
          )}

          <main className='w-full min-h-fit  sm:max-h-135 flex flex-col gap-4 scrollbar-none overflow-y-auto border-t-2 border-b-2 rounded-xl border-surface2'>
 
          
          {routine?.groups.map(group => ( 
            <TaskGroup 
              key={`${group.id}-${routine.id}`}
              group={group} 
            />
          ))}

          </main>

          {isFormOpen && (
              <Form
                  title="Create Group"
                  fields={GROUP_FIELDS}
                  method="POST"
                  onSubmit={handleSubmit}
                  onClose={() => setIsFormOpen(false)}
              />
          )}
        </div>
    )
}