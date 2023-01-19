import { useState } from "react";

function App() {
  type Todo = {
    id: number;
    addTodo: string; //タイトル
    // addContent: string; //内容
    deleted: boolean; //削除されたかどうか
  };

  //todoの追加
  const [addTodo, setAddTodo] = useState("");
  const [todo, setTodo] = useState<Todo[]>([]);

  const onChangeTodo = (e: { target: { value: string; }; }) => setAddTodo(e.target.value);

  const onClickAdd = (e: { preventDefault: () => void; }) => {
    // if (todo === "") return;
    e.preventDefault();

    //新しいTodoを追加
    const isTodo: Todo = {
      id: todo.length,
      addTodo: addTodo,
      // addContent: addContent,
      deleted: false,
    }

    setTodo([isTodo, ...todo]);
    setAddTodo("");
  };

  // const onChangeTodo = (e) => setTodo(e.target.value);

  // const onClickAdd = () => {
  //   if (todo === "") return;
  //   setAddTodos =([...addTodos, todo]);
  //   setTodo("")
  // };

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
        {/* フォーム */}
        <form>
          <p>タイトル</p>
          <input
            name="title"
            placeholder="タイトル"
            // value={todo}
            onChange={onChangeTodo}
          /><br/>
          {/* <p>詳細</p>
          <textarea
            name="detail"
            placeholder="todoの詳細"
            value={todo}
            onChange={() => {}}
          /><br/> */}

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
          <tr>
            <td>{todo.id + 1}</td>
            <td>{todo.addTodo}</td>
            <td></td>
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
              <button>削除</button>
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
