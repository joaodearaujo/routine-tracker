import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "@/features/routine/api/routine.api";

export function useDelete() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteItem,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['routines']}),
        onError: (error: Error) => console.log(error.message) 
    });
}