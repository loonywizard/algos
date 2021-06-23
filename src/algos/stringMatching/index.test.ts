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
})
