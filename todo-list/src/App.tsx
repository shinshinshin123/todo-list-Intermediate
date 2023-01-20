import React, { useState } from "react";

function App() {
  type Todo = {
    id: number; //id
    title: string; //タイトル
    content: string; //内容
    deleted: boolean; //削除されたかどうか
  };

  //〜todoの追加〜
  //todoの集合
  const [addTodo, setAddTodo] = useState("");
  //todoの単体
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
        <table>
          {/* todo一覧が下に配置される */}
          <thead>
            <tr>
              <td>ID</td>
              <td>タイトル</td>
              <td>詳細</td>
              <td>状態</td>
            </tr>
          </thead>
          <tbody>
            {todo.map((todo, index) =>(
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.title}</td>
                <td>{todo.content}</td>
                {/* 編集ボタン */}
                <td>
                  <button>編集</button>
                </td>
                {/* 削除ボタン */}
                <td>
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
