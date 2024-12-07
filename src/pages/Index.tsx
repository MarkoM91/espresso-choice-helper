import { useState } from "react";
import { QuizProgress } from "@/components/QuizProgress";
import { QuizOption } from "@/components/QuizOption";
import { ProductCard } from "@/components/ProductCard";
import { questions, products } from "@/data/quizData";
import { QuizIntro } from "@/components/QuizIntro";

export default function Index() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep - 1] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setAnswers([]);
    setShowResults(false);
    setShowQuiz(false);
  };

  const getRecommendations = () => {
    if (answers.length < 4) return [];
    
    const [budget, experience, features, space] = answers;
    
    return products.filter((product) => {
      const criteria = product.criteria;
      let score = 0;
      
      if (criteria.budget === budget) score++;
      if (criteria.experience === experience) score++;
      if (criteria.features === features) score++;
      if (criteria.space === space) score++;
      
      return score >= 2;
    });
  };

  const currentQuestion = questions[currentStep - 1];
  const recommendations = getRecommendations();

  if (showResults) {
    return (
      <div className="min-h-screen bg-coffee-cream/30 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-coffee-dark mb-4">
              Your Perfect Espresso Machine
            </h1>
            <p className="text-coffee-medium mb-8">
              Based on your preferences, here are our top recommendations:
            </p>
            <button
              onClick={handleRestart}
              className="text-coffee-medium hover:text-coffee-dark underline"
            >
              Take Quiz Again
            </button>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-coffee-cream/30 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="max-w-xl mx-auto">
          <QuizProgress currentStep={currentStep} totalSteps={questions.length} />
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-coffee-dark mb-6">
              {currentQuestion.text}
            </h2>
            
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option) => (
                <QuizOption
                  key={option}
                  label={option}
                  selected={answers[currentStep - 1] === option}
                  onClick={() => handleAnswer(option)}
                />
              ))}
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                className="text-coffee-medium hover:text-coffee-dark"
                disabled={currentStep === 1}
              >
                Previous
              </button>
              
              <button
                onClick={handleNext}
                className="bg-coffee-light hover:bg-coffee-medium text-white px-4 py-2 rounded"
                disabled={!answers[currentStep - 1]}
              >
                {currentStep === questions.length ? "See Results" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <QuizIntro onStartQuiz={() => setShowQuiz(true)} />
    </div>
  );
}