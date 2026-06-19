import { cn } from "../../../utils/cn";

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    title: string;
    className?: string;
}

export function AddButton({ title, className,...props }: Props) {
   
    return (
        <button
            {...props}
            aria-label="Add Item"
            title="Add Item"
            className={cn("h-full flex items-center justify-center border-green-500/20 border rounded-xl p-2 border-dashed cursor-pointer group hover:border-green-500 transition-all duration-300 ease-in-out hover:shadow-green-500/10 shadow-aura",
            className
            )}
        >
            <span className={cn("font-bold font-secondary text-xs text-green-500/50 group-hover:text-green-500 transition-colors duration-300 ease-in-out")}
            >
                + {title}
            </span>
        </button>
    )
}