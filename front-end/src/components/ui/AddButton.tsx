import { cn } from "@/utils/cn";

interface Props extends React.ComponentPropsWithoutRef<'button'>{
    title: string;
    label: string;
    classNameButton?: string;
    classNameWrapper?: string;
    classNameText?: string;
}

export function AddButton({ 
    title,
    label,
    classNameButton,
    classNameWrapper,
    classNameText,
    ...props 
}: Props) {
    return (
        <div className={cn("group bg-surface2 rounded-[13px] pb-1 hover:pb-0.5 active:pb-0",
                classNameWrapper
             )}
        >
          <button
            {...props}
            aria-label={label}
            title={label}
            className={cn(
              "flex items-center gap-1 justify-center rounded-xl w-full outline-none p-2 bg-surface border-2 border-surface2 cursor-pointer hover:bg-surface/50",
              classNameButton
            )}
          >
            <span className={cn(
                    "font-bold text-center text-nowrap font-secondary text-xs text-edit opacity-80 group-hover:opacity-100 transition-all duration-400 ease-in-out group-hover:rotate-90", classNameText
                )}
            >
                +
            </span>
            <span className={cn(
                    "font-bold text-center text-nowrap font-secondary text-xs text-edit opacity-80 group-hover:opacity-100 transition-all duration-200 ease-in-out", classNameText
                )}
            >
                {title}
            </span>
          </button>
        </div>
    )
}
