import { SingleLinkedList  } from '../../dataStructures/singleLinkedList/SingleLinkedList'
import { hasSingleLinledListCycle } from './hasSingleLinkedListCycle'

describe('has SingleLinkedList cycle', () => {
  test('empty list', () => {
    const linkedList = new SingleLinkedList()

    expect(hasSingleLinledListCycle(linkedList.getHeadNode())).toBe(false)
  })

  test('list with one item', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(1)

    expect(hasSingleLinledListCycle(linkedList.getHeadNode())).toBe(false)
  })

  test('list with one item and cycle', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(1)
    linkedList.createCycle(0, 0)

    expect(hasSingleLinledListCycle(linkedList.getHeadNode())).toBe(true)
  })

  test('list with four items and cycle', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(1)
    linkedList.addToHead(2)
    linkedList.addToHead(3)
    linkedList.addToHead(4)

    linkedList.createCycle(3, 1)

    expect(hasSingleLinledListCycle(linkedList.getHeadNode())).toBe(true)
  })

  test('list with four items without cycle', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(1)
    linkedList.addToHead(2)
    linkedList.addToHead(3)
    linkedList.addToHead(4)

    expect(hasSingleLinledListCycle(linkedList.getHeadNode())).toBe(false)
  })
})
