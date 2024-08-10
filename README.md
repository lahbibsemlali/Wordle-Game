### README.md

```markdown
# Wordle Game

The game allows users to guess a five-letter word within six attempts, with feedback given on each guess.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Approach and Decisions](#approach-and-decisions)
- [Additional Features](#additional-features)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/wordle-game.git](https://github.com/lahbibsemlali/OpenDevEd-Wordle.git
   cd OpenDevEd-Wordle
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Approach and Decisions

### Overall Approach

The main objective was to create a functional and visually appealing Wordle-style game using React. The application provides a simple and intuitive user interface with responsive design principles to ensure it works well on different screen sizes.

### Key Decisions

1. **State Management:** 
   - Used React's `useState` and `useEffect` hooks for state management and side effects.
   - Managed game state including guesses, current guess, game status (win/lose), and night mode toggle.

2. **Component Structure:**
   - **App Component:** The main component managing the game state and rendering other components.
   - **Line Component:** Renders each line of the game grid with feedback based on the guess.

3. **Styling:**
   - Used CSS with a focus on simplicity and readability.
   - Implemented light and dark modes for better user experience.

4. **Random Word Generation:**
   - Loaded a list of words from a JSON file and selected a random word as the solution for each game.

### Additional Features

1. **Night Mode:** 
   - Implemented a toggle button to switch between day and night modes, providing a better user experience.
  
2. **Modal for Game Over:**
   - Used `react-modal` to display a modal when the game is over, providing feedback to the user and an option to restart the game.

## Usage

- Enter a five-letter word and press Enter or click the guess button.
- You have six attempts to guess the correct word.
- The tiles will change color to indicate how close your guess was:
  - **Green:** Correct letter in the correct position.
  - **Yellow:** Correct letter in the wrong position.
  - **Gray:** Incorrect letter.
- Use the toggle button to switch between day and night modes.

## Acknowledgements

- This project was inspired by the original Wordle game.
- Fonts used: [Poppins](https://fonts.google.com/specimen/Poppins)
- Modal library: [react-modal](https://github.com/reactjs/react-modal)

---

Feel free to reach out if you have any questions or need further assistance!
```

### Explanation:

1. **Getting Started:** Provides clear instructions on prerequisites, installation, and how to run the application locally.
2. **Approach and Decisions:** Explains your overall approach, key decisions made during development, and component structure.
3. **Additional Features:** Highlights any additional features you implemented, such as night mode and the game-over modal.
4. **Usage:** Briefly explains how to play the game.
5. **Acknowledgements:** Credits any external resources or inspirations for your project.

This README file should provide a comprehensive guide to anyone looking to understand, run, and use your application.
