import { cn } from "../utils/cn";

interface Dot {
    color: string; 
    className?: string;
}

export function Dot({ color, className }: Dot) {
    return <div 
                style={{
                    backgroundColor: color, 
                    boxShadow: `0 0 10px ${color}`
                }} 
                className={cn(
                    "size-1.5 rounded-full ",
                    "bg-green-400 sshadow-green-500",
                    className
                )}
            />
}