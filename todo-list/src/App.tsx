import { useState } from "react";

export type Todo = {
  id: number; //id
  title: string; //タイトル
  content: string; //内容
  deleted: boolean; //削除されたかどうか
};

function App() {
  //todoの追加
  const [todo, setTodo] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState("");

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodoList(e.target.value);

  const onClickAdd = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (todoList === "") return;

    // //新しいTodoを追加する
    const isTodo: Todo = {
      id: todo.length,
      title: todoList,
      content: todoList,
      deleted: false,
    }

    setTodo([isTodo, ...todo]);
    setTodoList("");
  };

  // //削除機能
  const onClickDelete = (id: number) => {
      setTodo(todo.filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
        {/* フォーム */}
        <form>
          <p>タイトル</p>
          <input
            name="title"
            placeholder="タイトル"
            onChange={onChangeTodo}
          /><br/>
          <p>詳細</p>
          <input
            name="detail"
            placeholder="todoの詳細"
            onChange={onChangeTodo}
          /><br/>

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
              <td>詳細</td>
              {/* <td>状態</td> */}
            </tr>
          </thead>
        {/* todo一覧が下に配置される */}
        <tbody>
          {todo.map((todo, index) =>(
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{todo.title}</td>
            <td>{todo.content}</td>
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
