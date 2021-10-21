/** 206 RETURN REVERSE OF SINGLY-LINKED LIST
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if (!head || !head.next) return head

    // console.log(head)
    let reversedList = reverseList(head.next)

    // console.log("head.val:", head.val, "head.next:", head.next, "reversedList:", reversedList)
    head.next.next = head
    head.next = null
    // console.log(head)
    
    return reversedList
};

/*
head
head.val
head.next
*/