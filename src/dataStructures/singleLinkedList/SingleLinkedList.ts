import { SingleLinkedListNode } from './SingleLinkedListNode'

class SingleLinkedList<T> {
  head: SingleLinkedListNode<T> | null
  tail: SingleLinkedListNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  get(index: number): T | null {
    if (index >= this.length) return null
    if (index < 0) return null

    let currentNode = this.head
    let currentIndex = 0
    
    while (currentIndex < index) {
        // @ts-ignore: currentNode is not null because we checked length of linked list
        currentNode = currentNode.next
        currentIndex++
    }
    
    // @ts-ignore: currentNode is not null because we checked length of linked list
    return currentNode.value
  }

  addToHead(value: T): void {
    const node = new SingleLinkedListNode(value, this.head)

    this.head = node
    
    if (this.tail === null) this.tail = node
    
    this.length++
  }

  addToTail(value: T): void {
    if (this.tail === null) return this.addToHead(value)

    const node = new SingleLinkedListNode(value)

    this.tail.next = node
    this.tail = node
    this.length++
  }

  addAtIndex(value: T, index: number): void {
    if (index === 0) return this.addToHead(value)
    if (index < 0) return
    if (index === this.length) return this.addToTail(value)
    if (index > this.length) return
    
    // @ts-ignore: this.head is not null if this.length > 0
    let currentNode = this.head.next
    let currentIndex = 1
    let prevNode = this.head
    
    while (currentIndex < index) {
        prevNode = currentNode
        
        // @ts-ignore: currentNode is not null because we checked length of linked list
        currentNode = currentNode.next
        currentIndex++
    }
    
    const node = new SingleLinkedListNode(value, currentNode)
    
    // @ts-ignore: prevNode is not null because currentNode in not null
    prevNode.next = node
    
    this.length++
  }

  deleteAtIndex(index: number): void {
    if (index >= this.length) return
    if (index === 0) {
        // @ts-ignore we checked list length before
        this.head = this.head.next
        this.length--
        return
    }
    if (index < 0) return
    
    // @ts-ignore we checked list length before
    let currentNode = this.head.next
    let currentIndex = 1
    let prevNode = this.head
    
    while (currentIndex < index) {
        prevNode = currentNode

        // @ts-ignore we checked list length before
        currentNode = currentNode.next
        currentIndex++
    }
    
    // @ts-ignore we checked list length before
    prevNode.next = currentNode.next
    
    if (currentIndex === this.length - 1) this.tail = prevNode
    
    this.length--
  }

  print(): void {
    const items: T[] = []

    let currentNode = this.head
    
    while (currentNode !== null) {
      items.push(currentNode.value)
      currentNode = currentNode.next
    }

    console.log(`${items.join(' -> ')} -> null`)
  }
}

export { SingleLinkedList }
