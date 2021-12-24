
const InputTodo = ({ newTodo, onNewTodoChange, onSave }) => {
  return(
    <>
      <input value={newTodo} onChange={onNewTodoChange} />
      <button onClick={onSave}>保存</button>
    </>
  );
};


export default InputTodo;
