import { useQuery } from "@tanstack/react-query";
import { getRoutines } from "../api/routine.api";
import { mapRoutineToDomain } from "../mappers/routine.mapper";

export function useRoutines() {
  const query = useQuery({
    queryKey: ['routines'],
    queryFn: getRoutines,
  });

  const mapped = query.data ? mapRoutineToDomain(query.data) : [];

  return {
    routines:  mapped,
    routine: mapped[0],
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
