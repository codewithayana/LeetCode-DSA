/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
   let n = costs.length;
  let left = 0, right = n - 1;

  const leftHeap = [];
  const rightHeap = [];

  const push = (heap, x) => {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };

  const pop = (heap) => {
    const min = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      while (true) {
        let l = i * 2 + 1, r = l + 1, s = i;
        if (l < heap.length && heap[l] < heap[s]) s = l;
        if (r < heap.length && heap[r] < heap[s]) s = r;
        if (s === i) break;
        [heap[i], heap[s]] = [heap[s], heap[i]];
        i = s;
      }
    }
    return min;
  };

  for (let i = 0; i < candidates && left <= right; i++) {
    push(leftHeap, costs[left++]);
  }

  for (let i = 0; i < candidates && left <= right; i++) {
    push(rightHeap, costs[right--]);
  }

  let total = 0;

  for (let i = 0; i < k; i++) {
    let leftVal = leftHeap.length ? leftHeap[0] : Infinity;
    let rightVal = rightHeap.length ? rightHeap[0] : Infinity;

    if (leftVal <= rightVal) {
      total += pop(leftHeap);
      if (left <= right) push(leftHeap, costs[left++]);
    } else {
      total += pop(rightHeap);
      if (left <= right) push(rightHeap, costs[right--]);
    }
  }

  return total; 
};