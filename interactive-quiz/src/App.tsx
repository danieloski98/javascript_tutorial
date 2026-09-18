import { useState } from 'react'
import './App.css'

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  
const questionsArray = [
  {
    question: "What is the capital of France",
    options: ["Berlin","Paris","Washington","London"],
    correctAnswer: ""
  },
  {
    question: "What is the chemical symbol for Gold",
    options: ["Au","Pb","K","Li"],
    correctAnswer: 0
  },
  {
     question: "What is the number of continents in the world",
    options: ["9","5","7","6"],
    correctAnswer: 2
  },
  {
     question: "How many bones are in the human body",
    options: ["400","79","200","216"],
    correctAnswer: 3
  },
  {
     question: "What is the chemical symbol for Silver",
    options: ["Ag","Pb","K","Li"],
    correctAnswer: 0
  }
];
}
