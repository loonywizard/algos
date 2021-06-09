// MinHeap and MaxHeap could inherit BaseHeap
abstract class BaseHeap {
  private heap: number[]

  constructor() {
    this.heap = []
  }

  private getLeftChildIndex = (parentIndex: number) => 2 * parentIndex + 1
  private getRightChildIndex = (parentIndex: number) => 2 * parentIndex + 2
  private getParentIndex = (childIndex: number) => Math.floor((childIndex - 1) / 2)

  private hasLeftChild = (index: number) => this.getLeftChildIndex(index) < this.heap.length
  private hasRightChild = (index: number) => this.getRightChildIndex(index) < this.heap.length
  private hasParent = (index: number) => this.getParentIndex(index) >= 0

  private getLeftChild = (index: number) => this.heap[this.getLeftChildIndex(index)]
  private getRightChild = (index: number) => this.heap[this.getRightChildIndex(index)]
  private getParent = (index: number) => this.heap[this.getParentIndex(index)]

  private swap(firstIndex: number, secondIndex: number) {
    [this.heap[firstIndex], this.heap[secondIndex]] = [this.heap[secondIndex], this.heap[firstIndex]]
  }

  public isEmpty() {
    return this.heap.length === 0
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1

    while (this.hasParent(index) && this.comparatorFn(this.heap[index], this.getParent(index))) {
      this.swap(index, this.getParentIndex(index))
      index = this.getParentIndex(index)
    }
  }

  public insert(nodeValue: number): void {
    this.heap.push(nodeValue)
    this.heapifyUp()
  }

  private heapifyDown() {
    let index = 0

    while (this.hasLeftChild(index)) {
      let childIndexToReplace = this.getLeftChildIndex(index)
      if (this.hasRightChild(index) && this.comparatorFn(this.getRightChild(index), this.getLeftChild(index))) {
        childIndexToReplace = this.getRightChildIndex(index)
      }

      if (this.comparatorFn(this.heap[index], this.heap[childIndexToReplace])) {
        break
      }

      this.swap(index, childIndexToReplace)
      index = childIndexToReplace
    }
  }

  public pop(): number {
    if (this.isEmpty()) throw new Error('Heap is empty!')

    // remove first element
    const item = this.heap.shift() as number

    if (this.heap.length <= 1) return item

    // insert last element to the beginning
    this.heap.unshift(this.heap.pop() as number)

    this.heapifyDown()

    return item
  }

  protected abstract comparatorFn(valueA: number, valueB: number): boolean

  // for testing
  public _getAllNodesArray() {
    return this.heap
  }
}

export { BaseHeap }
