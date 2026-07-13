import { Routine } from "@/features/routine/components/Routine";
import { useRoutines } from "@/features/routine/hooks/useRoutines";
import { Route, Routes } from "react-router-dom";

export function RoutineRouter() {
    
    const { routines } = useRoutines();
    
    return (
            <div className="max-h-full h-fit overflow-y-auto">
                <Routes>
                    {routines.map(routine => (
                        <Route
                            path={`/${routine?.title}`}
                            key={routine.id}
                            element={<Routine routine={routine}/>}
                        />
                    ))}
                </Routes>
            </div>
    )
}