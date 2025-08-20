// jest.fn
// 新しいモック関数を作成
// callback用として適当な関数を用意する時に利用

const obj = {
  method: () => "Hello World",
};

test("spyOnのテスト", async () => {
  const mockFn = jest.fn(); // mockFnというのは関数を設定

  mockFn("Hello", "World"); // モック関数を呼び出す、適当に引数を持たせてみる

  // モック関数が一度呼ばれたことを確認
  expect(mockFn).toHaveBeenCalledTimes(1);
  // expect(mockFn.mock.calls).toHaveLength(1); これも一緒

  // モック関数が指定した引数で呼ばれたことを確認
  expect(mockFn).toHaveBeenCalledWith("Hello", "World");
});
