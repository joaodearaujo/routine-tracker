export interface RoutineApiResponse {
  id: string;
  title: string;
  groups: Array<{
    id: string;
    title: string;
    tasks: Array<{
      id: string;
      tag: string; 
      title: string;
      description: string;
      is_mandatory: boolean;
    }>;
  }>;
}