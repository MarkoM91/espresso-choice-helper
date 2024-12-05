export interface Question {
  id: number;
  text: string;
  options: string[];
}

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  imageUrl: string;
  criteria: {
    budget: string;
    experience: string;
    features: string;
    space: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What's your budget for an espresso machine?",
    options: ["Under $500", "$500 - $1500", "Over $1500"],
  },
  {
    id: 2,
    text: "How much experience do you have with espresso machines?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: 3,
    text: "Do you need advanced features like pressure profiling?",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    text: "How much counter space do you have available?",
    options: ["Compact", "Medium", "Large"],
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Breville Bambino Plus",
    price: "$499",
    description: "Perfect for beginners with automatic milk texturing.",
    features: [
      "Automatic microfoam milk texturing",
      "Compact design",
      "3-second heat up time",
      "Precise extraction temperature",
    ],
    imageUrl: "/placeholder.svg",
    criteria: {
      budget: "Under $500",
      experience: "Beginner",
      features: "No",
      space: "Compact",
    },
  },
  {
    id: 2,
    name: "Rancilio Silvia Pro X",
    price: "$1,690",
    description: "Professional-grade machine with dual boilers.",
    features: [
      "Dual boilers",
      "PID temperature control",
      "Commercial-grade build",
      "58mm portafilter",
    ],
    imageUrl: "/placeholder.svg",
    criteria: {
      budget: "Over $1500",
      experience: "Advanced",
      features: "Yes",
      space: "Medium",
    },
  },
  {
    id: 3,
    name: "Gaggia Classic Pro",
    price: "$449",
    description: "Traditional Italian design with commercial components.",
    features: [
      "Commercial 58mm portafilter",
      "Professional steam wand",
      "Solenoid valve",
      "Quick heat-up time",
    ],
    imageUrl: "/placeholder.svg",
    criteria: {
      budget: "Under $500",
      experience: "Intermediate",
      features: "No",
      space: "Compact",
    },
  },
];