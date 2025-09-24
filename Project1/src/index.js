function isPalindrome(input) {

    // 1. Check if input is a string (ensure only strings are processed)
    if (typeof input !== 'string') {
        return false;
    }

    // 2. Clean the string: remove non-alphanumeric, ignore case
    const cleaned = input
        // this will make it case-insensitive
        .toLowerCase()
        //removes spaces,punctuation, and symbols. keep only letters and numbers
        .replace(/[^a-z0-9]/g, '');

    // 3. Check palindrome this will reverse the string and compare to its cleaned version
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

module.exports = isPalindrome;
