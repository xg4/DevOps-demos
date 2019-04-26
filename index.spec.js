const { sum } = require('./index')

test('test sum func', () => {
  expect(sum(1, 2)).toEqual(3)
})
