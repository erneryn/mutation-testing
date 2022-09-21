const { isGreaterThan, isGreaterThanOrequal, isInrange, poinChecker, exponentiation } = require('../mutation.js')

describe('is Greater Than', () => {
  test('should passed when number 10 and target 5', () => {
    expect(isGreaterThan(10,5)).toBe(true)
  })

  test('should failed when number 5 and target 5', () => {
    expect(isGreaterThan(5,5)).toBe(false)
  })
});

describe('is Greater Than Or Equal', () => {

  test('should return true when number 5 and target 5', () => {
    expect(isGreaterThanOrequal(5,5)).toBe(true)
  })
  
  test('should return true when number 10 and target 5', () => {
    expect(isGreaterThanOrequal(10,5)).toBe(true)
  })

  test('should return true when number 10 and target 5', () => {
    expect(isGreaterThanOrequal(5,10)).toBe(false)
  })

});

describe('is In Range', () => {

  test('should return true when number 8 and range 5 and 10', () => {
    expect(isInrange(8,5,10)).toBe(true)
  })

  test('should return false when number 8 and range 10 and 15', () => {
    expect(isInrange(8,10,15)).toBe(false)
  })

  test('should return true when number 10 and range 10 and 15', () => {
    expect(isInrange(10,10,15)).toBe(true)
  })
});

describe('exponentiation', () => {
  test('should return 4', () => {
    expect(exponentiation(2,2)).toEqual(4)
  })

  test('should return 16', () => {
    expect(exponentiation(4,2)).toEqual(16)
  })

  test('should return 16', () => {
    expect(exponentiation(2,3)).toEqual(8)
  })

})

