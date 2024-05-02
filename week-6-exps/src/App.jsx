import { useState } from "react"

//do npm install then npm run dev to see the project
// using react dev tools see how these components vs the previous git commit version 
//re-renders and if this solves the problem of unneccesary re-renderings in childs or not
function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  )
}

//wherever you keep the state variables, that function will re-render(along with any child components within it)
//so keep the state component separate with the one components needing re-rendereing as a separate function
function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return <>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={firstTitle} />
  </>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App