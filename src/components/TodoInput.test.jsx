import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TodoInput } from "./TodoInput";

describe("TodoInput", () => {
  test("プレースホルダー付きの入力欄とボタンが表示される", () => {
    render(
      <TodoInput
        todo=""
        setTodo={jest.fn()}
        addTodo={jest.fn()}
        disabled={false}
      />
    );

    const input = screen.getByPlaceholderText("新しいToDoを入力");
    const button = screen.getByRole("button", { name: "追加" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toHaveValue("");
    expect(button).toBeEnabled();
  });

  test("文字入力で setTodo が呼ばれ最終値が反映される（制御コンポーネントで検証）", async () => {
    const user = userEvent.setup();
    const addTodo = jest.fn();

    // ラッパー: 実際と同じく useState で todo を管理
    const Wrapper = () => {
      const [todo, setTodo] = React.useState("");
      return (
        <TodoInput
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          disabled={false}
        />
      );
    };

    render(<Wrapper />);

    const input = screen.getByPlaceholderText("新しいToDoを入力");
    await user.type(input, "買い物");

    // DOM の value が最終値になっている（= state が更新されている）
    expect(input).toHaveValue("買い物");
  });

  test("追加ボタン押下で addTodo が1回呼ばれる", async () => {
    const user = userEvent.setup();
    const addTodo = jest.fn();

    render(
      <TodoInput
        todo="牛乳を買う"
        setTodo={jest.fn()}
        addTodo={addTodo}
        disabled={false}
      />
    );

    const button = screen.getByRole("button", { name: "追加" });
    await user.click(button);

    expect(addTodo).toHaveBeenCalledTimes(1);
  });

  test("disabled=true のとき入力欄とボタンが無効で、ハンドラは呼ばれない", async () => {
    const user = userEvent.setup();
    const setTodo = jest.fn();
    const addTodo = jest.fn();

    render(
      <TodoInput todo="" setTodo={setTodo} addTodo={addTodo} disabled={true} />
    );

    const input = screen.getByPlaceholderText("新しいToDoを入力");
    const button = screen.getByRole("button", { name: "追加" });

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();

    // 無効なので操作しても呼ばれないことを確認
    await user.type(input, "test");
    await user.click(button);

    expect(setTodo).not.toHaveBeenCalled();
    expect(addTodo).not.toHaveBeenCalled();
  });
});
