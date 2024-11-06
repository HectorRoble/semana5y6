Link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
Descripción: Determinar si es palindromo

function isPalindrome(x) {
    const cleanedString = x.toLowerCase().replace(/\s+/g, '');
    

    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
}