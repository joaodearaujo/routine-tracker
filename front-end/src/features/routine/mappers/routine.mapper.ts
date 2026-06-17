import type { RoutineDto } from '../schemas/routine.schema'; 
import type { Routine } from '../types/routine.domain';      

export const mapRoutineToDomain = (data: RoutineDto): Routine[] => {
  return data.map((routine) => ({
    id: routine.id,
    title: routine.name,
    groups: routine.groups.map((group) => ({
      id: group.id,
      title: group.title,
      description: group.description,
      tasks: group.tasks.map((task) => ({
        id: task.id,
        category: task.category as Routine['groups'][number]['tasks'][number]['category'],
        title: task.title,
        description: task.description,
        isMandatory: task.is_mandatory,
      })),
    })),
  }));
};