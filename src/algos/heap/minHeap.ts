import { expect, isMinHeap }  from '../../validators'

// thanks a lot to https://www.youtube.com/watch?v=t0Cq6tVNRBA&ab_channel=HackerRank

class MinHeap {
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


  private heapifyDown() {
    let index = 0

    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index)
      if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index)
      }

      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break
      }

      this.swap(index, smallerChildIndex)
      index = smallerChildIndex
    }
  }

  private heapifyUp() {
    let index = this.heap.length - 1
    while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
      this.swap(index, this.getParentIndex(index))
      index = this.getParentIndex(index)
    }
  }

  public removeMinElement() {
    if (this.heap.length === 0) throw new Error('Heap is empty!')

    // remove first element
    const item = this.heap.shift()

    if (this.heap.length <= 1) return

    // insert last element to the beginning
    // FIX ts, IDK why this.heap.pop() could be undefined
    this.heap.unshift(this.heap.pop() as number)

    this.heapifyDown()

    return item
  }

  public insert(nodeValue: number) {
    this.heap.push(nodeValue)
    this.heapifyUp()
  }

  public getMinElement() {
    return this.heap[0]
  }

  // for testing
  public _getAllNodesArray() {
    return this.heap
  }
}

function test() {
  const heap = new MinHeap()

  // TODO: refactor tests

  heap.insert(2)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(3)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(4)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(15)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(10)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(4)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(6)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(9)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(7)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.removeMinElement()
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.removeMinElement()
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(101)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(1)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(8)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.removeMinElement()
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(2)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
}

test()
