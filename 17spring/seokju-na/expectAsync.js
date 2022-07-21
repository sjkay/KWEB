import expect from 'expect';

class ExpectAsync {
    constructor(promise) {
        this.promise = promise;
    }

    async toBeRejectedWith(error) {
        try {
            await Promise.resolve(this.promise);
            return Promise.reject(`Expect promise to be rejected with '${error}'`);
        } catch (err) {
            expect(err).toEqual(error);
            return Promise.resolve();
        }
    }
}

export default promise => new ExpectAsync(promise);
