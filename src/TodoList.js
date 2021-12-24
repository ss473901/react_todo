const TodoList = (props) => {
  return(
  <ul>
    {props.todos.map(todo => {
      return <li>todo</li>;
    })}
  </ul>
 );
};


export default TodoList;