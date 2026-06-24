import { ProgressRing } from "@/components/Header/ProgressRing"
import { useTasks } from "@/features/routine/hooks/useTasks";

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';

export function Greeting() {

    const { tasks } = useTasks();
    console.log(tasks)

    const total = tasks.filter(task => task.isMandatory).length
    const current = tasks.filter(task => task.isComplete && task.isMandatory).length

    return (
        <div className='w-full rounded-xl pb-1 bg-surface2'>
            <div className='w-full h-fit flex bg-surface rounded-xl p-4 items-center border-2 border-surface2'>
                <div className='flex-1 h-full flex flex-col gap-0.5 mr-4 text-left'>

                    <h1 className='text-ink font-semibold text-xl font-secondary'>
                        Good {partOfTheDay ?? '!'}, {userName ?? 'User'}!
                    </h1>

                    <p className='text-muted text-sm'>{date ?? '-' }</p>
                </div>

                <ProgressRing current={current} total={total}/>
            </div>
        </div>
    )
}