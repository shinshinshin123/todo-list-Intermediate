import { useState } from "react";

function App() {
  //todoの追加
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
        <form>
          <p>タイトル</p>
          <input
            name="title"
            type="text"
            placeholder="タイトル"
          /><br/>
          <p>詳細</p>
          <textarea
            name="detail"
            placeholder="todoの詳細"
          /><br/>
          <button>追加</button>
        </form>
      <div>
        <h2>Todo一覧</h2>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>タイトル</td>
              <td>詳細</td>
              <td>状態</td>
            </tr>
          </thead>
        </table>
      </div>
        {/* todo一覧が下に配置される */}
        <tbody>
          <tr>
            <td>ID番号</td>
            <td>todoのタイトル</td>
            <td>todoの内容</td>
          </tr>
          <td>
            <select>
              <option>未着手</option>
              <option>進行中</option>
              <option>完了</option>
            </select>
          </td>
          <td>
            <button>削除</button>
          </td>
        </tbody>
    </div>
  );
}

export default App;
