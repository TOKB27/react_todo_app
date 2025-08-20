import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalExample from "./ModalExample";

test("クリックでモーダルを開き、モーダル内で処理が呼ばれる", async () => {
  const user = userEvent.setup();
  const handleConfirm = jest.fn();

  render(<ModalExample onConfirm={handleConfirm} />);

  // まだモーダルは表示されていない
  expect(screen.queryByRole("dialog")).toBeNull();

  // モーダルを開くボタンをクリック
  await user.click(screen.getByText("モーダルを開く"));

  // モーダルが表示されたか確認
  expect(screen.getByRole("dialog")).not.toBeNull();

  // モーダル内の「OK」をクリック
  await user.click(screen.getByText("OK"));

  // onConfirm が呼ばれたか確認
  expect(handleConfirm).toHaveBeenCalledTimes(1);
});
