---

# 🟦 Wordle Game Clone

A clean and simple clone of the popular **Wordle** game, built with **React**. Originally created as part of a technical challenge, now shared as an open-source project for anyone to explore, play, or build upon.

---

## 🚀 Installation

To run the project locally using Docker:

1. **Clone the repository**
   ```bash
   git clone https://github.com/lahbibsemlali/OpenDevEd-Wordle.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd OpenDevEd-Wordle
   ```

3. **Start the app with Docker Compose**
   ```bash
   docker compose up --build -d
   ```

4. **Open the game in your browser**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## 🧠 How It Works

- The game uses a 5-letter word list loaded from a local JSON file.
- A random target word is selected on page load.
- The UI renders a 5x6 grid where users can input their guesses.
- Feedback is given after each guess:
  - 🟩 Correct letter in the correct position
  - 🟨 Correct letter in the wrong position
  - ⬜ Letter not in the word
- State is managed with React's `useState` and `useEffect` hooks.

---

## ✨ Features

- 🌙 Night Mode toggle
- ℹ️ "How to Play" instructions modal
- ❌ Alerts for invalid or repeated guesses
- 🎉 End-game modals for win/loss feedback
- 🧪 Simple and readable UI with clear interactions

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [react-modal](https://github.com/reactjs/react-modal)
- [react-hot-toast](https://react-hot-toast.com/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Suggestions, issues, and pull requests are welcome! Feel free to fork the repo and improve it however you like.

---