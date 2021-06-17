import { SingleLinkedListNode } from '../../../dataStructures/singleLinkedList/SingleLinkedListNode'

function reverseLinkedList<T>(head: SingleLinkedListNode<T> | null): SingleLinkedListNode<T> | null {
  if (head === null || head.next === null) return head

  let currentNode = head
  let prevHead = head
  
  while (currentNode.next) {
      let savedNextNode = currentNode.next.next
  
      head = currentNode.next
      head.next = prevHead
      currentNode.next = savedNextNode
      prevHead = head
  }

  return head
}

export { reverseLinkedList }
