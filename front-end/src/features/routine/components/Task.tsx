import { useState } from "react";
import { cn } from "../../../utils/cn";
import { ExpandButton } from "./ExpandButton";
import { CheckButton } from "./CheckButton";
import { CATEGORY_COLORS, type CategoryKey } from "../../../constants/categoryColors";

type taskCategories = CategoryKey;

export interface TaskProps {
    id: string;
    category: taskCategories;
    title: string;
    description: string;
    isMandatory: boolean;
}

export function Task({
    category,
    title,
    description,
    isMandatory = false
}: TaskProps) {

    const categoryColor = CATEGORY_COLORS[category as CategoryKey] || CATEGORY_COLORS.STUDY;

    const [ isChecked, setIsChecked ] = useState(false)
    const [ isExpanded, setIsExpanded ] = useState(false)

    const controlCheck = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsChecked(prev => !prev);
    }

    const controlExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(prev => !prev);
    }

    const handlelExpand = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <div className="w-full h-fit flex flex-col items-start bg-surface rounded-xl border border-line overflow-hidden">
            <div
                onClick={handlelExpand}
                className="w-full h-12 flex items-center jutify-between p-4 gap-2"
             >
                <div
                    style={{backgroundColor: categoryColor}} 
                    className={cn("size-2 bg-green-400 rounded-full",
                    )}
                />
                <div className="flex-1 text-left flex items-center gap-2">
                    <span className={cn(
                        "transition-colors text-[15px] font-medium font-secondary duration-200 ease-in-out",
                         isChecked ? 'line-through text-muted' : 'text-ink')}
                    >
                        {title ?? 'Title not found'}
                    </span>
                    
                    {isMandatory && <span className="text-amber text-xs">★</span>}
                </div>
                
                <ExpandButton
                    className="mr-2"
                    onClick={controlExpand}
                    isExpanded={isExpanded}
                />
                <CheckButton
                    onClick={controlCheck}
                    isChecked={isChecked}/>
            </div>
            {
                isExpanded &&
                    <div className="text-[13px] w-full text-left text-ink leading-5 pr-3.5 pb-3.5 pl-8.5">
                        <p>{description ?? 'Description not found'}</p>
                    </div>
            }
        </div>
    )
}