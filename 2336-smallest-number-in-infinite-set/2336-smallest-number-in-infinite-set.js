
var SmallestInfiniteSet = function() {
   this.curr = 1;          
    this.heap = [];         
    this.set = new Set();    
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.heap.length > 0) {
        const val = this._popHeap();
        this.set.delete(val);
        return val;
    }
    return this.curr++;
};
SmallestInfiniteSet.prototype._pushHeap = function(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
        let p = Math.floor((i - 1) / 2);
        if (this.heap[p] <= this.heap[i]) break;
        [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
        i = p;
    }
};

SmallestInfiniteSet.prototype._popHeap = function() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
        this.heap[0] = last;
        let i = 0;
        while (true) {
            let l = i * 2 + 1, r = i * 2 + 2, s = i;
            if (l < this.heap.length && this.heap[l] < this.heap[s]) s = l;
            if (r < this.heap.length && this.heap[r] < this.heap[s]) s = r;
            if (s === i) break;
            [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
            i = s;
        }
    }
    return top;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.curr && !this.set.has(num)) {
        this._pushHeap(num);
        this.set.add(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */