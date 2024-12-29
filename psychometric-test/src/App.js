import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What type of tasks do you enjoy the most?",
    options: ["A) Solving puzzles or problems", "B) Leading a team", "C) Helping others", "D) Creating or designing something"]
  },
  {
    question: "How do you feel about working under pressure?",
    options: ["A) I thrive under pressure", "B) I can handle it occasionally", "C) I prefer steady, predictable tasks", "D) I feel overwhelmed easily"]
  },
  {
    question: "What motivates you the most at work?",
    options: ["A) Financial rewards", "B) Recognition and respect", "C) Making a difference", "D) Personal growth"]
  },
  {
    question: "Which environment do you prefer working in?",
    options: ["A) Office setting", "B) Outdoors", "C) Laboratory", "D) Remote/From home"]
  },
  {
    question: "How do you prefer solving problems?",
    options: ["A) Logically and analytically", "B) Creatively and innovatively", "C) Collaboratively with others", "D) Independently"]
  },
  {
    question: "What kind of activities do you enjoy in your free time?",
    options: ["A) Reading or researching", "B) Socializing with friends", "C) Crafting or creating art", "D) Physical activities or sports"]
  },
  {
    question: "How important is job stability to you?",
    options: ["A) Extremely important", "B) Somewhat important", "C) Not very important", "D) I prefer flexibility over stability"]
  },
  {
    question: "How do you approach learning new skills?",
    options: ["A) With enthusiasm and curiosity", "B) Only if required for my job", "C) With hesitation", "D) I avoid it if possible"]
  },
  {
    question: "What describes your ideal workday?",
    options: ["A) Structured and planned", "B) Dynamic and varied", "C) Collaborative and interactive", "D) Independent and quiet"]
  },
  {
    question: "What kind of impact do you want your work to have?",
    options: ["A) Solve global problems", "B) Inspire or lead others", "C) Help individuals directly", "D) Drive innovation"]
  },
];

const App = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/api/submit-answers/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
    });
    if (response.ok) {
        alert('Answers submitted successfully!');
    } else {
        alert('Failed to submit answers.');
    }
};
  return (
    <div className="App">
      <h1>Psychometric Test</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index}>
            <h3>{q.question}</h3>
            {q.options.map((option, i) => (
              <div key={i}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option.charAt(0)}
                  checked={answers[index] === option.charAt(0)}
                  onChange={() => handleChange(index, option.charAt(0))}
                />
                {option}
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;