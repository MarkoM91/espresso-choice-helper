import { useState } from "react";
import { QuizProgress } from "@/components/QuizProgress";
import { QuizOption } from "@/components/QuizOption";
import { ProductCard } from "@/components/ProductCard";
import { questions, products, type Product } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Coffee } from "lucide-react";

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

  const getRecommendations = (): Product[] => {
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
            <Button
              onClick={handleRestart}
              variant="outline"
              className="text-coffee-medium hover:text-coffee-dark"
            >
              Back to Article
            </Button>
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
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="text-coffee-medium hover:text-coffee-dark"
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={handleNext}
                className="bg-coffee-light hover:bg-coffee-medium text-white"
                disabled={!answers[currentStep - 1]}
              >
                {currentStep === questions.length ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <article className="prose prose-slate max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-coffee-dark mb-6">
          Discover the De'Longhi La Specialista Espresso Machine: Your Ultimate Home Barista Experience
        </h1>

        <p className="text-xl text-coffee-medium italic mb-8">
          Transform your kitchen into a premium coffee haven with the De'Longhi La Specialista Espresso Machine. 
          Priced at <strong>$600</strong>, experience barista-quality beverages without leaving the comfort of your home.
        </p>

        <div className="bg-coffee-cream/20 p-8 rounded-xl my-12 text-center">
          <h2 className="text-2xl font-semibold text-coffee-dark mb-4">
            Not sure if this is the right machine for you?
          </h2>
          <p className="text-coffee-medium mb-6">
            Take our quick quiz to find the perfect espresso machine that matches your needs and preferences.
          </p>
          <Button
            onClick={() => setShowQuiz(true)}
            className="bg-coffee-light hover:bg-coffee-medium text-white"
          >
            <Coffee className="w-5 h-5 mr-2" />
            Find Your Perfect Espresso Machine
          </Button>
        </div>

        <h2 className="text-2xl font-semibold text-coffee-dark mt-12">Why Choose the De'Longhi La Specialista?</h2>
        
        <p className="text-coffee-medium">
          The <strong>De'Longhi La Specialista</strong>, available at an attractive price point of <strong>$600</strong>, 
          is more than just an espresso machine; it's a gateway to crafting café-quality drinks tailored to your taste.
        </p>

        <p className="text-coffee-medium mb-6">
          With its user-friendly interface and advanced features, you can easily create your favorite espresso drinks 
          with precision and ease. Whether you're a beginner or a seasoned barista, this machine is designed to meet 
          your needs and elevate your coffee experience.
        </p>

        <h2 className="text-2xl font-semibold text-coffee-dark mt-12">Key Features</h2>
        <ul className="list-disc list-inside text-coffee-medium mb-6">
          <li>Dual heating system for optimal brewing and steaming</li>
          <li>Integrated grinder for fresh coffee grounds</li>
          <li>Customizable settings for personalized drinks</li>
          <li>Elegant design that complements any kitchen</li>
        </ul>

        <p className="text-coffee-medium mb-6">
          Don't miss out on the opportunity to enhance your coffee-making skills and impress your friends and family 
          with delicious espresso drinks. The De'Longhi La Specialista is your perfect partner in creating café-quality 
          beverages at home.
        </p>

        <h2 className="text-2xl font-semibold text-coffee-dark mt-12">Get Started Today!</h2>
        <p className="text-coffee-medium mb-6">
          Ready to take your coffee experience to the next level? Explore our selection of espresso machines and 
          find the perfect fit for your home. 
        </p>
      </article>
    </div>
  );
}
