
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-1">
      <Toggle
        variant="outline"
        size="sm"
        pressed={theme === "light"}
        onPressedChange={() => setTheme("light")}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </Toggle>
      <Toggle
        variant="outline"
        size="sm"
        pressed={theme === "dark"}
        onPressedChange={() => setTheme("dark")}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
