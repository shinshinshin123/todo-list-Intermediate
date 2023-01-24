import { useState } from "react";

export type Todo = {
  id: number; //id
  title: string; //タイトル
  // content: string; //内容
  deleted: boolean; //削除されたかどうか
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
      // content: todoList,
      deleted: false,
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
      if(todo.id === id) {
        todo.title = title;
      }
      return todo;
    })
    setTodos(newTodo);
  };

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
        {/* フォーム */}
        <form>
          <p>タイトル</p>
          <input
            type="text"
            placeholder="タイトル"
            onChange={onChangeTodo}
          /><br/>
          {/* <p>詳細</p> */}
          {/* <input
            type="text"
            placeholder="todoの詳細"
            onChange={onChangeTodo}
          /><br/> */}

          {/* 追加ボタン */}
          <p><button onClick={onClickAdd}>追加</button></p>
        </form>
      <div>
        <h2>Todo一覧</h2>
        {/* 何を書いてあるか */}
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>タイトル</td>
              {/* <td>詳細</td> */}
              {/* <td>状態</td> */}
            </tr>
          </thead>
        {/* todo一覧が下に配置される */}
        <tbody>
          {todos.map((todo, index) =>(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={todo.title}
                  onChange={(e) => onClickEdit(todo.id, e.target.value)}
                />
              </td>
              {/* <td>{todo.content}</td> */}
              <td>
                {/* 削除ボタン */}
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
