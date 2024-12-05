import { cn } from "@/lib/utils";

interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-coffee-medium">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="text-sm text-coffee-medium">
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-coffee-light transition-all duration-500 rounded-full"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}