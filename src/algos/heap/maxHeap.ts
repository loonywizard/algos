import { BaseHeap } from './heapBaseClass'


class MaxHeap extends BaseHeap {
  protected comparatorFn(valueA: number, valueB: number) {
    return valueA > valueB
  }
}


export { MaxHeap }
