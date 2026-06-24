import { type LucideIcon } from "lucide-react"
import { cn } from "@/utils/cn";

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    classNameButton?: string;    
    classNameIcon?: string;
    classNameWrapper?: string;   
    label: string;
    Icon: LucideIcon;
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
      <div className="size-12 shrink-0 flex items-center justify-center">
        <div className={cn("group bg-surface2 rounded-[13px] pb-1 hover:pb-0.5 active:pb-0",
                classNameWrapper
             )}
        >
          <button
            {...props}
            aria-label={label}
            title={label}
            className={cn(
              "flex items-center justify-center rounded-xl size-fit outline-none p-2 bg-surface border-2 border-surface2 cursor-pointer hover:bg-surface/50",
              classNameButton
            )}
          >
            <Icon
              strokeWidth={2.5}
              className={cn(
                "size-5 text-muted",
                classNameIcon
              )}
            />
          </button>
        </div>
      </div>
  );
}
