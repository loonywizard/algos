import { SingleLinkedListNode } from '../../dataStructures/singleLinkedList/SingleLinkedListNode'

function hasSingleLinledListCycle<T>(head: SingleLinkedListNode<T> | null): boolean {
  if (head === null || head.next === null) return false

  let slowPointer: SingleLinkedListNode<T> | null = head
  let fastPointer: SingleLinkedListNode<T> | null = head.next

  while (slowPointer.next && fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next
    fastPointer = fastPointer.next.next
    
    if (slowPointer === fastPointer) return true
  }

  return false
}

export { hasSingleLinledListCycle }
