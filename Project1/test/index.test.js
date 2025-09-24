const isPalindrome = require('../src');

describe('isPalindrome function', () => {
    // 1. Function existence
    test('should be defined', () => {
        expect(typeof isPalindrome).toBe('function');
    });

    // 2. Reject non-string inputs //palindrome only works for strings
    describe('Invalid input types', () => {
        test('should return false for numbers', () => {
            expect(isPalindrome(12321)).toBe(false);
        });
        test('should return false for arrays', () => {
            expect(isPalindrome(['racecar'])).toBe(false);
        });
        test('should return false for objects', () => {
            expect(isPalindrome({ word: 'racecar' })).toBe(false);
        });
        test('should return false for null or undefined', () => {
            expect(isPalindrome(null)).toBe(false);
            expect(isPalindrome(undefined)).toBe(false);
        });
        test('should return false for booleans', () => {
            expect(isPalindrome(true)).toBe(false);
            expect(isPalindrome(false)).toBe(false);
        });
    });

    // 3. Simple palindrome checks
    describe('Basic palindrome checks', () => {
        test('"bob" should return true', () => {
            expect(isPalindrome('bob')).toBe(true);
        });
        test('"racecar" should return true', () => {
            expect(isPalindrome('racecar')).toBe(true);
        });
        test('"apple" should return false', () => {
            expect(isPalindrome('apple')).toBe(false);
        });
    });

    // 4. Case-insensitive checks
    describe('Case insensitivity', () => {
        test('"Racecar" should return true', () => {
            expect(isPalindrome('Racecar')).toBe(true);
        });
    });

    // 5. Ignore spaces and punctuation
    describe('Ignore spaces and punctuation', () => {
        test('"Madam I\'m Adam" should return true', () => {
            expect(isPalindrome("Madam I'm Adam")).toBe(true);
        });
        test('"Dennis sinned\n." should return true', () => {
            expect(isPalindrome("Dennis sinned\n.")).toBe(true);
        });
    });

    // 6. Empty string or only punctuation
    describe('Edge cases', () => {
        test('Empty string should return true', () => {
            expect(isPalindrome('')).toBe(true);
        });
        test('String with only punctuation should return true', () => {
            // (after cleaning, it's empty, which counts as a palindrome)
            expect(isPalindrome('!!!')).toBe(true);
        });
    });
});
