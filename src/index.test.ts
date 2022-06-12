import { isPalindrome } from ".";

test("neuquen is palindrome", () => {
  expect(isPalindrome("neuquen")).toBe(true);
});

test("bariloche is not palindrome", () => {
  expect(isPalindrome("bariloche")).toBe(false);
});
