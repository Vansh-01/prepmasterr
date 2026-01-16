export type Difficulty = "Easy" | "Medium" | "Hard";

export interface CodingChallenge {
  id: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation: string;
  }[];
  templates: Record<string, string>;
}

// Hints for each challenge - progressively reveals solution approaches
export const challengeHints: Record<string, string[]> = {
  "two-sum": [
    "Think about what information you need to find: for each number, you need to check if (target - number) exists.",
    "A brute force approach would check every pair - but can you do better using a data structure for O(1) lookups?",
    "Use a hash map to store numbers you've seen and their indices. For each number, check if (target - num) is already in the map."
  ],
  "palindrome-number": [
    "Negative numbers cannot be palindromes. Also think about numbers ending in 0.",
    "You could convert to a string, but can you solve it mathematically without extra space?",
    "Try reversing only half the number and compare. When the reversed half equals or exceeds the remaining half, you've reached the middle."
  ],
  "reverse-string": [
    "You need to modify the array in-place with O(1) extra memory.",
    "Think about using two pointers - one at the start and one at the end.",
    "Swap characters at the two pointers, then move them toward each other until they meet."
  ],
  "longest-substring": [
    "You need to track which characters are in the current window.",
    "Consider using a sliding window approach with two pointers.",
    "Use a Set or Map to track characters. When you find a duplicate, shrink the window from the left until it's valid again."
  ],
  "add-two-numbers": [
    "Think about how you add numbers digit by digit, handling carry.",
    "Traverse both lists simultaneously, summing corresponding digits plus any carry.",
    "Create a dummy head node to simplify list construction. Don't forget to handle the final carry!"
  ],
  "container-with-most-water": [
    "The area is determined by the shorter line and the distance between lines.",
    "Consider starting with the widest container (first and last lines).",
    "Use two pointers. Move the pointer pointing to the shorter line inward, as that's the only way to potentially find a larger area."
  ],
  "median-sorted-arrays": [
    "The median divides the combined array into two equal halves.",
    "Binary search can help find the correct partition point in O(log(min(m,n))) time.",
    "Partition both arrays such that all elements on the left are smaller than all elements on the right. Adjust the partition using binary search on the smaller array."
  ],
  "longest-palindromic-substring": [
    "A palindrome mirrors around its center.",
    "Consider expanding around each center (both single characters and pairs).",
    "For each position, try expanding outward while characters match. Track the longest palindrome found. Handle both odd and even length palindromes."
  ],
  "trapping-rain-water": [
    "Water at each position depends on the maximum heights on both sides.",
    "For each bar, water trapped = min(maxLeft, maxRight) - height[i].",
    "Use two arrays to precompute max heights from left and right, or use two pointers moving inward to compute on the fly."
  ],
  "valid-parentheses": [
    "Each closing bracket must match the most recent unmatched opening bracket.",
    "Use a stack to keep track of opening brackets.",
    "When you see a closing bracket, check if it matches the top of the stack. The string is valid if the stack is empty at the end."
  ],
  "merge-sorted-array": [
    "You have extra space at the end of nums1 to accommodate nums2.",
    "Starting from the end avoids overwriting elements you still need.",
    "Use three pointers: one at the end of nums1's values (m-1), one at the end of nums2 (n-1), and one at the end of nums1 (m+n-1). Fill from the back."
  ],
  "best-time-to-buy-sell-stock": [
    "You need to find the maximum difference between a later price and an earlier price.",
    "Track the minimum price seen so far as you iterate.",
    "For each price, calculate profit if you sold at that price (price - minPrice). Update maxProfit and minPrice as you go."
  ],
  "climbing-stairs": [
    "To reach step n, you could have come from step n-1 or step n-2.",
    "This is similar to the Fibonacci sequence.",
    "Use dynamic programming: dp[n] = dp[n-1] + dp[n-2]. You only need to track the last two values to save space."
  ],
  "contains-duplicate": [
    "You need to check if any element appears more than once.",
    "A data structure for O(1) lookups would help.",
    "Use a Set. As you iterate, check if the element is already in the set. If yes, return true. Otherwise, add it."
  ],
  "single-number": [
    "Every element appears twice except one. Think about a property that cancels out pairs.",
    "XOR has a useful property: a XOR a = 0, and a XOR 0 = a.",
    "XOR all numbers together. Pairs will cancel out, leaving only the single number."
  ],
  "3sum": [
    "If you sort the array first, you can avoid duplicates more easily.",
    "For each number, the problem reduces to finding two numbers that sum to the negative of that number.",
    "Fix one number, then use two pointers on the remaining sorted array to find pairs. Skip duplicates at each step."
  ],
  "group-anagrams": [
    "Anagrams have the same characters in different orders.",
    "Think about what property is shared by all anagrams of a word.",
    "Sort each string to get a canonical form, or count character frequencies. Use this as a hash map key to group anagrams."
  ],
  "product-of-array-except-self": [
    "You can't use division. Think about prefix and suffix products.",
    "For each element, the result is (product of all elements before it) × (product of all elements after it).",
    "First pass: compute prefix products. Second pass: multiply by suffix products. You can do this in-place using the result array."
  ],
  "rotate-image": [
    "Try to find a pattern by tracking where each element moves.",
    "The rotation can be achieved by transposing the matrix, then reversing each row.",
    "Transpose (swap matrix[i][j] with matrix[j][i]), then reverse each row to get 90° clockwise rotation."
  ],
  "coin-change": [
    "This is an optimization problem - think about dynamic programming.",
    "Define dp[amount] as the minimum coins needed to make that amount.",
    "For each amount from 1 to target, try each coin. dp[i] = min(dp[i], dp[i-coin] + 1) if i-coin >= 0."
  ],
  "validate-bst": [
    "A BST has the property that all left subtree nodes are less than the node, and all right subtree nodes are greater.",
    "Checking only immediate children isn't enough - you need to track valid ranges.",
    "Pass down min and max bounds. For left child, update max. For right child, update min. Use null or infinity for initial bounds."
  ],
  "lru-cache": [
    "You need O(1) access and O(1) removal/insertion of the least recently used item.",
    "Combine a hash map (for O(1) access) with a data structure that maintains order.",
    "Use a doubly linked list to maintain usage order, and a hash map from key to list node. Move accessed nodes to the front; remove from the back when full."
  ],
  "merge-k-sorted-lists": [
    "Think about how you would merge two sorted lists, then extend.",
    "A min-heap can efficiently find the smallest among k elements.",
    "Use a min-heap containing the head of each list. Pop the minimum, add it to the result, and push that node's next (if exists) to the heap."
  ],
  "word-search-ii": [
    "Searching for each word separately would be inefficient.",
    "Use a Trie to store all words and search them simultaneously.",
    "Build a Trie from words. DFS from each cell, following Trie nodes. Mark found words and backtrack. Optimize by removing found words from Trie."
  ],
  "regular-expression-matching": [
    "The '*' can match zero or more of the preceding character.",
    "Consider using dynamic programming where dp[i][j] means s[0..i) matches p[0..j).",
    "Handle cases: if p[j-1] == s[i-1] or '.', inherit dp[i-1][j-1]. If p[j-1] == '*', either use zero occurrences (dp[i][j-2]) or match one more (dp[i-1][j] if char matches)."
  ],
  "serialize-deserialize-binary-tree": [
    "You need to encode the tree structure including null nodes.",
    "Use a traversal (BFS or preorder DFS) and mark null nodes explicitly.",
    "Serialize: Use preorder traversal, output values separated by delimiter, use 'null' for missing nodes. Deserialize: Parse values and reconstruct using the same traversal order."
  ],
  "longest-valid-parentheses": [
    "Track the length of valid substrings ending at each position.",
    "Use a stack to track indices of unmatched parentheses.",
    "Push '(' indices onto stack. On ')', pop and calculate length from the new top of stack (or from -1 if empty). Keep a base index for calculation."
  ],
  "alien-dictionary": [
    "The order of characters can be derived by comparing adjacent words.",
    "This is a topological sort problem on a graph of character orderings.",
    "Build a graph: for each pair of adjacent words, find the first differing character - that gives an edge. Use topological sort (Kahn's or DFS) to find the order."
  ],
  "minimum-window-substring": [
    "You need to find the smallest window containing all characters of t.",
    "Use a sliding window with two pointers.",
    "Expand the right pointer until you have all characters of t. Then shrink from the left to minimize. Use a hash map to track character counts needed."
  ]
};

export const codingChallenges: CodingChallenge[] = [
  // Easy Challenges
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]"
      }
    ],
    templates: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test your solution
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]`,
      python: `def two_sum(nums, target):
    # Write your solution here
    pass

# Test your solution
print(two_sum([2, 7, 11, 15], 9))  # Expected: [0, 1]`,
      java: `import java.util.Arrays;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[]{};
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    vector<int> result = twoSum(nums, 9);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}`,
      typescript: `function twoSum(nums: number[], target: number): number[] {
  // Write your solution here
  return [];
}

// Test your solution
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]`,
    }
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same backward as forward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left."
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      }
    ],
    templates: {
      javascript: `function isPalindrome(x) {
  // Write your solution here
  
}

// Test your solution
console.log(isPalindrome(121));  // Expected: true
console.log(isPalindrome(-121)); // Expected: false`,
      python: `def is_palindrome(x):
    # Write your solution here
    pass

# Test your solution
print(is_palindrome(121))   # Expected: True
print(is_palindrome(-121))  # Expected: False`,
      java: `class Solution {
    public static boolean isPalindrome(int x) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome(121));   // Expected: true
        System.out.println(isPalindrome(-121));  // Expected: false
    }
}`,
      cpp: `#include <iostream>
using namespace std;

bool isPalindrome(int x) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isPalindrome(121) << endl;   // Expected: true
    cout << boolalpha << isPalindrome(-121) << endl;  // Expected: false
    return 0;
}`,
      typescript: `function isPalindrome(x: number): boolean {
  // Write your solution here
  return false;
}

// Test your solution
console.log(isPalindrome(121));  // Expected: true
console.log(isPalindrome(-121)); // Expected: false`,
    }
  },
  {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    description: "Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
        explanation: "The array is reversed in place."
      }
    ],
    templates: {
      javascript: `function reverseString(s) {
  // Write your solution here - modify s in-place
  
}

// Test your solution
const arr = ["h","e","l","l","o"];
reverseString(arr);
console.log(arr); // Expected: ["o","l","l","e","h"]`,
      python: `def reverse_string(s):
    # Write your solution here - modify s in-place
    pass

# Test your solution
arr = ["h","e","l","l","o"]
reverse_string(arr)
print(arr)  # Expected: ["o","l","l","e","h"]`,
      java: `import java.util.Arrays;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here - modify s in-place
    }
    
    public static void main(String[] args) {
        char[] arr = {'h','e','l','l','o'};
        reverseString(arr);
        System.out.println(Arrays.toString(arr)); // Expected: [o, l, l, e, h]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here - modify s in-place
}

int main() {
    vector<char> s = {'h','e','l','l','o'};
    reverseString(s);
    for (char c : s) cout << c << " ";
    cout << endl; // Expected: o l l e h
    return 0;
}`,
      typescript: `function reverseString(s: string[]): void {
  // Write your solution here - modify s in-place
  
}

// Test your solution
const arr = ["h","e","l","l","o"];
reverseString(arr);
console.log(arr); // Expected: ["o","l","l","e","h"]`,
    }
  },
  // Medium Challenges
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.'
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.'
      }
    ],
    templates: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test your solution
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1`,
      python: `def length_of_longest_substring(s):
    # Write your solution here
    pass

# Test your solution
print(length_of_longest_substring("abcabcbb"))  # Expected: 3
print(length_of_longest_substring("bbbbb"))     # Expected: 1`,
      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << lengthOfLongestSubstring("bbbbb") << endl;    // Expected: 1
    return 0;
}`,
      typescript: `function lengthOfLongestSubstring(s: string): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1`,
    }
  },
  {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807, represented as [7,0,8] in reverse order."
      }
    ],
    templates: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  // Write your solution here
  
}

// Helper to create list from array
function createList(arr) {
  let dummy = new ListNode();
  let curr = dummy;
  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}

// Test your solution
const l1 = createList([2,4,3]);
const l2 = createList([5,6,4]);
let result = addTwoNumbers(l1, l2);
let output = [];
while (result) { output.push(result.val); result = result.next; }
console.log(output); // Expected: [7,0,8]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_two_numbers(l1, l2):
    # Write your solution here
    pass

# Helper to create list from array
def create_list(arr):
    dummy = ListNode()
    curr = dummy
    for n in arr:
        curr.next = ListNode(n)
        curr = curr.next
    return dummy.next

# Test your solution
l1 = create_list([2,4,3])
l2 = create_list([5,6,4])
result = add_two_numbers(l1, l2)
output = []
while result:
    output.append(result.val)
    result = result.next
print(output)  # Expected: [7, 0, 8]`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Write your solution here
        return null;
    }
    
    public static ListNode createList(int[] arr) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int n : arr) {
            curr.next = new ListNode(n);
            curr = curr.next;
        }
        return dummy.next;
    }
    
    public static void main(String[] args) {
        ListNode l1 = createList(new int[]{2,4,3});
        ListNode l2 = createList(new int[]{5,6,4});
        ListNode result = addTwoNumbers(l1, l2);
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        } // Expected: 7 0 8
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    // Write your solution here
    return nullptr;
}

ListNode* createList(vector<int>& arr) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    for (int n : arr) {
        curr->next = new ListNode(n);
        curr = curr->next;
    }
    return dummy.next;
}

int main() {
    vector<int> a1 = {2,4,3}, a2 = {5,6,4};
    ListNode* l1 = createList(a1);
    ListNode* l2 = createList(a2);
    ListNode* result = addTwoNumbers(l1, l2);
    while (result) {
        cout << result->val << " ";
        result = result->next;
    } // Expected: 7 0 8
    return 0;
}`,
      typescript: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // Write your solution here
  return null;
}

// Helper to create list from array
function createList(arr: number[]): ListNode | null {
  let dummy = new ListNode();
  let curr = dummy;
  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}

// Test your solution
const l1 = createList([2,4,3]);
const l2 = createList([5,6,4]);
let result = addTwoNumbers(l1, l2);
let output: number[] = [];
while (result) { output.push(result.val); result = result.next; }
console.log(output); // Expected: [7,0,8]`,
    }
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    description: "You are given an integer array height of length n. There are n vertical lines drawn. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation: "The maximum area is between lines at index 1 and 8, giving area = min(8,7) * (8-1) = 49."
      }
    ],
    templates: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test your solution
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1]));               // Expected: 1`,
      python: `def max_area(height):
    # Write your solution here
    pass

# Test your solution
print(max_area([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(max_area([1,1]))                # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1}));               // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> h1 = {1,8,6,2,5,4,8,3,7};
    vector<int> h2 = {1,1};
    cout << maxArea(h1) << endl; // Expected: 49
    cout << maxArea(h2) << endl; // Expected: 1
    return 0;
}`,
      typescript: `function maxArea(height: number[]): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1]));               // Expected: 1`,
    }
  },
  // Hard Challenges
  {
    id: "median-two-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
        explanation: "Merged array = [1,2,3] and median is 2."
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
        explanation: "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ],
    templates: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
  
}

// Test your solution
console.log(findMedianSortedArrays([1,3], [2]));   // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
      python: `def find_median_sorted_arrays(nums1, nums2):
    # Write your solution here
    pass

# Test your solution
print(find_median_sorted_arrays([1,3], [2]))    # Expected: 2.0
print(find_median_sorted_arrays([1,2], [3,4]))  # Expected: 2.5`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        return 0.0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2}));   // Expected: 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.5
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    return 0.0;
}

int main() {
    vector<int> n1 = {1,3}, n2 = {2};
    vector<int> n3 = {1,2}, n4 = {3,4};
    cout << findMedianSortedArrays(n1, n2) << endl; // Expected: 2.0
    cout << findMedianSortedArrays(n3, n4) << endl; // Expected: 2.5
    return 0;
}`,
      typescript: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(findMedianSortedArrays([1,3], [2]));   // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
    }
  },
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "The linked-lists are merged into one sorted list."
      }
    ],
    templates: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  // Write your solution here
  
}

// Helper to create list from array
function createList(arr) {
  if (!arr.length) return null;
  let dummy = new ListNode();
  let curr = dummy;
  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}

// Test your solution
const lists = [[1,4,5],[1,3,4],[2,6]].map(createList);
let result = mergeKLists(lists);
let output = [];
while (result) { output.push(result.val); result = result.next; }
console.log(output); // Expected: [1,1,2,3,4,4,5,6]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists):
    # Write your solution here
    pass

# Helper to create list from array
def create_list(arr):
    if not arr: return None
    dummy = ListNode()
    curr = dummy
    for n in arr:
        curr.next = ListNode(n)
        curr = curr.next
    return dummy.next

# Test your solution
lists = [create_list(arr) for arr in [[1,4,5],[1,3,4],[2,6]]]
result = merge_k_lists(lists)
output = []
while result:
    output.append(result.val)
    result = result.next
print(output)  # Expected: [1, 1, 2, 3, 4, 4, 5, 6]`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
    
    public static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int n : arr) {
            curr.next = new ListNode(n);
            curr = curr.next;
        }
        return dummy.next;
    }
    
    public static void main(String[] args) {
        ListNode[] lists = new ListNode[]{
            createList(new int[]{1,4,5}),
            createList(new int[]{1,3,4}),
            createList(new int[]{2,6})
        };
        ListNode result = mergeKLists(lists);
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        } // Expected: 1 1 2 3 4 4 5 6
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    // Write your solution here
    return nullptr;
}

ListNode* createList(vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode dummy(0);
    ListNode* curr = &dummy;
    for (int n : arr) {
        curr->next = new ListNode(n);
        curr = curr->next;
    }
    return dummy.next;
}

int main() {
    vector<vector<int>> arrs = {{1,4,5},{1,3,4},{2,6}};
    vector<ListNode*> lists;
    for (auto& arr : arrs) lists.push_back(createList(arr));
    ListNode* result = mergeKLists(lists);
    while (result) {
        cout << result->val << " ";
        result = result->next;
    } // Expected: 1 1 2 3 4 4 5 6
    return 0;
}`,
      typescript: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  // Write your solution here
  return null;
}

// Helper to create list from array
function createList(arr: number[]): ListNode | null {
  if (!arr.length) return null;
  let dummy = new ListNode();
  let curr = dummy;
  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}

// Test your solution
const lists = [[1,4,5],[1,3,4],[2,6]].map(createList);
let result = mergeKLists(lists);
let output: number[] = [];
while (result) { output.push(result.val); result = result.next; }
console.log(output); // Expected: [1,1,2,3,4,4,5,6]`,
    }
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map can trap 6 units of rain water."
      }
    ],
    templates: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

// Test your solution
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5]));             // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test your solution
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))              # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5}));             // Expected: 9
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> h1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    vector<int> h2 = {4,2,0,3,2,5};
    cout << trap(h1) << endl; // Expected: 6
    cout << trap(h2) << endl; // Expected: 9
    return 0;
}`,
      typescript: `function trap(height: number[]): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5]));             // Expected: 9`,
    }
  },
  // Additional Easy Challenges
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "The parentheses match correctly."
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All brackets are properly matched."
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "The brackets don't match."
      }
    ],
    templates: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test your solution
console.log(isValid("()"));     // Expected: true
console.log(isValid("()[]{}"));  // Expected: true
console.log(isValid("(]"));      // Expected: false`,
      python: `def is_valid(s):
    # Write your solution here
    pass

# Test your solution
print(is_valid("()"))      # Expected: True
print(is_valid("()[]{}"))  # Expected: True
print(is_valid("(]"))      # Expected: False`,
      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()"));      // Expected: true
        System.out.println(isValid("()[]{}"));  // Expected: true
        System.out.println(isValid("(]"));      // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isValid("()") << endl;      // Expected: true
    cout << boolalpha << isValid("()[]{}") << endl;  // Expected: true
    cout << boolalpha << isValid("(]") << endl;      // Expected: false
    return 0;
}`,
      typescript: `function isValid(s: string): boolean {
  // Write your solution here
  return false;
}

// Test your solution
console.log(isValid("()"));      // Expected: true
console.log(isValid("()[]{}"));  // Expected: true
console.log(isValid("(]"));      // Expected: false`,
    }
  },
  {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order. The final sorted array should be stored inside nums1.",
    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "The arrays are merged and sorted in nums1."
      }
    ],
    templates: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here - modify nums1 in-place
  
}

// Test your solution
const nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // Expected: [1,2,2,3,5,6]`,
      python: `def merge(nums1, m, nums2, n):
    # Write your solution here - modify nums1 in-place
    pass

# Test your solution
nums1 = [1,2,3,0,0,0]
merge(nums1, 3, [2,5,6], 3)
print(nums1)  # Expected: [1,2,2,3,5,6]`,
      java: `import java.util.Arrays;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here - modify nums1 in-place
    }
    
    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        merge(nums1, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(nums1)); // Expected: [1,2,2,3,5,6]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    // Write your solution here - modify nums1 in-place
}

int main() {
    vector<int> nums1 = {1,2,3,0,0,0};
    vector<int> nums2 = {2,5,6};
    merge(nums1, 3, nums2, 3);
    for (int n : nums1) cout << n << " ";
    cout << endl; // Expected: 1 2 2 3 5 6
    return 0;
}`,
      typescript: `function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Write your solution here - modify nums1 in-place
  
}

// Test your solution
const nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(nums1); // Expected: [1,2,2,3,5,6]`,
    }
  },
  {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5."
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transaction is done, max profit = 0."
      }
    ],
    templates: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test your solution
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0`,
      python: `def max_profit(prices):
    # Write your solution here
    pass

# Test your solution
print(max_profit([7,1,5,3,6,4]))  # Expected: 5
print(max_profit([7,6,4,3,1]))    # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> p1 = {7,1,5,3,6,4};
    vector<int> p2 = {7,6,4,3,1};
    cout << maxProfit(p1) << endl; // Expected: 5
    cout << maxProfit(p2) << endl; // Expected: 0
    return 0;
}`,
      typescript: `function maxProfit(prices: number[]): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0`,
    }
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways: 1+1 or 2."
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1+1+1, 1+2, or 2+1."
      }
    ],
    templates: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test your solution
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climb_stairs(n):
    # Write your solution here
    pass

# Test your solution
print(climb_stairs(2))  # Expected: 2
print(climb_stairs(3))  # Expected: 3
print(climb_stairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    return 0;
}

int main() {
    cout << climbStairs(2) << endl; // Expected: 2
    cout << climbStairs(3) << endl; // Expected: 3
    cout << climbStairs(5) << endl; // Expected: 8
    return 0;
}`,
      typescript: `function climbStairs(n: number): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
    }
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "1 appears twice."
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "All elements are distinct."
      }
    ],
    templates: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test your solution
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
      python: `def contains_duplicate(nums):
    # Write your solution here
    pass

# Test your solution
print(contains_duplicate([1,2,3,1]))  # Expected: True
print(contains_duplicate([1,2,3,4]))  # Expected: False`,
      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    return false;
}

int main() {
    vector<int> n1 = {1,2,3,1};
    vector<int> n2 = {1,2,3,4};
    cout << boolalpha << containsDuplicate(n1) << endl; // Expected: true
    cout << boolalpha << containsDuplicate(n2) << endl; // Expected: false
    return 0;
}`,
      typescript: `function containsDuplicate(nums: number[]): boolean {
  // Write your solution here
  return false;
}

// Test your solution
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false`,
    }
  },
  {
    id: "single-number",
    title: "Single Number",
    difficulty: "Easy",
    description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with O(n) runtime complexity and O(1) extra space.",
    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
        explanation: "1 appears once while 2 appears twice."
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
        explanation: "4 appears once."
      }
    ],
    templates: {
      javascript: `function singleNumber(nums) {
  // Write your solution here
  
}

// Test your solution
console.log(singleNumber([2,2,1]));     // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4`,
      python: `def single_number(nums):
    # Write your solution here
    pass

# Test your solution
print(single_number([2,2,1]))      # Expected: 1
print(single_number([4,1,2,1,2]))  # Expected: 4`,
      java: `class Solution {
    public static int singleNumber(int[] nums) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(singleNumber(new int[]{2,2,1}));     // Expected: 1
        System.out.println(singleNumber(new int[]{4,1,2,1,2})); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int singleNumber(vector<int>& nums) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> n1 = {2,2,1};
    vector<int> n2 = {4,1,2,1,2};
    cout << singleNumber(n1) << endl; // Expected: 1
    cout << singleNumber(n2) << endl; // Expected: 4
    return 0;
}`,
      typescript: `function singleNumber(nums: number[]): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(singleNumber([2,2,1]));     // Expected: 1
console.log(singleNumber([4,1,2,1,2])); // Expected: 4`,
    }
  },
  // Additional Medium Challenges
  {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "The distinct triplets that sum to zero."
      }
    ],
    templates: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test your solution
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]`,
      python: `def three_sum(nums):
    # Write your solution here
    pass

# Test your solution
print(three_sum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4}));
        // Expected: [[-1,-1,2],[-1,0,1]]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> nums = {-1,0,1,2,-1,-4};
    auto result = threeSum(nums);
    for (auto& triplet : result) {
        cout << "[" << triplet[0] << "," << triplet[1] << "," << triplet[2] << "] ";
    }
    cout << endl; // Expected: [-1,-1,2] [-1,0,1]
    return 0;
}`,
      typescript: `function threeSum(nums: number[]): number[][] {
  // Write your solution here
  return [];
}

// Test your solution
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]`,
    }
  },
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
        explanation: "Group words that are anagrams of each other."
      }
    ],
    templates: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test your solution
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]`,
      python: `def group_anagrams(strs):
    # Write your solution here
    pass

# Test your solution
print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
# Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        // Expected: [[bat],[nat,tan],[ate,eat,tea]]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    return {};
}

int main() {
    vector<string> strs = {"eat","tea","tan","ate","nat","bat"};
    auto result = groupAnagrams(strs);
    for (auto& group : result) {
        cout << "[";
        for (auto& s : group) cout << s << " ";
        cout << "] ";
    }
    cout << endl;
    return 0;
}`,
      typescript: `function groupAnagrams(strs: string[]): string[][] {
  // Write your solution here
  return [];
}

// Test your solution
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]`,
    }
  },
  {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. You must write an algorithm that runs in O(n) time and without using the division operation.",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
        explanation: "24=2*3*4, 12=1*3*4, 8=1*2*4, 6=1*2*3"
      }
    ],
    templates: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test your solution
console.log(productExceptSelf([1,2,3,4]));   // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def product_except_self(nums):
    # Write your solution here
    pass

# Test your solution
print(product_except_self([1,2,3,4]))     # Expected: [24,12,8,6]
print(product_except_self([-1,1,0,-3,3])) # Expected: [0,0,9,0,0]`,
      java: `import java.util.Arrays;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[]{};
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4})));
        // Expected: [24,12,8,6]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    return {};
}

int main() {
    vector<int> nums = {1,2,3,4};
    auto result = productExceptSelf(nums);
    for (int n : result) cout << n << " ";
    cout << endl; // Expected: 24 12 8 6
    return 0;
}`,
      typescript: `function productExceptSelf(nums: number[]): number[] {
  // Write your solution here
  return [];
}

// Test your solution
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]`,
    }
  },
  {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise. You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.",
    examples: [
      {
        input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        output: "[[7,4,1],[8,5,2],[9,6,3]]",
        explanation: "The matrix is rotated 90 degrees clockwise."
      }
    ],
    templates: {
      javascript: `function rotate(matrix) {
  // Write your solution here - modify matrix in-place
  
}

// Test your solution
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix); // Expected: [[7,4,1],[8,5,2],[9,6,3]]`,
      python: `def rotate(matrix):
    # Write your solution here - modify matrix in-place
    pass

# Test your solution
matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
print(matrix)  # Expected: [[7,4,1],[8,5,2],[9,6,3]]`,
      java: `import java.util.Arrays;

class Solution {
    public static void rotate(int[][] matrix) {
        // Write your solution here - modify matrix in-place
    }
    
    public static void main(String[] args) {
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        rotate(matrix);
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        } // Expected: [7,4,1] [8,5,2] [9,6,3]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void rotate(vector<vector<int>>& matrix) {
    // Write your solution here - modify matrix in-place
}

int main() {
    vector<vector<int>> matrix = {{1,2,3},{4,5,6},{7,8,9}};
    rotate(matrix);
    for (auto& row : matrix) {
        for (int n : row) cout << n << " ";
        cout << endl;
    } // Expected: 7 4 1 / 8 5 2 / 9 6 3
    return 0;
}`,
      typescript: `function rotate(matrix: number[][]): void {
  // Write your solution here - modify matrix in-place
  
}

// Test your solution
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix); // Expected: [[7,4,1],[8,5,2],[9,6,3]]`,
    }
  },
  {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1"
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
        explanation: "Cannot make 3 with only coin of 2."
      }
    ],
    templates: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test your solution
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3));      // Expected: -1`,
      python: `def coin_change(coins, amount):
    # Write your solution here
    pass

# Test your solution
print(coin_change([1,2,5], 11))  # Expected: 3
print(coin_change([2], 3))       # Expected: -1`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3));      // Expected: -1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    return 0;
}

int main() {
    vector<int> coins1 = {1,2,5};
    vector<int> coins2 = {2};
    cout << coinChange(coins1, 11) << endl; // Expected: 3
    cout << coinChange(coins2, 3) << endl;  // Expected: -1
    return 0;
}`,
      typescript: `function coinChange(coins: number[], amount: number): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3));      // Expected: -1`,
    }
  },
  {
    id: "validate-bst",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree contains only nodes with keys greater than the node's key. Both subtrees must also be BSTs.",
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
        explanation: "Valid BST with 2 as root, 1 as left child, 3 as right child."
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
        explanation: "Node 4 is in right subtree but has value less than 5."
      }
    ],
    templates: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root) {
  // Write your solution here
  
}

// Test your solution
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1)); // Expected: true

const tree2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(tree2)); // Expected: false`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def is_valid_bst(root):
    # Write your solution here
    pass

# Test your solution
tree1 = TreeNode(2, TreeNode(1), TreeNode(3))
print(is_valid_bst(tree1))  # Expected: True

tree2 = TreeNode(5, TreeNode(1), TreeNode(4, TreeNode(3), TreeNode(6)))
print(is_valid_bst(tree2))  # Expected: False`,
      java: `class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    public static boolean isValidBST(TreeNode root) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        TreeNode tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        System.out.println(isValidBST(tree1)); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <climits>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* l, TreeNode* r) : val(x), left(l), right(r) {}
};

bool isValidBST(TreeNode* root) {
    // Write your solution here
    return false;
}

int main() {
    TreeNode* tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    cout << boolalpha << isValidBST(tree1) << endl; // Expected: true
    return 0;
}`,
      typescript: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isValidBST(root: TreeNode | null): boolean {
  // Write your solution here
  return false;
}

// Test your solution
const tree1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(tree1)); // Expected: true`,
    }
  },
  {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class: LRUCache(int capacity) Initialize the cache with positive size capacity. int get(int key) Return the value if the key exists, otherwise return -1. void put(int key, int value) Update or insert. When capacity is reached, evict the least recently used key.",
    examples: [
      {
        input: '["LRUCache","put","put","get","put","get","put","get","get","get"] [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]',
        output: "[null,null,null,1,null,-1,null,-1,3,4]",
        explanation: "Operations on LRU cache with capacity 2."
      }
    ],
    templates: {
      javascript: `class LRUCache {
  constructor(capacity) {
    // Initialize your data structure
  }
  
  get(key) {
    // Return value if exists, -1 otherwise
  }
  
  put(key, value) {
    // Update or insert, evict LRU if needed
  }
}

// Test your solution
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Expected: 1
cache.put(3, 3);
console.log(cache.get(2)); // Expected: -1 (evicted)
cache.put(4, 4);
console.log(cache.get(1)); // Expected: -1 (evicted)
console.log(cache.get(3)); // Expected: 3
console.log(cache.get(4)); // Expected: 4`,
      python: `class LRUCache:
    def __init__(self, capacity: int):
        # Initialize your data structure
        pass
    
    def get(self, key: int) -> int:
        # Return value if exists, -1 otherwise
        pass
    
    def put(self, key: int, value: int) -> None:
        # Update or insert, evict LRU if needed
        pass

# Test your solution
cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
print(cache.get(1))  # Expected: 1
cache.put(3, 3)
print(cache.get(2))  # Expected: -1 (evicted)`,
      java: `import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {
        // Initialize your data structure
    }
    
    public int get(int key) {
        // Return value if exists, -1 otherwise
        return -1;
    }
    
    public void put(int key, int value) {
        // Update or insert, evict LRU if needed
    }
    
    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1)); // Expected: 1
        cache.put(3, 3);
        System.out.println(cache.get(2)); // Expected: -1
    }
}`,
      cpp: `#include <iostream>
#include <unordered_map>
#include <list>
using namespace std;

class LRUCache {
public:
    LRUCache(int capacity) {
        // Initialize your data structure
    }
    
    int get(int key) {
        // Return value if exists, -1 otherwise
        return -1;
    }
    
    void put(int key, int value) {
        // Update or insert, evict LRU if needed
    }
};

int main() {
    LRUCache cache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cout << cache.get(1) << endl; // Expected: 1
    cache.put(3, 3);
    cout << cache.get(2) << endl; // Expected: -1
    return 0;
}`,
      typescript: `class LRUCache {
  constructor(capacity: number) {
    // Initialize your data structure
  }
  
  get(key: number): number {
    // Return value if exists, -1 otherwise
    return -1;
  }
  
  put(key: number, value: number): void {
    // Update or insert, evict LRU if needed
  }
}

// Test your solution
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // Expected: 1`,
    }
  },
  // Additional Hard Challenges
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "All three lists merged and sorted."
      }
    ],
    templates: {
      javascript: `class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists) {
  // Write your solution here
  
}

// Helper to create list
function createList(arr) {
  let dummy = new ListNode();
  let curr = dummy;
  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}

// Test your solution
const lists = [createList([1,4,5]), createList([1,3,4]), createList([2,6])];
let result = mergeKLists(lists);
let output = [];
while (result) { output.push(result.val); result = result.next; }
console.log(output); // Expected: [1,1,2,3,4,4,5,6]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists):
    # Write your solution here
    pass

def create_list(arr):
    dummy = ListNode()
    curr = dummy
    for n in arr:
        curr.next = ListNode(n)
        curr = curr.next
    return dummy.next

# Test your solution
lists = [create_list([1,4,5]), create_list([1,3,4]), create_list([2,6])]
result = merge_k_lists(lists)
output = []
while result:
    output.append(result.val)
    result = result.next
print(output)  # Expected: [1,1,2,3,4,4,5,6]`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
    
    public static ListNode createList(int[] arr) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int n : arr) {
            curr.next = new ListNode(n);
            curr = curr.next;
        }
        return dummy.next;
    }
    
    public static void main(String[] args) {
        ListNode[] lists = {
            createList(new int[]{1,4,5}),
            createList(new int[]{1,3,4}),
            createList(new int[]{2,6})
        };
        ListNode result = mergeKLists(lists);
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        } // Expected: 1 1 2 3 4 4 5 6
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    // Write your solution here
    return nullptr;
}

ListNode* createList(vector<int>& arr) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    for (int n : arr) {
        curr->next = new ListNode(n);
        curr = curr->next;
    }
    return dummy.next;
}

int main() {
    vector<int> a1 = {1,4,5}, a2 = {1,3,4}, a3 = {2,6};
    vector<ListNode*> lists = {createList(a1), createList(a2), createList(a3)};
    ListNode* result = mergeKLists(lists);
    while (result) {
        cout << result->val << " ";
        result = result->next;
    } // Expected: 1 1 2 3 4 4 5 6
    return 0;
}`,
      typescript: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeKLists(lists: (ListNode | null)[]): ListNode | null {
  // Write your solution here
  return null;
}

// Test your solution
function createList(arr: number[]): ListNode | null {
  let dummy = new ListNode();
  let curr = dummy;
  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }
  return dummy.next;
}

const lists = [createList([1,4,5]), createList([1,3,4]), createList([2,6])];
let result = mergeKLists(lists);
let output: number[] = [];
while (result) { output.push(result.val); result = result.next; }
console.log(output); // Expected: [1,1,2,3,4,4,5,6]`,
    }
  },
  {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    description: "Given an m x n board of characters and a list of strings words, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.",
    examples: [
      {
        input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]',
        output: '["eat","oath"]',
        explanation: "These words can be found on the board."
      }
    ],
    templates: {
      javascript: `function findWords(board, words) {
  // Write your solution here
  
}

// Test your solution
const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
console.log(findWords(board, ["oath","pea","eat","rain"]));
// Expected: ["eat","oath"]`,
      python: `def find_words(board, words):
    # Write your solution here
    pass

# Test your solution
board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
print(find_words(board, ["oath","pea","eat","rain"]))
# Expected: ["eat","oath"]`,
      java: `import java.util.*;

class Solution {
    public static List<String> findWords(char[][] board, String[] words) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        char[][] board = {{'o','a','a','n'},{'e','t','a','e'},{'i','h','k','r'},{'i','f','l','v'}};
        System.out.println(findWords(board, new String[]{"oath","pea","eat","rain"}));
        // Expected: [eat, oath]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    // Write your solution here
    return {};
}

int main() {
    vector<vector<char>> board = {{'o','a','a','n'},{'e','t','a','e'},{'i','h','k','r'},{'i','f','l','v'}};
    vector<string> words = {"oath","pea","eat","rain"};
    auto result = findWords(board, words);
    for (auto& w : result) cout << w << " ";
    cout << endl; // Expected: eat oath
    return 0;
}`,
      typescript: `function findWords(board: string[][], words: string[]): string[] {
  // Write your solution here
  return [];
}

// Test your solution
const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
console.log(findWords(board, ["oath","pea","eat","rain"]));
// Expected: ["eat","oath"]`,
    }
  },
  {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character. '*' Matches zero or more of the preceding element. The matching should cover the entire input string (not partial).",
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: "false",
        explanation: "'a' does not match the entire string 'aa'."
      },
      {
        input: 's = "aa", p = "a*"',
        output: "true",
        explanation: "'*' means zero or more of 'a'. 'a*' matches 'aa'."
      }
    ],
    templates: {
      javascript: `function isMatch(s, p) {
  // Write your solution here
  
}

// Test your solution
console.log(isMatch("aa", "a"));   // Expected: false
console.log(isMatch("aa", "a*"));  // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true`,
      python: `def is_match(s, p):
    # Write your solution here
    pass

# Test your solution
print(is_match("aa", "a"))   # Expected: False
print(is_match("aa", "a*"))  # Expected: True
print(is_match("ab", ".*")) # Expected: True`,
      java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a"));   // Expected: false
        System.out.println(isMatch("aa", "a*"));  // Expected: true
        System.out.println(isMatch("ab", ".*")); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

bool isMatch(string s, string p) {
    // Write your solution here
    return false;
}

int main() {
    cout << boolalpha << isMatch("aa", "a") << endl;   // Expected: false
    cout << boolalpha << isMatch("aa", "a*") << endl;  // Expected: true
    cout << boolalpha << isMatch("ab", ".*") << endl; // Expected: true
    return 0;
}`,
      typescript: `function isMatch(s: string, p: string): boolean {
  // Write your solution here
  return false;
}

// Test your solution
console.log(isMatch("aa", "a"));   // Expected: false
console.log(isMatch("aa", "a*"));  // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true`,
    }
  },
  {
    id: "serialize-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    description: "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
    examples: [
      {
        input: "root = [1,2,3,null,null,4,5]",
        output: "[1,2,3,null,null,4,5]",
        explanation: "Serialize tree to string and deserialize back to same tree."
      }
    ],
    templates: {
      javascript: `class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root) {
  // Write your solution here
  
}

function deserialize(data) {
  // Write your solution here
  
}

// Test your solution
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const serialized = serialize(root);
console.log(serialized);
const deserialized = deserialize(serialized);
console.log(serialize(deserialized) === serialized); // Expected: true`,
      python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def serialize(root):
    # Write your solution here
    pass

def deserialize(data):
    # Write your solution here
    pass

# Test your solution
root = TreeNode(1, TreeNode(2), TreeNode(3, TreeNode(4), TreeNode(5)))
serialized = serialize(root)
print(serialized)
deserialized = deserialize(serialized)
print(serialize(deserialized) == serialized)  # Expected: True`,
      java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Codec {
    public String serialize(TreeNode root) {
        // Write your solution here
        return "";
    }
    
    public TreeNode deserialize(String data) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        Codec codec = new Codec();
        TreeNode root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
        String serialized = codec.serialize(root);
        System.out.println(serialized);
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <sstream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode* l, TreeNode* r) : val(x), left(l), right(r) {}
};

string serialize(TreeNode* root) {
    // Write your solution here
    return "";
}

TreeNode* deserialize(string data) {
    // Write your solution here
    return nullptr;
}

int main() {
    TreeNode* root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
    string serialized = serialize(root);
    cout << serialized << endl;
    return 0;
}`,
      typescript: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function serialize(root: TreeNode | null): string {
  // Write your solution here
  return "";
}

function deserialize(data: string): TreeNode | null {
  // Write your solution here
  return null;
}

// Test your solution
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
const serialized = serialize(root);
console.log(serialized);`,
    }
  },
  {
    id: "longest-valid-parentheses",
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    description: "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
    examples: [
      {
        input: 's = "(()"',
        output: "2",
        explanation: "The longest valid parentheses substring is '()'."
      },
      {
        input: 's = ")()())"',
        output: "4",
        explanation: "The longest valid parentheses substring is '()()'."
      }
    ],
    templates: {
      javascript: `function longestValidParentheses(s) {
  // Write your solution here
  
}

// Test your solution
console.log(longestValidParentheses("(()")); // Expected: 2
console.log(longestValidParentheses(")()())")); // Expected: 4`,
      python: `def longest_valid_parentheses(s):
    # Write your solution here
    pass

# Test your solution
print(longest_valid_parentheses("(()"))    # Expected: 2
print(longest_valid_parentheses(")()())")) # Expected: 4`,
      java: `class Solution {
    public static int longestValidParentheses(String s) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestValidParentheses("(()")); // Expected: 2
        System.out.println(longestValidParentheses(")()())")); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

int longestValidParentheses(string s) {
    // Write your solution here
    return 0;
}

int main() {
    cout << longestValidParentheses("(()") << endl;    // Expected: 2
    cout << longestValidParentheses(")()())") << endl; // Expected: 4
    return 0;
}`,
      typescript: `function longestValidParentheses(s: string): number {
  // Write your solution here
  return 0;
}

// Test your solution
console.log(longestValidParentheses("(()")); // Expected: 2
console.log(longestValidParentheses(")()())")); // Expected: 4`,
    }
  },
  {
    id: "alien-dictionary",
    title: "Alien Dictionary",
    difficulty: "Hard",
    description: "There is a new alien language that uses the English alphabet. However, the order of the letters is unknown. You are given a list of strings words from the alien language's dictionary, sorted lexicographically by the rules of this new language. Return a string of the unique letters sorted in lexicographically increasing order by the new language's rules.",
    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
        explanation: "The order is: w -> e -> r -> t -> f"
      }
    ],
    templates: {
      javascript: `function alienOrder(words) {
  // Write your solution here
  
}

// Test your solution
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // Expected: "wertf"
console.log(alienOrder(["z","x"])); // Expected: "zx"`,
      python: `def alien_order(words):
    # Write your solution here
    pass

# Test your solution
print(alien_order(["wrt","wrf","er","ett","rftt"]))  # Expected: "wertf"
print(alien_order(["z","x"]))  # Expected: "zx"`,
      java: `import java.util.*;

class Solution {
    public static String alienOrder(String[] words) {
        // Write your solution here
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(alienOrder(new String[]{"wrt","wrf","er","ett","rftt"}));
        // Expected: wertf
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;

string alienOrder(vector<string>& words) {
    // Write your solution here
    return "";
}

int main() {
    vector<string> words = {"wrt","wrf","er","ett","rftt"};
    cout << alienOrder(words) << endl; // Expected: wertf
    return 0;
}`,
      typescript: `function alienOrder(words: string[]): string {
  // Write your solution here
  return "";
}

// Test your solution
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // Expected: "wertf"`,
    }
  },
  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string ''.",
    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: "The minimum window substring 'BANC' includes 'A', 'B', and 'C'."
      }
    ],
    templates: {
      javascript: `function minWindow(s, t) {
  // Write your solution here
  
}

// Test your solution
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"
console.log(minWindow("a", "a")); // Expected: "a"
console.log(minWindow("a", "aa")); // Expected: ""`,
      python: `def min_window(s, t):
    # Write your solution here
    pass

# Test your solution
print(min_window("ADOBECODEBANC", "ABC"))  # Expected: "BANC"
print(min_window("a", "a"))  # Expected: "a"
print(min_window("a", "aa")) # Expected: ""`,
      java: `import java.util.*;

class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }
    
    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
        System.out.println(minWindow("a", "a")); // Expected: a
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

string minWindow(string s, string t) {
    // Write your solution here
    return "";
}

int main() {
    cout << minWindow("ADOBECODEBANC", "ABC") << endl; // Expected: BANC
    cout << minWindow("a", "a") << endl; // Expected: a
    return 0;
}`,
      typescript: `function minWindow(s: string, t: string): string {
  // Write your solution here
  return "";
}

// Test your solution
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: "BANC"`,
    }
  }
];

export const getDifficultyColor = (difficulty: Difficulty) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/10 text-green-600 dark:text-green-400";
    case "Medium":
      return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400";
    case "Hard":
      return "bg-red-500/10 text-red-600 dark:text-red-400";
  }
};
