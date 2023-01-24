import { useState } from "react";

export type Todo = {
  readonly id: number; //id
  title: string; //タイトル
  deleted: boolean; //削除されたかどうか
  checked: boolean; //完了か未完了かのチェック
};

function App() {
  //todoの追加
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState("");

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodoList(e.target.value);

  const onClickAdd = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (todoList === "") return;

    // //新しいTodoを追加する
    const isTodo: Todo = {
      id: todos.length,
      title: todoList,
      deleted: false,
      checked: false,
    }

    setTodos([isTodo, ...todos]);
    setTodoList("");
  };

  //削除機能
  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //編集機能
  const onClickEdit = (id: number, title: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    })
    setTodos(newTodo);
  };

  //チェックボックスがチェックされた時
  const onClickCheck = (id: number, checked: boolean) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    })
    setTodos(newTodo);
  }

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
      <form>
        <p>タイトル</p>
          <input
            type="text"
            placeholder="タイトル"
            onChange={onChangeTodo}
          /><br/>
        <p><button onClick={onClickAdd}>追加</button></p>
      </form>
    <div>
        <h2>Todo一覧</h2>
        <table>
          <tbody>
            {todos.map((todo, index) =>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    disabled={todo.checked}
                    value={todo.title}
                    onChange={(e) => onClickEdit(todo.id, e.target.value)}
                  />
                  <input
                    type="checkbox"
                    onChange={() => onClickCheck(todo.id, todo.checked)}
                  />
                </td>
                <td>
                  <button onClick={() => onClickDelete(todo.id)}>削除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
