import { Pencil } from "lucide-react";
import { cn } from "../utils/cn";
import { useEditMode } from "../context/EditModeContext";

interface Props extends React.ComponentPropsWithoutRef<'button'> {
    className?: string;  
}

export function EditItemButton ({ className, ...props }: Props) {
    const { isEditMode } = useEditMode();
    
    return (
        <button
            {...props}
            aria-label="Edit item"
            title="Edit item"
            className={cn(
                "size-6 flex items-center justify-center border-2 bg-blue-500/10 border-blue-500 shadow-blue-500 rounded-lg group hover:bg-blue-500/20 hover:shadow-aura transition-all duration-300 ease-in-out ",
                isEditMode ? "opacity-100 translate-x-0": "opacity-0 -translate-x-2",
                className
            )}
        >
            <Pencil 
                strokeWidth={2} 
                className="size-4 cursor-pointer transition-all duration-300 ease-in-out text-blue-500/60 hover:text-blue-500 "/>
        </button>
    )
}