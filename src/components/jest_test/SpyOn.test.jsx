// jest.spyOn
// 特定のオブジェクトのメソッドをモックに置き換えて監視(実際に存在するメソッドを指定すればOK)
// アプリケーションに実在する関数の動きをチェックする時に使う。

const obj = {
  method: () => "Hello World",
};

test("spyOnのテスト", async () => {
  const spy = jest.spyOn(obj, "method"); // obj.method()を監視下として設定

  obj.method(); // 使われるとそれが記録

  expect(spy.mock.calls).toHaveLength(1); // 1度呼び出し

  obj.method();

  expect(spy.mock.calls).toHaveLength(2); // 2度呼び出し
});
