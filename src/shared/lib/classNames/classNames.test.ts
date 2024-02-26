import { classNames } from './classNames'
describe('classNames', () => {
  it('test with only param', () => {
    expect(classNames('cls', {}, [])).toBe('cls')
  })

  it('test with additional classes', () => {
    const expected = 'cls class1 class2'
    expect(classNames('cls', {}, ['class1', 'class2'])).toBe(expected)
  })

  it('test with mods classes', () => {
    const expected = 'cls hover'
    expect(classNames('cls', { hover: true }, [])).toBe(expected)
  })

  it('test with mods classes', () => {
    const expected = 'cls class1 class2 hover'
    expect(classNames('cls', { hover: true, unhover: false }, ['class1', 'class2'])).toBe(expected)
  })
})
