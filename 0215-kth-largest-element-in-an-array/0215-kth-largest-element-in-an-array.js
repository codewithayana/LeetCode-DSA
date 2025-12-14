/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [];

    const swap = (i, j) => {
        [heap[i], heap[j]] = [heap[j], heap[i]];
    };

    const heapifyUp = (i) => {
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (heap[p] <= heap[i]) break;
            swap(p, i);
            i = p;
        }
    };

    const heapifyDown = (i) => {
        while (true) {
            let l = i * 2 + 1;
            let r = i * 2 + 2;
            let s = i;

            if (l < heap.length && heap[l] < heap[s]) s = l;
            if (r < heap.length && heap[r] < heap[s]) s = r;
            if (s === i) break;

            swap(i, s);
            i = s;
        }
    };

    for (let num of nums) {
        heap.push(num);
        heapifyUp(heap.length - 1);
        if (heap.length > k) {
            heap[0] = heap.pop();
            heapifyDown(0);
        }
    }

    return heap[0];
};
