import { cn } from "../utils/cn";

interface LanguageButtonProps extends React.ComponentPropsWithRef<'button'> {
    title: string;
    isSelected?: boolean;
}

export function LanguageButton({title, isSelected, ...props}: LanguageButtonProps) {
  return (
    <button 
      {...props}
      className={cn(
        'flex surface border border-px rounded-lg py-1 px-2.75 items-center justify-center cursor-pointer uppercase', 
        isSelected ? 'border-line2 bg-surface2' : 'border-line bg-surface'
      )}
    >
      <span className={cn(
        'text-xs ', 
        isSelected ? 'text-ink font-bold' : 'text-muted font-semibold' 
        )}
      >
        {title}
      </span>
    </button>
  )
}


