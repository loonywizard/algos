import { SingleLinkedListNode } from '../../../dataStructures/singleLinkedList/SingleLinkedListNode'

function removeLinkedListElements<T>(head: SingleLinkedListNode<T> | null, value: T): SingleLinkedListNode<T> | null {
  let currentNode = head
  let prevNode = null

  while (currentNode) {
    if (currentNode.value === value) {
      currentNode = currentNode.next
      
      if (prevNode) {
        prevNode.next = currentNode
      } else {
        head = currentNode
      }
    } else {
      prevNode = currentNode
      currentNode = currentNode.next
    }
  }
  
  return head
}

export { removeLinkedListElements }
