function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  

    const mergedList = new ListNode();
    let tail = mergedList;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }

    return mergedList.next;
};
