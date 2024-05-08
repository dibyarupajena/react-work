//trying the previous code(getting data from an api) using
//useEffect() but this we are getting it some a different api url
// i.e where we need to send the todo id and get results based on it

import { useState } from "react";
import { useEffect } from "react";

function App() {
  return <div>
    <Todo id={3} />
  </div>
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;