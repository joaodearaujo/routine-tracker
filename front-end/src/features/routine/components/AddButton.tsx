import { cn } from "../../../utils/cn";

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    title: string;
    classNameButton?: string;
    classNameText?: string;
}

export function AddButton({ title, classNameButton,classNameText,...props }: Props) {
    
    return (
        <button
            {...props}
            aria-label="Add Item"
            title="Add Item"
            className={cn(
                "flex-1 h-full flex items-center justify-center border-edit/40 bg-none border-2 rounded-xl p-2 border-dashed cursor-pointer group hover:border-edit transition-all duration-300 ease-in-out hover:shadow-edit/10 shadow-aura",
                classNameButton
            )}
        >
            <span className={cn("font-bold text-center font-secondary text-xs text-edit/50 group-hover:text-edit transition-colors duration-300 ease-in-out", classNameText)}
            >
                + {title}
            </span>
        </button>
    )
}