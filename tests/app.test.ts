test('add(2, 3) should equal 5', () => {
  function add(a: number, b: number) { return a + b; }
  expect(add(2, 3)).toBe(5);
});
