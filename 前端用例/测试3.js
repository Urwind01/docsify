//输入一个链表，从尾到头打印链表每个节点的值

function printListFromTailToHead(head){
    if(!head){
        return 0
    }else{
        var arr = new Array()
        var curr = head;
        while(curr){
            arr.push(curr.val)
            curr = curr.next;
        }
        return arr.reverse()
    }
}


insert(node){
    if(this.head){
           node.next = this.head;
        }else {
           node.next = null;
        }
        this.head = node;
}

insert()