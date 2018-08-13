const { expect } = require('chai')
const twoSum = require('./twoSum')

describe('twoSum', () => {
    it('Is a function', () => {
        expect(typeof twoSum).to.equal('function')
    })

    it('Should return an array', () => {
        expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2])
    })

    it('Should return an empty array if no values are given', () => {
        expect(twoSum([], 0)).to.deep.equal([])
    })

    it('Should return empty array if sum is not passed as an argument', () => {
        expect(twoSum([1, 2, 3])).to.deep.equal([])
    })

    it('Should return an empty array if no two indices add up to the target', () => {
        expect(twoSum([1, 2, 3], 7)).to.deep.equal([])
    })

    it('Should return an array of two distinct indices', () => {
        expect(twoSum([2, 3, 5], 5)).to.deep.equal([0, 1])
        expect(twoSum([5, 3, 2], 5)).to.deep.equal([1, 2])
        expect(twoSum([5], 5)).to.deep.equal([])
    })
})
