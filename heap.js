class Heap {
  constructor(elements) {
    this.elements = this.#heapify(elements);
  }

  #heapify(elements) {
    for (let i = elements.length - 1; i >= 0; i--) {
      if (elements[2 * i] && elements[2 * i] > elements[i]) {
        let temp = elements[i];
        elements[i] = elements[2 * i];
        elements[2 * i] = temp;
      }
      if (elements[2 * i + 1] && elements[2 * i + 1] > elements[i]) {
        let temp = elements[i];
        elements[i] = elements[2 * i + 1];
        elements[2 * i + 1] = temp;
      }
    }
    return elements;
  }

  insert(element) {
    this.elements.push(element);
    let uIndex = this.elements.length - 1;
    let lIndex = parseInt(this.elements.length / 2);
    while (this.elements[lIndex] < this.elements[uIndex]) {
      let temp = this.elements[lIndex];
      this.elements[lIndex] = this.elements[uIndex];
      this.elements[uIndex] = temp;
      uIndex = lIndex;
      lIndex = parseInt(lIndex / 2);
    }

    return this.elements;
  }

  get() {
    let topElem = this.elements[0];
    let i = 0;
    this.elements[i] = this.elements.pop();
    while (
      this.elements[i] < this.elements[2 * i + 1] ||
      this.elements[i] < this.elements[2 * i + 2]
    ) {
      let sIndex;
      let max = Math.max(this.elements[2 * i + 1], this.elements[2 * i + 2]);
      if (max === this.elements[2 * i + 1]) sIndex = 2 * i + 1;
      else sIndex = 2 * i + 2;

      let temp = this.elements[i];
      this.elements[i] = this.elements[sIndex];
      this.elements[sIndex] = temp;

      i = sIndex;
    }
    return topElem;
  }
}

const heap = new Heap([8, 3, 1, 6, 4, 1]);
heap.insert(12);
console.log(heap);
heap.get();
heap.get();

console.log(heap);
