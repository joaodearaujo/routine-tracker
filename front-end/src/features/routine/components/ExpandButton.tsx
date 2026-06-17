import { ChevronDown } from "lucide-react";
import { cn } from "../../../utils/cn";

interface ExpandButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    isExpanded: boolean;
    className: string;
}

export function ExpandButton({
    isExpanded,
    className,
    ...props
}: ExpandButtonProps) {
    return (
        <button 
            {...props}
            className="cursor-pointer size-fit flex border-none items-center justify-center"
        >
            <ChevronDown 
                strokeWidth={3}
                className={cn(
                        "size-3.5 text-muted transition-transform duration-200 ease-in-out",
                        isExpanded ? 'rotate-180' : 'rotate-0',
                        className
                    )}
            />
        </button>
    )
}