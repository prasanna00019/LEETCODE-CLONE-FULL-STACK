export const TestCases_Data = {
  "66a4f95d356f18b4578af8b5":{  //POWER-OF-TWO
      "cpp":{
         "starter":"#include<bits/stdc++.h>\nusing namespace std;\n"
          ,"output":`int main(){ bool ans=isPowerOfTwo(\${input});cout<<ans<<endl;}`
      },
      "java": {
        "starter": "public class PowerOfTwoChecker {\n",
        "output": `public static void main(String[] args) { PowerOfTwoChecker checker = new PowerOfTwoChecker();boolean ans = checker.isPowerOfTwo(\${input});
        System.out.println(ans); } }`
      },  
      "javascript":{
        "starter": "",
        "output": `console.log(isPowerOfTwo(\${input}));`
      },
      "c":{
        "starter": "#include <stdio.h>\n#include <stdbool.h>\n",
        "output": `int main() { bool ans = isPowerOfTwo(\${input}); printf("%d", ans); return 0; }`  
      },
      "python":{
        "starter": "",
      "output": `print(is_power_of_two(\${input}))`
      },
       "testcases": {
       "sample": [
         { "input": ["1"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49dc" } },
         { "input": ["16"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49dd" } }
         ],
       "all_test_cases": [
         { "input": ["1"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49de" } },
         { "input": ["16"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49df" } },
         { "input": ["3"], "output": "0", "_id": { "$oid": "66a4f50d035b5dc2e1cf49e0" } },
         { "input": ["1024"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49e1" } }
      ]
    },
},
"66a4f50d035b5dc2e1cf49db":{ //POWER-OF-THREE
    "cpp":{
         "starter":"#include<bits/stdc++.h>\nusing namespace std;\n"
          ,"output":`int main(){ bool ans=isPowerOfThree(\${input});cout<<ans<<endl;}`
      },
      "java": {
        "starter": "public class PowerOfThreeChecker {\n",
        "output": `public static void main(String[] args) { PowerOfThreeChecker checker = new PowerOfThreeChecker();boolean ans = checker.isPowerOfThree(\${input});
        System.out.println(ans); } }`
      },  
      "javascript":{
        "starter": "",
        "output": `console.log(isPowerOfThree(\${input}));`
      },
      "c":{
        "starter": "#include <stdio.h>\n#include <stdbool.h>\n",
        "output": `int main() { bool ans = isPowerOfThree(\${input}); printf("%d", ans); return 0; }`  
      },
      "python":{
        "starter": "",
      "output": `print(is_power_of_three(\${input}))`
      },
       "testcases": {
       "sample": [
         { "input": ["1"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49dc" } },
         { "input": ["16"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49dd" } }
         ],
       "all_test_cases": [
         { "input": ["9"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49de" } },
         { "input": ["45"], "output": "0", "_id": { "$oid": "66a4f50d035b5dc2e1cf49df" } },
         { "input": ["81"], "output": "1", "_id": { "$oid": "66a4f50d035b5dc2e1cf49e0" } },
         { "input": ["1024"], "output": "0", "_id": { "$oid": "66a4f50d035b5dc2e1cf49e1" } }
      ]
    },
}
,
"66a5dd3e84fae069fbc8c5ff":{ //EDIT-DISTANCE  
  "cpp": {
    "starter": "#include<bits/stdc++.h>\nusing namespace std;\n",
    "output": "int main() { int result = minDistance(\"${input}\", \"${input2}\"); cout << result << endl; return 0; }"
  },
  "java": {
    "starter": "public class EditDistanceCalculator {\n",
    "output": "public static void main(String[] args) { EditDistanceCalculator calculator = new EditDistanceCalculator(); int result = calculator.minDistance(\"${input}\", \"${input2}\"); System.out.println(result); } }"
  },
  "javascript": {
    "starter": "",
    "output": "console.log(minDistance(\"${input}\", \"${input2}\"));"
  },
  "c": {
    "starter": "#include <stdio.h>\n#include <string.h>\n",
    "output": "int main() { int result = minDistance(\"${input}\", \"${input2}\"); printf(\"%d\\n\", result); return 0; }"
  },
  "python": {
    "starter": "",
    "output": "print(min_distance(\"${input}\", \"${input2}\"))"
  },
  "testcases": {
    "sample": [
      { "input": ["horse","ros"], "output": "3", "_id": { "$oid": "66a5dd3e84fae069fbc8c600" } },
      { "input": ["intention", "execution"], "output": "5", "_id": { "$oid": "66a5dd3e84fae069fbc8c601" } }
    ],
    "all_test_cases": [
      { "input": ["horse", "ros"], "output": "3", "_id": { "$oid": "66a5dd3e84fae069fbc8c602" } },
      { "input": ["intention", "execution"], "output": "5", "_id": { "$oid": "66a5dd3e84fae069fbc8c603" } },
      { "input": ["abc","yabd"], "output": "2", "_id": { "$oid": "66a5dd3e84fae069fbc8c604" } },
      { "input": ["b","a"], "output": "1", "_id": { "$oid": "66a5dd3e84fae069fbc8c605" } }
    ]
  }
},
  "66a5dd8a84fae069fbc8c608":{  //LONGEST-COMMON-SUBSEQUENCE
    "cpp": {
      "starter": "#include<bits/stdc++.h>\nusing namespace std;\n",
      "output": "int main(){ int result = longestCommonSubsequence(\"${input}\",\"${input2}\"); cout << result << endl; }"
    },
    "java": {
      "starter": "public class LongestCommonSubsequence {\n",
      "output": "public static void main(String[] args) { LongestCommonSubsequence lcs = new LongestCommonSubsequence(); int result = lcs.longestCommonSubsequence(\"${input}\",\"${input2}\"); System.out.println(result); } }"
    },
    "javascript": {
      "starter": "",
      "output": "console.log(longestCommonSubsequence(\"${input}\",\"${input2}\"));"
    },
    "c": {
      "starter": "#include <stdio.h>\n",
      "output": "int main() { int result = longestCommonSubsequence(\"${input}\",\"${input2}\"); printf(\"%d\", result); return 0; }"
    },
    "python": {
      "starter": "",
      "output": "print(longest_common_subsequence(\"${input}\",\"${input2}\"))"
    },
    "testcases": {
      "sample": [
        {
          "input": ["abcde","ace"],
          "output": "3",
          "_id": { "$oid": "66a5dd8a84fae069fbc8c609" }
        },
        {
          "input": ["abc","abc"],
          "output": "3",
          "_id": { "$oid": "66a5dd8a84fae069fbc8c60a" }
        }
      ],
      "all_test_cases": [
        {
          "input": ["abcde","ace"],
          "output": "3",
          "_id": { "$oid": "66a5dd8a84fae069fbc8c60b" }
        },
        {
          "input": ["abc","abc"],
          "output": "3",
          "_id": { "$oid": "66a5dd8a84fae069fbc8c60c" }
        },
        {
          "input":["abc","def"],
          "output": "0",
          "_id": { "$oid": "66a5dd8a84fae069fbc8c60d" }
        },
        {
          "input": ["abcd","acd"],
          "output": "3",
          "_id": { "$oid": "66a5dd8a84fae069fbc8c60e" }
        }
      ]
    }
  },
    "66a5dec784fae069fbc8c611": {
      "cpp": {
        "starter": "#include<bits/stdc++.h>\nusing namespace std;\n",
        "output": "int main(){ int result = dayOfYear(${input}); cout << result << endl; }"
      },
      "java": {
        "starter": "public class DayOfYear {\n",
        "output": "public static void main(String[] args) { DayOfYear doy = new DayOfYear(); int result = doy.dayOfYear(${input}); System.out.println(result); } }"
      },
      "javascript": {
        "starter": "",
        "output": "console.log(dayOfYear(${input}));"
      },
      "c": {
        "starter": "#include <stdio.h>\n",
        "output": "int main() { int result = dayOfYear(${input}); printf(\"%d\", result); return 0; }"
      },
      "python": {
        "starter": "",
        "output": "print(day_of_year(${input}))"
      },
      "testcases": {
        "sample": [
          {
            "input": ["2019-01-09"],
            "output": "9",
            "_id": { "$oid": "66a5dec784fae069fbc8c612" }
          },
          {
            "input": ["2019-02-10"],
            "output": "41",
            "_id": { "$oid": "66a5dec784fae069fbc8c613" }
          }
        ],
        "all_test_cases": [
          {
            "input": ["2019-01-09"],
            "output": "9",
            "_id": { "$oid": "66a5dec784fae069fbc8c614" }
          },
          {
            "input": ["2019-02-10"],
            "output": "41",
            "_id": { "$oid": "66a5dec784fae069fbc8c615" }
          },
          {
            "input": ["2000-03-01"],
            "output": "61",
            "_id": { "$oid": "66a5dec784fae069fbc8c616" }
          },
          {
            "input": ["1900-12-31"],
            "output": "365",
            "_id": { "$oid": "66a5dec784fae069fbc8c617" }
          }
        ]
      }
    },
   "66a5df5184fae069fbc8c61b": {
    "cpp": {
      "starter": "#include<bits/stdc++.h>\nusing namespace std;\n",
      "output": "int main() { string result = minWindow(\"${input}\",\"${input2}\"); cout << result << endl; return 0; }"
    },
    "java": {
      "starter": "public class MinimumWindowSubstring {\n",
      "output": "public static void main(String[] args) { MinimumWindowSubstring mws = new MinimumWindowSubstring(); String result = mws.minWindow(\"${input}\",\"${input2}\"); System.out.println(result); } }"
    },
    "javascript": {
      "starter": "",
      "output": "console.log(minWindow(\"${input}\",\"${input2}\"));"
    },
    "c": {
      "starter": "#include <stdio.h>\n",
      "output": "int main() { char* result = minWindow(\"${input}\",\"${input2}\"); printf(\"%s\", result); return 0; }"
    },
    "python": {
      "starter": "",
      "output": "print(min_window(\"${input}\",\"${input2}\"))"
    },
    "problem": {
      "id": "66a5df5184fae069fbc8c61b",
      "name": "Minimum Window Substring",
      "description": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
      "examples": [
        {
          "input": ["ADOBECODEBANC","ABC"],
          "output": "BANC",
          "explanation": "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t."
        },
        {
          "input": ["a","a"],
          "output": "a",
          "explanation": "The entire string s is the minimum window."
        },
        {
          "input": ["a","aa"],
          "output": "",
          "explanation": "Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string."
        }
      ],
      "constraints": "m == s.length, n == t.length, 1 <= m, n <= 10^5, s and t consist of uppercase and lowercase English letters.",
      "category": "hard",
      "tags": ["Sliding Window", "String"],
      "solution_skeleton": {
        "javascript": "function minWindow(s, t) {\n  // Your code here\n  return \"\";\n}",
        "python": "def min_window(s, t):\n    # Your code here\n    return \"\"",
        "java": "public String minWindow(String s, String t) {\n    // Your code here\n    return \"\";\n}",
        "c": "char* minWindow(const char* s, const char* t) {\n    // Your code here\n    return \"\";\n}",
        "cpp": "string minWindow(string s, string t) {\n    // Your code here\n    return \"\";\n}"
      },
      "hints": [
        "Use two pointers to create a sliding window.",
        "Expand the window until it contains all characters of t.",
        "Try to minimize the window while maintaining all characters of t."
      ],
      "testcases": {
        "sample": [
          {
            "input": ["ADOBECODEBANC","ABC"],
            "output": "BANC",
            "_id": { "$oid": "66a5df5184fae069fbc8c61c" }
          },
          {
            "input": ["a","a"],
            "output": "a",
            "_id": { "$oid": "66a5df5184fae069fbc8c61d" }
          },
          {
            "input": ["a","aa"],
            "output": "",
            "_id": { "$oid": "66a5df5184fae069fbc8c61e" }
          }
        ],
        "all_test_cases": [
          {
            "input":["ADOBECODEBANC", "ABC"],
            "output": "BANC",
            "_id": { "$oid": "66a5df5184fae069fbc8c61f" }
          },
          {
            "input": ["a","a"],
            "output": "a",
            "_id": { "$oid": "66a5df5184fae069fbc8c620" }
          },
          {
            "input":[ "a","aa"],
            "output": "",
            "_id": { "$oid": "66a5df5184fae069fbc8c621" }
          },
          {
            "input": ["XYZOYZ", "XYZ"],
            "output": "XYZ",
            "_id": { "$oid": "66a5df5184fae069fbc8c622" }
          },
          {
            "input": ["ABCDEFG","EFG"],
            "output": "EFG",
            "_id": { "$oid": "66a5df5184fae069fbc8c623" }
          }
        ]
      }
    }
  }
  
  };