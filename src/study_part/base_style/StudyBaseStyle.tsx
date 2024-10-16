import './index.css';

const style = {
  color: 'green',
  // 驼峰规则
  fontSize: '24px',
}

function StudyBaseStyle() {
  // 用于动态样式的示例
  const isRed = false;

  return (
    <div>
      <h2>2、StudyBaseStyle</h2>
      {/*行内样式控制*/}
      <span style={{color: 'red', fontSize: '24px'}}>这是一个span</span>
      <span style={ style }>这是第2个span</span>
      {/*class类名控制*/}
      <span className="study-base-style">这是第3个span</span>
      {/* 动态样式示例 */}
      <span style={{ color: isRed ? 'red' : 'blue' }}>动态样式</span>
    </div>
  );
}

export default StudyBaseStyle;