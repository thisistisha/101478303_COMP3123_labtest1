function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(mixedArray)) {
            
            const filteredArray = mixedArray
                .filter(item => typeof item === 'string')
                .map(item => item.toLowerCase());

            resolve(filteredArray);
        } else {
            reject('Input is not an array');
        }
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output: ['pizza', 'wings']
    .catch(error => console.error(error));
