/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    let count = 0;
  let start = 0;
  const parts = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') count++;
    else count--;

    if (count === 0) {
      const inner = s.slice(start + 1, i); 
      const largestInner = makeLargestSpecial(inner);
      parts.push('1' + largestInner + '0');
      start = i + 1;
    }
  }

  parts.sort((a, b) => b.localeCompare(a));

  return parts.join('');
};