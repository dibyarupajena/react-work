import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([])

  // fetch("https://sum-server.100xdevs.com/todos")
  // .then(async function(res) {
  //   const json = await res.json();
  //   setTodos(json.todos); // this will cause infinite looping, hence infinite rendering, since setTodos is called so the state variable changes, the parent function 
  // App() //gets rendered once again and again starts from line 5 and comes to this line and again this process repeats
  // })
  // another way of avoiding continous re-rendering, using useEffects
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json.todos);
      })
  }, []) // the second argument is called dependency array

  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({title, description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App;