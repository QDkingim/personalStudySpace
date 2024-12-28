/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 此方法行不通 因为数字有最大位数 超出显示NAN
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode()
  let arr1 = [], arr2 = [];
  while (l1) {
    arr1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    arr2.push(l2.val)
    l2 = l2.next
  }

  // 翻转数组
  function reverse(i, j, arr) {
    while (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }

  // 将数组转换为链表
  function arrayToLinkedList(arr) {
    if (arr.length === 0) {
      return null; // 如果数组为空，返回 null
    }
    // 创建链表头节点
    let head = new ListNode(arr[0]);
    let current = head;

    // 遍历数组，从第二个元素开始，将其逐一加入链表
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next; // 移动到链表的下一个节点
    }
    return head; // 返回链表头节点
  }

  reverse(0, arr1.length - 1, arr1)
  reverse(0, arr2.length - 1, arr2)

  let str1 = arr1.join('')
  let str2 = arr2.join('')

  let num1 = Number(str1)
  let num2 = Number(str2)

  let finalNum = num1 + num2

  let finalNumStr = finalNum.toString()

  let finalNumArr = finalNumStr.split('')

  reverse(0, finalNumArr.length - 1, finalNumArr)

  result = arrayToLinkedList(finalNumArr)

  return result

};