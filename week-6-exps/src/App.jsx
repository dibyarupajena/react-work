function App() {
  return <div>
  <CardWrapper innerComponent={<TextComponent />} />
  <CardWrapper innerComponent={<TextComponent2 />} />
  </div>
  
  }
  
  function CardWrapper({innerComponent}) {
  // and inside the div, renders the prop
  return <div style={{border: "2px solid black"}}>
  {innerComponent}
  </div>
  }

  function TextComponent () {
  return <div>
  hi there
  </div>
  }
  function TextComponent2 () {
    return <div>
    hi there but I'm from another div but I have the same wrapper wrapped around me!!!
    </div>
    }

  export default App