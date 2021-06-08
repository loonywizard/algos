// MinHeap and MaxHeap could inherit BaseHeap
class BaseHeap {
  protected heap: number[]

  constructor() {
    this.heap = []
  }

  protected getLeftChildIndex = (parentIndex: number) => 2 * parentIndex + 1
  protected getRightChildIndex = (parentIndex: number) => 2 * parentIndex + 2
  protected getParentIndex = (childIndex: number) => Math.floor((childIndex - 1) / 2)

  protected hasLeftChild = (index: number) => this.getLeftChildIndex(index) < this.heap.length
  protected hasRightChild = (index: number) => this.getRightChildIndex(index) < this.heap.length
  protected hasParent = (index: number) => this.getParentIndex(index) >= 0

  protected getLeftChild = (index: number) => this.heap[this.getLeftChildIndex(index)]
  protected getRightChild = (index: number) => this.heap[this.getRightChildIndex(index)]
  protected getParent = (index: number) => this.heap[this.getParentIndex(index)]

  protected swap(firstIndex: number, secondIndex: number) {
    [this.heap[firstIndex], this.heap[secondIndex]] = [this.heap[secondIndex], this.heap[firstIndex]]
  }

  // for testing
  public _getAllNodesArray() {
    return this.heap
  }
}

export { BaseHeap }
