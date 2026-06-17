import type { Routine, Task } from "../types/routine.domain";

export interface RoutineRepository {
  getAllRoutines(): Promise<Routine[]>;
  getRoutineById(routineId: string): Promise<Routine>;
  getTasksByGroupId(groupId: string): Promise<Task[]>;
}