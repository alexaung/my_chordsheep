import React from 'react';
import logo from './logo.svg'
import './App.css'
import ChordSheetJS from "chordsheetjs"; 

function App() {
  
const getDisp = () => {
  const chordSheet = `

Intro : Dbm A B A B Dbm A B Gb Dbm Dbm
[Dbm]ငါ့နေ့ရက်များ . . . [A]အတ္တရဲ့ပြေးလမ်းပေါ် တစ်ယောက်ထဲ . . .[Dbm]တရွေ့ရွေ့နဲ့ဖြတ်သန်း . . .[A]နေဝင်ညများကူးဖြတ်လိုက်စမ်း . . .[Dbm]
[Dbm]ရိုက်ခတ်များ . . .[A]ပစ်လွှတ်တဲ့မြားသွားတွေလိုပဲ[Dbm]. . . [Dbm]ရင်မှာစူးနစ်လို့နေခဲ့ . . . အဆိပ်တတ်ခဲ့ပြီ[A]မင်းတွေ့လား . . .[Dbm]
*[B]အတ္တရဲ့ရိုက်ချက်များ/ပြေးလမ်းက . . . [A](ငါ)လွယ်လွယ်မေ့ထားမလား/ထွက်သွားမလား . . .
[B]သွေးအေးစွာ အရှုံးပေးမလား . . .[Ab]နောက်လှည့်ပြန်မလား . . .
[Dbm]ဒဏ်ရာများ . . .[A]မေ့ပစ်နိုင်လား . . . [E][B][AB](အနိုင်ယူချင်တဲ့ငါစိတ်များ) . . .[A][E][Dbm][B][B] [A][B]

[Dbm]အတ္တညများ . . . [A]တစ်ခုခုတော့ မှားယွင်းနေမှာပဲ . . .
[Dbm]သွေးပျက်ရင်းဖြတ်သန်း . . .[A]နောက်ကအရိပ်တွေ လိုက်လို့လာခဲ့. . .[Dbm]
[Dbm]ငါစိတ်ဓါတ်များ . . .[A]တမြည့်မြည့်နဲ့ကျွမ်းတောက်လောင်နေခဲ့[Dbm
[Dbm]ငါဟာပြေးရင်းပြေးနေခဲ့ . . . တစ်နေ့နေ့ရောက်မယ်[A]မင်းကြည့်နေလိုက် . . .
[Dbm]တစ်နေ့နေ့တော့ရောက်မှာပဲ . . . 
Music & (Cho with Key F) FADE
`.substring(1);

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
                          className="p-2 w-full textarea resize-none h-32 overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: getDisp(),
                          }}
                        />
                      </div>

                      <p>HtmlDivFormatter!</p>
        
        {/* <div className="p-2 m-2 h-4">
                        <pre
                          className="p-2 w-full textarea resize-none h-32 overflow-y-auto"
                          dangerouslySetInnerHTML={{
                            __html: getHtmlDivFormatter(),
                          }}
                        />
                      </div> */}
        
        
      </header>
    </div>
  )
}

export default App
