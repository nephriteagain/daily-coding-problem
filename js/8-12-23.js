"use strict";
/**
 *
 Daily Coding Problem
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

Run-length encoding is a fast and simple method of encoding strings.
The basic idea is to represent repeated successive
characters as a single count and character.
For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

Implement run-length encoding and decoding.
You can assume the string to be encoded have no digits
and consists solely of alphabetic characters.
You can assume the string to be decoded is valid.
 */
(function () {
    function encode(str) {
        var encoded = '';
        var count = 1;
        var char = str[0];
        for (var i = 1; i < str.length; i++) {
            if (str[i] === str[i - 1]) {
                count++;
            }
            else {
                encoded += "".concat(count).concat(char);
                char = str[i];
                count = 1;
            }
        }
        encoded += "".concat(count).concat(char);
        return encoded;
    }
    function decode(str) {
        var decoded = '';
        for (var i = 0; i < str.length; i += 2) {
            var t = str[i + 1].repeat(parseInt(str[i]));
            decoded += t;
        }
        return decoded;
    }
    var test = 'aaabbcccdddeeff';
    console.log(encode(test));
    console.log(decode(encode(test)));
})();
