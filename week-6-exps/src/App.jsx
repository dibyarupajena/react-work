import { useState } from "react"
import { memo } from 'react';

function App() {
  const [firstTitle, setFirstTitle] = useState("my name is harkirat");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random())
  }

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
      <br />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
      <Header title="My name is raman" />
    </div>
  )
}

//react.memo re-renders just the components with a dynamic prop{title} in this case
// in this case, only the first <Header> re-renders above since it has dynamic props or state variables' effects
const Header = memo(function ({title}) {
  return <div>
    {title}
  </div>
})

export default App