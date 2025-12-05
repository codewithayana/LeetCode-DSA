/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  if (!head) return 0;

    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let maxSum = 0;
    let first = head;
    let second = prev; 
    while (second) {
        maxSum = Math.max(maxSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return maxSum;  
};