import { useState, useEffect, useCallback, useMemo } from "react";


type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

function TodoApp() {

  const [todos, setTodos] = useState<Todo[]>([]);


  const [input, setInput] = useState<string>("");


  const addTodo = useCallback(() => {
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput("");
  }, [input]);

 
  const toggleTodo = useCallback((id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  const completedCount = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>
      <p>Đã hoàn thành: {completedCount}</p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTodo}>Thêm</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;