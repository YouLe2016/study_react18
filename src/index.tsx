//项目的入口，从这里开始运行

//React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目根组件
import App from './App';

//把App组件渲染到页面id为root的元素上
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
