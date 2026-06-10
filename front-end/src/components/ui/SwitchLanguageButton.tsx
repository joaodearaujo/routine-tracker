import { cn } from "../../utils/cn"

export interface SwitchLanguageButtonProps extends React.ComponentPropsWithRef<'button'> {
    language: string;
    isSelected?: boolean;
}

const SwitchLanguageButton = ({language, isSelected, ...props}: SwitchLanguageButtonProps) => {
  return (
    <button 
    {...props}
    className={cn('flex surface border border-px rounded-lg py-1 px-2.75 items-center justify-center cursor-pointer uppercase', 
                  isSelected ? 'border-line2 bg-surface2' : 'border-line bg-surface'
    )}
    >
      <span className={cn('text-xs ', isSelected ? 'text-ink font-bold' : 'text-muted font-semibold' )}>{language}</span>
    </button>
  )
}

export default SwitchLanguageButton

