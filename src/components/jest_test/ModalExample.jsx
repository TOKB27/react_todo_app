import { useState } from "react";

function Modal({ onConfirm, onClose }) {
  return (
    <div role="dialog">
      <p>本当に実行しますか？</p>
      <button onClick={onConfirm}>OK</button>
      <button onClick={onClose}>キャンセル</button>
    </div>
  );
}

export default function ModalExample({ onConfirm }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>モーダルを開く</button>
      {open && <Modal onConfirm={onConfirm} onClose={() => setOpen(false)} />}
    </div>
  );
}
