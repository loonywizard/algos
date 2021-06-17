import { SingleLinkedListNode } from './SingleLinkedListNode'

class SingleLinkedList<T> {
  head: SingleLinkedListNode<T> | null
  tail: SingleLinkedListNode<T> | null
  length: number

  constructor(head: (SingleLinkedListNode<T> | null) = null) {
    this.head = head
    this.tail = null
    this.length = 0
    
    if (head !== null) {
      let currentNode = head

      while (currentNode.next) {
        currentNode = currentNode.next
        
        this.tail = currentNode
        this.length ++
      }
    }
  }

  get(index: number): T | null {
    if (index >= this.length) return null
    if (index < 0) return null

    let currentNode = this.head
    let currentIndex = 0
    
    while (currentIndex < index && currentNode) {
        currentNode = currentNode.next
        currentIndex++
    }

    return currentNode === null ? null : currentNode.value
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
    
    const head = this.head as SingleLinkedListNode<T>

    let currentNode = head.next
    let currentIndex = 1
    let prevNode = head
    
    while (currentIndex < index && currentNode) {
        prevNode = currentNode
        currentNode = currentNode.next
        currentIndex++
    }

    if (!currentNode) return
    
    const node = new SingleLinkedListNode(value, currentNode)
    
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

  // methods below are dedicated for testing
  print(): void {
    const items: T[] = []

    let currentNode = this.head
    
    while (currentNode !== null) {
      items.push(currentNode.value)
      currentNode = currentNode.next
    }

    console.log(`${items.join(' -> ')} -> null`)
  }

  getElementsArray(): T[] {
    const items: T[] = []

    let currentNode = this.head
    
    while (currentNode !== null) {
      items.push(currentNode.value)
      currentNode = currentNode.next
    }

    return items
  }

  getHeadNode(): SingleLinkedListNode<T> | null {
    return this.head
  }

  createCycle(indexFrom: number, indexTo: number) {
    if (indexFrom < 0 || indexTo < 0) return
    if (indexFrom < indexTo) return

    let nodeTo = null
    let currentNode = this.head
    let currentIndex = 0

    while (currentIndex < indexFrom && currentNode) {
      if (currentIndex === indexTo) nodeTo = currentNode

      currentNode = currentNode.next
      currentIndex++
    }

    if (!currentNode) return

    if (indexFrom === indexTo) currentNode.next = currentNode
    else currentNode.next = nodeTo
  }
}

export { SingleLinkedList }
