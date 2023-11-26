/**
 * You run an e-commerce website and want to 
 * record the last N order ids in a log. 
 * Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. 
i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
 */

(function(){


    class ListNode<T> {
        val: T;
        next: ListNode<T>|null;
        constructor(val:T, next=null) {
            this.val = val;
            this.next = next;
        }
    }


    class LinkedList {
        head:ListNode<string>|null;
        tail:ListNode<string>|null;
        length: number;
        constructor(head=null) {
            this.head = this.tail = head;;            
            this.length = head === null? 0 : 1;
        }
        add(val:string) {
            this.length++;
            if (!this.head) {
                this.head = this.tail = new ListNode(val)
                return;
            }
            const node = new ListNode(val)
            node.next = this.head;
            this.head = node;
            return;
        }
        removeLast() {
            if (!this.head) {
                return
            }
            if (this.head === this.tail) {
                this.head = this.tail = null;
                this.length--;
                return;                
            }

            if (this.head.next === this.tail) {
                this.length--;
                this.head.next = null;
                this.tail = this.head;
                return;
            }

            let curr = this.head;
            while (curr.next?.next) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
            this.length--;
            return
            
        }
        getLast(i:number) {
            if (i <= 0) {
                throw new Error('starts from 1 onwards')
            }
            if (this.length < i) {
                throw new Error('length is less than i')
            }
            let curr = this.head;
            let j = 1;
            while (curr && j < i) {
                curr = curr.next;
                j++
            }

            return curr?.val
        }

    }    
    
    class OrderLogs {
        private limit : number;
        public logs : LinkedList;

        constructor(n:number) {
            this.limit = n;
            this.logs = new LinkedList();
        }

        record(order_id:string) {
            this.logs.add(order_id)            
            if (this.logs.length > this.limit) {
                this.logs.removeLast()
            }
        }

        get_last(i:number) {

        }
    }


})()