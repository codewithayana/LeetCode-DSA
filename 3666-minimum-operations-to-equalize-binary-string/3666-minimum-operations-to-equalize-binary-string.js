/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function(s, k) {
   const n = s.length;
    let start = 0;
    for (const c of s) if (c === '0') start++;

    if (start === 0) return 0;
    if (k % 2 === 0 && start % 2 === 1) return -1;

    const dist = new Array(n + 1).fill(-1);
    dist[start] = 0;

    const next = [new Array(n + 2), new Array(n + 2)];
    for (let p = 0; p < 2; p++) {
        for (let i = 0; i <= n + 1; i++) next[p][i] = i;
    }

    function find(p, x) {
        if (next[p][x] !== x) {
            next[p][x] = find(p, next[p][x]);
        }
        return next[p][x];
    }

    function erase(p, x) {
        next[p][x] = x + 2; 
    }


    for (let i = 0; i <= n; i++) {
        if (i !== start) {
           
        } else {
            erase(i % 2, i);
        }
    }

    const q = [];
    let head = 0;
    q.push(start);

    while (head < q.length) {
        const z = q[head++];
        const d = dist[z];

        const minX = Math.max(0, k - (n - z));
        const maxX = Math.min(k, z);

        let lo = z + k - 2 * maxX;
        let hi = z + k - 2 * minX;

        const parity = (z + k) & 1;
        let cur = find(parity, lo + ((parity - lo) & 1));

        while (cur <= hi) {
            dist[cur] = d + 1;
            if (cur === 0) return d + 1;
            q.push(cur);
            const nxt = cur;
            cur = find(parity, cur + 2);
            erase(parity, nxt);
        }
    }

    return -1;
};