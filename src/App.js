import { useState } from  "react";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");  
  return(
    <div className="App">
      <TodoList todos={todos}/>
      <InputTodo 
        newTodo={newTodo}
        onNewTodoChange={(e) => setNewTodo(e.target.value)}
        onSave={()=> setTodos([...todos, newTodo])}
      />
    </div>
  ); 
}

export default App;
