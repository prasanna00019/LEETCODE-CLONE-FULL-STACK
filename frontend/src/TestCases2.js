export const TestCases_Data2={
    "66a4f95d356f18b4578af8b6":{  //POWER-OF-TWO
        "cpp":{
           "starter":"prasanna hai bro prasanna;\n"
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
}
