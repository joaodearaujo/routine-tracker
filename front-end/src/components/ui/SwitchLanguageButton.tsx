import { cn } from "../../utils/cn"

interface SwitchLanguageButtonProps extends React.ComponentPropsWithRef<'button'> {
    language: string;
    isSelected?: boolean;
}

const SwitchLanguageButton = ({language, isSelected, ...props}: SwitchLanguageButtonProps) => {
  return (
    <button 
    {...props}
    className={cn('flex surface border border-px rounded-lg py-[4px] px-[11px] items-center justify-center cursor-pointer', 
                  isSelected ? 'border-line2 bg-surface2' : 'border-line bg-surface'
    )}
    >
      <span className={cn('text-xs ', isSelected ? 'text-ink font-bold' : 'text-muted font-semibold' )}>{language}</span>
    </button>
  )
}

export default SwitchLanguageButton

