import { useState } from "react";

export type Todo = {
  readonly id: number; //id
  title: string; //タイトル
  content: string; //内容
  deleted: boolean; //削除されたかどうか
  checked: boolean; //完了か未完了かのチェック
};

const initialTodo = {
  id: null,
  title: undefined,
  content: undefined,
  deleted: undefined,
  checked: undefined
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState(initialTodo);

  //フィルター
  // const [filter, setFilter] = useState<Filter>('all');

  //インプットフォームの状態を管理
  const onChangeTitle = (e:any) => setTodoList({...todoList, title: e.target.value});
  const onChangeContent = (e:any) => setTodoList({...todoList, content: e.target.value});

  //追加機能
  const onClickAdd = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // if (todoList === "") return;

    // //新しいTodoを追加する
    // const isTodo: Todo = {
    //   id: todos.length,
    //   title: todoList,
    //   content: todoList,
    //   deleted: false,
    //   checked: false,
    // }

    setTodos([...todos, todoList]);
    //入力後空にする
    // setTodoList({});
  };

  //削除機能
  // const onClickDelete = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // }

  //編集機能
  // const onClickEdit = (id: number, title: string, content: string) => {
  //   const newTodo = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.title = title;
  //       todo.content = content;
  //     }
  //     return todo;
  //   })
  //   setTodos(newTodo);
  // };

  //チェックボックスがチェックされた時(ステータス機能)
  // const onClickCheck = (id: number, checked: boolean) => {
  //   const newTodo = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.checked = !checked;
  //     }
  //     return todo;
  //   })
  //   setTodos(newTodo);
  // }

  //絞り込み機能
  //　全てのtodo、完了したtodo、未完了のtodo
  // type Filter = "all" | "checked" | "unchecked";

  // const filterTodos = todos.filter((todo) => {
  //   //filterステートの値に応じて異なる配列を返す
  //   switch (filter) {
  //     case "all":
  //       // 全てのtodo
  //       return todo;
  //     case "checked":
  //       //完了したtodo
  //       return todo.checked;
  //     case "unchecked":
  //       //未完了のtodo
  //       return !todo.checked;
  //     default:
  //       return todo;
  //   }
  // })

  return (
    <div className="App">
      <h1>Todoリスト中級編</h1>
      <form>
        <p>タイトル</p>
          <input
            type="text"
            placeholder="タイトル"
            onChange={onChangeTitle}
          />
        <p>内容</p>
          <input
            type="text"
            placeholder="内容"
            onChange={onChangeContent}
          />
        <p><button onClick={onClickAdd}>追加</button></p>
      </form>
    <div>
      <h2>Todo一覧</h2>
        <div>
          {/* <select
            defaultValue="all"
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            <option value="all">全てのtodo</option>
            <option value="checked">完了したtodo</option>
            <option value="unchecked">未完了のtodo</option>
          </select> */}
        </div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>タイトル</td>
              <td>内容</td>
            </tr>
          </thead>
          <tbody>
            {/* {filterTodos.map((todo, index) =>( */}
            {todos.map((todo, index) =>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    disabled={todo.checked}
                    value={todo.title}
                    // onChange={(e) => onClickEdit(todo.id, todo.title, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    disabled={todo.checked}
                    value={todo.content}
                    // onChange={(e) => onClickEdit(todo.id, todo.content ,e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="checkbox"
                    // onChange={() => onClickCheck(todo.id, todo.checked)}
                  />
                </td>
                <td>
                  {/* <button onClick={() => onClickDelete(todo.id)}>削除</button> */}
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
