import { expect, isMaxHeap }  from '../../validators'
import { BaseHeap } from './heapBaseClass'

// thanks a lot to https://github.com/ReginaF2012/JavaScript_MaxHeap/blob/main/maxHeap.js

class MaxHeap extends BaseHeap {
  private heapifyDown(index: number): void {
    if (!this.hasLeftChild(index)) return

    let biggestChildIndex = this.getLeftChildIndex(index)
    if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
      biggestChildIndex = this.getRightChildIndex(index)
    }

    if (this.heap[index] < this.heap[biggestChildIndex]) {
      this.swap(index, biggestChildIndex)
      this.heapifyDown(biggestChildIndex)
    }
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1

    while (this.hasParent(index) && this.heap[index] > this.getParent(index)) {
      this.swap(index, this.getParentIndex(index))
      index = this.getParentIndex(index)
    }
  }

  public insert(nodeValue: number): void {
    this.heap.push(nodeValue)
    this.heapifyUp()
  }

  public removeMaxElement(): number {
    if (this.heap.length === 0) throw new Error('Heap is empty!')

    // remove first element
    const item = this.heap.shift() as number

    if (this.heap.length <= 1) return item

    // insert last element to the beginning
    // FIX ts, IDK why this.heap.pop() could be undefined
    this.heap.unshift(this.heap.pop() as number)

    this.heapifyDown(0)

    return item
  }
}

function test() {
  const heap = new MaxHeap()

    // TODO: refactor tests

    heap.insert(2)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(3)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(4)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(15)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(10)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(4)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(6)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(9)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(7)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(101)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(1)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(8)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(2)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)

    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)

    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)

    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)

    heap.insert(73)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(24)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(99)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
    
    heap.insert(1)
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)

    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)

    heap.removeMaxElement()
    expect(isMaxHeap(heap._getAllNodesArray())).toBe(true)
}

test()
