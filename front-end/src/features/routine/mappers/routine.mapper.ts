import type { Routine, Task } from '@/features/routine/types/routine.domain.type';
import type { RoutineApiResponse } from '@/features/routine/types/routine.dto';

export const mapRoutineToDomain = (data: RoutineApiResponse): Routine[] => {
  return data.map((routine) => ({
    id: routine.id,
    title: routine.title,
    description: routine.description,         
    groups: routine.groups.map((group) => ({
      id: group.id,
      title: group.title,
      description: group.description,
      tasks: group.tasks.map((task) => ({
        id: task.id,
        category: task.category as Task['category'],
        title: task.title,
        description: task.description,
        isComplete: task.isComplete,    
        isMandatory: task.isMandatory,
      })),
    })),
  }));
};
