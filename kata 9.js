Link: https://www.codewars.com/kata/57280481e8118511f7000ffa/solutions/javascript
Description: Entrenamiento JS #18: Métodos del objeto String: concat(), split() y su buen amigo join()

function splitAndMerge(string, separator) {
    
    const words = string.split(' ');
    
    const mergedWords = words.map(word => word.split('').join(separator));
    
    return mergedWords.join(' ');
}
