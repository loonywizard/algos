import { SingleLinkedList } from '../../../dataStructures/singleLinkedList/SingleLinkedList'
import { reverseLinkedList  } from './reverseLinkedList'


describe('reverse linked list', () => {
  test('reverse empty list', () => {
    const linkedList = new SingleLinkedList()

    const headOfReversedLinkedList = reverseLinkedList(linkedList.getHeadNode())
    const reversedLinkedList = new SingleLinkedList(headOfReversedLinkedList)

    expect(reversedLinkedList.getElementsArray()).toStrictEqual([])
  })


  test('reverse list with 1 element', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(1)

    const headOfReversedLinkedList = reverseLinkedList(linkedList.getHeadNode())
    const reversedLinkedList = new SingleLinkedList(headOfReversedLinkedList)

    expect(reversedLinkedList.getElementsArray()).toStrictEqual([1])
  })

  
  test('reverse list with 4 elements (event)', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(4)
    linkedList.addToHead(3)
    linkedList.addToHead(2)
    linkedList.addToHead(1)

    const headOfReversedLinkedList = reverseLinkedList(linkedList.getHeadNode())
    const reversedLinkedList = new SingleLinkedList(headOfReversedLinkedList)
    
    expect(reversedLinkedList.getElementsArray()).toStrictEqual([4, 3, 2, 1])
  })


  test('reverse list with 5 elements (odd)', () => {
    const linkedList = new SingleLinkedList()

    linkedList.addToHead(5)
    linkedList.addToHead(4)
    linkedList.addToHead(3)
    linkedList.addToHead(2)
    linkedList.addToHead(1)

    const headOfReversedLinkedList = reverseLinkedList(linkedList.getHeadNode())
    const reversedLinkedList = new SingleLinkedList(headOfReversedLinkedList)

    expect(reversedLinkedList.getElementsArray()).toStrictEqual([5, 4, 3, 2, 1])
  })
})
