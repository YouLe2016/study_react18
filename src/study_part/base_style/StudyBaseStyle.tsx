import './index.css';
import {useState} from "react";

const style = {
  color: 'green',
  // 驼峰规则
  fontSize: '24px',
}

function StudyBaseStyle() {
  // 用于动态样式的示例
  const [isRed, setIsRed] = useState<boolean>(false)
  return (
    <div>
      <h1>2、StudyBaseStyle</h1>
      {/*行内样式控制*/}
      <span style={{color: 'red', fontSize: '24px'}}>这是一个span</span>&nbsp;
      <span style={style}>这是第2个span</span>&nbsp;
      {/*class类名控制*/}
      <span className="study-base-style">这是第3个span</span>
      <div>
        {/* 动态样式示例 */}
        <span style={{color: isRed ? 'red' : 'blue'}}>动态样式</span>&nbsp;
        <button onClick={() => setIsRed(!isRed)}>{isRed ? '蓝色' : '红色'}</button>
      </div>
    </div>
  );
}

export default StudyBaseStyle;