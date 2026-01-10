/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let prevGroupEnd = dummy;

    while (true) {
    
        let kth = prevGroupEnd;
        for (let i = 0; i < k && kth; i++) {
            kth = kth.next;
        }
        if (!kth) break; 

        let groupStart = prevGroupEnd.next;
        let nextGroupStart = kth.next;

        let prev = nextGroupStart;
        let curr = groupStart;

        while (curr !== nextGroupStart) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        prevGroupEnd.next = kth;
        prevGroupEnd = groupStart;
    }

    return dummy.next;
};