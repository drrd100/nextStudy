// Demo02.tsx
'use client'

import useStore from "@/store/store";

function Demo02() {
  const selectedButton = useStore((state) => state.selectedButton);
  const count = useStore((state) => state.count);

  return (
    <div>
      <h1>Demo02</h1>
      <p>카운트: {count}</p>
      <p>선택한 버튼: {selectedButton}</p>
    </div>
  );
}

export default Demo02;