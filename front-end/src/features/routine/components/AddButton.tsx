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
                "flex-1 h-full w-full flex items-center justify-center border-edit/10 bg-none border-2 rounded-xl p-2 cursor-pointer group hover:border-edit transition-all duration-300 ease-in-out hover:shadow-edit/10 shadow-aura",
                classNameButton
            )}
        >
            <span className={cn("font-bold text-center font-secondary text-xs text-edit opacity-30 group-hover:opacity-100 transition-all duration-300 ease-in-out", classNameText)}
            >
                + {title}
            </span>
        </button>
    )
}