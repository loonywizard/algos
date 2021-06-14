class SingleLinkedListNode<T> {
  value: T
  next: SingleLinkedListNode<T> | null

  constructor(value: T, next: (SingleLinkedListNode<T> | null) = null) {
    this.value = value
    this.next = next
  }
}

export { SingleLinkedListNode }
