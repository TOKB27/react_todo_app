import { screen, within } from "@testing-library/react";

// デバッグしやすくする工夫
screen.logTestingPlaygroundURL();


test("ユーザーB行の 編集 ボタンをクリックできる", async () => {
  // 1. 行を全部取得
  const rows = screen.getAllByRole("row");

  // 2. 特定の行を探す（ユーザーB を含む行）
  const targetRow = rows.find((row) =>
    within(row).queryByText("ユーザーB")
  );
  expect(targetRow).toBeTruthy();

  // 3. その行をスコープに絞ってボタンを取得
  const editButton = within(targetRow!).getByRole("button", { name: "編集" });

  // 4. アクション実行
  editButton.click();
});



// 別パターン
const rows = screen.getAllByRole("row");

// 1行目（ヘッダー行）を除外して 2行目を取得
const secondRow = rows[2]; // [0]=ヘッダー, [1]=ユーザーA, [2]=ユーザーB

const [editBtn, deleteBtn] = within(secondRow).getAllByRole("button");

editBtn.click();
