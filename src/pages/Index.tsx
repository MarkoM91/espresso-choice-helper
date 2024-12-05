<lov-code>
import { useState } from "react";
import { QuizProgress } from "@/components/QuizProgress";
import { QuizOption } from "@/components/QuizOption";
import { ProductCard } from "@/components/ProductCard";
import { questions, products, type Product } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Coffee } from "lucide-react";

export default function Index() {
  const [current