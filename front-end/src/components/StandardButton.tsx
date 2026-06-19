import { cn } from "../utils/cn"
import { type LucideIcon } from "lucide-react"

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    classNameButton?: string;    
    classNameIcon?: string;    
    label: string;
    Icon?: LucideIcon;
}

export function StandardButton({ Icon, classNameButton, classNameIcon, label, ...props } : Props) {
    return (
            <button 
                {...props}
                aria-label={label}
                title={label}
                className={cn(
                    "flex items-center justify-center rounded-xl size-fit bg-none p-2 bg-surface border-2 border-line cursor-pointer group shadow-aura transition-all duration-300 ease-in-out",
                    classNameButton
                )}
            >
            { Icon &&<Icon 
                    strokeWidth={2.5}
                    className={cn(
                        "text-muted size-5 transition-colors duration-300",
                        classNameIcon
                    )}
                />}
            </button>
    )
}