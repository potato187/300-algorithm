function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const node1 = new ListNode(
	1,
	new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8)))))))
);
const node2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const node3 = new ListNode(1, new ListNode(2));

var middleNode = function (head) {
	if (!head.next) return head;
	let slowPoint = head;
	let fastPoint = head.next;
	while (fastPoint !== null && fastPoint.next !== null) {
		fastPoint = fastPoint.next.next;
		slowPoint = slowPoint.next;
	}

	return slowPoint;
};

console.log(middleNode(node3));
