/**
 * our equivalent of axios or fetch - a promise-based API - returns a promise of a value
 */
export const asyncSimulator = ({email, password}) => {
    // the Promise() construct is an indication (to the engine) to run the enclosed code off the main thread - defer execution until the callstack is empty
    // doesn't the engine figure that out automatically when it meets setTimeout?
    // i believe returning a Promise is to be able to WAIT when the API is being called - otherwise await has no effect if a promise is not returned
    return new Promise((resolve, reject) => {
        // simulating a network request with setTimeout using a a delay of 1 second (1000 ms)
        setTimeout(() => {
            if (!!email && password === 'password123') {
                resolve();
            } else {
                reject('Invalide email or password');
            }
        }, 1000)
    });
}