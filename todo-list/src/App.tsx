import { useState } from "react";

function App() {
  //todoの追加
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
        <form>
          <p>タイトル</p>
          <input name="title" type="text" placeholder="タイトル"/><br/>
          <p>詳細</p>
          <textarea name="detail" placeholder="todoの詳細"/><br/>
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
    </div>
  );
}

export default App;
