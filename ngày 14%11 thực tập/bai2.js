function isPalindrome(str) {
    const clean = str.toLowerCase().replace(/\s+/g, "");
    const reversed = clean.split("").reverse().join("");
    return clean === reversed;
}

console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false
