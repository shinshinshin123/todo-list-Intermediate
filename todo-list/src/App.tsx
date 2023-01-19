import { useState } from "react";

function App() {
  type Todo = {
    id: number; //id
    title: string; //タイトル
    content: string; //内容
    deleted: boolean; //削除されたかどうか
  };

  //todoの追加
  const [addTodo, setAddTodo] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const onChangeTodo = (e: { target: { value: string; }; }) => setAddTodo(e.target.value);

  const onClickAdd = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    //新しいTodoを追加する
    const isTodo: Todo = {
      id: todo.length,
      title: addTodo,
      content: addTodo,
      deleted: false,
    }

    setTodo([isTodo, ...todo]);
    setAddTodo("");
  };

  //todoの削除
  const onClickDelete = (id: number) => setAddTodo.filter((id: number) => id!== id)

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
          <textarea
            name="detail"
            placeholder="todoの詳細"
            onChange={onChangeTodo}
          /><br/>

          {/* 追加ボタン */}
          <button onClick={onClickAdd}>追加</button>
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
          {todo.map((todo) =>(
          <tr key={todo.id}>
            <td>{todo.id + 1}</td>
            <td>{todo.title}</td>
            <td>{todo.content}</td>
            {/* ステータス */}
            {/* <td>
              <select>
                <option>未着手</option>
                <option>進行中</option>
                <option>完了</option>
              </select>
            </td> */}
            <td>
              {/* 削除ボタン */}
              <button onClick={() => onClickDelete(todo)}>削除</button>
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
