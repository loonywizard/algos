import { BaseHeap } from './heapBaseClass'


class MinHeap extends BaseHeap {
  protected comparatorFn(valueA: number, valueB: number) {
    return valueA < valueB
  }
}


export { MinHeap }
