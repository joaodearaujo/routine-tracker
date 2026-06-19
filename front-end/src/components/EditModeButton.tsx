import { cn } from "../utils/cn"
import { SquarePen } from "lucide-react"

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    isEditMode: boolean;
    toggleEditMode: () => void;
}

export function EditModeButton({ isEditMode, toggleEditMode, ...props } : Props) {
    return (
            <button 
                {...props}
                aria-label="Edit Mode"
                title="Edit Mode"
                onClick={toggleEditMode}
                className={cn("flex items-center justify-center rounded-xl size-fit bg-none p-2 bg-surface border cursor-pointer group hover:border-amber shadow-aura hover:shadow-amber/50 transition-all duration-300 ease-in-out",
                    isEditMode ? "border-amber shadow-aura" : "border-line"
                )}
            >
              <SquarePen 
                    className={cn("text-muted size-5 group-hover:text-amber transition-colors duration-300",
                                isEditMode ? "text-amber drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]" : "text-muted"
                    )}
                />
            </button>
    )
}