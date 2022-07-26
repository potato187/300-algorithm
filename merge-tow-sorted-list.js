function ListNode(val, next) {
	this.val = val ?? null;
	this.next = next ?? null;
}

const printNode = (list) => {
	const dump = new ListNode();
	dump.next = list;

	while (dump.next !== null) {
		console.log(dump.next.val);
		dump.next = dump.next.next;
	}
};

var mergeTwoLists = function (list1, list2) {
	const tmp = new ListNode();
	let head = tmp;
	while (list1 && list2) {
		if (list1.val < list2.val) {
			head.next = list1;
			list1 = list1.next;
		} else {
			head.next = list2;
			list2 = list2.next;
		}
		head = head.next;
	}

	if (list1) {
		head.next = list1;
	}

	if (list2) {
		head.next = list2;
	}
	return tmp.next;
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const list2 = new ListNode(2, new ListNode(2, new ListNode(4)));
printNode(mergeTwoLists(list1, list2));
