
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleCompleteTask } from '../api/task.api';

export function useToggleCompleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, isComplete }: { taskId: string; isComplete: boolean }) =>
      toggleCompleteTask(taskId, isComplete),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['routines'] }),
    onError: (error: Error) => console.error(error.message),
  });
}