import { cn } from "@/lib/utils";

interface QuizOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export function QuizOption({ label, selected, onClick }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full p-4 rounded-lg text-left transition-all duration-200",
        "border-2 hover:border-coffee-light",
        selected
          ? "border-coffee-light bg-coffee-light/10 text-coffee-dark"
          : "border-border bg-white text-coffee-medium"
      )}
    >
      {label}
    </button>
  );
}