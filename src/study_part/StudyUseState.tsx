import { useState } from "react";

interface Count {
  id: string,
  count: number;
}

function StudyUseState() {
  const [count, setCount] = useState<number>(0);
  const add = () => {
    setCount(count + 1)
  }
  const [countBean, setCountBean] = useState<Count>({
    id: "0007",
    count: 0,
  });
  const addBean = () => {
    setCountBean({
      ...countBean,
      count: countBean.count + 1
    })
  }
  const subBean = () => {
    setCountBean({
      id: countBean.id,
      count: countBean.count - 1
    })
  }
  return <div>
    <h2>useState</h2>
    <div>{ count }</div>
    <button onClick={add}>+1</button>
    <hr/>
    <div>{ `${countBean.id} -- ${countBean.count}` }</div>
    <button onClick={addBean}>+1</button>
    <button onClick={subBean}>-1</button>
  </div>
}

export default StudyUseState