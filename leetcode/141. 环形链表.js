/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast) {
    if (fast.next == null) return false
    slow = slow.next
    fast = fast.next.next
    if (slow == fast) return true
  }
  return false
};

// 看了题解才完成的
// #1 快慢指针法
// 快、慢指针，从头节点出发
// 慢指针每次走一步，快指针每次走两步，不断比较它们指向的节点的值
// 如果节点值相同，说明有环。如果不同，继续循环。
// 类似 “追及问题”
//    两个人在环形跑道上赛跑，同一个起点出发，一个跑得快一个跑得慢，在某一时刻，跑得快的必定会追上跑得慢的，只要是跑道是环形的，不是环形就肯定追不上。