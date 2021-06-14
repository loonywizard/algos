import { SingleLinkedList } from './SingleLinkedList'

describe('Single Linked List', () => {
  test('Initializes empty SingleLinkedList', () => {
    const linkedList = new SingleLinkedList()

    expect(linkedList.get(0)).toBe(null)
  })

  test('Add items to head', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(3)
    linkedList.addToHead(2)
    linkedList.addToHead(1)

    expect(linkedList.get(0)).toBe(1)
    expect(linkedList.get(1)).toBe(2)
    expect(linkedList.get(2)).toBe(3)
  })

  test('Add items to tail', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToTail(1)
    linkedList.addToTail(2)
    linkedList.addToTail(3)

    expect(linkedList.get(0)).toBe(1)
    expect(linkedList.get(1)).toBe(2)
    expect(linkedList.get(2)).toBe(3)
  })

  test('Add items at index', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addAtIndex(1, 0)
    linkedList.addAtIndex(3, 1)
    linkedList.addAtIndex(2, 1)
    linkedList.addAtIndex(4, 3)
    linkedList.addAtIndex(-1, -1)

    expect(linkedList.get(-1)).toBe(null)
    expect(linkedList.get(0)).toBe(1)
    expect(linkedList.get(1)).toBe(2)
    expect(linkedList.get(2)).toBe(3)
    expect(linkedList.get(3)).toBe(4)
    expect(linkedList.get(5)).toBe(null)
  })

  test('Delete items at index', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(4)
    linkedList.addToHead(3)
    linkedList.addToHead(2)
    linkedList.addToHead(1)

    /*
     * 1 -> 2 -> 3 -> 4 -> null
     * 1 -> 3 -> 4 -> null
     * 3 -> 4 -> null
     * 3 -> null
     */
    linkedList.deleteAtIndex(1)
    linkedList.deleteAtIndex(0)
    linkedList.deleteAtIndex(1)

    expect(linkedList.get(0)).toBe(3)
    expect(linkedList.get(1)).toBe(null)
  })
})
