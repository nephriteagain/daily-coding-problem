/**
 * This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, 
and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, 
since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. 
For example, '001' is not allowed.
 */

/**
 * 1111;
 * aaaa, kaa, aka, aak, kk
 */

/**
 * 11111;
 * aaaaa, kaaa, akaa, aaka, aaak, kka, akk, kak
 */
function numDecodings(message: string): number {
    const n = message.length;
    
    if (n === 0) {
      return 0;
    }
  
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Empty string is one valid decoding
  
    for (let i = 1; i <= n; i++) {
      // Check if the current digit is not zero
      if (message[i - 1] !== '0') {
        dp[i] += dp[i - 1];
      }
  
      // Check if the current and previous digits form a number between 10 and 26
      if (i > 1 && message[i - 2] !== '0' && parseInt(message.substring(i - 2, i)) <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  
    return dp[n];
  }
  
  // Example usage:
  console.log(numDecodings('111')); // Output: 3
  console.log(numDecodings('112')); 
  console.log(numDecodings('1311'));
  console.log(numDecodings('132'));
  console.log(numDecodings('131551'));
  