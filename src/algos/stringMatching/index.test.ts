import { naiveStringMatcher } from './naiveStringMatching'



const ALGOS = [
  { algo: naiveStringMatcher, algoName: 'Naive String Matching' },
]

describe.each(ALGOS)('String Matching $algoName', ({ algo }) => {
  it('Finds the only single match', () => {
    const text = 'HELLO FROM VOVA'
    const pattern = 'FROM'

    const matches = algo(text, pattern)

    expect(matches).toStrictEqual([6])
  })

  it('Finds no matches', () => {
    const text = 'HELLO FROM VOVA'
    const pattern = '__WRONG__'

    const matches = algo(text, pattern)

    expect(matches).toStrictEqual([])
  })

  it('Finds several matches', () => {
    const text = '001 110 010 001 101'
    const pattern = '001'

    const matches = algo(text, pattern)

    expect(matches).toStrictEqual([0, 12])
  })
})
