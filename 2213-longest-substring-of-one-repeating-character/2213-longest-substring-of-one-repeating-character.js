/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;
    const tree = Array(4 * n).fill(null);

    function merge(a, b) {
        if (!a) return b;
        if (!b) return a;

        return {
            left: a.left,
            right: b.right,
            len: a.len + b.len,
            pref: a.pref === a.len && a.right === b.left
                ? a.len + b.pref : a.pref,
            suff: b.suff === b.len && a.right === b.left
                ? b.len + a.suff : b.suff,
            best: Math.max(
                a.best,
                b.best,
                a.right === b.left ? a.suff + b.pref : 0
            )
        };
    }

    function build(node, l, r) {
        if (l === r) {
            tree[node] = {
                left: s[l],
                right: s[l],
                len: 1,
                pref: 1,
                suff: 1,
                best: 1
            };
            return;
        }

        let mid = (l + r) >> 1;
        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);
        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    }

    function update(node, l, r, idx, ch) {
        if (l === r) {
            tree[node] = {
                left: ch,
                right: ch,
                len: 1,
                pref: 1,
                suff: 1,
                best: 1
            };
            return;
        }

        let mid = (l + r) >> 1;

        if (idx <= mid)
            update(node * 2, l, mid, idx, ch);
        else
            update(node * 2 + 1, mid + 1, r, idx, ch);

        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    }

    build(1, 0, n - 1);

    let ans = [];

    for (let i = 0; i < queryIndices.length; i++) {
        update(1, 0, n - 1, queryIndices[i], queryCharacters[i]);
        ans.push(tree[1].best);
    }

    return ans;
};