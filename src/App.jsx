import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChordSheetJS from "chordsheetjs";
import { Helmet } from "react-helmet";

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
  };

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
  };

  return (
    <div className="App">
      <Helmet>
        <title>Let it be</title>
        <meta property="og:description" content="Chordsheet Description" />
        <meta property="og:title" content="Chord Title" />
      </Helmet>
      <header className="App-header">
        <div className="p-2 m-2 h-4">
          <pre
            className="p-2 w-full textarea resize-none h-32 overflow-y-auto"
            dangerouslySetInnerHTML={{
              __html: getDisp(),
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
