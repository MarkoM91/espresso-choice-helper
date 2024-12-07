import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizIntroProps {
  onStartQuiz: () => void;
}

export function QuizIntro({ onStartQuiz }: QuizIntroProps) {
  return (
    <div className="bg-coffee-cream/20 p-8 rounded-xl my-12 text-center">
      <h2 className="text-3xl font-semibold text-[#4A2512] mb-4">
        Not sure if this is the right machine for you?
      </h2>
      <p className="text-coffee-medium text-lg mb-8">
        Take our quick quiz to find the perfect espresso machine that matches your needs and preferences.
      </p>
      <Button
        onClick={onStartQuiz}
        className="bg-coffee-light hover:bg-coffee-medium text-white text-lg px-8 py-6 h-auto"
      >
        <Coffee className="w-5 h-5 mr-2" />
        Find Your Perfect Espresso Machine
      </Button>
    </div>
  );
}