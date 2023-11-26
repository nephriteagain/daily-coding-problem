"use strict";
/**
 * You run an e-commerce website and want to
 * record the last N order ids in a log.
 * Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log.
i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
 */
(function () {
    var ListNode = /** @class */ (function () {
        function ListNode(val, next) {
            if (next === void 0) { next = null; }
            this.val = val;
            this.next = next;
        }
        return ListNode;
    }());
    var LinkedList = /** @class */ (function () {
        function LinkedList(head) {
            if (head === void 0) { head = null; }
            this.head = this.tail = head;
            ;
            this.length = head === null ? 0 : 1;
        }
        LinkedList.prototype.add = function (val) {
            this.length++;
            if (!this.head) {
                this.head = this.tail = new ListNode(val);
                return;
            }
            var node = new ListNode(val);
            node.next = this.head;
            this.head = node;
            return;
        };
        LinkedList.prototype.removeLast = function () {
            var _a;
            if (!this.head) {
                return;
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
            var curr = this.head;
            while ((_a = curr.next) === null || _a === void 0 ? void 0 : _a.next) {
                curr = curr.next;
            }
            curr.next = null;
            this.tail = curr;
            this.length--;
            return;
        };
        LinkedList.prototype.getLast = function (i) {
            if (i <= 0) {
                throw new Error('starts from 1 onwards');
            }
            if (this.length < i) {
                throw new Error('length is less than i');
            }
            var curr = this.head;
            var j = 1;
            while (curr && j < i) {
                curr = curr.next;
                j++;
            }
            return curr === null || curr === void 0 ? void 0 : curr.val;
        };
        return LinkedList;
    }());
    var OrderLogs = /** @class */ (function () {
        function OrderLogs(n) {
            this.limit = n;
            this.logs = new LinkedList();
        }
        OrderLogs.prototype.record = function (order_id) {
            this.logs.add(order_id);
            if (this.logs.length > this.limit) {
                this.logs.removeLast();
            }
        };
        OrderLogs.prototype.get_last = function (i) {
        };
        return OrderLogs;
    }());
})();
