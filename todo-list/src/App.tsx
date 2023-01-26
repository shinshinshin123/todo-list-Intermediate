import { useState } from "react";

//anyを使用しました。
//当初は個々のプロパティにそれぞれの「型」を指定ていましたが、
//id(number)型のエラーだけがどうしても解決できなかったです。(初期値をundefinedにしているため)
export type Todo = {
  id: any; //id
  title: any; //タイトル
  content: any; //内容
  deleted: any; //削除されたかどうか
  checked: any; //完了か未完了かのチェック
};

const initTodo = {
  id: undefined,
  title: undefined,
  content: undefined,
  deleted: undefined,
  checked: undefined
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoList, setTodoList] = useState(initTodo);

  //フィルター
  const [filter, setFilter] = useState<Filter>('all');

  const onChangeTitle = (e:any) => setTodoList({...todoList, title: e.target.value});
  const onChangeContent = (e:any) => setTodoList({...todoList, content: e.target.value});

  //追加機能
  const onClickAdd = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    setTodos([...todos, todoList]);
    setTodoList( {
      id: undefined,
      title: undefined,
      content: undefined,
      deleted: undefined,
      checked: undefined
    });
  };

  //削除機能
  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //編集機能
  const onClickEditTitle = (id: number, title: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }
      return todo;
    })
    setTodos(newTodo);
  };

  const onClickEditContnet = (id: number, content: string) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.content = content;
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
        // 全てのtodo
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
            onChange={onChangeTitle}
          /><br/>
        <p>内容</p>
          <input
            type="text"
            placeholder="内容"
            onChange={onChangeContent}
          /><br/>
        <p>
          <button onClick={onClickAdd}>
            追加
          </button>
        </p>
      </form>
    <div>
      <h2>Todo一覧</h2>
        <div>
          <select
            defaultValue="all"
            onChange={(e) => setFilter(e.target.value as Filter)}
          >
            <option value="all">全てのtodo</option>
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
                    defaultValue={todo.title}
                    onChange={(e) => onClickEditTitle(todo.id, e.target.value)}
                  />
                  <input
                    type="text"
                    disabled={todo.checked}
                    value={todo.content}
                    defaultValue={todo.content}
                    onChange={(e) => onClickEditContnet(todo.id, e.target.value)}
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
