import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRoutine } from "@/features/routine/api/routine.api";

export function useCreateRoutine() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createRoutine,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['routines']}),
        onError: (error: Error) => console.log(error.message) 
    });
}