import { cn } from "../utils/cn"
import { type LucideIcon } from "lucide-react"

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    classNameButton?: string;    
    classNameIcon?: string;
    classNameWrapper?: string;   
    label: string;
    Icon?: LucideIcon;
}

export function StandardButton({ 
  Icon, 
  classNameButton, 
  classNameIcon, 
  classNameWrapper,
  label, 
  ...props 
}: Props) {
  return (
    <div className={cn(
      "group bg-surface2 pb-1 rounded-[13px] transition-colors duration-300 ease-in-out",
      classNameWrapper
    )}>
      <button
        {...props}
        aria-label={label}
        title={label}
        className={cn(
          "flex items-center justify-center rounded-xl size-fit p-2 bg-surface border border-surface cursor-pointer transition-all duration-300 ease-in-out",
          classNameButton
        )}
      >
        {Icon && (
          <Icon
            strokeWidth={2.5}
            className={cn(
              "size-5 text-muted transition-all duration-300",
              classNameIcon
            )}
          />
        )}
      </button>
    </div>
  );
}
