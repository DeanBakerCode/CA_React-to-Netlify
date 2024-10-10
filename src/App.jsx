
import reactLogo from './assets/react.svg'

import './App.css'

function App() {


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React to Netlify</h1>
      <div className="card">
        <p>
          This is part of the Codeacademy - Full Stack Engineer leanring.
        </p>
        <a href="https://www.codecademy.com">
          <button >
          Codecademy
          </button>
        </a>
      </div>
      <p className="read-the-docs">
        This is mostly boierplate for purpose of completeing the requirments of this lesson.
      </p>
    </>
  )
}

export default App
