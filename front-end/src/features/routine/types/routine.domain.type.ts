
export interface Task {
  id: string;
  category: 'BODY' | 'CARE' | 'MIND' | 'STUDY'; 
  title: string;                                
  description?: string;
  isMandatory: boolean;        
  isComplete: boolean;                
}

export interface TaskGroup {
  id: string;
  title: string;                               
  description?: string;
  tasks: Task[];                                
}

export interface Routine {
  id: string;
  title: string;
  description: string;                               
  groups: TaskGroup[];                     
}