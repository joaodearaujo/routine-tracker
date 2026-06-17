import { Link } from "react-router-dom"
import { cn } from "../utils/cn"

export interface SetPageButtonProps {
    title: string;
    itemsDone?: number;
    totalItems?: number;
    label?: string;
    isActive?: boolean;
}

export function SetPageButton({title, label, isActive}: SetPageButtonProps) {
  return (
    <Link to={`/${name}`}
        className={cn(
            'flex flex-col flex-1 surface border border-px rounded-lg py-2 px-2.75 items-center justify-center cursor-pointer',
            isActive ? 'border-line2 bg-surface2' : 'border-line bg-surface'
          )}
      >
        <span className={cn(
                'text-sm capitalize font-secondary',
                isActive ? 'text-ink font-bold' : 'text-muted font-medium'
          )}
        >
          {title}
        </span>
        <span className={cn(
                'text-xs font-secondary',
                isActive ? 'text-ink font-bold' : 'text-muted font-semibold'
          )}
        >
          {label}
        </span>
    </Link>
  )
};
