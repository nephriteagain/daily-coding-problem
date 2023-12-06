"use strict";
/**
 * Given a string of round, curly,
 * and square open and closing brackets,
 * return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
 */
(function () {
    function validBrackets(brackets) {
        var stack = [];
        for (var i = 0; i < brackets.length; i++) {
            if (brackets[i] === '(' || brackets[i] === '[' || brackets[i] === '{') {
                stack.push(brackets[i]);
            }
            else if (stack.length === 0) {
                return false;
            }
            else if (brackets[i] === ')' && stack.pop() !== '(') {
                return false;
            }
            else if (brackets[i] === '}' && stack.pop() !== '{') {
                return false;
            }
            else if (brackets[i] === ']' && stack.pop() !== '[') {
                return false;
            }
        }
        if (stack.length !== 0) {
            return false;
        }
        return true;
    }
    console.log(validBrackets("([])[]({})"));
    console.log(validBrackets("([)]"));
    console.log(validBrackets("((()"));
})();
