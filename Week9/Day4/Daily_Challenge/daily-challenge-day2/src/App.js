import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const increaseVotes = (languageName) => {
    const updatedLanguages = languages.map((language) => {
      if (language.name === languageName) {
        return { ...language, votes: language.votes + 1 };
      }
      return language;
    });
    setLanguages(updatedLanguages);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Vote Your Language!</h1>
        <ul className='language-list'>
          {languages.map((language) => (
            <li key={language.name} className='language-item'>
              <span className='language-votes'>{language.votes}</span>
              <span className='language-name'>{language.name}</span>
              <button
                className='btn btn-primary vote-button'
                onClick={() => increaseVotes(language.name)}
              >
                Vote
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
