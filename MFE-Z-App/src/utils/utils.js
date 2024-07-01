function timeout(DELAY) {
    return new Promise(resolve => setTimeout(resolve, DELAY));
}

export async function sleep(callBack, DELAY, ...args) {
    await timeout(DELAY);
    return callBack(...args);
}
