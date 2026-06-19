import { X } from "lucide-react";
import { cn } from "../utils/cn";
import { useEditMode } from "../context/EditModeContext";

interface Props extends React.ComponentPropsWithoutRef<'button'> {
    className?: string;    
}

export function DeleteButton ({ className, ...props }: Props) {

    const { isEditMode } = useEditMode();
    
    return (
        <button
            {...props}
            aria-label="Delete"
            title="Delete"
            className={cn(
                "size-6 border-2 bg-red-500/10 border-red-500 rounded-lg flex items-center justify-center group hover:bg-red-500/20 hover:shadow-aura shadow-red-500 transition-all duration-500 ease-in-out",
                isEditMode ? "opacity-100": "opacity-0",
                className
            )}
        >
            <X  strokeWidth={3} className="size-4 text-red-500/60 cursor-pointer hover:text-red-500 transition-all duration-400 ease-in-out"/>
        </button>
    )
}