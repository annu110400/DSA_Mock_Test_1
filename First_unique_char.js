function firstUniqueChar(s) {
    const charCount = {};

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount[char] === 1) {
        return i;
      }
    }
  
    return -1;
  }
  

  console.log(firstUniqueChar("leetcode")); 
  console.log(firstUniqueChar("loveleetcode"));
  console.log(firstUniqueChar("aabb")); 
  