function add(a: number, b: number): number { return a + b; }

test('add(2, 3) should equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
