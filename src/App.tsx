//项目的根组件
//App --> index.js --> public/index.html(root)

const list = [
  {id:1001, name:'Vue'},
  {id:1002, name: 'React'},
  {id:1003, name: 'Angular'}
]

const flag = true

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <h2>列表渲染</h2>
      <ul>
        {list.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>

      <h2>条件渲染</h2>
      {/*逻辑与*/}
      {flag && <div>已登录</div>}

      {/*三目运算符*/}
      {flag ? <div>已登录1</div> : <div>未登录1</div>}
      <div>{ flag ? '已登录2' : '未登录2'}</div>

    </div>
  );
}

export default App;