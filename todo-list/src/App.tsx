import { useState } from "react";

export type Todo = {
  readonly id: number; //id
  title: string; //タイトル
  deleted: boolean; //削除されたかどうか
  checked: boolean; //完了か未完了かのチェック
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState("");

  //フィルター
  const [filter, setFilter] = useState<Filter>('all');

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodoList(e.target.value);

  //追加機能
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

  //ステータス機能
  //　全てのtodo、完了したtodo、未完了のtodo
  type Filter = "all" | "checked" | "unchecked";

  const filterTodos = todos.filter((todo) => {
    //filterステートの値に応じて異なる配列を返す
    switch (filter) {
      case "all":
        return todo;
      case "checked":
        //完了したtodo
        return todo.checked;
      case "unchecked":
        //未完了のtodo
        return !todo.checked;
      default:
        return todo;
    }
  })

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
        <div>
          <select
            defaultValue="all"
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            <option value="checked">完了したtodo</option>
            <option value="unchecked">未完了のtodo</option>
          </select>
        </div>
        <table>
          <tbody>
            {filterTodos.map((todo, index) =>(
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
