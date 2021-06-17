import { SingleLinkedList } from '../../../dataStructures/singleLinkedList/SingleLinkedList'
import { removeLinkedListElements } from './index'


describe('remove Linked List elements', () => {
  test('remove elements from empty list', () => {
    const linkedList = new SingleLinkedList()

    const resultLinkedListHead = removeLinkedListElements(linkedList.getHeadNode(), 0)
    const resultLinkedList = new SingleLinkedList(resultLinkedListHead)

    expect(resultLinkedList.getElementsArray()).toStrictEqual([])
  })

  test('remove elements X from list which consist only from X elements', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(7)
    linkedList.addToHead(7)
    linkedList.addToHead(7)

    const resultLinkedListHead = removeLinkedListElements(linkedList.getHeadNode(), 7)
    const resultLinkedList = new SingleLinkedList(resultLinkedListHead)

    expect(resultLinkedList.getElementsArray()).toStrictEqual([])
  })

  test('remove elements X from list which consist from X and Y elements', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(7)
    linkedList.addToHead(1)
    linkedList.addToHead(7)
    linkedList.addToHead(2)
    linkedList.addToHead(1)
    linkedList.addToHead(7)

    const resultLinkedListHead = removeLinkedListElements(linkedList.getHeadNode(), 7)
    const resultLinkedList = new SingleLinkedList(resultLinkedListHead)

    expect(resultLinkedList.getElementsArray()).toStrictEqual([1, 2, 1])
  })
})
