import { Check } from "lucide-react";
import { cn } from "../../../utils/cn";

interface CheckButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    isChecked?: boolean;
}

export function CheckButton({ isChecked, ...props }: CheckButtonProps) {
    return (
        <button 
            {...props}
            className={cn(
                "size-6 border-2 rounded-lg flex items-center justify-center cursor-pointer transition-all ease-in-out duration-400 hover:shadow-aura shadow-muted/20", 
                isChecked ? 'bg-ok border-ok' : 'bg-none  border-line'
            )}
        >
            <Check strokeWidth={4} 
                   className={cn(
                        "size-3", 
                        isChecked ? 'text-surface' : 'hidden'
                   )}
                />
        </button>
    )
}