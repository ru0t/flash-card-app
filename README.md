# Flash Card App

This is a simple Flash Card application built with React and Vite. It allows users to review questions and answers in a flashcard format, with navigation for previous and next cards, and a toggle to reveal/hide answers. A progress bar also indicates the user's progress through the quiz.

## Features

- **Interactive Flash Cards:** Displays questions with the ability to toggle and reveal answers.
- **Navigation:** Easily move between flashcards using 'Previous' and 'Next' buttons.
- **Progress Bar:** Visually track your progress through the set of questions.
- **Responsive Design:**

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast frontend build tool and dev server.
- **JavaScript (ES6+):** For application logic.
- **CSS:** For styling the application.

## Project Structure

```
flash-card-app/
├── public/
├── src/
│   ├── components/
│   │   ├── FlashCard.jsx
│   │   └── ProgressBar.jsx
│   ├── data.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── eslint.config.js
└── vite.config.js
```

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd flash-card-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, and you can view the application in your browser, usually at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the project files.
- `npm run preview`: Serves the `dist` folder locally for production preview.

## Customizing Questions and Answers

The quiz questions and answers are defined in `src/data.js`. You can modify this file to add, remove, or change the flashcard content. Each item in the `questionsAndAnswers` array is an object with a single key-value pair, where the key is the question and the value is the answer.

```javascript
export const questionsAndAnswers = [
  {
    "What is React?": "A JavaScript library for building user interfaces.",
  },
  // Add more questions and answers here
];
```
