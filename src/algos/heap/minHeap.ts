import { expect, isMinHeap }  from '../../validators'
import { BaseHeap } from './heapBaseClass'

// thanks a lot to https://www.youtube.com/watch?v=t0Cq6tVNRBA&ab_channel=HackerRank

class MinHeap extends BaseHeap {
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

  public pop(): number {
    if (this.heap.length === 0) throw new Error('Heap is empty!')

    // remove first element
    const item = this.heap.shift() as number

    if (this.heap.length <= 1) return item

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
  
  heap.pop()
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.pop()
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(101)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(1)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(8)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.pop()
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
  
  heap.insert(2)
  expect(isMinHeap(heap._getAllNodesArray())).toBe(true)
}

test()

export { MinHeap }
