import { useState,useEffect} from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [CSS, setCss] = useState('');
  const [JS, setJs] = useState('');
 
  const [srcDoc,setSrcDoc]=useState('')

  useEffect(()=>{
    const timeOut=setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${CSS}</style>
        <script> ${JS} </script>
      </html>
      `)
    },250)
    return ()=>clearTimeout(timeOut)
  },[html,CSS,JS])


  return (
    <>
      <div className="pane top-pane">
        <Editor name="HTML" language="xml" value={html} onChange={setHtml} />
        <Editor name="CSS" language="css" value={CSS} onChange={setCss} />
        <Editor name="JS" language="javascript" value={JS} onChange={setJs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts "
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
