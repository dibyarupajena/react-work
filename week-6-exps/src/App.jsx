import { useState } from "react"


//setFirstTitle is present inside the lifecycle this App(), so anything setTitle rerenders
//App() re-renders, so does the parent(App()) components and all its children components
//inorder to avoid unneccesary re-renders, PUSH THE STATE DOWN--> see code in next commit
function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App