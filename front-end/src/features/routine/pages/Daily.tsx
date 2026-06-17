import { taskBlocksList } from "../../../constants/taskGroups";
import { TaskGroup } from "../components/TaskGroup";

export function Daily() {
    return (
        <>
            <p className="text-[13px] text-left text-muted">Resets Every Day. Follow The Order, Not The Clock — Your Timing Depends On Others. Tap A Card For Instructions. <span className="text-amber text-xs">★</span> Items Are Core.</p>
            {taskBlocksList.map(group => <TaskGroup  key={group.title} {...group}/>)}
        </>
    )
}