//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function promisify(f) {
    return function (...args) {
        return new Promise(function (resolve, reject) {
            f(...args, function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

export function all(promises) {
    if (promises) {
        return promises.reduce(
            async (acc, promise) => (await acc).concat(await promise),
            Promise.resolve([])
        );
    } else {
        return Promise.resolve();
    }
}

export function allSettled(promises) {
    if (promises) {
        return promises.reduce(
            async (acc, promise) =>
                (await acc).concat(await promise.catch((err) => err)),
            Promise.resolve([])
        );
    } else {
        return Promise.resolve();
    }
}

export function race(promises) {
    if (promises) {
        return new Promise((resolve, reject) => {
            if (promises.length) {
                promises.forEach((promise) => promise.then(resolve, reject));
            } else {
                resolve([]);
            }
        });
    } else {
        return Promise.resolve();
    }
}

export function any(promises) {
    if (promises) {
        return new Promise((resolve, reject) => {
            if (promises.length) {
                promises.forEach((promise) => promise.then(resolve).catch(() => null));
            } else {
                resolve([]);
            }
            allSettled(promises).then(reject);
        });
    } else {
        return Promise.resolve();
    }
}
