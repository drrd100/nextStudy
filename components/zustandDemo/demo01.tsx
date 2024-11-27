// Demo01.tsx
'use client'

import useStore from "@/store/store";

function Demo01() {
  const setSelectedButton = useStore((state) => state.setSelectedButton);
  const incrementCount = useStore((state) => state.incrementCount);
  const removeCount = useStore((state) => state.removeCount);

  const handleClick = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <h1>Demo01</h1>
      <div className="flex gap-[20px]">
        <button onClick={() => handleClick("O")}>O</button>
        <button onClick={() => handleClick("X")}>X</button>
      </div>
      <div className="flex gap-[20px]">
        <button onClick={incrementCount}>카운트업</button>
        <button onClick={removeCount}>카운트리셋</button>
      </div>
    </div>
  );
}

export default Demo01;