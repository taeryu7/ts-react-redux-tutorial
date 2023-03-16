// 카운터 프리젠테이셔널 컴포넌트 만들기
// 리액트 컴포넌트를 작성 할 때에는 .tsx 확장자를 사용한다는것 주의할것

import React from 'react';
type CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;