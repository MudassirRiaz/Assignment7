// String Exercise
// 1. Write a ts program to find length of a string.
// var abc:string='mudassir'
// console.log("Length of String", abc.length)
// 2. Write a ts program to copy one string to another string.
// var abc:string='Mudassir'
// var def:string=abc
// console.log(def)
// 3. Write a ts program to concatenate two strings.
// var abc:string='Mudassir'
// var def:string='Riaz'
// console.log(abc.concat(def))
// 4. Write a ts program to compare two strings.
// var abc:string='Mudassir'
// var def:string='Riaz'
// if(abc==def)
// console.log("Strings are equal")
// else
// console.log("Strings are not equal")
// 5. Write a ts program to convert lowercase string to uppercase.
// var abc:string='mudassir'
// console.log(abc.toUpperCase())
// 6. Write a ts program to convert uppercase string to lowercase.
// var abc:string='MUDASSIR'
// console.log(abc.toLowerCase())
// 7. Write a ts program to toggle case of each character of a string.
// 8. Write a ts program to find total number of alphabets, digits or special character in a string.
// 9. Write a ts program to count total number of vowels and consonants in a string.
// 10. Write a ts program to count total number of words in a string.
// 11. Write a ts program to find reverse of a string.
// var abc:string='Mudassir'
// var rev:string;
// var l=abc.length
// for(var i=0;i<l; i++){  
//     for(var j=l;j>=0;j--)
//     console.log(abc[j])
// }
// 12. Write a ts program to check whether a string is palindrome or not.
// 13. Write a ts program to reverse order of words in a given string
// var abc:string='Mudassir'
// var rev:string;
// var l=abc.length
// for(var i=0;i<l; i++){  
//     for(var j=l;j>=0;j--)
//     console.log(abc[j])
// }
// 14. Write a ts program to find first occurrence of a character in a given string.
// var abc:string='Mudassir Riaz'
// console.log(abc.indexOf(abc[0]))
// 15. Write a ts program to find last occurrence of a character in a given string.
// var a:string="mudassir"
// var b:string;
// for(var i=0;i<a.length;i++){
//         // console.log(a[i])
//         b=a[i]
// }
// console.log(b)
// 16. Write a ts program to search all occurrences of a character in given string.
// var str:string='I love Programming. I love Pakistan'
// var tsrch:string='P'
// var b:number=str.length
// var count=0
// for(var i=0;i<=b;i++)
// {
//     if(str[i] == tsrch)
//     {
//         // console.log(tsrch, i);
//         count++
//     }
// }console.log("Numbers of",tsrch,"are", count)
// 17. Write a ts program to count occurrences of a character in given string.
//         var str='school'
//         var letter='c'
//         var count=0
// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) == letter) {
//         count += 1;
//     }
// }
// console.log(count)
// 18. Write a ts program to find highest frequency character in a string.
// 19. Write a ts program to find lowest frequency character in a string.
// 20. Write a ts program to count frequency of each character in a string.
// 21. Write a ts program to remove first occurrence of a character from string.
// 22. Write a ts program to remove last occurrence of a character from string.
// 23. Write a ts program to remove all occurrences of a character from string.
// 24. Write a ts program to remove all repeated characters from a given string.
// 25. Write a ts program to replace first occurrence of a character with another in a string.
// 26. Write a ts program to replace last occurrence of a character with another in a string.
// 27. Write a ts program to replace all occurrences of a character with another in a string.
// 28. Write a ts program to find first occurrence of a word in a given string.
// 29. Write a ts program to find last occurrence of a word in a given string.
// 30. Write a ts program to search all occurrences of a word in given string.
// 31. Write a ts program to count occurrences of a word in a given string.
// 32. Write a ts program to remove first occurrence of a word from string.
// 33. Write a ts program to remove last occurrence of a word in given string.
// 34. Write a ts program to remove all occurrence of a word in given string.
// 35. Write a ts program to trim leading white space characters from given string.
// 36. Write a ts program to trim trailing white space characters from given string.
// 37. Write a ts program to trim both leading and trailing white space characters from given string.
// 38. Write a ts program to remove all extra blank spaces from given string.
// conditional operators programming exercises
// 1. Write a ts program to find maximum between two numbers using conditional operator.
// var num1=789
// var num2=456
// let com=(num1<num2)?"num2 is greater":"num1 is greater"
// console.log(com)
// 2. Write a ts program to find maximum between three numbers using conditional operator.
//         var n1 = 5, n2 = 10, n3 = 15, max;
//         max = (n1 > n2) ?
//       (n1 > n3 ? n1 : n3) :
//       (n2 > n3 ? n2 : n3)
//         console.log( "Largest number among "
//            + n1 + ", " + n2 + " and "
//            + n3 + " is " + max + ".");
// 3. Write a ts program to check whether a number is even or odd using conditional operator.
// var num=45, ab;
// ab=(num%2==0)? "Number is even": "Number is odd"
// console.log(ab)
// 4. Write a ts program to check whether year is leap year or not using conditional operator.
// var num=2006, ab;
// ab=(num%4==0)? "Leap year": "Not Leap year"
//  console.log(ab)
// 5. Write a ts program to check whether character is an alphabet or not using conditional operator.
// var chr=123 ,ab;
// ab=(typeof chr=='string')?"Value is String":"Value is not String"
// console.log(ab)
// List of switch case programming exercises
// 1. Write a ts program to print day of week name using switch case.
// var day;
// switch (new Date().getDay()) {
//         case 0:
//           day = "Sunday";
//           break;
//         case 1:
//           day = "Monday";
//           break;
//         case 2:
//            day = "Tuesday";
//           break;
//         case 3:
//           day = "Wednesday";
//           break;
//         case 4:
//           day = "Thursday";
//           break;
//         case 5:
//           day = "Friday";
//           break;
//         case 6:
//           day = "Saturday";
//       }
//         console.log("Today is", day)      
// 2. Write a ts program print total number of days in a month using switch case.
//         var month=2
// switch(month)
// {
//     case 1: 
//         console.log("31 days");
//         break;
//     case 2: 
//     console.log("28/29 days");
//         break;
//     case 3: 
//     console.log("31 days");
//         break;
//     case 4: 
//     console.log("30 days");
//         break;
//     case 5: 
//     console.log("31 days");
//         break;
//     case 6: 
//     console.log("30 days");
//         break;
//     case 7: 
//     console.log("31 days");
//         break;
//     case 8: 
//     console.log("31 days");
//         break;
//     case 9: 
//     console.log("30 days");
//         break;
//     case 10: 
//     console.log("31 days");
//         break;
//     case 11: 
//     console.log("30 days");
//         break;
//     case 12: 
//     console.log("31 days");
//         break;
//     default: 
//     console.log("Invalid input! Please enter month number between 1-12");
// }
// 3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
//         var ch:string='c'
// switch(ch)
// {
//     case 'a': 
//     console.log("Vowel");
//         break;
//     case 'e': 
//     console.log("Vowel");
//         break;
//     case 'i': 
//     console.log("Vowel");
//         break;
//     case 'o': 
//     console.log("Vowel");
//         break;
//     case 'u': 
//     console.log("Vowel");
//         break;
//     case 'A': 
//     console.log("Vowel");
//         break;
//     case 'E': 
//     console.log("Vowel");
//         break;
//     case 'I': 
//     console.log("Vowel");
//         break;
//     case 'O': 
//     console.log("Vowel");
//         break;
//     case 'U': 
//     console.log("Vowel");
//         break;
//     default: 
//     console.log("Consonant");
// }
// 4. Write a ts program to find maximum between two numbers using switch case.
//         var num1=78
//         var num2=56
//         switch(num1 < num2)
//     {   
//         case true: 
//             console.log("%d is maximum", num2);
//             break;
//         case false: 
//             console.log("%d is maximum", num1);
//             break;
//     }
// 5. Write a ts program to check whether a number is even or odd using switch case.
// var num=33
// switch(num%2){
//         case 0:
//             console.log("%d is a even number",num);
//             break;
//         case 1:
//             console.log("%d is a odd number",num);
//         }
// 6. Write a ts program to check whether a number is positive, negative or zero using switch case.
//         var num=0
// switch (num > 0)
// {
//     case true:
//         console.log("%d is positive.", num);
//     break;
//     case false:
//         switch (num < 0)
//         {
//             case true: 
//                 console.log("%d is negative.", num);
//                 break;
//             case false:
//                 console.log("%d is zero.", num);
//                 break;
//         }
//     break;
// }
// 7. Write a ts program to find roots of a quadratic equation using switch case.
// var a=4, b=7, c=1;
// var root1, root2, imaginary;
// var discriminant;
// discriminant = (b * b) - (4 * a * c)
// // console.log(discriminant)
// switch(discriminant > 0)
// {
//     case true:
//         root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         console.log("Two distinct and real roots exists", Math.floor(root1), Math.floor(root2));
//         break;
//     case false:
//         switch(discriminant < 0)
//         {
//             case true:
//                 root1 = root2 = -b / (2 * a);
//                 imaginary = Math.sqrt(-discriminant) / (2 * a);
//                 console.log("Two distinct complex roots exists:",
//                  Math.floor(root1), Math.floor(imaginary), Math.floor(root2), Math.floor(imaginary));
//                 break;
//             case false:
//                 root1 = root2 = -b / (2 * a);
//                 console.log("Two equal and real roots exists:", Math.floor(root1), Math.floor(root2));
//                 break;
//         }
// }
// 8. Write a ts program to create Simple Calculator using switch case.
//         var first=56, second=67, op='*'
// switch (op) {
//         case '+':
//           console.log(first,"+", second,"=", first + second);
//           break;
//         case '-':
//           console.log( first,"-", second, "=" ,first - second);
//           break;
//         case '*':
//           console.log(first,"X", second, "=",first * second);
//           break;
//         case '/':
//           console.log( first,"/", second, "=",first / second);
//           break;
//         // operator doesn't match any case constant
//         default:
//           console.log("Operator is not correct");
//       }
