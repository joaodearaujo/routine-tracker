import { TaskBlock } from "../src/components/TaskBlock";
import { taskBlocksList } from "../src/constants/taskBlocksList";

export function Daily() {
    return (
        <div className="w-full h-full flex flex-col gap-2 ">
            {taskBlocksList.map(taskBlock => <TaskBlock  key={taskBlock.title} title={taskBlock.title} description={taskBlock.description}/>)}
        </div>
    )
}