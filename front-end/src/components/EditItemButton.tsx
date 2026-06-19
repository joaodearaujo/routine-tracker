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
            aria-label="Edit Item"
            title="Edit Item"
            className={cn(
                "size-6 border bg-blue-500/10 border-blue-500 rounded-lg flex items-center justify-center group hover:bg-blue-500/20 hover:shadow-aura-strong shadow-blue-500 transition-all duration-300 ease-in-out ",
                isEditMode ? "opacity-100 translate-x-0": "opacity-0 -translate-x-2",
                className
            )}
        >
            <Pencil strokeWidth={2} className="size-4 text-blue-500/60 cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out"/>
        </button>
    )
}