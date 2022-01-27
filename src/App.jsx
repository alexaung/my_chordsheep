import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ChordSheetJS from "chordsheetjs"; 
import "react-jinke-music-player/assets/index.css";

function App() {
  
const getDisp = () => {
  const chordSheet = `

{title: Let it be}
{subtitle: ChordSheetJS example version}
{Chorus}

Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);

const parser = new ChordSheetJS.ChordProParser();
const song = parser.parse(chordSheet);
const formatter = new ChordSheetJS.HtmlTableFormatter();
const disp = formatter.format(song);
console.log(disp);
return disp;
}

const getHtmlDivFormatter = () => {
  const chordSheet = `

{title: Let it be}
{subtitle: ChordSheetJS example version}
{Chorus}

Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);

const parser = new ChordSheetJS.ChordProParser();
const song = parser.parse(chordSheet);
const formatter = new ChordSheetJS.HtmlDivFormatter();
const disp = formatter.format(song);
console.log(disp);
return disp;
}


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HtmlTableFormatter!</p>
        
        <div className="p-2 m-2 h-4">
                        <pre
                          className="p-2 w-96 textarea resize-none h-32 overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: getDisp(),
                          }}
                        />
                      </div>

                      <p>HtmlDivFormatter!</p>
        
        <div className="p-2 m-2 h-4">
                        <pre
                          className="p-2 w-96 textarea resize-none h-32 overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: getHtmlDivFormatter(),
                          }}
                        />
                      </div>
        
        
      </header>
    </div>
  )
}

export default App
