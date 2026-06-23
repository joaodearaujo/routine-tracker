import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "@/features/routine/api/task.api";

export function useCreateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createTask,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['routines']}),
        onError: (error: Error) => console.log(error.message)
    })
}