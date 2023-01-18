import { useState } from "react";

function App() {
  type Todo = {
    id: number;
    todoTitle: string; //タイトル
    todoContent: string; //内容
    deleted: boolean; //削除されたかどうか
  }

  //todoの追加
  // const [todo, setTodo] = useState<Todo[]>([]);
  // const [addTodos, setAddTodos] = useState([""]);

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
            type="text"
            placeholder="タイトル"
            // onChange={onChangeTodo}
          /><br/>
          <p>詳細</p>
          <textarea
            name="detail"
            placeholder="todoの詳細"
            // onChange={onChangeTodo}
          /><br/>

          {/* 追加ボタン */}
          <button>追加</button>
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
              <td>状態</td>
            </tr>
          </thead>
        {/* todo一覧が下に配置される */}
        <tbody>
          {/* {addTodos.map((todo, index, content) =>( */}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <select>
                <option>未着手</option>
                <option>進行中</option>
                <option>完了</option>
              </select>
            </td>
            <td>
              {/* 削除ボタン */}
              <button>削除</button>
            </td>
          </tr>
          {/* ))} */}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
