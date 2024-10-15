//项目的根组件
//App --> index.js --> public/index.html(root)

import React from "react";

const list = [
  {id: 1001, name: 'Vue'},
  {id: 1002, name: 'React'},
  {id: 1003, name: 'Angular'}
]

const flag = true

function test(type: number) {
  switch (type) {
    case 0:
      return <div>无图</div>
    case 1:
      return <div>单图</div>
    case 2:
      return (<div>多图</div>)
    default:
      return <div>无图</div>
  }
}

function MyButton() {
  return (
      <button onClick={() => console.log('点击MyButton 事件')}>点我</button>
  )
}

function App() {
  const clickHandler = () => {
    console.log('点击事件')
  }
  const clickHandler2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('点击事件2', e)
  }
  const clickHandler3 = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('点击事件3', name, e)
  }
  let type = 0
  return (
    <div className="App">
      <h1>JSX</h1>

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
      <div>{flag ? '已登录2' : '未登录2'}</div>

      <h2>复杂条件渲染</h2>
      {test(0)}
      {test(1)}
      {test(2)}

      <hr/>
      {test(type)}
      {type !== 1 && type !== 2 && <div>无图1</div>}
      {type === 1 && <div>单图1</div>}
      {type === 2 && <div>多图1</div>}

      <h1>事件绑定</h1>
      <button onClick={clickHandler}>点我</button>
      {/*事件参数*/}
      <button onClick={clickHandler2}>点我</button>
      {/*自定义参数*/}
      <button onClick={(e) => clickHandler3('小白', e)}>点我</button>

      <h1>组件基础使用</h1>
      {/* 自闭合 */}
      <MyButton/>
      {/* 成对标签 */}
      <MyButton></MyButton>

    </div>
  );
}

export default App;