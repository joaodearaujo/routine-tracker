import { Moon, SquarePen, Sun } from "lucide-react";
import { useEditMode } from "@/context/EditModeContext";
import { useTheme } from "@/context/ThemeContext";
import { StandardButton } from "@/components/ui/StandardButton";
import { cn } from "@/utils/cn";

export function Settings() {
  const { isEditMode, toggleEditMode } = useEditMode();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="w-fit flex flex-col gap-2 items-center justify-center">

      {/* Theme toggle */}
      <StandardButton
        onClick={toggleTheme}
        Icon={isDark ? Moon : Sun}
        label="Toggle theme"
        classNameIcon={cn(
          "transition-all duration-600 ease-in-out",
          "group-active:rotate-360",
          isDark
            ? "text-purple group-hover:text-purple/80 group-hover:rotate-360 drop-shadow-sm drop-shadow-purple/50"
            : "text-amber group-hover:text-amber/80 group-hover:rotate-180"
        )}
      />

      {/* Edit mode toggle */}
      <StandardButton
        onClick={toggleEditMode}
        Icon={SquarePen}
        label="Toggle edit mode"
        classNameIcon={cn(
          "group-hover:text-edit",
          isEditMode && "text-edit",
          isDark && isEditMode && "drop-shadow-sm drop-shadow-edit/50"
        )}
      />

    </div>
  );
}