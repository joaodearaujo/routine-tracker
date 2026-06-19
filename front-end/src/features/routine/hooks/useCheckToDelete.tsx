import { useState } from "react";

export function useCheckToDelete() {
    const [ isCheckedToDelete, setIsCheckedToDelete ] = useState(false)

    const handleCheckToDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsCheckedToDelete(prev => !prev);
    };

    return {handleCheckToDelete, isCheckedToDelete};
}