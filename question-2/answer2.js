// Original callbacks
const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        console.log(success);
    }, 500);
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500);
}

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({ 'error': 'delayed exception!' });
        }, 500);
    });
}


resolvedPromise()
    .then(result => console.log(result))   // Output: { message: 'delayed success!' }
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))   
    .catch(error => console.error(error)); // Output: { error: 'delayed exception!' }
