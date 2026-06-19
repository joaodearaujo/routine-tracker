import { type LucideIcon } from "lucide-react";
import { cn } from "../../../utils/cn";

interface CheckButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    isChecked?: boolean;
    Icon: LucideIcon;
    className?: string; 
}

export function CheckButton({ isChecked, Icon, className, ...props }: CheckButtonProps) {
    return (
        <button 
            aria-label="Check Button"
            title="Check Button"
            {...props}
            className={cn(
                "size-6 border-2 rounded-lg flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:shadow-aura shadow-muted/20", 
                isChecked ? 'bg-ok border-ok' : 'bg-none  border-line',
                className
                
            )}
        >
            <Icon strokeWidth={4} 
                   className={cn(
                        "size-3", 
                        isChecked ? 'text-surface' : 'hidden'
                   )}
                />
        </button>
    )
}