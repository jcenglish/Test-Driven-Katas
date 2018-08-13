const { expect } = require('chai')
const wrap = require('./wrap')

describe('wrap', () => {
  it('Is a function', () => {
    expect(typeof wrap).to.equal('function')
  })
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('')
  })
  it('Returns a string if a string was provided', () => {
    expect(wrap('abc', 10)).to.equal('abc')
  })
  it('Returns lines no longer than column number', () => {
    expect(wrap('abc', 1)).to.equal('a\nb\nc')
  })
  it('Returns long lines no longer than column number', () => {
    expect(
      wrap('Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.', 20)
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    )
  })
  it('Breaks lines at word boundaries', () => {
    const wrap1 = wrap(
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
      20
    )
    expect(wrap1.indexOf('\n')).to.equal(17)
  })
  it('Breaks lines at word boundaries', () => {
    const wrap2 = wrap(
      'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
      20
    )
    expect(wrap2.lastIndexOf('\n')).to.equal(59)
  })
})
