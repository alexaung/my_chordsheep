import React from "react";
import "./App.css";
import ChordSheetJS from "chordsheetjs";

function App() {
  const getDisp = () => {
    const chordSheet = `
    {title: Let it be}
    {subtitle: ChordSheetJS HtmlTableFormatter example version}
    {Chorus}
    
    Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
    [C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);

    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(chordSheet);
    const formatter = new ChordSheetJS.HtmlTableFormatter();
    const disp = formatter.format(song);
    console.log(disp);
    return disp;
  };

  const getHtmlDivFormatter = () => {
    const chordSheet = `

{title: Let it be}
{subtitle: ChordSheetJS HtmlDivFormatter example version}
{Chorus}

Let it [Am]be, let it [C/G]be, let it [F]be, let it [C]be
[C]Whisper words of [G]wisdom, let it [F]be [C/E] [Dm] [C]`.substring(1);

    const parser = new ChordSheetJS.ChordProParser();
    const song = parser.parse(chordSheet);
    const formatter = new ChordSheetJS.HtmlDivFormatter();
    const disp = formatter.format(song);
    console.log(disp);
    return disp;
  };

  return (
    <div className="App">
      
      <header className="App-header">
      <div >
          <pre
            
            dangerouslySetInnerHTML={{
              __html: getDisp(),
            }}
          />
        </div>
        <div >
          <pre
            
            dangerouslySetInnerHTML={{
              __html: getHtmlDivFormatter(),
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
