import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ChordSheetJS from "chordsheetjs"; 

function App() {
  
const getDisp = () => {
  const chordSheet = `
  Am         C/G        F          C
Let it be, let it be, let it be, let it be
C                G              F  C/E Dm C
Whisper words of wisdom, let it be`.substring(1);

const parser = new ChordSheetJS.ChordSheetParser();
const song = parser.parse(chordSheet);
const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);
return disp;
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Chord!</p>
        <div className="p-2 m-2 h-4">
                        <pre
                          className="p-2 w-96 textarea textarea-primary resize-none h-32 overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: getDisp(),
                          }}
                        />
                      </div>
        
        
      </header>
    </div>
  )
}

export default App
