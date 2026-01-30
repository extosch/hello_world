import React, { useState } from 'react'
import { replaceDigits } from './utils/replaceDigits'

// Main application component
export default function App(): JSX.Element {
  // Controlled input state
  const [text, setText] = useState<string>('')
  // Output after processing
  const [output, setOutput] = useState<string>('')

  // Handle button click: process input and set output
  const handleProcess = () => {
    setOutput(replaceDigits(text))
  }

  return (
    <div className="app-shell">
      <header className="header">
        <img src="/src/assets/logo.svg" className="logo" alt="logo" />
        <h1>Minimal Text Processor</h1>
      </header>

      <main className="card">
        <p className="description">
          Gebe Text ein und klicke auf den Button — alle Zahlen werden durch
          '*' ersetzt.
        </p>

        <label className="label" htmlFor="input">
          Eingabetext
        </label>
        <textarea
          id="input"
          data-testid="input"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Schreibe etwas mit Zahlen, z.B. "
        />

        <button data-testid="process-button" className="btn" onClick={handleProcess}>
          Verarbeiten
        </button>

        <label className="label" htmlFor="output">
          Ausgabe
        </label>
        <textarea
          id="output"
          data-testid="output"
          className="output"
          value={output}
          readOnly
        />
      </main>

      <footer className="footer">Elegant · Minimal · TypeScript + React</footer>
    </div>
  )
}
