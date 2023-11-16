"use strict";
/**
 * An XOR linked list is a more memory efficient doubly linked list.
 * Instead of each node holding next and prev fields,
 * it holds a field named both,
 * which is an XOR of the next node and the previous node.
 * Implement an XOR linked list; it has an add(element)
 * which adds the element to the end,
 * and a get(index) which returns the node at index.

If using a language that has no pointers (such as Python),
you can assume you have access to get_pointer and
dereference_pointer functions that converts between nodes and memory addresses.
 */
//TODO: this is incorrect fix
var XORNode = /** @class */ (function () {
    function XORNode(data) {
        this.data = data;
        this.xorPointer = 0;
    }
    return XORNode;
}());
var XORLinkedList = /** @class */ (function () {
    function XORLinkedList() {
        this.head = null;
    }
    XORLinkedList.prototype.add = function (data) {
        var newNode = new XORNode(data);
        if (!this.head) {
            // If the list is empty, the new node is the head.
            this.head = newNode;
        }
        else {
            var current = this.head;
            var prev = 0;
            // Traverse the list to find the last node.
            while ((current === null || current === void 0 ? void 0 : current.xorPointer) !== prev) {
                var temp = current;
                current = this.getNodeByXOR(prev, current === null || current === void 0 ? void 0 : current.xorPointer);
                prev = temp.xorPointer;
            }
            // Calculate XOR of the last node's address and 0 to get the XOR pointer for the new node.
            newNode.xorPointer = prev;
            // Update the XOR pointer of the last node to include the new node's address.
            if (current) {
                current.xorPointer ^= this.getAddress(newNode);
            }
        }
    };
    XORLinkedList.prototype.get = function (index) {
        var current = this.head;
        var prev = 0;
        for (var i = 0; i < index && current; i++) {
            var temp = current;
            current = this.getNodeByXOR(prev, current === null || current === void 0 ? void 0 : current.xorPointer);
            prev = this.getAddress(temp);
        }
        return current === null || current === void 0 ? void 0 : current.data;
    };
    XORLinkedList.prototype.getNodeByXOR = function (a, b) {
        if (b === undefined) {
            return null;
        }
        var address = a ^ b;
        // Assuming that the address is always valid in this simple example.
        // In a real-world scenario, you might need additional checks.
        return this.getNodeByAddress(address);
    };
    XORLinkedList.prototype.getNodeByAddress = function (address) {
        var current = this.head;
        var prev = 0;
        while (current) {
            if (this.getAddress(current) === address) {
                return current;
            }
            var temp = current;
            current = this.getNodeByXOR(prev, current === null || current === void 0 ? void 0 : current.xorPointer);
            prev = this.getAddress(temp);
        }
        return null;
    };
    XORLinkedList.prototype.getAddress = function (node) {
        return node.__proto__.constructor.prototype;
    };
    return XORLinkedList;
}());
// Example usage:
var xorList = new XORLinkedList();
xorList.add(1);
xorList.add(2);
xorList.add(3);
console.log(xorList.get(0)); // Output: 1
console.log(xorList.get(1)); // Output: 2
console.log(xorList.get(2)); // Output: 3
