"use strict";
/**
 * Implement regular expression matching with the following special characters:

. (period) which matches any single character
* (asterisk) which matches zero or more of the preceding element
That is, implement a function that takes in a string and a valid regular
expression and returns whether or not the string matches the regular expression.

For example, given the regular expression "ra." and the string "ray",
your function should return true. The same regular expression on the string
"raymond" should return false.

Given the regular expression ".*at" and the string "chat",
your function should return true.
The same regular expression on the string "chats" should return false.
 */
(function () {
    function discountRegex(regex, str) {
        var r = 0;
        var s = 0;
        while (r < regex.length) {
            if (regex[r] !== undefined && str[s] === undefined) {
                return false;
            }
            if (regex[r] === '.') {
                r++, s++;
            }
            else if (regex[r] === '*' && regex[r - 1] === '.') {
                r++, s++;
            }
            else if (regex[r] === '*' && str[s] === regex[r - 1]) {
                r++, s++;
            }
            else if (regex[r] !== str[s]) {
                return false;
            }
            // Increment the indices even when the condition is met
            r++, s++;
        }
        if (s < str.length) {
            return false;
        }
        return true;
    }
    console.log(discountRegex('ra.', 'ray'));
    console.log(discountRegex('ra.', 'raymond'));
    console.log(discountRegex('.*at', 'chat'));
    console.log(discountRegex('.*at', 'chats'));
})();
