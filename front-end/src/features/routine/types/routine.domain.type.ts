
export interface Task {
  groupId: string;
  id: string;
  category: 'BODY' | 'CARE' | 'MIND' | 'STUDY'; 
  title: string;                                
  description?: string;
  isComplete: boolean;                
  isMandatory: boolean;        
}

export interface TaskGroup {
  routineId: string;
  id: string;
  title: string;                               
  description?: string;
  tasks: Task[];                                
}

export interface Routine {
  id: string;
  title: string;
  description?: string;                               
  groups: TaskGroup[];                     
}